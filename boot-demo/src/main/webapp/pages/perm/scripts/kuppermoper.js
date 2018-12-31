var kuppermoper = function() {
	
	var userlvDict=Sunline.getDict("E_USERLV");
	var yesDict=Sunline.getDict("E_YES___");
	$("input[name='userlv']").select2({
		data : userlvDict,
		allowClear : true
	});
	
	$("input[name='issucc']").select2({
		data : yesDict,
		allowClear : true
	});
	
	
	$("input[name='isafrm']").select2({
		data : yesDict,
		allowClear : true
	});
	
	$("input[name='ischck']").select2({
		data : yesDict,
		allowClear : true
	});
	$("input[name='isauth']").select2({
		data : yesDict,
		allowClear : true
	});
	var q_permcd;
	var handleTable = function(q_permcd) {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("perm/qroper");
		var editUrl;
		if(!Sunline.isNull(q_permcd)){
        	grid.setAjaxParam("q_permcd",q_permcd);
        	$("#q_permcd",$("#editModal")).val(q_permcd);
        }
		var toEditForm = function(nRowA) {
			$('#permcd', editform).attr("readOnly", true);
			$('#userlv', editform).attr("readOnly", true);
			$('#pramlw', editform).attr("readOnly", true);
			$('#permcd').val($(nRowA[0]).text());
			$('#userlv').val(
					$(nRowA[1]).text().substring(
							$(nRowA[1]).text().indexOf("[") + 1,
							$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$('#pramlw').val(
					$(nRowA[2]).text());
			$('#issucc').val($(nRowA[3]).text().substring(
					$(nRowA[3]).text().indexOf("[") + 1,
					$(nRowA[3]).text().indexOf("]"))).trigger("change");			
			$('#isafrm').val($(nRowA[4]).text().substring(
					$(nRowA[4]).text().indexOf("[") + 1,
					$(nRowA[4]).text().indexOf("]"))).trigger("change");
			$('#ischck').val($(nRowA[5]).text().substring(
					$(nRowA[5]).text().indexOf("[") + 1,
					$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$('#isauth').val(
					$(nRowA[6]).text().substring(
							$(nRowA[6]).text().indexOf("[") + 1,
							$(nRowA[6]).text().indexOf("]"))).trigger("change");
			editUrl = "perm/adoper";
			$("#editModal").modal("show");
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
						// execute some code after table records loaded
					},
					onError : function(grid) {
						// execute some code on network or other general error
					},
					dataTable : { // here you can define a typical datatable
									// settings from
									// http://datatables.net/usage/options
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "permcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "userlv",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < userlvDict.length; i++) {
											if (userlvDict[i].id == data) {
												return userlvDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "pramlw",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "issucc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yesDict.length; i++) {
											if (yesDict[i].id == data) {
												return yesDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isafrm",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yesDict.length; i++) {
											if (yesDict[i].id == data) {
												return yesDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "ischck",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yesDict.length; i++) {
											if (yesDict[i].id == data) {
												return yesDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isauth",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < yesDict.length; i++) {
											if (yesDict[i].id == data) {
												return yesDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.permcd
												+ ","
												+ data.userlv
												+ ","
												+ data.pramlw
												 + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.permcd
												+ ","
												+ data.userlv
												+ ","
												+ data.pramlw
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "permcd", "userlv", "pramlw"];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData, toEditForm);
		
		//下拉框收回
		$("#editModal").click(function(){
		   	  $(".select-close-1").select2("close");
		   	  $(".select-close-2").select2("close");
		   	  $(".select-close-3").select2("close");
		   	  $(".select-close-4").select2("close");
		   	  $(".select-close-5").select2("close");
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
				permcd : {
					required : true,
					maxlength : 30
				},
				userlv : {
					required : true,
					maxlength : 1
				},
				pramlw : {
					required : true,
					maxlength : 21
				},
				issucc : {
					maxlength : 1,
				},
				isafrm : {
					maxlength : 1,
				},
				ischck : {
					maxlength : 1
				},
				isauth : {
					maxlength : 1
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
					$('.msg', editform).text(redata.retMsg);
					if (redata.retCode == "0000") {
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
						
						$('#permcd', editform).attr("readOnly", true);
						$('#userlv', editform).attr("readOnly", true);
						$('#pramlw', editform).attr("readOnly", true);
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
		$("#add_btn").bind(
				"click",
				function() {
					editerror.hide();
					editsuccess.hide();
					validator.resetForm();
					$('.msg', editform).text("");
					$('input', editform).removeAttr("readOnly");
					$('#permcd', editform).attr("readOnly", true);
					$('input', editform).val("").trigger("change");
					$('#permcd', editform).val(q_permcd);
					editUrl = "perm/adoper";
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
		init : function(q_permcd) {
			handleTable(q_permcd);
		}
	}
}();