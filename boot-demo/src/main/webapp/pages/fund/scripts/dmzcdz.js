var Dmzcdz = function(){
	var grid = new Datatable();
	var isF = true;
	
	
	var charfgDict = Sunline.getDict("E_CHARFG");
	var resultDict = Sunline.getDict("E_CHECKRESULT");
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
		var url = Sunline.ajaxPath("fund/dmzcdz");
		grid.setAjaxParam("acctno","");
		grid.setAjaxParam("prftdt","");
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
		            	"data": "fdacct",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "tranno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "fundcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "charfg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<charfgDict.length ; i++){
		            			if(data == charfgDict[i].dictId){
		            				return charfgDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
					
		            },{ 
		            	"data": "totabl",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "onlnbl",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "frozbl",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "profit",
		            	"sortable": false,
		            	"searchable": false		            	
		            },{ 
		            	"data": "prftdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "fdtobl",
		            	"sortable": false,
		            	"searchable": false		            	
		            },{ 
		            	"data": "fdonbl",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "fdfrbl",
		            	"sortable": false,
		            	"searchable": false		            	
		            },{ 
		            	"data": "result",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<resultDict.length ; i++){
		            			if(data == resultDict[i].dictId){
		            				return resultDict[i].dictName;
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
		if(!$('#cust-form').validate().form()){
			return;
		}
		if(Sunline.isNull($('#prftdt').val()))
			{
			bootbox.alert("日期不能为空");
			}
		grid.setAjaxParam("acctno",$('#acctno').val());
		grid.setAjaxParam("prftdt",$('#prftdt').val());
		grid.submitFilter();
	});
		
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()