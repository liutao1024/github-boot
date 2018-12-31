<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">活动适用范围列表</span>
				<span class="caption-helper">管理活动适用范围...</span>
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
								活动号
							</th>
							<th width="13%">
								 适用类型
							</th>
							<th width="13%">
								适用号
							</th>
							<th width="24" colspan="2">
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
					<h4 class="modal-title">活动适用范围</h4>
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
										<label class="col-md-3 control-label">活动号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="actvcd" name="actvcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入活动号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">适用类型</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="suittp" name="suittp" readOnly class="form-control input-inline input-medium" maxlength="50" placeholder="输入适用类型">
										</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">适用号</label>
										<div class="col-md-9">
										<div>
											<input type="text" id="suitno" name="suitno" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入标识号">
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
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcm/scripts/kcmsuitscop.js"></script>
<script>
	jQuery(document).ready(function() {    
		kcmsuitscop.init();
	});
</script>
