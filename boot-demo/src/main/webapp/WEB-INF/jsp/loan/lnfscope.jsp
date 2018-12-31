<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="tab-pane">
	<form class="form-horizontal control-label" role="form" id="prod_form">
		<div class="form-body">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				输入有误，请检查下面表单！<span class="msg"></span>
			</div>
			<div class="alert alert-success display-hide">
				<button class="close" data-close="alert"></button>
				表单提交成功！<span class="msg"></span>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="col-md-3 control-label">产品代码</label>
					<div class="col-md-9">
						<input type="text" name="prodcd" id="prodcd" readOnly
							class="form-control input-inline input-medium form-value"
							placeholder="产品代码">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">规定保证金金额</label>
					<div class="col-md-9">
						<input type="text" name="prosam" id="prosam"
							class="form-control input-inline input-medium form-value"
							placeholder="规定保证金金额">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">是否产品组</label>
					<div class="col-md-9">
						<input type="text" name="isprod" id="isprod"
							class="form-control input-inline input-medium form-value"
							placeholder="是否产品组">
					</div>
				</div>

			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="col-md-3 control-label">产品名称</label>
					<div class="col-md-9">
						<input type="text" name="prodna" id="prodna" readOnly
							class="form-control input-inline input-medium form-value"
							placeholder="产品名称">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">贷款规模预警值</label>
					<div class="col-md-9">
						<input type="text" name="riskam" id="riskam"
							class="form-control input-inline input-medium form-value"
							placeholder="贷款规模预警值">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">是否启用</label>
					<div class="col-md-9">
						<input type="text" name="isopen" id="isopen"
							class="form-control input-inline input-medium form-value"
							placeholder="是否启用">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="col-md-3 control-label">保证金比例</label>
					<div class="col-md-9">
						<input type="text" name="margrt" id="margrt"
							class="form-control input-inline input-medium form-value"
							placeholder="保证金比例">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">贷款规模阀值</label>
					<div class="col-md-9">
						<input type="text" name="thream" id="thream"
							class="form-control input-inline input-medium form-value"
							placeholder="贷款规模阀值">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">是否暂停放款</label>
					<div class="col-md-9">
						<input type="text" name="isloan" id="isloan"
							class="form-control input-inline input-medium form-value"
							placeholder="是否暂停放款">
					</div>
				</div>
			</div>
			<div class="col-md-7">
			<div class="form-actions file-action">
				<button type="button" class="btn blue" id="save" style="padding: 5px 44px;">保存</button>
			</div>
			</div>
		</div>
	</form>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<%--<script src="${ctx}/pages/loan/scripts/lnfscope.js"></script>,目前不使用，交易等未配置，暂注释，modified by chenyquan 20170822--%>
<script>
	jQuery(document).ready(function() {
		//lnfscope.init();
		lnsubobj.setparam("lnfscope",lnfscope);	
	});
</script>

