<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">小马助贷代偿追回清算</span>
				<span class="caption-helper">小马助贷代偿追回清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id="file-form">
				<div class="form-actions file-action col-md-4"
					style="text-align: right;">
					<button type="button" class="btn blue" id="select"
						style="padding: 5px 44px; margin-right: 35px;">查询</button>
				</div>
				<div class="col-md-4">
							<div class="form-group">
								<label class="control-label col-md-5">归还代偿总额</label>
								<div class="input-group col-md-5">
									<input type="text" id="tranam" class="form-control" disabled
										name="tranam">
								</div>
							</div>
						</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
					<button type="button" disabled class="btn blue" id="deal" style="padding: 5px 44px;margin-right: 40px;">清算</button>
				</div>
				<div class="clean"></div>
				<p></p>
				<div class="col-md-12">
					</div>
			</form>
			<div class="row">
				<div class="col-md-12">
					<div class="table-container">
						<table class="table table-striped table-bordered table-hover"
							id="back_ajax" style="white-space: nowrap;">
							<thead>
								<tr role="row" class="heading">
									<th>贷款借据号</th>
									<th>本期期数</th>
									<th>本期子期数</th>
									<th>归还代偿金额</th>
									<th>追回罚金</th>
									<th>追回手续费</th>
									<th>追回利息</th>
									<th>追回本金</th>
									<th>归还日期</th>
									<th>是否清算</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
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
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/fc/scripts/xmrebackzh.js"></script>
<script>
	jQuery(document).ready(function() {
		XmRebackZh.init();
	});
</script>