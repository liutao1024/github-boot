<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<link href="${ctx}/pages/core/css/error.css" rel="stylesheet" type="text/css" />
<div class="col-md-12 page-404">
	<div class="number">404</div>
	<div class="details">
		<h3>抱歉!</h3>
		<p>
			没有找到你需要的页面<br /> 
			请您与管理员联系。
		</p>
		<form action="#">
			<div class="input-group input-medium">
				<input type="text" class="form-control" placeholder="关键字...">
				<span class="input-group-btn">
					<button type="submit" class="btn blue">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
			<!-- /input-group -->
		</form>
	</div>
</div>
