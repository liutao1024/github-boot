var kcpdime = function() {

	var waytypDict = Sunline.getDict("E_WAYTYP");// 维度类型

	$("input[name='waytyp']").select2({
		data : waytypDict,
		allowClear : true
	});

	var handleTable = function() {
		var dimegrid = new Datatable();
		var dimeurl = Sunline.ajaxPath("kcp/qrdime");
		var dimesendData = [ "waytyp", "dimecg" ];

		dimegrid
				.init({
					src : $("#datatable_dime"),
					deleteData : dimesendData,
					onSuccess : function(dimegrid) {
					},
					onError : function(dimegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : dimeurl,
						},
						"columns" : [
								{
									"data" : "waytyp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < waytypDict.length; i++) {
											if (waytypDict[i].id == data) {
												return waytypDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "dimecg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dimena",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.waytyp
												+ ","
												+ data.dimecg + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.waytyp
												+ ","
												+ data.dimecg + "'>删除 </a>";
									}
								} ]
					}
				});
		dimegrid.bindTableDelete(dimesendData);

		dimegrid.bindTableEdit(dimesendData,
				function(nRowA) {
					// $("input[name='prodcd']").attr("readOnly",true);
			//锁定
					$("input[name='waytyp']").attr("readOnly",true)
					$("input[name='dimecg']").attr("readOnly",true)
					
					$("input[name='waytyp']").val(
							$(nRowA[0]).text().substring(
									$(nRowA[0]).text().indexOf("[") + 1,
									$(nRowA[0]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='dimecg']").val($(nRowA[1]).text());
					$("input[name='dimena']").val($(nRowA[2]).text());
					$("input[name='remark']").val($(nRowA[3]).text());

					$("#editdimeModal").modal('show');
					$("#editdimeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editdimeModal"))).hide();
								$('.alert-danger',
										$('form', $("#editdimeModal"))).hide();
								$(".msg", $('form', $("#editdimeModal"))).text(
										"");
								dimegrid.submitFilter();
							});
				})

		// 新增窗口
		$("#add_dime_btn").bind("click", function() {
			//新增时解锁
			$("input[name='waytyp']").attr("readOnly",false)
			$("input[name='dimecg']").attr("readOnly",false)
			//清空原纪录
			$("input[name='waytyp']").val("").trigger("change");
			$("input[name='dimecg']").val("");
			$("input[name='dimena']").val("");
			$("input[name='remark']").val("");

			// $("input[name='crcycd']").attr("readOnly",false);
			// $("input[name='prodcd']", $("#editdimeModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editdimeModal").modal('show');
			$("#editdimeModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editdimeModal"))).hide();
				$('.alert-danger', $('form', $("#editdimeModal"))).hide();
				$(".msg", $('form', $("#editdimeModal"))).text("");
				dimegrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_dime").click(function() {
			$('form', $("#editdimeModal")).submit();
		});

		var dimeValid = Sunline.getValidate($('form', $("#editdimeModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdimeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});

					Sunline.ajaxRouter("kcp/eddime", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editdimeModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editdimeModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editdimeModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editdimeModal")))
											.show();
								}
								$(".msg", $('form', $("#editdimeModal"))).text(
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