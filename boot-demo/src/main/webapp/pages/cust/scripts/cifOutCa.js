var Cabind = function() {
	var grid = new Datatable();
	var cardtpDict=Sunline.getDict("E_CARDTP");
	var mdcardDict=Sunline.getDict("E_MDCARD");

	var q_custac;
	var q_status;
	var handleTable = function(q_custac) {

		var url = Sunline.ajaxPath("cust/qrcaou");
		if(!Sunline.isNull(q_custac)){
        	grid.setAjaxParam("q_custac",q_custac);
        }
		grid.setAjaxParam("q_status","1");
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess: function (grid) {
			        	$('.table-container .alert-danger').css("display","none");
			        },
			        onError: function (grid) {	      
			        	console.info("It is error!");
			        },
					dataTable : { 
						"ajax" : {
							"url" : url, 
						},
						"columns" : [
								{
									"data" : "cardno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "acctna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "brchna",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "binddt",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "cardtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data,type,full){
										for(var i=0 ; i<cardtpDict.length ; i++){
					            			if(data == cardtpDict[i].dictId){
					            				return cardtpDict[i].dictName;
					            			}
					            		}
					            		return data;
					            	}
								},{ 
					            	"data": "mdcard",
					            	"sortable": false,
					            	"searchable": false,
									"render" : function(data,type,full){
										for(var i=0 ; i<mdcardDict.length ; i++){
					            			if(data == mdcardDict[i].dictId){
					            				return mdcardDict[i].dictName;
					            			}
					            		}
					            		return data;
					            	}
					            }]
					}
				});
		var sendData = [ "cardno"];
		
	};
		
	return {
		init : function(q_custac) {
			handleTable(q_custac);
		}
	}
}();