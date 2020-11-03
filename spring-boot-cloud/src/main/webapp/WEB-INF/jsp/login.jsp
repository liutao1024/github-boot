<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%> 
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
		xmlns:th="http://www.thymeleaf.org"
		xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity3">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="${ctx}/assets/global/css/xxx.js" />
	<title>企业XBRL报告平台</title>
</head>
<body>
	<form name='loginForm' method="post" onSubmit="return validateChart();">
		<table height="150">
		<!-- 黄色感叹号是因为html5中推荐使用标签属性,而是希望使用.css文件来定义,因为html5是为了适应手机,Piad端以及pc端 -->
			<tr>
				<td>&nbsp;</td>
			</tr>
		</table>
		<table width="100%" border="0" align="center" cellpadding="0"
			cellspacing="0" background="${ctx}/assets/global/images/login_bg.gif">
			<tr>
				<td><img src="${ctx}/assets/global/images/login_left.gif" /></td>
				<td><img src="${ctx}/assets/global/images/login_logo.png" /></td>
				<td width='510' align="left" valign="top">
					<table width="77%" border="0" cellspacing="0" cellpadding="0">
						<tr align="center">
							<td height="100" class="text">&nbsp;</td>
						</tr>
						<tr align="center">
							<td height="30" class="menu_title">用户ID： 
								<input id = "userid" name="userid" value="" type="text" class="login" />
							</td>
						</tr>
						<tr>
							<td height="30" align="center" class="menu_title">密&nbsp;&nbsp;码：
								<input id = "password" name="password" value="" type="password" class="login" />
							</td>
						</tr>
						<tr>
							<td height="30" align="center" class="menu_title">验证码： <input
								name="rand" type="text" class="login" onKeyUp="enterkey(event)" />
								<input name="token" type="hidden" value="${token}" />
							</td>
						</tr>
						<tr align="center">
							<td><a href="javascript:refreshChart()"><img id="chart"
									border="0" src="" title='换一张' /></a><br /> <a
								href="javascript:refreshChart()">看不清楚,换一张</a></td>
						</tr>
						<tr align="center">
							<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="button" class="button" value="登录" id = "submitup" name = "submitup" /> &nbsp; 
								<input type="reset" class="button" value="重置" />
							</td>
						</tr>
					</table>
				</td>
				<td width="200">&nbsp;</td>
			</tr>
			<tr>
				<td height="57" colspan="4" align="center" bgcolor="#F3F3F3"
					class="rescind">版权所有：吉贝克信息技术有限公司</td>
			</tr>
		</table>
		<br />
	</form>
</body>
<script type="text/javascript" src="${ctx}/assets/global/scripts/md5.js" charset="utf-8"></script>
<script type="text/javascript" src="${ctx}/scripts/login.js" charset="utf-8"></script>
<script type="text/javascript">
	if (window.parent.frames.length != 0) {
		window.parent.location.href = "${webPath}/gotoLoginPage.login";
	}
</script>
<script>
	jQuery(document).ready(function() {    
		loginXbrl.init();
	});
</script>
</html>