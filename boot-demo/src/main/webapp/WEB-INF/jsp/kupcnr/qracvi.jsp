<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">三类账户账户视图</span>
			<span class="caption-helper">三类账户账户视图...</span>
		</div>
	</div>
	<div class="portlet-body">
		<!-- BEGIN SINGLEDEBT FORM -->
		<div class="row">
			<form class="form-horizontal control-label" role="form"
				id="report_form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-12">
					<div class="col-md-6">
						<div class="form-group">
							<label class="col-md-3 control-label">客户账号:</label>
							<div class="col-md-9">
								<input type="text" name="custac" id="custac"
									class="form-control input-inline input-medium form-value"
									maxlength="15" placeholder="选择客户账号" style="width: 100px">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<div class="col-md-9">
								<button type="button" class="btn blue" id="submit">查询</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="col-md-6">
						<div class="form-group">
							<div class="col-md-9">
								<div class="totnum">
									<font size="3">账户数量：<span class="name"
										id="d-acct-name"></span></font>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<div class="col-md-9">
								<div class="totbln">
									<font size="3">汇总余额：<span class="name" id="c-acct-name"></span></font>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="padd"></div>
			</form>
		</div>
		<div class="table-container">
			<table class="table table-striped table-bordered table-hover"
				id="maxblnbk_ajax">
				<thead>
					<tr role="row" class="heading">
						<th width="8%">客户账号</th>
						<th width="8%">账户名称</th>
						<th width="8%">证件号码</th>
						<th width="8%">负债账号</th>
						<th width="8%">账户分类</th>
						<th width="8%">开户日期</th>
						<th width="8%">账户所属机构</th>
						<th width="8%">当前账户余额</th>
						<th width="8%">商户号</th>
						<th width="8%">商户名称</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>

	</div>
</div>

<script src="${ctx}/pages/kupcnr/scripts/qracvi.js"></script>
<script>
	jQuery(document).ready(function() {
		qracvi.init();
	});
</script>