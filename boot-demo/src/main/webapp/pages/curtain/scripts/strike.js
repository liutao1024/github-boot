var Strike = function() {
	var crcycdDict = Sunline.getDict("crcycd");
	var amntcdDict = Sunline.getDict("amntcd");
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var formartTime = function(time){
		if(time.length == 8){
			return time.substr(0,1)+":"+time.substr(1,2)+":"+time.substr(3,2);
		}
		return time.substr(0,2)+":"+time.substr(2,2)+":"+time.substr(4,2);
	};
	var grid = new Datatable();
	var handlerForm = function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		;
		$('#qry_form').validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				cuacno : {
					required : true,
					rangelength : [ 10, 18 ]
				},
				bgindt : {
					required : true
				},
				endddt : {
					required : true
				}
			},
			invalidHandler : function(event, validator) { 
				$('.alert-danger', $('#qry_form')).show();
			},

			highlight : function(element) { // hightlight error inputs
				$(element).closest('.form-group').addClass('has-error'); 
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},
			errorPlacement : function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},
			submitHandler : function(form) {
//				grid.setAjaxParam("cuacno", $("#cuacno").val());
//				grid.setAjaxParam("bgindt", $("#bgindt").val());
//				grid.setAjaxParam("endddt", $("#endddt").val());
				grid.setAjaxParam("ecctno",$("#cuacno").val());
				grid.setAjaxParam("from",$("#bgindt").val());
				grid.setAjaxParam("to",$("#endddt").val());
				grid.setAjaxParam("eccttp","2");
				grid.setAjaxParam("crcycd","01");
				handlerDataTable();
			},
		});

		$("#qry_btn").click(function() {
			$('#qry_form').submit();
		});
		$('#save_btn')
				.click(
						function() {
							var data = {};
							data.yszjylsh = $('#mntrsq').val();
							data.beizhuuu = $('#remark').val();
							Sunline
									.ajaxRouter(
											"curtain/strike",
											data,
											"POST",
											function(redata) {

												if (redata.retCode == '0000') {
													$('.msg', $("#edit_form"))
															.text("冲账交易处理成功");
													$('.alert-success',
															$("#edit_form"))
															.show();
													$('.alert-danger',
															$("#edit_form"))
															.hide();
												} else {
													$('.msg', $("#edit_form"))
															.text(redata.retMsg);
													$('.alert-success',
															$("#edit_form"))
															.hide();
													$('.alert-danger',
															$("#edit_form"))
															.show();
												}
											}, function(redata) {
												console.info(redata);
												$('.msg', $("#edit_form"))
														.text("请求出错!");
												$('.alert-success', editform)
														.hide();
												$('.alert-danger', editform)
														.show();
											});
						});
	};

	var sendData = [ "mntrsq" ];
	var handlerDataTable = function() {
		var table = $("#transq_ajax");
		grid
				.init({
					src : table,
					deleteData : sendData,
					onSuccess : function(grid) {

					},
					onError : function(grid) {

					},
					dataTable : {
						"ajax" : {
							"url" : Sunline.ajaxPath("curtain/qryStrike"),
						},
						"bDestroy" : true,
						"bServerSide" : true,
						"columns" : [
								{
									"data" : "transq",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prcsid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "trnnam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "trandt",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "trantm",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return formartTime(data);
									}
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < crcycdDict.length; i++) {
											if (crcycdDict[i].id == data) {
												return crcycdDict[i].dictName;
											}
										}
									}
								},
								{
									"data" : "amntcd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < amntcdDict.length; i++) {
											if (amntcdDict[i].id == data) {
												return amntcdDict[i].text;
											}
										}
										return "";
									}
								},
								{
									"data" : "tranam",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										if(Sunline.isNull(data)){
											return "";
										}
										return formartM(data+"");
									}
								},
								{
									"data" : null,
									"width" : "20%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.mntrsq + "'>冲账 </a>";
									}
								} ]
					}
				});
		var toEditModal = function(nRowA) {
			$('.msg', $("#edit_form")).text("");
			$('.alert-success', $("#edit_form")).hide();
			$('.alert-danger', $("#edit_form")).hide();
			$('#mntrsq').val($(nRowA[0]).text());
			$("#editModal").modal('show');
		}
		grid.bindTableEdit(sendData, toEditModal);
		// 点击冲账按钮
	};

	return {
		init : function() {
			handlerForm();
		}
	}
}()