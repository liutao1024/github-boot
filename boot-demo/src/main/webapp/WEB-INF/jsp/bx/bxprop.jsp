<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">备付金监控查询</span>
				<span class="caption-helper">备付金监控查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">查询日期</label>
					<div class="input-group col-md-9 input-medium date date-picker"
						data-date-format="yyyymmdd" data-date-viewmode="years"
						data-date-minviewmode="months">
						<input type="text" id="instdt" class="form-control" name="instdt"
							style="margin-left: 15px;"> <span class="input-group-btn">
							<button class="btn default" type="button" style="right: -15px;">
								<i class="fa fa-calendar"></i>
							</button>
						</span>
					</div>
				</div>
				 
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">产品号</label>
					<div class="input-icon col-md-9">
						 <input type="text" id="prodcd"
							name="prodcd" class="form-control input-inline input-medium"
							maxlength="18" >
					</div>
				</div>
		       
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="cif-pp"></div>
			</form>

		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">总额放款</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="lntota"
									name="lntota" class="form-control input-inline input-medium"
									maxlength="18"  readOnly>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">跨行放款总额</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="crolns"
									name="crolns" class="form-control input-inline input-medium"
									maxlength="18"  readOnly>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">银联</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="yscpay"
									name="yscpay" class="form-control input-inline input-medium"
									maxlength="18" readOnly>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">ChinaPay</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="chinap"
									name="chinap" class="form-control input-inline input-medium"
									maxlength="18"  readOnly>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">银盛</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="yingse"
									name="yingse" class="form-control input-inline input-medium"
									maxlength="18"  readOnly>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">产品名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i> <input type="text" id="prodna"
									name="prodna" class="form-control input-inline input-medium"
									maxlength="18"  readOnly>
							</div>
						</div>
					
				</div>
			</div>
		</div>
	</div>
</div>

<script
	src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js"
	type="text/javascript"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/bx/scripts/bxprop.js"></script>
<script>
	jQuery(document).ready(function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		Bxprop.init();
	});
</script>