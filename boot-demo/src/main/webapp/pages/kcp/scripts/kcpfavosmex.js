var kcpfavosmex = function() {
	var facdDict = Sunline.getDict("type", "/facd", "smfacd","smfana");
	$("input[name='smfacd']").select2({data:facdDict,allowClear:true});
	var crcycdDict = Sunline.getDict("crcycd");
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});

	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qfsmex");
		var defnsendData = [ "chrgcd", "fadmtp", "crcycd", "smfacd", ];

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
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fadmtp",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < crcycdDict.length; i++) {
											if (crcycdDict[i].id == data) {
												return crcycdDict[i].text;
											}
										}
										return data;
									}
								},
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
									"data" : "dimevl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgcd
												+ ", "
												+ data.fadmtp
												+ ", "
												+ data.crcycd
												+ ", "
												+ data.smfacd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.chrgcd
												+ ", "
												+ data.fadmtp
												+ ", "
												+ data.crcycd
												+ ", "
												+ data.smfacd + "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);

		defngrid.bindTableEdit(defnsendData,
				function(nRowA) {
					// 锁定
					$("input[name='chrgcd']").attr("readOnly", true);
					$("input[name='fadmtp']").attr("readOnly", true);
					$("input[name='crcycd']").attr("readOnly", true);
					$("input[name='smfacd']").attr("readOnly", true);
					// 赋值
					$("input[name='chrgcd']").val($(nRowA[0]).text());
					$("input[name='fadmtp']").val($(nRowA[1]).text());
					$("input[name='crcycd']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
					$("input[name='smfacd']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
					$("input[name='efctdt']").val($(nRowA[4]).text());
					$("input[name='inefdt']").val($(nRowA[5]).text());
					$("input[name='dimevl']").val($(nRowA[6]).text());
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
			$("input[name='chrgcd']").attr("readOnly", false);
			$("input[name='fadmtp']").attr("readOnly", false);
			$("input[name='crcycd']").attr("readOnly", false);
			$("input[name='smfacd']").attr("readOnly", false);
			// 清空
			$("input[name='chrgcd']").val("");
			$("input[name='fadmtp']").val("");
			$("input[name='crcycd']").val("").trigger("change");
			$("input[name='smfacd']").val("").trigger("change");
			$("input[name='efctdt']").val("");
			$("input[name='inefdt']").val("");
			$("input[name='dimevl']").val("");
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

					Sunline.ajaxRouter("kcp/efsmex", data, 'post',
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
	// 时间插件
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