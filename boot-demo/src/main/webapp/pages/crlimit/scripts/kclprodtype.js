var kclprodtype = function() {

	/**
	 * 枚举类型调取
	 */
	var cllevlDict = Sunline.getDict("E_CLLEVL"); // 额度级别
	var busicdDict = Sunline.getDict("E_BUSICD"); // 业务种类编号

	$("input[name='cllevl']").select2({
		data : cllevlDict,
		allowClear : true
	});
	$("input[name='busicd']").select2({
		data : busicdDict,
		allowClear : true
	});


	var handleTable = function() {
		var typegrid = new Datatable();
		var typeurl = Sunline.ajaxPath("crlimit/qrtype"); // URL???
		var typesendData = [ "cltpcd"]; // 主键
		
		typegrid
				.init({
					src : $("#datatable_type"),
					deleteData : typesendData,
					onSuccess : function(typegrid) {
					},
					onError : function(typegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : typeurl,
						},
						"columns" : [
								{
									"data" : "cltpcd", // 额度产品号
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cllevl", 
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cllevlDict.length; i++) {
											if (cllevlDict[i].id == data) {
												return cllevlDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "busicd", 
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < busicdDict.length; i++) {
											if (busicdDict[i].id == data) {
												return busicdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "prodcd", 
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.cltpcd+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.cltpcd+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='cltpcd']").val($(nRowA[0]).text()); 
				$("input[name='cllevl']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
				$("input[name='updtfg']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
				$("input[name='prodcd']").val($(nRowA[3]).text()); 
				
					$("#edittypeModal").modal('show');
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#edittypeModal"))).hide();
								$('.alert-danger',
										$('form', $("#edittypeModal"))).hide();
								$(".msg", $('form', $("#edittypeModal"))).text(
										"");
								typegrid.submitFilter();
							});
				});

		// 新增窗口
		$("#add_type_btn").bind(
				"click",
				function() {
					// 解除input readOnly属性
					// 清空 input值
					$("input", $("#edittypeModal")).val("").trigger("change");
//					$("input[name='typecd']", $("#edittypeModal")).val(prodcd);
					$("#edittypeModal").modal('show');
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#edittypeModal"))).hide();
								$('.alert-danger',
										$('form', $("#edittypeModal"))).hide();
								$(".msg", $('form', $("#edittypeModal"))).text(
										"");
								typegrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_type").click(function() { // 保存按钮
			$('form', $("#edittypeModal")).submit();
		});

		// 赋值DIV
		var typeValid = Sunline.getValidate($('form', $("#edittypeModal")),
				function() {
					var data = {};
					$.each($("input", $("#edittypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("crlimit/edtype", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#edittypeModal")))
											.show();
									$('.alert-danger',
											$('form', $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#edittypeModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#edittypeModal")))
											.show();
								}
								$(".msg", $('form', $("#edittypeModal"))).text(
										ret.msg);
							});

				}
				);

	};

	return {
		init : function() {
			handleTable();
		}
	}

}();