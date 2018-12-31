var xmpycd = function(){
	var cardform = $("#card-form");
	var ckBusNoFlag = "false";
	var ckNameFlag = "false";
	var ckMobileFlag = "false";
	var idtftpDict=Sunline.getDict("E_IDTFTP");
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	$("#idtftp").select2({data:idtftpDict});
	$("#crcycd").select2({data:crcycdDict});
	var data =[{id:"1",text: '储蓄卡[1]'},{id:"2",text: '贷记卡[2]'}];
	$("input[name='cardtp']").select2({
		data:data,
		allowClear: true
	});
	var ckName = function(custna,idtftp,idtfno){
		var data = {custna:custna ,idtftp:idtftp,idtfno:idtfno};
		Sunline.ajaxRouter("fc/xmidck", data, 'post',
			function(redata) {
				$('.msg', cardform).text(redata.msg);
				if(redata.ret == "success"){
					$('.alert-success', cardform).show();
					$('.alert-danger', cardform).hide();
					$('#bkbrna',cardform).val(custna);
					$('#bkbrna', cardform).attr("readOnly", true);
					$('#cardno', cardform).removeAttr("readOnly");
					
					$('#custna', cardform).attr("readOnly", true);
					$('#idtftp', cardform).attr("readOnly", true);
					$('#idtfno', cardform).attr("readOnly", true);
					ckNameFlag = "true";
				} else {
					$('.alert-success', cardform).hide();
					$('.alert-danger', cardform).show();
				}
			});
	};
	var ckBusNo = function(){
		var cardno = $('#cardno').val();
		var data = {cardno:cardno};
		Sunline.ajaxRouter("fc/xmpycd", data, 'post',
			function(redata) {
				$('.msg', cardform).text(redata.msg);
				if(redata.ret == "success"){
					$('.alert-success', cardform).show();
					$('.alert-danger', cardform).hide();
					$('#bkbrno',cardform).val("00581");
					$('#bkbrno', cardform).attr("readOnly", true);
					$('#bankna',cardform).val("工行");
					$('#bankna', cardform).attr("readOnly", true);
					$('#cardtp', cardform).removeAttr("readOnly");
					$('#mobile', cardform).removeAttr("readOnly");
					$('#cardno', cardform).attr("readOnly", true);
					ckBusNoFlag = "true";
				} else {
					$('.alert-success', cardform).hide();
					$('.alert-danger', cardform).show();
				}
			});
	};
	var ckMobile = function(custna,idtftp,idtfno,cardno,bankna,bkbrno,bkbrna,cardtp,mobile){
		var data = {custna:custna,idtftp:idtftp,idtfno:idtfno,cardno:cardno,bankna:bankna,
				bkbrno:bkbrno,bkbrna:bkbrna,cardtp:cardtp,mobile:mobile};
		Sunline.ajaxRouter("fc/xmrlck", data, 'post',
			function(redata) {
				$('.msg', cardform).text(redata.msg);
				if(redata.ret == "success"){
					$('.alert-success', cardform).show();
					$('.alert-danger', cardform).hide();
					$('#crcycd', cardform).removeAttr("readOnly");
					$('#tranam', cardform).removeAttr("readOnly");
					$('#cardtp', cardform).attr("readOnly", true);
					$('#mobile', cardform).attr("readOnly", true);
					ckMobileFlag = "true";
				} else {
					$('.alert-success', cardform).hide();
					$('.alert-danger', cardform).show();
				}
			});
	};
	var subXmcpcn = function(custna,idtftp,idtfno,cardno,bankna,bkbrno,bkbrna,cardtp,mobile,crcycd,tranam){
		var data = {custna:custna,idtftp:idtftp,idtfno:idtfno,cardno:cardno,bankna:bankna,bkbrno:bkbrno
				,crcycd:crcycd,tranam:tranam,bkbrna:bkbrna,cardtp:cardtp,mobile:mobile};
		Sunline.ajaxRouter("fc/xmcpcn", data, 'post',
			function(redata) {
				$('.msg', cardform).text(redata.msg);
				if(redata.ret == "success"){
					$('.alert-success', cardform).show();
					$('.alert-danger', cardform).hide();
					ckMobileFlag = "true";
				} else {
					$('.alert-success', cardform).hide();
					$('.alert-danger', cardform).show();
				}
			});
	};
	
	$("input[name='custna']").change(function(){
		var custna = $('#custna').val().trim();
		var idtftp = $('#idtftp').val().trim();
		var idtfno = $('#idtfno').val().trim();
		
		if(custna!="" && idtftp!="" && idtfno!=""){
			ckName(custna,idtftp,idtfno);
		}
	});
	$("input[name='idtftp']").change(function(){
		var custna = $('#custna').val().trim();
		var idtftp = $('#idtftp').val().trim();
		var idtfno = $('#idtfno').val().trim();
		if(custna!="" && idtftp!="" && idtfno!=""){
			ckName(custna,idtftp,idtfno);
		}
	});
	$("input[name='idtfno']").change(function(){
		var custna = $('#custna').val().trim();
		var idtftp = $('#idtftp').val().trim();
		var idtfno = $('#idtfno').val().trim();
		if(custna!="" && idtftp!="" && idtfno!=""){
			if(!$('#card-form').validate().form()){
				return;
			}
			ckName(custna,idtftp,idtfno);
		}
	});
	$("input[name='cardno']").change(function(){
		ckBusNo();
	});
	$("input[name='mobile']").change(function(){
		var custna = $('#custna').val().trim();
		var idtftp = $('#idtftp').val().trim();
		var idtfno = $('#idtfno').val().trim();
		var cardno = $('#cardno').val().trim();
		var bankna = $('#bankna').val().trim();
		var bkbrno = $('#bkbrno').val().trim();
		var bkbrna = $('#bkbrna').val().trim();
		var cardtp = $('#cardtp').val().trim();
		var mobile = $('#mobile').val().trim();
		if(!$('#card-form').validate().form()){
			return;
		}
		if(custna!="" && idtftp!="" && idtfno!="" && cardno!="" && 
			bankna!="" && bkbrno!="" && bkbrna!="" && cardtp!="" && mobile!=""){
			ckMobile(custna,idtftp,idtfno,cardno,bankna,bkbrno,bkbrna,cardtp,mobile);
		}
	});
	$('#submit').click(function(){
		if(ckBusNoFlag=="true" && ckNameFlag=="true" && ckMobileFlag=="true"){
			var custna = $('#custna').val().trim();
			var idtftp = $('#idtftp').val().trim();
			var idtfno = $('#idtfno').val().trim();
			var cardno = $('#cardno').val().trim();
			var bankna = $('#bankna').val().trim();
			var bkbrno = $('#bkbrno').val().trim();
			var bkbrna = $('#bkbrna').val().trim();
			var cardtp = $('#cardtp').val().trim();
			var mobile = $('#mobile').val().trim();
			var crcycd = $('#crcycd').val().trim();
			var tranam = $('#tranam').val().trim();
			if(tranam=="" || tranam == null ){
				$('.msg', cardform).text("交易金额必输");
	        	$('.alert-success', $('#card-form')).hide();
	            $('.alert-danger', $('#card-form')).show();
			}else{
				subXmcpcn(custna,idtftp,idtfno,cardno,bankna,bkbrno,bkbrna,cardtp,mobile,crcycd,tranam);
			}
		}else{
			$('.msg', cardform).text("请先进行身份校验!!!");
        	$('.alert-success', $('#card-form')).hide();
            $('.alert-danger', $('#card-form')).show();
		}
	});
	
var handlerForm = function(){
	$('#idtftp').select2("val","10");
	$('#crcycd').select2("val","01");
	$('#cardtp').select2("val","1");
	jQuery.validator.addMethod("idtfno", function(value, element, param) {
		if((!Sunline.isNull(value)) && param == true){
			return IdCardValidate(value);
		}
		return true;
	}, $.validator.format("证件号码输入有误"));
		$('#card-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	idtfno : {
            		required: false,
            		id_no : true
            	}
//            	mobile : {
//            		required: true,
//            		rangelength : [11,11]
//            	}
            },
            messages: {
            	idcard : {
            		id_no : "证件号输入有误"
            	}
//            	mobile : {
//            		rangelength : "手机号码位数不正确"
//            	}
            },
            invalidHandler: function (event, validator) { 
            	$('.msg', cardform).text("");
            	$('.alert-success', $('#card-form')).hide();
                $('.alert-danger', $('#card-form')).show();
            },

            highlight: function (element) { 
                $(element).closest('.form-group').addClass('has-error'); 
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
	return {
		 init :function(){
			 handlerForm();
		 }
	 }
}()

