<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">代发工资</span>
				<span class="caption-helper">内部户查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN SINGLEDEBT FORM -->
			<form class="adjust-form form-horizontal" id="adjust_form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				
				<div class="col-md-12">
					<div class="form-group">
						<label class="control-label col-md-3 lable" style="left: -135px;">内部户账号</label>
						<div class="input-icon col-md-9">
							<i class="fa fa-credit-card" style="left: -122px;"></i>
							<input class="form-control placeholder-no-fix acctno input-medium" style="margin-left: -137px;" type="text" maxlength="18" autocomplete="off" placeholder="内部户账号" id="acctno" name="acctno"/>						
						</div>	
                         <div class="acctna">帐号名称：<span class="name" id="cmpyno-name"></span></div>
						
					</div>
				</div>
			
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-3 lable" >企业编号</label>
						<div class="input-icon col-md-9">
							<i class="fa fa-credit-card "></i>
							<input class="form-control placeholder-no-fix acctno"  type="text" autocomplete="off" maxlength="18" placeholder="贷方帐号" id="cmpyno" name="cmpyno"/>
						</div>
						<div class="acctna">企业客户名称：<span class="name" id="d_cmpyno"></span></div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">					
						<div class="acctna">内部户余额：<span class="name" id="d_onlnbl"></span></div>
					</div>
				</div>		
					
				<div class="padd"></div>
				<div class="form-actions intran-action">
					<button type="button" class="btn blue" id="submit">确认</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				
			</form>
			<!-- END SINGLEDEBT FORM -->
		</div>
	</div>
</div>
<script src="${ctx}/pages/pay/scripts/qrpyac.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qrpyac.init();
	});
</script>