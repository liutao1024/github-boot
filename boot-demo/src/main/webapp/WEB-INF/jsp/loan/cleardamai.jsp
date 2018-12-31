<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">大麦资金清算</span>
				<span class="caption-helper">大麦资金清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal fund-form" id="fund-form" role="form">
			<div class="form-group">
				<div class="col-md-8">
					<div class="form-group">
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "trandt" class="form-control" name="trandt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="cust-action" class="col-md-4">	
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="clean" ></div>
			</div>
			<br />
			<div class="form-group">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">放款总金额：<span id="loanam" style = "font-size:18px;font-weight:700;color:blue;"></span></label> 
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">处理状态</label>
						<div class="input-group col-md-8">
							<input type="text" id="inchek" readOnly name="inchek" class="form-control input-inline" placeholder="处理状态"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
					<button type="button" class="btn blue" id="incler" style="padding: 5px 44px;margin-right: -14px;">清算</button>
				</div>
				</div>
				<div class="form-group">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">退票总金额：<span id="refdam" style = "font-size:18px;font-weight:700;color:blue;"></span></label>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">处理状态</label>
						<div class="input-group col-md-8">
							<input type="text" id="ouchek" readOnly name="ouchek" class="form-control input-inline" placeholder="处理状态"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
					<button type="button" class="btn blue" id="oucler" style="padding: 5px 44px;margin-right: -14px;">清算</button>
				</div>
				</div>
			</form>
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" style="white-space: nowrap;" id="bill_ajax">
					<thead>
						<tr role="row" class="heading">	   		
							<th width="12%">
								借据号
							</th>	
							<th width="5%">
								交易类型
							</th>
							<th width="12%">
								入账流水
							</th>													
							<th width="8%">
								入账日期
							</th>
							<th width="9%">
								交易金额
							</th>
							<th width="5%">
								交易状态
							</th>
							<th width="12%">
								交易号
							</th>
							<th width="12%">
								订单号
							</th>
							<th width="18%">
								交易时间点
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
<script src="${ctx}/pages/loan/scripts/cleardamai.js"></script>
<script>
	 jQuery(document).ready(function() {    
		 DamaiSettle.init();
	}); 
</script>