var Store=function(){
	
	var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/prod/store");
		var sendData = ["prod_cd","ver"];
        grid.init({
            src: "#datatable_ajax",
            deleteData: sendData,
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
                "ajax": {
                    "url": url // ajax source
                },
                "columns" : [{ 
                		"data": "prod_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "ver",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "abstract_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "class_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prod_name",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "merchant_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit_setting' href='javascript:;' data-src='" + data.prod_cd+","+ data.ver + "'>配置产品 </a>";
		            	}
		            },{
		            	"data": null,
		            	"width": "15%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.prod_cd+","+ data.ver + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.prod_cd+","+ data.ver + "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
        
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,function(nRowA){
         	$('#edit_prod_cd').val($(nRowA[0]).text());
           	$('#edit_last_ver').val($(nRowA[1]).text());
           	$('#edit_abstract_cd').val($(nRowA[2]).text());
           	$('#edit_class_cd').val($(nRowA[3]).text());
           	$('#edit_prod_name').val($(nRowA[4]).text());
           	$('#edit_merchant_cd').val($(nRowA[5]).text());           	
        	$("#edit_prod").modal("show");    
		});
		
	};
	
	 return {
	        init: function () {
	            handleTable();        
	        }

	    };
	
	
	
	
	
	
}();