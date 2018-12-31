var TranCode=function(){
	//获取需要的枚举
	var plantpDict = Sunline.getDict("plantp");//计划类型
	var indcatDict = Sunline.getDict("indcat");//处理类型
	var adjufgDict = Sunline.getDict("adjufg");//授权决定
	var logmodDict = Sunline.getDict("logmod");//入账逻辑模块
	$("#edittypeModal input[name='plantp']").select2({
		data : plantpDict,
		allowClear : true
	});
	$("#edittypeModal input[name='logmod']").select2({
		data : logmodDict,
		allowClear : true
	});
	$("#edittypeModal input[name='lockck']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='stmtfg']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='adjufg']").select2({
		data : adjufgDict,
		allowClear : true
	});
	
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/trancode");
		var editUrl;
		var sendData = ["txncdx"];
		grid.init({
			src : $("#datatable_ajax"),
			deleteData : sendData,
			onSuccess : function(grid) {
				
			},
			onError : function(grid) {
				
			},
			dataTable : { 
				"ajax" : {
					"url" : url, // ajax source
				},
				"columns" : [
						{
							"data" : "txncdx",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "txndes",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "plantp",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "logmod",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "lockck",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "stmtfg",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "adjufg",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "templs",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.txncdx
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.txncdx+"'>删除 </a>";
							}
						} ]
			}
		});
		grid.bindTableDelete(sendData);// 绑定删除按钮
		
		grid.bindTableEdit(sendData,//绑定编辑按钮
				function(nRowA) {
					// 主键不可修改
					$("input[name='txncdx']", $("#edittypeModal")).attr(
							"readOnly", true);
					// 给input框赋值
					$("input[name='txncdx']", $("#edittypeModal")).val(
							$(nRowA[0]).text());
					$("input[name='txndes']", $("#edittypeModal")).val(
							$(nRowA[1]).text());
					$("#plantp").select2("val",$(nRowA[2]).text());
					$("#logmod").select2("val",$(nRowA[3]).text());
					$("#lockck").select2("val",$(nRowA[4]).text());
					$("#stmtfg").select2("val",$(nRowA[5]).text());
					$("#adjufg").select2("val",$(nRowA[6]).text());
					
					$("#templs").val($(nRowA[7]).text());
					$("#edittypeModal").modal('show');
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#edittypeModal"))).hide();
								$(".alert-danger",
										$("form", $("#edittypeModal"))).hide();
								$(".msg", $("form", $("#edittypeModal"))).text(
										"");
								grid.submitFilter();
							});
				});
		
		// 新增窗口
		$("#add_tc_btn").bind(
				"click",
				function() {
					$("#txncdx", "#edittypeModal").removeAttr("readOnly");
					$("#txncdx").val("");
					$("#txndes").val("");
					$("#plantp").select2("val","");
					$("#mergfg").select2("val","");
					$("#logmod").select2("val","");
					$("#lockck").select2("val","");
					$("#stmtfg").select2("val","");
					$("#adjufg").select2("val","");
					$("#templs").val("");
					
					$("#edittypeModal").modal("show");
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#edittypeModal"))).hide();
								$(".alert-danger",
										$("form", $("#edittypeModal"))).hide();
								$(".msg", $("form", $("#edittypeModal"))).text(
										"");
								grid.submitFilter();
							});
					return false;
				});
		//保存
		$("#btn_save_type").click(function() {
			$("form", $("#edittypeModal")).submit();
		});
		var matuValid = Sunline.getValidate($("form", "#edittypeModal"),
				function() {
					var data = {};
					$.each($("input", $("#edittypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("cc/edtrancode", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.show();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.show();
								}
								$(".msg", $("form", $("#edittypeModal"))).text(
										ret.msg);
							});

				}, {
					txncdx : {
						required : true
					}					
				});
				
	}
	
	return {
		init : function() {
			handleTable();
		}
	}
}();