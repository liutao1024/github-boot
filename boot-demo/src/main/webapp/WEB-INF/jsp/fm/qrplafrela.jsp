<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">商户内部户关联表</span>
				<span class="caption-helper">商户内部户关联表...</span>
			</div>
		</div>
		<div class="portlet-body">
			 <div class="table-container">
			 	<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="9%">
								存管商户号
							</th>
							<th width="9%">
								账户类型
							</th>
							<th width="9%">
								账户用途
							</th>
							<th width="9%">
								内部户账号
							</th>
							<th width="9%">
								内部户业务代码
							</th>
							<th width="9%">
								总行账号
							</th>
							<th width="9%">
								总行户名
							</th>
							<th width="9%">
								创建日期
							</th>
							<th width="9%">
								账户状态
							</th>
							<th width="9%">
								外部ID
							</th>
							<th width="10%">
								 操作
							</th> 			
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	<!-- 新增弹出窗口 -->
	<div id="openModa" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">商户内部户信息</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal modal-form" id="modal-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">存管商户号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="zjcgno_n" name="zjcgno_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户类型</label>
							<div class="input-icon col-md-9">

								<input type="text" id="plattp_n" name="plattp_n" class="select-close-1 form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户用途</label>
							<div class="input-icon col-md-9">
							    <i class="fa fa-credit-card"></i>
								<input type="text" id="actpur_n" name="actpur_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户账号</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="acctno_n" name="acctno_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户业务代码</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="busino_n" name="busino_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">总行账号</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="headno_n" name="headno_n" class="form-control input-inline input-medium" 
								onBlur="setStyle()" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">总行户名</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="headna_n" name="headna_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户状态</label>
							<div class=" input-icon col-md-9">
								<input type="text" id="stustp_n" name="stustp_n" class="select-close-2 form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">外部ID</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="ouacid_n" name="ouacid_n" class="form-control input-inline input-medium" >
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="save_n" class="btn blue">保存</button>
		</div>
	</div>
	
	<!-- 编辑弹出窗口 -->
	<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">商户内部户信息</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal edit_form" id="edit_form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">存管商户号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="zjcgno" name="zjcgno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户类型</label>
							<div class="input-icon col-md-9">								
								<input type="text" id="plattp" name="plattp" class="select-close-3 form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户用途</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="actpur" name="actpur" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户账号</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="acctno" name="acctno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户业务代码</label>
							<div class=" input-icon col-md-9">			
								<i class="fa fa-credit-card"></i>
								<input type="text" id="busino" name="busino" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">总行账号</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="headno" name="headno" class="form-control input-inline input-medium" 
								onBlur="setStyle()" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">总行户名</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="headna" name="headna" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户状态</label>
							<div class=" input-icon col-md-9">
								<input type="text" id="stustp" name="stustp" class="select-close-4 form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">外部ID</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="ouacid" name="ouacid" class="form-control input-inline input-medium" >
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
</div>


<script src="${ctx}/pages/fm/scripts/qrplafrela.js"></script>