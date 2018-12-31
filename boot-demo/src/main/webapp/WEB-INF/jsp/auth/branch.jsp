<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">机构管理</span>
			</div>
			<div class="inputs">
				<div class="portlet-input input-inline input-medium ">
					<div class="input-icon right">
						<i class="icon-magnifier"></i>
						<input type="text" id="qryBranch" class="form-control form-control-solid" placeholder="机构名称查询">
					</div>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<div id="branch_tree" class="tree-demo">
			</div>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">机构详细信息</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal" role="form" id="edit_form">
				<div class="form-body">
					<div class="form-group">
						<label class="col-md-3 control-label">机构编号</label>
						<div class="col-md-9">
							<input type="text" class="form-control" maxlength="19" placeholder="唯一标识机构编号" id="branch_cd" readOnly>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">机构名称</label>
						<div class="col-md-9">
							<input type="text" name="branch_name" class="form-control" maxlength="19" placeholder="机构名称" id="branch_name">
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">机构类型</label>
						<div class="col-md-9">
							<select class="form-control select2me" name="branch_type" data-placeholder="选择机构类型" id="branch_type">
								<option value=""></option>
								<option value="1">总行</option>
								<option value="2">管理部门</option>
								<option value="3">分行</option>
								<option value="4">支行/网点</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-md-3">有效状态</label>
						<div class="col-md-9">
							<select class="form-control select2me" name="branch_status" data-placeholder="选择有效状态" id="branch_status">
								<option value=""></option>
								<option value="Y">有效</option>
								<option value="N">无效</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">详细地址</label>
						<div class="col-md-9">
							<textarea class="form-control" name="branch_address" rows="3" id="branch_address"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">邮编</label>
						<div class="col-md-9">
							<input type="text" id="zipcode" name="zip_code" class="form-control zipcode" placeholder="6位邮编">
						</div>
					</div>
				</div>
				<div class="form-actions">
					<div class="row">
						<div class="col-md-offset-3 col-md-9">
							<button type="submit" class="btn blue">保存</button>
							<button type="button" class="btn red">清空</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<!-- add branch modal -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<i class="fa fa-cogs font-green-sharp"></i>
					<span class="caption-subject font-green-sharp bold uppercase">新增机构详细信息</span>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="add_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">机构编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" name="branch_cd" id="add_branch_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">机构名称</label>
										<div class="col-md-9">
											<input type="text" id="add_branch_name" name="branch_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入机构名称">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">上级机构</label>
										<div class="col-md-9">
											<input type="text" id="add_parent" readOnly class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">机构类型</label>
										<div class="col-md-9">
											<select name="branch_type" class="form-control select2me input-medium" data-placeholder="选择机构类型" id="add_branch_type">
												<option value=""></option>
												<option value="1">总行</option>
												<option value="2">管理部门</option>
												<option value="3">分行</option>
												<option value="4">支行/网点</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">有效状态</label>
										<div class="col-md-9">
											<select name="branch_status" class="form-control select2me input-medium" data-placeholder="选择有效状态" id="add_branch_status">
												<option value=""></option>
												<option value="Y">有效</option>
												<option value="N">无效</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">详细地址</label>
										<div class="col-md-9">
											<textarea name="branch_address" class="form-control input-medium" rows="3" id="add_branch_address" placeholder="输入机构所在地址"></textarea>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">邮编</label>
										<div class="col-md-9">
											<input name="zip_code" type="text" id="add_zipcode" class="form-control input-medium zipcode" placeholder="6位邮编">
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
<script src="${ctx}/pages/auth/scripts/branch.js" type="text/javascript" ></script>
<script>
	jQuery(document).ready(function() {    
		Branch.init();
	});
</script>