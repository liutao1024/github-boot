<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- 	<div class="note note-danger note-bordered">
		<p>
			 INFO:这是一个前端demo，数据取自json文件
		</p>
	</div> -->
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-user font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">角色管理</span>
				<span class="caption-helper">角色</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" id="adrole_set">
				<div class='table-actions-wrapper'>
					<span></span>
					<button id='add_btn'
						class='btn btn-sm green table-group-action-submit'>新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="role_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="16%">注册机构号</th>
							<th width="16%">权限类型</th>
							<th width="16%">角色号</th>
							<th width="16%">角色名称</th>

							<th width="36%" colspan="3">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td></td>
							<td><input type="hidden"
								class="form-control form-filter input-sm" name="q_authType"
								id="q_authType" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" name="q_roleCd"
								id="q_roleCd" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" name="q_roleName"
								id="q_roleName" /></td>

							<td colspan="3">
								<button class="btn btn-sm yellow filter-submit margin-bottom">
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
		<div class="inbox-content"></div>
		<!-- 修改操作员弹出窗口 -->
		<div id="editModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">角色信息</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<form class="form-horizontal" role="form" id="edit_form"
							action="/services/rest/auth/saverole" method="post">
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
										<input type="text" id="registerCd" name="registerCd" readOnly
											class="form-control input-inline input-medium" maxlength="19">
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">权限类型</label>
									<div class="col-md-9">
										<input type="hidden" id="authType" name="authType" readOnly
											class="form-control input-inline input-medium" maxlength="19"
											placeholder="输入权限类型">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">角色编号</label>
									<div class="col-md-9">
										<input type="text" id="roleCd" name="roleCd" readOnly
											class="form-control input-inline input-medium" maxlength="19"
											placeholder="输入角色编号">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">角色名称</label>
									<div class="col-md-9">
										<input type="text" id="roleName" name="roleName"
											class="form-control input-inline input-medium" maxlength="50"
											placeholder="输入角色名称">
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" data-dismiss="modal"
									class="btn btn-default closeModal">关闭</button>
								<button type="submit" class="btn blue" id="sub_btn">保存</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>

<script src="${ctx}/pages/auth/scripts/role.js"></script>
<script>
	jQuery(document).ready(function() {
		Role.init();
	});
</script>
