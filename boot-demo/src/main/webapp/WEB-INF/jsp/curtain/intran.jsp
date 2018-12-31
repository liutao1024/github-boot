<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">单笔记账</span>
				<span class="caption-helper">单笔记账操作...</span>
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
						<label class="control-label">借方帐号：</label>
						<div class="input-icon">
							<i class="fa fa-credit-card"></i>
							<input class="form-control placeholder-no-fix acctno" type="text" maxlength="18" autocomplete="off" placeholder="借方帐号" id="acctno" name="acctno"/>
						</div>
						<div class="acctna">帐号名称：<span class="name" id="d-acct-name"></span></div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label">贷方帐号:</label>
						<div class="input-icon">
							<i class="fa fa-credit-card"></i>
							<input class="form-control placeholder-no-fix acctno" type="text" autocomplete="off" maxlength="18" placeholder="贷方帐号" id="toacct" name="toacct"/>
						</div>
						<div class="acctna">帐号名称：<span class="name" id="c-acct-name"></span></div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label">交易金额:</label>
						<div class="input-icon">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label">备注:</label>
						<div>
							<input class="form-control placeholder-no-fix" type="text" placeholder="备注信息" id="dscrtx" name="dscrtx"/>
						</div>
					</div>
				</div>
				<div class="padd"></div>
				<div class="form-actions intran-action">
					<button type="button" class="btn blue" id="submit">确认</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				
			</form>
			<!-- END SINGLEDEBT FORM -->
		</div>
	</div>
</div>
<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i>
		<span class="caption-subject font-green-sharp bold uppercase">转账结果</span>
	</div>
	<div class="modal-body">
	</div>
</div>
<script src="${ctx}/pages/curtain/scripts/intran.js" type="text/javascript" ></script>
<script>
	jQuery(document).ready(function() {    
		Intran.init();
	});
</script>