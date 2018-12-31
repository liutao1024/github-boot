<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">待办事项主题明细表</span>
				<span class="caption-helper">待办事项主题明细详细信息</span>
			</div>
		</div>
		
		<div class="portlet-body">
		<form class="form-horizontal" id = "qry-form">
		            <div class="col-md-8" >
						<div class="form-group">
							<label class="control-label col-md-3">接受角色</label>
							<div class="input-icon col-md-9">	
								<!-- <i class="fa fa-credit-card"></i> -->
								<input type="text" id="recvrl" name="recvrl" class="select-close form-control input-inline input-medium" maxlength="18" placeholder="选择接受角色">
							</div>
						</div>
					</div> 
			<div class="form-actions file-action col-md-1">
						<button type="button" class="btn blue" id="submit">发送</button>
					</div>
		</form>
		
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_detail"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增通知
					</button>
					
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_add">
					<thead>
						<tr role="row" class="heading">
							<th width="20%">
								主题ID
							</th>						
							<th width="20%">
								通知内容
							</th>
							<th width="20%">
								备注
							</th>
							 
						</tr>
					
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- send modal -->
				<div id="addtypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 300px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">新增主题明细信息</h4>
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
									<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">主题ID</label>
												<div class="col-md-4">
													<input type="text" name="subjid"
														readOnly class="form-control input-inline input-medium form-value"
														placeholder="主题ID">
												</div>
											</div>
										
											<div class="form-group">
												<label class="col-md-4 control-label">通知内容</label>
												<div class="col-md-4">
													<input type="text" name="contnt"
														class="form-control input-inline input-medium form-value" 
														placeholder="通知内容">
												</div>
											</div>
											
										
											</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">备注</label>
												<div class="col-md-4">
													<input type="text" name="subdl1"
														class="form-control input-inline input-medium form-value"
														placeholder="备注">
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
						<button type="button" class="btn blue" id="btn_save_add">保存</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script src="${ctx}/pages/bbs/scripts/addnew.js"></script>

