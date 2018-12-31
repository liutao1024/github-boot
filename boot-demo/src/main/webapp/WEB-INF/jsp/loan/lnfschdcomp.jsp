<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品还款方式组合表</span>
				<span class="caption-helper">管理贷款产品还款方式组合配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_comp_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_comp">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">序号</th>
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">组合类型</th>
							<th scope="col">还款方式</th>
							<th scope="col">等额处理规则</th>
							<th scope="col">累进值</th>
							<th scope="col">累进区间期数</th>
							<th scope="col">还款周期</th>
							<th scope="col">还本周期</th>
							<th scope="col">逾期还款周期</th>
							<th scope="col">期数</th>
							<th scope="col">费率代码</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editcompModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品还款方式组合</h4>
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
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">还款方式</label>
											<div class="col-md-9">
												<input type="text" name="schdtp"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="还款方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">还本周期</label>
											<div class="col-md-9">
												<input type="text" name="prinfm"
													class="form-control input-inline input-medium form-value"
													placeholder="还本周期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">等额处理规则</label>
											<div class="col-md-9">
												<input type="text" name="eqmode"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="等额处理规则">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">费率代码</label>
											<div class="col-md-9">
												<input type="text" name="ratecd"
													class="form-control input-inline input-medium form-value"
													placeholder="费率代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">逾期还款周期</label>
											<div class="col-md-9">
												<input type="text" name="ovdufm"
													class="form-control input-inline input-medium form-value"
													placeholder="逾期还款周期">
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">组合类型</label>
											<div class="col-md-9">
												<input type="text" name="comptp"
													class="select-close form-control input-inline input-medium form-value"
													placeholder="组合类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">还款周期</label>
											<div class="col-md-9">
												<input type="text" name="repyfm"
													class="form-control input-inline input-medium form-value"
													placeholder="还款周期">
											</div>
										</div>

										<div class="form-group">
											<label class="col-md-3 control-label">累进区间期数</label>
											<div class="col-md-9">
												<input type="text" name="progpv"
													class="form-control input-inline input-medium form-value"
													placeholder="累进区间期数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">累进值</label>
											<div class="col-md-9">
												<input type="text" name="progvl"
													class="form-control input-inline input-medium form-value"
													maxlength="20" placeholder="累进值">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">期数</label>
											<div class="col-md-9">
												<input type="text" name="istlnm"
													class="form-control input-inline input-medium form-value"
													placeholder="期数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">序号</label>
											<div class="col-md-9">
												<input type="text" name="sortno"
													class="form-control input-inline input-medium form-value"
													placeholder="序号">
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
					<button type="button" class="btn blue" id="btn_save_comp">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfschdcomp.js"></script>
<script>
	jQuery(document).ready(function() {
		lnsubobj.setparam("lnfschdcomp", lnfschdcomp);
	});
</script>