var kcmactv = function() {
	
	var isvaldDict = Sunline.getDict("corefg");		//是否有效
	var busicdDict = Sunline.getDict("busicd");		//上下游标志
	
	var handleTable = function() {
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN'
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }
		var grid = new Datatable();
		var url = Sunline.ajaxPath("kcm/selKcmActv");
		var editUrl;
		var toEditForm = function(nRowA) {
//			$('#actvna').attr("disabled","disabled");
//			$('#isvald').attr("disabled","disabled");
//			$('#statdt').attr("disabled","disabled");
//			$('#endxdt').attr("disabled","disabled");
//			$('#minxam').attr("disabled","disabled");
//			$('#maxxam').attr("disabled","disabled");
			$('#actvcd').val($(nRowA[0]).text());
			$('#tmplcd').val($(nRowA[1]).text());
			$('#busicd').val($(nRowA[2]).text());
			$('#actvna').val($(nRowA[3]).text());
//			$('#cminfo').val($(nRowA[4]).text());
			$('#isvald').val($(nRowA[4]).text());
			$('#statdt').val($(nRowA[5]).text());
			$('#endxdt').val($(nRowA[6]).text());
			$('#maxxam').val($(nRowA[7]).text());
			$('#minxam').val($(nRowA[8]).text());
//			$('#crcycd').val(
//					$(nRowA[1]).text().substring(
//							$(nRowA[1]).text().indexOf("[") + 1,
//							$(nRowA[1]).text().indexOf("]"))).trigger("change");
			editUrl = "kcm/addKcmActv";
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
		
		$("#isvald").select2({
			data : isvaldDict
		});
		$("#busicd").select2({
			data : busicdDict
		});

//		var mercDict=Sunline.getDict("","/merc","merccd","mercna");
//		$("#merccd").select2({
//	 			data:mercDict
//	 		});
		
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
									"data" : "actvcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "tmplcd",
									"sortable" : false,
									"searchable" : false
								},
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
									"data" : "actvna",
									"sortable" : false,
									"searchable" : false
								},
//								{
//									"data" : "cminfo",
//									"sortable" : false,
//									"searchable" : false,
//									"show" : true
//								},
								{
									"data" : "isvald",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isvaldDict.length; i++) {
											if (isvaldDict[i].id == data) {
												return isvaldDict[i].text;
											}
										}
									}
								},
								{
									"data" : "statdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "endxdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "minxam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "maxxam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='add_suittp' href='javascript:;' data-src='" +data.actvcd+ "'>添加适用类型 </a>";
									}
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
										+ data.actvcd
										+ ","
										+ data.tmplcd
										+ ","
										+ data.busicd
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
												+ data.actvcd
												+ ","
												+ data.tmplcd
												+ ","
												+ data.busicd
												+ ","
												+ data.efctdt + "'>删除 </a>";
									}
								} ]
					}
				});
		var sendData = [ "actvcd", "tmplcd", "busicd", "actvna", "cminfo", "isvald", "statdt", "endxdt", "maxxam", "minxam" ];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData, toEditForm);
		grid.addBindEvent(".add_suittp","click",["actvcd"], function(data){ 
        	if(data.incdtp=='2'){//行内基准利率	
        		bkiOption.bkigrid.setAjaxParam("actvcd",data.actvcd);
        		bkiOption.intrId=data.intrcd;
        		bkiIntr.init(bkiOption);
        		$("#add_bki_set").append(
						"<div class='table-actions-wrapper'><span></span>"
								+ "<button id='add_bki_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
        		$("#bki_setting").modal("show");
        	}	        	
      });

		/*
		 * 表单验证方法
		 */
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		jQuery.validator.addMethod("istruedt", function(value, element, param) { 
			if(param==true){
				console.info($('#statdt').val() + value);
				return parseInt($('#statdt').val()) > parseInt($('#endxdt').val());
			}
			return true;
			
		}, $.validator.format("起始日期不能大于结束日期"));
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
				tmplcd : {
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
						$('#actvcd', editform).attr("readOnly", true);
//						$('#efctdt', editform).attr("disabled", "disabled");
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
					editUrl = "kcm/addKcmActv";
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