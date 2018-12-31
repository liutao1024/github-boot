var kcpchrgscdf = function() {

	var moduleDict = Sunline.getDict("E_MODULE");//模块
	
	$("input[name='module']").select2({data:moduleDict,allowClear:true});

	var handleTable = function() {
		var scdfgrid = new Datatable();
		var scdfurl = Sunline.ajaxPath("kcp/qrscdf");
		var scdfsendData = [ "scencd"];

		scdfgrid.init({
					src : $("#datatable_scdf"),
					deleteData : scdfsendData,
					onSuccess : function(scdfgrid) {
					},
					onError : function(scdfgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : scdfurl,
						},
						"columns" : [
								{
									"data" : "scencd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "module",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < moduleDict.length; i++) {
											if (moduleDict[i].id == data) {
												return moduleDict[i].text;
											}
										}
										return data;
									}
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
												+ data.scencd
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.scencd
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		scdfgrid.bindTableDelete(scdfsendData);
		
		scdfgrid.bindTableEdit(scdfsendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
			//修改时锁定场景代码
			$("input[name='scencd']").attr("readOnly",true);
			
			$("input[name='scencd']").val($(nRowA[0]).text()); 
			$("input[name='chrgcd']").val($(nRowA[1]).text()); 
			$("input[name='module']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='remark']").val($(nRowA[3]).text()); 
			
			$("#editscdfModal").modal('show');
			$("#editscdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editscdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editscdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editscdfModal"))).text("");
				scdfgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_scdf_btn").bind("click", function() {
//			新增时解锁场景代码
			$("input[name='scencd']").attr("readOnly",false);
			//清空原纪录
			$("input[name='scencd']").val(""); 
			$("input[name='chrgcd']").val(""); 
			$("input[name='module']").val("").trigger("change");
			$("input[name='remark']").val(""); 
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editscdfModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editscdfModal").modal('show');
			$("#editscdfModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editscdfModal"))).hide();
	        	$('.alert-danger', $('form', $("#editscdfModal"))).hide(); 
	        	$(".msg",$('form', $("#editscdfModal"))).text("");
				scdfgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_scdf").click(function(){
			$('form', $("#editscdfModal")).submit();
		});
		
		var scdfValid = Sunline.getValidate($('form', $("#editscdfModal")),
				function() {
					var data = {};
					$.each($("input", $("#editscdfModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edscdf", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editscdfModal"))).show();
                        	   $('.alert-danger', $('form', $("#editscdfModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editscdfModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editscdfModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editscdfModal"))).text(ret.msg);
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