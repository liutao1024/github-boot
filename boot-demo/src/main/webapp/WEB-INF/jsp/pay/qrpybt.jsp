<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">代发工资批次查询</span>
				<span class="caption-helper">代发工资批次查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">企业编号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="cmpyno" name="cmpyno" class="form-control input-inline input-medium" maxlength="10" placeholder="输入企业编号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="idtfno" name="idtfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入营业执照">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="control-label col-md-3">任务执行日期</label>
						<div class="input-group col-md-9 input-medium date date-picker " data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months" style="margin-left: 145px;">
							<input type="text" id = "dealdt" class="form-control " name="dealdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			 <div class="table-container">
			 <div class="table-actions-wrapper">
				<span> </span>
				<!-- <button id="add_pars_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button> -->
			</div>
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="8%">
								企业编号
							</th>	
							<th width="5%">
								任务批次号
							</th>
							<th width="10%">
								创建日期
							</th>													
							<th width="8%">
								创建流水
							</th>
							<th width="9%">
								状态
							</th>
							<th width="12%">
								备注
							</th>
							
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>


<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/pay/scripts/qrpybt.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qrpybt.init();
	});
</script>