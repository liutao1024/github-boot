var Dict=function(){
	var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/sys/dict");
		//编辑表单赋值方法--根据不同页面表格修改
		var editForm = function(nRowA){
			$('#dict_type').val($(nRowA[0]).text());
           	$('#dict_prop').val($(nRowA[1]).text());
           	$('#dict_val').val($(nRowA[2]).text());
           	$("#parent_dict_type").val($(nRowA[3]).text());
        	$("#parent_dict_prop").val($(nRowA[4]).text());
        	$("#status").val($(nRowA[5]).text());
        	$("#sortno").val($(nRowA[6]).text());
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
                		"data": "dict_type",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "dict_prop",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "dict_val",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "parent_dict_type",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "parent_dict_prop",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "status",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "sortno",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "16%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" +data.dict_type+","+ data.dict_prop + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.dict_type+","+data.dict_prop + "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
        
        var sendData = ["dict_type","dict_prop"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        $("#add").click(function(){
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