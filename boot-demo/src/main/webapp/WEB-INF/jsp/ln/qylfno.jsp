<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">贷款借据信息查询</span>
				<span class="caption-helper">贷款借据信息查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">借据号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="lncfno" name="lncfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入借据号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">当期期数</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="termno" name="termno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入当期期数">
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
				<table class="table table-striped table-bordered table-hover" id="lncfno_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">							   		
							<th width="10%">
								贷款借据号
							</th>													
							<th width="8%">
								当期应还金额
							</th>
							<th width="8%">
								当期还款金额
							</th>
							<th width="8%">
								期数
							</th>
							<th width="8%">
								期供状态
							</th>
							<th width="8%">
								是否代偿
							</th>
							<th width="8%">
								当期代偿金额
							</th>
							<th width="8%">
								是否追偿
							</th>
							<th width="8%">
								当期追偿金额
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
<script src="${ctx}/pages/ln/scripts/qylfno.js"></script>
<script>
	jQuery(document).ready(function() {    
		qylfno.init();
	});
</script>