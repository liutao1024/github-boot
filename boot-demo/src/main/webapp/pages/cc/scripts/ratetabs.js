var RateTabs=function(){
	var tierfgDict = Sunline.getDict("tierfg");//利息累计计算方式
	$("#edittypeModal input[name='intiri']").select2({
		data : tierfgDict,
		allowClear : true
	});
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/ratetabs");
		var sendData = ["intbid","intdes"];
		var editUrl;
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						
					},
					onError : function(grid) {
						
					},
					dataTable : { 
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "intbid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "intdes",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "basday",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "intiri",
									"sortable" : false,
									"searchable" : false,
									"render":function(data,type,full){
					        			for(var i=0; i<tierfgDict.length; i++){
					        				if(tierfgDict[i].id == data){
					        					return tierfgDict[i].dictName;
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
										return "<a class='edit_setting' href='javascript:;' data-src='"
												+ data.intbid + "'>比率配置 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.intbid+ "'>删除 </a>";
									}
								} ]
					}
				});
		
		var rliOption={
				 rligrid:new Datatable(),
				 torliEditForm:function(nRowA){
					  $('#bl_intbid').attr("readOnly",true);
					  $('#rateid').attr("readOnly",true);
					  $('#bl_intbid').val(rliOption.intbid);
					  $('#rateid').val($(nRowA[0]).text()); 
					  $('#ratexx').val($(nRowA[1]).text()); 
					  $('#maxamt').val($(nRowA[2]).text()); 
					  $('#addamt').val($(nRowA[3]).text()); 
					  //editrliurl = "cc/edratedefi"; 
					  $("#editfenModal").modal("show");
				  },
				  sendData:["rateid"], 
				  rateid:""
			  }
		 grid.addBindEvent(".edit_setting","click",["intbid"], function(data){ 
			 rliOption.rligrid.setAjaxParam("intbid",data.intbid);
     		 rliOption.intbid=data.intbid;
     		 RateDefi.init(rliOption);
     		$("#add_bl_set").append(
					"<div class='table-actions-wrapper'><span></span>"
							+ "<button id='add_bl_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
     		 $("#bilv_setting").modal("show");	
	      });
		//关闭比率页面清除数据
		$("#bilv_setting").live("hide.bs.modal",function(){
     	   $("#bilv_ajax").off("click",".delete");
     	  $("#add_bl_set").die("click");
     	  rliOption.rligrid.clearAjaxParams;    
        });
		//关闭修改/新增比率页面是刷新显示页面
		 $("#editfenModal").live("hide.bs.modal",function(){				     
			 $('.msg', $("#editfenModal")).text("");	
			 	$('.form-group').removeClass('has-error').removeClass("has-success");
	            //fenvalidator.resetForm();	
			 	$('.form-group').removeClass('has-error').removeClass("has-success");
			 	rliOption.rligrid.submitFilter(); 
	        });    
		
		
		show =function(){
				$(".alert-success",
						$("form", $("#edittypeModal")))
						.hide();
				$(".alert-danger",
						$("form", $("#edittypeModal")))
						.hide();
					
				}
		
		grid.bindTableDelete(sendData);//绑定删除按钮
		//grid.bindTableEdit(sendData,editForm);//绑定编辑按钮
		//新增比率参数
		$('#add_bl_btn').live("click",function(){
			$("#rateid", "#editfenModal").removeAttr("readOnly");
			$('#bl_intbid').attr("readOnly",true);
			$('#bl_intbid').val(rliOption.intbid);
			$('#rateid').val(""); 
			$('#ratexx').val(""); 
			$('#maxamt').val(""); 
			$('#addamt').val(""); 
			$("#editfenModal").modal("show");
		    $('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
		    $("#editfenModal").modal('show');
		    $("#editfenModal").on("hide.bs.modal",function(){
   				$('.msg', $("#editfenModal")).text("");	
   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
   	        	grid.submitFilter();       	
   	        });  
	   	});
		//新增利率参数
		$('#add_clc_btn').click(function(){
		     $("#intbid").val("");
	         $("#intdes").val("")
	         $("#basday").select2("val","");
	         $("#intiri").val("");
	         show();
		     $('.add-form .alert').css('display','none');
			 $('.add-form .form-group').removeClass('has-error');
			 $('.add-form .form-group .help-block').remove();
			 show();
		     $("#edittypeModal").modal('show');
		     $("#edittypeModal").on("hide.bs.modal",function(){
	   				$('.msg', $("#edittypeModal")).text("");	
	   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
	   	        	grid.submitFilter();       	
	   	        });  
	   	});
		
		
		//利率添加/修改保存
		$("#btn_save_type").click(function() {
			$("form", $("#edittypeModal")).submit();
		});
		var matuValid = Sunline.getValidate($("form", "#edittypeModal"),
				function() {
					var data = {};
					$.each($("input", $("#edittypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("cc/edratetabs", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.show();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.show();
								}
								$(".msg", $("form", $("#edittypeModal"))).text(
										ret.msg);
							});

				}, {
					intbid : {
						required : true
					},	
					basday : {
						number:true
					}
				});
		
		//比率修改/添加保存
		$("#btn_save_fen").click(function() {
			$("form", $("#editfenModal")).submit();
		});
		var matuValid = Sunline.getValidate($("form", "#editfenModal"),
				function() {
					var data = {};
					$.each($("input", $("#editfenModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("cc/edratedefi", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#editfenModal")))
											.show();
									$(".alert-danger",
											$("form", $("#editfenModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#editfenModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#editfenModal")))
											.show();
								}
								$(".msg", $("form", $("#editfenModal"))).text(
										ret.msg);
							});

				}, {
					intbid : {
						required : true
					},	
					basday : {
						number:true,
						required : true
					},
					ratexx : {
						number:true
					},
					addamt : {
						number:true
					}
				});




	}
	
	
	return {
		init : function() {
			handleTable();
		}
	}
}();