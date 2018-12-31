var CcaAcct=function(){
	var accttpDict = Sunline.getDict("accttp");//判断
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/ccaaccts");
		var sendData = ["elacct","prodcd","acctopt"];
		var editUrl;
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						
					},
					onError : function(grid) {
						
					},
					dataTable : { 
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "acctno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "accttp",
									"sortable" : false,
									"searchable" : false,
									"render":function(data,type,full){
					        			for(var i=0; i<accttpDict.length; i++){
					        				if(accttpDict[i].id == data){
					        					return accttpDict[i].dictName;
					        				}
					        			}
					        			return data;
					        		}
								},
								{
									"data" : "elacct",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "lockcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_cz' href='javascript:;' data-src='"
										+ data.elacct+","+data.prodcd+","+0+"'>冻结账户</a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_cz' href='javascript:;' data-src='"
										+ data.elacct+","+data.prodcd+","+1+ "'>解冻账户</a>";
									}
								} ]
					}
				});	
		
		 grid.addBindEvent(".edit_cz","click",["elacct","prodcd","acctopt"], function(data){
			 var date={
					 elacct:data.elacct,
					 prodcd:data.prodcd,
					 acctopt:data.acctopt
			 }
			 Sunline.ajaxRouter("cc/edccfroz",  eval(date), "post",
						function(ret) {
				 		$("#edittypeModal").modal('show');
							if (ret.ret == "success") {
								$(".alert-success",
										$("form", $("#edittypeModal")))
										.show();
								$(".alert-danger",
										$("form", $("#edittypeModal")))
										.hide();
							} else {
								$(".alert-success",
										$("form", $("#edittypeModal")))
										.hide();
								$(".alert-danger",
										$("form", $("#edittypeModal")))
										.show();
							}
							$(".msg", $("form", $("#edittypeModal"))).text(
									ret.msg);
						});		
			/* $("#edittypeModal").on(
						"hide.bs.modal",
						function() {
							$(".alert-success",
									$("form", $("#edittypeModal"))).hide();
							$(".alert-danger",
									$("form", $("#edittypeModal"))).hide();
							$(".msg", $("form", $("#edittypeModal"))).text(
									"");
							grid.submitFilter();
						});*/
		
	      });
		
		
		var editForm = function(nRowA){
			var data = {
					elacct : $(nRowA[2]).text(),
					prodcd : $(nRowA[3]).text(),
				    acctopt : 0
				};
			Sunline.ajaxRouter("cc/edccfroz",  eval(data), "post",
					function(ret) {
						if (ret.retCode == "success") {
							$(".alert-success",
									$("form", $("#edittypeModal")))
									.show();
							$(".alert-danger",
									$("form", $("#edittypeModal")))
									.hide();
						} else {
							$(".alert-success",
									$("form", $("#edittypeModal")))
									.hide();
							$(".alert-danger",
									$("form", $("#edittypeModal")))
									.show();
						}
						$(".msg", $("form", $("#edittypeModal"))).text(
								ret.msg);
					});				
			}
				

	}

	return {
		init : function() {
			handleTable();
		}
	}
}();