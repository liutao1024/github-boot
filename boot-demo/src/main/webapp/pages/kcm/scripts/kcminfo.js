var kcminfo = function() {
	
	var merctpDict = Sunline.getDict("cmtype");		//合作类型
	var busicdDict = Sunline.getDict("E_BUSICD"); // 业务种类编号
	
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmInfo");
		var editUrl;
		var toEditForm = function(nRowA) {
			$('#merccd').val($(nRowA[0]).text());
			$('#merctp').val($(nRowA[1]).text());
			$('#mercna').val($(nRowA[2]).text());
			$('#busicd').val($(nRowA[3]).text());
			$('#tmplcd').val($(nRowA[4]).text());
			editUrl = "kcm/addKcmInfo";
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
		$("#busicd").select2({
			data : busicdDict
		});

		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
					},
					onError : function(grid) {
					},
					dataTable : { // here you can define a typical datatable
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
									"data" : "merctp",
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
								{
									"data" : "mercna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "busicd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < busicdDict.length; i++) {
											if (busicdDict[i].id == data) {
												return busicdDict[i].text;
											}
										}
									}
								},
								{
									"data" : "tmplcd",
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
												+ data.tmplcd
												+ ","
												+ data.busicd + "'>编辑 </a>";
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
												+ data.tmplcd
												+ ","
												+ data.busicd + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "merccd", "tmplcd", "busicd" ];
		var sendData1 = [ "merccd", "merctp", "busicd","tmplcd","mercna" ];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData1, toEditForm);

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
				busicd : {
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
					editUrl = "kcm/addKcmInfo";
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