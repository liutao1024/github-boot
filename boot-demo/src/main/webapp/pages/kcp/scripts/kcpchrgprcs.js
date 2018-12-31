var kcpchrgprcs = function() {

	var rgcdDict = Sunline.getDict("type", "/rgcd", "chrgcd","chrgna");//收费代码
	
	$("input[name='chrgcd']").select2({data:rgcdDict,allowClear:true});

	var handleTable = function() {
		var prcsgrid = new Datatable();
		var prcsurl = Sunline.ajaxPath("kcp/qrprcs");
		var prcssendData = [ "ouprcs","chrgcd"];

		prcsgrid.init({
					src : $("#datatable_prcs"),
					deleteData : prcssendData,
					onSuccess : function(prcsgrid) {
					},
					onError : function(prcsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : prcsurl,
						},
						"columns" : [
								{
									"data" : "ouprcs",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < rgcdDict.length; i++) {
											if (rgcdDict[i].id == data) {
												return rgcdDict[i].text;
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
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.ouprcs
												+","
												+data.chrgcd
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.ouprcs
												+","
												+data.chrgcd
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		prcsgrid.bindTableDelete(prcssendData);
		
		prcsgrid.bindTableEdit(prcssendData,function(nRowA){
			$("input[name='ouprcs']").attr("readOnly",true);//外部处理码
			$("input[name='chrgcd']").attr("readOnly",true);//收费代码
			
			$("input[name='ouprcs']").val($(nRowA[0]).text()); 
			$("input[name='chrgcd']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			$("input[name='scencd']").val($(nRowA[2]).text()); 
			$("input[name='isinst']").val("0");
			
			
			$("#editprcsModal").modal('show');
			$("#editprcsModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editprcsModal"))).hide();
	        	$('.alert-danger', $('form', $("#editprcsModal"))).hide(); 
	        	$(".msg",$('form', $("#editprcsModal"))).text("");
				prcsgrid.submitFilter();
			});
		})
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_prcs_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editprcsModal").modal('show');
			$("#editprcsModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				prcsgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_prcs").click(function(){
			$('form', $("#editprcsModal")).submit();
		});
		
		var prcsValid = Sunline.getValidate($('form', $("#editprcsModal")),
				function() {
					var data = {};
					$.each($("input", $("#editprcsModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edprcs", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editprcsModal"))).show();
                        	   $('.alert-danger', $('form', $("#editprcsModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editprcsModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editprcsModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editprcsModal"))).text(ret.msg);
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