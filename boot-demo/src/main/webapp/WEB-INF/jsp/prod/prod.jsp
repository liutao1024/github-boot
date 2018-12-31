<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>NOTE: 下面为demo模仿数据.</p>
	</div>
</div>
<!-- 左侧树分类开始-->
<div class="col-md-4">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品分类</span>
			</div>
			<div class="inputs">
				<div class="portlet-input input-inline input-medium ">
					<div class="input-icon right">
						<i class="icon-magnifier"></i> <input type="text" id="qryBranch"
							class="form-control form-control-solid" placeholder="产品名称查询">
					</div>
				</div>
			</div>
		</div>
		<div class="portlet-body" id="class_tree"></div>
	</div>
</div>
<!-- 左侧树分类结束-->
<!-- 右侧产品显示去开始 -->
<div class="col-md-8">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品列表</span>
				<span class="caption-helper">管理产品信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="15%">产品cd</th>
							<th width="15%">最新版本</th>
							<th width="15%">模板cd</th>
							<th width="15%">产品名称</th> 
							<th width="15%">合作商户</th>
							<th width="15%">产品配置</th>
							<th width="9%">状态</th>
							<th width="16%" colspan="2">操作</th> 
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="tt"
								name="query_period_cd" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
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
</div> 
<!-- 右侧产品显示去结束-->

<!-- add prod start -->
<div id="add_prod" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">新增产品</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" id="add_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">产品cd</label>
						<div class="col-md-9">
							<input type="text" id="add_prod_cd" name="add_prod_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">最新版本号</label>
						<div class="col-md-9">
							<input type="text" id="add_last_ver" name="add_last_ver"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">抽象模板</label>
						<div class="col-md-9">
							<input type="text" id="add_abstract_cd" name="add_abstract_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">分类cd</label>
						<div class="col-md-9">
							<input type="text" id="add_class_cd" name="class_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">产品名称</label>
						<div class="col-md-9">
							<input type="text" id="add_prod_name" name="prod_name"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">合作商户</label>
						<div class="col-md-9">
							<input type="text" id="add_merchant_cd" name="merchant_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
						<button type="submit" class="btn blue" id="btn_add_save">保存并配置产品</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- add prod end-->
<!-- edit prod start -->
<div id="edit_prod" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">编辑产品</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" id="edit_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">注册机构号</label>
						<div class="col-md-9">
							<input type="text" id=edit_register_cd name="edit_register_cd"
								readOnly class="form-control input-inline input-medium" readOnly
								maxlength="19" placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">产品cd</label>
						<div class="col-md-9">
							<input type="text" id="edit_prod_cd" name="edit_prod_cd"
								class="form-control input-inline input-medium" readOnly
								maxlength="19" placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">最新版本号</label>
						<div class="col-md-9">
							<input type="text" id="edit_last_ver" name="edit_last_ver"
								class="form-control input-inline input-medium" readOnly
								maxlength="19" placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">抽象模板</label>
						<div class="col-md-9">
							<input type="text" id="edit_abstract_cd" name="edit_abstract_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">业务种类编号</label>
						<div class="col-md-9">
							<input type="text" id="edit_busi_cd" name="edit_busi_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">分类cd</label>
						<div class="col-md-9">
							<input type="text" id="edit_class_cd" name="edit_class_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">产品名称</label>
						<div class="col-md-9">
							<input type="text" id="edit_prod_name" name="edit_prod_name"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">合作商户</label>
						<div class="col-md-9">
							<input type="text" id="edit_merchant_cd" name="edit_merchant_cd"
								class="form-control input-inline input-medium" maxlength="19"
								placeholder="输入参数描述">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
						<button type="submit" class="btn blue" id="btn_edit_save">保存</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- edit prod end-->
<!-- 配置产品  start -->
<div id="edit_setting" class="modal fade" tabindex="-1" data-width="760"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">配置产品</h4>
		<button id='settingXML_btn'
			class='btn btn-sm green table-group-action-submit'>
			<i class='fa fa-edit'></i>编辑产品配置文件
		</button>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="portlet light">
				<div class="portlet-body">
					<div class="tabbable-custom nav-justified">
						<ul class="nav nav-tabs nav-justified">
						</ul>
						<div class="tab-content"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		<button type="button" class="btn blue" id="save_setting">保存</button>
	</div>
</div>
<!-- 配置产品  end -->
<!-- 直接编辑配置产品参数start -->
<div id="editsettingXML" class="modal container fade in" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<h4 class="modal-title">修改产品配置文件</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="edit_setting_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">产品XML配置</label>
							<div class="col-md-9">
								<div>
									<textarea id="edit_setting_XML" class="form-control" rows="3"
										style="margin: 0px -1px 0px 0px; height: 118px; width: 515px;"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
						<button type="submit" class="btn blue" id="btn_save_XML">保存</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- 直接编辑配置产品参数end -->
<!-- 单个参数配置 start-->
<!--  <div id="editSettingSingle" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">修改产品配置参数</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_setting_Single">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									 <div class="form-group">
										<label class="col-md-3 control-label">产品XML配置</label>
										  <div class="col-md-9">
											<div>
											<textarea id="edit_setting_XML" class="form-control" rows="3" style="margin: 0px -1px 0px 0px; height: 118px; width: 515px;"></textarea>		
											</div>
										</div>																	
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" data-dismiss="modal" class="btn blue" id="btn_save_Single">确定</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
      	-->
<!-- 单个参数配置 end-->

<script src="${ctx}/pages/prod/scripts/prod.js"></script>
<script src="${ctx}/pages/prod/scripts/prodPropObj.js"></script>
<script src="${ctx}/pages/sys/scripts/bootstrap-datetimepicker.min.js"></script>
<script>
	jQuery(document).ready(function() {
		Prod.init();
	});
</script>
