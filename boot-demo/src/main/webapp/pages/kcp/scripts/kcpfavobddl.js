var kcpfavobddl = function() {


	
	var facdDict = Sunline.getDict("type", "/facd", "smfacd","smfana");
	var crcycdDict = Sunline.getDict("crcycd");
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='smfacd']").select2({data:facdDict,allowClear:true});

	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qfbddl");
		var defnsendData = [ "chrgcd", "crcycd", "smfacd", "smbody", "chrgpd" ];

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
									"data" : "smbody",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "chrgpd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "smfavl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "endate",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
										+data.chrgcd+", "+data.crcycd+", "+data.smfacd+", "+data.smbody+", "+data.chrgpd+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												 +data.chrgcd+", "+data.crcycd+", "+data.smfacd+", "+data.smbody+", "+data.chrgpd+  "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);

		defngrid.bindTableEdit(defnsendData,
				function(nRowA) {
					// 锁定
					$("input[name='chrgcd']").attr("readOnly", true);
					$("input[name='crcycd']").attr("readOnly", true);
					$("input[name='smbody']").attr("readOnly", true);
					$("input[name='smfacd']").attr("readOnly", true);
					$("input[name='chrgpd']").attr("readOnly", true);
					// 赋值
					$("input[name='chrgcd']").val($(nRowA[0]).text());
					$("input[name='crcycd']").val(
							$(nRowA[1]).text().substring(
									$(nRowA[1]).text().indexOf("[") + 1,
									$(nRowA[1]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='smfacd']").val($(nRowA[2]).text().substring(
							$(nRowA[2]).text().indexOf("[") + 1,
							$(nRowA[2]).text().indexOf("]"))).trigger(
					"change");
					$("input[name='smbody']").val($(nRowA[3]).text());
					$("input[name='chrgpd']").val($(nRowA[4]).text());
					$("input[name='smfavl']").val($(nRowA[5]).text());
					$("input[name='endate']").val($(nRowA[6]).text());
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
			$("input[name='crcycd']").attr("readOnly", false);
			$("input[name='smfacd']").attr("readOnly", false);
			$("input[name='smbody']").attr("readOnly", false);
			$("input[name='chrgpd']").attr("readOnly", false);
			// 清空
			$("input[name='chrgcd']").val("");
			$("input[name='crcycd']").val("").trigger("change");
			$("input[name='smfacd']").val("");
			$("input[name='smbody']").val("");
			$("input[name='chrgpd']").val("");
			$("input[name='smfavl']").val("");
			$("input[name='endate']").val("");
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

					Sunline.ajaxRouter("kcp/efbddl", data, 'post',
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