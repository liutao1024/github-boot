var RateDefi=function(){
	 var handleTable=function(rliOption){
		 	
			var url=Sunline.ajaxPath("cc/ratedefi");				
			rliOption.rligrid.init({
						src : $("#bilv_ajax"),
						deleteData : rliOption.sendData,
						onSuccess : function(grid) {
							
						},
						onError : function(grid) {
							
						},
						dataTable : { 
							"ajax" : {
								"url" : url, // ajax source
							},
				            "bDestroy" :true,
				            "bServerSide":true,
							"columns" : [
									{
										"data" : "rateid",
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "ratexx",
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "maxamt",
										"sortable" : false,
										"searchable" : false,
									},
									{
										"data" : "addamt",
										"sortable" : false,
										"searchable" : false,
									},
									{
										"data" : null,
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											return "<a class='edit' href='javascript:;' data-src='"
													+ data.rateid + "'>编辑 </a>";
										}
									},
									{
										"data" : null,
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											return "<a class='delete' href='javascript:;' data-src='"
													+ data.rateid+ "'>删除 </a>";
										}
									} ]
						}
					});
			
			rliOption.rligrid.bindTableDelete(rliOption.sendData);
			rliOption.rligrid.bindTableEdit(rliOption.sendData,rliOption.torliEditForm);
	 }
		 	 
	return {
		init:function(rliOption){
			handleTable(rliOption);		
		},
		destory:function(){
			delTable();
		}
	}
}();