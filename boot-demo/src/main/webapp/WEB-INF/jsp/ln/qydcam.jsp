<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">节假日代偿金查询</span>
				<span class="caption-helper">节假日代偿金查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				
				<div class="form-group col-md-12 ">
				<div class="form-group col-md-5">
						<label class="col-md-3 control-label">开始日期</label>
						<div class="col-md-9">
							<div class="input-group col-md-12 date input-medium date-picker"
								data-date-format="yyyymmdd" data-date-viewmode="years"
								data-date-minviewmode="months" id="mubiao">
								<input type="text" class="form-control" id="bgdate"
									maxlength="8" placeholder="选择开始日期"> <span
									class="input-group-btn">
									<button class="btn default" type="button">
										<i class="fa fa-calendar"></i>
									</button>
								</span>
							</div>
						</div>
				</div>
				<div class="form-group col-md-5">
						<label class="col-md-3 control-label">结束日期</label>
						<div class="col-md-9">
							<div class="input-group col-md-12 date input-medium date-picker"
								data-date-format="yyyymmdd" data-date-viewmode="years"
								data-date-minviewmode="months" id="mubiao2">
								<input type="text" class="form-control" id="endate"
									maxlength="8" placeholder="选择结束日期"> <span
									class="input-group-btn">
									<button class="btn default" type="button">
										<i class="fa fa-calendar"></i>
									</button>
								</span>
							</div>
						</div>
				</div>
				</div>
				<div class="form-group col-md-12 ">
				<div class="form-group col-md-5">
					<label class="col-md-3 control-label">产品</label>
					<div class="input-icon col-md-9">
						<input type="text" id="prodcd" name="prodcd" class="form-control input-inline input-medium" maxlength="18" placeholder="选择产品">
					</div>
				</div>
				<div class="form-group col-md-5">
					<label class="col-md-3 control-label">代偿率</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="pecent" name="pecent" class="form-control input-inline input-medium" maxlength="18" placeholder="输入代偿率">
					</div>
				</div>
				<div class="form-actions file-action">
					<button type="button" class="btn blue" id="select" style="padding: 5px 44px;">查询</button>
				</div>
				<div class="clean"></div>
				</div>
			</form>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-3">应还款总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="pyshou" name="pyshou"/>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-3">代偿资金估算额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="estval" name="estval"/>
						</div>
					</div>
				</div>
			
				</div>
				<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-3">代偿户余额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="dredbl" name="dredbl"/>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-3">需补充代偿资金总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="diffam" name="diffam"/>
						</div>
					</div>
				</div>
				<div>
					<button type="button" class="btn blue" id="sendmsg" disabled style="padding: 5px 44px;">发短信</button>
				</div>
				</div>
				<div class="clean">
				</div>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/ln/scripts/qydcam.js"></script>
<script>
	jQuery(document).ready(function() {
		qydcam.init();
	});
</script>