var fcchrg = function(){
	var _acctno = "";
	var _toacct = "";
	var isOk = false;
	
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
	
	//查询小马备付金余额doQuery()
	var doQuery = function(){
		var input = {};
		Sunline.ajaxRouter(
	         	"fc/qcchrg", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			$("input[name='dredbl_1']").val(formartM(redata.tranam+""));
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 	
	}
	
	var  _handler = function(){
		
		//确认按钮
		$("#submit").click(function () {
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
			
			bootbox.confirm("确定要充值？", function(result) {
	        	if(!result){
	        		return;
	        	}
			
			$('.intran-form').validate({
				errorElement: 'span', 
	            errorClass: 'help-block', 
	            focusInvalid: false, 
	            rules:{
	                tranam: {
	                    required: true,
	                    ckisnum : [true,true]
	                }
	            },
	            messages: {
	                tranam: {
	                	required : "交易金额必填"
	                }
	            },

	            invalidHandler: function (event, validator) { 
	                $('.alert-danger', $('.intran-form')).show();
	            },

	            highlight: function (element) { 
	                $(element).closest('.form-group').addClass('has-error'); 
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
			
			
			if(!$('.intran-form').validate().form() && !isOk ){
				return;
			}
			 var input={};
             input.tranam = $("#tranam").val();
             
         	Sunline.ajaxRouter(
         	"fc/fcchrg", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
	     			bootbox.alert(redata.retMsg);
	     			return;
	     		}
         		var info = '充值成功';
        		doQuery();
        		bootbox.alert(info, function() {
                    $("#tranam").val('');
                }); 
         	},
         	function(redata){
         		bootbox.alert('充值失败，请重试');
         	},
         	"json",
         	false); 
         });
		})
		doQuery();
		
		//取消
		$("#cancle").click(function(){
            $("#tranam").val('');
		});
		
	};
	return {
		init : function(){
			_handler();
		}
	}
}()