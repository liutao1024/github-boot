<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
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
						<div class="table-container" id="add_role_set">
							<table class="table table-striped table-bordered table-hover"
								id="role_auth_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="20%">注册机构号</th>
										<th width="20%">权限类型</th>
										<th width="20%">角色号</th>
										<th width="20%">柜员编号</th>
										<th width="20%" >操作</th>
									</tr>
									<tr role="row" class="filter">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td >						
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
	<div id="setRoleModal" class="modal fade setauth" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">柜员角色</h4>
				</div>
				<div class="modal-body">
					<div class="row"> 
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_role_form"> 
								<div class="form-body">	
								<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										提交表单正确！后台信息 ： <span class="msg"></span>
									</div>
								<!--div class="form-group">
										<label class="col-md-3 control-label">权限类型</label>
										<div class="col-md-9">
											<input type="text" id="Auth_authType"  name="authType"  class="form-control input-inline input-medium" maxlength="1" placeholder="角色类型">
										</div>
									</div-->	
									<div class="form-group">
										<label class="col-md-3 control-label">角色</label>
										<div class="col-md-9">
											<input type="text" id="Auth_roleCd"  name="authType"  class="select-close-1 form-control input-inline input-medium" maxlength="19" placeholder="输入角色编号">
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default closeModal">关闭</button>
									<button type="submit" class="btn blue" id="subAuth_btn">保存</button> 
								</div> 												
							</form>
						</div>
					</div>
				</div>		
			</div>