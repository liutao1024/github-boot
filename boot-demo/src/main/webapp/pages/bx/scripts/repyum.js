var Repyum = function(){
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
	
	var loanDict = [{dictId:'1',dictName:'已结清'},{dictId:'0',dictName:'未结清'}];
	var e_prodtp= function(value){
		for (var i = 0; i < prodtpDict.length; i++) {
            if (value == prodtpDict[i].id) {
              return prodtpDict[i].dictName;
            }
		}
	}
	var formartDict = function(dict,value){
		for(var i=0 ; i<dict.length ; i++){
			if(value == dict[i].dictId){
				return dict[i].dictName;
			}
			if(value == dict[i].dictName){
				return dict[i].dictId;
			}
		}
		return value;
	};
	
	var handlerTable = function(){		
		var editForm = function(nRowA){		
		};
		var url = Sunline.ajaxPath("bx/repyum");
		grid.setAjaxParam("selfag","N");
		//grid.setAjaxParam("prftdt","");
		grid.init({
	        src: $("#cif_ajax"),
	       
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
		            	"data": "custna",//custna
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
		            	"data": "initdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lendam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "termfm",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "loamst",
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
		            
		            ,{ 
		            	"data": "crdlam",
		            	"sortable": false,
		            	"searchable": false,
		            	
		            }
		            ,{ 
		            	"data": "acctbl",
		            	"sortable": false,
		            	"searchable": false		            	
		            }
		            ,{ 
		            	"data": "acctst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<loanDict.length ; i++){
		            			if(data == loanDict[i].dictId){
		            				return loanDict[i].dictName;
		            			}
		            		}
		            		return data;
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
		/*var sendData = [""];
		var editForm = function(){};
        grid.bindTableEdit(sendData,editForm);*/ 
	};
	
	$('#submit').click(function(){
		if (!$('#cust-form').validate().form()) {
			return;
		}
		grid.setAjaxParam("selfag","Y");
		console.info($('#prodcd').val());
		grid.setAjaxParam("prodcd",$('#prodcd').val());
		grid.setAjaxParam("custna",$('#custna').val());
		grid.setAjaxParam("idtfno",$('#idtfno').val());
		grid.setAjaxParam("teleno",$('#teleno').val());
		grid.setAjaxParam("cardno",$('#cardno').val());
		grid.setAjaxParam("initdt",$('#initdt').val());
		grid.submitFilter();
	});
		
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()