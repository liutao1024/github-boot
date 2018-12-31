<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品违约支取利息定义</span>
				<span class="caption-helper">管理产品违约支取利息定义配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_dfintr_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_dfintr">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">币种</th>
							<th scope="col">支取利息类型</th>
							<th scope="col">利息组代码</th>
							<th scope="col">利息类型</th>
							<th scope="col">利息支付方法说明</th>
							<th scope="col">利息调整类型</th>
							<th scope="col">同时段多组利息调整选项</th>
							<th scope="col">被调整利率编号</th>
							<th scope="col">利率确定方式</th>
							<th scope="col">利率靠挡标志</th>
							<th scope="col">基准结息金额来源</th>
							<th scope="col">基准结息起始日来源</th>
							<th scope="col">结息终止日来源</th>
							<th scope="col">基准结息利率编号</th>
							<th scope="col">基准计息规则</th>
							<th scope="col">基准利率生效日选项</th>
							<th scope="col">日期分层日来源</th>
							<th scope="col">日期分层利率编号</th>
							<th scope="col">日期分层计息规则</th>
							<th scope="col">日期分层利率生效日选项</th>
							<th scope="col">金额分层来源</th>
							<th scope="col">金额分层利率编号</th>
							<th scope="col">金额分层计息规则</th>
							<th scope="col">金额分层利率生效日选项</th>
							<th scope="col">支取利息范围</th>
							<th scope="col">支取是否扣除已付利息</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editdfintrModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1080"
				data-height="500px">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品违约支取利息定义</h4>
				</div>
				<div class="modal-body">
					<div style="height: 700px;">
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
										<div class="col-md-4">
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
												<label class="col-md-3 control-label">支取利息类型</label>
												<div class="col-md-9">
													<input type="text" name="drintp"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="选择支取利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息组代码</label>
												<div class="col-md-9">
													<input type="text" name="ingpcd"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利息组代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息类型</label>
												<div class="col-md-9">
													<input type="text" name="intrtp"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息支付方法说明</label>
												<div class="col-md-9">
													<input type="text" name="drintx"
														class="form-control input-inline input-medium form-value"
														maxlength="200" placeholder="利息支付方法说明">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息调整类型</label>
												<div class="col-md-9">
													<input type="text" name="inadtp"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利息调整类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">同时段多组利息调整选项</label>
												<div class="col-md-9">
													<input type="text" name="sminad"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="同时段多组利息调整选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">被调整利率编号</label>
												<div class="col-md-9">
													<input type="text" name="adincd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="被调整利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率确定方式</label>
												<div class="col-md-9">
													<input type="text" name="insrwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率确定方式">
												</div>
											</div>

										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-3 control-label">利率靠挡标志</label>
												<div class="col-md-9">
													<input type="text" name="inclfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率靠挡标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息金额来源</label>
												<div class="col-md-9">
													<input type="text" name="bsinam"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准结息金额来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息起始日来源</label>
												<div class="col-md-9">
													<input type="text" name="bsindt"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准结息起始日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">结息终止日来源</label>
												<div class="col-md-9">
													<input type="text" name="inedsc"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="结息终止日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息利率编号</label>
												<div class="col-md-9">
													<input type="text" name="bsincd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="基准结息利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准计息规则</label>
												<div class="col-md-9">
													<input type="text" name="bsinrl"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="基准计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" name="bsinef"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层日来源</label>
												<div class="col-md-9">
													<input type="text" name="dtlvsr"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="日期分层日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层利率编号</label>
												<div class="col-md-9">
													<input type="text" name="dtsrcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="日期分层利率编号">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层计息规则</label>
												<div class="col-md-9">
													<input type="text" name="dtlvrl"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="日期分层计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" name="dtlvef"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="日期分层利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层来源</label>
												<div class="col-md-9">
													<input type="text" name="amlvsr"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="金额分层来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层利率编号</label>
												<div class="col-md-9">
													<input type="text" name="amlvcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="金额分层利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层计息规则</label>
												<div class="col-md-9">
													<input type="text" name="amlvrl"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="金额分层计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" name="amlvef"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="金额分层利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">支取利息范围</label>
												<div class="col-md-9">
													<input type="text" name="drinsc"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="支取利息范围">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">支取是否扣除已付利息</label>
												<div class="col-md-9">
													<input type="text" name="drdein"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="支取是否扣除已付利息">
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" data-dismiss="modal"
											class="btn btn-default">关闭</button>
										<button type="button" class="btn blue" id="btn_save_dfintr">保存</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 编辑form表单 -->
			<div id="editdfintrModal0002" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1080"
				data-height="500px">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品违约支取利息定义</h4>
				</div>
				<div class="modal-body">
					<div style="height: 700px;">
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
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-3 control-label">产品编号</label>
												<div class="col-md-9">
													<div>
														<input type="text" id="the_prodcd" name="the_prodcd" readOnly
															class="form-control input-inline input-medium"
															maxlength="20" placeholder="输入产品编号">
													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">币种</label>
												<div class="col-md-9">
													<input type="text" id="the_crcycd" name="the_crcycd" readOnly
														class="form-control input-inline input-medium form-value"
														maxlength="3" placeholder="选择币种">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">支取利息类型</label>
												<div class="col-md-9">
													<input type="text" id="the_drintp" name="the_drintp" readOnly
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="选择支取利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息组代码</label>
												<div class="col-md-9">
													<input type="text" id="the_ingpcd" name="the_ingpcd" readOnly
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利息组代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息类型</label>
												<div class="col-md-9">
													<input type="text" id="the_intrtp" name="the_intrtp" readOnly
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息支付方法说明</label>
												<div class="col-md-9">
													<input type="text" id="the_drintx" name="the_drintx"
														class="form-control input-inline input-medium form-value"
														maxlength="200" placeholder="利息支付方法说明">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息调整类型</label>
												<div class="col-md-9">
													<input type="text" id="the_inadtp" name="the_inadtp"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利息调整类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">同时段多组利息调整选项</label>
												<div class="col-md-9">
													<input type="text" id="the_sminad" name="the_sminad"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="同时段多组利息调整选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">被调整利率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_adincd" name="the_adincd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="被调整利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率确定方式</label>
												<div class="col-md-9">
													<input type="text" id="the_insrwy" name="the_insrwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率确定方式">
												</div>
											</div>

										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-3 control-label">利率靠挡标志</label>
												<div class="col-md-9">
													<input type="text" id="the_inclfg" name="the_inclfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率靠挡标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息金额来源</label>
												<div class="col-md-9">
													<input type="text" id="the_bsinam" name="the_bsinam"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准结息金额来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息起始日来源</label>
												<div class="col-md-9">
													<input type="text" id="the_bsindt" name="the_bsindt"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准结息起始日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">结息终止日来源</label>
												<div class="col-md-9">
													<input type="text" id="the_inedsc" name="the_inedsc"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="结息终止日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准结息利率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_bsincd" name="the_bsincd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="基准结息利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准计息规则</label>
												<div class="col-md-9">
													<input type="text" id="the_bsinrl" name="the_bsinrl"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="基准计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">基准利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" id="the_bsinef" name="the_bsinef"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="基准利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层日来源</label>
												<div class="col-md-9">
													<input type="text" id="the_dtlvsr" name="the_dtlvsr"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="日期分层日来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层利率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_dtsrcd"name="the_dtsrcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="日期分层利率编号">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层计息规则</label>
												<div class="col-md-9">
													<input type="text" id="the_dtlvrl"name="the_dtlvrl"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="日期分层计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">日期分层利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" id="the_dtlvef" name="the_dtlvef"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="日期分层利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层来源</label>
												<div class="col-md-9">
													<input type="text" id="the_amlvsr" name="the_amlvsr"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="金额分层来源">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层利率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_amlvcd"name="the_amlvcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="金额分层利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层计息规则</label>
												<div class="col-md-9">
													<input type="text" id="the_amlvrl"name="the_amlvrl"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="金额分层计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">金额分层利率生效日选项</label>
												<div class="col-md-9">
													<input type="text" id="the_amlvef" name="the_amlvef"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="金额分层利率生效日选项">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">支取利息范围</label>
												<div class="col-md-9">
													<input type="text" id="the_drinsc" name="the_drinsc"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="支取利息范围">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">支取是否扣除已付利息</label>
												<div class="col-md-9">
													<input type="text" id="the_drdein" name="the_drdein"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="支取是否扣除已付利息">
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" data-dismiss="modal"
											class="btn btn-default">关闭</button>
										<button type="button" class="btn blue" id="the_btn_save_dfintr">保存</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 结束 -->
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbdfintr.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>