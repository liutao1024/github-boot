<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品存入控制表列表</span>
				<span class="caption-helper">管理产品存入控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_post_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_post">
					<thead>
						<tr role="row" class="heading">
							<th width="7%">产品编号</th>
							<th width="7%">币种</th>
							<th width="7%">存入控制方式</th>
							<th width="7%">存入控制方法</th>
							<th width="7%">存入金额控制方式</th>
							<th width="7%">单次存入最小金额</th>
							<th width="7%">单次存入最大金额</th>
							<th width="7%">存入次数控制方式</th>
							<th width="7%">最小存入次数</th>
							<th width="7%">最大存入次数</th>
							<th width="7%">是否明细汇总</th>
							<th width="7%">每人限购份数</th>
							<th width="7%" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editpostModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品存入控制表</h4>
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
											<label class="col-md-3 control-label">存入控制方式</label>
											<div class="col-md-9">
												<input type="text" name="posttp"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入控制方法</label>
											<div class="col-md-9">
												<input type="text" name="postwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入控制方法">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入金额控制方式</label>
											<div class="col-md-9">
												<input type="text" name="amntwy"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="选择存入金额控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">是否明细汇总</label>
											<div class="col-md-9">
												<input type="text" name="detlfg"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="是否明细汇总">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">每人限购份数</label>
											<div class="col-md-9">
												<input type="text" name="svrule"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="输入每人限购份数" 
													onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">单次存入最小金额</label>
											<div class="col-md-9">
												<input type="text" name="miniam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次存入最小金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">单次存入最大金额</label>
											<div class="col-md-9">
												<input type="text" name="maxiam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次存入最大金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入次数控制方式</label>
											<div class="col-md-9">
												<input type="text" name="timewy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入次数控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最小存入次数</label>
											<div class="col-md-9">
												<input type="text" name="minitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最小存入次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最大存入次数</label>
											<div class="col-md-9">
												<input type="text" name="maxitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最大存入次数">
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_post">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- edtil Mondal -->
			<div id="editpostModal001" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">修改产品存入控制表</h4>
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
											<label class="col-md-3 control-label">存入控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_posttp" name="the_posttp"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入控制方法</label>
											<div class="col-md-9">
												<input type="text" id="the_postwy" name="the_postwy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="选择存入控制方法">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入金额控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_amntwy" name="the_amntwy"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="选择存入金额控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">是否明细汇总</label>
											<div class="col-md-9">
												<input type="text" id="the_detlfg" name="the_detlfg"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="是否明细汇总">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">每人限购份数</label>
											<div class="col-md-9">
												<input type="text" id="the_svrule" name="the_svrule"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="输入每人限购份数" 
													onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">单次存入最小金额</label>
											<div class="col-md-9">
												<input type="text" id="the_miniam" name="the_miniam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次存入最小金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">单次存入最大金额</label>
											<div class="col-md-9">
												<input type="text" id="the_maxiam" name="the_maxiam"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="单次存入最大金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存入次数控制方式</label>
											<div class="col-md-9">
												<input type="text" id="the_timewy" name="the_timewy"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="存入次数控制方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最小存入次数</label>
											<div class="col-md-9">
												<input type="text" id="the_minitm" name="the_minitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最小存入次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">最大存入次数</label>
											<div class="col-md-9">
												<input type="text" id="the_maxitm" name="the_maxitm"
													class="form-control input-inline input-medium form-value"
													maxlength="19" placeholder="最大存入次数">
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_post">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbpost.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>