var Login = function() {

	var handleLogin = function() {
		
		$("#registCd").select2();
		
        //判断是否记住用户名
		if($.cookie("remember")&&$.cookie("rmbUser")!=undefined&&$.cookie("rmbUser")!=null){
			document.getElementById("username").value=$.cookie("rmbUser");
		}
	
		var validator=$('.login-form').validate({
							errorElement : 'span', // default input error
							errorClass : 'help-block', // default input error
							focusInvalid : false, // do not focus the last
							rules : {
								username : {
									required : true
								},
								password : {
									required : true
								},
								remember : {
									required : false
								}
							},

							messages : {
								username : {
									required : "帐号必填项"
								},
								password : {
									required : "密码必填项"
								}
							},

							invalidHandler : function(event, validator) {
								$('.login_msg', $('.login-form')).val("请检查用户名密码")
								$('.alert-danger', $('.login-form')).show();
							},

							highlight : function(element) { // hightlight error
								// inputs
								$(element).closest('.form-group').addClass(
										'has-error'); // set error class to
								// the control group
							},

							success : function(label) {
								label.closest('.form-group').removeClass(
										'has-error');
								label.remove();
							},

							errorPlacement : function(error, element) {
								error.insertAfter(element
										.closest('.input-icon'));
							},

							submitHandler : function(form) {
								//记住用户名
								if(document.getElementById("remember").value=="1"){
									$.cookie("remember",true);
									$.cookie("rmbUser",document.getElementById("username").value);
								}else{
									$.cookie("remember",false);
								}																
								var data = {};
								data.passwd = document.getElementById("password").value;
								data.userid = document.getElementById("username").value;
								data.corpno = document.getElementById("registCd").value;
								data.pswdfg = "1";//是否校验密码  全部都校验
								$.cookie("registCd",document.getElementById("registCd").value);
								Sunline.ajaxRouter(
									"auth/logincheck",
									data,
									"POST",
									function(redata) {
										if (redata.ret == "success") {
											Sunline.localPath("home-main/index");
										} else {
											$('.login_msg', $('.login-form')).text(redata.msg==undefined?"":redata.msg);
											$('.alert-danger', $('.login-form')).show();										
											$("#password").val("");
										}
									}, function(redata) {
										$('.alert-danger', $('.login-form')).show();
										$('.login_msg', $('.login-form')).text('网络异常1'+(redata.msg==undefined?"":redata.msg));
									}, "json", false);
							}
						});
		document.onkeydown = function(e){
		    var ev = document.all ? window.event : e;
		    if(ev.keyCode==13) {			
		    	$('.login-form').submit();
			}     
		}
		$("#reSetStatus").bind("click",
				function() {
					var data = {};
					data.passwd = document.getElementById("password").value;
					data.userid = document.getElementById("username").value;
					Sunline.ajaxRouter(
							"auth/reset", 
							data,
							"POST", 
							function(redata) {
								$('.login_msg', $('.login-form')).text(redata.msg);
								$('.alert-danger', $('.login-form')).show();
									if (redata.ret != "success") {
										$("#password").val("");	
									}
							}, 
							function(redata) {
								$('.login_msg', $('.login-form')).text("网络异常2");
								$('.alert-danger', $('.login-form')).show();
							}, "json", false);

				});
	}

	return {
		init : function() {
			handleLogin();
		}
	};
}();