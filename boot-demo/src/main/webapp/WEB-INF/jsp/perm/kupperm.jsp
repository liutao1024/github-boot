<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">权限代码定义配置</span>
				<span class="caption-helper">权限代码定义配置...</span>
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
							<th scope="col">权限代码</th>
							<th scope="col">权限代码名称</th>
							<th scope="col">代码描述</th>
							<th scope="col">系统代码</th>
							<th scope="col">币种</th>
							<th scope="col">权限类型</th>
							<th scope="col" colspan="3">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_permcd" name="q_permcd" />
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_syscod" name="q_syscod" /> 
							</td>
							<td>
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_permtp" name="q_permtp" /> 
							</td>
							<td>
							</td>
							<td  colspan="3">
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="edittypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 340px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">权限代码定义配置</h4>
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
												<label class="col-md-4 control-label">权限代码</label>
												<div class="col-md-4">
													<input type="text" name="permcd"
														readOnly class="form-control input-inline input-medium form-value"
														placeholder="权限代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">权限代码名称</label>
												<div class="col-md-4">
													<input type="text" name="permna"
														class="form-control input-inline input-medium form-value"
														placeholder="权限代码名称">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">代码描述</label>
												<div class="col-md-4">
													<input type="text" name="pmcdtx"
														class="form-control input-inline input-medium form-value"
														placeholder="代码描述">
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">系统代码</label>
												<div class="col-md-4">
													<input type="text" name="syscod"
														class="form-control input-inline input-medium form-value"
														placeholder="系统代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">权限类型</label>
												<div class="col-md-4">
													<input type="text" name="permtp"  id="permtp"
														class="form-control input-inline input-medium form-value"
														placeholder="权限类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">币种</label>
												<div class="col-md-4">
													<input type="text" name="crcycd"  id="crcycd"
														class="form-control input-inline input-medium form-value"
														placeholder="币种">
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
	
	<div id="bianji" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">权限配置信息</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn close' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
</div>
<script src="${ctx}/pages/perm/scripts/kupperm.js"></script>
<script>
	jQuery(document).ready(function() {
		kupperm.init();
	});
</script>