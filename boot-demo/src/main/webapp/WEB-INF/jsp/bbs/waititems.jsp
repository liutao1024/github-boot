<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-tags font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">待办事项</span>
				<span class="caption-helper">未处理内容</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<!-- <button type="button">Click Me!</button> -->
					<button id="add_send_btn"
						class="btn btn-sm blue table-group-action-submit">
						<i class="fa fa-send"></i> 已处理事项
					</button>
					<button id="add_type_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 发布待办事项
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_type">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">主题ID</th>
							<th scope="col">主题名称</th>
							<th scope="col">主题类型</th>
							
							<th scope="col">紧急标志</th>
							
							<th scope="col">发布人名称</th>						
							
							<th scope="col">失效日期</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td>								
							</td>
							<td>							
							</td>
							
							<td>
					<input type="hidden"  class="form-control form-filter input-sm" id="q_subjtp" name="q_subjtp" /> 
							</td>
							
							<td>
					<input type="hidden"  class="form-control form-filter input-sm" id="q_emrgfg" name="q_emrgfg" /> 
							</td>
							<td>
							</td>
							
							<td>
							</td>
							<td  colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
						
					</thead>
					
				</table>
			</div>
			<!-- edit modal -->
			<div id="edittypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 600px;">
					<div class="modal-header">						
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">新增待办事项</h4>
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
												<label class="col-md-4 control-label">主题名称</label>
												<div class="col-md-4">
													<input type="text" name="subjna"
														class="form-control input-inline input-medium form-value"
														placeholder="主题名称">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">主题类型</label>
												<div class="col-md-4">
													<input type="text" name="subjtp"
														class="form-control input-inline input-medium form-value"
														placeholder="主题类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">处理状态</label>
												<div class="col-md-4">
													<input type="text" name="procst"
														class="form-control input-inline input-medium form-value"
														placeholder="处理状态">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">内容描述</label>
												<div class="col-md-4">
													<input type="text" name="contnt"
														class="form-control input-inline input-medium form-value"
														placeholder="内容描述">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">发布人ID</label>
												<div class="col-md-4">
													<input type="text" name="relsid"
														class="form-control input-inline input-medium form-value"
														placeholder="发布人ID">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">发布机构</label>
												<div class="col-md-4">
													<input type="text" name="relsbr"
														class="form-control input-inline input-medium form-value"
														placeholder="发布机构">
												</div>
											</div>
											
											<div class="form-group">
												<label class="col-md-4 control-label">接收柜员ID</label>
												<div class="col-md-4">
													<input type="text" name="recvid"
														class="form-control input-inline input-medium form-value"
														placeholder="内容描述">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">发布时间</label>
												<div class="col-md-4">
													<input type="text" name="subjtm"
														class="form-control input-inline input-medium form-value"
														placeholder="内容描述">
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">发布人</label>
												<div class="col-md-4">
													<input type="text" name="relsna"
														class="form-control input-inline input-medium form-value"
														placeholder="发布人">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">紧急标志</label>
												<div class="col-md-4">
													<input type="text" name="emrgfg"  id="emrgfg"
														class="form-control input-inline input-medium form-value"
														placeholder="紧急标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">是否已读</label>
												<div class="col-md-4">
													<input type="text" name="readfg"  id="readfg"
														class="form-control input-inline input-medium form-value"
														placeholder="是否已读">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">生效日期</label>
												<div class="col-md-4">
													<input type="text" name="efctdt"
														class="form-control input-inline input-medium form-value"
														placeholder="生效日期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">失效日期</label>
												<div class="col-md-4">
													<input type="text" name="inefdt"
														class="form-control input-inline input-medium form-value"
														placeholder="失效日期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">接收柜员名称</label>
												<div class="col-md-4">
													<input type="text" name="recvna"
														class="form-control input-inline input-medium form-value"
														placeholder="接收柜员名称">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">接收人角色</label>
												<div class="col-md-4">
													<input type="text" name="recvrl"
														class="form-control input-inline input-medium form-value"
														placeholder="接收人角色">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">处理柜员</label>
												<div class="col-md-4">
													<input type="text" name="procus"
														class="form-control input-inline input-medium form-value"
														placeholder="处理柜员">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">接收机构</label>
												<div class="col-md-4">
													<input type="text" name="recvbr"
														class="form-control input-inline input-medium form-value"
														placeholder="接收机构">
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
						<button type="button" class="btn blue" id="btn_save_type">保存</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="endhtml" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">已处理事项</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load2">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn  btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
	<div id="bianji" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">新增发布待办事项</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn  btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>
		<div id="bianji1" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">查看明细具体内容</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load1">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn  btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>
		<div id="message" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="500">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
					                   
				<h4 class="modal-title">您确定完成处理了吗</h4>		
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			     <button type="button" class="btn blue" id="btn_send">保存</button>
			    <button type='button'  class='btn btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
</div>
<script src="${ctx}/pages/bbs/scripts/waititems.js"></script>
<script>
	jQuery(document).ready(function() {
		kupperm.init();
	});
</script>