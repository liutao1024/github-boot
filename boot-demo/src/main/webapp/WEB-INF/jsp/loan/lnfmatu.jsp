<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品到期属性表</span>
				<span class="caption-helper">管理贷款产品到期属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_matu_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_matu">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">到期扣息规则</th>
							<th scope="col">整笔到期遇节假日顺延规则</th>
							<th scope="col">结清时免除最大金额</th>
							<th scope="col">允许贷款展期</th>
							<th scope="col">展期方式</th>
							<th scope="col">展期最大次数</th>
							<th scope="col">展期最长期限</th>
							<th scope="col">展期需足额扣款</th>
							<th scope="col">展期规则编号</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editmatuModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品到期属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-6">
									    <div class="form-group">
											<label class="col-md-3 control-label">产品代码</label>
											<div class="col-md-9">
												<input type="text" name="prodcd"
													class="form-control input-inline input-medium form-value"
													readOnly placeholder="产品代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">到期扣息规则</label>
											<div class="col-md-9">
												<input type="text" name="instrp"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="到期扣息规则">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">整笔到期遇节假日顺延规则</label>
											<div class="col-md-9">
												<input type="text" name="mahdtp"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="整笔到期遇节假日顺延规则">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">结清时免除最大金额</label>
											<div class="col-md-9">
												<input type="text" name="mxexam"
													class="form-control input-inline input-medium form-value"
													placeholder="结清时免除最大金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">允许贷款展期</label>
											<div class="col-md-9">
												<input type="text" name="isexpd"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="允许贷款展期">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">展期方式</label>
											<div class="col-md-9">
												<input type="text" name="expdtp"
													class="select-close form-control input-inline input-medium form-value"
													maxlength="20" placeholder="展期方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">展期最大次数</label>
											<div class="col-md-9">
												<input type="text" name="expdts"
													class="form-control input-inline input-medium form-value"
													placeholder="展期最大次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">展期最长期限</label>
											<div class="col-md-9">
												<input type="text" name="expdtm"
													class="form-control input-inline input-medium form-value"
													placeholder="展期最长期限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">展期需足额扣款</label>
											<div class="col-md-9">
												<input type="text" name="expdrp"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="展期需足额扣款">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">展期规则编号</label>
											<div class="col-md-9">
												<input type="text" name="expdru"
													class="form-control input-inline input-medium form-value"
													placeholder="展期规则编号">
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
					<button type="button" class="btn blue" id="btn_save_matu">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfmatu.js"></script>
<script>
	jQuery(document).ready(function() {
		lnsubobj.setparam("lnfmatu", lnfmatu);
	});
</script>