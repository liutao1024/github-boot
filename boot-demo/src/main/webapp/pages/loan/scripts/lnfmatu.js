var lnfmatu = function() {

	var crcycdDict = Sunline.getDict("E_CRCYCD");// 币种
	var instrpDict = Sunline.getDict("E_INSTRP");// 到期扣息规则
	var mahdtpDict = Sunline.getDict("E_HDAYTP");// 整笔到期遇节假日顺延规则
	var isexpdDict = Sunline.getDict("E_ISEXPD");// 允许贷款展期
	var expdtpDict = Sunline.getDict("E_EXPDTP");// 展期方式
	var expdrpDict = Sunline.getDict("E_EXPDRP");// 展期需足额扣款

	$("#editmatuModal input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("#editmatuModal input[name='instrp']").select2({
		data : instrpDict,
		allowClear : true
	});
	$("#editmatuModal input[name='mahdtp']").select2({
		data : mahdtpDict,
		allowClear : true
	});
	$("#editmatuModal input[name='isexpd']").select2({
		data : isexpdDict,
		allowClear : true
	});
	$("#editmatuModal input[name='expdtp']").select2({
		data : expdtpDict,
		allowClear : true
	});
	$("#editmatuModal input[name='expdrp']").select2({
		data : expdrpDict,
		allowClear : true
	});

	var handleTable = function(prodcd) {
		var matugrid = new Datatable();
		var matuurl = Sunline.ajaxPath("loan/qrmatu");
		var matusendData = [ "prodcd", "crcycd" ];
		if (!Sunline.isNull(prodcd)) {
			matugrid.setAjaxParam("q_prodcd", prodcd);
		}
		matugrid
				.init({
					src : $("#datatable_matu"),
					deleteData : matusendData,
					onSuccess : function(matugrid) {
					},
					onError : function(matugrid) {
					},
					dataTable : {
						"ajax" : {
							url : matuurl
						},
						"columns" : [
								{
									"data" : "prodcd",// 产品代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd",// 币种
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
									"data" : "instrp",// 到期扣息规则
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < instrpDict.length; i++) {
											if (instrpDict[i].id == data) {
												return instrpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mahdtp",// 整笔到期遇节假日顺延规则
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < mahdtpDict.length; i++) {
											if (mahdtpDict[i].id == data) {
												return mahdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mxexam",// 结清时免除最大金额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "isexpd",// 允许贷款展期
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isexpdDict.length; i++) {
											if (isexpdDict[i].id == data) {
												return isexpdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "expdtp",// 展期方式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < expdtpDict.length; i++) {
											if (expdtpDict[i].id == data) {
												return expdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "expdts",// 展期最大次数
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "expdtm",// 展期最长期限
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "expdrp",// 展期需足额扣款
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < expdrpDict.length; i++) {
											if (expdrpDict[i].id == data) {
												return expdrpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "expdru",// 展期规则编号
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.crcycd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.crcycd + "'>删除 </a>";
									}
								} ]
					}
				});
		matugrid.bindTableDelete(matusendData);// 绑定删除按钮

		matugrid.bindTableEdit(matusendData,
				function(nRowA) {
					// 主键不可修改
					$("input[name='prodcd']", $("#editmatuModal")).attr(
							"readOnly", true);
					$("input[name='crcycd']", $("#editmatuModal")).attr(
							"readOnly", true);
					// 给input框赋值
					$("input[name='prodcd']", $("#editmatuModal")).val(
							$(nRowA[0]).text());
					$("input[name='crcycd']", $("#editmatuModal")).val(
							$(nRowA[1]).text().substring(
									$(nRowA[1]).text().indexOf("[") + 1,
									$(nRowA[1]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='instrp']", $("#editmatuModal")).val(
							$(nRowA[2]).text().substring(
									$(nRowA[2]).text().indexOf("[") + 1,
									$(nRowA[2]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='mahdtp']", $("#editmatuModal")).val(
							$(nRowA[3]).text().substring(
									$(nRowA[3]).text().indexOf("[") + 1,
									$(nRowA[3]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='mxexam']", $("#editmatuModal")).val(
							$(nRowA[4]).text());
					$("input[name='isexpd']", $("#editmatuModal")).val(
							$(nRowA[5]).text().substring(
									$(nRowA[5]).text().indexOf("[") + 1,
									$(nRowA[5]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='expdtp']", $("#editmatuModal")).val(
							$(nRowA[6]).text().substring(
									$(nRowA[6]).text().indexOf("[") + 1,
									$(nRowA[6]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='expdts']", $("#editmatuModal")).val(
							$(nRowA[7]).text());
					$("input[name='expdtm']", $("#editmatuModal")).val(
							$(nRowA[8]).text());
					$("input[name='expdrp']", $("#editmatuModal")).val(
							$(nRowA[9]).text().substring(
									$(nRowA[9]).text().indexOf("[") + 1,
									$(nRowA[9]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='expdru']", $("#editmatuModal")).val(
							$(nRowA[10]).text());
					$("#editmatuModal").modal('show');
					$("#editmatuModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#editmatuModal"))).hide();
								$(".alert-danger",
										$("form", $("#editmatuModal"))).hide();
								$(".msg", $("form", $("#editmatuModal"))).text(
										"");
								matugrid.submitFilter();
							});
				});

		// 新增窗口
		$("#add_matu_btn").bind(
				"click",
				function() {
					$("input[name='crcycd']", $("#editmatuModal")).attr(
							"readOnly", false);
					$("input[name='prodcd']", $("#editmatuModal")).val(prodcd);
					$("#editmatuModal").modal("show");
					$("#editmatuModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#editmatuModal"))).hide();
								$(".alert-danger",
										$("form", $("#editmatuModal"))).hide();
								$(".msg", $("form", $("#editmatuModal"))).text(
										"");
								matugrid.submitFilter();
							});
					return false;
				});
		
		$("#editmatuModal").click(function(){
		   	  $(".select-close").select2("close");
		     });

		$("#btn_save_matu").click(function() {
			$("form", $("#editmatuModal")).submit();
		});

		var matuValid = Sunline.getValidate($("form", "#editmatuModal"),
				function() {
					var data = {};
					$.each($("input", $("#editmatuModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("loan/edmatu", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#editmatuModal")))
											.show();
									$(".alert-danger",
											$("form", $("#editmatuModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#editmatuModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#editmatuModal")))
											.show();
								}
								$(".msg", $("form", $("#editmatuModal"))).text(
										ret.msg);
							});

				}, {
					prodcd : {
						required : true
					},
					crcycd : {
						required : true
					},
					instrp : {},
					mahdtp : {},
					mxexam : {
						maxlength : 21
					},
					isexpd : {},
					expdtp : {},
					expdts : {
						maxlength : 19
					},
					expdtm : {
						maxlength : 6
					},
					expdrp : {},
					expdru : {
						maxlength : 10
					}
				});
	}

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}

}();
