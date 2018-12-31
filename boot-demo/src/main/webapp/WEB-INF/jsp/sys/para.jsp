<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<link rel="stylesheet" type="text/css" href="${ctx}/pages/sys/css/datetimepicker.css" />
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>
			 NOTE: 下面为demo模仿数据.
       </p>	 
	</div>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">全局管理</span>
				<span class="caption-helper">管理全局...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th>
								注册机构号
							</th>
							<th width="144px">
							           系统当前日期
							</th>
							<th width="144px">
								上日系统日期
							</th>
							<th>
								当天密码错误次数
							</th>
							<th>
								密码错误次数冻结
							</th>
							<th>
								全年天数
							</th>
							<th>
							           月天数
							</th>					
							<th width="28%" colspan="2">
								 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>					
							</td>	
							<td>
							<input type="text" class="form-control form-filter input-sm" id="tt" name="query_dict_prop" />
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
	</div>
		<!-- modal add start -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">全局控制信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">注册机构号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="add_register_cd" name="register_cd" class="form-control input-inline input-medium" maxlength="19" readOnly placeholder="输入注册机构号">
											</div>
										</div>
									</div>
									<div class="form-group">
									
										<label class="col-md-3 control-label">系统当前日期</label>
										<div class="col-md-9">
											<input type="text" id="add_sys_dt" name ="sys_dt" class="form-control input-inline input-medium" maxlength="19" placeholder="输入系统当前日期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">上日系统日期</label>
										<div class="col-md-9">
											<input type="text" id="add_last_sys_dt" name ="last_sys_dt" class="form-control input-inline input-medium" maxlength="19" placeholder="输入上日系统日期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">当天密码错误次数</label>
										<div class="col-md-9">
											<input type="text" id="add_password_error" name ="password_error" class="form-control input-inline input-medium" maxlength="19" placeholder="输入当天密码错误次数">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">密码错误次数冻结</label>
										<div class="col-md-9">
											<input type="text" id="add_freezen_password" name ="freezen_password" class="form-control input-inline input-medium" maxlength="19" placeholder="输入密码错误次数冻结">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">全年天数</label>
										<div class="col-md-9">
											<input type="text" id="add_year_days" name ="year_days" class="form-control input-inline input-medium" maxlength="19" placeholder="输入全年天数">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">月天数</label>
										<div class="col-md-9">
											<input type="text" id="add_month_days" name ="month_days" class="form-control input-inline input-medium" maxlength="19" placeholder="输入月天数">
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
			<!-- modal add end -->
			<!-- modal edit start -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">全局控制信息修改</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">注册机构号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="register_cd" value="" name="register_cd" class="form-control input-inline input-medium" readOnly maxlength="19" placeholder="输入注册机构号">
											</div> 															
										</div>
									</div>
							       <div class="form-group">
										<label class="col-md-3 control-label">系统当前日期</label>
										<div class="col-md-9">
											<input type="text" id="sys_dt" name ="sys_dt" class="form-control input-inline input-medium" maxlength="19" placeholder="输入系统当前日期">
										</div>
									</div>
									  
								
									<div class="form-group">
										<label class="col-md-3 control-label">上日系统日期</label>
										<div class="col-md-9">
											<input type="text" id="last_sys_dt" name ="last_sys_dt" class="form-control input-inline input-medium" maxlength="19" placeholder="输入上日系统日期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">当天密码错误次数</label>
										<div class="col-md-9">
											<input type="text" id="password_error" name ="password_error" class="form-control input-inline input-medium" maxlength="19" placeholder="输入当天密码错误次数">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">密码错误次数冻结</label>
										<div class="col-md-9">
											<input type="text" id="freezen_password" name ="freezen_password" class="form-control input-inline input-medium" maxlength="19" placeholder="输入密码错误次数冻结">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">全年天数</label>
										<div class="col-md-9">
											<input type="text" id="year_days" name ="year_days" class="form-control input-inline input-medium" maxlength="19" placeholder="输入全年天数">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">月天数</label>
										<div class="col-md-9">
											<input type="text" id="month_days" name ="month_days" class="form-control input-inline input-medium" maxlength="19" placeholder="输入月天数">
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
			<!-- modal edit end -->		
</div>
<script src="${ctx}/pages/sys/scripts/bootstrap-datetimepicker.min.js"></script>
<script src="${ctx}/pages/sys/scripts/para.js"></script>
<script>
	jQuery(document).ready(function() {    
		Para.init();
		$('#sys_dt').datetimepicker({format: 'dd-mm-yyyy hh:ii'}); 
		$('#last_sys_dt').datetimepicker({format: 'dd-mm-yyyy hh:ii'});
		$('#add_sys_dt').datetimepicker({format: 'dd-mm-yyyy hh:ii'}); 
		$('#add_last_sys_dt').datetimepicker({format: 'dd-mm-yyyy hh:ii'}); 
	});
</script>
