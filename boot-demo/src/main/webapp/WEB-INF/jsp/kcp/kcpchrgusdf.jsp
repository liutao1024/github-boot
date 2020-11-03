<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">公式自定义表</span>
			<span class="caption-helper">管理公式自定义表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_usdf_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_usdf">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">收费公式代码</th>
						<th scope="col">序号</th>
						<th scope="col">字段名称</th>
						<th scope="col">字段值来源</th>
						<th scope="col">字段值</th>
						<th scope="col">说明</th>
						<th scope="col">备注信息</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editusdfModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="800">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">公式自定义表属性</h4>
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
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">收费公式代码</label>
											<div class="col-md-4">
												<input type="text" name="chrgfm"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费公式代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">序号</label>
											<div class="col-md-4">
												<input type="text" name="sequno"
													class="form-control input-inline input-medium form-value"
													 placeholder="序号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">字段名称</label>
											<div class="col-md-4">
												<input type="text" name="fildna"
													class="form-control input-inline input-medium form-value"
													 placeholder="字段名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">字段值来源</label>
											<div class="col-md-4">
												<input type="text" name="valusr"
													class="form-control input-inline input-medium form-value"
													 placeholder="字段值来源">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">字段值</label>
											<div class="col-md-4">
												<input type="text" name="fildvl"
													class="form-control input-inline input-medium form-value"
													 placeholder="字段值">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">说明</label>
											<div class="col-md-4">
												<input type="text" name="explan"
													class="form-control input-inline input-medium form-value"
													 placeholder="说明">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">备注信息</label>
											<div class="col-md-4">
												<input type="text" name="remark"
													class="form-control input-inline input-medium form-value"
													 placeholder="备注信息">
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
					<button type="button" class="btn blue" id="btn_save_usdf">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpchrgusdf.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchrgusdf.init();
	});
</script>