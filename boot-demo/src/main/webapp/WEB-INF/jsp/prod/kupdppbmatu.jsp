<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品到期控制表列表</span>
				<span class="caption-helper">管理产品到期控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_matu_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_matu">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">产品编号</th>
							<th width="8%">币种</th>
							<th width="8%">遇节假日处理方式</th>
							<th width="8%">是否根据存款顺延到期日</th>
							<th width="8%">到期宽限期</th>
							<th width="8%">允许转存标志</th>
							<th width="8%">可以更换转存产品号</th>
							<th width="8%">转存产品</th>
							<th width="8%">转存利率调整方式</th>
							<th width="8%" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editmatuModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品到期控制表</h4>
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
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="text" name="crcycd"
												class="form-control input-inline input-medium" maxlength="3"
												placeholder="选择货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">是否根据存款顺延到期日</label>
										<div class="col-md-9">
											<input type="text" name="delyfg"
												class="form-control input-inline input-medium"
												placeholder="是否根据存款顺延到期日">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">到期宽限期</label>
										<div class="col-md-9">
											<input type="text" name="matupd"
												class="form-control input-inline input-medium"
												placeholder="到期宽限期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">允许转存标志</label>
										<div class="col-md-9">
											<input type="text" name="trdpfg"
												class="form-control input-inline input-medium"
												placeholder="允许转存标志">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">可以更换转存产品号</label>
										<div class="col-md-9">
											<input type="text" name="trpdfg"
												class="form-control input-inline input-medium"
												placeholder="可以更换转存产品号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">转存产品</label>
										<div class="col-md-9">
											<input type="text" name="trprod"
												class="form-control input-inline input-medium"
												placeholder="转存产品">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">转存利率调整方式</label>
										<div class="col-md-9">
											<input type="text" name="trinwy"
												class="form-control input-inline input-medium"
												placeholder="转存利率调整方式">
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_matu">保存</button>
				</div>
			</div>
			<!-- bianji -->
			<div id="editmatuModal0006" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品到期控制表</h4>
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
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="text" id="the_crcycd" name="the_crcycd" readOnly
												class="form-control input-inline input-medium" maxlength="3"
												placeholder="选择货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">是否根据存款顺延到期日</label>
										<div class="col-md-9">
											<input type="text" id="the_delyfg" name="the_delyfg"
												class="form-control input-inline input-medium"
												placeholder="是否根据存款顺延到期日">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">到期宽限期</label>
										<div class="col-md-9">
											<input type="text" id="the_matupd" name="the_matupd"
												class="form-control input-inline input-medium"
												placeholder="到期宽限期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">允许转存标志</label>
										<div class="col-md-9">
											<input type="text" id="the_trdpfg" name="the_trdpfg"
												class="form-control input-inline input-medium"
												placeholder="允许转存标志">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">可以更换转存产品号</label>
										<div class="col-md-9">
											<input type="text" id="the_trpdfg" name="the_trpdfg"
												class="form-control input-inline input-medium"
												placeholder="可以更换转存产品号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">转存产品</label>
										<div class="col-md-9">
											<input type="text" id="the_trprod" name="the_trprod"
												class="form-control input-inline input-medium"
												placeholder="转存产品">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">转存利率调整方式</label>
										<div class="col-md-9">
											<input type="text" id="the_trinwy" name="the_trinwy"
												class="form-control input-inline input-medium"
												placeholder="转存利率调整方式">
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="the_btn_save_matu">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbmatu.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>