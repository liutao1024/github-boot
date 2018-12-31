<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">智能宝资金清算查询</span>
				<span class="caption-helper">智能宝资金清算查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group">
					<div class="form-group col-md-5">
						<label class="control-label col-md-3">开始日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "stdate" class="form-control" name="stdate">
							<span class="input-group-btn">
								<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
					<div class="form-group col-md-5">
						<label class="control-label col-md-3">结束日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "eddate" class="form-control" name="eddate">
							<span class="input-group-btn">
								<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
					<div class="form-actions intran-action col-md-2">
						<button type="button" class="btn blue" id="submit">查询</button>
					</div>
				</div>
			</form>
		</div>
		<div class="clean">
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">申购金额</label>
						<div class="input-group col-md-9 input-medium input-icon">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" disabled id="buynam" name="buynam"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">赎回金额</label>
						<div class="input-group col-md-8 input-medium input-icon">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" id="baknam" disabled name="baknam" class="form-control input-inline"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4" >差额</label>
						<div class="input-group col-md-8 input-medium input-icon">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" id="offset" disabled name="offset" class="form-control input-inline"/>
						</div>
					</div>
				</div>
				<div class="clean">
				</div>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fund/scripts/znbclearqry.js"></script>
<script>
	jQuery(document).ready(function() {    
		znbclearqry.init();
	});
</script>