var kupCnrtype = function() {

	/**
	 * 枚举类型调取
	 */

	var acttypdDict = Sunline.getDict("D_ACTTYP"); // 账户分类
	$("input[name='acttyp']").select2({
		data : acttypdDict,
		allowClear : true
	});
	$("input[name='q_acttyp']").select2({
		data : acttypdDict,
		allowClear : true
	});
	
	var crcycdDict = Sunline.getDict("crcycd"); // 币种
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='q_crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	var handleTable3 = function(dateDict) {
		var date2 = [];
		for(var i=0 ; i<dateDict.length ; i++){	
			var images = {};
			images.id = dateDict[i].bustyp;
			images.text = dateDict[i].bustyp;
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
		var typeurl = Sunline.ajaxPath("kupcon/dpsclc"); // URL
		
		var typesendData = ["acttyp","trnchl","crcycd","bustyp"]; // 主键
		
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
									"data" : "acttyp", // 账户分类
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < acttypdDict.length; i++) {
											if (acttypdDict[i].id == data) {
												return acttypdDict[i].text;
											}
										}
										return data;
									}
									
								},{
									"data" : "trnchl", //渠道
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "crcycd", // 币种
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
									"data" : "bustyp", //业务类型
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "siglmt", //单笔限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "totlmt", //日累计限额
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : "yearmt", //日累计限额
									"sortable" : false,  
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {//"trnchl","crcycd"
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.acttyp+","+data.trnchl+","+data.crcycd+","+data.bustyp+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
										+ data.acttyp+","+data.trnchl+","+data.crcycd+","+data.bustyp+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
				$("input[name='acttyp']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change").attr("readOnly","readOnly");
				$("input[name='trnchl']").val($(nRowA[1]).text()).attr("readOnly","readOnly"); 
				$("input[name='crcycd']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change").attr("readOnly","readOnly"); 
				$("input[name='bustyp']").val($(nRowA[3]).text()).trigger("change").attr("readOnly","readOnly"); 
				$("input[name='siglmt']").val($(nRowA[4]).text());
				$("input[name='totlmt']").val($(nRowA[5]).text()); 
				$("input[name='yearmt']").val($(nRowA[6]).text());
				
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
//					$.each($("input", $("#edittypeModal")), function(i, n) {
//						if (n.name != undefined && n.name != ""
//								&& n.name != null) {
//							data[n.name] = n.value;
//						}
//					});
					
					data.acttyp =$("#acttyp").val();
					data.trnchl =$("#trnchl").val();
					data.crcycd =$("#crcycd").select2("val");
					data.bustyp =$("#bustyp").select2("data").text;
					console.info($("#bustyp").select2("val"),$("#bustyp").select2("data").text);
					data.siglmt =$("#siglmt").val();
					data.totlmt =$("#totlmt").val();
					data.yearmt =$("#yearmt").val();
					//更新新增
					Sunline.ajaxRouter("kupcon/sesclc", data, 'post',
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
			$("#q_acttyp").select2("val","");
			$("#q_trnchl").val("");
			$("#q_crcycd").select2("val","");
			$("#q_bustyp").val("");
			$("#q_siglmt").val("");
			$("#q_totlmt").val("");
			$("#q_yearmt").val("");
		});
	}
	return {
		init : function() {
			handleTable();
			click();
		}
	}

}();