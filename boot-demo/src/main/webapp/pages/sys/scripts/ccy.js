var Ccy=function(){
	
	var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/sys/ccy");
		//编辑表单赋值方法--根据不同页面表格修改
		var editForm = function(nRowA){
		
			$('#ccy_cd').val($(nRowA[0]).text());
           	$('#ccy_name').val($(nRowA[1]).text());
           	$('#exchange_rate').val($(nRowA[2]).text());
           	$("#ver").val(parseInt($(nRowA[3]).text())+1);
           	$("#editModal").modal("show");
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
                		"data": "ccy_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "ccy_name",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "exchange_rate",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ver",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "16%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" +data.ccy_cd + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.ccy_cd + "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
        
        var sendData = ["ccy_cd"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        $("#add").click(function(){
         	$("#add_ver").val(1);
        	$("#myModal").modal("show");
        });
        //var url_1 = Sunline.ajaxPath("/services/rest/prod/periodForAutocomplete");
        var data = [];//自动完成字段数组
        $("#tt").autocomplete(data,{
    		width: 160,
    		selectFirst: false,
    		autoFill:true});
    };
	
	
	 return {

      
        init: function () {
            handleTable();
           
        }

    };
	
	
	
	
}();