var kcpchrgfmdf = function() {

	var inclfgDict = Sunline.getDict("E_YES___");//是否包含下限
	
	$("input[name='inclfg']").select2({data:inclfgDict,allowClear:true});

	var handleTable = function() {
		var fmdfgrid = new Datatable();
		var fmdfurl = Sunline.ajaxPath("kcp/qrfmdf");
		var fmdfsendData = [ "chrgfm"];

		fmdfgrid.init({
					src : $("#datatable_fmdf"),
					deleteData : fmdfsendData,
					onSuccess : function(fmdfgrid) {
					},
					onError : function(fmdfgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : fmdfurl,
						},
						"columns" : [
								{
									"data" : "chrgfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fmunam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "filebs",
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
									"data" : "inclfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < inclfgDict.length; i++) {
											if (inclfgDict[i].id == data) {
												return inclfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "bkfied",
									"sortable" : false,
									"searchable" : false
								},{ 
					            	"data": null,
					            	"width": "18%",
					            	"sortable": false,
					            	"searchable": false,
					            	"render": function (data, type, full) {
					            		return "<a class='edit_setting' href='javascript:;' data-src='" + data.chrgfm+ "'>配置明细 </a>";
					            	}
					            },
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgfm
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
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		fmdfgrid.bindTableDelete(fmdfsendData);
		fmdfgrid.addBindEvent(".edit_setting","click",['chrgfm'],function(data){
			console.info(data);
		kcpchrgfmdt.init(data.chrgfm);
			$("#bianji").modal("show");	
		});
		
		
		
		fmdfgrid.bindTableEdit(fmdfsendData,function(nRowA){
			$("input[name='chrgfm']").attr("readOnly",true);
			
			
			$("input[name='chrgfm']").val($(nRowA[0]).text()); 
			$("input[name='fmunam']").val($(nRowA[1]).text()); 
			$("input[name='filebs']").val($(nRowA[2]).text()); 
			$("input[name='efctdt']").val($(nRowA[3]).text()); 
			$("input[name='inefdt']").val($(nRowA[4]).text()); 
			$("input[name='inclfg']").val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			$("input[name='bkfied']").val($(nRowA[6]).text()); 
			
			
			$("#editfmdfModal").modal('show');
			$("#editfmdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmdfModal"))).text("");
				fmdfgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_fmdf_btn").bind("click", function() {
			$("input[name='chrgfm']").attr("readOnly",false);
			$("input", $("#editfmdfModal")).val("").trigger("change");
			$("#editfmdfModal").modal('show');
			$("#editfmdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editfmdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editfmdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editfmdfModal"))).text("");
				fmdfgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_fmdf").click(function(){
			$('form', $("#editfmdfModal")).submit();
		});
		
		var fmdfValid = Sunline.getValidate($('form', $("#editfmdfModal")),
				function() {
					var data = {};
					$.each($("input", $("#editfmdfModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edfmdf", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editfmdfModal"))).show();
                        	   $('.alert-danger', $('form', $("#editfmdfModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editfmdfModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editfmdfModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editfmdfModal"))).text(ret.msg);
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