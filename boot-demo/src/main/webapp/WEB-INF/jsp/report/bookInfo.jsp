<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">管理平台业务传票</span>
			<span class="caption-helper">管理平台业务传票...</span>
		</div>
	</div>
	<div class="portlet-body">
		<form class="file-form form-horizontal" id="file-form">
				<div class="col-md-7">
					<div class="form-group">
						<label class="control-label col-md-4">交易柜员</label>
						<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="q_userid" name="q_userid" class="form-control input-inline input-medium" maxlength="18" placeholder="输入交易柜员号">
					</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-4">账号</label>
						<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="q_cuacno" name="q_cuacno" class="form-control input-inline input-medium" maxlength="18" placeholder="电子账号或内部户号">
					</div>
					</div>
				</div>
				<div class="form-group col-md-7">
					<label class="control-label col-md-4">记账日期</label>
					<div class="input-icon col-md-8">
						<div class="input-group input-large date-picker input-daterange"  data-date-format="yyyymmdd">
							<input type="text" class="form-control" id="q_stadat" name="q_stadat" placeholder="输入起始日期">
							<span class="input-group-addon">
							到 </span>
							<input type="text" class="form-control" id="q_enddat" name="q_enddat" placeholder="输入结束日期">
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-5"
					style="text-align: right;">
					<button type="button" class="btn blue" id="select"
						style="padding: 5px 20px; margin-right: 55px;">查询</button>
				</div>
			</form>
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_src">
				<thead>
					<tr role="row" class="heading">
						<th width="2%"><input type="checkbox"
										class="group-checkable" data-set="#sample_1 .checkboxes" /></th>
						<th scope="col">交易日期</th>
						<th scope="col">交易流水</th>
						<th scope="col">传票号</th>
						<th scope="col">交易柜员</th>
						<th scope="col">授权柜员</th>
						<!-- <th scope="col">交易时间</th> -->
						<th scope="col">交易码</th>
						<th scope="col">交易名称</th>
						<th scope="col">交易金额</th>
						<th scope="col">备注</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="accountInfoModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "700">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">会计分录</h4>
		</div>
		<div class="modal-body">
			<table id="accountInfo" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
	</div>
	</div>
</div>
<script src="${ctx}/pages/report/scripts/bookInfo.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script>
	jQuery(document).ready(function() {
		bookInfo.init();
	});
</script>