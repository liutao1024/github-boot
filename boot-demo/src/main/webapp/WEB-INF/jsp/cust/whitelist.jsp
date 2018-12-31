<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">白名单管理列表</span>
				<span class="caption-helper">白名单信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">

				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">转出账户</th>
							<th width="8%">转入账户</th>
							<th width="8%">货币</th>
							<th width="8%">交易渠道</th>
							<th width="16%" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="fracct"
								name="fracct" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="toacct"
								name="toacct" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="crcycd"
								name="crcycd"></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="servtp"
								name="servtp" /></td>
							<td colspan="2">
								<button id="select_btn"
									class="btn btn-sm yellow filter-submit margin-bottom">
									<i class="fa fa-search"></i> 查询
								</button>
								<button class="btn btn-sm red filter-cancel" id="clearwl">
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
			<div id="editModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">白名单信息</h4>
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
										<label class="col-md-3 control-label">转出账户</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="a_fracct" name="a_fracct" readOnly
													class="form-control input-inline input-medium form-value"
													maxlength="20" placeholder="输入转出账户">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">转入账户</label>
										<div class="col-md-9">
											<input type="text" id="a_toacct" name="a_toacct"
												class="form-control input-inline input-medium form-value"
												maxlength="80" placeholder="输入转入账户">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">币种</label>
										<div class="col-md-9">
											<input type="hidden" id="a_crcycd" name="a_crcycd"
												class="form-control input-inline input-medium form-value"
												maxlength="3" placeholder="选择币种">
										</div>
									</div>
								
								<div class="form-group">
									<label class="col-md-3 control-label">渠道码</label>
									<div class="col-md-9">
										<input type="hidden" id="a_servtp" name="a_servtp"
											class="form-control input-inline input-medium form-value"
											maxlength="3" placeholder="选择渠道码">
									</div>
								</div>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal"
								class="btn btn-default">关闭</button>
							<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cust/scripts/whitelist.js"></script>
<script>
	jQuery(document).ready(function() {
		whitelist.init();
	});
</script>
