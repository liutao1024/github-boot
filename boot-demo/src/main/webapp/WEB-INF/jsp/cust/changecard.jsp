<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">换绑卡操作</span>
				<span class="caption-helper">换绑卡操作...</span>
			</div>
		</div>		
		<div class="portlet-body">
			<form id="qry_form" class="form-horizontal">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class=" col-md-5">
				<div class="form-group">
					<label class="col-md-3 control-label">电子账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="电子账号" id="custac" name="custac" />
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">开户行号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="开户行号" id="brchno" name="brchno" />
					</div>
				</div>
				<div class="form-group">	
					<label class="col-md-3 control-label">卡开户名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="卡开户名称" id="cakhmc" name="cakhmc" />
					</div>
				</div>
				<div class="form-group">	
					<label class="col-md-3 control-label">卡开户行名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="卡开户行名称" id="brchna" name="brchna" />
					</div>
				</div>
			</div>
				
				<div class=" col-md-5">
				<div class="form-group">
				    <label class="col-md-3 control-label">绑定卡号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="绑定卡号" id="cardno" name="cardno" />
					</div>
				</div>
				<div class="form-group">	
					<label class="col-md-3 control-label">原绑定卡号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-newspaper-o"></i> <input
							class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="原绑定卡号" id="odcdno" name="odcdno" />
					</div>
				</div>
				<div class="form-group">	
					<label class="col-md-3 control-label">卡类型</label>
					<div class="input-icon col-md-9">
						<input class="form-control input-inline input-medium" type="text"
							maxlength="35" placeholder="卡类型" id="cardtp" name="cardtp" />
					</div>
				</div>	
				</div>
				<div class="form-actions form-group col-md-2">
					<button type="submit" id="qry_btn" class="btn blue">换绑卡</button>
				</div>
			</form>
			<div class="cif-clear"></div>
		</div>
	</div>
</div>



<script src="${ctx}/pages/cust/scripts/changecard.js"></script>
<script>
	jQuery(document).ready(function() {
		changecard.init();
	});
</script>