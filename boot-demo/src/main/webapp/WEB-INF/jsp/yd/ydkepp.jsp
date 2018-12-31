<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">雨点贷款放款清算</span>
				<span class="caption-helper">雨点贷款放款清算</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal fund-form" id="fund-form" role="form">
			<div class="form-group">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-8">
					<div class="form-group">
						<label class="control-label col-md-4">清算日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "keepdt" class="form-control" name="keepdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
			
				<div class="cust-action" class="col-md-3">	
					<button type="button" class="btn blue" id="submit1">查询</button>
				</div>
				<div class="clean" ></div>
			</div>
			<br />
		
			</form>
		
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" style="white-space: nowrap;" id="kepp_ajax">
					<thead>
						<tr role="row" class="heading">	
							<th width="5%">
								产品名称
							</th>   
							<th width="5%">
								产品号
							</th> 		
							<th width="5%">
								清算日期
							</th>	
							<th width="12%">
								清算流水
							</th>	
							<th width="5%">
								清算金额
							</th>
							<th width="12%">
								卡号
							</th>													
							<th width="8%">
								户名
							</th>
							<th width="9%">
								行号
							</th>
							<th width="12%">
								行名
							</th>
							<th width="6%">
								是否冲正
							</th>
							
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
		<!-- edit modal -->
		<div id="accountInfoModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "700">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">业务明细</h4>
		</div>
		<div class="modal-body">
			<table id="accountInfo" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<input type="text" id="remark" name="remark"
									class="form-control input-inline input-medium" maxlength="200"
									placeholder="说明">
			<button type="button" class="btn btn-default" id="ruisma" >确认冲正</button>
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<div id="tranModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "1100"  style="height:500px ; padding-left: 15px; padding-right: 15px;">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title">客户交易明细</h4>
	</div>
<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">清算日期</label>
						<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "taskdt" class="form-control" name="taskdt">
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
							<input type="hidden" id="clstat" name="clstat" 
								class="form-control input-inline" placeholder="清算状态" />
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
			</div>
			<div class="row">
			<div class="col-md-12">
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="ydclear_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
						    <th width="2%">
								<input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes"/>
							</th>
							<th width="6%">
								 收款账号
							</th>	
							<th width="6%">
								 收款户名
							</th>
							<th width="6%">
								金额
							</th>
							<th width="4%">
								行号
							</th>													
							<th width="4%">
								行名
							</th>
							<th width="4%">
								清算状态
							</th>
							<th width="6%">
								清算日期
							</th>
							<th width="8%">
								清算流水
							</th>
							<th width="4%">
								操作
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
				<div class="col-md-3 aligh-right" style="display:none" id="noticediv">
					<button type="button" class="btn blue" id="notice">通知到账</button>
				</div>
	   		</form>
		</div>
		<div class="clean_t"></div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/yd/scripts/ydkepp.js"></script>
<script>
	 jQuery(document).ready(function() {    
		 DamaiSettle.init();
	}); 
</script>