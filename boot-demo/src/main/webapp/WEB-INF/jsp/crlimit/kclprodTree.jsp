<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">额度结构配置</span>
			</div>
			<div class="inputs">
				<div class="portlet-input input-inline input-medium ">
					<div class="input-icon right">
						<i class="icon-magnifier"></i> <input type="text" id="qryApp"
							class="form-control form-control-solid" placeholder="额度产品名称查询">
					</div>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-9">
					<button type="button" id="add_fu" class="btn blue">新增额度产品</button>
				</div>
			 	<div class="col-md-3">
					<button type="button" id="tree_ref" class="btn blue">刷新</button>
				</div> 
			</div>
			<div id="app_tree" class="tree-demo"></div>
		</div>
	</div>
</div>
<div class="col-md-6">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-cogs font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">额度详细信息</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal" role="form" id="upd_form">
				<div class="form-body">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						输入有误，请检查下面表单！<span class="msg"></span>
					</div>
					<div class="alert alert-success display-hide">
						<button class="close" data-close="alert"></button>
						表单提交成功！<span class="msg"></span>
					</div>
					<div id="inform"></div>
				</div>
				<div class="form-actions">
					<div class="row">
						<div class="col-md-offset-3 col-md-9">
							<button type="button" id="upd_btn" class="btn blue">保存</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<!-- edit modal -->
<div id="confModal" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i> <span
			class="caption-subject font-green-sharp bold uppercase">新增额度结构配置详情</span>
	</div>
	<div class="modal-body" style="text-align: left;">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="confaddForm">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							表单提交成功！返回信息 ：<span class="msg"></span>
						</div>

						<div class='form-group'>
							<label class='col-md-3 control-label'>额度产品号</label>
							<div class='col-md-9'>
								<div>
									<input type='text' name='prodcd' 
										class='form-control input-medium' maxlength='19'
										placeholder='输入额度产品号' />
								</div>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>额度类型编号</label>
							<div class='col-md-9'>
								<input type='text' name='cltpcd'
									class='form-control  input-medium' maxlength='19'
									placeholder='输入额度类型编号' />
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>上级额度类型编号</label>
							<div class='col-md-9'>
								<input type='text' class='form-control  input-medium'
									maxlength='19' placeholder='输入上级额度类型编号' name='ptclcd' />
							</div>
						</div>
						<div class='form-group'>
							<label class='control-label col-md-3'>额度级别</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='额度级别' name='cllevl' />
							</div>
						</div>
						<div class='form-group'>
							<label class='control-label col-md-3'>业务种类编号</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='业务种类编号' name='busicd'>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>产品号</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='产品号' name='bupdcd'>
							</div>
						</div>
					
						<div class='form-group'>
							<label class='col-md-3 control-label'>额度指定金额</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='额度指定金额' name='fixamt'>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>上级百分比</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='上级百分比' name='pratio'>
							</div>
						</div>
							<div class='form-group'>
							<label class='col-md-3 control-label'>是否向上递归</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='是否向上递归' name='updtfg'>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		<button type="button" class="btn blue" id="btn_conf_edit">保存</button>
	</div>
</div>
<div id="prodModal" class="modal fade" tabindex="-1"
	data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i> <span
			class="caption-subject font-green-sharp bold uppercase">新增额度详情</span>
	</div>
	<div class="modal-body" style="text-align: left;">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="prodaddForm">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							表单提交成功！返回信息 ：<span class="msg"></span>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>额度产品号</label>
							<div class='col-md-9'>
								<div>
									<input type='text' name='prodcd'
										class='form-control input-medium' maxlength='19'
										placeholder='输入额度产品号' />
								</div>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>额度产品名称</label>
							<div class='col-md-9'>
								<input type='text' name='prodna'
									class='form-control  input-medium' maxlength='19'
									placeholder='输入额度产品名称' />
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>循环标志</label>
							<div class='col-md-9'>
								<input type='text' class='form-control  input-medium'
									maxlength='19' placeholder='选择循环标志' name='cyclfg' />
							</div>
						</div>
						<div class='form-group'>
							<label class='control-label col-md-3'>释放额度</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='选择释放额度' name='freeze' />
							</div>
						</div>
						<div class='form-group'>
							<label class='control-label col-md-3'>额度模式</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='选择额度模式' name='clmode'>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-md-3 control-label'>是否超出额度金额</label>
							<div class='col-md-9'>
								<input type='text' class='form-control input-medium'
									placeholder='选择是否超出额度金额' name='isbdam'>
							</div>
						</div>

					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		<button type="button" class="btn blue" id="btn_prod_edit">保存</button>
	</div>
