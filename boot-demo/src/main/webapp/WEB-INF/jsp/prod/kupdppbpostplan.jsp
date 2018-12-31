<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品存入计划表列表</span>
				<span class="caption-helper">管理产品存入计划配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_postplan_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_postplan">
					<thead>
						<tr role="row" class="heading">
							<th width="6%">产品编号</th>
							<th width="10%">币种</th>
							<th width="6%">设置存入计划标志</th>
							<th width="6%">存入计划调整方式</th>
							<th width="6%">存入计划调整周期</th>
							<th width="6%">存入计划结束日期方式</th>
							<th width="6%">存入计划生成方式</th>
							<th width="6%">漏存补足宽限期</th>
							<th width="6%">存入漏补方式</th>
							<th width="6%">最大补足次数</th>
							<th width="6%">存入违约标准</th>
							<th width="6%">漏存次数</th>
							<th width="6%">存入违约处理方式</th>
							<th width="6%">存入计划控制方式</th>
							<th width="6%">账户留存最大余额</th>
							<th width="6%" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editpostplanModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品存入计划表</h4>
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
									<input type="hidden" name="prodcd">
										<div class="form-group">
											<label class="col-md-4 control-label">币种</label>
											<div class="col-md-8">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">设置存入计划标志</label>
											<div class="col-md-8">
												<input type="text" name="planfg"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="设置存入计划标志">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划调整方式</label>
											<div class="col-md-8">
												<input type="text" name="planwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入计划调整方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划调整周期</label>
											<div class="col-md-8">
												<input type="text" name="adjtpd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="存入计划调整周期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划结束日期方式</label>
											<div class="col-md-8">
												<input type="text" name="endtwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划结束日期方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划生成方式</label>
											<div class="col-md-8">
												<input type="text" name="gentwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划生成方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">漏存补足宽限期</label>
											<div class="col-md-8">
												<input type="text" name="svlepd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="漏存补足宽限期">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">存入漏补方式</label>
											<div class="col-md-8">
												<input type="text" name="svlewy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入漏补方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">最大补足次数</label>
											<div class="col-md-8">
												<input type="text" name="maxisp"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最大补足次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入违约标准</label>
											<div class="col-md-8">
												<input type="text" name="dfltsd"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入违约标准">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">漏存次数</label>
											<div class="col-md-8">
												<input type="text" name="svletm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="漏存次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入违约处理方式</label>
											<div class="col-md-8">
												<input type="text" name="dfltwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入违约处理方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划控制方式</label>
											<div class="col-md-8">
												<input type="text" name="pscrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">账户留存最大余额</label>
											<div class="col-md-8">
												<input type="text" name="maxibl"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="账户留存最大余额">
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_postplan">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--  -->
			<div id="editpostplanModal0007" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品存入计划表</h4>
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
											<label class="col-md-4 control-label">币种</label>
											<div class="col-md-8">
												<input type="text" id="the_crcycd"  readOnly
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">设置存入计划标志</label>
											<div class="col-md-8">
												<input type="text" id="the_planfg"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="设置存入计划标志">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划调整方式</label>
											<div class="col-md-8">
												<input type="text" id="the_planwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入计划调整方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划调整周期</label>
											<div class="col-md-8">
												<input type="text" id="the_adjtpd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="存入计划调整周期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划结束日期方式</label>
											<div class="col-md-8">
												<input type="text" id="the_endtwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划结束日期方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划生成方式</label>
											<div class="col-md-8">
												<input type="text" id="the_gentwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划生成方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">漏存补足宽限期</label>
											<div class="col-md-8">
												<input type="text" id="the_svlepd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="漏存补足宽限期">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">存入漏补方式</label>
											<div class="col-md-8">
												<input type="text" id="the_svlewy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入漏补方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">最大补足次数</label>
											<div class="col-md-8">
												<input type="text" id="the_maxisp"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最大补足次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入违约标准</label>
											<div class="col-md-8">
												<input type="text" id="the_dfltsd"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入违约标准">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">漏存次数</label>
											<div class="col-md-8">
												<input type="text" id="the_svletm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="漏存次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入违约处理方式</label>
											<div class="col-md-8">
												<input type="text" id="the_dfltwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入违约处理方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">存入计划控制方式</label>
											<div class="col-md-8">
												<input type="text" id="the_pscrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入计划控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">账户留存最大余额</label>
											<div class="col-md-8">
												<input type="text" id="the_maxibl"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="账户留存最大余额">
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_postplan">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbpostplan.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>