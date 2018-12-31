<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">包银联合贷款还款清算</span>
				<span class="caption-helper">包银联合贷款还款清算</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal fund-form" id="fund-form" role="form">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span id="alert" class="msg"></span>
			</div>
			<div class="form-group col-md-6">
				<label class="control-label col-md-4">实际划款日期</label>
				<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
					<input type="text" id = "trdate" class="form-control" name="trdate">
					<span class="input-group-btn">
					<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
					</span>
				</div>
			</div>
			<div class="form-group col-md-3">
				<label class="control-label col-md-5">清算状态</label>
				<div class="input-group col-md-5">
					<input type="hidden" id="loanst" name="loanst" 
							class="form-control input-inline" placeholder="清算状态" />
				</div>
			</div>
			<div class="cif-clear"></div>
			<div class="form-actions cust-action">
				<button type="button" class="btn blue" id="submit">查询</button>
				<button type="button" class="btn blue" id="query">查询到期未还款明细</button>
			</div>
		    <div class="cif-pp"></div>
		    <div class="clean"></div>
		</form>
		
			 <div class="table-container">
					<table class="table table-striped table-bordered table-hover"
						id="byhkqy_ajax" style="white-space: nowrap;">
						<thead>
							<tr role="row" class="heading">
								<th>电子账号</th>
								<th>贷款借据号</th>
								<th>还款期号</th>
								<th>包银实际还款日期</th>
								<th>归还本金</th>
								<th>归还费用</th>
								<th>归还利息</th>
								<th>应收总额</th>
								<th>应收本金</th>
								<th>应收费用</th>
								<th>应收利息</th>
								<th>清算状态</th>
								<th>还款方式</th>
								<th>是否有差异</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
		</div>
		<div class="portlet-body">
	   		<form class="file-form form-horizontal" id = "sum-form">
	   			<div class="col-md-3">
					<div class="form-group row">
						<label class="control-label col-md-8">待清算资金：<span id="allsum"></span></label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group row">
						<label class="control-label col-md-8">总笔数：<span id="counts"></span></label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group row">
						<label class="control-label col-md-8">无差异笔数：<span id="suscnt"></span></label>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group row">
						<label class="control-label col-md-8">有差异笔数：<span id="difcnt"></span></label>
					</div>
				</div>
				<div class="col-md-3 aligh-right" style="display:none" id="dealdiv">
					<button type="button" class="btn blue" id="deal" >清  算</button>
				</div>
				<div class="clean"></div>
	   		</form>
		</div>
</div>
</div>
<!--弹出页面-->
<div id="tranModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "1100"  style="height:500px ; padding-left: 15px; padding-right: 15px;">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title">到期未还明细</h4>
	</div>
		<div class="row">
			<div class="col-md-12">
				<div class="table-container">
					<table class="table table-striped table-bordered table-hover"
						id="bywhqy_ajax" style="white-space: nowrap;">
						<thead>
							<tr role="row" class="heading">
								<th>电子账号</th>
								<th>贷款借据号</th>
								<th>还款期号</th>
								<th>交易日期</th>
								<th>归还本金</th>
								<th>归还费用</th>
								<th>归还利息</th>
								<th>应收总额</th>
								<th>应收本金</th>
								<th>应收费用</th>
								<th>应收利息</th>
								<th>清算状态</th>
								<th>是否有差异</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
			</div>
		</div>		
</div>

<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/by/scripts/byhkqy.js"></script>
<script>
	jQuery(document).ready(function() {
		byhkqy.init();
	});
</script>