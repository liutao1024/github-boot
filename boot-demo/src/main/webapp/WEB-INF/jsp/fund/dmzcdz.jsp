<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">双月盈用户资产对账查询</span>
				<span class="caption-helper">双月盈用户资产对账查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">核心基金账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i> <input type="text" id="acctno"
							name="acctno" class="form-control input-inline input-medium"
							maxlength="18" placeholder="输入核心基金账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">份额日期</label>
					<div class="input-group col-md-9 input-medium date date-picker"
						data-date-format="yyyymmdd" data-date-viewmode="years"
						data-date-minviewmode="months">
						<input type="text" id="prftdt" class="form-control" name="prftdt">
						<span class="input-group-btn">
							<button class="btn default" type="button">
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
					id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">基金账户</th>
							<th width="8%">基金交易账户</th>
							<th width="10%">基金核心交易账号</th>
							<th width="8%">基金代码</th>
							<th width="9%">收费方式</th>
							<th width="10%">基金总份额</th>
							<th width="8%">总可用份额</th>
							<th width="8%">冻结总份额</th>
							<th width="8%">基金未结转收益</th>
							<th width="8%">份额日期</th>
							<th width="8%">基金公司基金总份额</th>
							<th width="8%">基金公司基金总可用份额</th>
							<th width="8%">基金公司基金冻结总份额</th>
							<th width="8%">对账结果</th>
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
<script src="${ctx}/pages/fund/scripts/dmzcdz.js"></script>
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
		Dmzcdz.init();
	});
</script>