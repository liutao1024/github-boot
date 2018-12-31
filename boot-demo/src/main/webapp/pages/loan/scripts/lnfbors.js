var lnfbors = function() {

	/**
	 * 枚举类型调取
	 */
	var crcycdDict = Sunline.getDict("crcycd"); // 币种
	var borsmdDict = Sunline.getDict("E_BORSMD"); // 证券化资产类型
	var borstpDict = Sunline.getDict("E_BORSTP"); // 资产转让类型
	var borsbyDict = Sunline.getDict("E_BORSBY"); // 资产融通方式
	var mngrtpDict = Sunline.getDict("E_MNGRTP"); // 资产管理模式

	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='borsmd']").select2({
		data : borsmdDict,
		allowClear : true
	});
	$("input[name='borstp']").select2({
		data : borstpDict,
		allowClear : true
	});
	$("input[name='borsby']").select2({
		data : borsbyDict,
		allowClear : true
	});
	$("input[name='mngrtp']").select2({
		data : mngrtpDict,
		allowClear : true
	});

	var handleTable = function(prodcd) {
		var borsgrid = new Datatable();
		var borsurl = Sunline.ajaxPath("loan/qrbors"); // URL???
		var borssendData = [ "prodcd", "crcycd" ]; // 主键
		if (!Sunline.isNull(prodcd)) {
			borsgrid.setAjaxParam("q_prodcd", prodcd);
		}
		borsgrid
				.init({
					src : $("#datatable_bors"),
					deleteData : borssendData,
					onSuccess : function(borsgrid) {
					},
					onError : function(borsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : borsurl,
						},
						"columns" : [
								{
									"data" : "prodcd", // 产品代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd", // 币种
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
									"data" : "borsmd", // 证券化资产类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < borsmdDict.length; i++) {
											if (borsmdDict[i].id == data) {
												return borsmdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "borstp", // 资产转让类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < borstpDict.length; i++) {
											if (borstpDict[i].id == data) {
												return borstpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "borsby", // 资产融通方式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < borsbyDict.length; i++) {
											if (borsbyDict[i].id == data) {
												return borsbyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mngrtp", // 资产管理模式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < mngrtpDict.length; i++) {
											if (mngrtpDict[i].id == data) {
												return mngrtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "rcprcd", // 应收款本金业务编码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "rcincd", // 应收款利息业务编码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pyprcd", // 应付款本金业务编码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pyincd", // 应付款利息业务编码
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
		borsgrid.bindTableDelete(borssendData); // 绑定数据删除？？？？
		borsgrid.bindTableEdit(borssendData,
				function(nRowA) {
					// 主键不可修改
					$("input[name='crcycd']", $("#editborsModal")).attr(
							"readOnly", true);
					// 给input框赋值
					// 基本类型
					$("input[name='prodcd']", $("#editborsModal")).val(
							$(nRowA[0]).text());
					// 枚举类型
					$("input[name='crcycd']", $("#editborsModal")).val(
							$(nRowA[1]).text().substring(
									$(nRowA[1]).text().indexOf("[") + 1,
									$(nRowA[1]).text().indexOf("]"))).trigger(
							"change");
					// 证券化资产类型
					$("input[name='borsmd']", $("#editborsModal")).val(
							$(nRowA[2]).text().substring(
									$(nRowA[2]).text().indexOf("[") + 1,
									$(nRowA[2]).text().indexOf("]"))).trigger(
							"change");
					// 资产转让类型
					$("input[name='borstp']", $("#editborsModal")).val(
							$(nRowA[3]).text().substring(
									$(nRowA[3]).text().indexOf("[") + 1,
									$(nRowA[3]).text().indexOf("]"))).trigger(
							"change");
					// 资产融通方式
					$("input[name='borsby']", $("#editborsModal")).val(
							$(nRowA[4]).text().substring(
									$(nRowA[4]).text().indexOf("[") + 1,
									$(nRowA[4]).text().indexOf("]"))).trigger(
							"change");
					// 资产管理模式
					$("input[name='mngrtp']", $("#editborsModal")).val(
							$(nRowA[5]).text().substring(
									$(nRowA[5]).text().indexOf("[") + 1,
									$(nRowA[5]).text().indexOf("]"))).trigger(
							"change");
					// 应收款本金业务编码
					$("input[name='rcprcd']", $("#editborsModal")).val(
							$(nRowA[6]).text());
					// 应收款利息业务编码
					$("input[name='rcincd']", $("#editborsModal")).val(
							$(nRowA[7]).text());
					// 应付款本金业务编码
					$("input[name='pyprcd']", $("#editborsModal")).val(
							$(nRowA[8]).text());
					// 应付款利息业务编码
					$("input[name='pyincd']", $("#editborsModal")).val(
							$(nRowA[9]).text());
					$("#editborsModal").modal('show');
					$("#editborsModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editborsModal"))).hide();
								$('.alert-danger',
										$('form', $("#editborsModal"))).hide();
								$(".msg", $('form', $("#editborsModal"))).text(
										"");
								borsgrid.submitFilter();
							});
				});
		
		$("#editborsModal").click(function(){
		   	  $(".select-close").select2("close");
     	});
		
		// 新增窗口
		$("#add_bors_btn").bind(
				"click",
				function() {
					// 解除input readOnly属性
					$("input[name='crcycd']", $("#editborsModal")).attr(
							"readOnly", false);
					// 清空 input值
					$("input", $("#editborsModal")).val("").trigger("change");
					$("input[name='prodcd']", $("#editborsModal")).val(prodcd);
					$("#editborsModal").modal('show');
					$("#editborsModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editborsModal"))).hide();
								$('.alert-danger',
										$('form', $("#editborsModal"))).hide();
								$(".msg", $('form', $("#editborsModal"))).text(
										"");
								borsgrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_bors").click(function() { // 保存按钮
			$('form', $("#editborsModal")).submit();
		});

		// 赋值DIV
		var borsValid = Sunline.getValidate($('form', $("#editborsModal")),
				function() {
					var data = {};
					$.each($("input", $("#editborsModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("loan/edbors", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editborsModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editborsModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editborsModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editborsModal")))
											.show();
								}
								$(".msg", $('form', $("#editborsModal"))).text(
										ret.msg);
							});

				}, { // 字段规则
					prodcd : {
						required : true,
						maxlength : 10
					}, // 产品代码(必填，最大长度10)
					crcycd : {
						required : true
					}
				// 货币代号必选
				});
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}

}();