<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">雨点相关金额查询</span>
				<span class="caption-helper">雨点相关金额查询</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal fund-form" id="fund-form" role="form">
			<div class="form-group">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">应还款总金额：<span id="tranam" style = "font-size:18px;font-weight:700;color:blue;"></span></label> 
					</div>
				</div>	
					
					<div class="form-group col-md-7">
					<label class="control-label col-md-2">查 询 日 期:</label>
					<div class="input-icon col-md-4">
						<div class="input-group input-large date-picker input-daterange"  data-date-format="yyyymmdd">
							<input type="text" class="form-control" id="trandt_from" name="from" placeholder="输入起始日期">
							<span class="input-group-addon">
							到 </span>
							<input type="text" class="form-control" id="trandt_to" name="to" placeholder="输入结束日期">
						</div>
					</div>
				</div>
				<div class="cust-action" class="col-md-2" >	
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				
				
				<div class="clean" ></div>
			</div>
			<br />
			<div class="form-group">
				<div class="col-md-3">
					
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px">待回购总金额：<span id="keppam" style = "font-size:18px;font-weight:700;color:blue;"></span></label> 
					</div>
				</div>
				<div class="col-md-4">
					
					<div class="form-group">
						<label class="col-md-12" style = "margin-top:5px; ">待回购日期：<span id="keppdt" style = "font-size:18px;font-weight:700;color:blue ;"></span></label> 
					</div>
				</div>
				<div class="form-actions file-action col-md-3" style = "text-align:right;">
					<button type="button" class="btn blue" id="incler" style=" margin-right: -40px;">查询</button>
				</div>
			</div>
			</form>
			
		</div>
		</div>
		</div>
<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/yd/scripts/ydartm.js"></script>
<script>
	 jQuery(document).ready(function() {    
		 DamaiSettle.init();
	}); 
</script>