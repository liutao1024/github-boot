<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">优惠计划关联维度明细</span>
			<span class="caption-helper">优惠计划关联维度明细表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_deta_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_deta">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">优惠计划代码</th>
						<th scope="col">维度类别</th>
						<th scope="col">优惠计划维度取值</th>
						<th scope="col">关联维度值下限</th>
						<th scope="col">关联维度值上限</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editdetaModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1100">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">优惠计划关联维度明细表属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
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
											<label class="col-md-6 control-label">优惠计划代码</label>
											<div class="col-md-6">
												<input type="text" name="diplcd"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="优惠计划代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">维度类别</label>
											<div class="col-md-6">
												<input type="text" name="dimecg"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="维度类别">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">优惠计划维度取值</label>
											<div class="col-md-6">
												<input type="text" name="fadmvl"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="优惠计划维度取值">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">关联维度值下限</label>
											<div class="col-md-6">
												<input type="text" name="ildmdn"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="关联维度值下限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">关联维度值上限</label>
											<div class="col-md-6">
												<input type="text" name="ildmup"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="关联维度值上限">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">生效日期</label>
													<div class="col-md-4">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="efctdt"
																maxlength="8" placeholder="输入生效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">失效日期</label>
													<div class="col-md-4">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="inefdt"
																maxlength="8" placeholder="输入失效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
										</div>												
										<div class="form-group" hidden="true">
											<label class="col-md-6 control-label">是否新增</label>
											<div class="col-md-6">
												<input type="text" name="isinst"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="是否新增" value="1">
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
					<button type="button" class="btn blue" id="btn_save_evnt">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcp/scripts/kcpfavopljo.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchrgdeta.init();
	});
</script>