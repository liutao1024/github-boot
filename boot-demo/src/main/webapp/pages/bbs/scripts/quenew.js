var quenew = function() {

	var  q_subjid;
	var handleTable = function(q_subjid) {
		var newgrid = new Datatable();
		var url = Sunline.ajaxPath("bbs/qrcont");
	
	
	     newgrid.setAjaxParam("getid",q_subjid);
		newgrid.init({
					src : $("#datatable_new"),
					//deleteData : sendData,
					onSuccess : function(newgrid) {
						// execute some code after table records loaded
					},
					onError : function(newgrid) {
						// execute some code on network or other general error
					},
					dataTable : { // here you can define a typical datatable
									// settings from
									// http://datatables.net/usage/options
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "subjid",
									"sortable" : false,
									"searchable" : false
								},
								
								{
									"data" : "contnt",
									"sortable" : false,
									"searchable" : false
								},
								
								{
									"data" : "subdl1",
									"sortable" : false,
									"searchable" : false,
								}
								 ]
					}
				});
		

	};

	return {
		init : function(q_subjid) {
			handleTable(q_subjid);
		}
	}
}();