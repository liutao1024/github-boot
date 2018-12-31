<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">单户不出不进冻结</span>
				<span class="caption-helper">单户冻结基本信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="sgfroz-form" role="form">
			<div class="form-body">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
				</div>
				<div class="alert alert-success display-hide">
					<button class="close" data-close="alert"></button>
						表单提交成功！返回信息 ：<span class="msg"></span>
				</div>
				<div class="col-md-6">
					<div class="form-group ">
						<label class="col-md-4 control-label">客户账号</label>
						<div class="col-md-8">
							<input type="text" id="custac" name="custac" class="form-control input-inline input-medium" maxlength="10" placeholder="输入客户账号">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结主体类型</label>
						<div class="col-md-8">
							<input type="text" id="frozow" name="frozow" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择冻结主体类型">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">限制类型</label>
							<div class="col-md-8">
								<input type="text" id="frlmtp" name="frlmtp" disabled class="form-control input-inline input-medium" maxlength="10" placeholder="限制类型">
							</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="col-md-4 control-label">货币代号</label>
						<div class="col-md-8">
							<input type="text" id="crcycd" name="crcycd" class="form-control input-inline input-medium" maxlength="10" placeholder="货币代号">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结业务类型</label>
							<div class="col-md-8">
								<input type="text" id="froztp" name="froztp" disabled class="form-control input-inline input-medium" maxlength="10" placeholder="冻结业务类型">
							</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结原因</label>
						<div class="col-md-8">
							<input type="text" id="frreas" name="frreas" class="form-control input-inline input-medium" maxlength="10" placeholder="冻结原因">
						</div>
					</div>
				</div>
				</div>
					<div class="form-actions cust-action">
					<button type="submit" class="btn blue" id="submit">冻结</button>
				</div>
			</form>
		</div>	
		</div>
	</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript" src="${ctx}/pages/cust/scripts/sgfroz.js" ></script>
<script type="text/javascript">
	jQuery(document).ready(function() {
			if (jQuery().datepicker) {
				$('.date-picker').datepicker({
					rtl : Metronic.isRTL(),
					orientation : "left",
					autoclose : true,
					language : 'zh-CN',
				});
			};
		console.log("ready");
		sgfroz.init();
		
	});

</script>


