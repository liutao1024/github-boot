var unfrcl = function() {
	
	var crcycdDict =Sunline.getDict("E_CRCYCD");
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	
	var handleTable = function() {
		console.log("qrfrzd");
		var grid = new Datatable();
		var qrfrzdurl = Sunline.ajaxPath("crlimit/qrfrzd");	//查询
		var toEditForm = function(nRowA) {
			console.info("toEditForm");
			$('#custno', editform).attr("readOnly", true);
			$('#crdlno', editform).attr("readOnly", true);
			$('#busino', editform).attr("readOnly", true);
			$('#crcycd', editform).attr("readOnly", true);
			$('#freezd', editform).attr("readOnly", true);
			$('#amount', editform).attr("readOnly", true);
			$('#crcycd').attr("disabled","disabled");
			$('#custno').attr("disabled","disabled");
			$('#crdlno').attr("disabled","disabled");
			$('#busino').attr("disabled","disabled");
			$('#freezd').attr("disabled","disabled");
			$('#amount').attr("disabled","disabled");
			
			$('#custno').val($(nRowA[0]).text());
			$('#crdlno').val($(nRowA[1]).text());
			$('#busino').val($(nRowA[2]).text());
			$('#crcycd').val(
					$(nRowA[3]).text().substring(
							$(nRowA[3]).text().indexOf("[") + 1,
							$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$('#amount').val($(nRowA[4]).text());
			$('#freezd').val($(nRowA[6]).text());
			
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
			src : $("#datatable_custno"),
			deleteData : "",
			onSuccess : function(grid) {
			},
			onError : function(grid) {
			},
			dataTable : {
				"ajax" : {
					"url" : qrfrzdurl,
				},
				"columns" : [
						 {
							"data" : "custno",	//客户编号
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "crdlno",	//额度编号
							"sortable" : false,
							"searchable" : false
							
						},
						{
							"data" : "busino",	//产品号/账号/卡号/上级客户号，交易渠道
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "crcycd",	//币种
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
							"data" : "amount",	//冻结额度
							"sortable" : false,
							"searchable" : false
							
						},
						{
							"data" : "unfrzd",	//解冻金额
							"sortable" : false,
							"searchable" : false
							
						},
						{
							"data" : "freezd",	//主键顺序号
							"sortable" : false,
							"searchable" : false
						},
												
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.custno
										+ ","
										+ data.crdlno
										+ ","
										+ data.busino
										+ ","
										+ data.crcycd
										+ ","
										+ data.unfrzd
										+ ","
										+ data.amount
										+ ","
										+ data.freezd
									    + "'>解冻 </a>";
							}
						}]
			}
		});
		var sendData = [ "custno", "crdlno", "busino", "crcycd","unfrzd","freezd","amount"];
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
				
				unfrzd : {
					required : true,
					
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

				Sunline.ajaxRouter("crlimit/unfrcl", data, "post", function(redata) {
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
		
		
		
	};
	return {
		init : function() {
			handleTable();
		}
	}
}();




