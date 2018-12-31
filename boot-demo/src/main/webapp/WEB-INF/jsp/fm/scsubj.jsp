<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- P2P标的信息查询主页面开始 -->
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">P2P标的信息查询</span>
				<span class="caption-helper">P2P标的信息查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">平台服务商号</label>
					<div class="col-md-9">
						<input type="text" id="plafno" name="plafno" class="form-control input-inline input-medium"  placeholder="请输入平台服务商会员号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">标的编号</label>
					<div class="col-md-9">
						<input type="text" id="subjcd" name="subjcd" class="form-control input-inline input-medium"  placeholder="请输入标的编号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">标的名称</label>
					<div class="col-md-9">
						<input type="text" id="subjnm" name="subjnm" class="form-control input-inline input-medium"  placeholder="请输入标的名称">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">标的状态</label>
					<div class="col-md-9">
						<input type="text" id="subjst" name="subjst" class="form-control input-inline input-medium"  placeholder="请选择标的状态">
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
				<table class="table table-striped table-bordered table-hover" id="subj_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="8%">平台服务商会员号</th>
							<th width="8%">标的编号</th>
							<th width="8%">标的名称</th>
							<th width="8%">标的类型</th>
							<th width="8%">标的状态</th>
							<th width="8%">标的总金额</th>
							<th width="8%">标的产品类型</th>
							<th width="8%">标的还款期限</th>
							<th width="8%">标的创建时间</th>
							<th width="8%">标的开始时间</th>
							<th width="8%">还款方式</th>
							<th width="8%">限定最低投标份数</th>
							<th width="8%">限定每份投标金额</th>
							<th width="8%">限定最多投标金额</th>
							<th width="8%">限定最少投标金额</th>
							<th width="8%">已投资资金</th>
							<th width="8%">已放款资金</th>
							<th width="8%">债务人已还资金</th>
							<th width="8%">已还款给债权人资金</th>
							<th width="8%">累计还款利息</th>
							<th width="8%">年化收益率</th>
							<th width="8%">扩展字段</th>
							<th width="8%">处理状态</th>									
							<!-- <th width="10%" colspan="3">操作</th> -->	
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

<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fm/scripts/scsubj.js"></script>
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
		Scsubj.init();
	});
</script>