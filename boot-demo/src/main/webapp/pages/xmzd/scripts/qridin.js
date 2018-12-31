var Qridin = function() {
	var grid = new Datatable();

	$('#submit').click(function() {
		if (!$('#cust-form').validate().form()) {
			return;
		}
		grid.setAjaxParam("idtfno", $('#idtfno').val());
		grid.submitFilter();
	});
	// 取消
	$('#cancle').click(function() {
		$('#idtfno').val("");
	});
	var handlerTable = function() {
		var url = Sunline.ajaxPath("fc/qridin");
		grid.setAjaxParam("idtfno", "421024199212101210");
		grid.init({
			src : $("#cif_ajax"),
			deleteData : sendData,
			onSuccess : function(grid) {
				// execute some code after table records loaded
				$('.table-container .alert-danger').css("display", "none");
			},
			onError : function(grid) {
				// execute some code on network or other general error
				// $('.table-container .alert-danger').css("display","none");
				console.info("It is error!");
			},
			dataTable : { // here you can define a typical datatable settings
							// from http://datatables.net/usage/options
				"ajax" : {
					"url" : url, // ajax source
				},
				"columns" : [ {
					"data" : "custno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "acctna",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "lncfno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "prodna",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "initdt",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "matudt",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "lncfam",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "lnnpbl",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "ysyjni",
					"sortable" : false,
					"searchable" : false
				} ]
			}
		});
		var sendData = [ "lncfno" ];

	};
	return {
		init : function() {
			handlerTable();
		}
	}
}()