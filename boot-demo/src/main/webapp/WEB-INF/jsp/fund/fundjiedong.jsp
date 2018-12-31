<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">基金解冻</span>
				<span class="caption-helper">基金解冻</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "fcdate">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">交易日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "trandt" class="form-control" name="trandt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">客户电子账号</label>
						<div class="input-group col-md-8">
							<input type="text" id="custac" name="custac" class="form-control input-inline input-small" placeholder="电子账号（选填）"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-3">
					<button type="button" class="btn blue" id="submit">查询解冻数据</button>
				</div>
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="fundfind_ajax">
					<thead>
						<tr role="row" class="heading">	
							<th width="8%">
								电子账号
							</th>
							<th width="8%">
							         交易时间
							</th>
							<th width="6%">
								交易流水
							</th>
						
							<th width="8%">
								基金订单流水
							</th>
							<th width="8%">
								币种
							</th>
							<th width="6%">
								基金份额
							</th>
							<th width="6%">
								 交易状态
							</th>							
							<th width="8%">
								操作
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

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fund/scripts/fundjiedong.js"></script>
<script>
	jQuery(document).ready(function() {   
		Fundjiedong.init();
	});
</script>