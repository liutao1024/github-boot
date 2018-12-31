<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">同向调账操作</span>
				<span class="caption-helper">同向调账操作为内部户之间调账，调账双方借贷方向一致...</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN SINGLEDEBT FORM -->
			<form class="Adjust_single-form form-horizontal" id="Adjust_single_form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="control-label col-md-2">记账方向</label>
						<div class="input-icon col-md-4">
							<input type="hidden" id="amntcd" name="amntcd" class="form-control input-inline input-medium" placeholder="选择借贷标志"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">记账帐号</label>
						<div class="input-icon col-md-9">
							<i class="fa fa-credit-card"></i>
							<input class="form-control placeholder-no-fix acctno" type="text" maxlength="18" autocomplete="off" placeholder="借方帐号" id="acctno" name="acctno"/>
						</div>
						<div class="acctna">帐号名称：<span class="name" id="d-acct-name"></span></div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">对方帐号</label>
						<div class="input-icon col-md-9">
							<i class="fa fa-credit-card"></i>
							<input class="form-control placeholder-no-fix acctno" type="text" autocomplete="off" maxlength="18" placeholder="贷方帐号" id="toacct" name="toacct"/>
						</div>
						<div class="acctna">帐号名称：<span class="name" id="c-acct-name"></span></div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">交易金额</label>
						<div class="input-icon col-md-9">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">币种</label>
						<div class="input-icon col-md-9">
							<input type="hidden" id="crcycd" name="crcycd" class="form-control input-inline input-medium" placeholder="选择币种"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">金额大于零标志</label>
						<div class="input-icon col-md-9">
						    <input type="hidden" id="qoutfs" name="qoutfs" class="form-control input-inline input-medium" placeholder="选择金额大于零标志"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3">备注</label>
						<div class="col-md-9">
							<input class="form-control input-inline input-medium" type="text" placeholder="备注信息" id="dscrtx" name="dscrtx"/>
						</div>
					</div>
				</div>
				<div class="padd"></div>
				<div class="form-actions intran-action">
					<button type="button" class="btn blue" id="submit">确认</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				
			</form>
			<!-- END SINGLEDEBT FORM -->
		</div>
	</div>
</div>
<script src="${ctx}/pages/curtain/scripts/adjust_single.js"></script>
<script>
	jQuery(document).ready(function() {    
		Adjust_single.init();
	});
</script>