<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">当日截止当前时点代偿金查询</span>
				<span class="caption-helper">当日截止当前时点代偿金查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">产品</label>
					<div class="input-icon col-md-9">
						<input type="text" id="prodcd" name="prodcd" class="form-control input-inline input-medium" maxlength="18" placeholder="选择产品">
					</div>
				</div>
				<div class="form-actions file-action col-md-4" style = "text-align:right;">
					<button type="button" class="btn blue" id="select" style="padding: 5px 44px;margin-right: -14px;">查询</button>
				</div>
				<div class="clean"></div>
			</form>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal" id = "file-form">
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">产品代码</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly  id="prodcd2" name="prodcd2"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">产品名称</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly  id="prodna" name="prodna"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">日期</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly  id="trandt" name="trandt"/>
						</div>
					</div>
				</div>
				</div>
				<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">还款总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="totamo" name="totamo"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">已还款总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="alreim" name="alreim"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">未还款总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="hvreim" name="hvreim"/>
						</div>
					</div>
				</div>
				</div>
				<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">代偿户余额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="cpstam" name="cpstam"/>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-3">需补充代偿资金总额</label>
						<div class="input-group col-md-9 input-medium input-icon ">
							<i class="fa fa-cny"></i>
							<input class="form-control placeholder-no-fix" type="text" autocomplete="off" readOnly placeholder="交易金额,保留两位有效数字" id="btotam" name="btotam"/>
						</div>
					</div>
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
<script src="${ctx}/pages/ln/scripts/cpsgqy.js"></script>
<script>
	jQuery(document).ready(function() {
		cpsgqy.init();
	});
</script>