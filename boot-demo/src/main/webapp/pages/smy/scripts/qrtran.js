var Qrtran = function(){
	var acctstDict=Sunline.getDict("acctst");
	var eccttpDict=Sunline.getDict("eccttp");
	var amntcdDict=Sunline.getDict("amntcd");
	var flowtpDict=Sunline.getDict("flowtp");
	var transtDict=Sunline.getDict("transt");
	var prodtpDict=Sunline.getDict("E_PRODTP");		//产品类型
	var grid = new Datatable();
	var tran_grid = new Datatable();
	var re_grid;
	var isF = true;
	var o_ecctno;
	var o_addr;
	var o_email;
	var o_acctst;
	var isNotF = true;
	var e_prodtp= function(value){
		for (var i = 0; i < prodtpDict.length; i++) {
            if (value == prodtpDict[i].id) {
              return prodtpDict[i].dictName;
            }
		}
	}
	var formartDict = function(dict,value){
		for(var i=0 ; i<dict.length ; i++){
			if(value == dict[i].dictId){
				return dict[i].dictName;
			}
			if(value == dict[i].dictName){
				return dict[i].dictId;
			}
		}
		return value;
	};
	var formartM = function(value){
		value = value.toString();
		if(value.toString().indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var formartTime = function(time){
		if(time.length == 8){
			return time.substr(0,1)+":"+time.substr(1,2)+":"+time.substr(3,2);
		}
		return time.substr(0,2)+":"+time.substr(2,2)+":"+time.substr(4,2);
	};
	
	
	var handlerTable = function(){
		var stardt = $("#stardt").val();
		var endxdt = $("#endxdt").val();
		
		var url = Sunline.ajaxPath("setlle/findqrtran");
		grid.setAjaxParam("stardt",stardt);
		grid.setAjaxParam("endxdt",endxdt);
		grid.init({
	        src: $("#tran_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	        	console.info("It is error!");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{     
		            	"data": "trandt",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "trannm",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "counum",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "tophno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "tranam",
		            	"sortable": false,
		            	"searchable": false
		            }
	            ]
	        }
	    });			
		var sendData = ["trandt"];
//        grid.bindTableEdit(sendData,editForm);
//        
	};
	
	
	var handlerForm = function(){
		$('#tran-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	stardt: {
                    required: true
            	},
            	endxdt : {
            		required: true
            	}
            },
            messages: {
            	stardt: {
                    required: "起始日期必填"
                },
            	endxdt : {
            		  required: "终止日期必填"
            	}
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#tran-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            submitHandler: function (form) {
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
           
		});
	};
	
	
	var handlerOperator = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN'
            });
        }
		//查询
		$('#submit').click(function(){
			if(!$('#tran-form').validate().form()){
				return;
			}
			grid.setAjaxParam("stardt",$('#stardt').val());
			grid.setAjaxParam("endxdt",$('#endxdt').val());
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#stardt').val("");
			$('#endxdt').val("");
		});
		
	};
	return {
		init : function(){
			handlerTable();
			handlerForm();
			handlerOperator();
		}
	}
}()