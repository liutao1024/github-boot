var fheckdm = function(){
	
	var grid = new Datatable();
	var trandt = $('#dealdt').val();
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
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
      	var url = Sunline.ajaxPath("fund/getDFBillData");
        grid.setAjaxParam("dealdt",$('#dealdt').val());
      	grid.init({
	        src: $("#fhbill_ajax"),
	        
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        	tarbal = grid.getDataTable().ajax.json().tarbal;
	        	if(tarbal === null || tarbal===undefined || tarbal ===""){
	        		$("#tarbal").text("0");
	        	}else{
	        		$("#tarbal").text(tarbal);
	        	}
	        	
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	//console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [
	         				{
	         					"data": "confdt",  //电子账号
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "custac",   //交易金额
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            
	         	            },{ 
	         	            	"data": "tranam",    //交易金额
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            
	         	            } 
	                     ]
	        }
	        
	    });
      //	var sendData = ["fundno","trandt"];
	    };
	
	return {
		init : function(){
			handleFileUpload();
		}
	}
	
}()