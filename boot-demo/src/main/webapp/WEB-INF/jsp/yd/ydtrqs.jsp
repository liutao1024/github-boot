<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">雨点代偿资金</span>
				<span class="caption-helper">雨点代偿资金...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="form-group">
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-6">代偿资金内部户余额</label>
						<div class="input-group col-md-6">
							<input type="text" id="dredbl_1" class="form-control" disabled name="dredbl_1">
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-6"
					style="text-align: right;">
					
				</div>
				</div>
				<div class="clean"></div>
				<br/>
				<br/>
				<div class="form-group">
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-6">清算金额</label>
						<div class="input-group col-md-6">
							<!-- <input class="form-control placeholder-no-fix" type="text" disabled placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/> -->
							<input type="text" id="tranam" name="tranam" class="form-control input-inline input-medium" maxlength="50" placeholder="交易金额,保留两位有效数字">
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-6" style = "text-align:right;">
					<button type="button" class="btn blue" id="sucler" style="padding: 5px 44px;margin-right: 68px;">清算</button>
				</div>
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/yd/scripts/ydtrqs.js"></script>
<script>
	jQuery(document).ready(function() {
		ydtrqs.init();
	});
</script>