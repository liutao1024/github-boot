var upfyqs = function() {
	var doCheckDict = Sunline.getDict("checkStatus");
	/*
	 * var doCheckDict = [ { "id" : "1", "text" : "处理" }, { "id" : "0", "text" :
	 * "未处理" } ];
	 */
	var grid = new Datatable();
	var _isFirst = true;
	var _tranDate = "0000";
	var _formartDict = function(dict, value) {
		for (var i = 0; i < dict.length; i++) {
			if (dict[i].dictName == value) {
				return dict[i].dictId;
			}
		}
		return value;
	};
	var handleForm = function() {

		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		;
		$("#status").select2({
			width : "100%",
			data : doCheckDict,
			formatSelection : function(item) {
				return item.dictName;
			},
			formatResult : function(item) {
				return item.dictName;
			}
		});
		// $("#status").select2("val","N");
	};
	var readFile = function() {
		$('#file-form').validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				trandt : {
					required : true
				}
			},
			messages : {
				trandt : {
					required : "对账日期必填"
				}
			},

			invalidHandler : function(event, validator) { // display error
															// alert on form
															// submit
				$('.alert-danger', $('#file-form')).show();
			},

			highlight : function(element) { // hightlight error inputs
				$(element).closest('.form-group').addClass('has-error'); 
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},
			submitHandler : function(form) {
			},
			errorPlacement : function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			}

		});
		$('#submit').click(
				function() {
					if (!$('#file-form').validate().form()) {
						return;
					}
					var trandt = $('#trandt').val();
					var input = {};
					input.path = '/home/bsbview/check/szyhqs';
					input.fileFlag = 'RD1002';
					input.mark = '品牌服务费';
					input.trandt = trandt;
					$("#myModal").modal('show');
					Sunline.ajaxRouter("setlle/upchqs", input, "POST",
							function(redata) {
								// bootbox.alert("读取文件成功");
								// 读取数据区表
								$("#myModal").modal('hide');
								if (redata.retCode == '0000') {
									$('.table-container .alert-danger').css("display", "none");
									grid.setAjaxParam("trandt", $('#trandt').val());
									// grid.setAjaxParam("status",$('#status').select2("val"));
									grid.submitFilter();
									console.info(redata.costna + "--"+ redata.tranam + "--"+ redata.status);									
								} else {
									bootbox.alert(redata.retMsg);
								}
							}, function(redata) {
								$("#myModal").modal('hide');
								bootbox.alert("交易异常哦，请检查网络设置或重新登录");
							}, "json", false);
				});
	};
	var handlerTable = function() {
		var url = Sunline.ajaxPath("setlle/qrupty");
		// grid.setAjaxParam("trandt","");
		// grid.setAjaxParam("status",$('#status').select2("val"));
		grid.init({
					src : $("#cppchk_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						// execute some code after table records loaded
						$('.table-container .alert-danger').css("display",
								"none");
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
									"data" : "status",
									"sortable" : false,
									"searchable" : false,
									"width" : "2%",
									"render" : function(data, type, full) {
										if (data == 'Y') {
											return '';
										}
										return '<input type="checkbox" class="checkboxes" value="1"/>';
									}
								},
								{
									"data" : "trandt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "costna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "tranam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "status",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < doCheckDict.length; i++) {
											if (doCheckDict[i].id == data) {
												return doCheckDict[i].dictName;
											}
										}
										return data;
									}
								} ]
					}
				});
		$(".table-group-actions")
				.append(
						"<button id='deal_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;批量结算</button></div>");
		var sendData = [ "trandt" ];
		grid.bindTableDelete(sendData);
		// grid.bindTableEdit(sendData,editForm);
		_isFirst = false;

		$('#deal_btn').click(
				function() {
					console.info("按钮点击事件");
					$('#deal_btn').attr('disable','disable');//禁止
					// 获取选定的行数据
					var rows = grid.getSelectedRows();
					if (rows.length == 0) {
						bootbox.alert("请选择要处理的数据");
						return;
					}
					var data = [];
					for (var i = 0; i < rows.length; i++) {
						var row = rows[i].children();
						var tranam = $(row[3]).text();
						var trandt = $(row[1]).text();
						var rowData = {};
						rowData.tranam = tranam;
						rowData.trandt = trandt;
						console.info(trandt + "--" + tranam);
						data.push(rowData);
					}
					var input = {};
					input.data = data;
					$("#myModal").modal('show');
					Sunline.ajaxRouter("setlle/pldeal", input, "POST",
							function(redata) {
						        $('#deal_btn').removeAttr('disable');//取消
								$("#myModal").modal('hide');
								if (redata.retCode != '0000') {
									bootbox.alert(redata.retMsg);
									return;
								}								
								bootbox.alert("处理结束，处理[" + redata.amount+ "]笔中成功[" + redata.succAmount + "]笔");
								grid.submitFilter();
								if (redata.amount == redata.succAmount) {
									$('#cel_in').removeAttr('disabled');
								}
							}, function(redata) {
								$("#myModal").modal('hide');
								bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
								});
							}, "json", false);
				});
	};
	$('#find').click(function() {
		$('#costna').text("");
		$('#tranam').text("");
		$('#c_status').text("");
		console.info("查询："+$('#trandt').val() + "--" + $('#status').val());
		if (!Sunline.isNull($('#trandt').val())) {
			grid.setAjaxParam("trandt", $('#trandt').val());
		}
		if (!Sunline.isNull($('#status').val())) {
			grid.setAjaxParam("status", $('#status').val());		
		}
		
		grid.submitFilter();
		grid.setAjaxParam("trandt", "");
		grid.setAjaxParam("status", "");

	});
	return {
		init : function() {
			readFile();
			handleForm();
			handlerTable();
			
			/*$('#cancle').click(function() {
				$('#trandt').val("");
				$('#status').select2("val", "");
			});*/
		}
	}
}()