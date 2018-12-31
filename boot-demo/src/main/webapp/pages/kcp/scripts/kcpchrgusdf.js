var kcpchrgusdf = function() {

	var valusrDict = Sunline.getDict("E_VALUSR");//字段值来源
	
	$("input[name='valusr']").select2({data:valusrDict,allowClear:true});

	var handleTable = function() {
		var usdfgrid = new Datatable();
		var usdfurl = Sunline.ajaxPath("kcp/qrusdf");
		var usdfsendData = ["chrgfm","sequno","fildna"];
	
		

		usdfgrid.init({
					src : $("#datatable_usdf"),
					deleteData : usdfsendData,
					onSuccess : function(usdfgrid) {
					},
					onError : function(usdfgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : usdfurl,
						},
						"columns" : [
								{
									"data" : "chrgfm",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "sequno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fildna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "valusr",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < valusrDict.length; i++) {
											if (valusrDict[i].id == data) {
												return valusrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "fildvl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "explan",
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
												+ data.sequno
												+","
												+ data.fildna
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
												+ data.sequno
												+","
												+ data.fildna
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		usdfgrid.bindTableDelete(usdfsendData);
		
		usdfgrid.bindTableEdit(usdfsendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
			$("input[name='chrgfm']").attr("readOnly",true); 
			$("input[name='sequno']").attr("readOnly",true); 
			$("input[name='fildna']").attr("readOnly",true);
			
			$("input[name='chrgfm']").val($(nRowA[0]).text()); 
			$("input[name='sequno']").val($(nRowA[1]).text()); 
			$("input[name='fildna']").val($(nRowA[2]).text()); 
			$("input[name='valusr']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='fildvl']").val($(nRowA[4]).text()); 
			$("input[name='explan']").val($(nRowA[5]).text()); 
			$("input[name='remark']").val($(nRowA[6]).text()); 
			
			$("#editusdfModal").modal('show');
			$("#editusdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editusdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editusdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editusdfModal"))).text("");
				usdfgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_usdf_btn").bind("click", function() {
			$("input[name='chrgfm']").attr("readOnly",false); 
			$("input[name='sequno']").attr("readOnly",false); 
			$("input[name='fildna']").attr("readOnly",false);
			$("input", $("#editusdfModal")).val("").trigger("change");
			$("#editusdfModal").modal('show');
			$("#editusdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editusdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editusdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editusdfModal"))).text("");
				usdfgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_usdf").click(function(){
			$('form', $("#editusdfModal")).submit();
		});
		
		var usdfValid = Sunline.getValidate($('form', $("#editusdfModal")),
				function() {
					var data = {};
					$.each($("input", $("#editusdfModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edusdf", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editusdfModal"))).show();
                        	   $('.alert-danger', $('form', $("#editusdfModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editusdfModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editusdfModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editusdfModal"))).text(ret.msg);
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