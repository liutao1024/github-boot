<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">代发工资金额充值</span>
				<span class="caption-helper">代发工资金额充值...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">企业编号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="cmpyno" name="cmpyno" class="form-control input-inline input-medium" maxlength="10" placeholder="输入企业编号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">营业执照</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="idtfno" name="idtfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入营业执照">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">交易金额</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-book"></i>
						<input type="text" id="tranam" name="tranam" class="form-control input-inline input-medium" maxlength="19" placeholder="输入交易金额">
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				
			</form>
	</div>		
			


<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/pay/scripts/uppyac.js"></script>
<script>
	jQuery(document).ready(function() {    
		Uppyac.init();
	});
</script>