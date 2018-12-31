<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品支取控制表列表</span>
				<span class="caption-helper">产品支取控制控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_draw_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_draw">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">币种</th>
							<th scope="col">支取控制方式</th>
							<th scope="col">支取控制方法</th>
							<th scope="col">自定义控制方式</th>
							<th scope="col">支取预约方式</th>
							<th scope="col">支取金额控制方式</th>
							<th scope="col">单次支取最小金额</th>
							<th scope="col">单次支取最大金额</th>
							<th scope="col">支取次数控制方式</th>
							<th scope="col">最小支取次数</th>
							<th scope="col">最大支取次数</th>
							<th scope="col">支取规则</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editdrawModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品支取控制表</h4>
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
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取控制方式</label>
											<div class="col-md-9">
												<input type="text" name="drawtp"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取控制方法</label>
											<div class="col-md-9">
												<input type="text" name="ctrlwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取控制方法">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">自定义控制方式</label>
											<div class="col-md-9">
												<input type="text" name="selfwy"
													class="form-control input-inline input-medium form-value"
													maxlength="4" placeholder="自定义控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取预约方式</label>
											<div class="col-md-9">
												<input type="text" name="ordrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取预约方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取金额控制方式</label>
											<div class="col-md-9">
												<input type="text" name="dramwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取金额控制方式">
											</div>
										</div>
									</div>
									<div class="col-md-6">										
										<div class="form-group">
											<label class="col-md-3 control-label">单次支取最小金额</label>
											<div class="col-md-9">
												<input type="text" name="drmiam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次支取最小金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">单次支取最大金额</label>
											<div class="col-md-9">
												<input type="text" name="drmxam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次支取最大金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取次数控制方式</label>
											<div class="col-md-9">
												<input type="text" name="drtmwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取次数控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最小支取次数</label>
											<div class="col-md-9">
												<input type="text" name="drmitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder=最小支取次数>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最大支取次数</label>
											<div class="col-md-9">
												<input type="text" name="drmxtm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder=最大支取次数>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取规则</label>
											<div class="col-md-9">
												<input type="text" name="drrule"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder=支取规则>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_draw">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- 编辑 -->
			<div id="editdrawModal0008" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品支取控制表</h4>
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
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" id="the_crcycd" readOnly
													class="form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_drawtp"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取控制方法</label>
											<div class="col-md-9">
												<input type="text" id="the_ctrlwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择支取控制方法">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">自定义控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_selfwy"
													class="form-control input-inline input-medium form-value"
													maxlength="4" placeholder="自定义控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取预约方式</label>
											<div class="col-md-9">
												<input type="text" id="the_ordrwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取预约方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取金额控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_dramwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取金额控制方式">
											</div>
										</div>
									</div>
									<div class="col-md-6">										
										<div class="form-group">
											<label class="col-md-3 control-label">单次支取最小金额</label>
											<div class="col-md-9">
												<input type="text" id="the_drmiam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次支取最小金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">单次支取最大金额</label>
											<div class="col-md-9">
												<input type="text" id="the_drmxam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次支取最大金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取次数控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_drtmwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="支取次数控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最小支取次数</label>
											<div class="col-md-9">
												<input type="text" id="the_drmitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder=最小支取次数>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最大支取次数</label>
											<div class="col-md-9">
												<input type="text" id="the_drmxtm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder=最大支取次数>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">支取规则</label>
											<div class="col-md-9">
												<input type="text" id="the_drrule"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder=支取规则>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_draw">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbdraw.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>