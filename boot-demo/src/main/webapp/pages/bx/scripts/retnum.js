var Retnum = function(){
	var grid = new Datatable();
	var isF = false;
	
	
	var yesnfgDict = Sunline.getDict("E_YES___");
	var prodcdDict=[{"id":"020010020","text":"现金贷(大众版)"}
	               ,{"id":"020010018","text":"现金贷(员工版)"}]
	$("#prodcd").select2({data:prodcdDict,allowClear:false});
	/*$("#prodcd").select2({
		width : "100%",
		data : prodcdDict,
		formatSelection : function(item) {
			return item.dictName;
		},
		formatResult : function(item) {
			return item.dictName;
		}
	});*/
	$('#prodcd').select2("val","020010020");
	
	var transtDict=[{"id":"0","text":"正常[0]"}
	,{"id":"1","text":"逾期[1]"}
	,{"id":"2","text":"呆滞[2]"}
	,{"id":"3","text":"呆账[3]"}
	,{"id":"4","text":"核销[4]"}
	,{"id":"5","text":"结清[5]"}
	,{"id":"6","text":"不还[6]"}]
	var e_prodtp= function(value){
		for (var i = 0; i < prodtpDict.length; i++) {
            if (value == prodtpDict[i].id) {
              return prodtpDict[i].dictName;
            }
		}
	}
	var formartDict = function(dict,value){
		for(var i=0 ; i<dict.length ; i++){
			if(value == dict[i].id){
				return dict[i].text;
			}
			if(value == dict[i].text){
				return dict[i].id;
			}
		}
		return value;
	};
	
	var handlerTable = function(){		
		
		var url = Sunline.ajaxPath("bx/retnum");
		//grid.setAjaxParam("acctno","");
		//grid.setAjaxParam("prftdt","");
		
		grid.init({
			
	        src: $("#retn_ajax"),
	       
	        onSuccess: function (grid) {	          
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {	            
	        	console.info("It is error!");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [{     
		            	"data": "custna",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "idtfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "teleno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "cardno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lncfno",
		            	"sortable": false,
		            	"searchable": false
		            					
		            },{ 
		            	"data": "endxdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repyam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "termfm",
		            	"sortable": false,
		            	"searchable": false
		            },
		            { 
		            	"data": "termno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "schdst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		
		            				return formartDict(transtDict,data);
		            
		            	}
		            },{ 
		            	"data": "writel",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<yesnfgDict.length ; i++){
		            			if(data == yesnfgDict[i].dictId){
		            				return yesnfgDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            }
		       
	            ]
	        }
	    });	
		
           
	};
	
	$('#submit').click(function(){
		if (!$('#cust-form').validate().form()) {
			return;
		}
		grid.setAjaxParam("selfag","Y");
		grid.setAjaxParam("custna",$('#custna').val());
		grid.setAjaxParam("teleno",$('#teleno').val());
		grid.setAjaxParam("idtfno",$('#idtfno').val());
		grid.setAjaxParam("cardno",$('#cardno').val());
		//grid.setAjaxParam("prodcd",$('#prodcd').val());		
		grid.setAjaxParam("prodcd",$('#prodcd').select2("val"));
		grid.setAjaxParam("endxdt",$('#endxdt').val());
		grid.submitFilter();
	});
		
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()