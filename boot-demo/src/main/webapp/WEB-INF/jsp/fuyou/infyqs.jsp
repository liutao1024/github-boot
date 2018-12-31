<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">富友存管清算</span>
				<span class="caption-helper">富友存管清算...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">交易金额</label>
						<div class="col-md-8">
							<!-- <input class="form-control placeholder-no-fix" type="text" disabled placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/> -->
							<input type="text" id="tranam" name="tranam" class="form-control input-inline input-medium" maxlength="50" placeholder="交易金额,保留两位有效数字">
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">清算类别</label>
						<div class="col-md-8">
							<input type="text" id="inoutp" name="inoutp" class="form-control input-inline input-medium" maxlength="50" placeholder="清算类别">
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
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
<script src="${ctx}/pages/fuyou/scripts/infyqs.js"></script>
<script>
	jQuery(document).ready(function() {
		infyqs.init();
	});
</script>