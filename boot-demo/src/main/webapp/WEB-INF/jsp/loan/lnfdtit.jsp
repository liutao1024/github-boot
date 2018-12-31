<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time status -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品会计核算属性表列表</span>
				<span class="caption-helper">贷款产品会计核算属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_dtit_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_dtit">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">按应计非应计核算</th>
							<th scope="col">按一逾两呆核算</th>
							<th scope="col">按贷款形态分科目核算</th>
							<th scope="col">自动形态转移</th>
							<th scope="col">利息转出规则</th>
							<th scope="col">利息转回规则</th>
							<th scope="col">核算方式</th>
							<th scope="col">核算代码</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editdtitModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1000px">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品会计核算属性表</h4>
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
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="select-close form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">按一逾两呆核算</label>
											<div class="col-md-9">
												<input type="text" name="clssfg"
													class="select-close form-control input-inline input-medium"
													placeholder="按一逾两呆核算">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">自动形态转移</label>
											<div class="col-md-9">
												<input type="text" name="isauto"
													class="select-close form-control input-inline input-medium"
													placeholder="自动形态转移">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">核算方式</label>
											<div class="col-md-9">
												<input type="text" name="dtittp"
													class="select-close form-control input-inline input-medium"
													placeholder="核算方式">
											</div>
										</div>
									</div>
									
									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-3 control-label">按应计非应计核算</label>
											<div class="col-md-9">
												<input type="text" name="prlnfg"
													class="select-close form-control input-inline input-medium"
													placeholder="按应计非应计核算">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">按贷款形态分科目核算</label>
											<div class="col-md-9">
												<input type="text" name="dtitfg"
													class="select-close form-control input-inline input-medium"
													placeholder="按贷款形态分科目核算">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利息转出规则</label>
											<div class="col-md-9">
												<input type="text" name="inottp"
													class="select-close form-control input-inline input-medium"
													placeholder="利息转出规则">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利息转回规则</label>
											<div class="col-md-9">
												<input type="text" name="inintp"
													class="select-close form-control input-inline input-medium"
													placeholder="利息转回规则">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">核算代码</label>
											<div class="col-md-9">
												<input type="text" name="dtitcd"
													class="form-control input-inline input-medium"
													placeholder="核算代码">
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
					<button type="button" class="btn blue" id="btn_save_dtit">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfdtit.js"></script>
<script>
	$(document).ready(function() {
		lnsubobj.setparam("lnfdtit", lnfdtit);
	});
</script>