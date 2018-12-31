var kcppackdefi = function() {
	var crcycdDict = Sunline.getDict("E_CRCYCD"); // 币种
	var pkdetpDict = Sunline.getDict("E_PKDETP"); // 套餐扣费方式
	var cgsmtpDict = Sunline.getDict("E_CGSMTP"); // 收费累计类型
	var pkfatpDict = Sunline.getDict("E_PKFATP"); // 套餐优惠类型
	var pdunitDict = Sunline.getDict("E_PDUNIT"); // 周期单位
	var favotpDict = Sunline.getDict("E_FAVOTP"); // 优惠策略

	$("input[name='pkcrcy']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='pkdetp']").select2({
		data : pkdetpDict,
		allowClear : true
	});
	$("input[name='cgsmtp']").select2({
		data : cgsmtpDict,
		allowClear : true
	});
	$("input[name='pkfatp']").select2({
		data : pkfatpDict,
		allowClear : true
	});
	$("input[name='pdunit']").select2({
		data : pdunitDict,
		allowClear : true
	});
	$("input[name='favotp']").select2({
		data : favotpDict,
		allowClear : true
	});
	var handleTable = function() {
		var prcsgrid = new Datatable();
		var prcsurl = Sunline.ajaxPath("kcp/qrdefi");
		var prcssendData = [ "packcd" ];
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
									"searchable" : false
								},
								{
									"data" : "pkcrcy",
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
									"data" : "packna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "packam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pkdetp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pkdetpDict.length; i++) {
											if (pkdetpDict[i].id == data) {
												return pkdetpDict[i].text;
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
									"data" : "sumnum",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "sumamt",
									"sortable" : false,
									"searchable" : false
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
									"data" : "prdnum",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "favotp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < favotpDict.length; i++) {
											if (favotpDict[i].id == data) {
												return favotpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "pkfatp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pkfatpDict.length; i++) {
											if (pkfatpDict[i].id == data) {
												return pkfatpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "favpec",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "favnum",
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
												+ data.packcd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.packcd + "'>删除 </a>";
									}
								} ]
					}
				});
		prcsgrid.bindTableDelete(prcssendData);

		prcsgrid.bindTableEdit(prcssendData, function(nRowA) {
			var qrdata = {};
			qrdata['q_packcd'] = $(nRowA[0]).text();
			jQuery.ajax({
				type : "post",
				async : false,
				data : qrdata,
				url : Sunline.ajaxPath("kcp/qrdefi"),
				success : function(ret) {
					var redata = ret.data[0];
					$("input[name='packcd']").attr("readOnly", true);// 外部处理码
					$("input[name='packcd']").val(redata["packcd"]);
					$("input[name='pkcrcy']").val(redata["pkcrcy"]).trigger(
							"change");
					$("input[name='packna']").val(redata["packna"]);
					$("input[name='packam']").val(redata["packam"]);
					$("input[name='pkdetp']").val(redata["pkdetp"]).trigger(
							"change");
					$("input[name='efctdt']").val(redata["efctdt"]);
					$("input[name='inefdt']").val(redata["inefdt"]);
					$("input[name='cgsmtp']").val(redata["cgsmtp"]).trigger(
							"change");
					$("input[name='sumnum']").val(redata["sumnum"]);
					$("input[name='sumamt']").val(redata["sumamt"]);
					$("input[name='pdunit']").val(redata["pdunit"]).trigger(
							"change");
					$("input[name='prdnum']").val(redata["prdnum"]);
					$("input[name='favotp']").val(redata["favotp"]).trigger(
							"change");
					$("input[name='pkfatp']").val(redata["pkfatp"]).trigger(
							"change");
					$("input[name='favpec']").val(redata["favpec"]);
					$("input[name='favnum']").val(redata["favnum"]);
					$("input[name='explan']").val(redata["explan"]);
					$("input[name='action']").val("0");
				}
			});
			$("#editprcsModal").modal('show');
			$("#editprcsModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editprcsModal"))).hide();
				$('.alert-danger', $('form', $("#editprcsModal"))).hide();
				$(".msg", $('form', $("#editprcsModal"))).text("");
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
					$("#editprcsModal").modal('show');
					$("#editprcsModal").on(
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
			$('form', $("#editprcsModal")).submit();
		});

		var prcsValid = Sunline.getValidate($('form', $("#editprcsModal")),
				function() {
					var data = {};
					$.each($("input", $("#editprcsModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("kcp/pbsftc", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editprcsModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editprcsModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editprcsModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editprcsModal")))
											.show();
								}
								$(".msg", $('form', $("#editprcsModal"))).text(
										ret.msg);
							});

				}, {
					packcd : {
						required : true
					},
					packam : {
						number : true,
						maxlength:8
					},
					sumnum : {
						number : true,
						maxlength:8
					},
					sumamt : {
						number : true,
						maxlength:8
					},
					prdnum : {
						number : true,
						maxlength:8
					},
					favpec : {
						number : true,
						maxlength:8
					},
					favnum : {
						number : true,
						maxlength:8
					}
				});

	};

	return {
		init : function() {
			handleTable();
		}
	}
}();