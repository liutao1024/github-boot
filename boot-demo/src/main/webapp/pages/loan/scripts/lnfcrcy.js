var lnfcrcy = function() {

	/**
	 * 枚举类型调取
	 */
	var crruleDict = Sunline.getDict("E_CRRULE"); // 币种规则
	var decrcyDict = Sunline.getDict("E_CRCYCD"); // 指定币种

	$("input[name='crrule']").select2({
		data : crruleDict,
		allowClear : true
	});
	$("input[name='decrcy']").select2({
		data : decrcyDict,
		allowClear : true
	});

	var handleTable = function(prodcd) {
		var crcygrid = new Datatable();
		var crcyurl = Sunline.ajaxPath("loan/qrcrcy"); // URL???
		var crcysendData = [ "prodcd", "object" ]; // 主键
		if (!Sunline.isNull(prodcd)) {
			crcygrid.setAjaxParam("q_prodcd", prodcd);
		}
		crcygrid
				.init({
					src : $("#datatable_crcy"),
					deleteData : crcysendData,
					onSuccess : function(crcygrid) {
					},
					onError : function(crcygrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : crcyurl,
						},
						"columns" : [
								{
									"data" : "prodcd", // 产品代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "object", // 功能对象
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "objtna", // 对象名称
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crrule", // 币种规则
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < crruleDict.length; i++) {
											if (crruleDict[i].id == data) {
												return crruleDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "decrcy", // 指定币种
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < decrcyDict.length; i++) {
											if (decrcyDict[i].id == data) {
												return decrcyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.object + "'>编辑 </a>";
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
												+ data.object + "'>删除 </a>";
									}
								} ]
					}
				});
		crcygrid.bindTableDelete(crcysendData); // 绑定数据删除？？？？
		crcygrid.bindTableEdit(crcysendData,
				function(nRowA) {
					// 主键不可修改
					$("input[name='object']", $("#editcrcyModal")).attr(
							"readOnly", true);
					// 给input框赋值
					// 基本类型
					$("input[name='prodcd']", $("#editcrcyModal")).val(
							$(nRowA[0]).text());
					// 功能对象
					$("input[name='object']", $("#editcrcyModal")).val(
							$(nRowA[1]).text());
					// 对象名称
					$("input[name='objtna']", $("#editcrcyModal")).val(
							$(nRowA[2]).text());
					// 币种规则
					$("input[name='crrule']", $("#editcrcyModal")).val(
							$(nRowA[3]).text().substring(
									$(nRowA[3]).text().indexOf("[") + 1,
									$(nRowA[3]).text().indexOf("]"))).trigger(
							"change");
					// 指定币种
					$("input[name='decrcy']", $("#editcrcyModal")).val(
							$(nRowA[4]).text().substring(
									$(nRowA[4]).text().indexOf("[") + 1,
									$(nRowA[4]).text().indexOf("]"))).trigger(
							"change");
					$("#editcrcyModal").modal('show');
					$("#editcrcyModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editcrcyModal"))).hide();
								$('.alert-danger',
										$('form', $("#editcrcyModal"))).hide();
								$(".msg", $('form', $("#editcrcyModal"))).text(
										"");
								crcygrid.submitFilter();
							});
				});
		
		$("#editcrcyModal").click(function(){
		   	  $(".select-close").select2("close");
     	});
		
		// 新增窗口
		$("#add_crcy_btn").bind(
				"click",
				function() {
					// 解除input readOnly属性
					$("input[name='object']", $("#editcrcyModal")).attr(
							"readOnly", false);
					// 清空 input值
					$("input", $("#editcrcyModal")).val("").trigger("change");
					$("input[name='prodcd']", $("#editcrcyModal")).val(prodcd);
					$("#editcrcyModal").modal('show');
					$("#editcrcyModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editcrcyModal"))).hide();
								$('.alert-danger',
										$('form', $("#editcrcyModal"))).hide();
								$(".msg", $('form', $("#editcrcyModal"))).text(
										"");
								crcygrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_crcy").click(function() { // 保存按钮
			$('form', $("#editcrcyModal")).submit();
		});

		// 赋值DIV
		var crcyValid = Sunline.getValidate($('form', $("#editcrcyModal")),
				function() {
					var data = {};
					$.each($("input", $("#editcrcyModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("loan/edcrcy", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editcrcyModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editcrcyModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editcrcyModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editcrcyModal")))
											.show();
								}
								$(".msg", $('form', $("#editcrcyModal"))).text(
										ret.msg);
							});

				}, { // 字段规则
					prodcd : {
						required : true,
						maxlength : 10
					}, // 产品代码(必填，最大长度10)
					object : {
						required : true,
						maxlength : 10
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