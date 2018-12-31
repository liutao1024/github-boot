<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费公式定义表</span>
			<span class="caption-helper">管理收费公式定义表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_fmdf_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_fmdf">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">收费公式代码</th>
						<th scope="col">公式名称</th>
						<th scope="col">文件依据</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col">是否包含下限</th>
						<th scope="col">备用字段</th>
						<th scope="col" colspan="3">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editfmdfModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="800">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费公式定义表属性</h4>
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
											<label class="col-md-4 control-label">公式名称</label>
											<div class="col-md-4">
												<input type="text" name="fmunam"
													class="form-control input-inline input-medium form-value"
													 placeholder="公式名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">文件依据</label>
											<div class="col-md-4">
												<input type="text" name="filebs"
													class="form-control input-inline input-medium form-value"
													 placeholder="文件依据">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">生效日期</label>
											<div class="col-md-4">
												<input type="text" name="efctdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="生效日期">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">失效日期</label>
											<div class="col-md-4">
												<input type="text" name="inefdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="失效日期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">是否包含下限</label>
											<div class="col-md-4">
												<input type="text" name="inclfg"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否包含下限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">备用字段</label>
											<div class="col-md-4">
												<input type="text" name="bkfied"
													class="form-control input-inline input-medium form-value"
													 placeholder="备用字段">
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
					<button type="button" class="btn blue" id="btn_save_fmdf">保存</button>
				</div>
			</div>
		</div>
		
			<!-- edit mode start -->
		<div id="bianji" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">收费公式明细表</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load">
				<jsp:include page="/WEB-INF/jsp/kcp/kcpchrgfmdt.jsp"></jsp:include>
			</div>
			<div class="modal-footer col-md-12">
				<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			</div>
		</div>
		<!-- edit mode end -->
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpchrgfmdf.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchrgfmdf.init();
	});
</script>