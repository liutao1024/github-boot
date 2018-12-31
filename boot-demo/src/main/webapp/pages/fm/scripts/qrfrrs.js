var Qrfrrs = function(){
	var grid = new Datatable();
	//var trandt = $('#dealdt').val();
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	$('#dealdt').val(FormatDate());
	//读取数据字典
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
            if (dict[i].dictId == value) {
            	return dict[i].dictName;
            }
          }
	    return value;
	};
	
	var handleFileUpload = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });  
        };
        //查询
      	$('#submit').click(function(){
      		if(Sunline.isNull($('#dealdt').val())){
				bootbox.alert("请选择查询日期！"); 
				return;
			}
      		grid.setAjaxParam("dealdt",$('#dealdt').val());
			grid.submitFilter();
      		
        }); 
      	
        var url = Sunline.ajaxPath("fm/getp2pinfo");
        grid.setAjaxParam("dealdt",$('#dealdt').val());
      	grid.init({
	        src: $("#p2pbill_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [
	         				{
	         					"data": "trandt",
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "transq",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	
	         	            },{ 
	         	            	"data": "payacc",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            },{ 
	         	            	"data": "paynam",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            
	         	            },{ 
	         	            	"data": "recacc",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "recnam",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "trantp",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	} 
	         	           ,{ 
	         	            	"data": "tranam",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	}
	         	          ,{ 
	         	            	"data": "remark",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	}
	         	         ,{ 
	         	            	"data": "dealst",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	}
	         	         ,{ 
         	            	"data": "errmsg",
         	            	"sortable": false,
         	            	"searchable": false
         	            	}
	                     ]
	        }
	        
	    });
      	var sendData = ["fundno","trandt"];
	    };
	
	return {
		init : function(){
			handleFileUpload();
		}
	}
	
}()