var kcpscevdefn = function() {

	var moduleDict = Sunline.getDict("E_MODULE");//维度类型
	
	$("input[name='module']").select2({data:moduleDict,allowClear:true});

	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qrscde");
		var defnsendData = [ "module","evetcd"];

		defngrid.init({
					src : $("#datatable_defn"),
					deleteData : defnsendData,
					onSuccess : function(defngrid) {
					},
					onError : function(defngrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : defnurl,
						},
						"columns" : [
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
									"data" : "evetcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "evetna",
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
												+ data.module
												+","
												+ data.evetcd
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.module
												+","
												+ data.evetcd
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);
		
		defngrid.bindTableEdit(defnsendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
			//修改时锁定 模块和事件编号
			$("input[name='module']").attr("readOnly",true);
			$("input[name='evetcd']").attr("readOnly",true);
			
			$("input[name='module']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
			$("input[name='evetcd']").val($(nRowA[1]).text()); 
			$("input[name='evetna']").val($(nRowA[2]).text()); 
			$("input[name='remark']").val($(nRowA[3]).text()); 
			
			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdefnModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdefnModal"))).hide(); 
	        	$(".msg",$('form', $("#editdefnModal"))).text("");
				defngrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_defn_btn").bind("click", function() {
			//解锁新建时模块和事件编号
			$("input[name='module']").attr("readOnly",false);
			$("input[name='evetcd']").attr("readOnly",false);
			//清空原纪录
			
			$("input[name='module']").val("").trigger("change");
			$("input[name='evetcd']").val(""); 
			$("input[name='evetna']").val(""); 
			$("input[name='remark']").val(""); 
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editdefnModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdefnModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdefnModal"))).hide(); 
	        	$(".msg",$('form', $("#editdefnModal"))).text("");
				defngrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_defn").click(function(){
			$('form', $("#editdefnModal")).submit();
		});
		
		var defnValid = Sunline.getValidate($('form', $("#editdefnModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdefnModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edscde", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editdefnModal"))).show();
                        	   $('.alert-danger', $('form', $("#editdefnModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editdefnModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editdefnModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editdefnModal"))).text(ret.msg);
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