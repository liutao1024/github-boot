var TranCodeMapp=function(){
	//获取需要的枚举
	var stxncdDict = Sunline.getDict("stxncd");//系统交易代码
	$("#edittypeModal input[name='stxncd']").select2({
		data : stxncdDict,
		allowClear : true
	});
	
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/trancodemapp");
		var editUrl;
		var sendData = ["stxncd","txncdx"];
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
							"data" : "stxncd",
							"sortable" : false,
							"searchable": false,
							"render" : function(data,type,full){
								for(var i=0 ; i<stxncdDict.length ; i++){
									if (stxncdDict[i].id == data) {
										return stxncdDict[i].text;
									}
									
								}
								return data;
							}
						},
						{
							"data" : "txncdx",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.stxncd
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.stxncd+"'>删除 </a>";
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
									
					$('#stxncd').val(
							$(nRowA[1]).text().substring(
									$(nRowA[1]).text().indexOf("[") + 1,
									$(nRowA[1]).text().indexOf("]"))).trigger(
									"change");
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
		$("#add_tcm_btn").bind(
				"click",
				function() {
					$("#txncdx").val("");
					$("#stxncd").select2("val","");	
					show();
					$('input', "#edittypeModal").removeAttr("readOnly");
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
					Sunline.ajaxRouter("cc/edtcmp", data, "post",
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