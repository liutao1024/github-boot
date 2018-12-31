<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">额度类型属性表</span>
				<span class="caption-helper">管理额度类型配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_type_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_type">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">额度类型编号</th>
							<th scope="col">额度级别</th>
							<th scope="col">业务种类编号</th>
							<th scope="col">额度产品号</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr>
							<td><input type="text" class="form-control form-filter input-sm" id="q_prodcd" name="q_prodcd" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td><button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button></td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="edittypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 280px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">额度类型配置属性</h4>
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
												<label class="col-md-4 control-label">额度类型编号</label>
												<div class="col-md-4">
													<input type="text" name="cltpcd"
														class="form-control input-inline input-medium form-value"
														placeholder="额度类型编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">额度级别</label>
												<div class="col-md-4">
													<input type="text" name="cllevl"
														class="form-control input-inline input-medium form-value"
														placeholder="选择额度级别">
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">业务种类编号</label>
												<div class="col-md-4">
													<input type="text" name="busicd"
														class="form-control input-inline input-medium form-value"
														placeholder="选择业务种类编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">额度产品号</label>
												<div class="col-md-4">
													<input type="text" name="prodcd"
														class="form-control input-inline input-medium form-value"
														placeholder="额度产品号">
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
						<button type="button" class="btn blue" id="btn_save_type">保存</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/crlimit/scripts/kclprodtype.js"></script>
<script>
	jQuery(document).ready(function() {
		kclprodtype.init();
	});
</script>