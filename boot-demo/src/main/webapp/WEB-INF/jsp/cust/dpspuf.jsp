<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">强制扣划</span>
				<span class="caption-helper">强制扣划...</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN SINGLEDEBT FORM -->
			<form class="intran-form"  >  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
						<label class="control-label">解冻帐号：</label>
						<div class="input-icon">
							<i class="fa fa-credit-card"></i>
							<input class="form-control placeholder-no-fix acctno" type="text" maxlength="18" autocomplete="off" placeholder="电子帐号" id="custac" name="custac"/>
						</div>
						<div class="acctna">客户名称：<span class="name" id="d-acct-name"></span></div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label">转出金额:</label>
						<div class="input-icon">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label">操作：</label>
						<div class="input-icon">
							<button type="button" class="btn blue" id="submit">确认</button>
						</div>
					</div>
				</div>
				<div class="padd"></div>
			</form>
			<!-- END SINGLEDEBT FORM -->
		</div>
	</div>
</div>
<!-- <div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i>
		<span class="caption-subject font-green-sharp bold uppercase">转账结果</span>
	</div>
	<div class="modal-body">
	</div>
</div> -->
<script src="${ctx}/pages/cust/scripts/dpspuf.js"  type="text/javascript" ></script>
<script>
	jQuery(document).ready(function() {    
		dpspuf.init();
	});
</script>