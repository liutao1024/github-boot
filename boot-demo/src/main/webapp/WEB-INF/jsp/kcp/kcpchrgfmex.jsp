<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费公式解析表</span>
			<span class="caption-helper">管理收费公式解析表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_fmex_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_fmex">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">收费代码</th>
						<th scope="col">场景代码</th>
						<th scope="col">货币代号</th>
						<th scope="col">收费公式代码</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editfmexModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="800">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费公式解析表属性</h4>
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
											<label class="col-md-4 control-label">收费代码</label>
											<div class="col-md-4">
												<input type="text" name="chrgcd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">场景代码</label>
											<div class="col-md-4">
												<input type="text" name="scencd"
													class="form-control input-inline input-medium form-value"
													 placeholder="场景代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">货币代号</label>
											<div class="col-md-4">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													 placeholder="货币代号">
											</div>
										</div>
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
											<label class="col-md-4 control-label">生效日期</label>
											<div class="col-md-4">
												<input type="text" name="efctdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="生效日期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">失效日期</label>
											<div class="col-md-4">
												<input type="text" name="inefdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="失效日期">
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
					<button type="button" class="btn blue" id="btn_save_fmex">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpchrgfmex.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchrgfmex.init();
	});
</script>