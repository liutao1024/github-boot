var kuproleperm = function() {

	/**
	 * 枚举类型调取
	 */
	var permtpDict = Sunline.getDict("E_PERMTP"); // 权限类型
	var crcycdDict = Sunline.getDict("E_CRCYCD"); // 币种
	var trantpDict = Sunline.getDict("E_TRANTP"); // 交易类型
	var roleidDict = Sunline.getDict("roletp","/roleid","roleid","rolena") ;//角色字典
	var permcdDict = Sunline.getDict("permtp","/permcd","permcd","permna") ;//权限字典

	$("input[name='permtp']").select2({
		data : permtpDict,
		allowClear : true,
	});
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='trantp']").select2({
		data : trantpDict,
		allowClear : true
	});
	
	$("input[name='roleid']").select2({
		data : roleidDict,
		allowClear : true,
		placeholder : "请选择",
	});
	$("input[name='permcd']").select2({
		data : permcdDict,
		allowClear : true,
		placeholder : "请选择",
	});
	$("input[name='q_roleid']").select2({
		data : roleidDict,
		allowClear : true,
		placeholder : "请选择",
	});
	$("input[name='q_permcd']").select2({
		data : permcdDict,
		allowClear : true,
		placeholder : "请选择",
	});

	var handleTable = function() {
		var typegrid = new Datatable();
 		var typeurl = Sunline.ajaxPath("perm/qrrope"); // URL???
		var typesendData = [ "roleid","scencd","scenvl","pscode","permtp","crcycd","trantp"]; // 主键
		
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
									"data" : "roleid", // 角色代码
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < roleidDict.length; i++) {
											if (roleidDict[i].id == data) {
												return roleidDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "scencd", // 场景代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "scenvl", // 场景值
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pscode", // 外部处理码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "permtp", 
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < permtpDict.length; i++) {
											if (permtpDict[i].id == data) {
												return permtpDict[i].text;
											}
										}
										return data;
									}
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
									"data" : "trantp", 
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < trantpDict.length; i++) {
											if (trantpDict[i].id == data) {
												return trantpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "permcd", 
									"sortable" : false,  
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < permcdDict.length; i++) {
											if (permcdDict[i].id == data) {
												return permcdDict[i].text;
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
												+ data.roleid+","+data.scencd+","+data.scenvl+","+data.pscode+","+data.permtp+","+data.crcycd+","+data.trantp+
												"'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
										+ data.roleid+","+data.scencd+","+data.scenvl+","+data.pscode+","+data.permtp+","+data.crcycd+","+data.trantp+
										"'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='roleid']").attr("readOnly",true);
				$("input[name='scencd']").attr("readOnly",true);
				$("input[name='scenvl']").attr("readOnly",true);
				$("input[name='pscode']").attr("readOnly",true);
				$("input[name='permtp']").attr("readOnly",true);
				$("input[name='crcycd']").attr("readOnly",true);
				$("input[name='trantp']").attr("readOnly",true);
				$("input[name='roleid']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
				$("input[name='scencd']").val($(nRowA[1]).text()); 
				$("input[name='scenvl']").val($(nRowA[2]).text()); 
				$("input[name='pscode']").val($(nRowA[3]).text()); 
				$("input[name='permtp']").val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
				$("input[name='crcycd']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
				$("input[name='trantp']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
				$("input[name='permcd']").val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change");
				
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

		$('input[name="pscode"]', $("#edittypeModal")).blur(function(){
			$('input[name="scenvl"]', $("#edittypeModal")).val(
					$('input[name="pscode"]', $("#edittypeModal")).val());
			
		});
		// 新增窗口
		$("#add_type_btn").bind(
				"click",
				function() {
					// 解除input readOnly属性
					// 清空 input值
					$("input", $("#edittypeModal")).val("").trigger("change");
//					$("input[name='typecd']", $("#edittypeModal")).val(prodcd);
					$('input', $("#edittypeModal")).removeAttr("readOnly");
					$('input[name="scenvl"]', $("#edittypeModal")).attr("readOnly",true);
					$('input[name="scencd"]', $("#edittypeModal")).val("PRCSCD").attr("readOnly",true);
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
					Sunline.ajaxRouter("perm/adrope", data, 'post',
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
		$(".filter-cancel").click(function(){
			$("input[name='q_roleid']").select2("val","");
			$("input[name='q_permcd']").select2("val","");
//			$("input[name='roletp']").select2("val","").trigger("change");
//			$("input[name='syscod']").select2("val","").trigger("change");
		});
	};

	return {
		init : function() {
			handleTable();
		}
	}

}();