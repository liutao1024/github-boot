var dpspuf = function(){
	var _custac = "";
	var isOk = false;
	var  _handler = function(){
		jQuery.validator.addMethod("ckisinac", function(value, element, param) {
		    if(param[0]=false){return true}
			if(value.length==10){
		    	return true;
		    }else{
		    	return false;
		    }
		}, $.validator.format(""));
		//校验输入是否是数字 true时校验，第二个参数校验是否有小数
		jQuery.validator.addMethod("ckisnum", function(value, element, param) { 
			console.log(param[0]);
			if(param[0]==true){
				if(param[1]==true){
					reg=/^[-\+]?\d+(\.\d{0,2})?$/; 
				}else{
					reg=/^[-\+]?\d+$/;    
				}
			        if(!reg.test(value)){
			            return false;
			        }
			}
			return true;
		}, $.validator.format("请输入有效的数字!"));
		$('.intran-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	custac: {
                    required: true,
                    ckisinac : true
                },
        
                tranam: {
                    required: true,
                    ckisnum : [true,true]
                }
            },
            messages: {
                custac: {
                    required: "客户电子账号必填"
                },
                tranam: {
                	required : "转出金额必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.intran-form')).show();
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
		$(".custac").inputmask({
            "mask": "9",
            "repeat": 18,
            "greedy": false
        });
		
		//确认按钮
		$("#submit").click(function () {
			
			 var input={};
             input.custac =$("#custac").val();
//             input.toacct = $("#toacct").val();
             input.tranam = $("#tranam").val();
//             input.dscrtx = $("#dscrtx").val();
//             input.amntcd = "D";
             input.crcycd = "01";
//             input.toacna = null;
//             input.quotfs = '1';
         	Sunline.ajaxRouter(
         	"cust/dpspur", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000' && redata.retCode!='1003'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}
         		var info = redata.retMsg;
         		if(redata.retCode =='1003'){
         			info = '请求成功，chinapay代付处理中…';
         		}
        		bootbox.alert(info, function() {
        			$("#custac").val('');
                    $("#tranam").val('');
                    $('#d-acct-name').text('');
                }); 
         	},
         	function(redata){
         		bootbox.alert('失败，请重试');
         	},
         	"json",
         	false); 
         });
		
		//回显账户名称
		$('#custac').blur(function(){
			if($("#custac").val() == _custac ){
				return;
			}
			_custac = $("#custac").val();
			var custac = $("#custac").val();
			var input = {};
			input.custac = custac;
			Sunline.ajaxRouter(
	         	"cust/acct", 
	         	 input,
	         	"POST",
	             function(redata){
	         		//success func
	         		//console.info("success:",redata);
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		console.info("账户名称"+redata.acctna);
	    			$('#d-acct-name').text(redata.acctna);
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		isOk = false;
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		});
	};
	return {
		init : function(){
			_handler();
		}
	}
}()