var lnbloandiff = function() {
	var difftpDict =Sunline.getDict("E_DIFFTP");
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("smy/smqrln");
//		var editUrl;
//		var toEditForm = function(nRowA) {
//			$("input[name='roleid']").attr("readOnly",true);
//			$("input[name='usercd']").attr("readOnly",true);
//			$('#usercd').val($(nRowA[0]).text());
//			$('#roleid').val($(nRowA[1]).text());
//			for (var i = 0; i < roleidDict.length; i++) {
//				if (roleidDict[i].text == $(nRowA[1]).text()) {
//					$('input[name="roleid"]',$('#edit_form')).select2('val',roleidDict[i].id);
//				}
//			}
//			$('#rostat').val($(nRowA[2]).text());
//			for (var i = 0; i < statusDict.length; i++) {
//				if (statusDict[i].text == $(nRowA[2]).text()) {
//					$('input[name="rostat"]',$('#edit_form')).select2('val',statusDict[i].id);
//				}
//			}
////			$('#propcl').val($(nRowA[4]).text());
////			$('#propvw').val($(nRowA[5]).text());
////			$('#propmt').val($(nRowA[6]).text());
//			editUrl = "perm/aduser";
//			$("#editModal_role").modal("show");
//			$("#editModal_role").on(
//					"hide.bs.modal",
//					function() {
//						editerror.hide();
//						editsuccess.hide();
//						validator.resetForm();
//						$('.msg', editform).text("");
//						$('.form-group').removeClass('has-error').removeClass("has-success");
//						grid.submitFilter();
//					});
//		};

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
									"data" : "lncfno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "lenval",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "mclnam",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "bgindt",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "endxdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "tophno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "trantp",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "difftp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < difftpDict.length; i++) {
											if (difftpDict[i].id == data) {
												return difftpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "null",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "";
									}
								},
//								{
//									"data" : null,
//									"width" : "18%",
//									"sortable" : false,
//									"searchable" : false,
//									"render" : function(data, type, full) {
//										return "<a class='edit' href='javascript:;' data-src='"
//												+ data.usercd
//												+ ","
//												+ data.roleid
//												+  "'>编辑 </a>";
//									}
//								},
//								{
//									"data" : null,
//									"sortable" : false,
//									"searchable" : false,
//									"render" : function(data, type, full) {
//										return "<a class='delete' href='javascript:;' data-src='"
//										+ data.usercd
//										+ ","
//										+ data.roleid
//										+   "'>删除 </a>";
//									}
//								} 
								]
					}
				});
		var sendData = [ "q_trantp" ];
//		grid.bindTableDelete(sendData);
//		grid.bindTableEdit(sendData, toEditForm);
		
		// 时间插件
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};

		/*
		 * 表单验证方法
		 */
//		var editform = $("#edit_form");
//		var editerror = $('.alert-danger', editform);
//		var editsuccess = $('.alert-success', editform);
//		var validator = editform.validate({
//			errorElement : 'span',
//			errorClass : 'help-block help-block-error',
//			focusInvalid : false,
//			ignore : "",
//			rules : { // 验证规则
//				usercd : {
//					required : true,
//					maxlength : 32
//				},
//				roleid : {
//					required : true,
//					maxlength : 6
//				},
//				rostat : {
//					required : true,
//					maxlength : 1
//				}
//			},
//
//			invalidHandler : function(event, validator) {
//				editsuccess.hide();
//				editerror.show();
//				Metronic.scrollTo(editerror, -200);
//			},
//
//			errorPlacement : function(error, element) {
//				element.parent().append(error);
//			},
//
//			highlight : function(element) {
//				$(element).closest('.form-group').removeClass("has-success")
//						.addClass('has-error');
//			},
//
//			unhighlight : function(element) {
//
//			},
//
//			success : function(label, element) {
//				var icon = $(element).parent('.input-icon').children('i');
//				$(element).closest('.form-group').removeClass('has-error')
//						.addClass('has-success'); // set success class to the
//													// control group
//				icon.removeClass("fa-warning").addClass("fa-check");
//			},
//			submitHandler : function(form) {
//				/*
//				 * 提交数据,必须是json对象 返回也必须是json对象
//				 */
//				var data = {};
//				$.each($("input", editform), function(i, n) {
//					data[n.name] = n.value;
//				});
//
//				Sunline.ajaxRouter(editUrl, data, "post", function(redata) {
//					$('.msg', editform).text(redata.msg);
//					if (redata.ret == "success") {
//						$('.msg', editform).text("操作成功");
//						$('.alert-success', editform).show();
//						$('.alert-danger', editform).hide();
//						$('#usercd', editform).attr("readOnly", true);
//						$('#roleid', editform).attr("readOnly", true);
////						$('#rfirtm', editform).attr("readOnly", true);
////						$('#efctdt', editform).attr("disabled", "disabled");
//					} else {
//						$('.alert-success', editform).hide();
//						$('.alert-danger', editform).show();
//					}
//				}, function() {
//					$('.msg', editform).text("请求出错!");
//					$('.alert-success', editform).hide();
//					$('.alert-danger', editform).show();
//				}, "json");
//			}
//		});
//		// 新增窗口
//		$("#add_btn").bind(
//				"click",
//				function() {
//					editerror.hide();
//					editsuccess.hide();
//					validator.resetForm();
//					$('.msg', editform).text("");
//					$('input', editform).removeAttr("readOnly");
//					$('input', editform).val("").trigger("change");
//					   editUrl = "perm/aduser";
//						$("#editModal_role").modal('show');
//						$("#editModal_role").on(
//								"hide.bs.modal",
//								function() {
//									editerror.hide();
//									editsuccess.hide();
//									$('.msg', editform).text("");
//									$('.form-group').removeClass('has-error')
//											.removeClass("has-success");
//									grid.submitFilter();
//								});
//					return false;
//
//				});
		
				$(".filter-cancel").click(function(){
					$("input[name='q_trantp']",$("#datatable_ajax")).select2("val","");
				});

	};

	return {
		init : function() {
			handleTable();
		}
	}
}();