var kupdppbdrawplan = function() {

	$("#editdrawplanModal input[name='crcycd']").select2({
		data : kupdppbdict.pdcrcyDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='setpwy']").select2({
		data : kupdppbdict.acolfgDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='termwy']").select2({
		data : kupdppbdict.termwyDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='dredwy']").select2({
		data : kupdppbdict.endtwyDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='drcrwy']").select2({
		data : kupdppbdict.pscrwyDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='drdfsd']").select2({
		data : kupdppbdict.dfltsdDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='drdfwy']").select2({
		data : kupdppbdict.dfltwyDict,
		allowClear : true
	});
	$("#editdrawplanModal input[name='beinfg']").select2({
		data : kupdppbdict.beinfgDict,
		allowClear : true
	});
	//
	$("#the_crcycd").select2({data:kupdppbdict.pdcrcyDict,allowClear : true});
	$("#the_setpwy").select2({data:kupdppbdict.acolfgDict,allowClear : true});
	$("#the_termwy").select2({data:kupdppbdict.termwyDict,allowClear : true});
	$("#the_dredwy").select2({data:kupdppbdict.endtwyDict,allowClear : true});
	$("#the_drcrwy").select2({data:kupdppbdict.pscrwyDict,allowClear : true});
	$("#the_drdfsd").select2({data:kupdppbdict.dfltsdDict,allowClear : true});
	$("#the_drdfwy").select2({data:kupdppbdict.dfltwyDict,allowClear : true});
	$("#the_beinfg").select2({data:kupdppbdict.beinfgDict,allowClear : true});
	//
	
	
	var handleTable = function(prodcd) {
		var drawplangrid = new Datatable();
		var drawplanurl = Sunline.ajaxPath("prod/dwpsel");
		var drawplansendData = [ "prodcd", "crcycd" ];
		var bianJiData = ["prodcd",
		                  "crcycd",
		                  "setpwy",
		                  "termwy",
		                  "dradpd",
		                  "dredwy",
		                  "drcrwy",
		                  "drdfsd",
		                  "drdfwy",
		                  "minibl",
		                  "beinfg"];
		if (!Sunline.isNull(prodcd)) {
			drawplangrid.setAjaxParam("q_prodcd", prodcd);
		}
		drawplangrid
				.init({
					src : $("#datatable_drawplan"),
					deleteData : drawplansendData,
					onSuccess : function(drawplangrid) {
					},
					onError : function(drawplangrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : drawplanurl,
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
									"data" : "setpwy",
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
									"data" : "termwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.termwyDict.length; i++) {
											if (kupdppbdict.termwyDict[i].id == data) {
												return kupdppbdict.termwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "dradpd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dredwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.endtwyDict.length; i++) {
											if (kupdppbdict.endtwyDict[i].id == data) {
												return kupdppbdict.endtwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drcrwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.pscrwyDict.length; i++) {
											if (kupdppbdict.pscrwyDict[i].id == data) {
												return kupdppbdict.pscrwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drdfsd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.dfltsdDict.length; i++) {
											if (kupdppbdict.dfltsdDict[i].id == data) {
												return kupdppbdict.dfltsdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "drdfwy",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.dfltwyDict.length; i++) {
											if (kupdppbdict.dfltwyDict[i].id == data) {
												return kupdppbdict.dfltwyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "minibl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "beinfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.beinfgDict.length; i++) {
											if (kupdppbdict.beinfgDict[i].id == data) {
												return kupdppbdict.beinfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='bianJi' href='javascript:;' data-src='"
										+ data.prodcd + ","
										+ data.crcycd + ","
										+ data.setpwy + ","
										+ data.termwy + ","
										+ data.dradpd + ","
										+ data.dredwy + ","
										+ data.drcrwy + ","
										+ data.drdfsd + ","
										+ data.drdfwy + ","
										+ data.minibl + ","
										+ data.beinfg + "'>编辑 </a>";
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
												+ data.crcycd + "'>删除 </a>";
									}
								} 
								]
					}
				});
		drawplangrid.bindTableDelete(drawplansendData);
		drawplangrid.addBindEvent(".bianJi", "click", bianJiData,
				function(data) {
			showInfo(data);
		});
		//弹出编辑窗口
		var showInfo = function(data) {//
			$('#the_prodcd').val(data.prodcd);          
			$('#the_crcycd').select2("val",data.crcycd);
			$('#the_setpwy').select2("val",data.setpwy);
			$('#the_termwy').select2("val",data.termwy);
			$('#the_dradpd').val(data.dradpd);
			$('#the_dredwy').select2("val",data.dredwy);          
			$('#the_drcrwy').select2("val",data.drcrwy);
			$('#the_drdfsd').select2("val",data.drdfsd);
			$('#the_drdfwy').select2("val",data.drdfwy);
			$('#the_minibl').val(data.minibl);
			$('#the_beinfg').select2("val",data.beinfg);       
			$("#editdrawplanModal0009").modal("show");
		};
		//
		$('#the_btn_save_drawplan').click(function(){
			var input = {};
			input.prodcd = $('#the_prodcd').val();
			input.crcycd = $('#the_crcycd').select2("val");
			input.setpwy = $('#the_setpwy').select2("val");
			input.termwy = $('#the_termwy').select2("val");
			input.dradpd = $('#the_dradpd').val();
			input.dredwy = $('#the_dredwy').select2("val");
			input.drcrwy = $('#the_drcrwy').select2("val");
			input.drdfsd = $('#the_drdfsd').select2("val");
			input.drdfwy = $('#the_drdfwy').select2("val");//
			input.minibl = $('#the_minibl').val();
			input.beinfg = $('#the_beinfg').select2("val");
			Sunline.ajaxRouter(
		         	"prod/dwpupd", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("修改成功",function(){
		                   	$("#editdrawplanModal0009").modal('hide');
		                   	drawplangrid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		
		// 新增窗口
		$("#add_drawplan_btn").bind("click", function() {
			$("input[name='prodcd']", $("#editdrawplanModal")).val(prodcd);
			$("#editdrawplanModal").modal('show');
			$("#editdrawplanModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editdrawplanModal"))).hide();
				$('.alert-danger', $('form', $("#editdrawplanModal"))).hide();
				$(".msg", $('form', $("#editdrawplanModal"))).text("");
				drawplangrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_drawplan").click(function() {
			$('form', $("#editdrawplanModal")).submit();
		});

		var drawplanValid = Sunline.getValidate($('form',
				$("#editdrawplanModal")), function() {
			var data = {};
			$.each($("input", $("#editdrawplanModal")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					data[n.name] = n.value;
				}
			});
			var datas = [];
			datas.push(data);
			var dpdwpls = {
				"dpdwpl" : datas
			};
			Sunline.ajaxRouter("prod/dwpins", dpdwpls, 'post', function(ret) {
				if (ret.ret === "success") {
					$(".alert-success", $('form', $("#editdrawplanModal")))
							.show();
					$('.alert-danger', $('form', $("#editdrawplanModal")))
							.hide();
				} else {
					$(".alert-success", $('form', $("#editdrawplanModal")))
							.hide();
					$('.alert-danger', $('form', $("#editdrawplanModal")))
							.show();
				}
				$(".msg", $('form', $("#editdrawplanModal"))).text(ret.msg);
			});

		}, {
			crcycd : {
				required : true
			}
		});

	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();