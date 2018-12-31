var kupdppbintr = function() {

	$("#editintrModal input[name='crcycd']").select2({
		data : kupdppbdict.pdcrcyDict,
		allowClear : true
	});
	$("#editintrModal input[name='inbefg']").select2({
		data : kupdppbdict.inbefgDict,
		allowClear : true
	});
	$("#editintrModal input[name='intrtp']").select2({
		data : kupdppbdict.intrtpDict,
		allowClear : true
	});
	$("#editintrModal input[name='txbefg']").select2({
		data : kupdppbdict.acolfgDict,
		allowClear : true
	});
	$("#editintrModal input[name='txbebs']").select2({
		data : kupdppbdict.txbebsDict,
		allowClear : true
	});
	$("#editintrModal input[name='hutxfg']").select2({
		data : kupdppbdict.hutxfgDict,
		allowClear : true
	});
	$("#editintrModal input[name='intrwy']").select2({
		data : kupdppbdict.intrwyDict,
		allowClear : true
	});
	$("#editintrModal input[name='incdtp']").select2({
		data : kupdppbdict.incdtpDict,
		allowClear : true
	});
	$("#editintrModal input[name='lyinwy']").select2({
		data : kupdppbdict.lyinwyDict,
		allowClear : true
	});
	$("#editintrModal input[name='inammd']").select2({
		data : kupdppbdict.inammdDict,
		allowClear : true
	});
	$("#editintrModal input[name='bldyca']").select2({
		data : kupdppbdict.bldycaDict,
		allowClear : true
	});
	$("#editintrModal input[name='inprwy']").select2({
		data : kupdppbdict.inprwyDict,
		allowClear : true
	});
	$("#editintrModal input[name='reprwy']").select2({
		data : kupdppbdict.reprwyDict,
		allowClear : true
	});
	$("#editintrModal input[name='fvrbfg']").select2({
		data : kupdppbdict.fvrbfgDict,
		allowClear : true
	});
	//
	$("#the_crcycd").select2({data:kupdppbdict.pdcrcyDict,allowClear : true});
	$("#the_intrtp").select2({data:kupdppbdict.intrtpDict,allowClear : true});
	$("#the_inbefg").select2({data:kupdppbdict.inbefgDict,allowClear : true});
	$("#the_txbefg").select2({data:kupdppbdict.acolfgDict,allowClear : true});
	$("#the_txbebs").select2({data:kupdppbdict.txbebsDict,allowClear : true});
	$("#the_hutxfg").select2({data:kupdppbdict.hutxfgDict,allowClear : true});
	$("#the_intrwy").select2({data:kupdppbdict.intrwyDict,allowClear : true});
	$("#the_incdtp").select2({data:kupdppbdict.incdtpDict,allowClear : true});
	$("#the_lyinwy").select2({data:kupdppbdict.lyinwyDict,allowClear : true});
	$("#the_inammd").select2({data:kupdppbdict.inammdDict,allowClear : true});
	$("#the_bldyca").select2({data:kupdppbdict.bldycaDict,allowClear : true});
	$("#the_inprwy").select2({data:kupdppbdict.inprwyDict,allowClear : true});
	$("#the_reprwy").select2({data:kupdppbdict.reprwyDict,allowClear : true});
	$("#the_fvrbfg").select2({data:kupdppbdict.fvrbfgDict,allowClear : true});

	
	var handleTable = function(prodcd) {
		var intrgrid = new Datatable();
		var intrurl = Sunline.ajaxPath("prod/dinsel");
		var intrsendData = [ "prodcd", "crcycd", "intrtp" ];
		var bianJiData = [
						"prodcd",
						"crcycd",
						"intrtp",
						"inbefg",
						"txbefg",
						"txbebs",
						"hutxfg",
						"txbefr",
						"intrcd",
						"intrwy",
						"incdtp",
						"lyinwy",
						"inammd",
						"bldyca",
						"inprwy",
						"inadlv",
						"reprwy",
						"fvrbfg",
						"fvrblv",
						"taxecd"];
		if (!Sunline.isNull(prodcd)) {
			intrgrid.setAjaxParam("q_prodcd", prodcd);
		}
		intrgrid
				.init({
					src : $("#datatable_intr"),
					deleteData : intrsendData,
					onSuccess : function(intrgrid) {
					},
					onError : function(intrgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : intrurl,
						},
						"columns" : [
								{
									"data" : "prodcd",
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
									"data" : "inbefg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inbefgDict.length; i++) {
											if (kupdppbdict.inbefgDict[i].id == data) {
												return kupdppbdict.inbefgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "txbefg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.acolfgDict.length; i++) {
											if (kupdppbdict.acolfgDict[i].id == data) {
												return kupdppbdict.acolfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "txbebs",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.txbebsDict.length; i++) {
											if (kupdppbdict.txbebsDict[i].id == data) {
												return kupdppbdict.txbebsDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "hutxfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.hutxfgDict.length; i++) {
											if (kupdppbdict.hutxfgDict[i].id == data) {
												return kupdppbdict.hutxfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "txbefr",
									"sortable" : false,
									"searchable" : false

								},
								{
									"data" : "intrcd",
									"sortable" : false,
									"searchable" : false

								},
								{
									"data" : "intrwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.intrwyDict.length; i++) {
											if (kupdppbdict.intrwyDict[i].id == data) {
												return kupdppbdict.intrwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "incdtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.incdtpDict.length; i++) {
											if (kupdppbdict.incdtpDict[i].id == data) {
												return kupdppbdict.incdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "lyinwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.lyinwyDict.length; i++) {
											if (kupdppbdict.lyinwyDict[i].id == data) {
												return kupdppbdict.lyinwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "inammd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inammdDict.length; i++) {
											if (kupdppbdict.inammdDict[i].id == data) {
												return kupdppbdict.inammdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "bldyca",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.bldycaDict.length; i++) {
											if (kupdppbdict.bldycaDict[i].id == data) {
												return kupdppbdict.bldycaDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "inprwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.inprwyDict.length; i++) {
											if (kupdppbdict.inprwyDict[i].id == data) {
												return kupdppbdict.inprwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "inadlv",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "reprwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.reprwyDict.length; i++) {
											if (kupdppbdict.reprwyDict[i].id == data) {
												return kupdppbdict.reprwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "fvrbfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.fvrbfgDict.length; i++) {
											if (kupdppbdict.fvrbfgDict[i].id == data) {
												return kupdppbdict.fvrbfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "fvrblv",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "taxecd",
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
										+ data.intrtp + ","
										+ data.inbefg + ","
										+ data.txbefg + ","
										+ data.txbebs + ","
										+ data.hutxfg + ","
										+ data.txbefr + ","
										+ data.intrcd + ","
										+ data.intrwy + ","
										+ data.incdtp + ","
										+ data.lyinwy + ","
										+ data.inammd + ","
										+ data.bldyca + ","
										+ data.inprwy + ","
										+ data.inadlv + ","
										+ data.reprwy + ","
										+ data.fvrbfg + ","
										+ data.fvrblv + ","
										+ data.taxecd + "'>编辑 </a>";
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
												+ data.intrtp + "'>删除 </a>";
									}
								} ]
					}
				});
		intrgrid.bindTableDelete(intrsendData);
		intrgrid.addBindEvent(".bianJi", "click", bianJiData,
				function(data) {
        	showInfo(data);
		});
		//弹出编辑窗口
		var showInfo = function(data) {//
			$('#the_prodcd').val(data.prodcd);          
			$('#the_crcycd').select2("val",data.crcycd);
			$('#the_intrtp').select2("val",data.intrtp);
			$('#the_inbefg').select2("val",data.inbefg);
			$('#the_txbefg').select2("val",data.txbefg);
			$('#the_txbebs').select2("val",data.txbebs);
			$('#the_hutxfg').select2("val",data.hutxfg);
			$('#the_txbefr').val(data.txbefr);          
			$('#the_intrcd').val(data.intrcd);          
			$('#the_intrwy').select2("val",data.intrwy);
			$('#the_incdtp').select2("val",data.incdtp);
			$('#the_lyinwy').select2("val",data.lyinwy);
			$('#the_inammd').select2("val",data.inammd);
			$('#the_bldyca').select2("val",data.bldyca);
			$('#the_inprwy').select2("val",data.inprwy);
			$('#the_inadlv').val(data.inadlv);          
			$('#the_reprwy').select2("val",data.reprwy);
			$('#the_fvrbfg').select2("val",data.taxecd);
			$('#the_fvrblv').val(data.fvrblv);          
			$('#the_taxecd').val(data.taxecd);          
			$("#editintrModal0003").modal("show");
		};
		//
		$('#the_btn_save_intr').click(function(){
			var input = {};
			input.prodcd = $('#the_prodcd').val();
			input.crcycd = $('#the_crcycd').select2("val");
			input.intrtp = $('#the_intrtp').select2("val");
			input.inbefg = $('#the_inbefg').select2("val");
			input.txbefg = $('#the_txbefg').select2("val");
			input.txbebs = $('#the_txbebs').select2("val");
			input.hutxfg = $('#the_hutxfg').select2("val");
			input.txbefr = $('#the_txbefr').val();
			input.intrcd = $('#the_intrcd').val();
			input.intrwy = $('#the_intrwy').select2("val");
			input.incdtp = $('#the_incdtp').select2("val");
			input.lyinwy = $('#the_lyinwy').select2("val");
			input.inammd = $('#the_inammd').select2("val");
			input.bldyca = $('#the_bldyca').select2("val");
			input.inprwy = $('#the_inprwy').select2("val");
			input.inadlv = $('#the_inadlv').val();
			input.reprwy = $('#the_reprwy').select2("val");
			input.fvrbfg = $('#the_fvrbfg').select2("val");
			input.fvrblv = $('#the_fvrblv').val();
			input.taxecd = $('#the_taxecd').val();
			Sunline.ajaxRouter(
		         	"prod/dinupd", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("修改成功",function(){
		                   	$("#editintrModal0003").modal('hide');
		                   	intrgrid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		
		
		// 新增窗口
		$("#add_intr_btn").bind("click", function() {
			$("input[name='prodcd']", $("#editintrModal")).val(prodcd);
			$("#editintrModal").modal('show');
			$("#editintrModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editintrModal"))).hide();
				$('.alert-danger', $('form', $("#editintrModal"))).hide();
				$(".msg", $('form', $("#editintrModal"))).text("");
				intrgrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_intr").click(function() {
			$('form', $("#editintrModal")).submit();
		});

		var intrValid = Sunline.getValidate($('form', $("#editintrModal")),
				function() {
					var data = {};
					$.each($("input", $("#editintrModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					var datas = [];
					datas.push(data);
					var dpintrs = {
						"dpintr" : datas
					};
					Sunline.ajaxRouter("prod/dinins", dpintrs, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editintrModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editintrModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editintrModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editintrModal")))
											.show();
								}
								$(".msg", $('form', $("#editintrModal"))).text(
										ret.msg);
							});

				}, {
					crcycd : {
						required : true
					},
					intrtp : {
						required : true
					},
					txbefr : {
						maxlength : 8
					},
					intrcd : {
						maxlength : 20
					},
					fvrblv : {
						maxlength : 8
					},
					taxecd : {
						maxlength : 20
					}
				});

	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();