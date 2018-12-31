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
				<span class="caption-helper">待办事项具体内容</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="end_send_btn"
						class="btn btn-sm yellow table-group-action-submit">
						<i class="fa fa-send"></i> 已发送事项
					</button>
					<button id="add_mingxi_btn1"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增待办事项
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_bbs">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">主题ID</th>
							<th scope="col">主题名称</th>
							<th scope="col">主题类型</th>																				
							<th scope="col">紧急标志</th>
							<th scope="col">接受柜员</th>
							<th scope="col">接受角色</th>
							<th scope="col">生效日期</th>
							<th scope="col">失效日期</th>
							<th scope="col" colspan="4">操作</th>
						</tr>
						
					</thead>
					
				</table>
			</div>
			<!-- send modal -->
				<div id="sendtypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 500px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">主题修改编辑</h4>
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
											<div class="form-group"  id="sub">
												<label class="col-md-4 control-label">主题ID</label>
												<div class="col-md-4">
													<input type="text" name="subjid"
														readOnly class="form-control input-inline input-medium form-value"
														placeholder="主题ID">
												</div>
											</div>
										
											<div class="form-group">
												<label class="col-md-4 control-label">主题类型</label>
												<div class="col-md-4">
													<input type="text" name="subjtp"
														class="select-close form-control input-inline input-medium form-value"
														placeholder="主题类型">
												</div>
											</div>
												<div class="form-group">
												<label class="col-md-4 control-label">接收柜员</label>
												<div class="col-md-4">
													<input type="text" name="recvid"
														class="form-control input-inline input-medium form-value"
														placeholder="接收柜员">
												</div>
											</div>
												
												<div class="form-group">
												<label class="col-md-4 control-label">接收角色</label>
												<div class="col-md-4">
													<input type="text" name="recvrl"
														class="select-close form-control input-inline input-medium form-value"
														placeholder="接收角色">
												</div>
											</div>
										
										
											<div class="form-group">
													<label class="col-md-4 control-label">生效日期</label>
													<div class="col-md-4">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="efctdt"
																maxlength="8" placeholder="输入生效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
												</div>	
											</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">主题名称</label>
												<div class="col-md-4">
													<input type="text" name="subjna"
														class="form-control input-inline input-medium form-value"
														placeholder="主题名称">
												</div>
											</div>
											<!-- <div class="form-group">
												<label class="col-md-4 control-label">内容描述</label>
												<div class="col-md-4">
													<input type="text" name="contnt"
														class="form-control input-inline input-medium form-value"
														placeholder="内容描述">
												</div>
											</div> -->
											
											<div class="form-group">
												<label class="col-md-4 control-label">紧急标志</label>
												<div class="col-md-4">
													<input type="text" name="emrgfg"  
														class="select-close form-control input-inline input-medium form-value"
														placeholder="紧急标志">
												</div>
										</div>
										<div class="form-group">
													<label class="col-md-4 control-label">失效日期</label>
													<div class="col-md-4">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="inefdt"
																maxlength="8" placeholder="输入失效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="form-group" hidden="true">
											<label class="col-md-6 control-label">是否新增</label>
											<div class="col-md-6">
												<input type="text" name="inseno"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否新增">
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
						<button type="button" class="btn blue" id="btn_save_type1">保存</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="endsend" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">已发送</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="esend_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn close' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
	
	<div id="quanxian" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">新增主题明细指定接收对象</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="send_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn close' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/bbs/scripts/senditems.js"></script>

<script>
   jQuery(document).ready(function() {
	   senditems.init();
});
</script>