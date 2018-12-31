<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">本贷本服务</span>
				<span class="caption-helper">本贷本服务...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">传统核心账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="c_acctno" name="c_acctno" class="form-control input-inline input-medium" maxlength="19" placeholder="传统核心账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">互联网核心账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="w_acctno" name="w_acctno" class="form-control input-inline input-medium" maxlength="19" placeholder="互联网核心账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">账户名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="custna_t" name="custna_t" class="form-control input-inline input-medium" maxlength="18" placeholder="账户名称">
					</div>
				</div>
				
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="20%">
								传统核心账号
							</th>	
							<th width="20%">
								互联网核心账号
							</th>
							<th width="20%">
								账户名称
							</th>
							<th width="20%">
								绑定日期
							</th>
							<th width="20%" colspan="2">
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
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">商户信息新增</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal mod-form" id="mod-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">传统核心账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="mc_acctno" name="mc_acctno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">互联网核心账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="mw_acctno" name="mw_acctno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="m_custna" name="m_custna" class="form-control input-inline input-medium" >
							</div>
						</div>					
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="m_save" class="btn blue">保存</button>
		</div>
	</div>
	<!-- 新增弹出窗口结束 -->
	
	<!-- 转账弹出窗口 -->
	<div id="tranModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">本贷本转账</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal tran-form" id="tran-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						
						<div class="form-group">
							<label class="col-md-3 control-label">转账方向</label>
							<div class="input-icon col-md-9">
								<input type="hidden" id="z_trtype" name="z_trtype" class="form-control input-inline input-medium" placeholder="选择转账方向"/>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">转出方账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="z_acctno" name="z_acctno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">转入方账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="z_toacct" name="z_toacct" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="z_acctna" name="z_acctna" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易金额</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-cny"></i>
								<input type="text" id="z_tranam" name="z_tranam" class="form-control input-inline input-medium" placeholder="交易金额,保留两位有效数字">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="input-icon col-md-9">
								<input type="text" id="z_crcycd" name="z_crcycd" class="form-control input-inline input-medium" >
							</div>
						</div>					
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="z_save" class="btn blue">提交</button>
		</div>
	</div>
	<!-- 转账弹出窗口结束 -->
	
</div>


<script src="${ctx}/pages/curtain/scripts/transfer.js"></script>
<script>
	jQuery(document).ready(function() {    
		Transfer.init();
	});
</script>