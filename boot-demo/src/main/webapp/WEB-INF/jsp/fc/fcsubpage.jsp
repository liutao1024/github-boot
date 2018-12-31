<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="scroller"   style="overflow-y:scroll;height:400px;" id="editmodal">
<div class="row inbox profile tabbable">
	<ul class="inbox-nav nav nav-tabs">
		<li class="lnfprodedit active"><a href="javascript:;">基础参数 </a></li>
	</ul>
</div>
<div class="portlet light" style="height:400px">
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
<script src="${ctx}/pages/fc/scripts/fcsubpage.js"></script>
<script>
	jQuery(document).ready(function() {
		fcsubpage.init();	
	});
</script>
