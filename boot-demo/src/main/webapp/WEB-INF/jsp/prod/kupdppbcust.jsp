<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品开户控制表列表</span>
				<span class="caption-helper">管理产品开户控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_cust_btn" class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_cust">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">产品编号</th>
							<th width="10%">币种</th>
							<th width="10%">到期日确定方式</th>
							<th width="10%">客户下唯一标志</th>
							<th width="10%">起存金额</th>
							<th width="12%" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editcustModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">产品开户控制表</h4>
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
											<div>
												<input type="text"  name="prodcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="text"  name="crcycd"  class="form-control input-inline input-medium" maxlength="3" placeholder="选择货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">到期日确定方式</label>
										<div class="col-md-9">
											<input type="text"  name="madtby"  class="form-control input-inline input-medium"  placeholder="选择到期日确定方式">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">客户下唯一标志</label>
										<div class="col-md-9">
											<input type="text"  name="onlyfg"  class="form-control input-inline input-medium"  placeholder="选择客户下唯一标志">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">起存金额</label>
										<div class="col-md-9">
											<input type="text"  name="srdpam"  class="form-control input-inline input-medium"  placeholder="起存金额">
										</div>
									</div>						
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_cust">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- 编辑Modal -->
			<div id="editcustModal0005" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">产品开户控制表</h4>
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
											<div>
												<input type="text"  id="the_prodcd" name="the_prodcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="text"  id="the_crcycd" name="the_crcycd" readOnly class="form-control input-inline input-medium" maxlength="3" placeholder="选择货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">到期日确定方式</label>
										<div class="col-md-9">
											<input type="text"  id="the_madtby" name="the_madtby" class="form-control input-inline input-medium"  placeholder="选择到期日确定方式">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">客户下唯一标志</label>
										<div class="col-md-9">
											<input type="text"  id="the_onlyfg" name="the_onlyfg" class="form-control input-inline input-medium"  placeholder="选择客户下唯一标志">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">起存金额</label>
										<div class="col-md-9">
											<input type="text"  id="the_srdpam" name="the_srdpam" class="form-control input-inline input-medium"  placeholder="起存金额">
										</div>
									</div>						
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_cust">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	   </div>
	 </div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbcust.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>