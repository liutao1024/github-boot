var kcpfavosmdl = function() {
	
	var facdDict = Sunline.getDict("type", "/facd", "smfacd","smfana");
	$("input[name='smfacd']").select2({data:facdDict,allowClear:true});

	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qfsmdl");
		var defnsendData = [ "smfacd", "smstrt" ];

		defngrid
				.init({
					src : $("#datatable_defn"),
					deleteData : defnsendData,
					onSuccess : function(defngrid) {
					},
					onError : function(defngrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : defnurl,
						},
						"columns" : [
								{
									"data" : "smfacd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < facdDict.length; i++) {
											if (facdDict[i].id == data) {
												return facdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "smstrt",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "smfapc",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "efctdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inefdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "smblup",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "explan",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.smfacd
												+ ","
												+ data.smstrt + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.smfacd
												+ ","
												+ data.smstrt + "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);

		defngrid.bindTableEdit(defnsendData,
				function(nRowA) {
					// 锁定
					$("input[name='smfacd']").attr("readOnly", true);
					$("input[name='smstrt']").attr("readOnly", true);
					// 赋值
					$("input[name='smfacd']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
					$("input[name='smstrt']").val($(nRowA[1]).text());
					$("input[name='smfapc']").val($(nRowA[2]).text());
					$("input[name='efctdt']").val($(nRowA[3]).text());
					$("input[name='inefdt']").val($(nRowA[4]).text());
					$("input[name='smblup']").val($(nRowA[5]).text());
					$("input[name='explan']").val($(nRowA[6]).text());
					$("input[name='inseno']").val("0");

					$("#editdefnModal").modal('show');
					$("#editdefnModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editdefnModal"))).hide();
								$('.alert-danger',
										$('form', $("#editdefnModal"))).hide();
								$(".msg", $('form', $("#editdefnModal"))).text(
										"");
								defngrid.submitFilter();
							});
				})

		// 新增窗口
		$("#add_defn_btn").bind("click", function() {
			// 解锁
			$("input[name='smfacd']").attr("readOnly", false);
			$("input[name='smstrt']").attr("readOnly", false);
			// 清空
			$("input[name='smfacd']").val("").trigger("change");
			$("input[name='smstrt']").val("");
			$("input[name='smfapc']").val("");
			$("input[name='efctdt']").val("");
			$("input[name='inefdt']").val("");
			$("input[name='smblup']").val("");
			$("input[name='explan']").val("");
			$("input[name='inseno']").val("1");

			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editdefnModal"))).hide();
				$('.alert-danger', $('form', $("#editdefnModal"))).hide();
				$(".msg", $('form', $("#editdefnModal"))).text("");
				defngrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_defn").click(function() {
			$('form', $("#editdefnModal")).submit();
		});

		var defnValid = Sunline.getValidate($('form', $("#editdefnModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdefnModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});

					Sunline.ajaxRouter("kcp/efsmdl", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editdefnModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editdefnModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editdefnModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editdefnModal")))
											.show();
								}
								$(".msg", $('form', $("#editdefnModal"))).text(
										ret.msg);
							});

				}
		// {
		// depttm:{required : true},
		// defncd:{maxlength : 20}
		// }
		);

	};
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
	

	return {
		init : function() {
			handleTable();
		}
	}
}();