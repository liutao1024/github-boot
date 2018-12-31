var lnfschdrule = function() {

	var dict = {
			
			crcycdDict : Sunline.getDict("crcycd"),
			schdsrDict : Sunline.getDict("E_SCHDSR"),
			schdtpDict : Sunline.getDict("E_SCHDTP"),
			ismurpDict : Sunline.getDict("E_ISMURP"),
			insttpDict : Sunline.getDict("E_INSTTP"),
			odrptpDict : Sunline.getDict("E_ODRPTP"),
			isadscDict : Sunline.getDict("E_YES___"),
			frstmdDict : Sunline.getDict("E_FRSTMD"),
			lastmdDict : Sunline.getDict("E_LASTMD"),
			isaurpDict : Sunline.getDict("E_ISAURP"),
			isclosDict : Sunline.getDict("E_ISCLOS"),
			isreduDict : Sunline.getDict("E_ISREDU"),
			aurptpDict : Sunline.getDict("E_AURPTP"),
			auovtpDict : Sunline.getDict("E_AUOVTP"),
			isrdclDict : Sunline.getDict("E_ISRDCL"),
			isnmrpDict : Sunline.getDict("E_ISRDCL"),
			isinrpDict : Sunline.getDict("E_ISRDCL"),
			isepymDict : Sunline.getDict("E_ISEPYM"),
			epymtpDict : Sunline.getDict("E_EPYMTP"),
			iseptxDict : Sunline.getDict("E_ISEPTX"),
			ischseDict : Sunline.getDict("E_ISCHSC"),//提前还款调整计划,期限变更调整计划,利率变更调整计划
			grintpDict : Sunline.getDict("E_GRINTP"),
			grovtpDict : Sunline.getDict("E_GROVTP"),
			grrctpDict : Sunline.getDict("E_GRRCTP"),
			grtftpDict : Sunline.getDict("E_GRTFTP"),
			grhdtpDict : Sunline.getDict("E_GRHDTP"),
			isgracDict : Sunline.getDict("E_ISREDU")
		}
	
	$("input[name='crcycd']").select2({data:dict.crcycdDict,allowClear:true});
	$("input[name='schdsr']").select2({data:dict.schdsrDict,allowClear:true});
	$("input[name='schdtp']").select2({data:dict.schdtpDict,allowClear:true});
	$("input[name='ismurp']").select2({data:dict.ismurpDict,allowClear:true});
	$("input[name='insttp']").select2({data:dict.insttpDict,allowClear:true});
	$("input[name='odrptp']").select2({data:dict.odrptpDict,allowClear:true});
	$("input[name='isadsc']").select2({data:dict.isadscDict,allowClear:true});
	$("input[name='frstmd']").select2({data:dict.frstmdDict,allowClear:true});
	$("input[name='lastmd']").select2({data:dict.lastmdDict,allowClear:true});
	$("input[name='isaurp']").select2({data:dict.isaurpDict,allowClear:true});
	$("input[name='isclos']").select2({data:dict.isclosDict,allowClear:true});
	$("input[name='isredu']").select2({data:dict.isreduDict,allowClear:true});
	$("input[name='aurptp']").select2({data:dict.aurptpDict,allowClear:true});
	$("input[name='auovtp']").select2({data:dict.auovtpDict,allowClear:true});
	$("input[name='isrdcl']").select2({data:dict.isrdclDict,allowClear:true});
	$("input[name='isnmrp']").select2({data:dict.isnmrpDict,allowClear:true});
	$("input[name='isinrp']").select2({data:dict.isinrpDict,allowClear:true});
	$("input[name='isepym']").select2({data:dict.isepymDict,allowClear:true});
	$("input[name='epymtp']").select2({data:dict.epymtpDict,allowClear:true});
	$("input[name='iseptx']").select2({data:dict.iseptxDict,allowClear:true});
	$("input[name='ischse']").select2({data:dict.ischseDict,allowClear:true});
	$("input[name='grintp']").select2({data:dict.grintpDict,allowClear:true});
	$("input[name='grovtp']").select2({data:dict.grovtpDict,allowClear:true});
	$("input[name='grrctp']").select2({data:dict.grrctpDict,allowClear:true});
	$("input[name='grtftp']").select2({data:dict.grtftpDict,allowClear:true});
	$("input[name='grhdtp']").select2({data:dict.grhdtpDict,allowClear:true});
	$("input[name='isgrac']").select2({data:dict.isgracDict,allowClear:true});
	
	
	var handleTable = function(prodcd) {
		var rulegrid = new Datatable();
		var ruleurl = Sunline.ajaxPath("loan/qrrule");
		var rulesendData = [ "prodcd","crcycd" ];
		if (!Sunline.isNull(prodcd)) {
			rulegrid.setAjaxParam("q_prodcd", prodcd);
		}  
		rulegrid.init({
					src : $("#datatable_rule"),
					deleteData : rulesendData,
					onSuccess : function(rulegrid) {
					},
					onError : function(rulegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : ruleurl,
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
										for (var i = 0; i < dict.crcycdDict.length; i++) {
											if (dict.crcycdDict[i].id == data) {
												return dict.crcycdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "schdsr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.schdsrDict.length; i++) {
											if (dict.schdsrDict[i].id == data) {
												return dict.schdsrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "schdtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.schdtpDict.length; i++) {
											if (dict.schdtpDict[i].id == data) {
												return dict.schdtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "repyfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ismurp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.ismurpDict.length; i++) {
											if (dict.ismurpDict[i].id == data) {
												return dict.ismurpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "prinfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dfperd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ovdufm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "repysq",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "insttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.insttpDict.length; i++) {
											if (dict.insttpDict[i].id == data) {
												return dict.insttpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "odrptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.odrptpDict.length; i++) {
											if (dict.odrptpDict[i].id == data) {
												return dict.odrptpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isadsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isadscDict.length; i++) {
											if (dict.isadscDict[i].id == data) {
												return dict.isadscDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "frstmd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.frstmdDict.length; i++) {
											if (dict.frstmdDict[i].id == data) {
												return dict.frstmdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "lastmd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.lastmdDict.length; i++) {
											if (dict.lastmdDict[i].id == data) {
												return dict.lastmdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isaurp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isaurpDict.length; i++) {
											if (dict.isaurpDict[i].id == data) {
												return dict.isaurpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isclos",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isclosDict.length; i++) {
											if (dict.isclosDict[i].id == data) {
												return dict.isclosDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isredu",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isreduDict.length; i++) {
											if (dict.isreduDict[i].id == data) {
												return dict.isreduDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mxredu",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "aurptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.aurptpDict.length; i++) {
											if (dict.aurptpDict[i].id == data) {
												return dict.aurptpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "auovtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.auovtpDict.length; i++) {
											if (dict.auovtpDict[i].id == data) {
												return dict.auovtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isrdcl",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isrdclDict.length; i++) {
											if (dict.isrdclDict[i].id == data) {
												return dict.isrdclDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isnmrp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isnmrpDict.length; i++) {
											if (dict.isnmrpDict[i].id == data) {
												return dict.isnmrpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isinrp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isinrpDict.length; i++) {
											if (dict.isinrpDict[i].id == data) {
												return dict.isinrpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isepym",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isepymDict.length; i++) {
											if (dict.isepymDict[i].id == data) {
												return dict.isepymDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "epymtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.epymtpDict.length; i++) {
											if (dict.epymtpDict[i].id == data) {
												return dict.epymtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "iseptx",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.iseptxDict.length; i++) {
											if (dict.iseptxDict[i].id == data) {
												return dict.iseptxDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "epchsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.ischseDict.length; i++) {
											if (dict.ischseDict[i].id == data) {
												return dict.ischseDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "tmchsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.ischseDict.length; i++) {
											if (dict.ischseDict[i].id == data) {
												return dict.ischseDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "rtchsc",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.ischseDict.length; i++) {
											if (dict.ischseDict[i].id == data) {
												return dict.ischseDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isgrac",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.isgracDict.length; i++) {
											if (dict.isgracDict[i].id == data) {
												return dict.isgracDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "grprdy",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "grindy",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "gracts",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "grintp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.grintpDict.length; i++) {
											if (dict.grintpDict[i].id == data) {
												return dict.grintpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "grovtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.grovtpDict.length; i++) {
											if (dict.grovtpDict[i].id == data) {
												return dict.grovtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "grrctp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.grrctpDict.length; i++) {
											if (dict.grrctpDict[i].id == data) {
												return dict.grrctpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "grtftp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.grtftpDict.length; i++) {
											if (dict.grtftpDict[i].id == data) {
												return dict.grtftpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "grhdtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dict.grhdtpDict.length; i++) {
											if (dict.grhdtpDict[i].id == data) {
												return dict.grhdtpDict[i].text;
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
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.crcycd
											    + "'>编辑 </a>";
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
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		rulegrid.bindTableDelete(rulesendData);
		rulegrid.bindTableEdit(rulesendData,function(nRowA){
			$("input[name='crcycd']").attr("readOnly",true);
			$("input[name='prodcd']").val($(nRowA[0]).text()); 
			$("input[name='crcycd']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$("input[name='schdsr']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='schdtp']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='repyfm']").val($(nRowA[4]).text()); 
			$("input[name='ismurp']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$("input[name='prinfm']").val($(nRowA[6]).text()); 
			$("input[name='dfperd']").val($(nRowA[7]).text()); 
			$("input[name='ovdufm']").val($(nRowA[8]).text()); 
			$("input[name='repysq']").val($(nRowA[9]).text()); 
			$("input[name='insttp']").val($(nRowA[10]).text().substring($(nRowA[10]).text().indexOf("[")+1,$(nRowA[10]).text().indexOf("]"))).trigger("change");
			$("input[name='odrptp']").val($(nRowA[11]).text().substring($(nRowA[11]).text().indexOf("[")+1,$(nRowA[11]).text().indexOf("]"))).trigger("change");
			$("input[name='isadsc']").val($(nRowA[12]).text().substring($(nRowA[12]).text().indexOf("[")+1,$(nRowA[12]).text().indexOf("]"))).trigger("change");
			$("input[name='frstmd']").val($(nRowA[13]).text().substring($(nRowA[13]).text().indexOf("[")+1,$(nRowA[13]).text().indexOf("]"))).trigger("change");
			$("input[name='lastmd']").val($(nRowA[14]).text().substring($(nRowA[14]).text().indexOf("[")+1,$(nRowA[14]).text().indexOf("]"))).trigger("change");
			$("input[name='isaurp']").val($(nRowA[15]).text().substring($(nRowA[15]).text().indexOf("[")+1,$(nRowA[15]).text().indexOf("]"))).trigger("change");
			$("input[name='isclos']").val($(nRowA[16]).text().substring($(nRowA[16]).text().indexOf("[")+1,$(nRowA[16]).text().indexOf("]"))).trigger("change");
			$("input[name='isredu']").val($(nRowA[17]).text().substring($(nRowA[17]).text().indexOf("[")+1,$(nRowA[17]).text().indexOf("]"))).trigger("change");
			$("input[name='mxredu']").val($(nRowA[18]).text()); 
			$("input[name='aurptp']").val($(nRowA[19]).text().substring($(nRowA[19]).text().indexOf("[")+1,$(nRowA[19]).text().indexOf("]"))).trigger("change");
			$("input[name='auovtp']").val($(nRowA[20]).text().substring($(nRowA[20]).text().indexOf("[")+1,$(nRowA[20]).text().indexOf("]"))).trigger("change");
			$("input[name='isrdcl']").val($(nRowA[21]).text().substring($(nRowA[21]).text().indexOf("[")+1,$(nRowA[21]).text().indexOf("]"))).trigger("change");
			$("input[name='isnmrp']").val($(nRowA[22]).text().substring($(nRowA[22]).text().indexOf("[")+1,$(nRowA[22]).text().indexOf("]"))).trigger("change");
			$("input[name='isinrp']").val($(nRowA[23]).text().substring($(nRowA[23]).text().indexOf("[")+1,$(nRowA[23]).text().indexOf("]"))).trigger("change");
			$("input[name='isepym']").val($(nRowA[24]).text().substring($(nRowA[24]).text().indexOf("[")+1,$(nRowA[24]).text().indexOf("]"))).trigger("change");
			$("input[name='epymtp']").val($(nRowA[25]).text().substring($(nRowA[25]).text().indexOf("[")+1,$(nRowA[25]).text().indexOf("]"))).trigger("change");
			$("input[name='iseptx']").val($(nRowA[26]).text().substring($(nRowA[26]).text().indexOf("[")+1,$(nRowA[26]).text().indexOf("]"))).trigger("change");
			$("input[name='epchsc']").val($(nRowA[27]).text().substring($(nRowA[27]).text().indexOf("[")+1,$(nRowA[27]).text().indexOf("]"))).trigger("change");
			$("input[name='tmchsc']").val($(nRowA[28]).text().substring($(nRowA[28]).text().indexOf("[")+1,$(nRowA[28]).text().indexOf("]"))).trigger("change");
			$("input[name='rtchsc']").val($(nRowA[29]).text().substring($(nRowA[29]).text().indexOf("[")+1,$(nRowA[29]).text().indexOf("]"))).trigger("change");
			$("input[name='isgrac']").val($(nRowA[30]).text().substring($(nRowA[30]).text().indexOf("[")+1,$(nRowA[30]).text().indexOf("]"))).trigger("change");
			$("input[name='grprdy']").val($(nRowA[31]).text()); 
			$("input[name='grindy']").val($(nRowA[32]).text()); 
			$("input[name='gracts']").val($(nRowA[33]).text()); 
			$("input[name='grintp']").val($(nRowA[34]).text().substring($(nRowA[34]).text().indexOf("[")+1,$(nRowA[34]).text().indexOf("]"))).trigger("change");
			$("input[name='grovtp']").val($(nRowA[35]).text().substring($(nRowA[35]).text().indexOf("[")+1,$(nRowA[35]).text().indexOf("]"))).trigger("change");
			$("input[name='grrctp']").val($(nRowA[36]).text().substring($(nRowA[36]).text().indexOf("[")+1,$(nRowA[36]).text().indexOf("]"))).trigger("change");
			$("input[name='grtftp']").val($(nRowA[37]).text().substring($(nRowA[37]).text().indexOf("[")+1,$(nRowA[37]).text().indexOf("]"))).trigger("change");
			$("input[name='grhdtp']").val($(nRowA[38]).text().substring($(nRowA[38]).text().indexOf("[")+1,$(nRowA[38]).text().indexOf("]"))).trigger("change");
			$("#editruleModal").modal('show');
			$("#editruleModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editruleModal"))).hide();
	        	$('.alert-danger', $('form', $("#editruleModal"))).hide(); 
	        	$(".msg",$('form', $("#editruleModal"))).text("");
				rulegrid.submitFilter();
			});
			
		})
		
		$("#editruleModal").click(function(){
			$(".select-close").select2("close");
		});
		// 新增窗口
		$("#add_rule_btn").bind("click", function() {

			$("input[name='crcycd']").attr("readOnly",false);
			//清空 input值
			$("input", $("#editruleModal")).val("").trigger("change");
			$("input[name='prodcd']", $("#editruleModal")).val(prodcd);

			$("#editruleModal").modal('show');
			$("#editruleModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editruleModal"))).hide();
	        	$('.alert-danger', $('form', $("#editruleModal"))).hide(); 
	        	$(".msg",$('form', $("#editruleModal"))).text("");
				rulegrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_rule").click(function(){
			$('form', $("#editruleModal")).submit();
		});
		
		var ruleValid = Sunline.getValidate($('form', $("#editruleModal")),
				function() {
					var data = {};
					$.each($("input", $("#editruleModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});

					Sunline.ajaxRouter("loan/edrule", 
							data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editruleModal"))).show();
                        	   $('.alert-danger', $('form', $("#editruleModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editruleModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editruleModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editruleModal"))).text(ret.msg);
					});

				},{
					prodcd : {
						required : true,
						maxlength : 10
					}, 
					crcycd : {
						required : true
					},
					repyfm : {
						maxlength : 8
					},
					prinfm : {
						maxlength : 8
					},
					dfperd: {
						maxlength : 8
					},
					ovdufm: {
						maxlength : 8
					},
					repysq: {
						maxlength : 30
					},
					mxredu: {
						maxlength : 19
					},
					grprdy: {
						maxlength : 19
					},
					grindy: {
						maxlength : 19
					},
					gracts: {
						maxlength : 19
					}
				}
		
		);

		
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();