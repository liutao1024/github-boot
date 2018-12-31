<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">放款任务清算</span>
				<span class="caption-helper">放款任务清算...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "trdate" class="form-control" name="trdate">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">清算状态</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="loanst" name="loanst" 
								class="form-control input-inline" placeholder="清算状态" />
						</div>
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			
			
			</div>
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
					<span id="alert" class="msg"></span>
			</div>
			<div class="row">
			<div class="col-md-12">
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="byfkqy_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">
								电子账号
							</th>	
							<th width="8%">
								借据号
							</th>
							<th width="10%">
								交易日期
							</th>													
							<th width="8%">
								交易金额
							</th>
							<th width="8%">
								清算状态
							</th>
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
	   			<div class="col-md-3">
					<div class="form-group row">
						<label class="control-label col-md-8">总资金：<span id="allsum"></span>
						</label>
					</div>
				</div>
				<div class="col-md-3 aligh-right" style="display:none" id="dealdiv">
					<button type="button" class="btn blue" id="deal">清  算</button>
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
<script src="${ctx}/pages/by/scripts/byfkqy.js"></script>
<script>
	jQuery(document).ready(function() {
		byfkqy.init();
	});
</script>
