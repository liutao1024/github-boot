var Itmact = function(){
	var amntcdDict=Sunline.getDict("E_AMNTCD");
	var brchnoDict=Sunline.getDict("","/brch","brchno","brchna");

	var grid = new Datatable();
	$("#amntcd").select2({
		data : amntcdDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("input[name='brchno']").select2({
		data : brchnoDict
	});
	$("input[name='brchno']").select2('val','0004');
	
	var handlerTable = function(){
		    
	//取消
	$('#cancle').click(function(){
		$('#itemcd').val("");
		$('#tranam').val("");
		$('#brchno').select2("val","");
		$('#amntcd').select2("val","");
	});
	
	//确定
	$('#submit').click(function(){
		if(!$('#cust-form').validate().form()){
			return;
		}
		var itemcd = $('#itemcd').val();
		var tranam = $('#tranam').val();
		var acbrch = $('#brchno').select2("val");
		var amntcd = $('#amntcd').select2("val");

		var input = {};
		input.itemcd = itemcd;
		input.tranam = tranam;
		input.acbrch = acbrch;
		input.amntcd = amntcd;
        input.crcycd = "01";
        input.quotfs = '1';

		Sunline.ajaxRouter(
	         	"curtain/itmact", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("转账成功！",function(){
	         			
	         			$('#itemcd').val("");
	         			$('#tranam').val("");
	         			$('#brchno').select2("val","");
	         			$('#amntcd').select2("val","");
	                   	//grid.submitFilter();
	         		});
	         	},
	         	function(redata){    
	         		bootbox.alert("转账失败，请重试");
	         	},
	         	"json",
	         	true);
	});
	
	$('#cust-form').validate({
		errorElement: 'span', 
        errorClass: 'help-block',
        focusInvalid: false, 
        rules:{
        	itemcd: {
                required: true
        	},
        	tranam : {
        		required: true
        	},
        	brchno: {
                required: true     
        	},
        	amntcd: {
                required: true     
        	}
        },
        messages: {
        	itemcd: {
                required: "科目号称必填"
            },
            tranam: {
                required: "交易金额必填"
            },
            brchno: {
                required: "机构号必填"
            },
            amntcd: {
                required: "借贷标志必填"
            }
        },
        invalidHandler: function (event, validator) {   
            $('.alert-danger', $('#cust-form')).show();
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
	};
	return {
		init : function(){
			handlerTable();
		}
	}
}()