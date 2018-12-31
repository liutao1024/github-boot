var rfirIntr = function() {
	var crcycdDict = Sunline.getDict("crcycd");
	var rfirtmDict = Sunline.getDict("rfirtm");
	var intrfgDict = Sunline.getDict("intrfg");
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("intr/findIfir");
		var editUrl;
		var toEditForm = function(nRowA) {
			$('#rfircd', editform).attr("readOnly", true);
			$('#crcycd', editform).attr("readOnly", true);
			$('#rfirtm', editform).attr("readOnly", true);
			$('#efctdt').attr("disabled","disabled");
//			$('#inefdt').attr("disabled","disabled");
			$('#rfircd').val($(nRowA[0]).text());
			$('#crcycd').val(
					$(nRowA[1]).text().substring(
							$(nRowA[1]).text().indexOf("[") + 1,
							$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$('#rfirtm').val(
					$(nRowA[2]).text().substring(
							$(nRowA[2]).text().indexOf("[") + 1,
							$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$('#efctdt').val($(nRowA[3]).text());			
			$('#inefdt').val($(nRowA[4]).text());
			$('#baseir').val($(nRowA[5]).text());
			$('#intrfg').val(
					$(nRowA[6]).text().substring(
							$(nRowA[6]).text().indexOf("[") + 1,
							$(nRowA[6]).text().indexOf("]"))).trigger("change");
			$('#remark').val($(nRowA[7]).text());
			editUrl = "intr/upIfir";
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
		// 时间插件
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};

		$("input[name='crcycd']",$("#editModal")).select2({
			data : crcycdDict
		});
		$("#q_crcycd").select2({
			data : crcycdDict,
			allowClear : true,
			placeholder : "请选择"
		});

		$("#rfirtm").select2({
			data : rfirtmDict
		});
		$("#q_rfirtm").select2({
			data : rfirtmDict,
			placeholder : "请选择",
			allowClear : true
		});

		$("#intrfg").select2({
			data : intrfgDict
		});

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
									"data" : "rfircd",
									"sortable" : false,
									"searchable" : false
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
									"data" : "rfirtm",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < rfirtmDict.length; i++) {
											if (rfirtmDict[i].id == data) {
												return rfirtmDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "efctdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inefdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "baseir",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "intrfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < intrfgDict.length; i++) {
											if (intrfgDict[i].id == data) {
												return intrfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.rfircd
												+ ","
												+ data.crcycd
												+ ","
												+ data.rfirtm
												+ ","
												+ data.efctdt + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.rfircd
												+ ","
												+ data.crcycd
												+ ","
												+ data.rfirtm
												+ ","
												+ data.efctdt + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "rfircd", "crcycd", "rfirtm", "efctdt" ];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData, toEditForm);

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
				rfircd : {
					required : true,
					maxlength : 20
				},
				crcycd : {
					required : true,
					maxlength : 3
				},
				rfirtm : {
					required : true,
					maxlength : 3
				},
				efctdt : {
					required : true,
					maxlength : 8,
					mydate:true,
					compdata : true
				},
				inefdt : {
					required : true,
					maxlength : 8,
					mydate:true,
					compdata : true
				},
				baseir : {
					required : true,
					maxlength : 11
				},
				intrfg : {
					required : true,
					maxlength : 1
				},
				remark : {
					required : true,
					maxlength : 80
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
						$('#rfircd', editform).attr("readOnly", true);
						$('#crcycd', editform).attr("readOnly", true);
						$('#rfirtm', editform).attr("readOnly", true);
						$('#efctdt', editform).attr("disabled", "disabled");
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
					$('input', editform).removeAttr("disabled");
					$('input', editform).val("").trigger("change");
					editUrl = "intr/addIfir";
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
	$.validator.addMethod(
			"compdata", 
			function(param,element) {
				var bool = false;
				if($("#efctdt").val()!="" && $("#inefdt").val()!=""){
					parseInt($("#efctdt").val())>parseInt($("#inefdt").val()) ? bool=false:bool=true;
				}else{
					bool=true;
				}
		        return this.optional(element) || bool ;
			}, 
			$.validator.format("开始日期不能大于结束日期!")
		);
	return {
		init : function() {
			handleTable();
		}
	}
}();