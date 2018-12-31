<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">小马bank还款处理</span>
				<span class="caption-helper">小马bank还款处理</span>
			</div>
		</div>
		<div class="portlet-body">
			<form action="<%=request.getContextPath()%>/rest/fc/repayFile"
				id="myfile" class="form-horizontal form-bordered" method="POST"
				enctype="multipart/form-data" target="hidden_frame"
				onsubmit="return fcbill.submit();"
				onchange="return fcbill.change();">
				<div class="form-body">
					<div class="form-group col-md-7">
						<label class="control-label col-md-3">选择还款文件</label>
						<div class="col-md-9">
							<div class="fileinput fileinput-new" data-provides="fileinput">
								<div class="input-group input-large">
									<div class="form-control uneditable-input span3"
										data-trigger="fileinput">
										<i class="fa fa-file fileinput-exists"></i>&nbsp; <span
											class="fileinput-filename"> </span>
									</div>
									<span class="input-group-addon btn default btn-file"> <span
										class="fileinput-new"> 选择还款文件 </span> <span
										class="fileinput-exists"> 替换文件 </span> <input type="file"
										name="myfile">
									</span> <a href="#" class="input-group-addon btn red fileinput-exists"
										data-dismiss="fileinput"> 移除文件 </a>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group col-md-3">
						<div class="row">
							<div class="col-md-offset-3 col-md-9">
								<button type="submit" id="sub" class="btn purple">
									<i class="fa fa-cloud-upload"></i>&nbsp;&nbsp;上&nbsp;传
								</button>
							</div>
						</div>
					</div>
					<div class="form-group col-md-2">
						<iframe name='hidden_frame' id="hidden_frame"
							style="border: none; height: 60px; width: 200px;"></iframe>
					</div>
				</div>
				<div class="clean"></div>
			</form>
		</div>
		<div class="modal-body">
			<form class="file-form form-horizontal" id="file-form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">对账日期</label>
						<div class="input-group col-md-9 date input-small date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" id="check-date" class="form-control"
								name="checkdate"> <span class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">处理状态</label>
						<div class="input-group col-md-8">
							<input type="hidden" id="checkS" name="checkS"
								class="form-control input-inline" placeholder="处理状态" />
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4"
					style="text-align: right;">
					<button type="button" class="btn blue" id="select"
						style="padding: 5px 44px; margin-right: -14px;">查询</button>
				</div>
				<div class="col-md-12">
				<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">总处理金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="totalam" class="form-control"
										name="totalam">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">未处理金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="unhandleam" class="form-control"
										name="unhandleam">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">成功总金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="successam" class="form-control"
										name="successam">
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label class="control-label col-md-5">失败总金额</label>
								<div class="input-group col-md-5">
									<input type="text" id="failam" class="form-control"
										name="failam">
								</div>
							</div>
						</div>
					</div>
			</form>
			<div class="row">
				<div class="col-md-12">
					<div class="table-container">
						<table class="table table-striped table-bordered table-hover"
							id="back_ajax">
							<thead>
								<tr role="row" class="heading">
									<th width="2%"><input type="checkbox"
										class="group-checkable" data-set="#sample_1 .checkboxes" /></th>
									<th width="8%">还款流水号</th>
									<th width="8%">合同号</th>
									<th width="8%">客户名称</th>
									<th width="8%">证件类型</th>
									<th width="8%">证件号码</th>
									<th width="8%">币种</th>
									<th width="8%">应还本金</th>
									<th width="8%">应还利息</th>
									<th width="8%">代扣顾问费</th>
									<th width="8%">录入日期</th>
									<th width="8%">处理状态</th>
									<th width="8%">备注</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/fc/scripts/fcrepy.js"></script>
<script>
	jQuery(document).ready(function() {
		fcbill.init();
	});
</script>