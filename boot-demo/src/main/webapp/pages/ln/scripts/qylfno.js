var qylfno = function(){
	var grid = new Datatable();
	
	$('#submit').click(function(){
		if(!$('#cust-form').validate().form()){
			return;
		}	
		grid.setAjaxParam("lncfno",$('#lncfno').val());
		grid.setAjaxParam("termno",$('#termno').val());
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#lncfno').val("");
		$('#termno').val("");
	});
	var handlerTable = function(){	
		var url = Sunline.ajaxPath("ln/qylfno");	
		grid.setAjaxParam("lncfno","001");
		grid.init({
	        src: $("#lncfno_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	//$('.table-container .alert-danger').css("display","none");
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{     
		            	"data": "lncfno",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "repyam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "totamo", 
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "termno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "schdst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
		            		var schdst;
		            		if(data == "0"){
		            			schdst = "正常";
	 	            		}else if(data == "1"){
	 	            			schdst = "逾期";
	 	            			
	 	            		}else if(data == "2"){
	 	            			schdst = "呆滞";
	 	            			
	 	            		}else if(data == "3"){
	 	            			schdst = "呆账";
	 	            			
	 	            		}else if(data == "4"){
	 	            			schdst = "核销";
	 	            			
	 	            		}else if(data == "5"){
	 	            			schdst = "结清";
	 	            			
	 	            		}else if(data == "6"){
	 	            			schdst = "不还";
	 	            			
	 	            		}
		            		
		            		return schdst;
						}
		            },{ 
		            	"data": "cpstfg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
		            		var cpstfg;
		            		if(data == "0"){
		            			cpstfg = "否";
	 	            		}else if(data == "1"){
	 	            			cpstfg = "是";
	 	            		}
		            		return cpstfg;
						}
		            	
		            },{ 
		            	"data": "cpstam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "recofg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
		            		var recofg;
		            		if(data == "0"){
		            			cpstfg = "否";
	 	            		}else if(data == "1"){
	 	            			cpstfg = "是";
	 	            		}
		            		return cpstfg;
						}
		            },{ 
		            	"data": "rezhto",
		            	"sortable": false,
		            	"searchable": false		            	
		            }
	            ]
	        }
	    });	
		var sendData = ["lncfno"];   
	};
	return {
		init : function(){
			handlerTable();
		}
	}
}()