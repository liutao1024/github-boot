var Role = function() {
	var authTypeDict = Sunline.getDict("authType");
	var rolecontent = $('.inbox-content');
	var handleTable = function() {
		var rolegrid = new Datatable();
		var url = Sunline.ajaxPath("auth/allrole");
		var editUrl;
		var table = $("#role_ajax");
		var editform = $("#edit_form");
		// 修改窗口
		var toEditModal = function(nRowA) {
			// 赋值
			$('#registerCd', editform).attr("readOnly", true);
			$('#authType', editform).attr("readOnly", true);
			$('#roleCd', editform).attr("readOnly", true);
			$('#registerCd').val($(nRowA[0]).text());
			$('#authType').val(
					$(nRowA[1]).text().substring(
							$(nRowA[1]).text().indexOf("[") + 1,
							$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$('#roleCd').val($(nRowA[2]).text());
			$('#roleName').val($(nRowA[3]).text());
			$('#queryAuth').val($(nRowA[4]).text());
			editUrl = "auth/saverole";
			$("#editModal").modal('show');
			$("#editModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editModal"))).hide();
				$('.alert-danger', $('form', $("#editModal"))).hide();
				$(".msg", $('form', $("#editModal"))).text("");
				rolegrid.submitFilter();
			});
		}
		/*
		 * 获取字典
		 */
		$("#authType").select2({
			data : authTypeDict
		});
		$("#q_authType").select2({
			data : authTypeDict,
			allowClear : true,
			placeholder : "请选择"
		});
		/*
		 * 初始化table
		 */
		rolegrid
				.init({
					src : table,
					deleteData : sendData,
					onSuccess : function(rolegrid) {
					},
					onError : function(rolegrid) {
					},
					dataTable : { // here you can define a typical datatable
						"ajax" : {
							"url" : url, // ajax source

						},
						"bDestroy" : true,
						"bServerSide" : true,
						"columns" : [
								{
									"data" : "registerCd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "authType",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < authTypeDict.length; i++) {
											if (authTypeDict[i].id == data) {
												return authTypeDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "roleCd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "roleName",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.registerCd
												+ ","
												+ data.authType
												+ ","
												+ data.roleCd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_setting' href='javascript:;' data-src='"
												+ data.registerCd
												+ ","
												+ data.authType
												+ ","
												+ data.roleCd + "'>配置权限</a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.registerCd
												+ ","
												+ data.authType
												+ ","
												+ data.roleCd + "'>删除 </a>";
									}
								} ]
					}
				});

		var sendData = [ "registerCd", "authType", "roleCd" ];
		// 绑定删除事件
		rolegrid.bindTableDelete(sendData);
		rolegrid.bindTableEdit(sendData, toEditModal);
		// 绑定权限设置列表
		rolegrid.addBindEvent(".edit_setting", "click", sendData,
				function(data) {
					// 显示配置窗口
					loadSubPage(data);
					$("#edit_setting").modal("show");
					$("#editModal").on("hide.bs.modal", function() {
						rolegrid.submitFilter();
					});
				});

		// 新增窗口
		$("#add_btn").bind("click", function() {
			$('input', editform).attr("readOnly", false);
			$('input', editform).val("");
			$('input[name="registerCd"]', editform).attr("readOnly", true);
			$("#registerCd").val($.cookie("registCd"));
			editUrl = "auth/addrole";
			$("#editModal").modal('show');
			$("#editModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editModal"))).hide();
				$('.alert-danger', $('form', $("#editModal"))).hide();
				$(".msg", $('form', $("#editModal"))).text("");
				rolegrid.submitFilter();
			});
			return false;
		});

		/*
		 * 表单验证方法
		 */
		var roleValid = Sunline.getValidate($("form", "#editModal"), function(
				form) {
			var data = {};
			$.each($("input", editform), function(i, n) {
				data[n.name] = n.value;
			});
			Sunline.ajaxRouter(editUrl, data, "post", function(data, status) {
				$('.msg', editform).text(data.msg);
				if (data.ret == "success") {
					$('.alert-success', editform).show();
					$('.alert-danger', editform).hide();
					$('#registerCd', editform).attr("readOnly", true);
					$('#authType', editform).attr("readOnly", true);
					$('#roleCd', editform).attr("readOnly", true);
				} else {
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
				}
			}, function() {
				$('.msg', editform).text("请求出错!");
				$('.alert-success', editform).hide();
				$('.alert-danger', editform).show();
			}, "json");
		}, { // 验证规则
			registerCd : {
				required : true,
				rangelength : [ 2, 19 ]
			},
			authType : {
				required : true,
				maxlength : 1,
				number : true
			},
			roleCd : {
				required : true,
				rangelength : [ 2, 19 ]
			},
			roleName : {
				required : false,
				rangelength : [ 1, 50 ]
			},
			queryAuth : {
				required : false,
				maxlength : 1,
				number : true
			},
		});
	}

	var loadSubPage = function(data) {
		rolecontent.html('');
		$.ajax({
			type : "GET",
			url : "../auth/role_auth",
			dataType : "html",
			success : function(res) {
				rolecontent.html(res);
				rolecontent.ready(function() {
					role_auth.init(data)
					Metronic.initUniform();
				});
				;
			},
			error : function(xhr, ajaxOptions, thrownError) {
			},
			async : false
		});
	}


	return {
		init : function() {
			handleTable();
		}

	};
}();