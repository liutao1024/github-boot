<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品客户通知属性表</span>
				<span class="caption-helper">管理贷款产品客户通知属性表配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_note_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_note">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">正常提前通知</th>
							<th scope="col">通知提前天数</th>
							<th scope="col">逾期催收通知</th>
							<th scope="col">通知间隔天数</th>
							<th scope="col">利率变更通知</th>
							<th scope="col">余额变更通知</th>
							<th scope="col">客户回单打印</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editnoteModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品客户通知属性表</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">产品代码</label>
											<div class="col-md-9">
												<input type="text" name="prodcd"
													class="form-control input-inline input-medium form-value"
													readOnly placeholder="产品代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">正常提前通知</label>
											<div class="col-md-9">
												<input type="text" name="isnorm"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="正常提前通知">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">通知提前天数</label>
											<div class="col-md-9">
												<input type="text" name="bfdays"
													class="form-control input-inline input-medium form-value"
													placeholder="通知提前天数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">逾期催收通知</label>
											<div class="col-md-9">
												<input type="text" name="isovdu"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="逾期催收通知">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">通知间隔天数</label>
											<div class="col-md-9">
												<input type="text" name="evdays"
													class="form-control input-inline input-medium form-value"
													placeholder="通知间隔天数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率变更通知</label>
											<div class="col-md-9">
												<input type="text" name="isirrv"
													class="select-close form-control input-inline input-medium form-value"
													maxlength="20" placeholder="利率变更通知">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">余额变更通知</label>
											<div class="col-md-9">
												<input type="text" name="isblch"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="余额变更通知">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">客户回单打印</label>
											<div class="col-md-9">
												<input type="text" name="isprnt"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="客户回单打印">
											</div>
										</div>
									</div>
								</div>

							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_note">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfnote.js"></script>
<script>
	jQuery(document).ready(function() {
		lnsubobj.setparam("lnfnote", lnfnote);
	});
</script>