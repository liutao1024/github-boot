<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">萨摩耶银联代扣差错处理</span>
				<span class="caption-helper">萨摩耶银联代扣差错处理</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">对账日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "check-date" class="form-control" name="checkdate">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">处理状态</label>
						<div class="input-group col-md-8">
							<input type="hidden" id="checkS" name="checkS" class="form-control input-inline input-small" placeholder="选择处理状态"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4">
					<button type="button" class="btn blue" id="submit">导入差错信息</button>
				</div>
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="cppchk_ajax">
					<thead>
						<tr role="row" class="heading">	
							<th width="2%">
								<input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes"/>
							</th>
							<th width="8%">
								核对日期
							</th>
							<th width="8%">
								商户编号
							</th>
							<th width="8%">
								商户日期
							</th>
							<th width="8%">
								订单号
							</th>
							<th>客户名称</th>
							<th>电子账号</th>
							<th width="8%">
								交易金额
							</th>
							<th>交易币种</th>
							<th>前置流水</th>
							<th>前置日期</th>
							<th width="8%">
								对账结果
							</th>
							<th width="8%">
								处理状态
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
		<div class="clean_t"></div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/smy/scripts/smylqs.js"></script>
<script>
	jQuery(document).ready(function() {    
		Smrepy.init();
	});
</script>