<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="scroller" style="height:510px" >
<div class="row inbox profile tabbable">
	<ul class="inbox-nav nav nav-tabs">
		<li class="detail active" ><a href="javascript:;"> 基础参数 </a></li>
		<li class="brch"><a href="javascript:;"> 机构控制 </a></li>
		<li class="actp"><a href="javascript:;"> 账户类型控制 </a></li>
		<li class="cust"><a href="javascript:;"> 开户控制 </a></li>
		<li class="term"><a href="javascript:;"> 存期控制 </a></li>
		<li class="matu"><a href="javascript:;"> 到期控制 </a></li>
		<li class="post"><a href="javascript:;"> 存入控制 </a></li>
		<li class="postplan"><a href="javascript:;"> 存入计划 </a></li>
		<li class="draw"><a href="javascript:;"> 支取控制 </a></li>
		<li class="dfintr"><a href="javascript:;"> 违约支取利息定义 </a></li>
		<li class="drawplan"><a href="javascript:;"> 支取计划</a></li>
		<li class="intr"><a href="javascript:;"> 利息利率</a></li>
		<li class="acct"><a href="javascript:;"> 核算定义</a></li>
	</ul>
</div>
<div class="portlet light">
	<div class="portlet-body  profile tabbable">
		<div class="row inbox">
			<div class=" col-md-12">
				<div class="inbox-loading"></div>
				<div class="inbox-content"></div>
			</div>
		</div>
	</div>
</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbedit.js"></script>
<script>
	jQuery(document).ready(function() {
		kupdppbedit.init();
	});
</script>