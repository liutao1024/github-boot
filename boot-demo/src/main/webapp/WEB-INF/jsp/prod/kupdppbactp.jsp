<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品账户类型控制表列表</span>
				<span class="caption-helper">管理产品账户类型控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_actp_btn" class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_actp">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">产品编号</th>
							<th width="10%">客户账号类型</th>
							<th width="10%">账户下唯一标识</th>
							<th width="10%">开子账户关联凭证标志</th>
							<th width="10%">开子户关联凭证种类</th>
							<th width="10%">子户支付条件选项值</th>
							<th width="10%">交易凭证选项值</th>
							<th width="24%" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editactpModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">产品账户类型控制表</h4>
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
											<input type="text"  name="prodcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品编号">											
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">客户账号类型</label>
										<div class="col-md-9">
											<input type="text"  name="cacttp"  class="form-control input-inline input-medium" placeholder="客户账号类型">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">账户下唯一标识</label>
										<div class="col-md-9">
											<input type="text"  name="acolfg"  class="form-control input-inline input-medium"  placeholder="账户下唯一标识">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">开子账户关联凭证标志</label>
										<div class="col-md-9">
											<input type="text"  name="dcmtfg"  class="form-control input-inline input-medium"  placeholder="开子账户关联凭证标志">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">开子户关联凭证种类</label>
										<div class="col-md-9">
											<input type="text"  name="dcmttp"  class="form-control input-inline input-medium"  placeholder="开子户关联凭证种类">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">子户支付条件选项值</label>
										<div class="col-md-9">
											<input type="text"  name="sactcn"  class="form-control input-inline input-medium"  placeholder="子户支付条件选项值">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">交易凭证选项值</label>
										<div class="col-md-9">
											<input type="text"  name="dcmtcn"  class="form-control input-inline input-medium"  placeholder="交易凭证选项值">
										</div>
									</div>				
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_actp">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	    	<!-- 编辑Modal -->
	    	<div id="editactpModal0004" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">产品账户类型控制表</h4>
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
											<input type="text"  id="the_prodcd"  name="the_prodcd" readOnly 
											class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品编号">											
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">客户账号类型</label>
										<div class="col-md-9">
											<input type="text"  id="the_cacttp" name="the_cacttp" readOnly 
											class="form-control input-inline input-medium" placeholder="客户账号类型">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">账户下唯一标识</label>
										<div class="col-md-9">
											<input type="text"  id="the_acolfg" name="the_acolfg" class="form-control input-inline input-medium"  placeholder="账户下唯一标识">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">开子账户关联凭证标志</label>
										<div class="col-md-9">
											<input type="text"  id="the_dcmtfg" name="the_dcmtfg"  class="form-control input-inline input-medium"  placeholder="开子账户关联凭证标志">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">开子户关联凭证种类</label>
										<div class="col-md-9">
											<input type="text"  id="the_dcmttp" name="the_dcmttp" class="form-control input-inline input-medium"  placeholder="开子户关联凭证种类">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">子户支付条件选项值</label>
										<div class="col-md-9">
											<input type="text"  id="the_sactcn" name="the_sactcn" class="form-control input-inline input-medium"  placeholder="子户支付条件选项值">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">交易凭证选项值</label>
										<div class="col-md-9">
											<input type="text"  id="the_dcmtcn" name="the_dcmtcn"  class="form-control input-inline input-medium"  placeholder="交易凭证选项值">
										</div>
									</div>				
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="the_btn_save_actp">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	    </div> 
	 </div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbactp.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>