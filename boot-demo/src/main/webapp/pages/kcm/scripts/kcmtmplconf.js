var kcmtmplconf = function() {
	
	
	var busicdDict = Sunline.getDict("busicd");		//适用类型
	
	var proptpDict =Sunline.getDict("E_PROPTP");
	
	$("input[name='busicd']").select2({
		data:busicdDict,
		allowClear : true
	     });
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmTmplConf");
		var editUrl;

		$("#busicd").select2({
			data : busicdDict
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
									"data" : "busicd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < busicdDict.length; i++) {
											if (busicdDict[i].id == data) {
												return busicdDict[i].text;
											}
										}
									}
								},
								{
									"data" : "tmplcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "propna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "proptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < proptpDict.length; i++) {
											if (proptpDict[i].id == data) {
												return proptpDict[i].text;
											}
										}
									}
								},
								{
									"data" : "sortno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.busicd
												+ ","
												+ data.tmplcd
												+ ","
												+ data.propcd
												+ ","
												+ "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "busicd", "tmplcd", "propcd" ];
		grid.bindTableDelete(sendData);

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
				actvcd : {
					required : true,
					maxlength : 20
				},
				busicd : {
					required : true,
					maxlength : 50
				},
				suitno : {
					required : true,
					maxlength : 20
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
		$(".filter-cancel").click(function(){
			$("input[name='busicd']").select2("val","");
		});


	};

	return {
		init : function() {
			handleTable();
		}
	}
}();