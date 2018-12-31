<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">额度冻结</span>
				<span class="caption-helper">额度冻结基本信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="frzecl-form" role="form">
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
					<label class="col-md-3 control-label">客户号</label>
					<div class="input-group col-md-9">
						<input type="text" id="custno" name="custno" class="form-control input-inline input-medium" maxlength="10" placeholder="输入客户号">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">冻结额度</label>
					<div class="input-group col-md-9">
						<input type="text" id="amount" name="amount" class="form-control input-inline input-medium" maxlength="19" placeholder="输入冻结额度">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">生效日期</label>
					<div class="input-group col-md-9 date input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
						<input type="text" id="stardt" name="stardt" class="form-control input-inline input-medium" maxlength="8" placeholder="输入生效日期" >
						<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
						</span>
					</div>	
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">失效日期</label>
					<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
						<input type="text" id="effedt" name="effedt" class="form-control input-inline input-medium" maxlength="8" placeholder="输入生效日期" >
						<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
						</span>
					</div>	
				</div>
				</div>
				<div class="col-md-6">
				<div class="form-group">
					<label class="col-md-3 control-label">额度编号</label>
					<div class="input-icon col-md-9">
						<input type="text" id="crdlno" name="crdlno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入额度编号">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">币种</label>
					<div class="input-icon col-md-9">
						<input type="text" id="crcycd" name="crcycd" class="form-control input-inline input-medium" maxlength="11" placeholder="输入币种">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品号/账号/卡号/上级客户号/交易渠道</label>
					<div class="input-icon col-md-9">
						<input type="text" id="busino" name="busino" class="form-control input-inline input-medium" maxlength="18" placeholder="输入产品号">
					</div>
				</div>
					<div class="form-group">
					<label class="col-md-3 control-label">有效状态</label>
					<div class="input-icon col-md-9">
						<input type="text" id="status" name="status" class="form-control input-inline input-medium" maxlength="18" placeholder="输入有效状态">
					</div>
				</div>
				</div>
				<div class="form-actions cust-action">
					<button type="submit" class="btn blue" id="submit">冻结</button>
				</div>
				</div>	
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript" src="${ctx}/pages/crlimit/scripts/frzecl.js" ></script>
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
		frzecl.init();
		
	});

</script>


