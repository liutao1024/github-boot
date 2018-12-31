<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div aria-hidden="true" style="display: none;" id="edit_setting"
	class="modal fade" tabindex="-1" data-width="900">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">权限信息</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_btn_set">
							<div class='table-actions-wrapper'>
								<span></span>
								<button id='add_Auth_btn'
									class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="role_auth_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="20%">注册机构号</th>
										<th width="20%">权限类型</th>
										<th width="20%">角色号</th>
										<th width="20%">权限编号</th>
										<th width="20%">操作</th>
									</tr>
									<tr role="row" class="filter">
										<td><input type="hidden"
											class="form-control form-filter input-sm" id="qq_registerCd" /></td>
										<td><input type="hidden"
											class="form-control form-filter input-sm" id="qq_authType" /></td>
										<td><input type="hidden"
											class="form-control form-filter input-sm" id="qq_roleCd" /></td>
										<td><input type="text"
											class="form-control form-filter input-sm" name="qq_authCd" /></td>
										<td>
											<button class="btn btn-sm yellow filter-submit margin-bottom"
												id="find_btn">
												<i class="fa fa-search"></i> 查询
											</button>
											<button class="btn btn-sm red filter-cancel">
												<i class="fa fa-times"></i> 清空
											</button>
										</td>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal"
						class="btn btn-default closeModal">关闭</button>
					<button type="button" class="btn blue" id="sub_btn">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 修改权限弹出窗口 -->
<div id="setAuthModal" class="modal fade setauth" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close closeModal" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">角色权限</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="edit_auth_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							提交表单正确！后台信息 ： <span class="msg"></span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">注册机构号</label>
							<div class="col-md-9">
								<input type="text" id="Auth_registerCd" name="registerCd"
									readOnly class="form-control input-inline input-medium"
									maxlength="19">
							</div>
						</div>

						<div class="form-group">
							<label class="col-md-3 control-label">权限类型</label>
							<div class="col-md-9">
								<input type="text" id="Auth_authType" name="authType" readOnly
									class="form-control input-inline input-medium" maxlength="1"
									placeholder="输入权限类型">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">角色编号</label>
							<div class="col-md-9">
								<input type="text" id="Auth_roleCd" name="roleCd" readOnly
									class="form-control input-inline input-medium" maxlength="19"
									placeholder="输入角色编号">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">菜单权限</label>
							<div class="col-md-9">
								<input type="hidden" id="Auth_authCd" name="authCd"
									class="select-close-1 form-control input-inline" maxlength="19"
									placeholder="输入权限编号">
							</div>
						</div>

					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal"
							class="btn btn-default closeModal">关闭</button>
						<button type="button" class="btn blue" id="subAuth_btn">保存</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/auth/scripts/role_auth.js"></script>