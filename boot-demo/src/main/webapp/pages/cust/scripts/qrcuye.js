var Qrcuye=function(){
	var grid = new Datatable();
	var lb_grid;
	var isF = true;
	
	var statusDict=[{"id":"0","text":"未处理"},{"id":"1","text":"成功"},{"id":"2","text":"失败"}];
	$("#chekst").select2({data:statusDict});
	
	var servnoDict=Sunline.getDict(null, "/qeplafinfo", "plafno", "servna");
	$("#plafno").select2({data:servnoDict});
	
	var formartM = function(value){
		
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var handleTable=function(){
		var url = Sunline.ajaxPath("cust/qrcuyeif");
		grid.setAjaxParam("plafno","");
		grid.setAjaxParam("custno","");
		grid.setAjaxParam("chekst","");
		
		
		grid.init({
	        src: $("#custye_ajax"),
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
		            	"data": "corpno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "plafno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "custno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "currbl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data);
		               }
		            },{ 
		            	"data": "remain",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "remark",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "chekst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<statusDict.length ; i++){
		            			if(data == statusDict[i].id){
		            				return statusDict[i].text;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "datetm",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "timetm",
		            	"sortable": false,
		            	"searchable": false
		            }
	            ]
	        }
	    });
		
		var sendData = ["plafno","custno","chekst"];
	    //查询
		$('#submit').click(function(){
			grid.setAjaxParam("plafno",$('#plafno').val());
			grid.setAjaxParam("custno",$('#custno').val());
			grid.setAjaxParam("chekst",$('#chekst').select2("val"));
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#plafno').select2("val","");
			$('#custno').val("");
			$('#chekst').select2("val","");
		});
	};

	return {
        //main function to initiate the module
        init: function () {
            handleTable();           
        }
    };	
}();