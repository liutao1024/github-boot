var lnfchrg = function() {

	var crcycdDict = Sunline.getDict("crcycd");
	var chrtypDict = Sunline.getDict("E_CHRTYP");
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='chrtyp']").select2({data:chrtypDict,allowClear:true});

	var handleTable = function(prodcd) {
		var chrggrid = new Datatable();
		var chrgurl = Sunline.ajaxPath("loan/qrchrg");
		var chrgsendData = [ "prodcd","crcycd" ];
		if (!Sunline.isNull(prodcd)) {
			chrggrid.setAjaxParam("q_prodcd", prodcd);
		}  
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
									"data" : "prodcd",
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
									"data" : "chrtyp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < chrtypDict.length; i++) {
											if (chrtypDict[i].id == data) {
												return chrtypDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "epcgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "epcgna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "epcgam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "opcgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "opcgna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "opcgam",
									"sortable" : false,
									"searchable" : false
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
		chrggrid.bindTableDelete(chrgsendData);
		
		chrggrid.bindTableEdit(chrgsendData,function(nRowA){
			$("input[name='prodcd']").attr("readOnly",true);
			$("input[name='crcycd']").attr("readOnly",true);
			$("input[name='prodcd']").val($(nRowA[0]).text()); 
			$("input[name='crcycd']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$("input[name='chrtyp']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='epcgcd']").val($(nRowA[3]).text()); 
			$("input[name='epcgna']").val($(nRowA[4]).text()); 
			$("input[name='epcgam']").val($(nRowA[5]).text()); 
			$("input[name='opcgcd']").val($(nRowA[6]).text()); 
			$("input[name='opcgna']").val($(nRowA[7]).text()); 
			$("input[name='opcgam']").val($(nRowA[8]).text()); 
			$("#editchrgModal").modal('show');
			$("#editchrgModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editchrgModal"))).hide();
	        	$('.alert-danger', $('form', $("#editchrgModal"))).hide(); 
	        	$(".msg",$('form', $("#editchrgModal"))).text("");
				chrggrid.submitFilter();
			});
		})
		
		$("#editchrgModal").click(function(){
		    $(".select-close").select2("close");
		});
		
		// 新增窗口
		$("#add_chrg_btn").bind("click", function() {
			$("input[name='crcycd']").attr("readOnly",false);
			$("input[name='prodcd']", $("#editchrgModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
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
					
					Sunline.ajaxRouter("loan/edchrg", 
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

				}, {
					 depttm:{required : true},
					 chrgcd:{maxlength : 20}	
				});

		
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();