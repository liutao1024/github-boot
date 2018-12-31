<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费套餐信息解析表</span>
			<span class="caption-helper">收费套餐信息解析表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_prcs_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_prcs" style="white-space: nowrap;">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">费用套餐代码</th>
						<th scope="col">收费代码</th>
						<th scope="col">场景代码</th>
						<th scope="col">收费套餐是否生效</th>
						<th scope="col">说明</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
					<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_packcd" name="q_packcd" />
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_chrgcd" name="q_chrgcd" /> 
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_scencd" name="q_scencd" /> 
							</td>
							<td>
							</td>
							<td>
							</td>
							<td  colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editexplModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="500" style="white-space: nowrap;">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费套餐信息解析表属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-3 control-label">费用套餐代码</label>
											<div class="col-md-6">
												<input type="text" id="packcd" name="packcd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="费用套餐代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">收费代码</label>
											<div class="col-md-6">
												<input type="text" id='chrgcd' name="chrgcd"
													class="form-control input-inline input-medium form-value"
													maxlength="8" placeholder="收费代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">场景代码</label>
											<div class="col-md-6">
												<input type="text" id='scencd' name="scencd"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="场景代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">收费套餐是否有效</label>
											<div class="col-md-6">
												<input type="text" name="ispkef"
													class="form-control input-inline input-medium form-value"
													maxlength="1" placeholder="收费套餐是否有效">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">说明</label>
											<div class="col-md-6">
												<input type="text" name="explan"
													class="form-control input-inline input-medium form-value"
													maxlength="100" placeholder="说明">
												<input type="hidden" name="action"/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_prcs">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcppackexpl.js"></script>
<script>
	jQuery(document).ready(function() {
		kcppackdefi.init();
	});
</script>