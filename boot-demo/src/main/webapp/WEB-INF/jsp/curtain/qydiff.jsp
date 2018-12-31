<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- 对账差错查询主页面开始 -->
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">二代对账差错处理</span>
				<span class="caption-helper">二代对账差错处理...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">对账日期</label>
					<div class="input-icon col-md-9">
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" class="form-control" name="chckdt" id="chckdt"
								maxlength="8" placeholder="选择日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">差错处理情况</label>
					<div class="input-icon col-md-9">
						<input type="text" id="procfg" name="procfg" class="form-control input-inline input-medium"  placeholder="请选择差错类型">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">出入金方式</label>
					<div class="input-icon col-md-9">
						<input type="text" id="fromtp" name="fromtp" class="form-control input-inline input-medium"  placeholder="请选择出入金方式">
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="mainSubmit">查询</button>
					<button type="button" class="btn gray" id="mainCancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			 <div class="table-container">
			 <div class="table-actions-wrapper">
				<span> </span>
			</div>
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="8%">渠道号</th>
							<th width="8%">渠道流水</th>
							<th width="8%">清算日期</th>
							<th width="8%">出入金方式</th>
							<th width="8%">出入金标志</th>
							<th width="8%">交易日期</th>					
							<th width="8%">交易流水</th>
							<th width="8%">交易帐号</th>
							<th width="8%">帐户名称</th>
							<th width="8%">行号</th>
							<th width="8%">卡号</th>
							<th width="8%">交易金额</th>
							<th width="8%">币种</th>
							<th width="8%">差错类型</th>
							<th width="8%">是否完成差错处理</th>									
							<th width="10%" colspan="3">操作</th>	
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<!-- 对账差错查询主页面结束 -->

<!-- 弹出窗口 -->
<div id="chaCuoChuLiModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="95%">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title"></h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal mod-form" id="mod-form" role="form">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						<span>输入交易参数有误</span>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">渠道号</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_servno" name="th_servno" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">渠道流水</label>
							<div class=" input-group col-md-9">							
								<input type="text" id="th_servsq" name="th_servsq" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>						
						<div class="form-group">			
							<label class="col-md-3 control-label">清算日期</label>
							<div class=" input-group col-md-9">							
								<input type="text" id="th_keepdt" name="th_keepdt" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">出入金方式</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_fromtp" name="th_fromtp" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">出入金标志</label>
							<div class=" input-group col-md-9">
								<input type="text" id="th_ioflag" name="th_ioflag" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易日期</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_trandt" name="th_trandt" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">交易流水</label>
							<div class=" input-group col-md-9">							
								<input type="text" id="th_transq" name="th_transq" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易帐号</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_acctno" name="th_acctno" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">客户名称</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_acctna" name="th_acctna" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group ">
							<label class="col-md-3 control-label">行号</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_bankno" name="th_bankno" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">卡号</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_cardno" name="th_cardno" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易金额</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_tranam" name="th_tranam" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="  input-group col-md-9">						
								<input type="text" id="th_crcycd" name="th_crcycd" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">差错类型</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_difftp" name="th_difftp" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">是否已处理</label>
							<div class="input-group col-md-9">
								<input type="text" id="th_procfg" name="th_procfg" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">			
							<label class="col-md-3 control-label">对账日期</label>
							<div class=" input-group col-md-9">							
								<input type="text" id="th_chckdt" name="th_chckdt" class="form-control input-inline input-medium" readOnly >
							</div>
						</div>
						<div class="form-group">			
							<label class="col-md-3 control-label">备注信息</label>
							<div class=" input-group col-md-9">							
								<input type="text" id="th_remark" name="th_remark" class="form-control input-inline input-medium">
							</div>
						</div>
					</div>
				</form>
			</div>			
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">取消</button>
		<button type="button" id="th_save" class="btn blue">确认</button>
	</div>
</div>
<!-- 弹出窗口结束 -->

<!-- 确认退汇弹出窗口开始 -->
<div id="makeSureTuiHuiModal" class="modal fade out" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="600">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">您确定退汇处理了吗</h4>		
	</div>
	<div class="modal-footer col-md-12" id="btn_cont">
	     <button type="button" class="btn blue" id="btn_rjth">确认</button>
	   	 <button type='button' class='btn btn-default' data-dismiss="modal">取消</button>
	</div>
</div>
<!-- 确认退汇弹出窗口结束 -->

<!-- 确认维护入账弹出窗口开始 -->
<div id="makeSureWeiHuRuZhangModal" class="modal fade out" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="600">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">您确定维护入账处理了吗</h4>		
	</div>
	<div class="modal-footer col-md-12" id="btn_cont">
	     <button type="button" class="btn blue" id="btn_whrz">确认</button>
	     <button type='button' class='btn btn-default' data-dismiss="modal">取消</button>
	</div>
</div>
<!-- 确认维护入账弹出窗口结束 -->

<!-- 确认出金冲账弹出窗口开始 -->
<div id="makeSureChuJingChongZhangModal" class="modal fade out" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="600">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">您确定冲账处理了吗</h4>		
	</div>
	<div class="modal-footer col-md-12" id="btn_cont">
	     <button type="button" class="btn blue" id="btn_cjcz">确认</button>
	     <button type='button' class='btn btn-default' data-dismiss="modal">取消</button>
	</div>
</div>
<!-- 确认出金冲账弹出窗口结束 -->


<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/curtain/scripts/qydiff.js"></script>
<script>
	jQuery(document).ready(function() {  
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		Qydiff.init();
	});
</script>