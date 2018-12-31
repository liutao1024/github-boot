<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">管理平台业务汇总查询</span>
			<span class="caption-helper">管理平台业务汇总查询...</span>
		</div>
	</div>
	<div class="portlet-body" >
		<form class="file-form form-horizontal" id="file-form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">查询日期</label>
						<div class="input-group col-md-9 date input-small date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" id="q_trandt" class="form-control"
								name="q_trandt"> <span class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">交易柜员</label>
						<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="q_userid" name="q_userid" class="form-control input-inline input-medium" maxlength="18" placeholder="输入交易柜员号">
					</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4"
					style="text-align: right;">
					<button type="button" class="btn blue" id="select"
						style="padding: 5px 20px; margin-right: 55px;">查询</button>
				</div>
			</form>
		<div class="table-container" data-width = "700">
			<div class="table-actions-wrapper">
				<span> </span>
			</div>
			<table class="table table-striped table-bordered table-hover"  data-width = "700"
				id="datatable_src">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">序号</th>
						<th scope="col">交易柜员</th>
						<th scope="col">柜员姓名</th>
						<th scope="col">业务笔数</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	</div>
	<div class="portlet-body" align='right'>
			<div id="log">
			
			</div>
		</div>
</div>
<script src="${ctx}/pages/report/scripts/bookCount.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script>
	jQuery(document).ready(function() {
		bookCount.init();
	});
</script>