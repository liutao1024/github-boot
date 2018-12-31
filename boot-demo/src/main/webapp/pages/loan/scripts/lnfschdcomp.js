var lnfschdcomp = function() {

	var crcycdDict = Sunline.getDict("E_CRCYCD");// 币种
	var comptpDict = Sunline.getDict("E_COMPTP");// 组合类型
	var schdtpDict = Sunline.getDict("E_SCHDTP");// 还款方式
	var eqmodeDict = Sunline.getDict("E_EQMODE");// 等额处理规则

	$("#editcompModal input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("#editcompModal input[name='comptp']").select2({
		data : comptpDict,
		allowClear : true
	});
	$("#editcompModal input[name='schdtp']").select2({
		data : schdtpDict,
		allowClear : true
	});
	$("#editcompModal input[name='eqmode']").select2({
		data : eqmodeDict,
		allowClear : true
	});

	var handleTable = function(prodcd) {
		var compgrid = new Datatable();
		var compurl = Sunline.ajaxPath("loan/qrcomp");
		var compsendData = [ "prodcd", "crcycd", "comptp", "sortno" ];
		if (!Sunline.isNull(prodcd)) {
			compgrid.setAjaxParam("q_prodcd", prodcd);
		}
		compgrid
				.init({
					src : $("#datatable_comp"),
					deleteData : compsendData,
					onSuccess : function(compgrid) {
					},
					onError : function(compgrid) {
					},
					dataTable : {
						"ajax" : {
							url : compurl
						},
						"columns" : [
								{
									"data" : "sortno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prodcd",
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
									"data" : "comptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < comptpDict.length; i++) {
											if (comptpDict[i].id == data) {
												return comptpDict[i].text;
											}
										}
										return data;
									}
								},

								{
									"data" : "schdtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < schdtpDict.length; i++) {
											if (schdtpDict[i].id == data) {
												return schdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "eqmode",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < eqmodeDict.length; i++) {
											if (eqmodeDict[i].id == data) {
												return eqmodeDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "progvl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "progpv",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "repyfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prinfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ovdufm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "istlnm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ratecd",
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
												+ data.crcycd
												+ ","
												+ data.comptp
												+ ","
												+ data.sortno + "'>编辑 </a>";
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
												+ data.crcycd
												+ ","
												+ data.comptp
												+ ","
												+ data.sortno + "'>删除 </a>";
									}
								} ]
					}
				});
		compgrid.bindTableDelete(compsendData);// 绑定删除按钮

		compgrid.bindTableEdit(compsendData,
				function(nRowA) {
					// 主键不可修改
					$("input[name='prodcd']", $("#editcompModal")).attr(
							"readOnly", true);
					$("input[name='crcycd']", $("#editcompModal")).attr(
							"readOnly", true);
					$("input[name='comptp']", $("#editcompModal")).attr(
							"readOnly", true);
					$("input[name='sortno']", $("#editcompModal")).attr(
							"readOnly", true);
					// 给input框赋值
					$("input[name='prodcd']", $("#editcompModal")).val(
							$(nRowA[0]).text());
					$("input[name='crcycd']", $("#editcompModal")).val(
							$(nRowA[1]).text().substring(
									$(nRowA[1]).text().indexOf("[") + 1,
									$(nRowA[1]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='comptp']", $("#editcompModal")).val(
							$(nRowA[2]).text().substring(
									$(nRowA[2]).text().indexOf("[") + 1,
									$(nRowA[2]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='sortno']", $("#editcompModal")).val(
							$(nRowA[3]).text());
					$("input[name='schdtp']", $("#editcompModal")).val(
							$(nRowA[4]).text().substring(
									$(nRowA[4]).text().indexOf("[") + 1,
									$(nRowA[4]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='eqmode']", $("#editcompModal")).val(
							$(nRowA[5]).text().substring(
									$(nRowA[5]).text().indexOf("[") + 1,
									$(nRowA[5]).text().indexOf("]"))).trigger(
							"change");
					$("input[name='progvl']", $("#editcompModal")).val(
							$(nRowA[6]).text());
					$("input[name='progpv']", $("#editcompModal")).val(
							$(nRowA[7]).text());
					$("input[name='repyfm']", $("#editcompModal")).val(
							$(nRowA[8]).text());
					$("input[name='prinfm']", $("#editcompModal")).val(
							$(nRowA[9]).text());
					$("input[name='ovdufm']", $("#editcompModal")).val(
							$(nRowA[10]).text());
					$("input[name='istlnm']", $("#editcompModal")).val(
							$(nRowA[11]).text());
					$("input[name='ratecd']", $("#editcompModal")).val(
							$(nRowA[12]).text());
					$("#editcompModal").modal('show');
					$("#editcompModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#editcompModal"))).hide();
								$(".alert-danger",
										$("form", $("#editcompModal"))).hide();
								$(".msg", $("form", $("#editcompModal"))).text(
										"");
								compgrid.submitFilter();
							});
				});
		
		$("#editcompModal").click(function(){
		   	  $(".select-close").select2("close");
		     });
		
		// 新增窗口
		$("#add_comp_btn").bind(
				"click",
				function() {
					$("input[name='crcycd']", $("#editcompModal")).attr(
							"readOnly", false);
					$("input[name='comptp']", $("#editcompModal")).attr(
							"readOnly", false);
					$("input[name='sortno']", $("#editcompModal")).attr(
							"readOnly", false);
					$("input[name='prodcd']", $("#editcompModal")).val(prodcd);
					$("#editcompModal").modal("show");
					$("#editcompModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#editcompModal"))).hide();
								$(".alert-danger",
										$("form", $("#editcompModal"))).hide();
								$(".msg", $("form", $("#editcompModal"))).text(
										"");
								compgrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_comp").click(function() {
			$("form", $("#editcompModal")).submit();
		});

		var compValid = Sunline.getValidate($("form", "#editcompModal"),
				function() {
					var data = {};
					$.each($("input", $("#editcompModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("loan/edcomp", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#editcompModal")))
											.show();
									$(".alert-danger",
											$("form", $("#editcompModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#editcompModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#editcompModal")))
											.show();
								}
								$(".msg", $("form", $("#editcompModal"))).text(
										ret.msg);
							});

				}, {
					prodcd : {
						required : true
					},
					crcycd : {
						required : true
					},
					comptp : {
						required : true
					},
					sortno : {
						required : true,
						maxlength : 19
					},
					schdtp : {},
					eqmode : {},
					progvl : {
						maxlength : 21
					},
					progpv : {
						maxlength : 19
					},
					repyfm : {
						maxlength : 8
					},
					prinfm : {
						maxlength : 8
					},
					ovdufm : {
						maxlength : 8
					},
					istlnm : {
						maxlength : 19
					},
					ratecd : {
						maxlength : 32
					}
				});
	}

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}

}();
