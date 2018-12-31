var Uppyac = function(){
	var _acctno = "";
	var _toacct = "";
	var _isOK = false;

   
	   var handlerAdjust = function(){
		var validate = $('#cust-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	tranam:{
                    //required: true,
                    
                    min:0
            		
                }
               
              
            },
            messages: {
                
           
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#adjust-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },
         
            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
		});
	
		//取消
		$("#cancle").click(function(){
			$("#idtfno").val("");
            $("#cmpyno").val("");                      
            $("#tranam").val('');
            
		});
		//回显账户名称
		
		
		$('#submit').click(function(){
			if($("#idtfno").val()==""&&$("#cmpyno").val()==""){
				bootbox.alert("营业执照和企业编号不能同时为空");
				return;
			}
			var input = {};
			input.tranam = $('#tranam').val();
			input.idtfno = $('#idtfno').val();
			input.cmpyno = $('#cmpyno').val();
			/*input.tranam = $('#tranam').val();
			input.dscrtx = $('#dscrtx').val();
			input.crcycd = $('#crcycd').select2("val");
			input.quotfs = $('#qoutfs').select2("val");*/
			
			Sunline.ajaxRouter(
        	"pay/uppyac", 
        	 input,
        	"POST",
            function(redata){
        		if(redata.retCode!='0000'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}else{
	     			var info = '充值成功';
            		bootbox.alert(info, function() {
            			                                           
                    }); 
	     		}
        	},
        	function(redata){
        		bootbox.alert("交易异常，请检查网络设置或重新登录", function() {
        			$("#idtfno").val("");
                    $("#cmpyno").val("");                      
                    $("#tranam").val('');
                }); 
        	},
        	"json",
        	false); 
			});
	};
	
	return {
		init : function(){
			handlerAdjust();
		}
	}
}()