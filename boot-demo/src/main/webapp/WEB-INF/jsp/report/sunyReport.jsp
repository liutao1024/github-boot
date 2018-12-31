<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">查询报表</span>
				<span class="caption-helper">查询损益明细报表...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal control-label" role="form"
				id="report_form">
				<div class="form-body">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！<span class="msg"></span>
					</div>
					<div class="alert alert-success display-hide">
						<button class="close" data-close="alert"></button>
						表单提交成功！<span class="msg"></span>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label class="col-md-3 control-label">机构号</label>
							<div class="col-md-9">
								<div>
									<input type="text" name="brchno" id ="brchno"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="选择机构号">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="col-md-9">
								<input type="text" name="crcycd" id ="crcycd"
									class="form-control input-inline input-medium form-value"
									maxlength="3" placeholder="选择币种">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label class="col-md-3 control-label">报表类型</label>
							<div class="col-md-9">
								<input type="text" name="rfresh" id ="rfresh"
									class="form-control input-inline input-medium form-value"
									maxlength="3" placeholder="选择报表类型">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label class="col-md-3 control-label">日期</label>
							<div class="col-md-9">
								<div class="input-group col-md-12 date input-medium date-picker"
									data-date-format="yyyymmdd" data-date-viewmode="years"
									data-date-minviewmode="months">
									<input type="text" class="form-control" name="acctdt" id ="acctdt"
										maxlength="8" placeholder="选择日期"> <span
										class="input-group-btn">
										<button class="btn default" type="button">
											<i class="fa fa-calendar"></i>
										</button>
									</span>
								</div>
							</div>
						</div>
						<div>
							<button type="button" id="find_report" class="btn blue">查看报表</button>
							<div class="btn-group">
							  <button type="button" class="btn blue dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   	 下载报表 <span class="caret"></span>
							  </button>
							  <ul class="dropdown-menu" id="down">
							    <li><a href="#" name="xlsx">.xlsx格式</a></li>
							  </ul>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="portlet light">
			<div class="portlet-body  profile tabbable">
				<div class="row inbox">
					<div class=" col-md-12">
						<div class="inbox-loading"></div>
						<div class="inbox-content"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/report/scripts/suyiReport.js"></script>
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
		;
		suyiReport.init();
	});
</script>