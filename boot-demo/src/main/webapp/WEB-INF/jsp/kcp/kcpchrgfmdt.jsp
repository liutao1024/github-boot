<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_fmdt_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_fmdt">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">收费公式代码</th>
						<th scope="col">分行代码</th>
						<th scope="col">机构号</th>
						<th scope="col">货币代号</th>
						<th scope="col">金额区间金额下限</th>
						<th scope="col">计费类型</th>
						<th scope="col">收费比例</th>
						<th scope="col">计费单价</th>
						<th scope="col">金额公式</th>
						<th scope="col">序号</th>
						<th scope="col">最低金额</th>
						<th scope="col">最高金额</th>
						<th scope="col">备注信息</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editfmdtModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="800">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费公式明细表属性</h4>
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
											<label class="col-md-4 control-label">收费公式代码</label>
											<div class="col-md-4">
												<input type="text" name="chrgfm"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费公式代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">分行代码</label>
											<div class="col-md-4">
												<input type="text" name="sbbkcd"
													class="form-control input-inline input-medium form-value"
													 placeholder="分行代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">机构号</label>
											<div class="col-md-4">
												<input type="text" name="brchno"
													class="form-control input-inline input-medium form-value"
													 placeholder="机构号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">货币代号</label>
											<div class="col-md-4">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													 placeholder="货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">序号</label>
											<div class="col-md-4">
												<input type="text" name="sequno"
													class="form-control input-inline input-medium form-value"
													 placeholder="序号">
											</div>
										</div>

										<div class="form-group">
											<label class="col-md-4 control-label">金额区间金额下限</label>
											<div class="col-md-4">
												<input type="text" name="limiam"
													class="form-control input-inline input-medium form-value"
													 placeholder="金额区间金额下限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">备注信息</label>
											<div class="col-md-4">
												<input type="text" name="remark"
													class="form-control input-inline input-medium form-value"
													 placeholder="备注信息">
											</div>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-4 control-label">计费类型</label>
											<div class="col-md-4">
												<input type="text" name="cufetp"
													class="form-control input-inline input-medium form-value"
													 placeholder="计费类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">收费比例</label>
											<div class="col-md-4">
												<input type="text" name="chrgrt"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费比例">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">计费单价</label>
											<div class="col-md-4">
												<input type="text" name="pecgam"
													class="form-control input-inline input-medium form-value"
													 placeholder="计费单价">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">金额公式</label>
											<div class="col-md-4">
												<input type="text" name="amfomu"
													class="form-control input-inline input-medium form-value"
													 placeholder="金额公式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">最低金额</label>
											<div class="col-md-4">
												<input type="text" name="cgmnam"
													class="form-control input-inline input-medium form-value"
													 placeholder="最低金额">
											</div>
										</div>

										<div class="form-group">
											<label class="col-md-4 control-label">最高金额</label>
											<div class="col-md-4">
												<input type="text" name="cgmxam"
													class="form-control input-inline input-medium form-value"
													 placeholder="最高金额">
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
					<button type="button" class="btn blue" id="btn_save_fmdt">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kcp/scripts/kcpchrgfmdt.js"></script>
<script>
	jQuery(document).ready(function() {

	});
</script>