<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费事件参数表</span>
			<span class="caption-helper">管理收费事件参数表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_defn_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_defn">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">收费事件编号</th>
						<th scope="col">模块</th>
						<th scope="col">说明信息</th>
						<th scope="col">备用字段</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editdefnModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="600">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费事件参数表属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-6 control-label">收费事件编号</label>
											<div class="col-md-6">
												<input type="text" name="chevno"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费事件编号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">模块</label>
											<div class="col-md-6">
												<input type="text" name="module"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择模块">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">说明信息</label>
											<div class="col-md-6">
												<input type="text" name="expmsg"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择币种兑换">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">备用字段</label>
											<div class="col-md-6">
												<input type="text" name="bkfied"
													class="form-control input-inline input-medium form-value"
													 placeholder="备用字段">
											</div>
										</div>
										<div class="form-group" hidden="true">
											<label class="col-md-6 control-label">是否新增</label>
											<div class="col-md-6">
												<input type="text" name="isinst"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否新增">
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
					<button type="button" class="btn blue" id="btn_save_defn">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpchevdefn.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchevdefn.init();
	});
</script>