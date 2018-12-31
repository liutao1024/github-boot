var kcmtmplprop = function() {
	var proptpDict =Sunline.getDict("E_PROPTP");
	
	$("input[name='proptp']").select2({
		data:proptpDict,
		allowClear : true
	     });
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmtmplprop");
		var editUrl;
		var toEditForm = function(nRowA) {
			$('#propcd').val($(nRowA[0]).text());
			$('#propna').val($(nRowA[1]).text());
			for (var i = 0; i < proptpDict.length; i++) {
				if (proptpDict[i].text == $(nRowA[2]).text()) {
					$('input[name="proptp"]',$('#edit_form')).select2('val',proptpDict[i].id);
				}
			}
			$('#proptb').val($(nRowA[3]).text());
			$('#propcl').val($(nRowA[4]).text());
			$('#propvw').val($(nRowA[5]).text());
			$('#propmt').val($(nRowA[6]).text());
			editUrl = "kcm/addKcmtmplprop";
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
									"data" : "propcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "proptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < proptpDict.length; i++) {
											if (proptpDict[i].id == data) {
												return proptpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "proptb",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propcl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propvw",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propmt",
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
												+ data.propcd
												+ ","
												+ data.propna
												+ ","
												+ data.proptp
												+ ","
												+ data.proptb
												+ ","
												+ data.propcl
												+ ","
												+ data.propvw
												+ ","
												+ data.propmt + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.propcd
												+ ","
												+ data.propna
												+ ","
												+ data.proptp
												+ ","
												+ data.proptb
												+ ","
												+ data.propcl
												+ ","
												+ data.propvw
												+ ","
												+ data.propmt + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "propcd", "propna","proptp", "proptb", "propcl", "propvw", "propmt" ];
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
				propcd : {
					required : true,
					maxlength : 20
				},
				propna : {
					required : true,
					maxlength : 50
				},
				proptp : {
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
						$('.msg', editform).text("操作成功");
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
						$('#propcd', editform).attr("readOnly", true);
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
		$("#add_btn").live(
				"click",
				function() {
					editerror.hide();
					editsuccess.hide();
					validator.resetForm();
					$('.msg', editform).text("");
					$('input', editform).removeAttr("readOnly");
					$('input', editform).removeAttr("disabled");
					$('input', editform).val("").trigger("change");
					editUrl = "kcm/addKcmtmplprop";
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
		
				$(".filter-cancel").click(function(){
					$("input[name='proptp']").select2("val","");
				});

	};

	return {
		init : function() {
			handleTable();
		}
	}
}();