<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品适用范围控制表</span>
				<span class="caption-helper">管理贷款产品适用范围控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_scap_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_scap">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">适用类型</th>
							<th scope="col">机构适用标志</th>
							<th scope="col">适用范围</th>
							<th scope="col">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editscapModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品适用范围控制表</h4>
				</div>
				<div class="modal-body">
					<div style="height: 310px;">
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
												<label class="col-md-3 control-label">适用类型</label>
												<div class="col-md-9">
													<input type="text" name="scaptp"
														class="select-close form-control input-inline input-medium form-value"
														maxlength="20" placeholder="适用类型">
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-3 control-label">机构适用标志</label>
												<div class="col-md-9">
													<input type="text" name="scapfg"
														class="select-close form-control input-inline input-medium form-value"
														placeholder="机构适用标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">适用范围</label>
												<div class="col-md-9">
													<input type="text" name="scaptx"
														class="form-control input-inline input-medium form-value"
														placeholder="适用范围">
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
										<button type="button" data-dismiss="modal"
											class="btn btn-default">关闭</button>
										<button type="button" class="btn blue" id="btn_save_scap">保存</button>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
	<script src="${ctx}/pages/loan/scripts/lnfscap.js"></script>
	<script>
		$(document).ready(function() {
			lnsubobj.setparam("lnfscap", lnfscap);
		});
	</script>