<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<link rel="stylesheet" href="${ctx}/pages/prod/css/tmpl.css" type="text/css" />
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>NOTE: 下面为demo模仿数据.</p>
	</div>
</div>
<div class="col-md-12">
	<div class="col-md-12 setbg-color">  
		<!-- 左侧标签开始 -->
		<div class="col-md-1">
			<div class="portlet light">
				<!-- id="sidebar-left" --> 
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-green-sharp bold uppercase">&nbsp;分类</span>
					</div>
				</div>
				<div class="portlet-body">
					<div class=" portlet-tabs">
						<ul class="nav nav-pills nav-stacked">
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 左侧标签结束 -->
		<!-- 属性列表显示 -->
		<div class="col-md-6" >
			<!-- 属性table start-->
			<div class="portlet light">
				<!-- id="table-center" -->
				<div class="portlet-title">
					<div class="caption">
						<i class="fa fa-gift font-green-sharp"></i> <span
							class="caption-subject font-green-sharp bold uppercase">模板列表</span>
						<span class="caption-helper">管理模板配置...</span>
					</div>
				</div>
				<div class="portlet-body">
					<div class="table-container">
						<div class="table-actions-wrapper">
							<span> </span>
							<button id="add_tmpl"
								class="btn btn-sm green table-group-action-submit">新增</button>
						</div>
						<table class="table table-striped table-bordered table-hover"
							id="datatable_ajax">
							<thead>
								<tr role="row" class="heading">
									<th width="16%">模板编号</th>
									<th width="16%">模板名称</th>
									<th width="36%" colspan="2">操作</th>
								</tr>
								<tr role="row" class="filter">
									<td><input type="text"
										class="form-control form-filter input-sm" id="tt"
										name="query_period_cd" /></td>
									<td></td>
									<td>
										<button class="btn btn-sm yellow filter-submit margin-bottom">
											<i class="fa fa-search"></i> 查询
										</button>
									</td>
									<td>
										<button class="btn btn-sm red filter-cancel">
											<i class="fa fa-times"></i> 清空
										</button>
									</td>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- 属性table end-->
		</div>
		<!-- 属性列表结束 -->
		<!-- 编辑开始 -->
		<div class="col-md-5">
			<!-- 编辑模板 start-->
			<div class="portlet light">
				<div class="portlet-title">
					<div class="caption">
						<i class="fa fa-cogs font-green-sharp"></i> <span
							class="caption-subject font-green-sharp bold uppercase">修改模板信息</span>
					</div>
					<div class="tools">
						<!--<a href="javascript:;" class="collapse"> </a> 
							<a href="javascript:;" class="reload"> </a>
			     			<a href="javascript:;" class="remove"> </a> -->
					</div>
				</div>
				<div class="portlet-body" style="display: none;">
					<form class="form-horizontal" role="form" id="edit_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！
							</div>
							<!-- <div class="form-group">
									<label class="col-md-3 control-label">模板编号</label>
									<div class="col-md-9">
										<div>
											<input type="text" id="edit_abstract_cd"
												class="form-control input-inline input-medium" readOnly
												maxlength="19" placeholder="输入编号">
										</div>
									</div>
								</div> -->
							<div class="form-group">
								<label class="col-md-3 control-label">更改分类</label> 
								<div class="col-md-9">
									<div>									
									<select id="edit_class_cd" class="form-control input-inline select-medium"> 
												</select>						  
									</div>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">模板名称</label>
								<div class="col-md-9">
									<div>
										<input type="text" id="edit_abstract_name"
											class="form-control input-inline input-medium" maxlength="50"
											placeholder="输入编号">
									</div>
								</div>
							</div>
							<!-- 配置属性 start -->
							<div class="modal-header next-add col-md-12">
								<div class="col-md-9" >
									<h4 class="font-green-sharp bold ">
										<i class="fa fa-cogs font-green-sharp"></i>模板属性配置
									</h4>
								</div>
								<div class="col-md-3">
									<button id='add_new_prop' class='btn btn-sm green table-group-action-submit'> 新增属性</button> 
								</div>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="prop_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="20%">模板编号</th>
										<th width="20%">属性编号</th>
										<th width="20%">属性值类型</th>
										<th width="20%">顺序号</th>
										<th width="20%">操作</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
							<!-- 配置属性end -->
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal"
								class="btn btn-default">关闭</button>
							<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
						</div>
					</form>
				</div>
			</div>
			<!-- 编辑模板 end-->
		</div>
	</div>
	<!-- 编辑结束 -->
</div>
<!-- add modal input start -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
				</div>
				<div class="modal-body"> 
					<%@include file="addTmpl.jsp"%> 
				</div>
			</div>
	<!-- add modal input end -->	
	<!-- add prop modal start-->
		<div id="addpropModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">新增属性配置</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="add_prop_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">模板编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="add_p_abstract_cd" class="form-control input-inline input-medium" readOnly maxlength="19" placeholder="输入编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">属性编号</label>
										<div class="col-md-9">
											<div>
												<select id="add_p_property_cd">
												<option>01</option>
												<option>02</option>
												<option>03</option>
												<option>04</option>
												</select>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">属性值类型</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="add_p_property_type" class="form-control input-inline input-medium"  maxlength="19" placeholder="输入属性值类型">
											</div>
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">顺序号</label>
										<div class="col-md-9">
											<div>
											<input type="text" id="add_p_sortno" class="form-control input-inline input-medium"  maxlength="50" placeholder="输入顺序号">
											</div>
										</div>
									</div>			
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_prop_add">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	<!-- add prop modal end-->		
<script src="${ctx}/pages/prod/scripts/tmplClass.js"></script>
<script src="${ctx}/pages/prod/scripts/tmpl.js"></script>
<script>
	 var goTmpl=function(id){
	  Tmpl.resetTable(id); 
	  $(".col-md-5 > div:nth-child(1) > div:nth-child(2)").attr("style","display: none;");
	 }
	 jQuery(document).ready(function() {    
		Tmpl.init();  
	 });
	 	 
</script> 
