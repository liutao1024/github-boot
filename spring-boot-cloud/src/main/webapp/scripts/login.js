var loginXbrl = function(){
	$("#submitup").bind("click",
			function() {
				var data = {};
				data.userid = document.getElementById("userid").value;
				data.passwd = document.getElementById("password").value;
				Sunline.ajaxRouter("/userLogin", data,
						"POST", function(redata) {
						$('.login_msg', $('.login-form')).text(redata.msg);
						$('.alert-danger', $('.login-form')).show();
							if (redata.ret != "success") {
								$("#password").val("");	
							}
						}, function(redata) {
							$('.login_msg', $('.login-form')).text("网络异常");
							$('.alert-danger', $('.login-form')).show();
						}, "json", false);

			});
}()
//Ext.onReady(function() {
//    //显示验证码
//    refreshChart();
//    loginForm.j_username.focus();
//});
//
///**进入CA登录页面*/ 
//function caLogin() {
//    showLoading();
//    Ext.getBody().mask(); 
//    location = webPath + "/login_view_ca.login";
//}
//
///**检查输入项是否为空
// * @param 是否检查通过
// */ 
//function checkInput() {
//    if (loginForm.j_username.value.length == 0) {
//        Ext.Msg.alert("信息", "请输入用户名");
//        loginForm.j_username.focus();
//        return false;
//    }
//    
//    if (loginForm.j_password.value.length == 0) {
//        Ext.Msg.alert("信息", "请输入密码");
//        loginForm.j_password.focus();
//        return false;
//    }
//    
//    if (loginForm.rand.value.length == 0) {
//        Ext.Msg.alert("信息", "请输入验证码");
//        loginForm.rand.focus();
//        return false;
//    }
//    return true;
//};
//
///**表单重置
// */
//function doReset() {
//    loginForm.j_username.value = "";
//    loginForm.j_password.value = "";
//    loginForm.rand.value = "";
//};
//
///**回车
// */
//function enterkey() {
//    var event = arguments[0] || window.event;
//    if (event.keyCode == 13) {
//        validateChart();
//    }
//};
//
///**重新获得验证码
// */
//function refreshChart() {
//    document.getElementById("chart").src = webPath + "/build_validate_image.login?t=" + new Date().getTime();
//};
//
//function doSubmit() {
//    Ext.getBody().mask();
//    loginForm.j_password.value = hex_md5(loginForm.j_password.value);
//    loginForm.submit();
//}
//
///**验证码校验
// */
//function validateChart() {
//    if (!checkInput()) {
//    	return false;
//    } else {
//    	loginForm.action=webPath+"/j_acegi_security_check";
//    	doSubmit();
//    	return true;
//    }
//};
//
//function showLoading() {
//    Ext.get('loading').show();
//};
//
//function hideLoading() {
//    Ext.get('loading').fadeOut({remove: false});
//};
