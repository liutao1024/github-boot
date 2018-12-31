var Qrplafrela = function() {
	var grid = new Datatable();
	var plattpDict=Sunline.getDict("E_PLATTP");
	var stustpDict=Sunline.getDict("E_STUSTP");
	
	$("#plattp_n").select2({
		data : plattpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#stustp_n").select2({
		data : stustpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#plattp").select2({
		data : plattpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#stustp").select2({
		data : stustpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	var q_zjcgno;
	var handleTable = function(q_zjcgno) {

		var url = Sunline.ajaxPath("fm/qrfmac");
		if(!Sunline.isNull(q_zjcgno)){
        	grid.setAjaxParam("q_zjcgno",q_zjcgno);
        }

		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess: function (grid) {
			        	$('.table-container .alert-danger').css("display","none");
			        },
			        onError: function (grid) {	      
			        	console.info("It is error!");
			        },
					dataTable : { 
						"ajax" : {
							"url" : url, 
						},
						"columns" : [
								{
									"data" : "zjcgno",
									"sortable" : false,
									"searchable" : false
								},{ 
					            	"data": "plattp",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		for(var i=0 ; i<plattpDict.length ; i++){
					            			if(data == plattpDict[i].dictId){
					            				return plattpDict[i].dictName;
					            			}
					            		}
					            		return data;
					            	}
					            },{
									"data" : "actpur",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "acctno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "busino",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "headno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "headna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "opendt",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "stustp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
										for(var i=0 ; i<stustpDict.length ; i++){
					            			if(data == stustpDict[i].dictId){
					            				return stustpDict[i].dictName;
					            			}
					            		}
					            		return data;
					            	}
								},{
									"data" : "ouacid",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.zjcgno
												+ ","
												+ data.plattp
												+ ","
												+ data.actpur
												+ ","
												+ data.acctno
												+ ","
												+ data.busino
												+ ","
												+ data.headno
												+ ","
												+ data.headna
												+ ","
												+ data.stustp
												+ ","
												+ data.ouacid
												+ "'>编辑 </a>";
									}
								}]
					}
				});
		
		$('#add_btn').click(function(){
			$('#zjcgno_n').val(q_zjcgno);
			$('#plattp_n').select2("val","");
			$('#actpur_n').val("");
			$('#acctno_n').val("");
			$('#busino_n').val("");
			$('#headno_n').val("");
			$('#headna_n').val("");
			$('#stustp_n').select2("val","1");
			$('#ouacid_n').val("");
			$("#zjcgno_n").attr("readOnly",true);
	    	$('.modal-form .alert').css('display','none');
			$('.modal-form .form-group').removeClass('has-error');
			$('.modal-form .form-group .help-block').remove();
			$("#openModa").modal('show');
		});
		
		
		var sendData = [ "zjcgno", "plattp", "actpur", "acctno", "busino", "headno", "headna", "stustp", "ouacid"];
		
		grid.addBindEvent(".edit", "click", sendData,
				function(data) {
			$('#zjcgno').val(data.zjcgno);
			$('#plattp').select2("val",data.plattp);
			$('#actpur').val(data.actpur);
			$('#acctno').val(data.acctno);
			$('#busino').val(data.busino);
			$('#headno').val(data.headno);
			$('#headna').val(data.headna);
			$('#stustp').select2("val",data.stustp);
			$('#ouacid').val(data.ouacid);
			$("#zjcgno").attr("readOnly",true);
			$("#plattp").attr("readOnly",true);
			$("#stustp").attr("readOnly",true);
			//$("#acctno").attr("readOnly",true);
			$("#editModal").modal('show');
		});
	};
	
	$("#openModa").click(function(){
   	  $(".select-close-1").select2("close");
   	  $(".select-close-2").select2("close");
     });
		
	$("#editModal").click(function(){
   	  $(".select-close-3").select2("close");
   	  $(".select-close-4").select2("close");
     });
	//表单验证方法
	var editform = $("#modal-form");
	var editerror = $('.alert-danger', editform);
	var validator = editform.validate({
		errorElement : 'span',
		errorClass : 'help-block help-block-error',
		focusInvalid : false,
		ignore : "",
		rules : { // 验证规则
			zjcgno_n : {
				required : true,
			},
			plattp_n : {
				required : true,
			},
			acctno_n : {
				required : true,
			}
		},
		messages: {
        	zjcgno_n: {
                required: "存管商户号必填"
            },
            plattp_n: {
                required: "账户类型必填"
            },
            acctno_n: {
                required: "内部户账号必填"
            }
        },
		invalidHandler : function(event, validator) {
			editerror.show();
			Metronic.scrollTo(editerror, -200);
		},

		errorPlacement : function(error, element) {
			element.parent().append(error);
		},

		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},

		success : function(label, element) {
			var icon = $(element).parent('.input-icon').children('i');
			$(element).closest('.form-group').removeClass('has-error');
			icon.removeClass("fa-warning").addClass("fa-check");
		},
		submitHandler : function(form) {
			/*
			 * 提交数据,必须是json对象 返回也必须是json对象
			 */
			var data = {};
			$.each($("input", editform), function(i, n) {
				data[n.name] = n.value;
			});

			Sunline.ajaxRouter(editUrl, data, "post", function(redata) {
				$('.msg', editform).text(redata.retMsg);
				if (redata.retCode == "0000") {
					$('.alert-danger', editform).hide();
				} else {
					$('.alert-danger', editform).show();
				}
			}, function() {
				$('.msg', editform).text("请求出错!");
				$('.alert-danger', editform).show();
			}, "json");
		}
	});
	//新增保存
	$('#save_n').click(function(){
		if(!$('#modal-form').validate().form()){
			return ;
		}
		var zjcgno = $('#zjcgno_n').val();
		var plattp = $('#plattp_n').select2("val");
		var actpur = $('#actpur_n').val();
		var acctno = $('#acctno_n').val();
		var busino = $('#busino_n').val();
		var headno = $('#headno_n').val();
		var headna = $('#headna_n').val();
		var stustp = $('#stustp_n').select2("val");
		var ouacid = $('#ouacid_n').val();
		var input = {};
		input.zjcgno = zjcgno;
		input.plattp = plattp;
		input.actpur = actpur;
		input.acctno = acctno;
		input.busino = busino;
		input.headno = headno;
		input.headna = headna;
		input.stustp = stustp;
		input.ouacid = ouacid;
		Sunline.ajaxRouter(
	         	"fm/adfmac", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("新增成功！",function(){
	         			
	                   	$("#openModa").modal('hide');
	                   	grid.submitFilter();
	         		});
	         	},
	         	function(redata){    
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	true);
	});
	
	//编辑
	$('#btn_save_edit').click(function(){
		var zjcgno = $('#zjcgno').val();
		var plattp = $('#plattp').select2("val");
		var actpur = $('#actpur').val();
		var acctno = $('#acctno').val();
		var busino = $('#busino').val();
		var headno = $('#headno').val();
		var headna = $('#headna').val();
		var stustp = $('#stustp').select2("val");
		var ouacid = $('#ouacid').val();
		var input = {};
		input.zjcgno = zjcgno;
		input.plattp = plattp;
		input.actpur = actpur;
		input.acctno = acctno;
		input.busino = busino;
		input.headno = headno;
		input.headna = headna;
		input.stustp = stustp;
		input.ouacid = ouacid;
		Sunline.ajaxRouter(
	         	"fm/upfmac", 
	         	 input,
	         	"POST",
	             function(ret){
	         		if(ret.retCode!='0000'){
	         			bootbox.alert(ret.retMsg);
	         			return;
	         		}
	         		bootbox.alert("编辑成功！",function(){
	         			
	                   	$("#editModal").modal('hide');
	                   	grid.submitFilter();
	         		});
	         	},
	         	function(ret){    
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	true);
	});
		
	return {
		init : function(q_zjcgno) {
			handleTable(q_zjcgno);
		}
	}
}();