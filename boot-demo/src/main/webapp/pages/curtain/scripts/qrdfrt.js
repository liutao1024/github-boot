var Qrdfrt = function(){
	var grid = new Datatable();
	var reflagDict=[{"id":"0","text":"否"},{"id":"1","text":"是"}];
	var fromtpDict=[{"id":"4","text":"二代大额支付"},{"id":"5","text":"二代小额支付"},{"id":"6","text":"二代超级网银"}];
	$("#fromtp").select2({data:fromtpDict});
	
		//查询主页面
		var handlerTable = function(){
		var url = Sunline.ajaxPath("curtain/qrdiffrt");
		$('#fromtp').select2("val","5");
		grid.setAjaxParam("chckdt",$('#chckdt').val());
		grid.setAjaxParam("fromtp",$('#fromtp').select2("val"));
				
		grid.init({
	        src: $("#cif_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{ 
		            	"data": "chckdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ //出入金方式
		            	"data": "fromtp",
		            	"sortable": false,
		            	"searchable": false,
						"render" : function(data,type,full){
							for(var i=0 ; i<fromtpDict.length ; i++){
		            			if(data == fromtpDict[i].id){
		            				return fromtpDict[i].text;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "filena",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "erflag",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<reflagDict.length ; i++){
								if(data == reflagDict[i].id){
									return reflagDict[i].text;
								}
		            		}
		            		return data;
		            	}
		            }
	            ]
	        }
	    });
		
		var sendData = ["chckdt","fromtp","filena","erflag"];
	    //查询
		$('#submit').click(function(){
			grid.setAjaxParam("chckdt",$('#chckdt').val());
			grid.setAjaxParam("fromtp",$('#fromtp').select2("val"));
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#chckdt').val("");
			$('#fromtp').select2("val","");
		});
	};
	
	return {
		init : function(){
			handlerTable();
		}
	};
}();