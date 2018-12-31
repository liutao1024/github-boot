var kcpfavosmdf = function() {
	
	
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
	
	var smbdtpDict = Sunline.getDict("E_SMBDTP");
	$("input[name='smbdtp']").select2({
		data : smbdtpDict,
		allowClear : true
	});
	var cgsmtpDict = Sunline.getDict("E_CGSMTP");
	$("input[name='cgsmtp']").select2({
		data : cgsmtpDict,
		allowClear : true
	});
	var pdunitDict = Sunline.getDict("E_PDUNIT");
	$("input[name='pdunit']").select2({
		data : pdunitDict,
		allowClear : true
	});



	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qfsmdf");
		var defnsendData = [ "smfacd" ];

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
									"searchable" : false
								},
								{
									"data" : "smfana",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "smbdtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < smbdtpDict.length; i++) {
											if (smbdtpDict[i].id == data) {
												return smbdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "cgsmtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cgsmtpDict.length; i++) {
											if (cgsmtpDict[i].id == data) {
												return cgsmtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "pdunit",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pdunitDict.length; i++) {
											if (pdunitDict[i].id == data) {
												return pdunitDict[i].text;
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
												+ data.smfacd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.smfacd + "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);

		defngrid.bindTableEdit(defnsendData, function(nRowA) {
			// 锁定
			$("input[name='smfacd']").attr("readOnly", true);
			// 赋值
			$("input[name='smfacd']").val($(nRowA[0]).text());
			$("input[name='smfana']").val($(nRowA[1]).text());
			$("input[name='smbdtp']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='cgsmtp']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='pdunit']").val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
			$("input[name='efctdt']").val($(nRowA[5]).text());
			$("input[name='inefdt']").val($(nRowA[6]).text());
			$("input[name='explan']").val($(nRowA[7]).text());
			$("input[name='inseno']").val("0");

			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editdefnModal"))).hide();
				$('.alert-danger', $('form', $("#editdefnModal"))).hide();
				$(".msg", $('form', $("#editdefnModal"))).text("");
				defngrid.submitFilter();
			});
		})

		// 新增窗口
		$("#add_defn_btn").bind("click", function() {
			// 解锁
			$("input[name='smfacd']").attr("readOnly", false);
			// 清空
			$("input[name='smfacd']").val("");
			$("input[name='smfana']").val("");
			$("input[name='smbdtp']").val("").trigger("change");
			$("input[name='cgsmtp']").val("").trigger("change");
			$("input[name='pdunit']").val("").trigger("change");
			$("input[name='efctdt']").val("");
			$("input[name='inefdt']").val("");
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

					Sunline.ajaxRouter("kcp/efsmdf", data, 'post',
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

	return {
		init : function() {
			handleTable();
		}
	}
}();