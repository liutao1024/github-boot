<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">权限角色列表</span>
				<span class="caption-helper">权限角色配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">
								角色代码
							</th>
							<th width="13%">
								 角色名称
							</th>
							<th width="12%">
								角色挂靠类型
							</th>
							<th width="8%">
								适用范围串
							</th>
							<th width="8%">
								职能机构串
							</th>
							<th width="13%">
								系统代码
							</th>
							<th width="6%">
								是否有效
							</th>
							<th width="10%">
								备注
							</th>
							<th width="24" colspan="2">
								 操作
							</th> 
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_roleid" name="q_roleid" />
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_rolena" name="q_rolena" /> 
							</td>
							<td>
								<input type="hidden" class="form-control form-filter input-sm" id="q_roletp" name="q_roletp" /> 
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
								<input type="hidden" class="form-control form-filter input-sm" id="q_syscod" name="q_syscod" /> 
							</td>
							<td>
							</td>
							<td>
							</td>
							<td  colspan="2">
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
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">角色信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
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
										<label class="col-md-3 control-label">角色代码</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="roleid" name="roleid" readOnly class="form-control input-inline input-medium" maxlength="6" placeholder="输入角色代码">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">角色名称</label>
										<div class="col-md-9">
											<input type="text" id="rolena" name="rolena"  class="form-control input-inline input-medium" maxlength="200" placeholder="输入角色名称">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">角色挂靠类型</label>
										<div class="col-md-9">
											<input type="text" id="roletp" name="roletp" readOnly class="form-control input-inline input-medium" maxlength="1" placeholder="输入挂靠范围">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">适用范围串</label>
										<div class="col-md-9">
										   <input type="text" id="spclsc" name="spclsc" readOnly class="form-control input-inline input-medium" maxlength="200" placeholder="输入适用范围">						
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">职能机构串</label>
										<div class="col-md-9">
										   	<input type="text" id="spclbr" name="spclbr" readOnly class="form-control input-inline input-medium" maxlength="200" placeholder="输入职能机构">						
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">系统代码</label>
										<div class="col-md-9">
											<input type="text" id="syscod" name="syscod" readOnly class="form-control input-inline input-medium" maxlength="2" placeholder="输入系统代码">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">是否有效</label>
										<div class="col-md-9">
											<input type="text" id="rostat" name="rostat" class="form-control input-inline input-medium" maxlength="1" placeholder="输入是否有效">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">备注</label>
										<div class="col-md-9">
											<input type="text" id="desctx" name="desctx" class="form-control input-inline input-medium" maxlength="200" placeholder="输入备注">
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_edit">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/perm/scripts/kuprole.js"></script>
<script>
	jQuery(document).ready(function() {    
		kuprole.init();
	});
</script>
