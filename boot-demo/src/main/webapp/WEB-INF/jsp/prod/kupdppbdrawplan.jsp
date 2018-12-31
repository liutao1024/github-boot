<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品支取计划表</span>
				<span class="caption-helper">管理产品支取计划配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_drawplan_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_drawplan">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">币种</th>
							<th scope="col">是否设置支取计划</th>
							<th scope="col">支取计划调整周期方式</th>
							<th scope="col">支取计划调整周期</th>
							<th scope="col">支取计划结束日期方式</th>
							<th scope="col">支取计划控制方式</th>
							<th scope="col">支取违约标准</th>
							<th scope="col">支取违约处理方式</th>
							<th scope="col">账户留存最小余额</th>
							<th scope="col">支取时结息处理标志</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editdrawplanModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品支取计划表</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="col-md-6">
									  <div class="form-group">
											<label class="col-md-3 control-label">产品编号</label>
											<div class="col-md-9">
												<div>
													<input type="text" name="prodcd" readOnly
														class="form-control input-inline input-medium"
														maxlength="20" placeholder="输入产品编号">
												</div>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">是否设置支取计划</label>
											<div class="col-md-9">
												<input type="text" name="setpwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择是否设置支取计划">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划调整周期方式</label>
											<div class="col-md-9">
												<input type="text" name="termwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取计划调整周期方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划调整周期</label>
											<div class="col-md-9">
												<input type="text" name="dradpd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="支取计划调整周期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划结束日期方式</label>
											<div class="col-md-9">
												<input type="text" name="dredwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取计划结束日期方式">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划控制方式</label>
											<div class="col-md-9">
												<input type="text" name="drcrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取计划控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取违约标准</label>
											<div class="col-md-9">
												<input type="text" name="drdfsd"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取违约标准">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取违约处理方式</label>
											<div class="col-md-9">
												<input type="text" name="drdfwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取违约处理方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">账户留存最小余额</label>
											<div class="col-md-9">
												<input type="text" name="minibl"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="账户留存最小余额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取时结息处理标志</label>
											<div class="col-md-9">
												<input type="text" name="beinfg"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder=支取时结息处理标志>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_drawplan">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--  -->
			<div id="editdrawplanModal0009" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品支取计划表</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="col-md-6">
									  <div class="form-group">
											<label class="col-md-3 control-label">产品编号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="the_prodcd" readOnly
														class="form-control input-inline input-medium"
														maxlength="20" placeholder="输入产品编号">
												</div>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" id="the_crcycd" readOnly
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">是否设置支取计划</label>
											<div class="col-md-9">
												<input type="text" id="the_setpwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择是否设置支取计划">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划调整周期方式</label>
											<div class="col-md-9">
												<input type="text" id="the_termwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取计划调整周期方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划调整周期</label>
											<div class="col-md-9">
												<input type="text" id="the_dradpd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="支取计划调整周期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划结束日期方式</label>
											<div class="col-md-9">
												<input type="text" id="the_dredwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取计划结束日期方式">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">支取计划控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_drcrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取计划控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取违约标准</label>
											<div class="col-md-9">
												<input type="text" id="the_drdfsd"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取违约标准">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取违约处理方式</label>
											<div class="col-md-9">
												<input type="text" id="the_drdfwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取违约处理方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">账户留存最小余额</label>
											<div class="col-md-9">
												<input type="text" id="the_minibl"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="账户留存最小余额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取时结息处理标志</label>
											<div class="col-md-9">
												<input type="text" id="the_beinfg"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder=支取时结息处理标志>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_drawplan">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbdrawplan.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>