var kcpchrg = function() {

	var crcycdDict = Sunline.getDict("crcycd");
	var cvcyfgDict = Sunline.getDict("E_CVCYFG");//币种兑换
	var carrtpDict = Sunline.getDict("E_CARRTP");//四舍五入方式
	var cufesrDict = Sunline.getDict("E_CUFESR");//计费金额来源
	var lysptpDict = Sunline.getDict("E_LYSPTP");//分层方式
	var felytpDict = Sunline.getDict("E_FELYTP");//收费分层取值类型
	var bllwtpDict = Sunline.getDict("E_BLLWTP");//余额不足处理方式
	var isfavoDict = Sunline.getDict("E_ISFAVO");//是否允许优惠
	var fediveDict = Sunline.getDict("E_FEDIVE");//收费分成标志
	var chrgtpDict = Sunline.getDict("E_CHRGTP");//收取方式
	var chrgsrDict = Sunline.getDict("E_CHRGSR");//收费金额来源
	var cgpyrvDict = Sunline.getDict("E_CGPYRV");//费用收付标志
	var fepefgDict = Sunline.getDict("E_YES___");//是否重复计算滞纳金
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='cvcyfg']").select2({data:cvcyfgDict,allowClear:true});
	$("input[name='carrtp']").select2({data:carrtpDict,allowClear:true});
	$("input[name='cufesr']").select2({data:cufesrDict,allowClear:true});
	$("input[name='lysptp']").select2({data:lysptpDict,allowClear:true});
	$("input[name='felytp']").select2({data:felytpDict,allowClear:true});
	$("input[name='bllwtp']").select2({data:bllwtpDict,allowClear:true});
	$("input[name='isfavo']").select2({data:isfavoDict,allowClear:true});
	$("input[name='fedive']").select2({data:fediveDict,allowClear:true});
	$("input[name='chrgtp']").select2({data:chrgtpDict,allowClear:true});
	$("input[name='chrgsr']").select2({data:chrgsrDict,allowClear:true});
	$("input[name='cgpyrv']").select2({data:cgpyrvDict,allowClear:true});
	$("input[name='fepefg']").select2({data:fepefgDict,allowClear:true});

	var handleTable = function() {
		var chrggrid = new Datatable();
		var chrgurl = Sunline.ajaxPath("kcp/qrchrg");
		var chrgsendData = [ "chrgcd","crcycd" ];
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
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "chrgna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cvcyfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cvcyfgDict.length; i++) {
											if (cvcyfgDict[i].id == data) {
												return cvcyfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mndecm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "carrtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < carrtpDict.length; i++) {
											if (carrtpDict[i].id == data) {
												return carrtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "cufesr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cufesrDict.length; i++) {
											if (cufesrDict[i].id == data) {
												return cufesrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "lysptp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < lysptpDict.length; i++) {
											if (lysptpDict[i].id == data) {
												return lysptpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "felytp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < felytpDict.length; i++) {
											if (felytpDict[i].id == data) {
												return felytpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "cgfacd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cghacd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bllwtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < bllwtpDict.length; i++) {
											if (bllwtpDict[i].id == data) {
												return bllwtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "cractm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "isfavo",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isfavoDict.length; i++) {
											if (isfavoDict[i].id == data) {
												return isfavoDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "mnfvrt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mxfvrt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fedive",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < fediveDict.length; i++) {
											if (fediveDict[i].id == data) {
												return fediveDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "scencd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "chrgtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < chrgtpDict.length; i++) {
											if (chrgtpDict[i].id == data) {
												return chrgtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "chrgsr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < chrgsrDict.length; i++) {
											if (chrgsrDict[i].id == data) {
												return chrgsrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "chrgpd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "plcgct",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cgpyrv",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cgpyrvDict.length; i++) {
											if (cgpyrvDict[i].id == data) {
												return cgpyrvDict[i].text;
											}
										}
										return data;
									}
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
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fepecd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fepefg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < fepefgDict.length; i++) {
											if (fepefgDict[i].id == data) {
												return fepefgDict[i].text;
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
									"data" : "debkpd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgcd
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
												+ data.chrgcd
												+ ","
												+ data.crcycd
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		chrggrid.bindTableDelete(chrgsendData);
		
		chrggrid.bindTableEdit(chrgsendData,function(nRowA){
			$("input[name='chrgcd']").attr("readOnly",true);
			$("input[name='crcycd']").attr("readOnly",true);
			
			$("input[name='chrgcd']").val($(nRowA[0]).text()); 
			$("input[name='chrgna']").val($(nRowA[1]).text()); 
			$("input[name='cvcyfg']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='mndecm']").val($(nRowA[3]).text()); 
			$("input[name='carrtp']").val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
			$("input[name='cufesr']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$("input[name='lysptp']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
			$("input[name='felytp']").val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change");
			$("input[name='cgfacd']").val($(nRowA[8]).text()); 
			$("input[name='cghacd']").val($(nRowA[9]).text()); 
			$("input[name='bllwtp']").val($(nRowA[10]).text().substring($(nRowA[10]).text().indexOf("[")+1,$(nRowA[10]).text().indexOf("]"))).trigger("change");
			$("input[name='cractm']").val($(nRowA[11]).text()); 
			$("input[name='isfavo']").val($(nRowA[12]).text().substring($(nRowA[12]).text().indexOf("[")+1,$(nRowA[12]).text().indexOf("]"))).trigger("change");
			$("input[name='mnfvrt']").val($(nRowA[13]).text()); 
			$("input[name='mxfvrt']").val($(nRowA[14]).text()); 
			$("input[name='fedive']").val($(nRowA[15]).text().substring($(nRowA[15]).text().indexOf("[")+1,$(nRowA[15]).text().indexOf("]"))).trigger("change");
			$("input[name='scencd']").val($(nRowA[16]).text()); 
			$("input[name='chrgtp']").val($(nRowA[17]).text().substring($(nRowA[17]).text().indexOf("[")+1,$(nRowA[17]).text().indexOf("]"))).trigger("change");
			$("input[name='chrgsr']").val($(nRowA[18]).text().substring($(nRowA[18]).text().indexOf("[")+1,$(nRowA[18]).text().indexOf("]"))).trigger("change");
			$("input[name='chrgpd']").val($(nRowA[19]).text()); 
			$("input[name='plcgct']").val($(nRowA[20]).text()); 
			$("input[name='cgpyrv']").val($(nRowA[21]).text().substring($(nRowA[21]).text().indexOf("[")+1,$(nRowA[21]).text().indexOf("]"))).trigger("change");
			$("input[name='crcycd']").val($(nRowA[22]).text().substring($(nRowA[22]).text().indexOf("[")+1,$(nRowA[22]).text().indexOf("]"))).trigger("change");
			$("input[name='brchno']").val($(nRowA[23]).text()); 
			$("input[name='fepecd']").val($(nRowA[24]).text()); 
			$("input[name='fepefg']").val($(nRowA[25]).text().substring($(nRowA[25]).text().indexOf("[")+1,$(nRowA[25]).text().indexOf("]"))).trigger("change");
			$("input[name='efctdt']").val($(nRowA[26]).text()); 
			$("input[name='inefdt']").val($(nRowA[27]).text()); 
			$("input[name='debkpd']").val($(nRowA[28]).text()); 
			
			
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
			
			$("input[name='chrgcd']").val(""); 
			$("input[name='chrgna']").val(""); 
			$("input[name='cvcyfg']").val("").trigger("change");
			$("input[name='mndecm']").val(""); 
			$("input[name='carrtp']").val("").trigger("change");
			$("input[name='cufesr']").val("").trigger("change");
			$("input[name='lysptp']").val("").trigger("change");
			$("input[name='felytp']").val("").trigger("change");
			$("input[name='cgfacd']").val(""); 
			$("input[name='cghacd']").val(""); 
			$("input[name='bllwtp']").val("").trigger("change");
			$("input[name='cractm']").val(""); 
			$("input[name='isfavo']").val("").trigger("change");
			$("input[name='mnfvrt']").val(""); 
			$("input[name='mxfvrt']").val(""); 
			$("input[name='fedive']").val("").trigger("change");
			$("input[name='scencd']").val(""); 
			$("input[name='chrgtp']").val("").trigger("change");
			$("input[name='chrgsr']").val("").trigger("change");
			$("input[name='chrgpd']").val(""); 
			$("input[name='plcgct']").val(""); 
			$("input[name='cgpyrv']").val("").trigger("change");
			$("input[name='crcycd']").val("").trigger("change");
			$("input[name='brchno']").val(""); 
			$("input[name='fepecd']").val(""); 
			$("input[name='fepefg']").val("").trigger("change");
			$("input[name='efctdt']").val(""); 
			$("input[name='inefdt']").val(""); 
			$("input[name='debkpd']").val(""); 
			
			
			
			
			
			
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
					
					Sunline.ajaxRouter("kcp/edchrg", 
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

	return {
		init : function() {
			handleTable();
		}
	}
}();