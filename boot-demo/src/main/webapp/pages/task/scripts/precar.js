var Precar = function() {
	
var handlerbrash = function() {
	Sunline.ajaxRouter(
         	"task/coufcd", 
         	 null,
         	"POST",
             function(redata){
         		if(redata.retCode=="0000"){		         				
         				$("input[name='preconts']").val(redata.totlno);	         			
         				$("input[name='preconte']").val(redata.nousno);
         			
         		
         		}else{
         			bootbox.alert(redata.retMsg);
         		}
         	},
         	function(redata){
         		bootbox.alert("网络异常");
         	},
         	"json",
         	false);
	};

	$('#trans').click(function(){
		if(!$('#task_form').validate().form()){
			return;
		}
		var futday = $('#futday').val();
		var input = {};
		input.totnum=futday;
	    if(futday<500000){    //每次最多生成生成50W张
		Sunline.ajaxRouter(
	         	"task/prefcd", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){	
	         			
	         			bootbox.alert("制卡成功");
	         			handlerbrash();
//	         		
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		}else{
			bootbox.alert("每次生成预制卡数不能大于500000");
		}
	});
	
	$('#queryf').click(function(){
		Sunline.ajaxRouter(
	         	"task/coufcd", 
	         	 null,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){		         				
	         				$("input[name='preconts']").val(redata.totlno);	         			
	         				$("input[name='preconte']").val(redata.nousno);
	         			
	         		
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false);
	});
	
	//表单验证
	var validate = $('#task_form').validate({
		errorElement: 'span',
        errorClass: 'help-block',
        focusInvalid: false,
        rules:{
        	futday:{
        		istruedt: true,
                required: true
            }
        },
        messages: {
        	futday: {
                required: "生成数量必填"
            }
        },

        invalidHandler: function (event, validator) {  
            $('.alert-danger', $('#task_form')).show();
        },

        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },

        success: function (label) {
            label.closest('.form-group').removeClass('has-error');
            label.remove();
        },
        errorPlacement: function (error, element) {
        	element.parent().append(error);
        }
	});
	
	jQuery.validator.addMethod("istruedt", function(value, element, param) { 
		if(param==true){
			reg=/^[1-9]\d*$/;
			if(!reg.test(value)){
	            return false;
	        }
		}
		return true;
		
	}, $.validator.format("请输入有效的数字"));
	
			
	return {
		init : function(){
			handlerbrash();
		}
	}
}();