</div>
<div class="modal fade" tabindex="-1" id="copy_prod">
	<div class='form-group'>
		<label class='col-md-3 control-label'>额度产品号</label>
		<div class='col-md-9'>
			<div>
				<input type='text' name='prodcd' class='form-control input-medium'
					maxlength='19' placeholder='输入额度产品号' />
			</div>
		</div>
	</div>
	<div class='form-group'>
		<label class='col-md-3 control-label'>额度产品名称</label>
		<div class='col-md-9'>
			<input type='text' name='prodna' class='form-control  input-medium'
				maxlength='19' placeholder='输入额度产品名称' />
		</div>
	</div>
	<div class='form-group'>
		<label class='col-md-3 control-label'>循环标志</label>
		<div class='col-md-9'>
			<input type='text' class='form-control  input-medium' maxlength='19'
				placeholder='选择循环标志' name='cyclfg' />
		</div>
	</div>
	<div class='form-group'>
		<label class='control-label col-md-3'>释放额度</label>
		<div class='col-md-9'>
			<input type='text' class='form-control input-medium'
				placeholder='选择释放额度' name='freeze' />
		</div>
	</div>
	<div class='form-group'>
		<label class='control-label col-md-3'>额度模式</label>
		<div class='col-md-9'>
			<input type='text' class='form-control input-medium'
				placeholder='选择额度模式' name='clmode'>
		</div>
	</div>
	<div class='form-group'>
		<label class='col-md-3 control-label'>是否超出额度金额</label>
		<div class='col-md-9'>
			<input type='text' class='form-control input-medium'
				placeholder='选择是否超出额度金额' name='isbdam'>
		</div>
	</div>
</div>

<div class="modal fade" tabindex="-1" id="copy_conf">
	<div class="form-group">
		<label class="col-md-3 control-label">额度产品号</label>
		<div class="col-md-9">
			<input type="text" class="form-control" readOnly maxlength="19"
				placeholder="额度产品号" name="prodcd">
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">额度类型编号</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="50"
				placeholder="额度类型编号" name="cltpcd">
		</div>
	</div>
	<div class="form-group">
		<label class="control-label col-md-3">上级额度类型编号</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="1" readOnly
				placeholder="上级额度类型编号" name="ptclcd">
		</div>
	</div>
	<div class="form-group">
		<label class="control-label col-md-3">额度级别</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="19"
				placeholder="额度级别" name="cllevl">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-3 control-label">业务种类编号</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="19"
				placeholder="业务种类编号" name="busicd">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-3 control-label">产品号</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="100"
				placeholder="产品号" name="bupdcd">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-3 control-label">额度指定金额</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="100"
				placeholder="额度指定金额" name="fixamt">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-3 control-label">上级百分比</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="100"
				placeholder="上级百分比" name="pratio">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-3 control-label">是否向上递归</label>
		<div class="col-md-9">
			<input type="text" class="form-control" maxlength="100"
				placeholder="是否向上递归" name="updtfg">
		</div>
	</div>
</div>

<!-- edit modal end-->
<script src="${ctx}/pages/crlimit/scripts/kclprodTree.js"
	type="text/javascript"></script>
<script>
	jQuery(document).ready(function() {
		kclprodTree.init();
	});
</script>