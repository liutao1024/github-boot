<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">易鑫保证金参数设置</span>
				<span class="caption-helper">易鑫保证金参数设置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="form-group">
				<div class="col-md-3">
					<label class="control-label col-md-12"><strong>当前配置</strong></label>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">保证金金额</label>
						<div class="input-group col-md-5">
							<input type="text" id="tranam_1" class="form-control" disabled name="tranam_1"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3"
					style="text-align: right;">
					<div class="form-group">
						<label class="control-label col-md-5">预警比例</label>
						<div class="input-group col-md-5">
							<input type="text" id="pecent_1" class="form-control" disabled name="pecent_1"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3"
					style="text-align: right;">
					<div class="form-group">
						<label class="control-label col-md-5">保证金比例</label>
						<div class="input-group col-md-5">
							<input type="text" id="loanpt_1" class="form-control" disabled name="loanpt_1"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3" style = "text-align:left;">
				</div>
				</div>
				<div class="clean"></div>
				<br/>
				<br/>
				<div class="form-group">
				<div class="col-md-3">
					<label class="control-label col-md-12"><strong>重新配置</strong></label>
				</div>

				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">保证金金额</label>
						<div class="input-group col-md-5">
							<input type="text" id="tranam_2" class="form-control"  name="tranam_2"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3"
					style="text-align: right;">
					<div class="form-group">
						<label class="control-label col-md-5">预警比例</label>
						<div class="input-group col-md-5">
							<input type="text" id="pecent_2" class="form-control"  name="pecent_2"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3"
					style="text-align: right;">
					<div class="form-group">
						<label class="control-label col-md-5">保证金比例</label>
						<div class="input-group col-md-5">
							<input type="text" id="loanpt_2" class="form-control"  name="loanpt_2"></input>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3" style = "text-align:left;">
					<button type="button" class="btn blue" id="deal" style="padding: 5px 44px;margin-right: 40px;">设置</button>
				</div>
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/ln/scripts/yxdlbz.js"></script>
<script>
	jQuery(document).ready(function() {
		yxdlbz.init();
	});
</script>