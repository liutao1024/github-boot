var privilege=function(){
	
	  var handleTable=function(){
		  var grid = new Datatable();
		  var url = "auth/privilege";
		  var editForm = function(nRowA){
			  $('#edit_privilege_id').val($(nRowA[0]).text());
			  $('#edit_privilege_name').val($(nRowA[1]).text());
			  $('#edit_app_id').val($(nRowA[2]).text());
			  $('#edit_privilege_remark').val($(nRowA[3]).text());
			  $("#myModal").modal("show");
		  };
		  
		  grid.init({
		        src: $("#privilege_ajax"),
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
			            		"data": "privilege_id",
			            		"sortable": false,
			            		"searchable": false
			            	},{ 
			            		"data": "privilege_name",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "app_id",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "privilege_remark",
				            	"sortable": false,
				            	"searchable": false
				            },{ "data": null,
				            	"width": "18%",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='edit' href='javascript:;' data-src='" + data.user_id + "'>编辑 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" + data.user_id + "'>删除 </a>";
				            	}
				            }
			            ]
			        }
			    });
				 var sendData = ["privilege_id"];
				 grid.bindTableDelete(sendData);
			     grid.bindTableEdit(sendData,editForm);
		  
	  };
	
	
	  return {

	        //main function to initiate the module
	        init: function () {
	            handleTable();
	        }

	    };
	
}();