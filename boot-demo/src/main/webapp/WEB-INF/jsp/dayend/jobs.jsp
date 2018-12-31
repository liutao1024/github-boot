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
				<span class="caption-helper">作业批次</span>
			</div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
			    <div class="table-actions-wrapper">
						<span>
						</span>
						<button id="add_new_job" class="btn btn-sm green table-group-action-submit">
						新作业批次 <i class="fa fa-plus"></i>
						</button>
			     </div>	
				<table class="table table-striped table-bordered table-hover" id="job_ajax">
					<thead>
						<tr role="row" class="heading">
						    <th width="8%">
							作业编码
							</th>
							<th width="8%">
						            作业名
							</th>
							<th width="12%">
							作业代码
							</th>
							<th width="8%">
							作业类型
							</th>
							<th width="12%">						
							多进程字段
							</th>
						    <th width="6%">						
							最大并发进程数
							</th>
						    <th width="6%">						
							出错是否中断标志
							</th>
						    <th width="6%">						
							版本号
							</th>
							<th width="40%" colspan="2">
							 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>
							<input type="text" class="form-control form-filter input-sm" name="user_cd" id="user_cd"/>								
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
			<!-- 修改操作员弹出窗口 -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">修改作业批次信息</h4>
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
										提交表单正确！！！！！！successful！！！！
									</div>
								    <div class="form-group">
										<label class="col-md-3 control-label">作业编码</label>
										<div class="col-md-9">
											<input type="text" id="m_job_cd"  readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入作业编码">	
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业名</label>
										<div class="col-md-9">
											<input type="text" id="m_job_name"  name="m_job_name"  class="form-control input-inline input-medium" maxlength="19" placeholder="输入作业名">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业代码</label>
										<div class="col-md-9">
											<input type="text" id="m_job_code" id="m_job_code"  class="form-control input-inline input-medium"  placeholder="输入作业代码">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业类型</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<select id="m_job_type" class="form-control input-inline input-medium" data-placeholder="输入作业类型">
											 <option value="1">存储过程</option>
											 <option value="2">服务</option>
											</select>				
										  </div>
										</div>
									</div>																	
									<div class="form-group" >										
										<label class="col-md-3 control-label">多进程字段</label>
										<div class="col-md-9" >
										 <div class="input-icon right">
											<i class="fa"></i>
										<input type="text" id="m_mproc_field" name="m_mproc_field"  class="form-control input-inline input-medium" placeholder="输入证件号">						
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">最大并发进程数</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="m_max_proc" name="m_max_proc" class="form-control input-inline input-medium"  placeholder="输入最大并发进程数">
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">出错是否中断标志</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="m_job_abort_flag" name="m_job_abort_flag" class="form-control input-inline input-medium" placeholder="输入出错是否中断标志">
										  </div>
										</div>
									</div>	
									<div class="form-group"  >
										<label class="col-md-3 control-label">版本号</label>
										<div class="col-md-9">
										<input type="text" id="m_ver" name="m_ver" class="form-control input-inline input-medium" placeholder="输入出错是否中断标志">	
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
					<h4 class="modal-title">增加作业批次</h4>
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
										<label class="col-md-3 control-label">作业编码</label>
										<div class="col-md-9">
											<input type="text" id="add_job_cd"  readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入作业编码">	
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业名</label>
										<div class="col-md-9">
											<input type="text" id="add_job_name"  name="add_job_name"  class="form-control input-inline input-medium" maxlength="19" placeholder="输入作业名">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业代码</label>
										<div class="col-md-9">
											<input type="text" id="add_job_code" id="add_job_code"  class="form-control input-inline input-medium"  placeholder="输入作业代码">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">作业类型</label>
										<div class="col-md-9">
										  <div class="input-icon right">
											<i class="fa"></i>
											<select id="add_job_type" class="form-control input-inline input-medium" data-placeholder="输入作业类型">
											 <option value="1">1</option>
											 <option value="2">2</option>
											</select>				
										  </div>
										</div>
									</div>							
									<div class="form-group" >										
										<label class="col-md-3 control-label">多进程字段</label>
										<div class="col-md-9" >
										 <div class="input-icon right">
											<i class="fa"></i>
										<input type="text" id="add_mproc_field" name="add_mproc_field"  class="form-control input-inline input-medium" placeholder="输入证件号">						
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">最大并发进程数</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_max_proc" name="add_max_proc" class="form-control input-inline input-medium"  placeholder="输入最大并发进程数">
										</div>
										</div>
									</div>	
									<div class="form-group" >
										<label class="col-md-3 control-label">出错是否中断标志</label>
										<div class="col-md-9">
										 <div class="input-icon right">
											<i class="fa"></i>
											<input type="text" id="add_job_abort_flag" name="add_job_abort_flag" class="form-control input-inline input-medium" placeholder="输入出错是否中断标志">
										  </div>
										</div>
									</div>	
									<div class="form-group"  >
										<label class="col-md-3 control-label">版本号</label>
										<div class="col-md-9">
										<input type="text" id="add_ver" name="add_ver" class="form-control input-inline input-medium" placeholder="输入出错是否中断标志">	
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
<script src="${ctx}/pages/dayend/scripts/jobs.js"></script>
<script>
	jQuery(document).ready(function() {    
		Jobs.init();
	});
</script>