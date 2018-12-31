var kcmtmpl = function() {
	
	/**
	 * 枚举类型调取
	 */
	var busicdDict = Sunline.getDict("E_BUSICD"); // 业务种类编号
	var tmpltpDict = Sunline.getDict("E_TMPLTP"); // 活动模板分类
	
	$("input[name='busicd']").select2({
		data : busicdDict,
		allowClear : true
	});
	$("input[name='tmpltp']").select2({
		data : tmpltpDict,
		allowClear : true
	});
	
	var propcdDict = Sunline.getDict("","/prop","propcd","propna");
	$("input[name='propcd']").select2({
		data : propcdDict,
		allowClear : true
	});
	
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmTmpl");
		var editUrl;
		
		var toEditForm = function(nRowA) {
			// 主键不可修改
			$("input[name='busicd']", $("#editModal")).attr("readOnly",true);
			$("input[name='tmplcd']", $("#editModal")).attr("readOnly",true);
			// 给input框赋值
			$('#busicd').val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
			$('#tmplcd').val($(nRowA[1]).text());
			$('#tmplna').val($(nRowA[2]).text());
			$('#tmpltp').val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("#editModal").modal("show");
			editUrl = "kcm/addKcmTmpl";
			$("#editModal").on(
					"hide.bs.modal",
					function() {
						editerror.hide();
						editsuccess.hide();
						validator.resetForm();
						$('.msg', editform).text("");
						$('.form-group').removeClass('has-error').removeClass(
								"has-success");
						grid.submitFilter();
					});
		};

		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
					},
					onError : function(grid) {
					},
					dataTable : {
						"ajax" : {
							"url" : url,
						},
						"columns" : [
								{
									"data" : "busicd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < busicdDict.length; i++) {
											if (busicdDict[i].id == data) {
												return busicdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "tmplcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "tmplna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "tmpltp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < tmpltpDict.length; i++) {
											if (tmpltpDict[i].id == data) {
												return tmpltpDict[i].text;
											}
										}
										return data;
									}
								},{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.busicd
												+ ","
												+ data.tmplcd
											    + "'>编辑 </a>";
									}
								},{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.busicd
												+ ","
												+ data.tmplcd
											    + "'>删除 </a>";
									}
								},{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='setting' href='javascript:;' data-src='"
												+ data.busicd
												+ ","
												+ data.tmplcd
											    + "'>配置 </a>";
									}
								}]
					}
				});
		var sendData = [ "busicd", "tmplcd"];
		grid.bindTableDelete(sendData);// 绑定删除按钮
		grid.bindTableEdit(sendData, toEditForm);// 绑定编辑按钮
		// 配置添加
		grid.bindSettingEdit(".setting",sendData, function(nRowA){
//			console.info('nRowA:',nRowA);
//			alert(1);
			$('.alert-danger', $("#addConfModal")).hide();
			$('.alert-success', $("#addConfModal")).hide();
//			validator.resetForm();
			$('.msg', $("#addConfModal")).text("");
			$('input', $("#addConfModal")).removeAttr("readOnly");
			$('input', $("#addConfModal")).removeAttr("disabled");
			$('input', $("#addConfModal")).val("").trigger("change");
			// 主键不可修改
			$("input[name='busicd']", $("#addConfModal")).attr("readOnly",true);
			$("input[name='tmplcd']", $("#addConfModal")).attr("readOnly",true);
			// 下拉框选中赋值
			$("input[name='propna']", $("#addConfModal")).attr("readOnly",true);
			$("input[name='proptp']", $("#addConfModal")).attr("readOnly",true);
			// 给input框赋值
			$("input[name='busicd']", $("#addConfModal")).val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
			$("input[name='tmplcd']", $("#addConfModal")).val($(nRowA[1]).text());
			$("#addConfModal").modal('show');
			
			$("input[name='propcd']", $("#addConfModal")).on("change", function(e){
				Sunline.ajaxRouter("dict/prop", {'propcd':$("input[name='propcd']", $("#addConfModal")).val()}, "post", function(data){
					$("input[name='propna']", $("#addConfModal")).val(data[0].propna);
					$("input[name='proptp']", $("#addConfModal")).val(data[0].proptp);
				});
			});
			
			$("#addConfModal").on("hide.bs.modal", function(){
				$('.alert-danger', $("#addConfModal")).hide();
				$('.alert-success', $("#addConfModal")).hide();
				
				$('.msg', $("#addConfModal")).text("");
				$('.form-group').removeClass('has-error')
				.removeClass("has-success");
				grid.submitFilter();
			});
			return false;
		});
		
		$("#btn_conf_save_envt").click(function(){
			$("form", $("#addConfModal")).submit();
		});
		
		var envtValid = Sunline.getValidate( $("form","#addConfModal"), function(){
			var data = {};
			$.each($("input", $("#addConfModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("kcm/addKcmTmplConf", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#addConfModal"))).show();
					$(".alert-danger", $("form", $("#addConfModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#addConfModal"))).hide();
					$(".alert-danger", $("form", $("#addConfModal"))).show();
				}
				$(".msg", $("form", $("#addConfModal"))).text(ret.msg);
			});
			
		},{
			busicd : {required : true},
			tmplcd : {required : true, maxlength : 20},
			propcd : {required : true, maxlength : 20},
			propna : {maxlength : 100},
			proptp : {},
			sortno : {maxlength : 19}
		});

		/*
		 * 表单验证方法
		 */
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		var validator = editform.validate({
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules : { // 验证规则
				busicd : {
					required : true,
				},
				tmplcd : {
					required : true,
					maxlength : 20
				},
				tmplna : {
					maxlength : 50
				},
				tmplna : {
				}
			},

			invalidHandler : function(event, validator) {
				editsuccess.hide();
				editerror.show();
				Metronic.scrollTo(editerror, -200);
			},

			errorPlacement : function(error, element) {
				element.parent().append(error);
			},

			highlight : function(element) {
				$(element).closest('.form-group').removeClass("has-success")
						.addClass('has-error');
			},

			unhighlight : function(element) {

			},

			success : function(label, element) {
				var icon = $(element).parent('.input-icon').children('i');
				$(element).closest('.form-group').removeClass('has-error')
						.addClass('has-success'); // set success class to the
													// control group
				icon.removeClass("fa-warning").addClass("fa-check");
			},
			submitHandler : function(form) {
				/*
				 * 提交数据,必须是json对象 返回也必须是json对象
				 */
				var data = {};
				$.each($("input", editform), function(i, n) {
					data[n.name] = n.value;
				});

				Sunline.ajaxRouter(editUrl, data, "post", function(redata) {
					$('.msg', editform).text(redata.msg);
					if (redata.ret == "success") {
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
//						$('#busicd', editform).attr("readOnly", true);
					} else {
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}
				}, function() {
					$('.msg', editform).text("请求出错!");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
				}, "json");
			}
		});
		// 新增窗口
		$("#add_btn").click(
				function() {
					editerror.hide();
					editsuccess.hide();
					validator.resetForm();
					$('.msg', editform).text("");
					$('input', editform).removeAttr("readOnly");
					$('input', editform).removeAttr("disabled");
					$('input', editform).val("").trigger("change");
					editUrl = "kcm/addKcmTmpl";
					$("#editModal").modal('show');
					$("#editModal").on(
							"hide.bs.modal",
							function() {
								editerror.hide();
								editsuccess.hide();
								
								$('.msg', editform).text("");
								$('.form-group').removeClass('has-error')
										.removeClass("has-success");
								grid.submitFilter();
							});
					return false;

				});
		

		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();