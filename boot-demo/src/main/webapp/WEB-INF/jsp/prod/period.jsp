<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
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
				<span class="caption-subject font-green-sharp bold uppercase">期限列表</span>
				<span class="caption-helper">管理期限配置...</span>
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
							<th width="16%">
								 期限编号
							</th>
							<th width="16%">
								 期限描述
							</th>
							<th width="16%">
								期限单位
							</th>
							<th width="16%">
								期限
							</th>
							<th width="36%" colspan="2">
								 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="tt" name="query_period_cd" />
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
			<!-- modal input -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">期限参数信息</h4>
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
										<label class="col-md-3 control-label">期限编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="period_cd" name="name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">描述</label>
										<div class="col-md-9">
											<input type="text" id="remark" name ="period_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">单位</label>
										<div class="col-md-9">
											<select name="period_unit" id="unit" class="form-control select2me input-medium" data-placeholder="选择期限单位">
												<option value=""></option>
												<option value="D">日</option>
												<option value="M">月</option>
												<option value="Y">年</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">期限</label>
										<div class="col-md-9">
											<div id="period_value">
												<div class="input-group" style="width:240px;">
													<div class="spinner-buttons input-group-btn">
														<button type="button" class="btn spinner-up blue">
														<i class="fa fa-plus"></i>
														</button>
													</div>
													<input type="text" class="spinner-input form-control " >
													<div class="spinner-buttons input-group-btn">
														<button type="button" class="btn spinner-down red">
														<i class="fa fa-minus"></i>
														</button>
													</div>
												</div>
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
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">修改期限参数信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">期限编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="edit_period_cd" class="form-control input-inline input-medium" readOnly maxlength="19" placeholder="输入编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">描述</label>
										<div class="col-md-9">
											<input type="text" id="edit_remark" name="period_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">单位</label>
										<div class="col-md-9">
											<select id="edit_unit" name="period_unit" class="form-control select2me input-medium" data-placeholder="选择期限单位">
												<option value=""></option>
												<option value="D">日</option>
												<option value="M">月</option>
												<option value="Y">年</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">期限</label>
										<div class="col-md-9">
											<div id="period_value_edit">
												<div class="input-group" style="width:240px;">
													<div class="spinner-buttons input-group-btn">
														<button type="button" class="btn spinner-up blue">
														<i class="fa fa-plus"></i>
														</button>
													</div>
													<input type="text" id="edit_num" class="spinner-input form-control " >
													<div class="spinner-buttons input-group-btn">
														<button type="button" class="btn spinner-down red">
														<i class="fa fa-minus"></i>
														</button>
													</div>
												</div>
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
</div>

<script src="${ctx}/pages/prod/scripts/period.js"></script>
<script>
	jQuery(document).ready(function() {    
		Period.init();
	});
</script>
