<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">合作商定价模版</span>
				<span class="caption-helper">管理合作商定价模版...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">
								业务种类编号
							</th>
							<th width="13%">
								 产品定价号
							</th>
							<th width="13%">
								定价模版名称
							</th>
							<th width="13%">
								 模版分类
							</th>
							<th width="24" colspan="3">
								 操作
							</th> 
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商定价模版信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">业务种类编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="busicd" name="busicd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="业务种类编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">产品定价号</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="tmplcd" name="tmplcd"  class="form-control input-inline input-medium" maxlength="50" placeholder="产品定价号">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">定价模版名称</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="tmplna" name="tmplna"  class="form-control input-inline input-medium" maxlength="20" placeholder="定价模版名称">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">模版分类</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="tmpltp" name="tmpltp" class="form-control input-inline input-medium" maxlength="20" placeholder="模版分类">
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
			
			<div id="addConfModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">合作商定价模版配置信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="add_conf_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">业务种类编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="busicd" name="busicd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="业务种类编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">产品定价号</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="tmplcd" name="tmplcd"  class="form-control input-inline input-medium" maxlength="50" placeholder="产品定价号">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">属性key</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="propcd" name="propcd"  class="form-control input-inline input-medium" maxlength="20" placeholder="属性key">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">属性描述</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="propna" name="propna"  class="form-control input-inline input-medium" maxlength="20" placeholder="属性描述">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">属性类型</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="proptp" name="proptp"  class="form-control input-inline input-medium" maxlength="20" placeholder="属性类型">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">顺序号</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="sortno" name="sortno" class="form-control input-inline input-medium" maxlength="20" placeholder="顺序号">
										</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_conf_save_edit">保存</button>
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
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcm/scripts/kcmtmpl.js"></script>
<script>
	jQuery(document).ready(function() {    
		kcmtmpl.init();
	});
</script>
