<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款提前还款</span>
				<span class="caption-helper">贷款提前还款及试算</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal" role="form" id="task_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="col-md-4 control-label">贷款账号</label>
								<div class="col-md-8 input-icon input-group">
									<i class="fa fa-cube"></i> <input type="text" id="acctno1"
										class="form-control input-inline" maxlength="30"
										placeholder="输入贷款账号"> <span class="input-group-btn">
									</span>
								</div>
							</div>
						</div>
						<!--  
						<div class="col-md-3">
							<div class="form-group">
								<label class="col-md-4 control-label">还款种类</label>
								<div class="col-md-2">
									<div>
										<input type="hidden" id=repytp name="repytp"
											class="form-control input-inline input-small form-value"
											placeholder="选择还款种类" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="col-md-4 control-label">还款类型</label>
								<div class="col-md-2">
									<div>
										<input type="hidden" id=adrptp name="adrptp"
											class="form-control input-inline input-small form-value"
											placeholder="选择还款类型" />
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="col-md-5 control-label">调整计划方式</label>
								<div class="col-md-2">
									<div>
										<input type="hidden" id=epchpl name="epchpl"
											class="form-control input-inline input-small form-value"
											placeholder="选择调整计划方式" />
									</div>
								</div>
							</div>
						</div>
						-->
					</form>
				</div>
			</div>
		</div>
		<div class='clean'></div>
		<div class="portlet-body">
			<form class="form-horizontal control-label" role="form" id="lnprpy_form">
				<div class="col-md-12">
					<h4 class="form-section">借据信息</h4>	
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">借据号</label>
								<div class="col-md-9">
									<input type="text" id="lncfno" name="lncfno"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">合同编号</label>
								<div class="col-md-9">
									<input type="text" id="cntrno" name="cntrno"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户名称</label>
								<div class="col-md-9">
									<input type="text" id="acctna" name="acctna"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">货币代号</label>
								<div class="col-md-9">
									<input type="text" id="crcycd" name="crcycd"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">还款账号</label>
								<div class="col-md-9">
									<input type="text" id="repacc" name="repacc"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">正常本金</label>
								<div class="col-md-9">
									<input type="text" id="repyam" name="repyam"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="form-actions"> 
							<button type="button" id="deal" class="btn blue">提前还款试算</button>
					</div>
				
					<div class='clean'></div>
					<h4 class="form-section">贷款提前还款试算</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款账号</label>
								<div class="col-md-9">
									<input type="text" id="acctno" name="acctno" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款借据号</label>
								<div class="col-md-9">
									<input type="text" id="lncfno1" name="lncfno1"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户名称</label>
								<div class="col-md-9">
									<input type="text" id="acctna1" name="acctna1" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">还款金额</label>
								<div class="col-md-9">
									<input type="text" id="repyam1" name="repyam1" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">正常本金</label>
								<div class="col-md-9">
									<input type="text" id="lnnpbl" name="lnnpbl" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">初始利息</label>
								<div class="col-md-9">
									<input type="text" id="initin" name="initin" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">应收费用</label>
								<div class="col-md-9">
									<input type="text" id="ysxxfe" name="ysxxfe" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">总金额</label>
								<div class="col-md-9">
									<input type="text" id="totalm" name="totalm" maxlength="30"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					  <div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">实际扣款总额</label>
								<div class="col-md-9">
									<input type="text" id="resvam" name="resvam"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp"> 还款账号种类</label>
								<div class="col-md-9">
									<input type="text" id="paytyp" name="paytyp"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>	
					
					<!--<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款账号</label>
								<div class="col-md-9">
									<input type="text" id="acctno" name="acctno" maxlength="30"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款借据号</label>
								<div class="col-md-9">
									<input type="text" id="lncfno1" name="lncfno1"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户名称</label>
								<div class="col-md-9">
									<input type="text" id="acctna1" name="acctna1" maxlength="30"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">上次还款日</label>
								<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
									<input type="text" id="prevdt" name="prevdt" class="form-control input-inline input-medium" maxlength="8" placeholder="输入展期日期" >
									<span class="input-group-btn">
										<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">还款方式</label>
								<div class="col-md-9">
									<input type="text" id="schdtp" name="schdtp" maxlength="30"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">还款金额</label>
								<div class="col-md-9">
									<input type="text" id="repyam1" name="repyam1" maxlength="30"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">借据金额</label>
								<div class="col-md-9">
									<input type="text" id="lncfam" name="lncfam"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">剩余期数</label>
								<div class="col-md-9">
									<input type="text" id="leavtm" name="leavtm"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">正常利率</label>
								<div class="col-md-9">
									<input type="text" id="lnrtir" name="lnrtir"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					-->
				</div>
				<div class="form-actions">		
					<button type="button" class="btn blue" id="submit_btn" disabled="disabled"><i class="fa fa-check"></i>提前还款</button>
				</div>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/loan/scripts/lnprpy.js"></script>
<script>
	jQuery(document).ready(function() {
		lnprpy.init();
	});
</script>