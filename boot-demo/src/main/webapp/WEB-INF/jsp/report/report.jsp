<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">查询报表</span>
				<span class="caption-helper">查询报表...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal control-label" role="form"
				id="report_form">
				<div class="form-body">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！<span class="msg"></span>
					</div>
					<div class="alert alert-success display-hide">
						<button class="close" data-close="alert"></button>
						表单提交成功！<span class="msg"></span>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label class="col-md-3 control-label">选择报表</label>
							<div class="col-md-9">
								<div>
									<input type="text" name="report"
										class="form-control input-inline input-medium form-value"
										placeholder="选择报表">
								</div>
							</div>
						</div>
						<div class="form-group"></div>
						<div class="form-group"></div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">机构号</label>
							<div class="col-md-9">
								<div>
									<input type="text" name="brchno"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="选择机构号">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="col-md-9">
								<input type="text" name="crcycd"
									class="form-control input-inline input-medium form-value"
									maxlength="3" placeholder="选择币种">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">日期</label>
							<div class="col-md-9">
								<input type="text" name="acctdt"
									class="form-control input-inline input-medium form-value"
									maxlength="8" placeholder="选择日期">
							</div>
						</div>
						<div>
							<button type="button" id="find_report" class="btn blue">查看报表</button>
							<button type="button" id="load_report" class="btn blue">下载报表</button>
						</div>
					</div>
				</div>
			</form>
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
</div>
<script src="${ctx}/pages/report/scripts/report.js"></script>
<script>
	jQuery(document).ready(function() {
		report.init();
	});
</script>