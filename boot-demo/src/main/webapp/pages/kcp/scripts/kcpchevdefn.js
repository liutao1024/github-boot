var kcpchevdefn = function() {

	var moduleDict = Sunline.getDict("E_MODULE");//模块
	
	$("input[name='module']").select2({data:moduleDict,allowClear:true});

	var handleTable = function() {
		var defngrid = new Datatable();
		var defnurl = Sunline.ajaxPath("kcp/qrdefn");
		var defnsendData = [ "chevno"];

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
									"data" : "chevno",
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
									"data" : "expmsg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "bkfied",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chevno
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.chevno
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		defngrid.bindTableDelete(defnsendData);
		
		defngrid.bindTableEdit(defnsendData,function(nRowA){
			$("input[name='chevno']").attr("readOnly",true);//收费事件编号
			
			$("input[name='chevno']").val($(nRowA[0]).text()); 
			$("input[name='module']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$("input[name='expmsg']").val($(nRowA[2]).text()); 
			$("input[name='bkfied']").val($(nRowA[3]).text()); 
			$("input[name='isinst']").val("0");

			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdefnModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdefnModal"))).hide(); 
	        	$(".msg",$('form', $("#editdefnModal"))).text("");
				defngrid.submitFilter();
			});
		})
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_defn_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editdefnModal").modal('show');
			$("#editdefnModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
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
					
					Sunline.ajaxRouter("kcp/eddefn", 
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