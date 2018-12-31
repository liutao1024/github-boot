var kuprole = function() {
	var roletpDict = Sunline.getDict("E_ROLETP");
	var syscodDict = Sunline.getDict("E_APPLID");
	var statusDict = Sunline.getDict("E_YES___");
	$("input[name='roletp']").select2({
		data : roletpDict,
		allowClear : true
	});
	$("input[name='syscod']").select2({
		data : syscodDict,
		allowClear : true
	});
	$("input[name='q_syscod']").select2({
		data : syscodDict,
		allowClear : true,
		placeholder : "请选择",
	});
	$("input[name='q_roletp']").select2({
		data : roletpDict,
		allowClear : true,
		placeholder : "请选择",
	});
	$("input[name='rostat']").select2({
		data : statusDict,
		allowClear : true
	});
	var handleTable = function() {
		var typegrid = new Datatable();
		var typeurl = Sunline.ajaxPath("perm/qrrole"); // URL???
		var typesendData = ["roleid", "rolena", "roletp", "syscod"]; // 主键
		
		typegrid
				.init({
					src : $("#datatable_ajax"),
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
									"data" : "roleid", // 额度产品号
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "rolena", 
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "roletp", 
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < roletpDict.length; i++) {
											if (roletpDict[i].id == data) {
												return roletpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "spclsc", 
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : "spclbr", 
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : "syscod", 
									"sortable" : false,  
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < syscodDict.length; i++) {
											if (syscodDict[i].id == data) {
												return syscodDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "rostat", 
									"sortable" : false,  
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < statusDict.length; i++) {
											if (statusDict[i].id == data) {
												return statusDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "desctx", 
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.roleid+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.roleid+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='roleid']").attr("readOnly",true);
				$("input[name='spclsc']").attr("readOnly",true);
				$("input[name='spclbr']").attr("readOnly",true);
				$("input[name='roletp']").attr("readOnly",true);
				$("input[name='syscod']").attr("readOnly",true);	
				$("input[name='roleid']").val($(nRowA[0]).text()); 
				$("input[name='rolena']").val($(nRowA[1]).text());
				$("input[name='roletp']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
				$("input[name='spclsc']").val($(nRowA[3]).text());
				$("input[name='spclbr']").val($(nRowA[4]).text());
				$("input[name='syscod']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
				$("input[name='rostat']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
				$("input[name='desctx']").val($(nRowA[7]).text());
					$("#editModal").modal('show');
					$("#editModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editModal"))).hide();
								$('.alert-danger',
										$('form', $("#editModal"))).hide();
								$(".msg", $('form', $("#editModal"))).text(
										"");
								typegrid.submitFilter();
							});
				});

		// 新增窗口
		$("#add_btn").bind(
				"click",
				function() {
					// 解除input readOnly属性
					$('input', $("#edit_form")).removeAttr("readOnly");
					//这两个值暂时没用到，不用输入
					$("input[name='spclsc']").attr("readOnly",true);
					$("input[name='spclbr']").attr("readOnly",true);
					$("input[name='roletp']").attr("readOnly",false);
					$("input[name='syscod']").attr("readOnly",false);					
					// 清空 input值
					$("input", $("#editModal")).val("").trigger("change");
//					$("input[name='typecd']", $("#edittypeModal")).val(prodcd);
					$("#editModal").modal('show');
					$("#editModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#editModal"))).hide();
								$('.alert-danger',
										$('form', $("#editModal"))).hide();
								$(".msg", $('form', $("#editModal"))).text(
										"");
								typegrid.submitFilter();
							});
					return false;
				});

		$("#btn_save_edit").click(function() { // 保存按钮
			$('form', $("#editModal")).submit();
		});

		// 赋值DIV
		var typeValid = Sunline.getValidate($('form', $("#editModal")),
				function() {
					var data = {};
					$.each($("input", $("#editModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("perm/adrole", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editModal")))
											.show();
								}
								$(".msg", $('form', $("#editModal"))).text(
										ret.msg);
							});

				}
				);
				$(".filter-cancel").click(function(){
					$("input[name='q_roleid']").select2("val","");
					$("input[name='q_rolena']").select2("val","");
					$("input[name='q_roletp']").select2("val","");
					$("input[name='q_syscod']").select2("val","");
				});
	};

	return {
		init : function() {
			handleTable();
		}
	}

}();