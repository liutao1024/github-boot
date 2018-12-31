<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">定价属性表</span>
				<span class="caption-helper">管理定价属性...</span>
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
								属性key
							</th>
							<th width="10%">
								属性描述
							</th>
							<th width="15%">
								属性类型
							</th>
							<th width="11%">
								属性表
							</th>
							<th width="11%">
								属性字段
							</th>
							<th width="11%">
								查询页面
							</th>
							<th width="11%">
								维护页面
							</th>
							<th width="20" colspan="2">
								 操作
							</th> 
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" 
								name="propcd" ></td>
							<td></td>
							<td><input type="text"  name="proptp" class="form-control form-filter input-sm" placeholder="选择属性类型"></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom">
									<i class="fa fa-search"></i> 查询
								</button>
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
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
							<form class="form-horizontal" role="form" id="edit_form">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">定价属性信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">属性key</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="propcd" name="propcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入属性key">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">属性描述</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="propna" name="propna"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入属性描述">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">属性类型</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="proptp" name="proptp" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入属性类型">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">属性表</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="proptb" name="proptb"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入属性表">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">属性字段</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="propcl" name="propcl"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入属性字段">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">查询页面</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="propvw" name="propvw"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入查询页面">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">维护页面</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="propmt" name="propmt"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入维护页面">
												</div>
											</div>
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
	<!-- End: life time stats -->
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcm/scripts/kcmtmplprop.js"></script>
<script>
	jQuery(document).ready(function() {    
		kcmtmplprop.init();
	});
</script>
