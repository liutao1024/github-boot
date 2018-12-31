<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">合作商列表</span>
				<span class="caption-helper">合作商管理...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<!-- <th width="10%">
								商户号
							</th>	 -->
							<th width="20%">
								合作商号
							</th>
							<th width="20%">
								合作商关系类型
							</th>													
							<!-- <th width="8%">
								是否核心合作商
							</th>
							<th width="9%">
								上下游标志
							</th>
							<th width="10%">
								上级合作商号
							</th> -->
							<th width="40%">
								描述
							</th>
							<th width="18%" colspan="2">
								 操作
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<!-- <div class="form-group">
										<label class="col-md-3 control-label">商户号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="merccd" name="merccd" class="form-control input-inline input-medium" maxlength="20" placeholder="输入合作商号">
											</div>
										</div>
									</div> -->
									<div class="form-group">
										<label class="col-md-3 control-label">合作商号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="defncd" name="defncd" class="form-control input-inline input-medium" maxlength="20" placeholder="输入合作商号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">合作商关系类型</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="merctp" name="merctp" class="form-control input-inline input-medium" maxlength="50" placeholder="输入合作商关系类型">
										</div>
										</div>
									</div>
									<!-- 
									<div class="form-group">
										<label class="col-md-3 control-label">是否核心商户</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="corefg" name="corefg" class="form-control input-inline input-medium" maxlength="50" placeholder="是否核心商户">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">上下游标志</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="relatp" name="relatp" class="form-control input-inline input-medium" maxlength="50" placeholder="上下游标志">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">上级商户号</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="pmercd" name="pmercd" class="form-control input-inline input-medium" maxlength="50" placeholder="上级商户号">
										</div>
										</div>
									</div> 
									-->
									<div class="form-group">
										<label class="col-md-3 control-label">描述</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="remark" name="remark" class="form-control input-inline input-medium" maxlength="20" placeholder="输入描述">
										</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End: life time stats -->
	<!-- 合作商圈 -->
	<div aria-hidden="true" style="display: none;" id="cycle_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">合作商圈</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_cycle_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_cycle_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="cycle_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="20%">合作商号</th>
										<th width="20%">商户号</th>
										<th width="20%">合作类型</th>
										<th width="40%" colspan="2">操作</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default closeModal">关闭</button>
				</div>
			</div>
		</div>
	</div>
</div>
	<!-- edit bki modal -->
		<div id="editCycleModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商关系圈</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_cycle_form">
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
											<label class="col-md-3 control-label">合作商号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="cycle_defncd" name="cycle_defncd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入合作商号">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">商户号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="cycle_merccd" name="cycle_merccd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入商户号">
												</div>
											</div>
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_cycle">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--end edit bki modal -->	
	<!-- 合作商圈 结束-->	
	
	<!-- 合作商树开始 -->
	<div aria-hidden="true" style="display: none;" id="tree_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">合作商树</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_tree_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_tree_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="tree_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="20%">合作商号</th>
										<th width="20%">商户号</th>
										<th width="20%">上级商户号</th>
										<th width="20%">合作类型</th>
										<th width="20%" colspan="2">操作</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default closeModal">关闭</button>
				</div>
			</div>
		</div>
	</div>
</div>
	<!-- edit bki modal -->
		<div id="editTreeModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商关系树</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_tree_form">
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
											<label class="col-md-3 control-label">合作商号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="tree_defncd" name="tree_defncd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入合作商号">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">商户号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="tree_merccd" name="tree_merccd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="选择商户号">
												</div>
											</div>
										</div>
									    <div class="form-group">
											<label class="col-md-3 control-label">上级商户号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="tree_pmercd" name="tree_pmercd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="上级商户号">
												</div>
											</div>
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_tree">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--end edit bki modal -->	
	<!-- 合作商树 结束-->	
	
	<!-- 合作商链 -->
	<div aria-hidden="true" style="display: none;" id="link_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">合作商链</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_link_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_link_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="link_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="15%">合作商号</th>
										<th width="15%">商户号</th>
										<th width="15%">是否核心商户</th>
										<th width="15%">上下游标志</th>
										<th width="15%">合作类型</th>
										<th width="25%" colspan="2">操作</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default closeModal">关闭</button>
				</div>
			</div>
		</div>
	</div>
</div>
	<!-- edit bki modal -->
		<div id="editLinkModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商关系链</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_link_form">
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
											<label class="col-md-3 control-label">合作商号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="link_defncd" name="link_defncd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入合作商号">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">商户号</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="link_merccd" name="link_merccd" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="选择商户">
												</div>
											</div>
										</div>
									    <div class="form-group">
											<label class="col-md-3 control-label">是否核心客户</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="link_corefg" name="link_corefg" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="是否核心客户">
												</div>
											</div>
										</div>
									    <div class="form-group">
											<label class="col-md-3 control-label">上下游标志</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="link_relatp" name="link_relatp" class="form-control input-inline input-medium form-value" maxlength="20" placeholder="上下游标志">
												</div>
											</div>
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_link">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--end edit bki modal -->	
<!-- 合作商树 结束-->	
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcm/scripts/kcmdefn.js"></script>
<script src="${ctx}/pages/kcm/scripts/cycleDefn.js"></script>
<script src="${ctx}/pages/kcm/scripts/linkDefn.js"></script>
<script src="${ctx}/pages/kcm/scripts/treeDefn.js"></script>
<script>
	jQuery(document).ready(function() {    
		kcmdefn.init();
	});
</script>
