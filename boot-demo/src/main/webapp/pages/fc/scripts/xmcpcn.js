var xmcpcn = function() {

	var tqhq = "900101300199000015"//小马助贷提前还款代扣待清算 XM30019901-7
	//var tqhq = "900101300199000003"	
	
	
	var idtftpDict=Sunline.getDict("E_IDTFTP");//证件类型
	var crcycdDict=Sunline.getDict("E_CRCYCD");//币种

	var parsgrid = new Datatable();
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	//查询
	$('#submit').click(function(){
		parsgrid.setAjaxParam("lncfno",$('#q_lncfno').val());
		parsgrid.submitFilter();
	});
	//查询清空
	$('#cancle').click(function(){
		$('#q_lncfno').val("");
	});
	
		function cnlcil(){
		$("#query").removeClass("disabled");
	}
	
	var handleTable = function() {
		var parsurl = Sunline.ajaxPath("fc/xmcpcn");
//		var mtensendData = ["lncfno"];
		parsgrid.init({
					src : $("#datatable_pars"),
//					qrData : mtensendData,
					onSuccess : function(parsgrid) {
					},
					onError : function(parsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : parsurl,
						},
						"columns" : [
								{
									"data" : "lncfno",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "tranno",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "tresta",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "treres",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "custna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "idtfno",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < idtftpDict.length; i++) {
											if (idtftpDict[i].id == data) {
												return idtftpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "idtftp",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "cardno",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "brchna",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "totamo",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
					            		return formartM(data+"");
					            	}
								},
								{
									"data" : "resvam",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
					            		return formartM(data+"");
					            	}
								},
								{
									"data" : "tranam",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
					            		return formartM(data+"");
					            	}
								},
								{
									"data" : "trantm",
									"sortable" : false,
									"searchable" : false,
								}
								]
					}
				});
		
		var editform = $("#edit_form");
		
		var ckLncfno = function(lncfno){//调核心交易，回显
			var data = {lncfno:lncfno};
			Sunline.ajaxRouter("fc/xmqrtq", data, 'post',
				function(redata) {
					$('.msg', editform).text(redata.msg);
					if(redata.ret == "success"){
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
						$("input[name='crcycd']").removeAttr("readOnly",true);
//						$("input[name='mobile']").removeAttr("readOnly",true);
						
						//转换证件类型 id 到text
						for (var i = 0; i < idtftpDict.length; i++) {
							if (idtftpDict[i].id == redata.idtftp) {
								redata.idtftp = idtftpDict[i].text;
							}
						}
						
						//$('#idtfno2',editform).val(idtfno);
						$('#custna',editform).val(redata.custna);
						$('#idtftp',editform).val(redata.idtftp);
						$('#lncfno',editform).val(redata.lncfno);
						$('#idtfno',editform).val(redata.idtfno);
						$('#cardno',editform).val(redata.cardno);
						$('#brchno',editform).val(redata.brchno);
						$('#brchna',editform).val(redata.brchna);
						$('#koukuan',editform).val(formartM(redata.totamo+''));
						$('#totamo',editform).val(formartM(parseFloat(redata.totamo)+parseFloat(redata.rpedam)+''));  //应还金额(借据总额)
						$('#tranam',editform).val(formartM(parseFloat(redata.totamo)+''));//未还金额
						$('#resvam',editform).val(formartM(parseFloat(redata.resvam)+'')); //已扣款金额
						$('#mobile',editform).val(redata.teleno);
						$('#rpedam',editform).val(formartM(redata.rpedam+''));//已还金额
						$('#crcycd',editform).val(crcycdDict[0].text);//固定为人民币
						$('#termno',editform).val(redata.termno);
						ckLncfnoFlag = "true";
					} else {
						$("#btn_save_evnt").addClass("disabled");
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}
				});
		};
		
		$("input[name='lncfno']").change(function(){
			var lncfno = $('#lncfno').val().trim();
			if(lncfno!=""){
				ckLncfno(lncfno);
			}
			
		});
		
		// 新增窗口
		$("#add_pars_btn").bind("click", function() {
			$('.alert-danger', editform).hide();
			$('.alert-success', editform).hide();
			$('.msg', editform).text("");
			$('input', editform).val("").trigger("change");
			$("#editparsModal").modal('show');
			$("#btn_save_evnt").removeClass("disabled");
			$("#editparsModal").on("hide.bs.modal", function() {
				$('.alert-danger', editform).hide();
				$('.alert-success', editform).hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				parsgrid.submitFilter();
				
			});
			return false;
		});
		
		$("#btn_save_evnt").click(function(){
			
			$('form', $("#editparsModal")).submit();
//			$("#btn_save_evnt").addAttr("disable");
//			$("#btn_save_evnt").disable = true;
			$("#btn_save_evnt").addClass("disabled");
			$("#query").addClass("disabled");
			window.setTimeout(cnlcil, 60000);
		});
		$("#query").click(function(){
			var input={};
			Sunline.ajaxRouter(
		         	"fc/qrqianzhi", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		parsgrid.submitFilter();
		         	},
		         	function(redata){		         		
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);			
		});

		var mtenValid = Sunline.getValidate($('form', $("#editparsModal")),
			function() {
				var data = {};
				$.each($("input", $("#editparsModal")), function(i, n) {
					if (n.name != undefined&&n.name!=""&&n.name!=null) {
						//将币种值 从text装换为id 存数据库
						if(n.name == "crcycd"){
							for (var i = 0; i < crcycdDict.length; i++) {
								if (crcycdDict[i].text == n.value) {
									n.value =  crcycdDict[i].id;
								}
							}
						}
						data[n.name] = n.value;
					}
				});
				data['acctno'] = tqhq;
				
				Sunline.ajaxRouter("fc/adxmcp",data, 'post', function(ret) {
                     if(ret.ret==="success"){  
                    	$("#editparsModal").modal('hide');
   						//if (ret.flag == "CHPY") {
							bootbox.alert("扣款成功,请发起提前还款");
						/*} else if (ret.flag == "UNON") {
							bootbox.alert("银联申请扣款中,请一分钟后到提前还款扣款结果查询页面查询扣款情况");
						}else if(ret.flag == "YSPY"){
							bootbox.alert(ret.retMsg);
						}*/}
					else if (ret.ret==="deal"){
								$("#editparsModal").modal('hide');
		   						
									bootbox.alert("申请扣款中,请一分钟后到提前还款扣款结果查询页面查询扣款情况");
								 }
					else if(ret.ret==="fail"){                        	 
	                   	   $(".alert-success",$('form', $("#editparsModal"))).hide();
	                   	   $('.alert-danger', $('form', $("#editparsModal"))).show();                        	  
                      }
                      $(".msg",$('form', $("#editparsModal"))).text(ret.msg);
				}
			);

			}
		);
		
	};

	
//	 时间插件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();