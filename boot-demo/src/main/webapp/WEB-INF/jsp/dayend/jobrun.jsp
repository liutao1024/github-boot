<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>
			 INFO:这是一个前端demo，数据取自json文件
		</p>
	</div>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-user font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">日终管理</span>
				<span class="caption-helper">作业执行管理</span>
			</div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
			    <div class="table-actions-wrapper">
						<span>
						</span>
						<button id="add_new_job" class="btn btn-sm green table-group-action-submit">
						布置作业<i class="fa fa-plus"></i>
						</button>
			     </div>	
				<table class="table table-striped table-bordered table-hover" id="job_ajax">
					<thead>
						<tr role="row" class="heading">
						   <th width="8%">
							银行机构
							</th>
							<th width="8%">
						          批次号
							</th>
							<th width="8%">
							作业编码
							</th>
							<th width="8%">
							执行顺序
							</th>
							<th width="10%">						
							批次类型
							</th>
						    <th width="10%">						
							输入参数
							</th>
						    <th width="10%">						
							执行标志
							</th>
						    <th width="6%">						
							版本号
							</th>
							<th width="32%" colspan="2">
							 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>								
							</td>
							<td>
							</td>
							<td>
							<input type="text" class="form-control form-filter input-sm" name="job_cd" id="job_cd"/>
							</td>
					        <td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>	
			<!-- 作业操作员弹出窗口 -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">修改作业执行信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" id="edit_form"><!--  role="edit_form" -->		
								<div class="form-body">
								     <div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										提交表单正确！！！！！！successful
									</div>
								    <div class="form-group">
										<label class="col-md-3 control-label">银行机构</label>
										<div class="col-md-9">
											<input type="text" id="m_register_cd"  readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入银行机构">	
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">批次号</label>
										<div class="col-md-9">
											<input type="text" id="m_batch_no" value="此处后台生成"readOnly class="form-control input-inline input-medium"  placeholder="输入批次号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业编码</label>
										<div class="col-md-9">
											<input type="text" id="m_job_cd" value="此处后台生成"readOnly class="form-control input-inline input-medium"  placeholder="输入作业编码">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">执行顺序</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="m_exec_seq" name="m_exec_seq" class="form-control input-inline input-medium"  placeholder="输入执行顺序">
										  </div>
										</div>
									</div>
																	
									<div class="form-group" >										
										<label class="col-md-3 control-label">批次类型</label>
										<div class="col-md-9" >
										 <div class="input-icon right">
											<i class="fa"></i>
										<input type="text" id="m_batch_type" name="m_batch_type"  class="form-control input-inline input-medium" placeholder="输入批次类型">						
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">输入参数</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="m_param" name="m_param" class="form-control input-inline input-medium"  placeholder="输入参数">
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">执行标志</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="m_exec_flag" name="m_exec_flag" class="form-control input-inline input-medium" placeholder="输入执行标志">
										  </div>
										</div>
									</div>	
									<div class="form-group"  >
										<label class="col-md-3 control-label">版本号</label>
										<div class="col-md-9">
											<input type="text" id="m_ver" name="m_ver" class="form-control input-inline input-medium" placeholder="输入版本号">
										</div>
									</div>					
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	<!-- 修改操作员窗口结束 -->
	<!-- 新增角色 -->
		<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">布置作业</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" id="add_form"><!--  role="edit_form" -->		
								<div class="form-body">
								     <div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										提交表单正确！！！！！！successful
									</div>
								    <div class="form-group">
										<label class="col-md-3 control-label">银行机构</label>
										<div class="col-md-9">
											<input type="text" id="add_register_cd"  value="此处自动获取"readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入银行机构">	
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">批次号</label>
										<div class="col-md-9">
											<input type="text" id="add_batch_no"  value="此处自动获取" readOnly class="form-control input-inline input-medium"  placeholder="输入批次号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业编码</label>
										<div class="col-md-9">
											<input type="text" id="add_job_cd"  value="此处自动获取" readOnly class="form-control input-inline input-medium"  placeholder="输入作业编码">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">执行顺序</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_exec_seq" name="add_exec_seq" class="form-control input-inline input-medium"  placeholder="输入执行顺序">
										  </div>
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">批次类型</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_batch_type" name="add_batch_type" class="form-control input-inline input-medium"  placeholder="输入批次类型">
										  </div>
										</div>
									</div>		
									<div class="form-group">
										<label class="col-md-3 control-label">输入参数</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_param" name="add_param" class="form-control input-inline input-medium"  placeholder="输入输入参数">
										  </div>
										</div>
									</div>
														
									<div class="form-group" >										
										<label class="col-md-3 control-label">执行标志</label>
										<div class="col-md-9" >
											 <div class="input-icon right">
												<i class="fa"></i>
											<input type="text" id="add_exec_flag" name="add_exec_flag"  class="form-control input-inline input-medium" placeholder="输入执行标志">						
											</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">版本号</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_ver" name="add_ver" class="form-control input-inline input-medium"  placeholder="输入版本号">
										</div>
										</div>
									</div>					
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	<!-- 新增角色结束 -->
		</div>
</div>	
<script src="${ctx}/pages/dayend/scripts/jobrun.js"></script>
<script>
	jQuery(document).ready(function() {    
		Jobrun.init();
	});
</script>