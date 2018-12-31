var adbrch = function() {
	/*枚举类型取值*/
	
	var brchtpDict = Sunline.getDict("E_BRCHTP");	//部门类型
	var brchlvDict = Sunline.getDict("E_BRCHLV");	//机构级别
	var brchstDict = Sunline.getDict("E_BRCHST");	//机构日结状态
	var centtgDict = Sunline.getDict("E_YES__");	//是否中心标志
	
	
	$("input[name='brchtp']").select2({
		data : brchtpDict,
		allowClear : true
	});
	$("input[name='brchlv']").select2({
		data : brchlvDict,
		allowClear : true
	});
	$("input[name='brchst']").select2({
		data : brchstDict,
		allowClear : true
	});
	$("input[name='centtg']").select2({
		data : centtgDict,
		allowClear : true
	});
	

	
	var handleTable = function(){

		var editform = $("#adbrch-form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		
		
		var validator = editform.validate({
			
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules:{
				brchno: {required: true},
				brchna: {required: true},
				cityno: {required: true},
				brchtp: {required: true},
				brchst: {required: true},
				postcd: {required: true},
				brnosh: {required: true},
				brsmna: {required: true},
				brchlv: {required: true},
				centtg: {required: true},
				telecd: {required: true},
				addres: {required: true}
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
				$.each($("input", $("#adbrch-form")), function(i, n) {
					if (n.name != undefined && n.name != ""
							&& n.name != null) {
						data[n.name] = n.value;
					}
				});
				console.info(data);
				Sunline.ajaxRouter("cust/adbrch", data, "post", function(redata) {
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




