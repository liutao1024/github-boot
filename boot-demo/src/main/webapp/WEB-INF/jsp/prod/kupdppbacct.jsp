<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品核算定义列表</span>
				<span class="caption-helper">管理产品机构控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_acct_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_acct">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">存期</th>
							<th scope="col">核算代码</th>
							<th scope="col">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editacctModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">产品核算定义</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
								        
								        <div class="form-group">
											<label class="col-md-3 control-label">产品编号</label>
											<div class="col-md-9">
												<input type="text" name="prodcd"
													class="form-control input-inline input-medium form-value"
												readOnly maxlength="20" placeholder="输入产品编号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">存期</label>
											<div class="col-md-9">
												<input type="text" name="depttm"
													class="form-control input-inline input-medium form-value"
													maxlength="6" placeholder="选择存期">
											</div>
										</div>
									
										<div class="form-group">
											<label class="col-md-3 control-label">核算代码</label>
											<div class="col-md-9">
												<input type="text" name="acctcd"
													class="form-control input-inline input-medium form-value"
													maxlength="20" placeholder="核算代码">
											</div>
										</div>
									
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal"
										class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_acct">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbacct.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>