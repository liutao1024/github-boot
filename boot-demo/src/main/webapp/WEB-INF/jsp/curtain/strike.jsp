<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">冲账操作</span>
				<span class="caption-helper">冲账操作...</span>
			</div>
		</div>		
		<div class="portlet-body">
			<form id="qry_form" class="form-horizontal">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-5">
					<label class="col-md-3 control-label">账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="账号(电子账号或内部账号)" id="cuacno" name="cuacno" />
					</div>
				</div>
				<div class="form-group col-md-7">
					<label class="control-label col-md-3">日期</label>
					<div class="input-icon col-md-9">
						<div class="input-group input-large date-picker input-daterange"  data-date-format="yyyymmdd">
							<input type="text" class="form-control" id="bgindt" name="from" placeholder="输入起始日期">
							<span class="input-group-addon">
							到 </span>
							<input type="text" class="form-control" id="endddt" name="to" placeholder="输入结束日期">
						</div>
					</div>
				</div>
				<div class="form-actions">
					<button type="button" id="qry_btn" class="btn blue">查询交易</button>
				</div>
			</form>
			<div class="cif-clear"></div>
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover"
					id="transq_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="17%">主交易流水</th>
							<th width="8%">交易码</th>
							<th width="18%">交易名称</th>
							<th width="10%">交易日期</th>
							<th width="10%">交易时间</th>
							<th width="7%">币种</th>
							<th width="10%">借贷标志</th>
							<th width="10%">交易金额</th>
							<th width="10%">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div id="editModal" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close closeModal" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">冲账信息</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="edit_form" action=""
					method="post">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							提交表单正确！后台信息 ： <span class="msg"></span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易流水号</label>
							<div class="col-md-9">
								<input type="text" id="mntrsq" name="mntrsq" readonly
									class="form-control input-inline input-medium" maxlength="32">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">说明</label>
							<div class="col-md-9">
								<input type="text" id="remark" name="remark"
									class="form-control input-inline input-medium" maxlength="200"
									placeholder="说明">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal"
							class="btn btn-default closeModal">关闭</button>
						<button type="button" class="btn blue" id="save_btn">提交</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/curtain/scripts/strike.js"></script>
<script>
	jQuery(document).ready(function() {
		Strike.init();
	});
</script>