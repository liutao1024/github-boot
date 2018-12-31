<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费累积优惠明细表</span>
			<span class="caption-helper">收费累积优惠明细表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_defn_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_defn">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">累积优惠代码</th>
						<th scope="col">累积起点</th>
						<th scope="col">累积优惠比例</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col">累积金额上限</th>
						<th scope="col">说明</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editdefnModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="600">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费累积优惠明细表属性</h4>
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
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-6 control-label">累积优惠代码</label>
											<div class="col-md-6">
												<input type="text" name="smfacd"
													class="form-control input-inline input-medium form-value"
													 placeholder="累积优惠代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">累积起点</label>
											<div class="col-md-6">
												<input type="text" name="smstrt"
													class="form-control input-inline input-medium form-value"
													 placeholder="累积起点">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">累积优惠比例</label>
											<div class="col-md-6">
												<input type="text" name="smfapc"
													class="form-control input-inline input-medium form-value"
													 placeholder="累积优惠比例">
											</div>
										</div>
								<div class="form-group">
													<label class="col-md-6 control-label">生效日期</label>
													<div class="col-md-6">
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
													<label class="col-md-6 control-label">失效日期</label>
													<div class="col-md-6">
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
										<div class="form-group">
											<label class="col-md-6 control-label">累积金额上限</label>
											<div class="col-md-6">
												<input type="text" name="smblup"
													class="form-control input-inline input-medium form-value"
													 placeholder="累积金额上限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">说明</label>
											<div class="col-md-6">
												<input type="text" name="explan"
													class="form-control input-inline input-medium form-value"
													 placeholder="说明">
											</div>
										</div>
										<div class="form-group" hidden="hidden">
											<label class="col-md-6 control-label">是否新增</label>
											<div class="col-md-6">
												<input type="text" name="inseno"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否新增" hidden="ture">
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
					<button type="button" class="btn blue" id="btn_save_defn">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpfavosmdl.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpfavosmdl.init();
	});
</script>