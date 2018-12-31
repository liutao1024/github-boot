<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">现金贷还款信息查询</span>
				<span class="caption-helper">现金贷还款信息查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">客户姓名</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i> <input type="text" id="custna"
							name="custna" class="form-control input-inline input-medium"
							maxlength="18" placeholder="客户姓名">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i> <input type="text" id="idtfno"
							name="idtfno" class="form-control input-inline input-medium"
							maxlength="18" placeholder="证件号码">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">电话号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i> <input type="text" id="teleno"
							name="teleno" class="form-control input-inline input-medium"
							maxlength="18" placeholder="电话">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">绑定卡号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i> <input type="text" id="cardno"
							name="cardno" class="form-control input-inline input-medium"
							maxlength="20" placeholder="绑定卡号">
					</div>
				</div>	
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">产品号</label>
					<div class="input-icon col-md-9">
						 <input type="text" id="prodcd"
							name="prodcd" class="form-control input-inline input-medium"
							maxlength="20" placeholder="产品号">
					</div>
				</div>				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">到期日期</label>
					<div class="input-group col-md-9 input-medium date date-picker"
						data-date-format="yyyymmdd" data-date-viewmode="years"
						data-date-minviewmode="months">
						<input type="text" id="endxdt" class="form-control" name="endxdt" style="margin-left: 15px;">
						<span class="input-group-btn">
							<button class="btn default" type="button" style="right: -15px;">
								<i class="fa fa-calendar"></i>
							</button>
						</span>
					</div>
				</div>
				
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover"
					id="retn_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">客户名</th>
							<th width="8%">证件号码</th>
							<th width="10%">电话号码</th>
							<th width="8%">绑定卡号</th>
							<th width="9%">借据号</th>
							<th width="10%">到期日期</th>
							<th width="8%">还款金额</th>
							<th width="8%">贷款期限</th>
							<th width="8%">本期期数</th>
							<th width="8%">本期状态</th>
							<th width="8%">白名单标识</th>
						
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
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
<script src="${ctx}/pages/bx/scripts/retnum.js"></script>
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
		Retnum.init();
	});
</script>