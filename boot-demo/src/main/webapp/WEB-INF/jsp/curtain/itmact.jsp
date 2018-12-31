<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">科目记账</span>
				<span class="caption-helper">科目记账操作...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">科目号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="itemcd" name="itemcd" class="form-control input-inline input-medium" 
						 placeholder="输入科目号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">机构号</label>
					<div class="input-icon col-md-9">
						<input type="text" id="brchno" name="brchno" class="form-control input-inline input-medium" 
						 placeholder="选择机构号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">交易金额</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="tranam" name="tranam" class="form-control input-inline input-medium" 
						 placeholder="输入交易金额">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">借贷标志</label>
					<div class="input-icon col-md-9">
						<input type="text" id="amntcd" name="amntcd" class="form-control input-inline input-medium" 
						 placeholder="选择借贷标志">
					</div>
				</div>
				
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">确定</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
		</div>
	</div>
</div>

<script src="${ctx}/pages/curtain/scripts/itmact.js" type="text/javascript" ></script>
<script>
	jQuery(document).ready(function() {    
		Itmact.init();
	});
</script>