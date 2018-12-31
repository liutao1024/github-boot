<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">对账文件结果查询</span>
				<span class="caption-helper">对账文件结果查询...</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal cust-form" id="custye-form" role="form">
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
					<label class="col-md-3 control-label">出入金方式</label>
					<div class="input-icon col-md-9">
						<input type="text" id="fromtp" name="fromtp" class="form-control input-inline input-medium"  placeholder="请选择出入金方式">
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
				<table class="table table-striped table-bordered table-hover" id="cif_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<th width="10%">
								对账日期
							</th>	
							<th width="12%">
								出入金方式
							</th>
							<th width="12%">
								文件名
							</th>													
							<th width="8%">
								是否存在差错标志
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
	</div>
	
	<div class="inbox-content"></div>
</div>
<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/curtain/scripts/qrdfrt.js"></script>
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
		Qrdfrt.init();
	});
</script>