<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">对公账户绑定</span>
				<span class="caption-helper">对公账户绑定...</span>
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
							<th width="12%">
								对公账号
							</th>
							<th width="12%">
								内部户账号
							</th>
							<th width="12%">
								客户名称
							</th>
							<th width="12%">
								证件类型
							</th>
							<th width="12%">
								证件号码
							</th>
							<th width="12%">
								渠道号
							</th>
							<th width="12%">
								对公账户类型
							</th>
							<th width="16%">
								内部户余额
							</th>
							<th width="16%" colspan="2">
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
							<label class="col-md-3 control-label">对公账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="custno_n" name="custno_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">内部户账号</label>
							<div class="input-icon col-md-9">
							    <i class="fa fa-credit-card"></i>
								<input type="text" id="acctno_n" name="acctno_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">渠道号</label>
							<div class=" input-icon col-md-9">								
								<i class="fa fa-credit-card"></i>
								<input type="text" id="servno_n" name="servno_n" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">对公账户类型</label>
							<div class=" input-icon col-md-9">
								<input type="text" id="cuactp_n" name="cuactp_n" class="select-close-1 form-control input-inline input-medium" >
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
	<div id="outCaModal" class="modal fade out" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="960">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">绑定卡信息</h4>
			<div class=" col-md-12"></div>
		</div>
		<div class="modal-body" id="outCa_load">
		</div>
		<div class="modal-footer col-md-12" id="btn_cont">
		    <button type='button'  class='btn btn-default closeModal' data-dismiss="modal">关闭</button>
		</div>
	</div>

	<script src="${ctx}/pages/cust/scripts/cabind.js"></script>
</div>