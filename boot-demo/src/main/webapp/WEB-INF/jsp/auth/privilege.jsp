<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>
			 INFO:这是一个前端demo，数据取自json文件
		</p>
	</div>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-key font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">权限管理</span>
				<span class="caption-helper">权限</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="privilege_ajax">
					<thead>
						<tr role="row" class="heading">
						   <th width="16%">
								权限编号
							</th>
							<th width="16%">
								权限名称
							</th>
							<th width="16%">
								应用功能
							</th>
							<th width="16%">
								权限描述
							</th>
							<th width="32%"  colspan="2">
								操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" name="userID" id="userID"/>
							</td>
							<td>
							</td>
							<td>
							</td>
					        <td>
							</td>				
							<td>
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- modal input -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">用户信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
								    <div class="form-group">
										<label class="col-md-3 control-label">权限编号</label>
										<div class="col-md-9">
											<input type="text" id="edit_privilege_id" readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入权限编号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">权限名称 </label>
										<div class="col-md-9">
											<input type="text" id="edit_privilege_name"  class="form-control input-inline input-medium" maxlength="19" placeholder="输入权限名称">
										</div>
									</div>				
									<div class="form-group">
										<label class="col-md-3 control-label">	应用功能 </label>
										<div class="col-md-9">
											<input type="text" id="edit_app_id" class="form-control input-inline input-medium" maxlength="19" placeholder="输入应用功能 ">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">权限描述 </label>
										<div class="col-md-9">
											<input type="text" id="edit_privilege_remark" class="form-control input-inline input-medium" maxlength="19" placeholder="输入权限描述">
										</div>
									</div>				
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="save_edit">保存</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End: life time stats -->	
</div>

<script src="${ctx}/pages/auth/scripts/privilege.js"></script>
<script>
	jQuery(document).ready(function() {    
		privilege.init();
	});
</script>