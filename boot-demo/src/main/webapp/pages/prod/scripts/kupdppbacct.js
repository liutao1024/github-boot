var kupdppbacct = function() {

	
	$("#editacctModal input[name='depttm']").select2({
		data : kupdppbdict.depttmDict,
		allowClear : true
	});
	var handleTable = function(prodcd) {
		var acctgrid = new Datatable();
		var accturl = Sunline.ajaxPath("prod/datsel");
		var acctsendData = [ "prodcd", "depttm" ];
		if (!Sunline.isNull(prodcd)) {
			acctgrid.setAjaxParam("q_prodcd", prodcd);
		}
		acctgrid.init({
					src : $("#datatable_acct"),
					deleteData : acctsendData,
					onSuccess : function(acctgrid) {
					},
					onError : function(acctgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : accturl,
						},
						"columns" : [
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "depttm",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.depttmDict.length; i++) {
											if (kupdppbdict.depttmDict[i].id == data) {
												return kupdppbdict.depttmDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "acctcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.depttm
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		acctgrid.bindTableDelete(acctsendData);
		// 新增窗口
		$("#add_acct_btn").bind("click", function() {
			$("input[name='prodcd']", $("#editacctModal")).val(prodcd);
			$("#editacctModal").modal('show');
			$("#editacctModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editacctModal"))).hide();
	        	$('.alert-danger', $('form', $("#editacctModal"))).hide(); 
	        	$(".msg",$('form', $("#editacctModal"))).text("");
				acctgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_acct").click(function(){
			$('form', $("#editacctModal")).submit();
		});
		
		var acctValid = Sunline.getValidate($('form', $("#editacctModal")),
				function() {
					var data = {};
					$.each($("input", $("#editacctModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					var datas=[];
					datas.push(data);					
					var dpaccts = {"dpacct":datas};
					Sunline.ajaxRouter("prod/datins", 
						dpaccts
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editacctModal"))).show();
                        	   $('.alert-danger', $('form', $("#editacctModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editacctModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editacctModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editacctModal"))).text(ret.msg);
					});

				}, {
					 depttm:{required : true},
					 acctcd:{maxlength : 20}	
				});

		
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();