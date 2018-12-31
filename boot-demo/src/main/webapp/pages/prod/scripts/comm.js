var Comm=function(){
	var handleTable=function(){
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/prod/comm");
		//编辑表单赋值方法--根据不同页面表格修改
		var editForm = function(nRowA){
           	         	
        	$("#edit_prod").modal("show");
		}
		
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
                    "url": url, // ajax source
                },
                "columns" : [{ 
                		"data": "comm_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "comm_name",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prod_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ver",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "class_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "status",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "up_property_flag",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "pre_up_dt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "real_up_dt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "up_user",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "real_down_dt",
		            	"sortable": false,
		            	"searchable": false
		            },{
		            	"data": null,
		            	"width": "12%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.comm_cd + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.comm_cd + "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
       
        var sendData = ["comm_cd"];	
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
	}
	  return {

	        //main function to initiate the module
	        init: function () {
	            handleTable();        
	        }

	    };
	
}();