<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8" %>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">资产平衡对账表</span>
				<span class="caption-helper">资产平衡对账表</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">操作日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "check-date" class="form-control" name="checkdate">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3" >
					<button type="button" class="btn blue" id="submit">确定</button>
				</div> 
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="cppchk_ajax">
					<thead>
						<tr role="row" class="heading">	
							<th width="8%">
							</th>
							<th width="8%" colspan="2">
								贷款相关科目发生额
							</th>
							<th width="8%" colspan="2">
								贷款合作业务资金清算
							</th>
							<th width="8%">
								差额
							</th>
						</tr>
						<tr>
						<td width="%8"></td>
						<td width="%8">借方</td><td width="%8">贷方</td><td width="%8">借方</td><td width="%8">贷方</td><td width="%8"></td>
						</tr>	
						<tr>
						<td width="8%">贷款发放</td>
						<td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td>
						</tr>
						<tr>
						<td width="8%">贷款归还(本金)</td>
						<td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td>
						</tr>
						<tr>
						<td width="8%">贷款归还(利息)</td>
						<td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td>
						</tr>
						<tr>
						<td width="8%">合计</td>
						<td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td><td width="8%"></td>
						</tr>	
						
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			 
	   </div>
	   
		<div class="clean_t"></div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/liquidation/scripts/loanba.js"></script>
<script>
	jQuery(document).ready(function() {    
		Upcpay.init();
	});
</script>