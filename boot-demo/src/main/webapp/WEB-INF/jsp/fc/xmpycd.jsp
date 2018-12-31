<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	
	<!-- 卡bin校验start -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">提前还款多卡扣款</span>
				<span class="caption-helper">提前还款多卡扣款信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="card-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！<span class="msg"></span>
				</div>
				<div class="alert alert-success display-hide">
					<button class="close" data-close="alert"></button>
						 返回信息 ：<span class="msg"></span>
				</div>
				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">申请人姓名</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-user"></i>
						<input type="text" id="custna" name="custna" class="form-control input-inline input-medium" maxlength="18" placeholder="输入申请人姓名">
					</div>
				</div>
				<div class="form-group col-md-6" >
					<label class="col-md-3 control-label">证件类型</label>
					<div class="input-icon col-md-9">
						<input type="text" id="idtftp" name="idtftp" class="form-control input-inline input-medium" maxlength="18" placeholder="输入证件类型">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">申请人证件号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-table"></i>
						<input type="text" id="idtfno" name="idtfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入申请人证件号码">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">银行卡号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="cardno" name="cardno" readonly="readonly" class="form-control input-inline input-medium" maxlength="10" placeholder="输入银行卡号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">银行名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-book"></i>
						<input type="text" id="bankna" name="bankna" readonly="readonly" class="form-control input-inline input-medium" maxlength="19" placeholder="输入银行名称">
					</div>
				</div>
				<div class="form-group col-md-6" >
					<label class="col-md-3 control-label">卡开户行号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-table"></i>
						<input type="text" id="bkbrno" name="bkbrno" readonly="readonly" class="form-control input-inline input-medium" maxlength="18" placeholder="输入卡开户行号">
					</div>
				</div>
				<div class="form-group col-md-6" >
					<label class="col-md-3 control-label">卡开户名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-book"></i>
						<input type="text" id="bkbrna" name="bkbrna" readonly="readonly" class="form-control input-inline input-medium" maxlength="19" placeholder="输入卡开户名称">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">银行卡类型</label>
					<div class="input-icon col-md-9">
						<input type="text" id="cardtp" name="cardtp" readonly="readonly" class="form-control input-inline input-medium" maxlength="10" placeholder="输入银行卡类型">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">银行预留手机号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-mobile-phone"></i>
						<input type="text" id="mobile" name="mobile" readonly="readonly" class="form-control input-inline input-medium" maxlength="11" placeholder="输入银行预留手机号">
					</div>
				</div>
				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">币种</label>
					<div class="input-icon col-md-9">
						<input type="text" id="crcycd" name="crcycd" readonly="readonly" class="form-control input-inline input-medium" maxlength="11" placeholder="输入币种">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">交易金额</label>
					<div class="input-icon col-md-9">
						<input type="text" id="tranam" name="tranam" readonly="readonly" class="form-control input-inline input-medium" maxlength="11" placeholder="输入交易金额">
					</div>
				</div>
				
				
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">提交</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
		</div>
	</div>
	<!-- 卡bin校验end -->
	
</div>


<!-- 修改操作员弹出窗口 -->


<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fc/scripts/xmpycd.js"></script>
<script>
	jQuery(document).ready(function() {    
		xmpycd.init();
	});
</script>