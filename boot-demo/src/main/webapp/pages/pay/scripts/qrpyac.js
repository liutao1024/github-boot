var Qrpyac = function(){
	var _acctno = "";
	var _toacct = "";
	var _isOK = false;

   
	   var handlerAdjust = function(){
		var validate = $('#adjust_form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	acctno:{
                    //required: true,
                    rangelength:[10,18],
            		
            		
                },
                cmpyno:{
                    //required: true,
                    //rangelength:[10,18],
                   
                },
              
            },
            messages: {
                acctno: {
                    required: "借方账户必填"
                }
           
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
			$("#acctno").val("");
            $("#cmpyno").val("");                      
            $('#cmpyno-name').text('');
            $('#d_cmpyno').text('');
            $('#d_onlnbl').text('');
		});
		//回显账户名称
		$('#acctno').blur(function(){
			
			var acctno = $("#acctno").val();
			var input = {};
			input.acctno = acctno;
			Sunline.ajaxRouter(
	         	"pay/qrpyac", 
	         	 input,
	         	"POST",
	             function(redata){
	         		//success func
	         		//console.info("success:",redata);
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			_isOK = false;
	         			return;
	         		}
	         		_isOK = true;
	         		$('#cmpyno-name').text(redata.acctna);
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		_isOK = false;
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 			
		});
		
		$('#submit').click(function(){
			if($("#acctno").val()==""&&$("#cmpyno").val()==""){
				bootbox.alert("内部账户和企业编号不能同时为空");
				return;
			}
			var input = {};
			input.acctno = $('#acctno').val();
			input.cmpyno = $('#cmpyno').val();
			/*input.tranam = $('#tranam').val();
			input.dscrtx = $('#dscrtx').val();
			input.crcycd = $('#crcycd').select2("val");
			input.quotfs = $('#qoutfs').select2("val");*/
			
			Sunline.ajaxRouter(
        	"pay/qrpyac", 
        	 input,
        	"POST",
            function(redata){
        		if(redata.retCode!='0000'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}else{
	     			var info = '查询成功';
            		bootbox.alert(info, function() {
            			                     
                        $('#cmpyno-name').text(redata.acctna);
                        $('#d_cmpyno').text(redata.custna);
                        $('#d_onlnbl').text(redata.onlnbl);
                    }); 
	     		}
        	},
        	function(redata){
        		bootbox.alert("交易异常，请检查网络设置或重新登录", function() {
        			$("#acctno").val("");
                    $("#cmpyno").val("");                      
                    $('#cmpyno-name').text('');
                    $('#d_cmpyno').text('');
                    $('#d_onlnbl').text('');
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