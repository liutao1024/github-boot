<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<%@include file="/WEB-INF/common/comm-css.jsp"%>
		<title>Bank金融核心综合管理系统</title>
		<link href="${ctx}/assets/global/plugins/select2/select2.css" rel="stylesheet" type="text/css"/>
		<link href="${ctx}/pages/auth/css/login-soft.css" rel="stylesheet" type="text/css"/>
		<%@include file="/WEB-INF/common/comm-theme.jsp"%>
	</head>
	<body class="login">
		<div class="logo">
			<h2>Banking-Finance</h2>
		</div>
		<div class="content">
			<!-- BEGIN LOGIN FORM --> 
			<form class="login-form"  >  
				<h3 class="form-title">Bank-Manage-System</h3>
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span class='login_msg'>输入用户名和密码</span>
				</div>
				<div class="form-group">
					<label class="control-label visible-ie8 visible-ie9">金融机构</label>
					<div>
						<select class="form-control" id="registCd">
							<option value="001">银行</option>
							<option value="002">证券</option>
							<option value="003">基金</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
					<label class="control-label visible-ie8 visible-ie9">用户名</label>
					<div class="input-icon">
						<i class="fa fa-user"></i>
						<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" id="username" name="username" />
					</div>
				</div>
				<div class="form-group">
					<label class="control-label visible-ie8 visible-ie9">密码</label>
					<div class="input-icon">
						<i class="fa fa-lock"></i>
						<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码" id="password" name="password"/>
					</div>
				</div>
				<div class="form-actions">
					<label class="checkbox" >
						<input type="checkbox" name="remember" id="remember" value="1" checked />记住我
					</label>
					<button type="submit" id="submit" class="btn blue pull-right">登陆 <i class="m-icon-swapright m-icon-white"></i></button>
					<button type="button" id="reSetStatus" class="btn green pull-right">重置</button>
				</div>
			</form>
			<!-- END LOGIN FORM -->
		</div>
		<!-- END LOGIN -->
		<!-- BEGIN COPYRIGHT -->
		<div class="copyright">
	 		<%@include file="/WEB-INF/jsp/auth/foot.jsp"%>
		</div>
		<%@include file="/WEB-INF/common/comm-js.jsp"%>
		<script src="${ctx}/assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
		<script src="${ctx}/assets/global/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
		<script src="${ctx}/assets/global/plugins/select2/select2.min.js" type="text/javascript"></script>
		<script src="${ctx}/pages/auth/scripts/login-soft.js" type="text/javascript"></script>
		<script>
			jQuery(document).ready(function() {    
				Login.init();
				// init background slide images
				$.backstretch([
					"${ctx}/pages/auth/media/bg/1.jpg",
					"${ctx}/pages/auth/media/bg/2.jpg",
					"${ctx}/pages/auth/media/bg/3.jpg",
					"${ctx}/pages/auth/media/bg/4.jpg"
					], {
						fade: 1000,
						duration: 8000
					}
				);
			});
		</script>
	</body>
</html>
