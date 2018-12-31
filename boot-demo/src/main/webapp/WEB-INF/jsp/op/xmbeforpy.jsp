<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">分账前清算</span>
				<span class="caption-helper">分账前清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">资金清算状态</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="clstus" name="clstus" 
								class="form-control input-inline" placeholder="资金清算状态" />
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-5">清算类型</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="clertp" name="clertp" 
								class="form-control input-inline" placeholder="清算类型" />
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3">
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<!-- END FILE FORM -->
			<div class="clean"></div>
			</form>
		</div>
		<div class="row">
				<div class="col-md-12">
					<div class="table-container">
						<table class="table table-striped table-bordered table-hover"
							id="xmbeforpy_ajax" style="white-space: nowrap;">
							<thead>
								<tr role="row" class="heading">
									<th>批次编号</th>
									<th>标的编号</th>
									<th>渠道号</th>
									<th>待清算金额</th>
									<th>所属机构</th>
									<th>资金清算状态</th>
									<th>追清算类型</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</div>
	   <div class="portlet-body">
	   		<form class="file-form form-horizontal" id = "sum-form">
	   			<div class="col-md-3">
					<div class="form-group row">
						
					</div>
				</div>
	   		</form>
		</div>
		<div class="clean_t"></div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/op/scripts/xmbeforpy.js"></script>
<script>
	jQuery(document).ready(function() {
		XmBeforpy.init();
	});
</script>