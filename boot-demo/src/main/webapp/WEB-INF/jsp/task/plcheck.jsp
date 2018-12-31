<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">核心批量任务查询</span>
			<span class="caption-helper">核心批量任务查询...</span>
		</div>
	</div>
	<div class="portlet-body">
		<form class="form-horizontal cust-form" id="plcheck_form" role="form">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>输入交易参数有误</span>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">批量交易组ID</label>
				<div class="col-md-9">
					<input type="text" name="jyzbsh" maxlength="10"
						class="form-control input-inline input-medium"
						placeholder="批量交易组ID">
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">批量交易ID</label>
				<div class="col-md-9">
					<input type="text" name="jiayma" id="jiayma" maxlength="27"
						class="form-control input-inline input-medium" placeholder="批量交易ID">
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">开始日期</label>
				<div class="input-group col-md-9 input-medium date date-picker "
					data-date-format="yyyymmdd" data-date-viewmode="years"
					data-date-minviewmode="months" style="margin-left: 145px;">
					<input type="text" class="form-control" id="stdate" name="stdate">
					<span class="input-group-btn">
						<button class="btn default" type="button">
							<i class="fa fa-calendar"></i>
						</button>
					</span>
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">结束日期</label>
				<div class="input-group col-md-9 input-medium date date-picker "
					data-date-format="yyyymmdd" data-date-viewmode="years"
					data-date-minviewmode="months" style="margin-left: 145px;">
					<input type="text" class="form-control" id="eddate" name="eddate">
					<span class="input-group-btn">
						<button class="btn default" type="button">
							<i class="fa fa-calendar"></i>
						</button>
					</span>
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">作业执行状态</label>
				<div class="col-md-9">
					<input type="text" name="status"
						class="form-control input-inline input-medium"
						placeholder="作业执行状态">
				</div>
			</div>
			<div class="cif-clear"></div>
			<div class="form-actions cust-action">
				<button type="button" class="btn blue" name="submit">查询</button>
				<button type="button" class="btn gray" name="cancle">清空</button>
			</div>
		</form>
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="plcheck_table">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">批量交易组ID</th>
						<th scope="col">批量交易ID</th>
						<th scope="col">批量交易中文名称</th>
						<th scope="col">交易开始时间</th>
						<th scope="col">交易结束时间</th>
						<th scope="col">批量交易组执行耗时</th>
						<th scope="col">作业执行状态</th>
						<th scope="col">错误信息</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/task/scripts/plcheck.js"></script>
<script>
	jQuery(document).ready(function() {
		plcheck.init();
	});
</script>