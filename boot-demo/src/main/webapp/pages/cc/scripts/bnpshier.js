var BnpShier=function(){
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/bnpshier");
		var editUrl;
		var sendData = ["hierid"];
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
							"data" : "hierid",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "descrp",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "bnphir",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.hierid
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.hierid+"'>删除 </a>";
							}
						} ]
			}
		});
		grid.bindTableDelete(sendData);// 绑定删除按钮
		
		grid.bindTableEdit(sendData,//绑定编辑按钮
				function(nRowA) {
					// 主键不可修改
					$("input[name='hierid']", $("#edittypeModal")).attr(
							"readOnly", true);
					// 给input框赋值
					$("input[name='hierid']", $("#edittypeModal")).val(
							$(nRowA[0]).text());
					$("input[name='descrp']", $("#edittypeModal")).val(
							$(nRowA[1]).text());
					$("input[name='bnphir']", $("#edittypeModal")).val(
							$(nRowA[2]).text());
					show();
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
		
		show =function(){
			$(".alert-success",
					$("form", $("#edittypeModal")))
					.hide();
			$(".alert-danger",
					$("form", $("#edittypeModal")))
					.hide();
				
			}
		
		// 新增窗口
		$("#add_bs_btn").bind(
				"click",
				function() {
					$("#hierid").val("");
					$("#descrp").val("");
					$("#bnphir").val("");
					$('input', "#edittypeModal").removeAttr("readOnly");
					show();
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
					Sunline.ajaxRouter("cc/edbnpshier", data, "post",
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
					hierid : {
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