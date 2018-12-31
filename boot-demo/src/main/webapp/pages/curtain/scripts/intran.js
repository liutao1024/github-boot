var Intran = function(){
	var _acctno = "";
	var _toacct = "";
	var isOk = false;
	var  _handler = function(){
		jQuery.validator.addMethod("ckisinac", function(value, element, param) {
		    if(param[0]=false){return true}
			if(value.substr(0,1)=='9'){
		    	return true;
		    }else{
		    	return false;
		    }
		}, $.validator.format("输入的帐号不复合内部户帐号规则"));
		//校验输入是否是数字 true时校验，第二个参数校验是否有小数
		jQuery.validator.addMethod("ckisnum", function(value, element, param) { 
			console.info(param[0]);
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
            	acctno: {
                    required: true,
                    ckisinac : true
                },
                toacct: {
                    required: true,
                    ckisinac : true
                },
                tranam: {
                    required: true,
                    ckisnum : [true,true]
                }
            },
            messages: {
                acctno: {
                    required: "借方账户必填"
                },
                toacct: {
                    required: "贷方账户必填"
                },
                tranam: {
                	required : "交易金额必填"
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
		$(".acctno").inputmask({
            "mask": "9",
            "repeat": 18,
            "greedy": false
        });
		
		//确认按钮
		$("#submit").click(function () {
			
			if(!$('.intran-form').validate().form() && !isOk ){
				return;
			}
			 var input={};
             input.acctno =$("#acctno").val();
             input.toacct = $("#toacct").val();
             input.tranam = $("#tranam").val();
             input.dscrtx = $("#dscrtx").val();
             input.amntcd = "D";
             input.crcycd = "01";
             input.toacna = null;
             input.quotfs = '1';
             
         	Sunline.ajaxRouter(
         	"curtain/inactr", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}
         		var info = '转账成功';
        		bootbox.alert(info, function() {
        			$("#acctno").val('');
                    $("#toacct").val('');
                    $("#tranam").val('');
                    $("#dscrtx").val('');
                    $('#d-acct-name').text('');
                    $('#c-acct-name').text('');
                }); 
         	},
         	function(redata){
         		bootbox.alert('转账失败，请重试');
         	},
         	"json",
         	false); 
         });
		
		//取消
		$("#cancle").click(function(){
			$("#acctno").val('');
			$("#toacct").val('');
            $("#tranam").val('');
            $("#dscrtx").val('');
            $('#d-acct-name').text('');
            $('#c-acct-name').text('');
		});
		//回显账户名称
		$('#acctno').blur(function(){
			if($("#acctno").val() == _acctno ){
				return;
			}
			_acctno = $("#acctno").val();
			var acctno = $("#acctno").val();
			var input = {};
			input.acctno = acctno;
			Sunline.ajaxRouter(
	         	"curtain/acct", 
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
		$('#toacct').blur(function(){
			if($("#toacct").val() == _toacct ){
				return;
			}
			_toacct = $("#toacct").val();
			var acctno = $("#toacct").val();
			var input = {};
			input.acctno = acctno;
			Sunline.ajaxRouter(
	         	"curtain/acct", 
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
	         		$('#c-acct-name').text(redata.acctna);
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