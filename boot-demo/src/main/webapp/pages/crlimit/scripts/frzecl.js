var frzecl = function() {
	/*枚举类型取值*/
	
	var crcycdDict = Sunline.getDict("E_CRCYCD");	//币种
	var statusDict = Sunline.getDict("E_STATUS");	//有效状态
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='status']").select2({
		data : statusDict,
		allowClear : true
	});
	
	var handleTable = function(){
		console.log("frzecl");
		var editform = $("#frzecl-form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		
		var validator = editform.validate({
			
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
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
				$.each($("input", $("#frzecl-form")), function(i, n) {
					if (n.name != undefined && n.name != ""
							&& n.name != null) {
						data[n.name] = n.value;
					}
				});
				Sunline.ajaxRouter("crlimit/frzecl", data, "post", function(redata) {
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




