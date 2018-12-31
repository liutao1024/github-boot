var OutCaInfo = function() {
	var grid = new Datatable();

	var q_acctno;
	var q_status;
	var handleTable = function(q_acctno) {

		var url = Sunline.ajaxPath("cust/qrouca");
		if(!Sunline.isNull(q_acctno)){
        	grid.setAjaxParam("q_acctno",q_acctno);
        }
		grid.setAjaxParam("q_status","1");
		
		grid.init({
					src : $("#data_ajax"),
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
									"data" : "cardno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "acctna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "brchna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "binddt",
									"sortable" : false,
									"searchable" : false
								},{ 
					            	"data": null,          	
					            	"sortable": false,
					            	"searchable": false,
					            	"render": function (data, type, full) {	
					            		return "<a class='delete' href='javascript:;' data-src='" + data.cardno + "'>解除绑定</a>";	            
					            	}
					            }]
					}
				});
		var sendData = [ "cardno"];
		grid.addBindEvent(".delete", "click", sendData,
				function(data) {
			bootbox.confirm("是否确定解除绑定", function(result) {
				if(!result){
            		return;
            	}
        	     	var input = {};
		            		  	input.acctno = q_acctno;
		            		  	input.cardno = data.cardno;

		            			Sunline.ajaxRouter(
		            		        	"cust/decaou", 
		            		        	 input,
		            		        	"POST",
		            		            function(ret){
		            		        		if (ret.ret === "success") {
		            		        			
		            		        			bootbox.alert("解绑成功！"); 
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
		
		$('#add_cabin').click(function(){
			$('#b_acctno').val(q_acctno);
			$('#b_cardno').val("");
			$('#b_brchno').val("");
			$('#b_acctna').val("");
			$('#b_brchna').val("");
			$("#b_acctno").attr("readOnly",true);
	    	$('.modal-form .alert').css('display','none');
			$('.modal-form .form-group').removeClass('has-error');
			$('.modal-form .form-group .help-block').remove();
			$("#new_addModa").modal('show');
		});
		
		//表单验证方法
		var editform = $("#outerCa-form");
		var editerror = $('.alert-danger', editform);
		var validator = editform.validate({
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules : { // 验证规则
				b_acctno : {
					required : true,
				},
				b_cardno : {
					required : true,
				}
			},
			messages: {
				b_acctno: {
	                required: "内部户账号必填"
	            },
	            b_cardno: {
	                required: "外部卡号必填"
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
		$('#save_cabin').click(function(){
			if(!$('#outerCa-form').validate().form()){
				return ;
			}
			var acctno = $('#b_acctno').val();
			var cardno = $('#b_cardno').val();
			var brchno = $('#b_brchno').val();
			var acctna = $('#b_acctna').val();
			var brchna = $('#b_brchna').val();

			var input = {};
			input.acctno = acctno;
			input.cardno = cardno;
			input.brchno = brchno;
			input.acctna = acctna;
			input.brchna = brchna;
			Sunline.ajaxRouter(
		         	"cust/oucabi", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("新增成功！",function(){
		         			
		                   	$("#new_addModa").modal('hide');
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){    
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
	};
		
	return {
		init : function(q_acctno) {
			handleTable(q_acctno);
		}
	}
}();