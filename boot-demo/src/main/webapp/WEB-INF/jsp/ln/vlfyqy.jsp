<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">易鑫车贷还款处理</span>
				<span class="caption-helper">易鑫车贷还款处理...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-4">
					<label class="col-md-4 control-label">客户姓名:</label>
					<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i> <input type="text" id="custna"
							name="custna" class="form-control input-inline input-medium"
							maxlength="18" placeholder="客户姓名">
					</div>
				</div>
				<div class="form-group col-md-4">
					<label class="col-md-4 control-label">证件号码:</label>
					<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i> <input type="text" id="idtfno"
							name="idtfno" class="form-control input-inline input-medium"
							maxlength="18" placeholder="证件号码">
					</div>
				</div>
				<div class="form-group col-md-4">
					<label class="col-md-4 control-label">电话号码:</label>
					<div class="input-icon col-md-8">
						<i class="fa fa-credit-card"></i> <input type="text" id="teleno"
							name="teleno" class="form-control input-inline input-medium"
							maxlength="18" placeholder="电话">
					</div>
				</div>
			
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
				    <button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn green" id="cancle" name="cancle">取消</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover"
					id="yx_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">客户姓名</th>
							<th width="8%">证件号码</th>
							<th width="10%">电话号码</th>							
							<th width="9%">借据号</th>
							<th width="10%">总期数</th>
							<th width="8%">本期期数</th>
							<th width="8%">应还款日期</th>
							<th width="5%">应还款金额</th>
							<th width="8%">还款账户种类</th>
							<th scope="col" colspan="2">操作</th>
						
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
				<!-- edit modal -->
		<div id="edityxModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" >
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">易鑫车贷扣款账户类型修改</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										还款账户种类修改成功！
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-6 control-label">借据号</label>
											<div class="col-md-6">
												<input type="text" name="lncfno"
													class="form-control input-inline input-medium form-value"
													 placeholder="借据号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">账户类型</label>
											<div class="col-md-6">
												<input type="text" name="xmhkty"
													class="form-control input-inline input-medium form-value"
													 placeholder="账户类型">
											</div>
										</div>									
									</div>
								


								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_evnt">保存</button>
				</div>
			</div>
		</div>
		</div>
	</div>
</div>

<script
	src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js"
	type="text/javascript"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/ln/scripts/vlfyqy.js"></script>
<script>
	jQuery(document).ready(function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		Vlfyqy.init();
	});
</script>