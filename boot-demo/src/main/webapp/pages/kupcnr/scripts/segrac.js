var segrac = function(){
	var acttypDict = Sunline.getDict("D_ACTTYP"); // 账户分类
	$("input[name='newtyp']").select2({
		data : acttypDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	var flag = true;
	var queryInfo = function(){

		if(flag){//初始化
			handleTable();
			flag = false;
		}else{
			typegrid.setAjaxParam("custac",$("#custac").val());
			typegrid.setAjaxParam("acctno",$("#acctno").val());
			typegrid.submitFilter();
		}
	}
	var typegrid = new Datatable();
	var handleTable = function(){
		typegrid.setAjaxParam("custac",$("#custac").val());
		typegrid.setAjaxParam("acctno",$("#acctno").val());
		var url = Sunline.ajaxPath("kupcon/segrac");
		var typesendData = ["custac"];
		typegrid.init({
					src : $("#tran_froz_list"),
					onSuccess : function(typegrid) {
					},
					onError : function(typegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : url,
						},
						"columns" : [
								{
									"data" : "acctno",//负债账号
									"sortable" : false,
									"searchable" : false
								},
								 {
									"data" : "custac",//客户账号
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "acttyp",//账户分类
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										for(var i=0;i<acttypDict.length;i++){
											if(acttypDict[i].id == data){
												return acttypDict[i].text;
											}
										}
										return "";
									}
								},
								{
									"data" : "mechno",//商户号
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mechnm",//商户名称
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.custac+ "'>升级 </a>";
									}
								}
								]
					}
		});
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("#acctno1").val($(nRowA[0]).text()); 
				$("#custac1").val($(nRowA[1]).text());
				$("#newtyp").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
				
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
					Sunline.ajaxRouter("kupcon/upgrac", data, 'post',
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
		//清空
		$("#cancle").click(function(){
			$("#custac").val("");
			$("#acctno").val("");
		});
	}
	return {
		init : function(){
			click();
		},
		queryUserInfo : function(){
			queryInfo();
		}
	};
}()