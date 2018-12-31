var checkMi = function(){
	var insubstDict=Sunline.getDict("bill");
	var chkStatusDict = Sunline.getDict("state");
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
      	
        var url = Sunline.ajaxPath("fund/getMiBillData");
        grid.setAjaxParam("dealdt",$('#dealdt').val());
      	grid.init({
	        src: $("#mibill_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        	apply = grid.getDataTable().ajax.json().apply;
	        	if(apply === null || apply===undefined || apply ===""){
	        		$("#apply").text("0");
	        	}else{
	        		$("#apply").text(apply);
	        	}
	        	redeem = grid.getDataTable().ajax.json().redeem;
	        	if(redeem == null || redeem===undefined || redeem ===""){
	        		$("#redeem").text("0");
	        	}else{
	        		$("#redeem").text(redeem);
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
	         					"data": "transq",
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "backtp",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		if(data == null || data===undefined || data ===""){
	         	            			return "申购";
	         	            		}else{
	         	            			return "赎回";
	         	            		}
	         	            	}
	         	            },{ 
	         	            	"data": "custac",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            },{ 
	         	            	"data": "fundst",
	         	            	"sortable": false,
	         	            	"width": "200",
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		if(data=="0"||data=="1"){
	         	            			return _formartDict(chkStatusDict,data);
	         	            		}else{
	         	            			data="失败";
	         	            			return data;
	         	            		}
	         	            	}
	         	            },{ 
	         	            	"data": "tranam",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "trantm",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "trandt",
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