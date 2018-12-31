<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<%@include file="/WEB-INF/common/comm-css.jsp"%>
		<title>长亮科技管理系统</title>
		<link href="${ctx}/pages/auth/css/lock.css" rel="stylesheet" type="text/css"/>
		<%@include file="/WEB-INF/common/comm-theme.jsp"%>
	</head>
	<body>
		<div class="page-lock">
			<div class="page-logo">
				<a class="brand" href="index.html">
				<img src="${ctx}/assets/admin/layout/img/logo-big.png" alt="logo"/>
				</a>
			</div>
			<div class="page-body">
				<img class="page-lock-img" src="${ctx}/pages/auth/media/profile/profile.jpg" alt="">
				<div class="page-lock-info">
					<h3>华晓明</h3>
					<span class="email">
					huaxm@sunline.cn </span>
					<span class="locked">
					已锁定 </span>
					<form class="form-inline" action="index">
						<div class="input-group input-medium">
							<input type="text" class="form-control" placeholder="输入密码">
							<span class="input-group-btn">
							<button type="submit" class="btn blue icn-only"><i class="m-icon-swapright m-icon-white"></i></button>
							</span>
						</div>
						<!-- /input-group -->
						<div class="relogin">
							<a href="login">
							不是本人 ? </a>
						</div>
					</form>
				</div>
			</div>
			<div class="page-footer-custom">
				<%@include file="/WEB-INF/jsp/auth/foot.jsp"%>
			</div>
		</div>
		<%@include file="/WEB-INF/common/comm-js.jsp"%>
		<script src="${ctx}/assets/global/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
		<script src="${ctx}/pages/auth/scripts/lock.js" type="text/javascript"></script>
		<script>
			jQuery(document).ready(function() {     
				Lock.init();
				$.backstretch([
			        "${ctx}/pages/auth/media/bg/1.jpg",
	    		    "${ctx}/pages/auth/media/bg/2.jpg",
	    		    "${ctx}/pages/auth/media/bg/3.jpg",
	    		    "${ctx}/pages/auth/media/bg/4.jpg"
			        ], {
			          fade: 1000,
			          duration: 8000
		      	});
			});
		</script>
	</body>
</html>