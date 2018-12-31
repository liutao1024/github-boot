var kcmdefn = function() {
	var merctpDict = Sunline.getDict("cmtype");		//合作类型
	var corefgDict = Sunline.getDict("corefg");		//是否核心商户
	var relatpDict = Sunline.getDict("relatp");		//上下游标志
	
	var handleTable = function() {
		var cycleOption={
				 cyclegrid:new Datatable(),
				 tocycleEditForm:function(nRowA){
					  $('#cycle_defncd').attr("readOnly",true);
					  $('#cycle_merccd').attr("readOnly",true);
					  $('#cycle_defncd').val($(nRowA[0]).text()); 
					  $('#cycle_merccd').val($(nRowA[1]).text()); 
					  $('#cycle_cmtype').val($(nRowA[2]).text()); 
					  editcycleurl = "kcm/addKcmDefn"; 
					  $("#editCycleModal").modal("show");
				  },
				  sendData:["defncd", "merccd","cmtype"], 
				  defncd:""
			  }
		var treeOption={
				treegrid:new Datatable(),
				totreeEditForm:function(nRowA){
					$('#tree_defncd').attr("readOnly",true);
					$('#tree_merccd').attr("readOnly",true);
					$('#tree_defncd').val($(nRowA[0]).text()); 
					$('#tree_merccd').val($(nRowA[1]).text()); 
					$('#tree_cmtype').val($(nRowA[2]).text()); 
					editcycleurl = "kcm/addKcmDefn"; 
					$("#editTreeModal").modal("show");
				},
				sendData:["defncd", "merccd","cmtype"], 
				defncd:""
		}
		var linkOption={
				linkgrid:new Datatable(),
				tolinkEditForm:function(nRowA){
					$('#link_defncd').attr("readOnly",true);
					$('#link_merccd').attr("readOnly",true);
					$('#link_defncd').val($(nRowA[0]).text()); 
					$('#link_merccd').val($(nRowA[1]).text()); 
					$('#link_cmtype').val($(nRowA[2]).text()); 
					editcycleurl = "kcm/addKcmDefn"; 
					$("#editLinkModal").modal("show");
				},
				sendData:["defncd", "merccd","cmtype"], 
				defncd:""
		}
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmDefn");
		var editUrl;
		var toEditForm = function(nRowA) {
			$('#defncd').val($(nRowA[0]).text());
			$('#merctp').val($(nRowA[1]).text());
			$('#remark').val($(nRowA[2]).text());
			editUrl = "kcm/addKcmDefn";
			$("#editModal").modal("show");
			$("#editModal").on(
					"hide.bs.modal",
					function() {
						editerror.hide();
						editsuccess.hide();
						validator.resetForm();
						$('.msg', editform).text("");
						$('.form-group').removeClass('has-error').removeClass(
								"has-success");
						grid.submitFilter();
					});
		};
		
		$("#merctp").select2({
			data : merctpDict
		});
		$("#corefg").select2({
			data : corefgDict
		});
		$("#relatp").select2({
			data : relatpDict
		});

		var mercDict=Sunline.getDict("","/merc","merccd","mercna");
		$("#merccd").select2({
	 			data:mercDict
	 		});
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						// execute some code after table records loaded
					},
					onError : function(grid) {
						// execute some code on network or other general error
					},
					dataTable : { // here you can define a typical datatable
									// settings from
									// http://datatables.net/usage/options
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "defncd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cmtype",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < merctpDict.length; i++) {
											if (merctpDict[i].id == data) {
												return merctpDict[i].text;
											}
										}
									}
								},
