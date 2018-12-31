<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="scroller"   style="overflow-y:scroll;height:400px;" id="editmodal">
<div class="row inbox profile tabbable">
	<ul class="inbox-nav nav nav-tabs">
		<li class="acprod active"><a href="javascript:;">红包积分产品基础表 </a></li>
		<li class="accont"  value=""><a href="javascript:;">控制码定义表 </a></li>
		<li class="acsbac"><a href="javascript:;">红包积分属性定义表 </a></li>
		<li class="acbusi"><a href="javascript:;">红包积分核算控制表 </a></li>
	</ul>
</div>
<div class="portlet light" style="height:100px">
	<div class="portlet-body  profile tabbable">
		<div class="row inbox">
				<div class="inbox-loading"></div>
				<div class="inbox-content"></div>
		</div>
	</div>
</div>
</div>
<script src="${ctx}/pages/acprod/scripts/acsubpage.js"></script>
<script>
	jQuery(document).ready(function() {
		acsubpage.init();
	});
</script>