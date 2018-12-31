var kupperm = function() {

	/**
	 * 枚举类型调取
	 */
	var syscodDict = Sunline.getDict("E_APPLID"); // 系统代码
	var permtpDict = Sunline.getDict("E_PERMTP"); // 权限类型
	var crcycdDict = Sunline.getDict("E_CRCYCD"); // 币种

	$("input[name='syscod']").select2({
		data : syscodDict,
		allowClear : true
	});
	
	$("input[name='q_syscod']").select2({
		data : syscodDict,
		allowClear : true,
		placeholder : "请选择"
	});
	$("input[name='permtp']").select2({
		data : permtpDict,
		allowClear : true
	});
	
	$("input[name='q_permtp']").select2({
		data : permtpDict,
		allowClear : true,
		placeholder : "请选择"
	});
	
	
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	 var content = $('#edit_load');//配置权限子页面
	var handleTable = function() {
		var typegrid = new Datatable();
 		var typeurl = Sunline.ajaxPath("perm/qrperm"); // URL???
		var typesendData = [ "permcd"]; // 主键
		
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
									"data" : "permcd", // 权限代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "permna", // 权限代码名称
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pmcdtx", // 代码描述
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
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.permcd+ "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_setting' href='javascript:;' data-src='"
												+ data.permcd+","+data.permtp+ "'>配置权限 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.permcd+ "'>删除 </a>";
									}
								} ]
					}
				});
		typegrid.bindTableDelete(typesendData); // 绑定数据删除？？？？
		typegrid.addBindEvent(".edit_setting",'click',["permcd","permtp"],function(data){
			    content.html('');
			    if(data.permtp=="C"){
			    	name="kuppermchck";
			    }else if(data.permtp=="O"){
			    	name="kuppermoper";
			    }else{
			    	bootbox.alert("不支持的权限类型");
			    	return;
			    }
			    
		        $.ajax({
		            type: "GET",
		            url: "../perm/"+name,
		            dataType: "html",
		            success: function(res) 
		            {    
		                content.html(res);
		                content.ready(function(){               	
		                	  Metronic.initUniform();
		                	  try{      
		                		  if(data.permtp=="C"){
		                			  kuppermchck.init(data.permcd);
		          			    }else if(data.permtp=="O"){
		          			    	  kuppermoper.init(data.permcd)
		          			    }else{
		          			    	bootbox.alert("不支持的权限类型");
		          			    	return;
		          			    }
		                	  }catch(e){
		                		  bootbox.alert("子页面加载失败！");
		                	  }
		                });;             
		            },
		            error: function(xhr, ajaxOptions, thrownError)
		            {
		            },
		            async: false
		        });
		        $("#bianji").modal('show');
		});
		
		
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
			$("input[name='syscod']",$("#edittypeModal")).attr("readOnly",true);
			$("input[name='permtp']",$("#edittypeModal")).attr("readOnly",true);
			$("input[name='crcycd']",$("#edittypeModal")).attr("readOnly",true);
				$("input[name='permcd']",$("#edittypeModal")).val($(nRowA[0]).text()); 
				$("input[name='permna']",$("#edittypeModal")).val($(nRowA[1]).text()); 
				$("input[name='pmcdtx']",$("#edittypeModal")).val($(nRowA[2]).text()); 
				$("input[name='syscod']",$("#edittypeModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
				$("input[name='crcycd']",$("#edittypeModal")).val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
				$("input[name='permtp']",$("#edittypeModal")).val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
				
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
					$("input[name='permcd']",$("#edittypeModal")).attr("readOnly",false);
					$("input[name='syscod']",$("#edittypeModal")).attr("readOnly",false);
					$("input[name='permtp']",$("#edittypeModal")).attr("readOnly",false);
					$("input[name='crcycd']",$("#edittypeModal")).attr("readOnly",false);
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
					Sunline.ajaxRouter("perm/adperm", data, 'post',
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
			$("input[name='q_syscod']").select2("val","");
			$("input[name='q_permtp']").select2("val","");
		});
	};

	return {
		init : function() {
			handleTable();
		}
	}

}();