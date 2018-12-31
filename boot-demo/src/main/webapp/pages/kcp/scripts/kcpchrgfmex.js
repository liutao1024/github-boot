var kcpchrgfmex = function() {

	var crcycdDict = Sunline.getDict("crcycd");//货币代号
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});

	var handleTable = function() {
		var fmexgrid = new Datatable();
		var fmexurl = Sunline.ajaxPath("kcp/qrfmex");
		var fmexsendData = [ "chrgcd","scencd","crcycd","chrgfm"];

		fmexgrid.init({
					src : $("#datatable_fmex"),
					deleteData : fmexsendData,
					onSuccess : function(fmexgrid) {
					},
					onError : function(fmexgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : fmexurl,
						},
						"columns" : [
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "scencd",
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
									"data" : "chrgfm",
									"sortable" : false,
									"searchable" : false
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
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgcd
												+","
												+data.scencd
												+","
												+data.crcycd
												+","
												+data.chrgfm
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
												+","
												+data.scencd
												+","
												+data.crcycd
												+","
												+data.chrgfm
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		fmexgrid.bindTableDelete(fmexsendData);
		
		fmexgrid.bindTableEdit(fmexsendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
//			编辑时锁定
			$("input[name='chrgcd']").attr("readOnly",true); 
			$("input[name='scencd']").attr("readOnly",true); 
			$("input[name='crcycd']").attr("readOnly",true);
			$("input[name='chrgfm']").attr("readOnly",true);
			
			
			
			$("input[name='chrgcd']").val($(nRowA[0]).text()); 
			$("input[name='scencd']").val($(nRowA[1]).text()); 
			$("input[name='crcycd']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='chrgfm']").val($(nRowA[3]).text()); 
			$("input[name='efctdt']").val($(nRowA[4]).text()); 
			$("input[name='inefdt']").val($(nRowA[5]).text()); 
			
			
			$("#editfmexModal").modal('show');
			$("#editfmexModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmexModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmexModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmexModal"))).text("");
				fmexgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_fmex_btn").bind("click", function() {
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editfmexModal")).val(prodcd);
//			新建时解锁
			$("input[name='chrgcd']").attr("readOnly",false); 
			$("input[name='scencd']").attr("readOnly",false); 
			$("input[name='crcycd']").attr("readOnly",false);
			$("input[name='chrgfm']").attr("readOnly",false);
//			新建时清空原数据
			$("input[name='chrgcd']").val(""); 
			$("input[name='scencd']").val(""); 
			$("input[name='crcycd']").val("").trigger("change");
			$("input[name='chrgfm']").val(""); 
			$("input[name='efctdt']").val(""); 
			$("input[name='inefdt']").val(""); 
			
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editfmexModal").modal('show');
			$("#editfmexModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmexModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmexModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmexModal"))).text("");
				fmexgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_fmex").click(function(){
			$('form', $("#editfmexModal")).submit();
		});
		
		var fmexValid = Sunline.getValidate($('form', $("#editfmexModal")),
				function() {
					var data = {};
					$.each($("input", $("#editfmexModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edfmex", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editfmexModal"))).show();
                        	   $('.alert-danger', $('form', $("#editfmexModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editfmexModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editfmexModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editfmexModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 defncd:{maxlength : 20}	
//				}
				);

		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();