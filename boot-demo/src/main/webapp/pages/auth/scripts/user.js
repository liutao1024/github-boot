var User = function () {
	
	   var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("auth/allUser"); 
		var editUrl;
		var table=$("#person_ajax");
	    var editform = $("#edit_form");
	    var roleurl =  Sunline.ajaxPath("auth/allUserRole");
 		var editroleurl;
 		var roletable = $("#role_auth_ajax");
 		var setgrid = new Datatable();
 		var setRoleform = $("#setRoleModal");
 		var sendRoleData = [ "registerCd", "authType", "roleCd", "userCd" ];
	    var userdata;

 	 	//select字典获取	
 	 		var userstDict=Sunline.getDict("userst");
 	 		var uslgstDict=Sunline.getDict("uslgst");
 	 		var usformDict=Sunline.getDict("E_USFORM");
 	 		var userlvDict=Sunline.getDict("E_USERLV");
 	 		var brchDict=Sunline.getDict("","/brch","brchno","brchna");
 	 		$("#usform").select2({
 	 			data:usformDict,
 	 			allowClear:true
 	 		});
 	 		$("#userst").select2({
 	 			data:userstDict,
 	 			allowClear:true
 	 		});
 	 		$("#brchno").select2({
 	 			data:brchDict,
 	 			allowClear:true
 	 		});
 	 		$("#userlv").select2({
 	 			data:userlvDict,
 	 			allowClear:true
 	 		});
		//修改窗口
		var toEditModal = function(nRowA){
			//赋值
			$('#userid').attr("readOnly",true);
			$('#brchno').attr("readOnly",true);
			$('#userid').val($(nRowA[0]).text());  
			$('#userna').val($(nRowA[1]).text());
			$('#brchno').val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$('#pwaect').val($(nRowA[3]).text());  
			$('#userst').val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
//			$('#usform').val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$('#userlv').val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
			 editUrl = "auth/upuser"; 
           	$("#editModal").modal('show');
		}
		
		grid.init({
	        src: table,
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            
	        },
	        onError: function (grid) {
	            
	        },
	        dataTable: {  
	            "ajax": {
	                "url": url, 
	            },
	            "bDestroy" :true,
	            "bServerSide":true,
	            "columns" : [{ 
	            		"data": "userid",
	            		"sortable": false,
	            		"searchable": false
	            	},{ 
	            		"data": "userna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "brchno",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            	    for (var i = 0; i < brchDict.length; i++) {
		                          if (brchDict[i].id == data) {
		                            return brchDict[i].text;
		                          }
		                        }
		            	    return "";
		            	}
		            },{ 
		            	"data": "pwaect",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "userst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            	    for (var i = 0; i < userstDict.length; i++) {
		                          if (userstDict[i].id == data) {
		                            return userstDict[i].text;
		                          }
		                        }
		            	    return "";
		            	}
		            },{ 
		            	"data": "uslgst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            	    for (var i = 0; i < uslgstDict.length; i++) {
		                          if (uslgstDict[i].id == data) {
		                            return uslgstDict[i].text;
		                          }
		                        }
		            	    return "";
		            	}
		            },{ 
		            	"data": "userlv",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            	    for (var i = 0; i < userlvDict.length; i++) {
		                          if (userlvDict[i].id == data) {
		                            return userlvDict[i].text;
		                          }
		                        }
		            	    return "";
		            	}
		            },{ "data": null,
		            	"width": "20%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.user_cd + "'>编辑 </a>";
		            	}
		            },{ "data": null,
		            	"width": "20%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='rspword' href='javascript:;' data-src='" + data.userid + "'>重置密码</a>";
		            	}
		            },{ "data": null,
		            	"width": "20%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit_setting' href='javascript:;' data-src='" + data.userid +","+data.brchno+ "'>配置角色</a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='deluser' href='javascript:;' data-src='" + data.userid + "'>注销</a>";
		            	}
		            }
	            ]
	        }
	    });
		 var sendData = ["userid","brchno"];
		 //绑定删除事件
        grid.addBindEvent(".deluser","click",sendData, function(data){      
        	var redata={};
        	redata.userid=data.userid
        	  bootbox.confirm("确定要注销此用户么?", function(result) {
	            	if(!result){
	            		return;
	            	}
	            	Sunline.ajaxRouter("auth/allUser",redata,"DELETE",function(data,status){ 
     					$('.msg', editform).text(data.retMsg);
     					if(data.ret=="success"){
     						bootbox.alert("注销成功");
     						grid.submitFilter();
     					}else{		
     						bootbox.alert(data.msg);							
     					}
     					},function(){
     						bootbox.alert("请求失败");	
     					},"json");
        	  
        	  });
        	
        });
        grid.bindTableEdit(sendData,toEditModal);
        //绑定角色设置列表
        grid.addBindEvent(".edit_setting","click",sendData, function(data){   
        	userdata=data;
     		setgrid.setAjaxParam('userCd', userdata.userid);
     		setgridInit(); 
        	$("#edit_setting").modal("show");   
        	var roleDict=Sunline.getDict("","/role","authType","roleCd");
 	 		$("#Auth_roleCd").select2({
 	 			data:roleDict
 	 		});
 	 		// 绑定删除事件
 	 		setgrid.bindTableDelete(sendRoleData, null, function(data) {
	 	 			bootbox.alert(data.msg);
	 	 			setgrid.submitFilter();
	 	 		});	
 	 		 // 绑定新增userrole窗口
 	 		$("#add_role_btn", $("#add_role_set")).live("click", function() {
 	 			editroleurl = "auth/addUserRole";
 	 			setRoleform.modal('show');
 	 			return false;
 	 		});
        }); 
        
        //下拉框收回
        $("#setRoleModal").click(function(){
         	  $(".select-close-1").select2("close");
           });
        //重置密码
        grid.addBindEvent(".rspword","click",sendData, function(data){  
          var redata={};
          redata.userid=data.userid
    	  bootbox.confirm("确定要重置密码?", function(result) {
            	if(!result){
            		return;
            	}
            	Sunline.ajaxRouter("auth/urpswd",redata,"post",function(data,status){ 
 					$('.msg', editform).text(data.retMsg);
 					if(data.ret=="success"){
 						bootbox.alert("重置成功");
 					}else{		
 						bootbox.alert(data.msg);							
 					}
 					},function(){
 						bootbox.alert("请求失败");	
 					},"json");       	  
    	  });          	      	
        });  
             var editerror = $('.alert-danger', editform);
             var editsuccess = $('.alert-success', editform);
             var validator=editform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则      
                	 userid : 
 	                {
 	                	required : true,
 	                	rangelength:[5,5],
 	                	number:true
 	                },   
 	               userna : {
 	                	required : false,
 	                	rangelength:[1,20]               	
 	                },
 	               brchno : 
 	                {
 	                	required : true,
 	                	rangelength:[2,19]	                	
 	                },
 	               usform :
 	                {
 	                	required : false,
 	                 	maxlength:1             	
 	                }
 	            },
                 invalidHandler: function (event, validator) {              
                     editsuccess.hide();
                     editerror.show();
                     Metronic.scrollTo(editerror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },
                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },
                unhighlight: function (element) { 
                     
                 },
                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 },
                 submitHandler: function (form) {
                	  /*
            	         * 提交数据,必须是json对象
            	         * 返回也必须是json对象
            	         */
     		        	var data={};
     	           	 $.each($("input",editform),function(i,n){    	           		
     	           		 data[n.name]=n.value;
     	           	 });
     	           	Sunline.ajaxRouter(editUrl,data,"post",function(data,status){ 
     					$('.msg', editform).text(data.msg);
     					if(data.ret=="success"){
     						$('.alert-success', editform).show();
     						$('.alert-danger', editform).hide(); 
     					   	$('#userid',editform).attr("readOnly",true);
     			         	$('#brchno',editform).attr("readOnly",true);
     					}else{		
     						$('.alert-success', editform).hide();
     						$('.alert-danger', editform).show(); 							
     					}
     					},function(){
     						$('.msg', editform).text("网络异常!");
     						$('.alert-success', editform).hide();
     						$('.alert-danger', editform).show(); 
     					},"json"); 
                 }
             });
             //新增窗口
             $("#add_new_person").click(function(){	  
             	$('input',editform).attr("readOnly",false);
             	validator.resetForm();
              	$('.msg', editform).text("");
              	editerror.hide();
              	editsuccess.hide();      
             	$('.form-group').removeClass('has-error').removeClass("has-success");
             	$('input',editform).val("").trigger("change");
             	 editUrl = "auth/adduser"; 
             	$("#editModal").modal('show');	        	
             	
             }); 
             
             //编辑表单验证结束             
             $("#btn_save").click(function(){
            	 validator.resetForm();
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	        	$('.alert-danger', $('#edit_form')).hide();
 	        });
 	        $("#editModal").on("hide.bs.modal",function(){
 	        	$('#userid',editform).attr("readOnly",true); 	  
 	         	$('#brchno',editform).attr("readOnly",true);
 	        	validator.resetForm();
 	         	$('.msg', editform).text("");
 	         	editerror.hide();
 	         	editsuccess.hide();      
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	        	grid.submitFilter();       	
 	        });   
 	        	
 	 	//关闭角色配置userrole	
 	 	   $("#edit_setting").on("hide.bs.modal",function(){
 	 		 $("#role_auth_ajax").off("click",".delete");
 	 		$("#add_role_btn", $("#add_role_set")).die("click");
 	       	setgrid.clearAjaxParams;       	
 	       }); 
 	 		/*
 	 		 * 角色表单验证方法
 	 		 */

 	 		var roleediterror = $('.alert-danger', setRoleform);
 	 		var roleeditsuccess = $('.alert-success', setRoleform);
 	 		var roleValidator = $("#edit_role_form").validate(
 	 				{
 	 					errorElement : 'span',
 	 					errorClass : 'help-block help-block-error',
 	 					focusInvalid : false,
 	 					ignore : "",
 	 					rules : { 
 	 					},

 	 					invalidHandler : function(event, roleValidator) {
 	 						roleeditsuccess.hide();
 	 						roleediterror.show();
 	 						Metronic.scrollTo(roleediterror, -200);
 	 					},

 	 					errorPlacement : function(error, element) {
 	 						element.parent().append(error);
 	 					},

 	 					highlight : function(element) {
 	 						$(element).closest('.form-group').removeClass(
 	 								"has-success").addClass('has-error');
 	 					},

 	 					unhighlight : function(element) {

 	 					},

 	 					success : function(label, element) {
 	 						var icon = $(element).parent('.input-icon').children(
 	 								'i');
 	 						$(element).closest('.form-group').removeClass(
 	 								'has-error').addClass('has-success'); 
 	 						icon.removeClass("fa-warning").addClass("fa-check");
 	 					},
 	 					submitHandler : function(form) {
 	 				        /*
 	 				         * 提交数据,必须是json对象
 	 				         * 返回也必须是json对象
 	 				         */
 	 						var data = {};var acd=$("#Auth_roleCd").select2('data');
 	 						data['roleCd']=acd.text.substring(0,acd.text.indexOf("["));
 	 						data['authType']=$("#Auth_roleCd").select2('data').id;
 	 						data.userCd=userdata.userid;
 	 						Sunline.ajaxRouter(editroleurl, data, "post", function(
 	 								data, status) {
 	 							$('.msg', setRoleform).text(data.msg);
 	 							if (data.ret == "success") {
 	 								$('.alert-success', setRoleform).show();
 	 								$('.alert-danger', setRoleform).hide();
 	 								$('#registerCd', setRoleform).attr("readOnly",
 	 										true);
 	 								$('#authType', setRoleform).attr("readOnly",
 	 										true);
 	 								$('#roleCd', setRoleform)
 	 										.attr("readOnly", true);
 	 							} else {
 	 								$('.alert-success', setRoleform).hide();
 	 								$('.alert-danger', setRoleform).show();
 	 							}
 	 						}, function() {
 	 							$('.msg', setRoleform).text("请求出错!");
 	 							$('.alert-success', setRoleform).hide();
 	 							$('.alert-danger', setRoleform).show();
 	 						}, "json");
 	 					}
 	 				});
 	 	
 	 		// 绑定关闭处理setRoleform
 	 		$(".closeModal ", setRoleform).click(
 	 				function() {
 	 					roleValidator.resetForm();
 	 					$('.msg', setRoleform).text("");
 	 					roleediterror.hide();
 	 					roleeditsuccess.hide();
 	 					$('.form-group', setRoleform).removeClass('has-error')
 	 							.removeClass("has-success");
 	 					setgrid.submitFilter();
 	 				}); 		
 		/*
 		 * 初始化table
 		 */
 	 		var setgridInit = function() {
 	 			$("#add_role_set").append(
 	 							"<div class='table-actions-wrapper'><span></span>"
 	 									+ "<button id='add_role_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
 	 			setgrid.init({
 	 						src : roletable,
 	 						deleteData : sendRoleData,
 	 						onSuccess : function(setgrid) {

 	 						},
 	 						onError : function(setgrid) {

 	 						},
 	 						dataTable : {
 	 							"ajax" : {
 	 								"url" : roleurl, 

 	 							},
 	 							"bDestroy" : true,
 	 							"bServerSide" : true,
 	 							"columns" : [
 	 									{
 	 										"data" : "registerCd",
 	 										"sortable" : false,
 	 										"searchable" : false
 	 									},
 	 									{
 	 										"data" : "authType",
 	 										"sortable" : false,
 	 										"searchable" : false
 	 									},
 	 									{
 	 										"data" : "roleCd",
 	 										"sortable" : false,
 	 										"searchable" : false
 	 									},
 	 									{
 	 										"data" : "userCd",
 	 										"sortable" : false,
 	 										"searchable" : false
 	 									},
 	 									{
 	 										"data" : null,
 	 										"sortable" : false,
 	 										"searchable" : false,
 	 										"render" : function(data, type, full) {
 	 											return "<a class='delete' href='javascript:;' data-src='"
 	 													+ data.registerCd
 	 													+ ","
 	 													+ data.authType
 	 													+ ","
 	 													+ data.roleCd 
 	 													+","
 	 													+data.userCd+"'>删除 </a>";
 	 										}
 	 									} ]
 	 						}
 	 					});	 		

 	 		};
 	 			
 	}
	return {
        init: function () {
            handleTable();     
        }

    };
	
}();