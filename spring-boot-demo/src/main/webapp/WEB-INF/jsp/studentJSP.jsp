<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>This is My First SpringBoot JSP</title>
</head>
<body>
	<div>
		<span>${student.name}</span>
	</div>
	<div>
		<span>${student.age}</span>
	</div>
	<div>
		<span>${student.id}</span>
	</div>
	<div>
		<span>${student.telephone}</span>
	</div>
	<div>
		<span>path:${ctp}</span>
	</div>
	<div>
		<span>scheme:${cts}</span>
	</div>
	<div>
		<span>serverName:${ctsn}</span>
	</div>
	<div>
		<span>serverPath:${ctsp}</span>
	</div>
</body>
<script src="${ctx}/assets/global/scripts/jquery-1.11.1.min.js"></script>
</html>