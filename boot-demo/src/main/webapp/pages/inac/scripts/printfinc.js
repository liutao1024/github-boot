var printfinc = function() {

	var _fincdt;
	var grid = new Datatable();
	var input = {};
	var url = Sunline.ajaxPath("inac/getfincInfo");
	var handlerDown = function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		;

		$('#fincselform').validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				fincdt : {
					required : true
				}
			},
			messages : {
				fincdt : {
					required : "账务日期必选"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('#fincselform')).show();
			},

			highlight : function(element) { // hightlight error inputs
				$(element).closest('.form-group').addClass('has-error'); // group
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
		// 取消
		$('#canqry').click(function() {
			$('#fincdt').val("");
		});
		var table = $("#finc_ajax");
		grid.init({
			src : table,
			onSuccess : function(grid) {

			},
			onError : function(grid) {

			},
			dataTable : {
				"ajax" : {
					"url" : url,
				},
				"columns" : [ {
					"data" : "itemcd",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "itemna",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "brchno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "drltbl",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "crltbl",
					"sortable" : false,
					"searchable" : false,

				}, {
					"data" : "drtsam",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "crtsam",
					"sortable" : false,
					"searchable" : false,

				}, {
					"data" : "drctbl",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "crctbl",
					"sortable" : false,
					"searchable" : false,

				}, {
					"data" : "acctdt",
					"sortable" : false,
					"searchable" : false,

				} ]
			}
		});
		$(".table-group-actions")
				.append(
						"<button id='printf' class='btn btn-sm purple table-group-action-submit'><i class='fa fa-rotate-down'></i>&nbsp;打印预览</button></div>");

		
		var pageno = 0;
		var cnt = 0;
		$('#printf')
		.click(
				function() {
					if (cnt > 0) {
						$("#tbody").remove();
					}
					cnt++;
					input.acctdt = $('#fincdt').val();
					Sunline
							.ajaxRouter(
									"inac/getfincInfs",
									input,
									"POST",
									function(redata) {
										if (redata.status == 'F'
												&& Sunline
														.isNull(redata.retMsg)) {
											bootbox.alert("["
													+ input.acctdt
													+ "]未查询到账务信息");
											return;
										}
										
										var result = redata.glinfo;
//										$("#nextNum").val(1+"-"+8).attr("readOnly", true);
//										$("#allNum").val(redata.iTotalRecords).attr("readOnly", true);
										var tr, td, trd;
										for (var i = 0; i < result.length; i++) {
											td = "";
											tr = "<tr>";
											td += "<td>"
													+ result[i].itemcd
													+ "</td>";
											td += "<td>"
													+ result[i].brchno
													+ "</td>";
											td += "<td>"
													+ result[i].drltbl
													+ "</td>";
											td += "<td>"
													+ result[i].crltbl
													+ "</td>";
											td += "<td>"
													+ result[i].drtsam
													+ "</td>";
											td += "<td>"
													+ result[i].crtsam
													+ "</td>";
											td += "<td>"
													+ result[i].drctbl
													+ "</td>";
											td += "<td>"
													+ result[i].crctbl
													+ "</td>";
											td += "<td>"
													+ result[i].acctdt
													+ "</td>";
											tr = tr + td + "</tr>";
											trd = trd + tr;
										}
										$("#printTable").append(
												"<tbody id='tbody'>"
														+ trd
														+ "</tbody>");
										$("#printTable")
												.append(
														"<tr role='row' class='heading'><th width='15%'></th><th width='20%'><th width='20%'>经办人(盖章)</th></th><th width='20%'></th><th width='20%'></th><th width='20%'></th><th width='20%'></th><th width='20%'>复核人(盖章)</th><th width='20%'></th></tr>");
										
									}, function(redata) {
										bootbox.alert("网络异常");
									}, "json", false);
					var k = 0;
					$("#printModal").modal('show');
					$("#printk").click(function() {
						var tit = document.title;
						document.title = "";
						p1.style.display = "none";
						p2.style.display = "none";
//						p3.style.display = "none";
						printTable.style.display = "";
						if (k == 0) {
							window.print();
							$("#printModal").modal('hide');
							k = 1;
						}
						document.title = tit;
						p1.style.display = "";
						p2.style.display = "";
//						p3.style.display = "";
					});
				});
//		var endpage=8;
//		$('#nexpge').click(function() {
//		      $("#tbody").remove();
//			pageno++;
//			input.acctdt = $('#fincdt').val();
//			input.start = pageno;
//			Sunline
//					.ajaxRouter(
//							"printf/getfincInfs",
//							input,
//							"POST",
//							function(redata) {
//								if (redata.status == 'F'
//										&& Sunline
//												.isNull(redata.retMsg)) {
//									bootbox.alert("["
//											+ input.acctdt
//											+ "]未查询到账务信息");
//									return;
//								}
//								var result = redata.glinfo;
////								if(redata.iTotalRecords<8){
////									endpage=redata.iTotalRecords;
////								}else{
////					
////									if(endpage>=redata.iTotalRecords){
////										endpage=redata.iTotalRecords;
////									}else{
////										endpage++;
////									}
////								}
////								$("#nextNum").val((pageno+1)+"-"+endpage).attr("readOnly", true);
////								$("#allNum").val(redata.iTotalRecords).attr("readOnly", true);
//								var tr, td, trd;
//								for (var i = 0; i < result.length; i++) {
//									td = "";
//									tr = "<tr>";
//									td += "<td>"
//											+ result[i].itemcd
//											+ "</td>";
//									td += "<td>"
//											+ result[i].brchno
//											+ "</td>";
//									td += "<td>"
//											+ result[i].drtsam
//											+ "</td>";
//									td += "<td>"
//											+ result[i].crtsam
//											+ "</td>";
//									td += "<td>"
//											+ result[i].acctdt
//											+ "</td>";
//									tr = tr + td + "</tr>";
//									trd = trd + tr;
//								}
//								$("#printTable").append(
//										"<tbody id='tbody'>"
//												+ trd
//												+ "</tbody>");
//								$("#printTable")
//										.append(
//												"<tr role='row' class='heading'><th width='15%'></th><th width='25%'>经办人(盖章)</th><th width='20%'></th><th width='20%'>复核人(盖章)</th><th width='20%'></th></tr>");
//							}, function(redata) {
//								bootbox.alert("网络异常");
//							}, "json", false);
//			var k = 0;
//			$("#printModal").modal('show');
//			$("#printk").click(function() {
//				var tit = document.title;
//				document.title = "";
//				p1.style.display = "none";
//				p2.style.display = "none";
//				p3.style.display = "none";
//				printTable.style.display = "";
//				if (k == 0) {
//					window.print();
//					$("#printModal").modal('hide');
//					k = 1;
//				}
//				document.title = tit;
//				p1.style.display = "";
//				p2.style.display = "";
//				p3.style.display = "";
//			});
//		});
		
		$('#subqry').click(function() {
			if (!$('#fincselform').validate().form()) {
				return;
			}
			grid.setAjaxParam("acctdt", $('#fincdt').val());
			grid.submitFilter();
		});
	};
	return {
		init : function() {
			handlerDown();
		}
	}
}()