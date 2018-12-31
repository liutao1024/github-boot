var Xlzjqr=function(){
	var grid = new Datatable();
	
	var partnerDict=Sunline.getDict("partner");
	$("#partner_id").select2({
		data : partnerDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	//格式化显示金额保留的位数
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	var handleForm =function(){
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN',
	        });
        };
	}
	
	
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("cust/qrzjxl");
		
		grid.setAjaxParam("identity_id",$('#identity_id').val());
		grid.setAjaxParam("partner_id",$('#partner_id').select2("val"));
		grid.setAjaxParam("identity_type","UID");
		grid.setAjaxParam("account_type","BANK");
		grid.setAjaxParam("target","1");
		grid.init({
	        src: $("#xlzj_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	        	console.info("It is error!");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [
	                { 
		            	"data": "balance",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "available_balance",
		            	"sortable": false,
		            	"searchable": false
		            }
	            ]
	        }
	    });
		
		var sendData = ["bonus"];
        
	}
	
	$("#submit").click(function(){	
		grid.setAjaxParam("identity_id",$('#identity_id').val());
		grid.setAjaxParam("partner_id",$('#partner_id').select2("val"));
		grid.setAjaxParam("identity_type","UID");
		grid.setAjaxParam("account_type","BANK");
		grid.setAjaxParam("target","1");
		grid.submitFilter();
	});
	
	//取消
	$('#cancle').click(function(){
		$('#identity_id').val("");
		$('#partner_id').select2("val","");
		
	});
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
}();