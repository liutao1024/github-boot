<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">放款任务清结算</span>
				<span class="caption-helper">放款任务清结算</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">结算日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "taskdt" class="form-control" name="taskdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>		
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">结算状态</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="ststat" name="ststat" 
								class="form-control input-inline" placeholder="清算状态" />
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<!-- END FILE FORM -->
			<div class="clean"></div>
			</form>
		</div>
		<div class="row">
				<div class="col-md-12">
					<div class="table-container">
						<table class="table table-striped table-bordered table-hover"
							id="yxfkjs_ajax" style="white-space: nowrap;">
							<thead>
								<tr role="row" class="heading">
									<th>电子账号</th>
									<th>贷款借据号</th>
									<th>放款日期</th>
									<th>放款金额</th>
									<th>清算日期</th>
									<!-- <th>总期数</th> -->
									<th>清算状态</th>
									<th>结算状态</th>
									<th>结算日期</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</div>
	   <div class="portlet-body">
	   		<form class="file-form form-horizontal" id = "sum-form">
	   			<div class="col-md-3" style="width: 250px">
					<div class="form-group row">
						<label class="control-label col-md-8">结算日期：<span id="keepdt"></span></label>
					</div>
				</div>
	   			<div class="col-md-3" style="width: 200px">
					<div class="form-group row" >
						<label class="control-label col-md-8">总资金：<span id="allsum"></span></label>
					</div>
				</div>
				<div class="col-md-3" style="width: 270px">
					<div class="form-group row">
						<label class="control-label col-md-8">未结算资金：<span id="unsumm"></span></label>
					</div>
				</div>
				<div class="col-md-3 aligh-right" style="display:none" id="dealdiv">
					<button type="button" class="btn blue"  id="deal">结  算</button>
				</div>
				<div class="col-md-3 aligh-right" style="display:none" id="noticediv">
					<button type="button" class="btn blue" id="notice">通知到账</button>
				</div>
	   		</form>
		</div>
		<div class="clean_t"></div>
		<div class="clean_t"></div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/ln/scripts/yxfkjs.js"></script>
<script>
	jQuery(document).ready(function() {
		yxfkjs.init();
	});
</script>