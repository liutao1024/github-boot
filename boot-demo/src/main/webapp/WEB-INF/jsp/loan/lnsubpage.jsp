<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="scroller"   style="overflow-y:scroll;height:400px;" id="editmodal">
<div class="row inbox profile tabbable">
	<ul class="inbox-nav nav nav-tabs">
		<li class="lnfprodedit active"><a href="javascript:;">基础参数 </a></li>
		<li class="lnfscap"><a href="javascript:;">适用范围控制 </a></li>
		<li class="lnflend"><a href="javascript:;">放款属性 </a></li>
		<li class="lnfschdrule"><a href="javascript:;">还款属性 </a></li>
		<li class="lnfschdcomp"><a href="javascript:;">还款方式组合</a></li>
		<li class="lnfmatu"><a href="javascript:;">到期属性 </a></li>
		<li class="lnfdtit"><a href="javascript:;">会计核算属性 </a></li>
		<li class="lnfinst"><a href="javascript:;">计息属性</a></li>
		<li class="lnfchrg"><a href="javascript:;">收费基础属性</a></li>
		<li class="lnfchrgenvt"><a href="javascript:;">收费事件定义属性</a></li>
		<li class="lnfnote"><a href="javascript:;">客户通知属性 </a></li>
		<li class="lnfagnt"><a href="javascript:;">代理业务属性</a></li>
		<li class="lnfcrcy"><a href="javascript:;">币种控制 </a></li>
	    <li class="lnfctrl"><a href="javascript:;">个性化控制 </a></li>
	    <li class="lnfgrup"><a href="javascript:;">贷款产品分类</a></li>
	    <li class="lnfbors"><a href="javascript:;">资产转让产品属性</a></li>
	    <li class="lnfscope"><a href="javascript:;">贷款规模控制参数</a></li>
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
<script src="${ctx}/pages/loan/scripts/lnsubpage.js"></script>
<script>
	jQuery(document).ready(function() {
		lnsubpage.init();	
	});
</script>