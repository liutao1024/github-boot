<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">菜单管理</span>
			</div>
			<div class="inputs">
				<div class="portlet-input input-inline input-medium ">
					<div class="input-icon right">
						<i class="icon-magnifier"></i> <input type="text" id="qryApp"
							class="form-control form-control-solid" placeholder="菜单名称查询">
					</div>
				</div>
			</div>
		</div>
		<div class="portlet-body">
		<div class="row">
				<div class="col-md-9">
					<button type="button" id="add_fu" class="btn blue">新增主菜单</button>
				</div>
			</div>
			<div id="app_tree" class="tree-demo"></div>			
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">菜单详细信息</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal" role="form" id="upd_form">
				<div class="form-body">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！<span class="msg"></span>
					</div>
					<div class="alert alert-success display-hide">
						<button class="close" data-close="alert"></button>
						表单提交成功！<span class="msg"></span>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">菜单编号</label>
						<div class="col-md-9">
							<input type="text" class="form-control" readOnly maxlength="19"
								placeholder="唯一标识菜单编号" id="menu_id" name="authCd">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">菜单名称</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="50"
								placeholder="菜单名称" id="menu_name" name="menuName">
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">菜单层级</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="1" readOnly
								placeholder="菜单层级" id="menu_level" name="rank">
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">父级</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="19" readOnly
								placeholder="父级菜单编号" id="menu_parent" name="parentAuthCd">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">菜单图标</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="19"
								placeholder="Example:fa fa-th" id="menu_iconfg" name="iconfg">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">菜单url</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="100"
								placeholder="Example:/prod/period" id="menu_url" name="authUrl">
						</div>
					</div>
				</div>
				<div class="form-actions">
					<div class="row">
						<div class="col-md-offset-3 col-md-9">
							<button type="button" id="upd_btn" class="btn blue">保存</button>
							<button type="button" id="clear_upd" class="btn red">清空</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<!-- edit modal -->
<div id="myModal" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i> <span
			class="caption-subject font-green-sharp bold uppercase">新增菜单详情</span>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="myForm">
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
							<label class="col-md-3 control-label">菜单编号</label>
							<div class="col-md-9">
								<div>
									<input type="text" id="add_app_cd" name="authCd"
										class="form-control input-medium" readOnly maxlength="19"
										placeholder="输入编号" />

								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">菜单名称</label>
							<div class="col-md-9">
								<input type="text" id="add_branch_name" name="menuName"
									class="form-control  input-medium" maxlength="19"
									placeholder="输入菜单名称" />
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">菜单层级</label>
							<div class="col-md-9">
								<input type="text" readOnly class="form-control  input-medium"
									maxlength="19" placeholder="菜单层级" id="add_menu_level"
									name="rank" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">父级</label>
							<div class="col-md-9">
								<input type="text" id="add_parent" readOnly
									class="form-control input-medium" placeholder="输入父级"
									name="parentAuthCd" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">菜单图标</label>
							<div class="col-md-9">
								<input type="text" class="form-control input-medium"
									placeholder="输入菜单图标" name="iconfg">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">菜单url</label>
							<div class="col-md-9">
								<input type="text" class="form-control input-medium"
									placeholder="输入菜单url" name="authUrl">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">菜单排序</label>
							<div class="col-md-9">
								<input type="text" id="add_menu_sortno"
									class="form-control input-medium" placeholder="输入菜单排序"
									name="sort">
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		<button type="button" class="btn blue" id="btn_save_edit">保存</button>
	</div>
</div>
<!-- edit modal end-->
<script src="${ctx}/pages/auth/scripts/appTree.js"
	type="text/javascript"></script>
<script>
	jQuery(document).ready(function() {
		appTree.init();
	});
</script>