var kupcnt = function() {

	/**
	 * 枚举类型调取
	 */
	var acttypDict = Sunline.getDict("D_ACTTYP"); // 账户分类
	var yes___Dict = Sunline.getDict("E_YES___"); // 是否允许办理

	$("input[name='acttyp']").select2({
		data : acttypDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("input[name='ifperm']").select2({
		data : yes___Dict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});


	var handleTable = function() {
		var typegrid = new Datatable();
		var typeurl = Sunline.ajaxPath("kupcon/sekubc"); 
		var typesendData = [ "prcode","acttyp"]; // 主键
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
									"data" : "prcode", // 处理码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bsdesc", //业务描述
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "acttyp", //账户分类
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < acttypDict.length; i++) {
											if (acttypDict[i].id == data) {
												return acttypDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "ifperm", //是否允许办理
									"sortable" : false,  
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yes___Dict.length; i++) {
											if (yes___Dict[i].id == data) {
												return yes___Dict[i].text;
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
												+ data.prcode+","+data.acttyp+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prcode+","+data.acttyp+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='prcode']",$("#edittypeModal")).val($(nRowA[0]).text()).attr("readOnly","readOnly"); 
				$("input[name='bsdesc']",$("#edittypeModal")).val($(nRowA[1]).text());
				$("input[name='acttyp']",$("#edittypeModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).attr("readOnly","readOnly").trigger("change");
				$("input[name='ifperm']",$("#edittypeModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change"); 
				
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
					$("input", $("#edittypeModal")).removeAttr("readOnly");
					$("#ifperm1").select2("val","");
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
					Sunline.ajaxRouter("kupcon/upkubc", data, 'post',
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
			$("#prcode").val("");
			$("#acttyp").select2("val","");
			$("#ifperm").select2("val","");
		});
	}
	return {
		init : function() {
			handleTable();
			click();
		}
	}

}();