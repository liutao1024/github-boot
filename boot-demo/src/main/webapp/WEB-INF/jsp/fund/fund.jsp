<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">基金垫资收益入账</span>
				<span class="caption-helper">基金垫资收益入账...</span>
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
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "dealdt" class="form-control" name="dealdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
				</div>
				<div class="form-actions file-action col-md-4">
					<button type="button" class="btn blue" id="submit">导入垫资信息</button>
				</div>
			</form>
			<div class="clean_t"></div>
			<form class="file-form form-horizontal" id = "info-form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium">
							<input type="text" id = "dealdt1" class="form-control" name="dealdt1" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">垫资收益金额</label>
						<div class="input-group col-md-8 input-medium">
							<input type="text" id = "tranam" class="form-control" name="tranam" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">入账状态</label>
						<div class="input-group col-md-8 input-medium">
							<input type="text" id = "status" class="form-control" name="status" readOnly>
						</div>
					</div>
				</div>
				<div class="form-actions file-action">
					<button type="button" class="btn blue" id="account">入   账</button>
				</div>
			</form>
			
			<div class="clean_t"></div>
		</div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fund/scripts/fund.js"></script>
<script>
	jQuery(document).ready(function() {    
		Fund.init();
	});
</script>