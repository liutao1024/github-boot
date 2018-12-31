<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">产品机构控制表列表</span>
				<span class="caption-helper">管理产品机构控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_brch_btn" class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_brch">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">产品编号</th>
							<th width="10%">币种</th>
							<th width="10%">机构号</th>
							<th width="24%" colspan="1">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editbrchModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">产品机构控制表</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
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
										<label class="col-md-3 control-label">产品编号</label>
										<div class="col-md-9">
											<div>
												<input type="text"  name="prodcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="text"  name="crcycd"  class="form-control input-inline input-medium" maxlength="3" placeholder="选择货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">机构代号</label>
										<div class="col-md-9">
											<input type="text"  name="brchno"  class="form-control input-inline input-medium"  placeholder="选择机构">
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_brch">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	   </div>
	 </div>
</div>
<script src="${ctx}/pages/prod/scripts/kupdppbbrch.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbsub.js"></script>