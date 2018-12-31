var dpfroz = function() {
	/*枚举类型取值*/
	
	var frozowDict = Sunline.getDict("E_FROZOW");	//冻结主体类型
	var frlmtpDict = Sunline.getDict("E_FRLMTP");	//限制类型
	var frexogDict = Sunline.getDict("E_LAWCOP");	//执法部门
	var crcycdDict = Sunline.getDict("crcycd");	//币种
	var idtftpDict = Sunline.getDict("E_IDTFTP");	//证件类型
	var csextgDict = Sunline.getDict("E_CSEXTG");	//证件类型
	var froztpDict = Sunline.getDict("E_FROZTP");	//冻结主体类型
	
	
	$("input[name='froztp']").select2({
		data : froztpDict,
		allowClear : true
	});
	$("input[name='frozow']").select2({
		data : frozowDict,
		allowClear : true
	});
	$("input[name='csextg']").select2({
		data : csextgDict,
		allowClear : true
	});
	$("input[name='frlmtp']").select2({
		data : frlmtpDict,
		allowClear : true
	});
	$("input[name='frexog']").select2({
		data : frexogDict,
		allowClear : true
	});
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='idtp01']").select2({
		data : idtftpDict,
		allowClear : true
	});
	$("input[name='idtp02']").select2({
		data : idtftpDict,
		allowClear : true
	});

	
	var handleTable = function(){

		var editform = $("#dpfroz-form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		
		
		var validator = editform.validate({
			
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules:{
            	custac: {required: true},
				frozow: {required: true},
				frlmtp: {required: true},
				frcttp: {required: true},
				crcycd: {required: true},
				idtp01: {required: true},
				idno01: {required: true},
				frna01: {required: true},
				froztp: {required: true},
				csextg: {required: true},
				frreas: {required: true},
				freddt: {required: true},
				frctno: {required: true},
				frexog: {required: true},
				frogna: {required: true},
				idtp02: {required: true},
				idno02: {required: true},
				frna02: {required: true}
				},
			invalidHandler : function(event, validator) {
				editsuccess.hide();
				editerror.show();
				Metronic.scrollTo(editerror, -200);
			},

			errorPlacement : function(error, element) {
				element.parent().append(error);
			},

			highlight : function(element) {
				$(element).closest('.form-group').removeClass("has-success")
						.addClass('has-error');
			},

			unhighlight : function(element) {

			},
			success : function(label, element) {
				var icon = $(element).parent('.input-icon').children('i');
				$(element).closest('.form-group').removeClass('has-error')
						.addClass('has-success'); // set success class to the
													// control group
				icon.removeClass("fa-warning").addClass("fa-check");
			},
			submitHandler : function(form) {
				console.log("submit");
				var data = {};
				$.each($("input", $("#dpfroz-form")), function(i, n) {
					if (n.name != undefined && n.name != ""
							&& n.name != null) {
						data[n.name] = n.value;
					}
				});
				Sunline.ajaxRouter("cust/dpfroz", data, "post", function(redata) {
					$('.msg', editform).text(redata.msg);
					if (redata.ret == "success") {
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
					} else {
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}
				}, function() {
					$('.msg', editform).text("请求出错!");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
				}, "json");
			}
		});
	};
	
	return {
		init : function() {
			handleTable();
		}
	}

}();




