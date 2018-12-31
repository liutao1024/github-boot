var Adjust_single = function(){
	var _acctno = "";
	var _toacct = "";
	var _isOK = false;
	var crcycdDict=Sunline.getDict("crcycd");
	var amntcdDict=[{id:"D",text:"借方"},{id:"C",text:"贷方"}];
	var yesDict=Sunline.getDict("E_YES___");
	var handlerAdjust_single = function(){
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
		$('#amntcd').select2({
			data:amntcdDict
		});
		$('#qoutfs').select2("val","1");
		$('#crcycd').select2("val","01");
		$('#amntcd').select2("val","D");
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
		var validate = $('#Adjust_single_form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	amntcd:{
                    required: true
                },
            	acctno:{
                    required: true
                },
                toacct:{
                    required: true
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
            	amntcd: {
                    required: "记账借贷方向必选"
                },
                acctno: {
                    required: "记账账户必填"
                },
                toacct: {
                    required: "对方账户必填"
                },
                tranam: {
                	required : "交易金额必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#Adjust_single-form')).show();
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
			if(acctno.length != 18){
				bootbox.alert("请输入18位内部户账号！");
				return;
			}
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
			if(acctno.length != 18){
				bootbox.alert("请输入18位内部户账号！");
				return;
			}
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
			input.amntcd = $('#amntcd').val();
			input.acctno = $('#acctno').val();
			input.toacct = $('#toacct').val();
			input.tranam = $('#tranam').val();
			input.dscrtx = $('#dscrtx').val();
			input.crcycd = $('#crcycd').select2("val");
			input.quotfs = $('#qoutfs').select2("val");
			
			Sunline.ajaxRouter(
        	"curtain/adjust_single", 
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
			handlerAdjust_single();
		}
	}
}()