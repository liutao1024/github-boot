var kupbst = function() {
	var handleTable = function() {
		var typegrid = new Datatable();
		var typeurl = Sunline.ajaxPath("kupcon/sekubi"); 
		var typesendData = [ "bustyp"]; // 主键
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
									"data" : "bustyp", // 业务类型
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bsdesc", //业务类型说明
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.bustyp+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.bustyp+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='bustyp']",$("#edittypeModal")).val($(nRowA[0]).text()).attr("readOnly","readOnly"); 
				$("input[name='bsdesc']",$("#edittypeModal")).val($(nRowA[1]).text());
				
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
					$("input", $("#edittypeModal")).val("").trigger("change").removeAttr("readOnly");
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
					Sunline.ajaxRouter("kupcon/upkubi", data, 'post',
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
	var click = function(){
		$("#clearinput").bind("click",function(){
			$("#bustyp").val("");
			$("#bsdesc").val("");
		});
	}
	return {
		init : function() {
			handleTable();
			click();
		}
	}

}();