//								{
//									"data" : "corefg",
//									"sortable" : false,
//									"searchable" : false,
//									"render" : function(data, type, full) {
//										for (var i = 0; i < corefgDict.length; i++) {
//											if (corefgDict[i].id == data) {
//												return corefgDict[i].text;
//											}
//										}
//									}
//								},
//								{
//									"data" : "relatp",
//									"sortable" : false,
//									"searchable" : false,
//									"render" : function(data, type, full) {
//										for (var i = 0; i < relatpDict.length; i++) {
//											if (relatpDict[i].id == data) {
//												return relatpDict[i].text;
//											}
//										}
//									}
//								},
//								{
//									"data" : "pmercd",
//									"sortable" : false,
//									"searchable" : false
//								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_setting' href='javascript:;' data-src='"+ data.defncd + ","+data.cmtype+"'>圈树链管理 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"+ data.defncd + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "merccd", "defncd", "merctp", "remark" ];
		var sendData1 = [ "defncd" ];
		grid.bindTableDelete(sendData1);
		grid.bindTableEdit(sendData, toEditForm);
		grid.addBindEvent(".edit_setting","click",["defncd","cmtype"], function(data){ 
        	if(data.cmtype=='1'){//圈	
        		cycleOption.cyclegrid.setAjaxParam("defncd",data.defncd);
        		cycleOption.cyclegrid.setAjaxParam("cmtype",data.cmtype);
        		cycleOption.defncd=data.defncd;
        		cycleOption.cmtype=data.cmtype;
        		cycleDefn.init(cycleOption);
        		$("#add_cycle_set").append(
						"<div class='table-actions-wrapper'><span></span>"
								+ "<button id='add_cycle_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
        		$("#cycle_setting").modal("show");
        		$("#add_cycle_btn").click(
        				function() {
        					editerror.hide();
        					editsuccess.hide();
        					validator.resetForm();
        					$('.msg', editform).text("");
        					$('input', editform).removeAttr("readOnly");
        					$('input', editform).removeAttr("disabled");
        					$('input', editform).val("").trigger("change");
        					editUrl = "kcm/addKcmDefn";
        					$("#editCycleModal").modal('show');
        					$("#editCycleModal").on(
        							"hide.bs.modal",
        							function() {
        								editerror.hide();
        								editsuccess.hide();
        								
        								$('.msg', editform).text("");
        								$('.form-group').removeClass('has-error')
        								.removeClass("has-success");
        								grid.submitFilter();
        							});
        					return false;
        					
        				});
        		
        	}else if(data.cmtype=='2'){//链
        		linkOption.linkgrid.setAjaxParam("defncd",data.defncd);
        		linkOption.linkgrid.setAjaxParam("cmtype",data.cmtype);
        		linkOption.defncd=data.defncd;
        		linkOption.cmtype=data.cmtype;
        		linkDefn.init(linkOption);
        		$("#add_link_set").append(
						"<div class='table-actions-wrapper'><span></span>"
								+ "<button id='add_link_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
        		$("#link_setting").modal("show");
        		$("#add_link_btn").click(
        				function() {
        					editerror.hide();
        					editsuccess.hide();
        					validator.resetForm();
        					$('.msg', editform).text("");
        					$('input', editform).removeAttr("readOnly");
        					$('input', editform).removeAttr("disabled");
        					$('input', editform).val("").trigger("change");
        					editUrl = "kcm/addKcmDefn";
        					$("#editLinkModal").modal('show');
        					$("#editLinkModal").on(
        							"hide.bs.modal",
        							function() {
        								editerror.hide();
        								editsuccess.hide();
        								
        								$('.msg', editform).text("");
        								$('.form-group').removeClass('has-error')
        								.removeClass("has-success");
        								grid.submitFilter();
        							});
        					return false;
        					
        				});
        	}else if(data.cmtype=='3'){//树
        		treeOption.treegrid.setAjaxParam("defncd",data.defncd);
        		treeOption.treegrid.setAjaxParam("cmtype",data.cmtype);
        		treeOption.defncd=data.defncd;
        		treeOption.cmtype=data.cmtype;
        		treeDefn.init(treeOption);
        		$("#add_tree_set").append(
						"<div class='table-actions-wrapper'><span></span>"
								+ "<button id='add_tree_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
        		$("#tree_setting").modal("show");
        		$("#add_tree_btn").click(
        				function() {
        					console.info("123");
        					editerror.hide();
        					editsuccess.hide();
        					validator.resetForm();
        					$('.msg', editform).text("");
        					$('input', editform).removeAttr("readOnly");
        					$('input', editform).removeAttr("disabled");
        					$('input', editform).val("").trigger("change");
        					editUrl = "kcm/addKcmDefn";
        					$("#editTreeModal").modal('show');
        					$("#editTreeModal").on(
        							"hide.bs.modal",
        							function() {
        								editerror.hide();
        								editsuccess.hide();
        								
        								$('.msg', editform).text("");
        								$('.form-group').removeClass('has-error')
        								.removeClass("has-success");
        								grid.submitFilter();
        							});
        					return false;
        					
        				});
        	}else{
        		bootbox.alert("不支持的合作商关系类型！");
        	}		        	
      }); 

	
		
		
		/*
		 * 表单验证方法
		 */
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		var validator = editform.validate({
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules : { // 验证规则
				merccd : {
					required : true,
					maxlength : 20
				},
				defncd : {
					required : true,
					maxlength : 20
				},
				pmercd : {
					required : true,
					maxlength : 20
				}
			},

			invalidHandler : function(event, validator) {
				editsuccess.hide();
				editerror.show();
				Metronic.scrollTo(editerror, -200);
			},

			errorPlacement : function(error, element) {
				element.parent().append(error);
			},

			highlight : function(element) {
				$(element).closest('.form-group').removeClass("has-success")
						.addClass('has-error');
			},

			unhighlight : function(element) {

			},

			success : function(label, element) {
				var icon = $(element).parent('.input-icon').children('i');
				$(element).closest('.form-group').removeClass('has-error')
						.addClass('has-success'); // set success class to the
													// control group
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
					$('.msg', editform).text(redata.msg);
					if (redata.ret == "success") {
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
						$('#merccd', editform).attr("readOnly", true);
						$('#defncd', editform).attr("readOnly", true);
					} else {
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}
				}, function() {
					$('.msg', editform).text("请求出错!");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
				}, "json");
			}
		});
		// 新增窗口
		$("#add_btn").click(
				function() {
					editerror.hide();
					editsuccess.hide();
					validator.resetForm();
					$('.msg', editform).text("");
					$('input', editform).removeAttr("readOnly");
					$('input', editform).removeAttr("disabled");
					$('input', editform).val("").trigger("change");
					editUrl = "kcm/addKcmDefn";
					$("#editModal").modal('show');
					$("#editModal").on(
							"hide.bs.modal",
							function() {
								editerror.hide();
								editsuccess.hide();
								
								$('.msg', editform).text("");
								$('.form-group').removeClass('has-error')
										.removeClass("has-success");
								grid.submitFilter();
							});
					return false;

				});
		

	};

	return {
		init : function() {
			handleTable();
		}
	}
}();