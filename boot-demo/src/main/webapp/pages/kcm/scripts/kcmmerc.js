var kcmmerc = function() {
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmMerc");
		var editUrl;
		var toEditForm = function(nRowA) {
//			$('#efctdt').attr("disabled","disabled");
//			$('#inefdt').attr("disabled","disabled");
			$('#merccd').val($(nRowA[0]).text());
			$('#mercna').val($(nRowA[1]).text());
			$('#mercid').val($(nRowA[2]).text());
//			$('#crcycd').val(
//					$(nRowA[1]).text().substring(
//							$(nRowA[1]).text().indexOf("[") + 1,
//							$(nRowA[1]).text().indexOf("]"))).trigger("change");
//			$('#rfirtm').val(
//					$(nRowA[2]).text().substring(
//							$(nRowA[2]).text().indexOf("[") + 1,
//							$(nRowA[2]).text().indexOf("]"))).trigger("change");
//			$('#efctdt').val($(nRowA[3]).text());			
//			$('#inefdt').val($(nRowA[4]).text());
//			$('#baseir').val($(nRowA[5]).text());
//			$('#intrfg').val(
//					$(nRowA[6]).text().substring(
//							$(nRowA[6]).text().indexOf("[") + 1,
//							$(nRowA[6]).text().indexOf("]"))).trigger("change");
//			$('#remark').val($(nRowA[7]).text());
			editUrl = "kcm/addKcmMerc";
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
									"data" : "merccd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mercna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mercid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.merccd
												+ ","
												+ data.mercna
												+ ","
												+ data.mercid
												+ ","
												+ data.efctdt + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.merccd
												+ ","
												+ data.mercna
												+ ","
												+ data.mercid
												+ ","
												+ data.efctdt + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "merccd", "mercna", "mercid" ];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData, toEditForm);

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
				mercna : {
					required : true,
					maxlength : 50
				},
				mercid : {
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
//						$('#crcycd', editform).attr("readOnly", true);
//						$('#rfirtm', editform).attr("readOnly", true);
//						$('#efctdt', editform).attr("disabled", "disabled");
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
					editUrl = "kcm/addKcmMerc";
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