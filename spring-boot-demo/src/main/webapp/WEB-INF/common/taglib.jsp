<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%	String path=request.getContextPath();//上下文路径
	String scheme=request.getScheme();//
	String serverName=request.getServerName();//服务器名称
	int serverPort=request.getServerPort();//端口
	String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<c:set var="ctx" value="<%=basePath%>"/>
<c:set var="ctp" value="<%=path%>"/>
<c:set var="cts" value="<%=scheme%>"/>
<c:set var="ctsn" value="<%=serverName%>"/>
<c:set var="ctsp" value="<%=serverPort%>"/>
