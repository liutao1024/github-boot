var Adjust = function(){
	var _acctno = "";
	var _toacct = "";
	var _isOK = false;
	var crcycdDict=Sunline.getDict("crcycd");
	var yesDict=Sunline.getDict("E_YES___");
	var handlerAdjust = function(){
		//select2
		$('#qoutfs').select2({
			data:yesDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#crcycd').select2({
			data:crcycdDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#qoutfs').select2("val","1");
		$('#crcycd').select2("val","01");
		//校验输入是否是数字 true时校验，第二个参数校验是否有两位小数
		jQuery.validator.addMethod("ckisnum", function(value, element, param) { 
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
		//表单验证
		var validate = $('#adjust_form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	acctno:{
                    required: true,
                    rangelength:[10,18]
                },
                toacct:{
                    required: true,
                    rangelength:[10,18]
                },
                tranam:{
                    required: true,
                    ckisnum : [true,true]
                },
                crcycd : {
                	required:true
                },
                quotfs : {
                	required:true
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
		$(".acctno").inputmask({
            "mask": "9",
            "repeat": 18,
            "greedy": false
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
	         			_isOK = false;
	         			return;
	         		}
	         		_isOK = true;
	         		$('#d-acct-name').text(redata.acctna);
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		_isOK = false;
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 			
		});
		$('#toacct').blur(function(){
			_toacct = $("#toacct").val();
			var acctno = $("#toacct").val();
			var input = {};
			input.acctno = acctno;
			Sunline.ajaxRouter(
	         	"curtain/acct", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			_isOK = false;
	         			return;
	         		}
	         		_isOK = true;
	         		$('#c-acct-name').text(redata.acctna);
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
			var input = {};
			input.acctno = $('#acctno').val();
			input.toacct = $('#toacct').val();
			input.tranam = $('#tranam').val();
			input.dscrtx = $('#dscrtx').val();
			input.crcycd = $('#crcycd').select2("val");
			input.quotfs = $('#qoutfs').select2("val");
			
			Sunline.ajaxRouter(
        	"curtain/adjust", 
        	 input,
        	"POST",
            function(redata){
        		if(redata.retCode!='0000'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}else{
	     			var info = '调账完成';
            		bootbox.alert(info, function() {
            			$("#acctno").val("");
                        $("#toacct").val("");
                        $("#tranam").val("");
                        $("#dscrtx").val("");
                        $('#d-acct-name').text('');
                        $('#c-acct-name').text('');
                    }); 
	     		}
        	},
        	function(redata){
        		bootbox.alert("交易异常，请检查网络设置或重新登录", function() {
        			$("#acctno").val("");
                    $("#toacct").val("");
                    $("#tranam").val("");
                    $("#dscrtx").val("");
                    $('#d-acct-name').text('');
                    $('#c-acct-name').text('');
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