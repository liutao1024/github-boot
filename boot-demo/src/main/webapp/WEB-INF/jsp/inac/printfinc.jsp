<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light" id="p2">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">日终并账凭证打印</span>
				<span class="caption-helper">日终并账信息</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="fincselform" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span class="msg">未选择账务日期</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">账务日期</label>
					<div class="col-md-9">
						<div class="input-group col-md-9 input-medium date date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<span class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span> <input type="text" id="fincdt" name="fincdt"
								class="form-control input-inline input-medium form-value"
								maxlength="8" placeholder="请选择账务日期">
						</div>
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="subqry">
						<i class="fa fa-search"></i>查询
					</button>
					<button type="button" class="btn gray" id="canqry">
						<i class="fa fa-times"></i>清空
					</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="finc_ajax" >
					<thead>
						<tr role="row" class="heading">
							<th width="15%">科目号</th>
							<th width="15%">科目名称</th>
							<th width="20%">账务机构</th>
							<th width="20%">借/收方上期余额</th>
							<th width="20%">贷/付方上期余额</th>
							<th width="20%">借方发生额</th>
							<th width="20%">贷方发生额</th>
							<th width="20%">借/收方本期余额</th>
							<th width="20%">贷/付方本期余额</th>
							<th width="20%">账务日期</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
	<!-- 打印界面 -->
	<div id="printModal" class="modal fade" tabindex="-1"
		data-backdrop="static" data-keyboard="false"  data-width="900">
		<div class="modal-header" id="p1">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true"></button>
			<h4 class="modal-title">日终并账凭证打印预览</h4>
			<div>
				<button id='printk'
					class='btn btn-sm purple table-group-action-submit'>打印</button>
			</div>
		</div>
		<table class="table table-striped table-bordered table-hover" id="printTable" style= "table-layout:fixed;">
			<thead>
				<tr role="row" class="heading">
					<th width="15%">科目号</th>
					<th width="20%">账务机构</th>
					<th width="20%">借/收方上期余额</th>
					<th width="20%">贷/付方上期余额</th>
					<th width="20%">借方发生额</th>
					<th width="20%">贷方发生额</th>
					<th width="20%">借/收方本期余额</th>
					<th width="20%">贷/付方本期余额</th>
					<th width="20%">账务日期</th>
				</tr>
			</thead>
		</table>
		<!-- 
		<div data-backdrop="static" data-keyboard="false" id="p3">
			<div class="form-group col-md-6">
						<label class="col-md-3 control-label">当前记录：</label>
						<div class="input-icon col-md-9"><input type="text"
								id="nextNum" name="nextNum"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
					<div class="form-group col-md-6">
						<label class="col-md-3 control-label">总记录</label>
						<div class="input-icon col-md-9"><input type="text" 
						        id="allNum" name="allNum"
								class="form-control input-inline input-medium" readOnly />
						</div>
					</div>
					<div class="modal-footer">
				<button type="button" class="btn btn-sm yellow" id="nexpge"><i class="fa fa-search"></i>下一条</button>
				</div>
		</div> -->
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/inac/scripts/printfinc.js"></script>
<script>
	jQuery(document).ready(function() {
		printfinc.init();
	});
</script>