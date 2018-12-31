var smcosz = function() {

	var partnrDict = Sunline.getDict("partnr");//合作方
	var yeardtDict = Sunline.getDict("E_MONTH_");//月份
	var isnoenDict = Sunline.getDict("E_YES___");
	var crcycdDict = Sunline.getDict("E_CRCYCD");
	
	/*var plcdDict = Sunline.getDict("type", "/plcd", "diplcd","planna");//优惠计划代码
	var rgcdDict = Sunline.getDict("type", "/rgcd", "chrgcd","chrgna");//收费代码*/
	
	$("input[name='whmoth']").select2({data:yeardtDict,allowClear:true,	formatSelection: function(item){
		return item.dictName;
	},
    formatResult: function(item){
		return item.dictName;
	}});
	$("input[name='partnr']").select2({data:partnrDict,allowClear:true});
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='isnoen']").select2({data:isnoenDict,allowClear:true});
	//$("input[name='partnr']").select2("val","01");
	
	  var  initSelect =function() {
          //获取当前年份
          var currentYear = new Date().getFullYear();
          //系统的下一年
          var nextYear = currentYear + 1;
         
          //获取select
         // $("#year_select").val(nextYear);
          var select = $("select[name='yeardt']")
          
          //document.getElementById("year_select");
          for(var i=nextYear + 10;nextYear<=i;nextYear++){
          
          select.append(new Option(nextYear-1, nextYear-1));
          }
          select.val(currentYear);
		   
      }
	
	var handleTable = function() {
		var parsgrid = new Datatable();
		var parsurl = Sunline.ajaxPath("smy/qsmcon");
		var parssendData = [ "subsno","yeardt","whmoth"];

		parsgrid.init({
					src : $("#datatable_smy"),
					deleteData : parssendData,
					onSuccess : function(parsgrid) {
						qryCacheObj = 	parsgrid.getDataTable().context['0'].json.data;
						console.log(qryCacheObj);
						var total = 0;
						for(var i=0;i<qryCacheObj.length;i++){
							total+=qryCacheObj[i].subsno;
						}
						console.log(total);
					},
					onError : function(parsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : parsurl,
						},
						"columns" : [
								{
									"data" : "subsno",
									"sortable" : false,
									"searchable" : false,
									/*"render" : function(data, type, full) {
										for (var i = 0; i < rgcdDict.length; i++) {
											if (rgcdDict[i].id == data) {
												return rgcdDict[i].text;
											}
										}
										return data;
									}*/
								},
								{
									"data" : "partnr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
									for (var i = 0; i < partnrDict.length; i++) {
										if (partnrDict[i].id == data) {
											return partnrDict[i].text;
										}
									}
									return data;
								}
								
								},
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false,
									"render" : false
								},
								{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false,
									"render" : false
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" :  function(data, type, full) {
										for (var i = 0; i < crcycdDict.length; i++) {
											if (crcycdDict[i].id == data) {
												return crcycdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "yeardt",
									"sortable" : false,
									"searchable" : false,
									"render" : false/* function(data, type, full) {
										for (var i = 0; i < plcdDict.length; i++) {
											if (plcdDict[i].id == data) {
												return plcdDict[i].text;
											}
										}
										return data;
									}*/
								},
								{
									"data" : "whmoth",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yeardtDict.length; i++) {
											if (yeardtDict[i].id == data) {
												return yeardtDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "concif",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "contsm",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "conmam",
									"sortable" : false,
									"searchable" : false,
									"mRender" : function(data, type, full) {
									var text=	(data/10000).toFixed(2);
									
										return text;
									}
								},
								{
									"data" : "isnoen",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isnoenDict.length; i++) {
											if (isnoenDict[i].id == data) {
												return isnoenDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.subsno
												+","
												+data.yeardt
												+","
												+data.whmoth
												+
										         "'>编辑 </a>";
									}
								},
							 ]
					}
				});
		
		//parsgrid.bindTableDelete(parssendData);
		
		parsgrid.bindTableEdit(parssendData,function(nRowA){
			$("input[name='subsno']").attr("readOnly",true);//序号
			//$("input[name='subsno']").attr("readOnly",true);//序号
			$("input[name='whmoth']").attr("readOnly",true);//月份
			$("input[name='prodcd']").attr("readOnly",true);//产品号
			$("input[name='brchno']").attr("readOnly",true);//机构号
			$("input[name='crcycd']").attr("readOnly",true);//货币
			
			$('#yeardt').attr("disabled",true);//年份
			$("input[name='subsno']").val($(nRowA[0]).text()); 
			
			$("input[name='partnr']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			//$("input[name='partnr']").select2("val","1");
			$("input[name='prodcd']").val($(nRowA[2]).text());
			$("input[name='brchno']").val($(nRowA[3]).text());
			$("input[name='crcycd']").val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
			$("select[name='yeardt']").val($(nRowA[5]).text()); 
			$("input[name='whmoth']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
			$("input[name='concif']").val($(nRowA[7]).text()); 
			$("input[name='contsm']").val($(nRowA[8]).text());
			$("input[name='conmam']").val($(nRowA[9]).text());
			$("input[name='isnoen']").val($(nRowA[10]).text().substring($(nRowA[10]).text().indexOf("[")+1,$(nRowA[10]).text().indexOf("]"))).trigger("change");
			
		/*	for (var i = 0; i < isnoenDict.length; i++) {
				if (isnoenDict[i].name == $(nRowA[10]).text()) {
					var isno = isnoenDict[i].id;
				}
			}*/
			//alert(isno);
			//$("input[name='isnoen']").select2("val",isno);
			//$("input[name='isnoen']").val($(nRowA[7]).text());
			$("input[name='isinst']").val("0");
			
			$("#editparsModal").modal('show');
			$("#editparsModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editparsModal"))).hide();
	        	$('.alert-danger', $('form', $("#editparsModal"))).hide(); 
	        	$(".msg",$('form', $("#editparsModal"))).text("");
				parsgrid.submitFilter();
			});
		})
		
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_pars_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			
			$('#yeardt').attr("disabled",false);
			$('input', editform).removeAttr("readOnly");
			$('input', editform).val("").trigger("change");
			//$('input', editform).removeAttr("disabled");
			$("input[name='prodcd']").val("020010002");
			$("input[name='brchno']").val("0004");
			$("input[name='concif']").val("1000");
			$("input[name='contsm']").val("1000");
			$("input[name='conmam']").val("10000");
			$("input[name='prodcd']").attr("readOnly",true);//产品号
			$("input[name='brchno']").attr("readOnly",true);//机构号
			$("input[name='crcycd']").attr("readOnly",true);//货币
			$("input[name='subsno']").attr("readOnly",true);
			$('select', editform).val("").trigger("change");
			$("input[name='partnr']").select2("val","1");
			$("input[name='isnoen']").select2("val","1");
			$("input[name='crcycd']").select2("val","01");
			$("input[name='isinst']").val("1");
			$('#yeardt').val("2016");
			$("#editparsModal").modal('show');
			$("#editparsModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				parsgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_evnt").click(function(){
			//alert($("input[name='partnr']").val());
			if(Sunline.isNull($("input[name='partnr']").val())){
				bootbox.alert("合作方不能为空！");
				return;
			}
			if(Sunline.isNull($('#yeardt').val())){
				bootbox.alert("年份不能为空！");
				return;
			}
			if(Sunline.isNull($("input[name='whmoth']").val())){
				bootbox.alert("月份不能为空！");
				return;
			}
			$('form', $("#editparsModal")).submit();
		});
		
		var parsValid = Sunline.getValidate($('form', $("#editparsModal")),
				function() {
					var data = {};
					$.each($("input", $("#editparsModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					data.yeardt = $('#yeardt').val();
					   
					
					Sunline.ajaxRouter("smy/esmcon", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editparsModal"))).show();
                        	   $('.alert-danger', $('form', $("#editparsModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editparsModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editparsModal"))).show();                        	  
                          }
                          if(ret!=null && ret!=undefined && ret.retCode=='6004'){
//          					
          					if(ret.msg.substr(0,12)=='[Comm.E9999]'){
          						$(".msg",$('form', $("#editparsModal"))).text("该月份记录已存在！");
          					}
          					else{
        						bootbox.alert(ret.msg);
        					}
                          }
					});

				}
//				{
//					 
//				}
				);

		
	};
	
	// 时间插件
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
			initSelect();
		}
	}
}();