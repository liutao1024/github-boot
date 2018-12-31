<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">红包积分产品红包积分核算控制列表</span>
				<span class="caption-helper">红包积分产品红包积分核算控制表配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_bsi_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_scap">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品号</th>
							<th scope="col">产品名称</th>
							<th scope="col">产品类型</th>
							<th scope="col">核算代码</th>
							<th scope="col">核算账号</th>
							<th scope="col">状态</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editsBsiModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">红包积分核算控制表定义</h4>
				</div>
				<div class="modal-body">
					<div style="height: 310px;">
						<div class="row">
							<div class="col-md-12">
								<form class="form-horizontal" role="form" id="addBsiForm">
									<div class="form-body">
										<div class="alert alert-danger display-hide">
											<button class="close" data-close="alert"></button>
											输入有误，请检查下面表单！<span class="msg"></span>
										</div>
										<div class="alert alert-success display-hide">
											<button class="close" data-close="alert"></button>
											表单提交成功！<span class="msg"></span>
										</div>
										<!--  start-->
			
											<div class="form-group">
												<label class="col-md-3 control-label">产品号</label>
												<div class="col-md-9">
													<input type="text" name="prodcd"
														class="form-control input-inline input-medium form-value"
														maxlength="10" placeholder="产品号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">产品名称</label>
												<div class="col-md-9">
													<input type="text" name="prodna"
														class="form-control input-inline input-medium form-value"
														maxlength="80" placeholder="输入产品名称">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">产品类型</label>
												<div class="col-md-9">
													<input type="text" name="prodtp"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="请选择产品类型">
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3 control-label">核算代码</label>
												<div class="col-md-9">
													<input type="text" name="dtitcd"
														class="form-control input-inline input-medium form-value"
														maxlength="10" placeholder="请输入核算代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">核算账号</label>
												<div class="col-md-9">
													<input type="text" name="acctno"
														class="form-control input-inline input-medium form-value"
														maxlength="10" placeholder="请输入核算账号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">状态</label>
												<div class="col-md-9">
													<input type="text" name="parmst"
														class="form-control input-inline input-medium form-value"
														maxlength="2" placeholder="请选择是否有效">
												</div>
											</div>
											<!--  end -->
							
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_bsi">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/acprod/scripts/acbusi.js"></script>
<script>
	$(document).ready(function() {
		jQuery(document).ready(function() {
			acbusi.init();
		});
	});
</script>