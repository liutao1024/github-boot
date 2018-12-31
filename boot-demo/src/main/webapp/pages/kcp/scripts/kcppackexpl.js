var kcppackdefi = function() {
	var ispkefDict = Sunline.getDict("E_YES___"); // 币种

	$("input[name='ispkef']").select2({
		data : ispkefDict,
		allowClear : true
	});
	var defiDict = Sunline.getDict("type", "/defi", "packcd",
	"packna");
	$("#packcd").select2({
		data : defiDict
	});
	var detlDict = Sunline.getDict("type", "/chrg", "chrgcd",
	"chrgna");
	$("#chrgcd").select2({
		data : detlDict
	});
	/*var scenDict = Sunline.getDict("type", "/detl", "scencd",
	"scends");
	$("#scencd").select2({
		data : scenDict
	});*/
	var handleTable = function() {
		var prcsgrid = new Datatable();
		var prcsurl = Sunline.ajaxPath("kcp/pbexpl");
		var prcssendData = [ "packcd","chrgcd","scencd"];
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		;
		prcsgrid
				.init({
					src : $("#datatable_prcs"),
					deleteData : prcssendData,
					onSuccess : function(prcsgrid) {
					},
					onError : function(prcsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : prcsurl,
						},
						"columns" : [
								{
									"data" : "packcd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < defiDict.length; i++) {
											if (defiDict[i].id == data) {
												return defiDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < detlDict.length; i++) {
											if (detlDict[i].id == data) {
												return detlDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "scencd",
									"sortable" : false,
									"searchable" : false,
									/*"render" : function(data, type, full) {
										for (var i = 0; i < scenDict.length; i++) {
											if (scenDict[i].id == data) {
												return scenDict[i].text;
											}
										}
										return data;
									}*/
								},
								{
									"data" : "ispkef",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < ispkefDict.length; i++) {
											if (ispkefDict[i].id == data) {
												return ispkefDict[i].text;
											}
										}
										return data;
									}
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
												+ data.packcd +","+data.chrgcd+","+data.scencd+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.packcd +","+data.chrgcd+","+data.scencd+ "'>删除 </a>";
									}
								} ]
					}
				});
		prcsgrid.bindTableDelete(prcssendData);

		prcsgrid.bindTableEdit(prcssendData, function(nRowA) {
			var qrdata = {};
			
			qrdata['q_packcd'] = $(nRowA[0]).text().substring(
					$(nRowA[0]).text().indexOf("[") + 1,
					$(nRowA[0]).text().indexOf("]"));
			qrdata['q_chrgcd'] = $(nRowA[1]).text().substring(
					$(nRowA[1]).text().indexOf("[") + 1,
					$(nRowA[1]).text().indexOf("]"));
			qrdata['q_scencd'] = $(nRowA[2]).text().substring(
					$(nRowA[2]).text().indexOf("[") + 1,
					$(nRowA[2]).text().indexOf("]"));
			jQuery.ajax({
				type : "post",
				async : false,
				data : qrdata,
				url : Sunline.ajaxPath("kcp/pbexpl"),
				success : function(ret) {
					var redata = ret.data[0];
					$("input[name='packcd']").attr("readOnly", true);// 外部处理码
					$("input[name='chrgcd']").attr("readOnly", true);// 外部处理码
					$("input[name='scencd']").attr("readOnly", true);// 外部处理码
					$("input[name='packcd']").val(redata["packcd"]).trigger("change");
					$("input[name='chrgcd']").val(redata["chrgcd"]).trigger("change");
					$("input[name='scencd']").val(redata["scencd"]).trigger("change");
					$("input[name='ispkef']").val(redata["ispkef"]).trigger("change");
					$("input[name='explan']").val(redata["explan"]);
					$("input[name='action']").val("0");
				}
			});
			$("#editexplModal").modal('show');
			$("#editexplModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editexplModal"))).hide();
				$('.alert-danger', $('form', $("#editexplModal"))).hide();
				$(".msg", $('form', $("#editexplModal"))).text("");
				prcsgrid.submitFilter();
			});
		})

		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_prcs_btn").bind(
				"click",
				function() {
					editerror.hide();
					editsuccess.hide();
					$('.msg', editform).text("");
					$('input', editform).removeAttr("readOnly");
					$('input', editform).removeAttr("disabled");
					$('input', editform).val("").trigger("change");
					$("input[name='action']").val("1");
					$("#editexplModal").modal('show');
					$("#editexplModal").on(
							"hide.bs.modal",
							function() {
								editerror.hide();
								editsuccess.hide();
								$('.msg', editform).text("");
								$('.form-group').removeClass('has-error')
										.removeClass("has-success");
								prcsgrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_prcs").click(function() {
			$('form', $("#editexplModal")).submit();
		});

		var prcsValid = Sunline.getValidate($('form', $("#editexplModal")),
				function() {
					var data = {};
					$.each($("input", $("#editexplModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("kcp/pbexsa", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editexplModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editexplModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editexplModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editexplModal")))
											.show();
								}
								$(".msg", $('form', $("#editexplModal"))).text(
										ret.msg);
							});

				}, {
					packcd : {
						required : true
					},
					chrgcd : {
						required : true
					},
					scencd : {
						required : true
					}
					
				});

	};

	return {
		init : function() {
			handleTable();
		}
	}
}();