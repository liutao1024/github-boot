var kupbctr = function() {
	var handleTable3 = function(dateDict) {
		var date2 = [];
		for(var i=0 ; i<dateDict.length ; i++){	
			var images = {};
			images.id = dateDict[i].bustyp;
			images.text = dateDict[i].bustyp;
			console.log(images);
			date2[i]= images;			
		}
		$("#bustyp").select2({
			data : date2,
			allowClear : true
		});
	};
	
	var input = {};			
	input.bustyp = "";
	Sunline.ajaxRouter("kupcon/qrbstp", input, "POST", function(redata) {
		console.info(redata);
		if (redata.retCode == '0000') {	
			handleTable3(redata.pinfos);
			return;
		}
	}, function(redata) {
		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
		});
	}, "json", false);
	
	
	var handleTable = function() {
		var typegrid = new Datatable();
		var url = Sunline.ajaxPath("kupbctr/sekbcr"); // URL???
		var sendData = [ "jyclma" ]; // 主键

		typegrid
				.init({
					src : $("#datatable_type"),
					deleteData : sendData,
					onSuccess : function(typegrid) {
						$('.table-container .alert-danger').css("display",
								"none");
					},
					onError : function(typegrid) {
						console.info("It is error!");
					},
					dataTable : {
						"ajax" : {
							"url" : url,
						},
						"columns" : [
								{
									"data" : "jyclma", // 交易处理码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bustyp",//业务类型
									"sortable" : false,
									"searchable" : false
								/*"render" : function(data, type, full) {
									for (var i = 0; i < cllevlDict.length; i++) {
										if (cllevlDict[i].id == data) {
											return cllevlDict[i].text;
										}
									}
									return data;
								}*/
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.jyclma + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.jyclma + "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(sendData); // 绑定数据删除？？？？
		typegrid.bindTableEdit(sendData, function(nRowA) {
			// 主键不可修改
			$("input[name='jyclma']").val($(nRowA[0]).text());
			$("input[name='jyclma']").attr("readonly","readonly");
			$("input[name='bustyp']").val($(nRowA[1]).text());

			$("#edittypeModal").modal('show');
			$("#edittypeModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#edittypeModal"))).hide();
				$('.alert-danger', $('form', $("#edittypeModal"))).hide();
				$(".msg", $('form', $("#edittypeModal"))).text("");
				typegrid.submitFilter();
			});
		});

		// 新增窗口
		$("#add_type_btn").bind(
				"click",
				function() {
					
					var input = {};			
					input.bustyp = "";
					Sunline.ajaxRouter("kupcon/qrbstp", input, "POST", function(redata) {
						console.info(redata);
						if (redata.retCode == '0000') {	
							handleTable3(redata.pinfos);
							return;
						}
					}, function(redata) {
						bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
						});
					}, "json", false);
					
					// 解除input readOnly属性
					// 清空 input值
					$("input[name='jyclma']").removeAttr("readonly");
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
//					$.each($("input", $("#edittypeModal")), function(i, n) {
//						if (n.name != undefined && n.name != ""
//								&& n.name != null) {
//							data[n.name] = n.value;
//						}
//					});
					data.jyclma =$("#jyclma").val();
					data.bustyp =$("#bustyp").select2("data").text;
//					data.siglmt =$("#siglmt").val();
//					data.totlmt =$("#totlmt").val();
					Sunline.ajaxRouter("kupbctr/edkbcr", data, 'post',
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

				});

	};

	return {
		init : function() {
			handleTable();
		}
	}

}();