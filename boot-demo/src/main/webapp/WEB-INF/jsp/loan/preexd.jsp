<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">预约展期</span>
				<span class="caption-helper">录入&取消...</span>
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
						<div class="col-md-5">
							<div class="form-group">
								<div class="col-md-9 input-icon input-group">
									<i class="fa fa-cube"></i> <input type="text" id="lncfno"
										class="form-control input-inline" maxlength="30"
										placeholder="输入借据号"> <span class="input-group-btn">
										<button type="button" class="btn blue btn_sm margin-bottom" id="qry_btn">
											<i class="fa fa-search"></i>查询
										</button>
									</span>
								</div>
							</div>
						</div>
						<div class='clean'></div>
					</form>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal control-label" role="form" id="preexd_form">
				<div class="col-md-12">
					<h4 class="form-section">借据信息</h4>	
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">借据号</label>
								<div class="col-md-9">
									<input type="text" id="lncfno1" name="lncfno1"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款账号</label>
								<div class="col-md-9">
									<input type="text" id="acctno" name="acctno"
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
								<label class="col-md-3 control-label font-green-sharp">产品名称</label>
								<div class="col-md-9">
									<input type="text" id="prodna" name="prodna"
										class="form-control input-inline input-medium" readOnly>
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
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">正常本金</label>
								<div class="col-md-9">
									<input type="text" id="lnnpbl" name="lnnpbl"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">起息日期</label>
								<div class="col-md-9">
									<input type="text" id="instdt" name="instdt"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">到期日期</label>
								<div class="col-md-9">
									<input type="text" id="matudt" name="matudt"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</div>
					<h4 class="form-section">展期信息</h4>	
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">展期合同号</label>
								<div class="col-md-9">
									<input type="text" id="exctno" name="exctno" maxlength="30"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">展期金额</label>
								<div class="col-md-9">
									<input type="text" id="expdam" name="expdam"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">展期日期</label>
								<!--<div class="col-md-9">
									<input type="text" id="expddt" name="expddt"
										class="form-control input-inline input-medium" >
								</div>-->
								<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
									<input type="text" id="expddt" name="expddt" class="form-control input-inline input-medium" maxlength="8" placeholder="输入展期日期" >
									<span class="input-group-btn">
										<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
									</span>
								</div>	
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">展期到期日</label>
								<!--<div class="col-md-9">
									<input type="text" id="exmtdt" name="exmtdt"
										class="form-control input-inline input-medium" >
								</div>-->
								<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
									<input type="text" id="exmtdt" name="exmtdt" class="form-control input-inline input-medium" maxlength="8" placeholder="输入展期到期日期">
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
								<label class="col-md-3 control-label font-green-sharp">利率类型</label>
								<div class="col-md-9">
									<input type="text" id="lnirkd" name="lnirkd"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
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
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">利率调整方式</label>
								<div class="col-md-9">
									<input type="text" id="irrvtp" name="irrvtp"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">利率调整周期</label>
								<div class="col-md-9">
									<input type="text" id="irrvfm" name="irrvfm"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">利率浮动方式</label>
								<div class="col-md-9">
									<input type="text" id="irfltp" name="irfltp"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">利率浮动值</label>
								<div class="col-md-9">
									<input type="text" id="irflvl" name="irflvl"
										class="form-control input-inline input-medium" >
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="form-actions">
					<button type="button" class="btn blue" id="cancel_btn" disabled="disabled"><i class="fa fa-angle-down"></i>预约展期取消</button>
					<button type="button" class="btn blue" id="submit_btn" disabled="disabled"><i class="fa fa-check"></i> 预约展期录入</button>
				</div>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/curtain/scripts/preexd.js"></script>
<script>
	jQuery(document).ready(function() {
		preexd.init();
	});
</script>