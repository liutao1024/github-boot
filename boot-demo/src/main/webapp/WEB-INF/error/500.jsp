<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<%@include file="/WEB-INF/common/comm-css.jsp"%>
		<title>长亮科技管理系统</title>
		<link href="${ctx}/pages/core/css/error.css" rel="stylesheet" type="text/css" />
		<%@include file="/WEB-INF/common/comm-theme.jsp"%>
	</head>
	<body class="page-500-3">
		<div class="page-inner">
			<img src="${ctx}/pages/core/img/earth.jpg" class="img-responsive" alt="">
		</div>
		<div class="container error-404">
			<h1>500</h1>
			<h2>抱歉, 我们出现了一个问题。</h2>
			<p>
				你查找的页面不存在。
			</p>
			<p>
				<a href="${ctx}/path/auth/index">
					返回首页 
				</a>
				<br>
			</p>
		</div>
		<%@include file="/WEB-INF/common/comm-js.jsp"%>
	</body>
</html>