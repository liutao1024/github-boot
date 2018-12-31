<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">划款清算</span>
				<span class="caption-helper">划款清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
			<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">付款日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "check-date" class="form-control" name="checkdate">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>				
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">资金付款状态</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="clstus" name="clstus" 
								class="form-control input-inline" placeholder="资金付款状态" />
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">渠道号</label>
						<div class="input-group col-md-8">
							<input id="servtp" name="servtp" class="form-control input-inline" placeholder="渠道号" value="XMXJ"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="xmhuakqs_ajax">
					<thead>
						<tr role="row" class="heading">							
							<th>标的编号</th>
							<th>渠道号</th>
							<th>待清算金额</th>
							<th>客户账号</th>
							<th>订单编号</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
	   <div class="portlet-body">
	   		<form class="file-form form-horizontal" id = "sum-form">
	   			<div class="col-md-3">
					<div class="form-group row">
						<label class="control-label col-md-8">总资金：<span id="allsum"></span></label>
						
					</div>
				</div>
				<div class="col-md-3 aligh-right" style="display:none" id="dealdiv">
					<button type="button" class="btn blue" disabled = "disabled" id="deal">付 款</button>
				</div>
	   		</form>
		</div>
		<div class="clean_t"></div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/op/scripts/xmhuakqs.js"></script>
<script>
	jQuery(document).ready(function() {
		XmHuakqs.init();
	});
</script>
