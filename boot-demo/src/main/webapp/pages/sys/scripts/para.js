var Para=function(){
	var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/sys/para");
		//编辑表单赋值方法--根据不同页面表格修改
		var editForm = function(nRowA){
			
			$('#register_cd').val($(nRowA[0]).text());
			$('#sys_dt').val($(nRowA[1]).text());
           	$('#last_sys_dt').val($(nRowA[2]).text());
           	$("#password_error").val($(nRowA[3]).text());
        	$("#freezen_password").val($(nRowA[4]).text());
        	$("#year_days").val($(nRowA[5]).text());
        	$("#month_days").val($(nRowA[6]).text());
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
                		"data": "register_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "sys_dt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "last_sys_dt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "password_error",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "freezen_password",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "year_days",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "month_days",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "14%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" +data.register_cd + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.register_cd+ "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
        
        var sendData = ["register_cd"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        $("#add").click(function(){
        	$('#add_register_cd').val("2001");//需要获取机构编号
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