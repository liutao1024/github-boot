<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">基金清算</span>
				<span class="caption-helper">基金清算...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">日&nbsp;&nbsp;&nbsp;&nbsp;期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "dealdt" class="form-control" name="dealdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">清算类别</label>
						<div class="input-group col-md-8">
							<input type="hidden" id="trantp" name="trantp" class="form-control input-inline" placeholder="清算类别"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
					<button type="button" class="btn blue" id="select" style="padding: 5px 44px;margin-right: -14px;">查询</button>
				</div>
				<div class="clean"></div>
			</form>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">交易金额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" disabled placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">处理状态</label>
						<div class="input-group col-md-8">
							<input type="text" id="checkS" readOnly name="checkS" class="form-control input-inline" placeholder="处理状态"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4" >汇款类型</label>
						<div class="input-group col-md-8">
							<input type="text" id="paychn" name="paychn" class="form-control input-inline" placeholder="请选择汇款类型"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-12" style = "text-align:right;">
					<button type="button" class="btn blue" id="sucler" style="padding: 5px 44px;margin-right: -14px;">清算</button>
				</div>
				<div class="clean">
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fund/scripts/clearfund.js"></script>
<script>
	jQuery(document).ready(function() {
		clearfund.init();
	});
</script>