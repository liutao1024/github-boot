<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">交易信息</span>
				<span class="caption-helper">交易信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">用户标识信息</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="identity_id" name="identity_id" class="form-control input-inline input-medium" placeholder="输入客户号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">合作者身份ID</label>
					<div class="input-icon col-md-9">
						<input type="text" id="partner_id" name="partner_id" class="form-control input-inline input-medium" placeholder="输入用户号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="control-label col-md-3">交易起止日期</label>
					<div class="input-icon col-md-9">
						<div class="input-group input-large date-picker input-daterange"  data-date-format="yyyymmdd">
							<input type="text" class="form-control" id="start_time" name="start_time" placeholder="输入起始日期">
							<span class="input-group-addon">
							到 </span>
							<input type="text" class="form-control" id="end_time" name="end_time" placeholder="输入结束日期">
						</div>
					</div>
				</div>
				
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="20%">
								收支总计录数
							</th>
							<th width="20%">
								总收入
							</th>		
							<th width="20%">
								总支出
							</th>
							<th width="20%">
								总收益
							</th>													
							<th width="20%">
								 收支明细列表
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	<div id="jiaoyiModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "900">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">上日余额信息</h4>
		</div>
		<div class="modal-body">
			<table id="lastBill" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
	</div>
	
</div>

<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cust/scripts/xljyqr.js"></script>
<script>
	jQuery(document).ready(function() {    
		Xljyqr.init();
	});
</script>