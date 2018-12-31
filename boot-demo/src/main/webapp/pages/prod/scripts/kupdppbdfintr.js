var kupdppbdfintr = function() {

	$("#editdfintrModal input[name='crcycd']").select2({
		data : kupdppbdict.pdcrcyDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='drintp']").select2({
		data : kupdppbdict.drintpDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='intrtp']").select2({
		data : kupdppbdict.intrtpDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='inadtp']").select2({
		data : kupdppbdict.inadtpDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='sminad']").select2({
		data : kupdppbdict.sminadDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='inclfg']").select2({
		data : kupdppbdict.inclfgDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='bsinam']").select2({
		data : kupdppbdict.bsinamDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='bsindt']").select2({
		data : kupdppbdict.bsindtDict,
		allowClear : true
	});
	$("input[name='inedsc']").select2({
		data : kupdppbdict.inedscDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='dtlvsr']").select2({
		data : kupdppbdict.dtlvsrDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='amlvsr']").select2({
		data : kupdppbdict.amlvsrDict,
		allowClear : true
	});
	$("#editdfintrModal input[name='drinsc']").select2({
		data : kupdppbdict.drinscDict,
		allowClear : true
	});
	//
	$("#the_crcycd").select2({data:kupdppbdict.pdcrcyDict,allowClear : true});
	$("#the_drintp").select2({data:kupdppbdict.drintpDict,allowClear : true});
	$("#the_intrtp").select2({data:kupdppbdict.intrtpDict,allowClear : true});
	$("#the_inadtp").select2({data:kupdppbdict.inadtpDict,allowClear : true});
	$("#the_sminad").select2({data:kupdppbdict.sminadDict,allowClear : true});
	$("#the_inclfg").select2({data:kupdppbdict.inclfgDict,allowClear : true});
	$("#the_bsinam").select2({data:kupdppbdict.bsinamDict,allowClear : true});
	$("#the_bsindt").select2({data:kupdppbdict.bsindtDict,allowClear : true});
	$("#the_inedsc").select2({data:kupdppbdict.inedscDict,allowClear : true});
	$("#the_dtlvsr").select2({data:kupdppbdict.dtlvsrDict,allowClear : true});
	$("#the_amlvsr").select2({data:kupdppbdict.amlvsrDict,allowClear : true});
	$("#the_drinsc").select2({data:kupdppbdict.drinscDict,allowClear : true});
	
	
	var handleTable = function(prodcd) {
		var dfintrgrid = new Datatable();
		var dfintrurl = Sunline.ajaxPath("prod/ddfsel");
		var dfintrsendData = [ "prodcd", "crcycd", "drintp", "ingpcd", "intrtp" ];
		var bianJiData = ["prodcd",
		                  "crcycd",
		                  "drintp",
		                  "ingpcd",
		                  "intrtp",
		                  "drintx",
		                  "inadtp",
		                  "sminad",
		                  "adincd",
		                  "insrwy",
		                  "inclfg",
		                  "bsinam",
		                  "bsindt",
		                  "inedsc",
		                  "bsincd",
		                  "bsinrl",
		                  "bsinef",
		                  "dtlvsr",
		                  "dtsrcd",
		                  "dtlvrl",
		                  "dtlvef",
		                  "amlvsr",
		                  "amlvcd",
		                  "amlvrl",
		                  "amlvef",
		                  "drinsc",
		                  "drdein"];
		if (!Sunline.isNull(prodcd)) {
			dfintrgrid.setAjaxParam("q_prodcd", prodcd);
		}
		dfintrgrid
				.init({
					src : $("#datatable_dfintr"),
					deleteData : dfintrsendData,
					onSuccess : function(dfintrgrid) {
					},
					onError : function(dfintrgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : dfintrurl,
						},
						"columns" : [
								{
									"data" : "prodcd",//1
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.pdcrcyDict.length; i++) {
											if (kupdppbdict.pdcrcyDict[i].id == data) {
												return kupdppbdict.pdcrcyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drintp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.drintpDict.length; i++) {
											if (kupdppbdict.drintpDict[i].id == data) {
												return kupdppbdict.drintpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "ingpcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "intrtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.intrtpDict.length; i++) {
											if (kupdppbdict.intrtpDict[i].id == data) {
												return kupdppbdict.intrtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drintx",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inadtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inadtpDict.length; i++) {
											if (kupdppbdict.inadtpDict[i].id == data) {
												return kupdppbdict.inadtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "sminad",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.sminadDict.length; i++) {
											if (kupdppbdict.sminadDict[i].id == data) {
												return kupdppbdict.sminadDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "adincd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "insrwy",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inclfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inclfgDict.length; i++) {
											if (kupdppbdict.inclfgDict[i].id == data) {
												return kupdppbdict.inclfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "bsinam",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.bsinamDict.length; i++) {
											if (kupdppbdict.bsinamDict[i].id == data) {
												return kupdppbdict.bsinamDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "bsindt",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.bsindtDict.length; i++) {
											if (kupdppbdict.bsindtDict[i].id == data) {
												return kupdppbdict.bsindtDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "inedsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inedscDict.length; i++) {
											if (kupdppbdict.inedscDict[i].id == data) {
												return kupdppbdict.inedscDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "bsincd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bsinrl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bsinef",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dtlvsr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.dtlvsrDict.length; i++) {
											if (kupdppbdict.dtlvsrDict[i].id == data) {
												return kupdppbdict.dtlvsrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "dtsrcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dtlvrl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dtlvef",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "amlvsr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.amlvsrDict.length; i++) {
											if (kupdppbdict.amlvsrDict[i].id == data) {
												return kupdppbdict.amlvsrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "amlvcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "amlvrl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "amlvef",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "drinsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.drinscDict.length; i++) {
											if (kupdppbdict.drinscDict[i].id == data) {
												return kupdppbdict.drinscDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drdein",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='bianJi' href='javascript:;' data-src='"
										+ data.prodcd + ","
										+ data.crcycd + ","
										+ data.drintp + ","
										+ data.ingpcd + ","
										+ data.intrtp + ","
										+ data.drintx + ","
										+ data.inadtp + ","
										+ data.sminad + ","
										+ data.adincd + ","
										+ data.insrwy + ","
										+ data.inclfg + ","
										+ data.bsinam + ","
										+ data.bsindt + ","
										+ data.inedsc + ","
										+ data.bsincd + ","
										+ data.bsinrl + ","
										+ data.bsinef + ","
										+ data.dtlvsr + ","
										+ data.dtsrcd + ","
										+ data.dtlvrl + ","
										+ data.dtlvef + ","
										+ data.amlvsr + ","
										+ data.amlvcd + ","
										+ data.amlvrl + ","
										+ data.amlvef + ","
										+ data.drinsc + ","
										+ data.drdein + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.crcycd
												+ ","
												+ data.drintp
												+ ","
												+ data.ingpcd
												+ ","
												+ data.intrtp + "'>删除 </a>";
									}
								} ]
					}
				});
		dfintrgrid.bindTableDelete(dfintrsendData);
		dfintrgrid.addBindEvent(".bianJi", "click", bianJiData,
				function(data) {
        	showInfo(data);
		});
		//弹出编辑窗口
		var showInfo = function(data) {//
			$('#the_prodcd').val(data.prodcd);
			$('#the_crcycd').select2("val",data.crcycd);
			$('#the_drintp').select2("val",data.drintp);
			$('#the_ingpcd').val(data.ingpcd);
			$('#the_intrtp').select2("val",data.intrtp);
			$('#the_drintx').val(data.drintx);
			$('#the_inadtp').select2("val",data.inadtp);
			$('#the_sminad').select2("val",data.sminad);
			$('#the_adincd').val(data.adincd);
			$('#the_insrwy').val(data.insrwy);
			$('#the_inclfg').select2("val",data.inclfg);
			$('#the_bsinam').select2("val",data.bsinam);
			$('#the_bsindt').select2("val",data.bsindt);
			$('#the_inedsc').select2("val",data.inedsc);
			$('#the_bsincd').val(data.bsincd);
			$('#the_bsinrl').val(data.bsinrl);
			$('#the_bsinef').val(data.bsinef);
			$('#the_dtlvsr').select2("val",data.dtlvsr);
			$('#the_dtsrcd').val(data.dtsrcd);
			$('#the_dtlvrl').val(data.dtlvrl);
			$('#the_dtlvef').val(data.dtlvef);
			$('#the_amlvsr').select2("val",data.amlvsr);
			$('#the_amlvcd').val(data.amlvcd);
			$('#the_amlvrl').val(data.amlvrl);
			$('#the_amlvef').val(data.amlvef);
			$('#the_drinsc').select2("val",data.drinsc);
			$('#the_drdein').val(data.drdein);
			$("#editdfintrModal0002").modal("show");
		};
		//
		$('#the_btn_save_dfintr').click(function(){
			var input = {};
			input.prodcd = $('#the_prodcd').val();
			input.crcycd = $('#the_crcycd').select2("val");
			input.drintp = $('#the_drintp').select2("val");
			input.ingpcd = $('#the_ingpcd').val();
			input.intrtp = $('#the_intrtp').select2("val");
			input.drintx = $('#the_drintx').val();
			input.inadtp = $('#the_inadtp').select2("val");
			input.sminad = $('#the_sminad').select2("val");
			input.adincd = $('#the_adincd').val();
			input.insrwy = $('#the_insrwy').val();
			input.inclfg = $('#the_inclfg').select2("val");
			input.bsinam = $('#the_bsinam').select2("val");
			input.bsindt = $('#the_bsindt').select2("val");
			input.inedsc = $('#the_inedsc').select2("val");
			input.bsincd = $('#the_bsincd').val();
			input.bsinrl = $('#the_bsinrl').val();
			input.bsinef = $('#the_bsinef').val();
			input.dtlvsr = $('#the_dtlvsr').select2("val");
			input.dtsrcd = $('#the_dtsrcd').val();
			input.dtlvrl = $('#the_dtlvrl').val();
			input.dtlvef = $('#the_dtlvef').val();
			input.amlvsr = $('#the_amlvsr').select2("val");
			input.amlvcd = $('#the_amlvcd').val();
			input.amlvrl = $('#the_amlvrl').val();
			input.amlvef = $('#the_amlvef').val();
			input.drinsc = $('#the_drinsc').select2("val");
			input.drdein = $('#the_drdein').val();
			Sunline.ajaxRouter(
		         	"prod/ddfupd", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("修改成功",function(){
		                   	$("#editdfintrModal0002").modal('hide');
		                   	dfintrgrid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		
		
		// 新增窗口
		$("#add_dfintr_btn").bind("click", function() {
			$("input[name='prodcd']", $("#editdfintrModal")).val(prodcd);
			$("#editdfintrModal").modal('show');
			$("#editdfintrModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editdfintrModal"))).hide();
				$('.alert-danger', $('form', $("#editdfintrModal"))).hide();
				$(".msg", $('form', $("#editdfintrModal"))).text("");
				dfintrgrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_dfintr").click(function() {
			$('form', $("#editdfintrModal")).submit();
		});

		var dfintrValid = Sunline.getValidate($('form', $("#editdfintrModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdfintrModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					var datas = [];
					datas.push(data);
					var dpdfits = {
						"dpdfit" : datas
					};
					Sunline.ajaxRouter("prod/ddfins", dpdfits, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editdfintrModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editdfintrModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editdfintrModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editdfintrModal")))
											.show();
								}
								$(".msg", $('form', $("#editdfintrModal")))
										.text(ret.msg);
							});

				}, {
					crcycd : {
						required : true
					},
					drintp : {
						required : true
					},
					ingpcd : {
						required : true,
						maxlength : 8
					},
					intrtp : {
						required : true
					},
					adincd : {
						maxlength : 20
					},
					insrwy : {
						maxlength : 1
					},
					bsincd : {
						maxlength : 20
					},
					bsinrl : {
						maxlength : 2
					},
					bsinef : {
						maxlength : 01
					},
					dtsrcd : {
						maxlength : 20
					},
					dtlvrl : {
						maxlength : 2
					},
					dtlvef : {
						maxlength : 1
					},
					amlvcd : {
						maxlength : 20
					},
					amlvrl : {
						maxlength : 2
					},
					amlvef : {
						maxlength : 1
					},
					drdein : {
						maxlength : 1
					}

				});

	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();