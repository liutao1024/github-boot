var qudetail = function() {

	var  q_subjid;
	var handleTable = function(q_subjid) {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("bbs/qrdeta");
	
	
	     grid.setAjaxParam("getid",q_subjid);
		grid.init({
					src : $("#datatable_deal"),
					//deleteData : sendData,
					onSuccess : function(grid) {
						// execute some code after table records loaded
					},
					onError : function(grid) {
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
									"data" : "sortno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "subjdl",
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