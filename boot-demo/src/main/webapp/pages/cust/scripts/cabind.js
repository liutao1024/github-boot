var Cabind = function() {
	var grid = new Datatable();
	var idtftpDict=Sunline.getDict("E_CORP_IDTF");
	var cuactpDict=Sunline.getDict("E_CUACTP");
	
	$("#cuactp_n").select2({
		data : cuactpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	var formartM = function(value){
		value = value.toString();
		if(value.toString().indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var q_custno;
	var q_acctno;
	var q_custna;
	var q_status;
	var content = $('#outCa_load');//配置外部卡绑定子页面
	var handleTable = function(q_custno) {

		var url = Sunline.ajaxPath("cust/qrbind");
		if(!Sunline.isNull(q_custno)){
        	grid.setAjaxParam("q_custno",q_custno);
        }
		grid.setAjaxParam("q_acctno","");
		grid.setAjaxParam("q_custna","");
		grid.setAjaxParam("q_status","1");
		
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
									"data" : "custno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "acctno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "custna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "idtftp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
										for(var i=0 ; i<idtftpDict.length ; i++){
					            			if(data == idtftpDict[i].dictId){
					            				return idtftpDict[i].dictName;
					            			}
					            		}
					            		return data;
					            	}
								},{
									"data" : "idtfno",
									"sortable" : false,
									"searchable" : false
								},{ 
					            	"data": "servno",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "cuactp",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "crctbl",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartM(data);
					            	}
					            },{ 
					            	"data": null,
					            	"sortable": false,
					            	"searchable": false,
					            	"render": function (data, type, full) {
					            		return "<a class='outCa' href='javascript:;' data-src='" + data.acctno+ "'>绑定卡号</a>";
					            	}
					            },{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.acctno
												+ "'>解除绑定</a>";
									}
								} ]
					}
				});
		
		$('#add_btn').click(function(){
			$('#custno_n').val(q_custno);
			$('#acctno_n').val("");
			$('#headno_n').val("");
			$('#servno_n').val("");
			$('#cuactp_n').select2("val","01");
			$("#custno_n").attr("readOnly",true);
			$("#cuactp_n").attr("readOnly",true);
	    	$('.modal-form .alert').css('display','none');
			$('.modal-form .form-group').removeClass('has-error');
			$('.modal-form .form-group .help-block').remove();
			$("#openModa").modal('show');
		});
		
		
		var sendData = [ "acctno"];
		grid.addBindEvent(".delete", "click", sendData,
				function(data) {
			bootbox.confirm("是否确定解除绑定", function(result) {
				if(!result){
            		return;
            	}
        	     	var input = {};
		            		  	input.acctno = data.acctno;

		            			Sunline.ajaxRouter(
		            		        	"cust/debind", 
		            		        	 input,
		            		        	"POST",
		            		            function(ret){
		            		        		if (ret.ret === "success") {
		            		        			
		            		        			bootbox.alert("删除成功！"); 
		            		        			grid.submitFilter();
		            		        			
		            		        		} else {
		            		        			bootbox.alert(ret.retMsg);
		            		        		}
		            		        	},
		            		        	function(ret){
		            		        		console.info(ret);
		            		        		bootbox.alert(ret.msg);
		            		        	},
		            		        	"json",
		            		        	false); 
        	});
		});
		
		//绑卡信息
        grid.addBindEvent(".outCa", "click", ["acctno"],
				function(data) {
        	console.log(data);
        	content.html('');
    	    name="outCaInfo";
    	    
            $.ajax({
                type: "GET",
                url: "../cust/"+name,
                dataType: "html",
                success: function(res) 
                {    
                    content.html(res);
                    content.ready(function(){               	
                    	  Metronic.initUniform();
                    	  try{      
                    		  OutCaInfo.init(data.acctno);
                    	  }catch(e){
                    		  bootbox.alert("子页面加载失败！");
                    	  }
                    });             
                },
                error: function(xhr, ajaxOptions, thrownError)
                {
                },
                async: false
            });
            $("#outCaModal").modal('show');
		});   
        
	};
	
	$("#openModa").click(function(){
   	  $(".select-close-1").select2("close");
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
			custno_n : {
				required : true,
			},
			acctno_n : {
				required : true,
			},
			servno_n : {
				required : true,
			},
			cuactp_n : {
				required : true,
			}
		},
		messages: {
			custno_n: {
                required: "对公账号必填"
            },
            acctno_n: {
                required: "内部户账号必填"
            },
            servno_n: {
                required: "渠道号必填"
            },
            cuactp_n: {
                required: "对公账户类型必填"
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
		var custno = $('#custno_n').val();
		var acctno = $('#acctno_n').val();
		var servno = $('#servno_n').val();
		var cuactp = $('#cuactp_n').select2("val");
		var input = {};
		input.custno = custno;
		input.acctno = acctno;
		input.servno = servno;
		input.cuactp = cuactp;
		Sunline.ajaxRouter(
	         	"cust/carela", 
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
		
	return {
		init : function(q_custno) {
			handleTable(q_custno);
		}
	}
}();