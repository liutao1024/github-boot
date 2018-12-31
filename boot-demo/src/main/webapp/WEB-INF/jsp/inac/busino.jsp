<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">业务代码信息</span>
				<span class="caption-helper">业务代码信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="busino_ajax">
					<thead>
						<tr>
							<th width="10%">
								业务编码IA
							</th>
							<th width="12%">
								名称
							</th>
							<th width="10%">
								核算机构级别
							</th>
							<th width="10%">
								科目
							</th>
							<th width="8%">
								子户号
							</th>
							<th width="10%">
								特殊部门号
							</th>
							<th width="12%">
								属性类型
							</th>
							<th width="10%">
								是否初始开户
							</th>
							<th width="8%">
								指定序号
							</th>
							<th width="8%" colspan="2">
								操作
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!-- 修改业务编码弹出窗口 -->
	<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">业务代码信息修改</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal mod-form" id="mod-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">业务编码IA</label>
							<div class="col-md-9">
								<input type="text" id="m_busino" name="m_busino" class="form-control input-inline input-medium" maxlength="19" readOnly>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">名称</label>
							<div class="col-md-9">
								<input type="text" id="m_busina" name="m_busina" class="form-control input-inline input-medium" maxlength="30" placeholder="输入新业务编码名称">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="m_save" class="btn blue">保存</button>
		</div>
	</div>
	<!-- 新增业务代码弹出窗口 -->
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="900" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">新增业务代码</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-4">业务编码IA</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="30" autocomplete="off" placeholder="请业务编码" id="a_busino" name="a_busino"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">名称</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-user"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="80" placeholder="请输入名称" id="a_busina" name="a_busina"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">核算机构级别</label>
							<div class="input-icon col-md-8">
								<input class="form-control input-inline input-medium" type="hidden" id="a_acbrlv" name="a_acbrlv" placeholder="核算机构级别"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">科目</label>
							<div class="input-icon col-md-8">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="科目" id="a_itemcd" name="a_itemcd"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">子户号</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="35" placeholder="请输入子户号" id="a_subsac" name="a_subsac"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">参考部门号</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="10" placeholder="参考部门号" id="a_asgnbr" name="a_asgnbr"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">属性类型</label>
							<div class="input-icon col-md-8">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="属性类型" id="a_bzprtp" name="a_bzprtp"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">是否初始开户</label>
							<div class="input-icon col-md-8">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="是否初始开户" id="a_isatop" name="a_isatop"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-4">指定序号</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="32" placeholder="指定序号" id="a_serial" name="a_serial"/>
							</div>
						</div>
						
						
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="add_save">保存</button>
		</div>
	</div>
</div>
<script src="${ctx}/pages/inac/scripts/busino.js"></script>
<script>
	jQuery(document).ready(function(){
		Busino.init();
	});
</script>