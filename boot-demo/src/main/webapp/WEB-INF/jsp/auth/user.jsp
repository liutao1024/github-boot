<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- <div class="note note-danger note-bordered">
		<p>
			 INFO:这是一个前端demo，数据取自json文件
		</p>
	</div> -->
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-user font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">柜员管理</span>
				<span class="caption-helper">柜员</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_new_person"
						class="btn btn-sm green table-group-action-submit">
						新柜员<i class="fa fa-plus"></i>
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="person_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">柜员编号</th>
							<th width="8%">柜员姓名</th>
							<th width="10%">所属部门</th>
							<th width="10%">密码最大错误次数</th>
							<th width="6%">柜员状态</th>
							<th width="6%">柜员签到状态</th>
							<th width="6%">柜员等级</th>
							<th width="32%" colspan="4">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" name="q_userid"
								id="q_userid" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" name="q_userna"
								id="q_userna" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td colspan="4">
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
		<div id="editModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">柜员信息</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<form class="form-horizontal" role="form" id="edit_form" action=""
							method="post">
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
									<label class="col-md-3 control-label">柜员编号</label>
									<div class="col-md-9">
										<input type="text" id="userid" name="userid" readonly
											class="form-control input-inline input-medium" maxlength="19">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">柜员姓名</label>
									<div class="col-md-9">
										<input type="text" id="userna" name="userna" class="form-control input-inline input-medium" maxlength="19"
											placeholder="柜员姓名">
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">所属部门</label>
									<div class="col-md-9">
										<input type="hidden" id="brchno" name="brchno" readonly
											class="form-control input-inline input-medium" maxlength="19"
											placeholder="所属部门">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">柜员允许密码错误次数</label>
									<div class="col-md-9">
										<input type="text" id="pwaect" name="pwaect"
											class="form-control input-inline input-medium" maxlength="2"
											placeholder="柜员允许密码错误次数">
									</div>
								</div>
							<!--	<div class="form-group">
									<label class="col-md-3 control-label">柜员属性</label>
									<div class="col-md-9">
										<input type="text" id="usform" name="usform"
											class="form-control input-inline input-medium" placeholder="柜员属性"></input>
									</div>
								</div>-->
								<div class="form-group">
									<label class="col-md-3 control-label">柜员状态</label>
									<div class="col-md-9">
										<input type="hidden" id="userst" name="userst"
											class="form-control input-inline input-medium" placeholder="柜员状态"></input>
									</div>
								</div>
							<div class="form-group">
									<label class="col-md-3 control-label">柜员等级</label>
									<div class="col-md-9">
											<input type="text" id="userlv" name="userlv"
											class="form-control input-inline input-medium" placeholder="柜员等级" maxlength="1"></input>
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
	<!-- /.rolemodal -->
	<jsp:include page="/WEB-INF/jsp/auth/user_role.jsp"></jsp:include>
	<!-- /.rolemodal -->
</div>

<script src="${ctx}/pages/auth/scripts/user.js"></script>
<script>
	jQuery(document).ready(function() {
		User.init();
	});
</script>