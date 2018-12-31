var kcpchrgfmdt = function() {

	var crcycdDict = Sunline.getDict("crcycd");//货币代号
	var cufetpDict = Sunline.getDict("E_CUFETP");//计费类型
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='cufetp']").select2({data:cufetpDict,allowClear:true});

	var handleTable = function(chrgfm) {
		var fmdtgrid = new Datatable();
		var fmdturl = Sunline.ajaxPath("kcp/qrfmdt");
		var fmdtsendData = [ "chrgfm","sbbkcd","brchno","crcycd","limiam"];
		if (!Sunline.isNull(chrgfm)) {
			fmdtgrid.setAjaxParam("q_chrgfm", chrgfm);
		}
		fmdtgrid.init({
					src : $("#datatable_fmdt"),
					deleteData : fmdtsendData,
					onSuccess : function(fmdtgrid) {
					},
					onError : function(fmdtgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : fmdturl,
						},
						"bDestroy" :true,
			            "bServerSide":true,
						"columns" : [
								{
									"data" : "chrgfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "sbbkcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "brchno",
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
									"data" : "limiam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cufetp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < cufetpDict.length; i++) {
											if (cufetpDict[i].id == data) {
												return cufetpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "chrgrt",
									"sortable" : false,
									"searchable" : false
								},
								
								{
									"data" : "pecgam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "amfomu",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "sequno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cgmnam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "cgmxam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgfm
												+","
												+data.sbbkcd
												+","
												+data.brchno
												+","
												+data.crcycd
												+","
												+data.limiam
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.chrgfm
												+","
												+data.sbbkcd
												+","
												+data.brchno
												+","
												+data.crcycd
												+","
												+data.limiam
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		fmdtgrid.bindTableDelete(fmdtsendData);
		
		fmdtgrid.bindTableEdit(fmdtsendData,function(nRowA){
			$("input[name='chrgfm']").attr("readOnly",true);
			$("input[name='sbbkcd']").attr("readOnly",true);
			$("input[name='brchno']").attr("readOnly",true);
			$("input[name='crcycd']").attr("readOnly",true);
			$("input[name='limiam']").attr("readOnly",true);
			
			$("input[name='chrgfm']").val($(nRowA[0]).text()); 
			$("input[name='sbbkcd']").val($(nRowA[1]).text()); 
			$("input[name='brchno']").val($(nRowA[2]).text()); 
			$("input[name='crcycd']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='limiam']").val($(nRowA[4]).text()); 
			$("input[name='cufetp']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$("input[name='chrgrt']").val($(nRowA[6]).text()); 
			$("input[name='pecgam']").val($(nRowA[7]).text()); 
			$("input[name='amfomu']").val($(nRowA[8]).text()); 
			$("input[name='sequno']").val($(nRowA[9]).text()); 
			$("input[name='cgmnam']").val($(nRowA[10]).text()); 
			$("input[name='cgmxam']").val($(nRowA[11]).text()); 
			$("input[name='remark']").val($(nRowA[12]).text()); 
			
			
			$("#editfmdtModal").modal('show');
			$("#editfmdtModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmdtModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmdtModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmdtModal"))).text("");
				fmdtgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_fmdt_btn").bind("click", function() {
			$("input[name='chrgfm']").attr("readOnly",false);
			$("input[name='sbbkcd']").attr("readOnly",false);
			$("input[name='brchno']").attr("readOnly",false);
			$("input[name='crcycd']").attr("readOnly",false);
			$("input[name='limiam']").attr("readOnly",false);
			
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editfmdtModal")).val(prodcd);
			$("input", $("#editfmdtModal")).val("").trigger("change");
			$("#editfmdtModal").modal('show');
			$("#editfmdtModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmdtModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmdtModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmdtModal"))).text("");
				fmdtgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_fmdt").click(function(){
			$('form', $("#editfmdtModal")).submit();
		});
		
		var fmdtValid = Sunline.getValidate($('form', $("#editfmdtModal")),
				function() {
					var data = {};
					$.each($("input", $("#editfmdtModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edfmdt", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editfmdtModal"))).show();
                        	   $('.alert-danger', $('form', $("#editfmdtModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editfmdtModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editfmdtModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editfmdtModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 defncd:{maxlength : 20}	
//				}
				);

		
	};

	return {
		init : function(chrgfm) {
			handleTable(chrgfm);
		}
	}
}();