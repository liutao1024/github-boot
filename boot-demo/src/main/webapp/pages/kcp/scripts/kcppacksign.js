var kcppacksign = function() {

	var crcycdDict = Sunline.getDict("crcycd");//货币代号
	var csexfgDict = Sunline.getDict("E_CSEXTG");//钞汇标志
	var cgsmtpDict = Sunline.getDict("E_CGSMTP");//收费累计类型
	var signtpDict = Sunline.getDict("E_SIGNTP");//签约类别
	var pdunitDict = Sunline.getDict("E_PDUNIT");//周期单位
	var isatsnDict = Sunline.getDict("E_YES___");//是否自动续签
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='csexfg']").select2({data:csexfgDict,allowClear:true});
	$("input[name='cgsmtp']").select2({data:cgsmtpDict,allowClear:true});
	$("input[name='signtp']").select2({data:signtpDict,allowClear:true});
	$("input[name='pdunit']").select2({data:pdunitDict,allowClear:true});
	$("input[name='isatsn']").select2({data:isatsnDict,allowClear:true});
	
	

	var handleTable = function() {
		var chrggrid = new Datatable();
		var chrgurl = Sunline.ajaxPath("kcp/qkpksi");
		var chrgsendData = [ "custno","custac","packcd","signtp","signdt" ];
		chrggrid.init({
					src : $("#datatable_chrg"),
					deleteData : chrgsendData,
					onSuccess : function(chrggrid) {
					},
					onError : function(chrggrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : chrgurl,
						},
						"columns" : [
								{
									"data" : "custno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd",
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
									"data" : "csexfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < csexfgDict.length; i++) {
											if (csexfgDict[i].id == data) {
												return csexfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "custac",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "packcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pkdeac",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cgsmtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cgsmtpDict.length; i++) {
											if (cgsmtpDict[i].id == data) {
												return cgsmtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "signtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < signtpDict.length; i++) {
											if (signtpDict[i].id == data) {
												return signtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "signdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "signpd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pdunit",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pdunitDict.length; i++) {
											if (pdunitDict[i].id == data) {
												return pdunitDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "efctdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inefdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "isatsn",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isatsnDict.length; i++) {
											if (isatsnDict[i].id == data) {
												return isatsnDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "atsnnm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crbgdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "creddt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "signbr",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crsmam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crsmnm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "explan",
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
										+ data.custac
										+ ","
										+ data.packcd
										+ ","
										+ data.signtp
										+ ","
										+ data.signdt
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.custno
												+ ","
												+ data.custac
												+ ","
												+ data.packcd
												+ ","
												+ data.signtp
												+ ","
												+ data.signdt
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		chrggrid.bindTableDelete(chrgsendData);
		
		chrggrid.bindTableEdit(chrgsendData,function(nRowA){
			$("input[name='custno']").attr("readOnly",true);
			$("input[name='custac']").attr("readOnly",true);
			$("input[name='packcd']").attr("readOnly",true);
			$("input[name='signtp']").attr("readOnly",true);
			$("input[name='signdt']").attr("readOnly",true);
			
			$("input[name='custno']").val($(nRowA[0]).text()); 
			$("input[name='crcycd']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$("input[name='csexfg']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='custac']").val($(nRowA[3]).text()); 
			$("input[name='packcd']").val($(nRowA[4]).text()); 
			$("input[name='pkdeac']").val($(nRowA[5]).text()); 
			$("input[name='cgsmtp']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
			$("input[name='signtp']").val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change");
			$("input[name='signdt']").val($(nRowA[8]).text()); 
			$("input[name='signpd']").val($(nRowA[9]).text()); 
			$("input[name='pdunit']").val($(nRowA[10]).text().substring($(nRowA[10]).text().indexOf("[")+1,$(nRowA[10]).text().indexOf("]"))).trigger("change");
			$("input[name='efctdt']").val($(nRowA[11]).text()); 
			$("input[name='inefdt']").val($(nRowA[12]).text()); 
			$("input[name='isatsn']").val($(nRowA[13]).text().substring($(nRowA[13]).text().indexOf("[")+1,$(nRowA[13]).text().indexOf("]"))).trigger("change");
			$("input[name='atsnnm']").val($(nRowA[14]).text()); 
			$("input[name='crbgdt']").val($(nRowA[15]).text()); 
			$("input[name='creddt']").val($(nRowA[16]).text()); 
			$("input[name='signbr']").val($(nRowA[17]).text()); 
			$("input[name='crsmam']").val($(nRowA[18]).text()); 
			$("input[name='crsmnm']").val($(nRowA[19]).text()); 
			$("input[name='explan']").val($(nRowA[20]).text()); 
			
			
			
			$("#editchrgModal").modal('show');
			$("#editchrgModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editchrgModal"))).hide();
	        	$('.alert-danger', $('form', $("#editchrgModal"))).hide(); 
	        	$(".msg",$('form', $("#editchrgModal"))).text("");
				chrggrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_chrg_btn").bind("click", function() {
			
//			$("input[name='chrgcd']").attr("readOnly",true);
//			$("input[name='crcycd']").attr("readOnly",true);
			
//			$("input[name='chrgcd']").val(""); 
//			$("input[name='chrgna']").val(""); 
//			$("input[name='cvcyfg']").val("").trigger("change");
//			$("input[name='mndecm']").val(""); 
//			$("input[name='carrtp']").val("").trigger("change");
//			$("input[name='cufesr']").val("").trigger("change");
//			$("input[name='lysptp']").val("").trigger("change");
//			$("input[name='felytp']").val("").trigger("change");
//			$("input[name='cgfacd']").val(""); 
//			$("input[name='cghacd']").val(""); 
//			$("input[name='bllwtp']").val("").trigger("change");
//			$("input[name='cractm']").val(""); 
//			$("input[name='isfavo']").val("").trigger("change");
//			$("input[name='mnfvrt']").val(""); 
//			$("input[name='mxfvrt']").val(""); 
//			$("input[name='fedive']").val("").trigger("change");
//			$("input[name='scencd']").val(""); 
//			$("input[name='chrgtp']").val("").trigger("change");
//			$("input[name='chrgsr']").val("").trigger("change");
//			$("input[name='chrgpd']").val(""); 
//			$("input[name='plcgct']").val(""); 
//			$("input[name='cgpyrv']").val("").trigger("change");
//			$("input[name='crcycd']").val("").trigger("change");
//			$("input[name='brchno']").val(""); 
//			$("input[name='fepecd']").val(""); 
//			$("input[name='fepefg']").val("").trigger("change");
//			$("input[name='efctdt']").val(""); 
//			$("input[name='inefdt']").val(""); 
//			$("input[name='debkpd']").val(""); 
			
			$("input", $("#editchrgModal")).val("").trigger("change");
			$("#editchrgModal").modal('show');
			$("#editchrgModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editchrgModal"))).hide();
	        	$('.alert-danger', $('form', $("#editchrgModal"))).hide(); 
	        	$(".msg",$('form', $("#editchrgModal"))).text("");
				chrggrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_chrg").click(function(){
			$('form', $("#editchrgModal")).submit();
		});
		
		var chrgValid = Sunline.getValidate($('form', $("#editchrgModal")),
				function() {
					var data = {};
					$.each($("input", $("#editchrgModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/ekpksi", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editchrgModal"))).show();
                        	   $('.alert-danger', $('form', $("#editchrgModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editchrgModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editchrgModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editchrgModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 chrgcd:{maxlength : 20}	
//				}
				);

		
	};
	// 时间插件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();