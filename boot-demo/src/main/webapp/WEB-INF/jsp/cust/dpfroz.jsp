<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">司法冻结</span>
				<span class="caption-helper">司法冻结基本信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="dpfroz-form" role="form">
			<div class="form-body">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
				</div>
				<div class="alert alert-success display-hide">
					<button class="close" data-close="alert"></button>
						表单提交成功！返回信息 ：<span class="msg"></span>
				</div>
				<div class="col-md-6">
					<div class="form-group ">
						<label class="col-md-4 control-label">客户账号</label>
						<div class="col-md-8">
							<input type="text" id="custac" name="custac" class="form-control input-inline input-medium" placeholder="输入客户账号">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结主体类型</label>
						<div class="col-md-8">
							<input type="text" id="frozow" name="frozow" class="form-control input-inline input-medium" placeholder="请选择冻结主体类型">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">限制类型</label>
							<div class="col-md-8">
								<input type="text" id="frlmtp" name="frlmtp" class="form-control input-inline input-medium" placeholder="限制类型">
							</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结金额</label>
						<div class="col-md-8">
							<input type="text" id="frozam" name="frozam" class="form-control input-inline input-medium" placeholder="冻结金额">
						</div>	
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结证明文书类别</label>
						<div class="col-md-8">
							<input type="text" id="frcttp" name="frcttp" class="form-control input-inline input-medium" placeholder="冻结证明文书类别">
						</div>	
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">货币代号</label>
						<div class="col-md-8">
							<input type="text" id="crcycd" name="crcycd" class="form-control input-inline input-medium" placeholder="货币代号">
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">执法人员1证件种类</label>
						<div class="col-md-8">
							<input type="text" id="idtp01" name="idtp01" class="form-control input-inline input-medium" placeholder="执法人员1证件种类">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">执法人员1证件号码</label>
						<div class="col-md-8">
							<input type="text" id="idno01" name="idno01" class="form-control input-inline input-medium" placeholder="执法人员1证件号码">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">执法人员1姓名</label>
							<div class="col-md-8">
								<input type="text" id="frna01" name="frna01" class="form-control input-inline input-medium" placeholder="执法人员1姓名">
							</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结业务类型</label>
							<div class="col-md-8">
								<input type="text" id="froztp" name="froztp" class="form-control input-inline input-medium" placeholder="冻结业务类型">
							</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="col-md-4 control-label">账户钞汇标志</label>
						<div class="col-md-8">
							<input type="text" id="csextg" name="csextg" class="form-control input-inline input-medium" placeholder="账户钞汇标志">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结原因</label>
						<div class="col-md-8">
							<input type="text" id="frreas" name="frreas" class="form-control input-inline input-medium" placeholder="冻结原因">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结终止日期</label>
						<div class="input-group col-md-8 date input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id="freddt" name="freddt" class="form-control input-inline input-medium" placeholder="冻结终止日期" >
							<span class="input-group-btn">
								<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>	
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">冻结通知书编号</label>
						<div class="col-md-8">
							<input type="text" id="frctno" name="frctno" class="form-control input-inline input-medium" placeholder="冻结通知书编号">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">执法部门</label>
						<div class="col-md-8">
							<input type="text" id="frexog" name="frexog" class="form-control input-inline input-medium" placeholder="执法部门">
						</div>
					</div>
					<div class="form-group">
					<label class="col-md-4 control-label">冻结执法部门名称</label>
					<div class="col-md-8">
						<input type="text" id="frogna" name="frogna" class="form-control input-inline input-medium" placeholder="冻结执法部门名称">
					</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">执法人员2证件种类</label>
						<div class="col-md-8">
							<input type="text" id="idtp02" name="idtp02" class="form-control input-inline input-medium" placeholder="执法人员2证件种类">
						</div>	
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">执法人员2证件号码</label>
						<div class="col-md-8">
							<input type="text" id="idno02" name="idno02" class="form-control input-inline input-medium" placeholder="执法人员2证件号码">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">执法人员2姓名</label>
						<div class="col-md-8">
							<input type="text" id="frna02" name="frna02" class="form-control input-inline input-medium" placeholder="执法人员2姓名">
						</div>
					</div>
				</div>
				</div>
					<div class="form-actions cust-action">
					<button type="submit" class="btn blue" id="submit">冻结</button>
				</div>
			</form>
		</div>	
		</div>
	</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript" src="${ctx}/pages/cust/scripts/dpfroz.js" ></script>
<script type="text/javascript">
	jQuery(document).ready(function() {
			if (jQuery().datepicker) {
				$('.date-picker').datepicker({
					rtl : Metronic.isRTL(),
					orientation : "left",
					autoclose : true,
					language : 'zh-CN',
				});
			};
		console.log("ready");
		dpfroz.init();
		
	});

</script>


