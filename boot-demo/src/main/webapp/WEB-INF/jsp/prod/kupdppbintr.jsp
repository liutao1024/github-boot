<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品利息利率定义列表</span>
				<span class="caption-helper">管理产品利息利率定义配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_intr_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_intr">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">币种</th>
							<th scope="col">利息类型</th>
							<th scope="col">计息标志</th>
							<th scope="col">计税标志</th>
							<th scope="col">计息基础</th>
							<th scope="col">舍弃角分计息标志</th>
							<th scope="col">结息频率</th>
							<th scope="col">利率编号</th>
							<th scope="col">利率靠档方式</th>
							<th scope="col">利率代码类型</th>
							<th scope="col">分层计息方式</th>
							<th scope="col">计息金额模式</th>
							<th scope="col">平均余额天数计算方式</th>
							<th scope="col">利率重定价方式</th>
							<th scope="col">利率调整频率</th>
							<th scope="col">重订价利息处理方式</th>
							<th scope="col">优惠变化调整优惠标志</th>
							<th scope="col">优惠调整频率</th>
							<th scope="col">税率编号</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editintrModal" class="modal fade modal-scroll" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800" data-height="500px" style="overflow:auto;">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品利息利率定义</h4>
				</div>
				<div class="modal-body">
					<div style="height:700px;">
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
										<input type="hidden" name="prodcd" />
											<div class="form-group">
												<label class="col-md-3 control-label">币种</label>
												<div class="col-md-9">
													<input type="text" name="crcycd"
														class="form-control input-inline input-medium form-value"
														maxlength="3" placeholder="选择币种">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利息类型</label>
												<div class="col-md-9">
													<input type="text" name="intrtp"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="选择利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息标志</label>
												<div class="col-md-9">
													<input type="text" name="inbefg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计税标志</label>
												<div class="col-md-9">
													<input type="text" name="txbefg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择计税标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息基础</label>
												<div class="col-md-9">
													<input type="text" name="txbebs"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="选择计息基础">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">舍弃角分计息标志</label>
												<div class="col-md-9">
													<input type="text" name="hutxfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择舍弃角分计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">结息频率</label>
												<div class="col-md-9">
													<input type="text" name="txbefr"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="结息频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率编号</label>
												<div class="col-md-9">
													<input type="text" name="intrcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率靠档方式</label>
												<div class="col-md-9">
													<input type="text" name="intrwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率靠档方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率代码类型</label>
												<div class="col-md-9">
													<input type="text" name="incdtp"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率代码类型">
												</div>
											</div>

										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-3 control-label">分层计息方式</label>
												<div class="col-md-9">
													<input type="text" name="lyinwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="分层计息方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息金额模式</label>
												<div class="col-md-9">
													<input type="text" name="inammd"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="计息金额模式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">平均余额天数计算方式</label>
												<div class="col-md-9">
													<input type="text" name="bldyca"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="平均余额天数计算方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率重定价方式</label>
												<div class="col-md-9">
													<input type="text" name="inprwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率重定价方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率调整频率</label>
												<div class="col-md-9">
													<input type="text" name="inadlv"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利率调整频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">重订价利息处理方式</label>
												<div class="col-md-9">
													<input type="text" name="reprwy"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="重订价利息处理方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">优惠变化调整优惠标志</label>
												<div class="col-md-9">
													<input type="text" name="fvrbfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="优惠变化调整优惠标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">优惠调整频率</label>
												<div class="col-md-9">
													<input type="text" name="fvrblv"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="优惠调整频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">税率编号</label>
												<div class="col-md-9">
													<input type="text" name="taxecd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="税率编号">
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" data-dismiss="modal"
											class="btn btn-default">关闭</button>
										<button type="button" class="btn blue" id="btn_save_intr">保存</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  -->
			<div id="editintrModal0003" class="modal fade modal-scroll" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800" data-height="500px" style="overflow:auto;">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品利息利率定义</h4>
				</div>
				<div class="modal-body">
					<div style="height:700px;">
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
												<label class="col-md-3 control-label">利息类型</label>
												<div class="col-md-9">
													<input type="text" id="the_intrtp" name="the_intrtp" readOnly
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="选择利息类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息标志</label>
												<div class="col-md-9">
													<input type="text" id="the_inbefg" name="the_inbefg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计税标志</label>
												<div class="col-md-9">
													<input type="text" id="the_txbefg" name="the_txbefg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择计税标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息基础</label>
												<div class="col-md-9">
													<input type="text" id="the_txbebs" name="the_txbebs"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="选择计息基础">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">舍弃角分计息标志</label>
												<div class="col-md-9">
													<input type="text" id="the_hutxfg" name="the_hutxfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="选择舍弃角分计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">结息频率</label>
												<div class="col-md-9">
													<input type="text" id="the_txbefr" name="the_txbefr"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="结息频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_intrcd" name="the_intrcd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率靠档方式</label>
												<div class="col-md-9">
													<input type="text" id="the_intrwy" name="the_intrwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率靠档方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率代码类型</label>
												<div class="col-md-9">
													<input type="text" id="the_incdtp" name="the_incdtp"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率代码类型">
												</div>
											</div>

										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-3 control-label">分层计息方式</label>
												<div class="col-md-9">
													<input type="text" id="the_lyinwy" name="the_lyinwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="分层计息方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">计息金额模式</label>
												<div class="col-md-9">
													<input type="text" id="the_inammd" name="the_inammd"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="计息金额模式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">平均余额天数计算方式</label>
												<div class="col-md-9">
													<input type="text" id="the_bldyca" name="the_bldyca"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="平均余额天数计算方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率重定价方式</label>
												<div class="col-md-9">
													<input type="text" id="the_inprwy" name="the_inprwy"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="利率重定价方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">利率调整频率</label>
												<div class="col-md-9">
													<input type="text" id="the_inadlv" name="the_inadlv"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="利率调整频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">重订价利息处理方式</label>
												<div class="col-md-9">
													<input type="text" id="the_reprwy" name="the_reprwy"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="重订价利息处理方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">优惠变化调整优惠标志</label>
												<div class="col-md-9">
													<input type="text" id="the_fvrbfg" name="the_fvrbfg"
														class="form-control input-inline input-medium form-value"
														maxlength="1" placeholder="优惠变化调整优惠标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">优惠调整频率</label>
												<div class="col-md-9">
													<input type="text" id="the_fvrblv" name="the_fvrblv"
														class="form-control input-inline input-medium form-value"
														maxlength="8" placeholder="优惠调整频率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">税率编号</label>
												<div class="col-md-9">
													<input type="text" id="the_taxecd" name="the_taxecd"
														class="form-control input-inline input-medium form-value"
														maxlength="20" placeholder="税率编号">
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
										<button type="button" class="btn blue" id="the_btn_save_intr">保存</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--  -->
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbintr.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>