<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">本地授权代码表表</span>
				<span class="caption-helper">管理本地授权代码表配置...</span>
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
							<th width="20%">
								权限代码
							</th>
							<th width="20%">
								柜员级别
							</th>
							<th width="20%">
								金额区间下限
							</th>
							<th width="20%">
								能否授权成功
							</th>
							<th width="20" colspan="2">
								 操作
							</th> 
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
					<h4 class="modal-title">本地授权代码表表信息</h4>
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
										<label class="col-md-3 control-label">权限代码</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="permcd" name="permcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入权限代码">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">柜员级别</label>
										<div class="col-md-9">
											<input type="hidden" id="userlv" name="userlv" readOnly class="select-close-1 form-control input-inline input-medium" maxlength="3" placeholder="输入柜员级别">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">金额区间下限</label>
										<div class="col-md-9">
											<input type="text" id="pramlw" name="pramlw" readOnly class="form-control input-inline input-medium"  placeholder="输入金额区间下限">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">能否授权成功</label>
										<div class="col-md-9">
											<input type="hidden" id="issucc" name="issucc"  class="select-close-2 form-control input-inline input-medium" maxlength="3" placeholder="输入能否授权成功">
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
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
<script src="${ctx}/pages/perm/scripts/kuppermchck.js"></script>

