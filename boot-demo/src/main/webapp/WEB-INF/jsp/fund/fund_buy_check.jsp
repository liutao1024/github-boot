<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">基金对账结果</span>
				<span class="caption-helper">基金对账结果</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal fund-form" id="fund-form" role="form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "dealdt" class="form-control" name="dealdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">	
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="cif-pp"></div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">申购总金额：<span id="apply" style = "font-size:18px;font-weight:700;color:blue;"></span></label> 
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">赎回总金额：<span id="redeem" style = "font-size:18px;font-weight:700;color:blue;"></span></label>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">垫资收益：<span id="prftam" style = "font-size:18px;font-weight:700;color:blue;"></span></label>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">轧差总金额：<span id="realam" style = "font-size:18px;font-weight:700;color:green;"></span></label>
					</div>
				</div>
			</form>
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="bill_ajax">
					<thead>
						<tr role="row" class="heading">	   		
							<th width="20%">
								订单号
							</th>	
							<th width="10%">
								交易类型
							</th>
							<th width="15%">
								电子账号
							</th>													
							<th width="10%">
								订单状态
							</th>
							<th width="15%">
								金额
							</th>
							<th width="15%">
								时间
							</th>
							<th width="15%">
								日期
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fund/scripts/fund_buy_check.js"></script>
<script>
	 jQuery(document).ready(function() {    
		 FundSetlle.init();
	}); 
</script>