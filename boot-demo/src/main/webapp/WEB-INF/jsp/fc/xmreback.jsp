<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">小马助贷代偿清算</span>
				<span class="caption-helper">小马助贷代偿清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id="file-form">
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">日期</label>
						<div class="input-group col-md-9 date input-small date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" id="check-date" class="form-control"
								name="checkdate"> <span class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">是否代偿</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="checkS" name="checkS" 
								class="form-control input-inline" placeholder="是否代偿" />
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3"
					style="text-align: right;">
					<button type="button" class="btn blue" id="select"
						style="padding: 5px 44px; margin-right: 35px;">查询</button>
				</div>
				<div class="form-actions file-action col-md-3" style = "text-align:right;">
					<button type="button" disabled class="btn blue" id="deal" style="padding: 5px 44px;margin-right: 40px;">清算</button>
				</div>
				<div class="clean"></div>
				<p></p>
				<div class="col-md-12">
				<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">是否已清算</label>
								<div class="input-group col-md-5">
									<input type="text" id="clrflg" class="form-control" disabled
										name="clrflg">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">应还总金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="totams" class="form-control" disabled
										name="totams">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">代偿总金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="cptams" class="form-control" disabled
										name="cptams">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">实扣总金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="rptams" class="form-control" disabled
										name="rptams">
								</div>
							</div>
						</div>
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
									<th>客户名称</th>
									<th>证件号码</th>
									<th>本期期数</th>
									<th>本期子期数</th>
									<th>应还款日期</th>
									<th>本期应还本金</th>
									<th>本期应还利息</th>
									<th>应收费用</th>
									<th>本期应还总额</th>
									<th>本期实还总额</th>
									<th>本期代偿总额</th>
									<th>追回罚金</th>
									<th>追回手续费</th>
									<th>追回利息</th>
									<th>追回本金</th>
									<th>是否代偿</th>
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
<script src="${ctx}/pages/fc/scripts/xmreback.js"></script>
<script>
	jQuery(document).ready(function() {
		XmReback.init();
	});
</script>