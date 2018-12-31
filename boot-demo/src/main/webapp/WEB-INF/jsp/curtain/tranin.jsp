<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">付款处理</span>
				<span class="caption-helper">付款处理...</span>
			</div>
		</div>
		<div class="portlet-body">
		 <div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">付款账号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="请输入付款人账户" id="pyerac" name="pyerac"/>
							</div>
							<div class="acctna col-sm-offset-1">帐号名称：<span class="name col-sm-offset-1" id="pyerna"></span></div>
							<!-- <div class="acctna col-sm-offset-1">可用余额：<span class="name col-sm-offset-1" id="acbltp"></span></div> -->
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">收款卡号</label>
							<div class="input-icon col-md-9">
								
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="请选择付款卡号" id="pyeeac" name="pyeeac"/>
							</div>
							<div class="acctna col-sm-offset-1">帐户名称：<span class="name col-sm-offset-1" id="pyeena"></span></div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">可用余额</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-cny"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="可用余额" id="acbltp" name="acbltp" readOnly/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">付款金额</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-cny"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="请输入付款金额" id="tranam" name="tranam"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">渠道号</label>
							<div class="input-icon col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="22" disabled autocomplete="off" placeholder="请选择渠道" id="channl" name="channl"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">汇款类型</label>
							<div class="input-icon col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="请选择汇款类型" id="chnnal" name="chnnal"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">操作机构号</label>
							<div class="input-icon col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="22" autocomplete="off" placeholder="请选择操作机构号" id="operbr" name="operbr"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">备注</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="40" autocomplete="off" placeholder="备注内容" id="remark" name="remark"/>
							</div>
						</div>
						
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
	   </div>
	   <div align="right">
	   		<button type="button" id="add_save" class="btn green">付款</button>
	   </div>
	</div>
	
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/curtain/scripts/tranin.js"></script>
<script>
	jQuery(document).ready(function() {    
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		Tranin.init();
	});
</script>