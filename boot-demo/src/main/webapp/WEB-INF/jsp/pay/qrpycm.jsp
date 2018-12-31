<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">企业信息录入</span>
			<span class="caption-helper">企业信息管理...</span>
		</div>
	</div>
	<div class="portlet-body">
		<form class="form-horizontal cust-form" id="cust-form" role="form">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>输入交易参数有误</span>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">证件类型</label>
				<div class="input-icon col-md-9">
					<input type="text" id="idtftp"
						name="idtftp" class="form-control input-inline input-medium"
						maxlength="2" placeholder="证件类型">
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">证件号码</label>
				<div class="input-icon col-md-9">
					<i class="fa fa-credit-card"></i> <input type="text" id="idtfno"
						name="idtfno" class="form-control input-inline input-medium"
						maxlength="40" placeholder="证件号码">
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">审核状态</label>
				<div class="input-icon col-md-9">
					<input type="text" id="appvst"
						name="appvst" class="form-control input-inline input-medium"
						maxlength="1" placeholder="审核状态">
				</div>
			</div>
			<div class="cif-clear"></div>
			<div class="form-actions cust-action">
				<button type="button" class="btn blue" id="submit">查询</button>
				<button type="button" class="btn gray" id="cancle">清空</button>
			</div>
		</form>
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button type="button" id="add_mten_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_mten">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">企业客户号</th>
						<th scope="col">企业客户名称</th>
						<th scope="col">证件类型</th>
						<th scope="col">证件号码</th>
						<th scope="col">基本账户开户许可证</th>
						<th scope="col">基本户账号</th>
						<th scope="col">基本户户名</th>
						<th scope="col">基本户开户行名</th>
						<th scope="col">基本户开户行号</th>
						<th scope="col">法人代表身份证</th>
						<th scope="col">经办人身份证</th>
						<th scope="col">经办人联系电话</th>
						<th scope="col">邮箱</th>
						<th scope="col">单位地址</th>
						<th scope="col">审核状态</th>
						<th scope="col">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- add modal -->
		<div id="editModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1100">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">企业信息录入</h4>
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
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">企业客户号</label>
											<div class="col-md-9">
												<input type="text" name="custno"
													class="form-control input-inline input-medium form-value"
													maxlength="40" placeholder="企业客户号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">企业客户名称</label>
											<div class="col-md-9">
												<input type="text" name="custna"
													class="form-control input-inline input-medium form-value"
													maxlength="200" placeholder="企业客户名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">证件类型</label>
											<div class="col-md-9">
												<input type="text" name="idtftp"
													class="form-control input-inline input-medium form-value"
													maxlength="2" placeholder="证件类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">证件号码</label>
											<div class="col-md-9">
												<input type="text" name="idtfno"
													class="form-control input-inline input-medium form-value"
													maxlength="80" placeholder="证件号码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">基本账户开户许可证</label>
											<div class="col-md-9">
												<input type="text" name="opcftf"
													class="form-control input-inline input-medium form-value"
													maxlength="80" placeholder="基本账户开户许可证">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">基本户账号</label>
											<div class="col-md-9">
												<input type="text" name="opcfno"
													class="form-control input-inline input-medium form-value"
													maxlength="40" placeholder="基本户账号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">基本户户名</label>
											<div class="col-md-9">
												<input type="text" name="opcfna"
													class="form-control input-inline input-medium form-value"
													maxlength="100" placeholder="基本户户名">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">基本户开户行名</label>
											<div class="col-md-9">
												<input type="text" name="opcfbn"
													class="form-control input-inline input-medium form-value"
													maxlength="100" placeholder="基本户开户行名">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">基本户开户行号</label>
											<div class="col-md-9">
												<input type="text" name="opcfba"
													class="form-control input-inline input-medium form-value"
													maxlength="100" placeholder="基本户开户行号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">法人代表身份证</label>
											<div class="col-md-9">
												<input type="text" name="upidno"
													class="form-control input-inline input-medium form-value"
													maxlength="80" placeholder="法人代表身份证">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">经办人身份证</label>
											<div class="col-md-9">
												<input type="text" name="rpidno"
													class="form-control input-inline input-medium form-value"
													maxlength="80" placeholder="经办人身份证">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">经办人联系电话</label>
											<div class="col-md-9">
												<input type="text" name="rptlno"
													class="form-control input-inline input-medium form-value"
													maxlength="14" placeholder="经办人联系电话">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">邮箱</label>
											<div class="col-md-9">
												<input type="text" name="rpmail"
													class="form-control input-inline input-medium form-value"
													maxlength="200" placeholder="邮箱">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">单位地址</label>
											<div class="col-md-9">
												<input type="text" name="addrrs"
													class="form-control input-inline input-medium form-value"
													maxlength="400" placeholder="单位地址">
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
					<button type="button" class="btn blue" id="btn_save_edit">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/pay/scripts/qrpycm.js"></script>
<script>
	jQuery(document).ready(function() {
		qrpycm.init();
	});
</script>