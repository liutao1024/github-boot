<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		
		<div class="portlet-body">
			 <div class="table-container">
			 	<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_cabin" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="data_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="12%">
								绑定卡号
							</th>
							<th width="11%">
								卡开户行号
							</th>
							<th width="11%">
								账户名称
							</th>
							<th width="11%">
								卡开户行名称
							</th>
							<th width="11%">
								绑定日期
							</th>
							<th width="11%">
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
	<div id="new_addModa" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">外部卡绑定</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal modal-form" id="outerCa-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户账户</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="b_acctno" name="b_acctno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">卡号</label>
							<div class="input-icon col-md-9">
							    <i class="fa fa-credit-card"></i>
								<input type="text" id="b_cardno" name="b_cardno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">开户行号</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="b_brchno" name="b_brchno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户名称</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="b_acctna" name="b_acctna" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">开户行名称</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="b_brchna" name="b_brchna" class="form-control input-inline input-medium" >
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="save_cabin" class="btn blue">保存</button>
		</div>
	</div>

<script src="${ctx}/pages/cust/scripts/outCaInfo.js"></script>