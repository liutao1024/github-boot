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
				<span class="caption-subject font-green-sharp bold uppercase">字典值列表</span>
				<span class="caption-helper">管理字典值...</span>
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
								字典分类
							</th>
							<th>
								字典属性
							</th>
							<th>
								字典值
							</th>
							<th>
								父级分类
							</th>
							<th>
								父级属性
							</th>
							<th>
								有效状态
							</th>
							<th>
								排序
							</th>					
							<th width="32%" colspan="2">
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
					<h4 class="modal-title">字典值信息</h4>
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
										<label class="col-md-3 control-label">字典类型</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="add_dict_type" name="dict_type" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典类型">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">字典属性</label>
										<div class="col-md-9">
											<input type="text" id="add_dict_prop" name ="dict_prop" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典属性">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">字典值</label>
										<div class="col-md-9">
											<input type="text" id="add_dict_val" name ="dict_val" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典值">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">父级分类</label>
										<div class="col-md-9">
											<input type="text" id="add_parent_dict_type" name ="parent_dict_type" class="form-control input-inline input-medium" maxlength="19" placeholder="输入父级分类">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">父级属性</label>
										<div class="col-md-9">
											<input type="text" id="add_parent_dict_prop" name ="parent_dict_prop" class="form-control input-inline input-medium" maxlength="19" placeholder="输入父级属性">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">有效状态</label>
										<div class="col-md-9">
											<input type="text" id="add_status" name ="status" class="form-control input-inline input-medium" maxlength="19" placeholder="输入有效状态">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">排序</label>
										<div class="col-md-9">
											<input type="text" id="add_sortno" name ="sortno" class="form-control input-inline input-medium" maxlength="19" placeholder="设置顺序">
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
					<h4 class="modal-title">字典值信息</h4>
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
										<label class="col-md-3 control-label">字典类型</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="dict_type" name="dict_type" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典类型">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">字典属性</label>
										<div class="col-md-9">
											<input type="text" id="dict_prop" name ="dict_prop" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典属性">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">字典值</label>
										<div class="col-md-9">
											<input type="text" id="dict_val" name ="dict_val" class="form-control input-inline input-medium" maxlength="19" placeholder="输入字典值">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">父级分类</label>
										<div class="col-md-9">
											<input type="text" id="parent_dict_type" name ="parent_dict_type" class="form-control input-inline input-medium" maxlength="19" placeholder="输入父级分类">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">父级属性</label>
										<div class="col-md-9">
											<input type="text" id="parent_dict_prop" name ="parent_dict_prop" class="form-control input-inline input-medium" maxlength="19" placeholder="输入父级属性">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">有效状态</label>
										<div class="col-md-9">
											<input type="text" id="status" name ="status" class="form-control input-inline input-medium" maxlength="19" placeholder="输入有效状态">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">排序</label>
										<div class="col-md-9">
											<input type="text" id="sortno" name ="sortno" class="form-control input-inline input-medium" maxlength="19" placeholder="设置顺序">
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
<script src="${ctx}/pages/sys/scripts/dict.js"></script>
<script>
	jQuery(document).ready(function() {    
		Dict.init();
	});
</script>
