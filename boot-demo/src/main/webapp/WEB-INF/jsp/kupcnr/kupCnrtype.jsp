<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">三类账户限额控制信息表</span>
				<span class="caption-helper">三类账户限额控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_type_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_type">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">账户分类</th>
							<th scope="col">渠道</th>
							<th scope="col">币种</th>
							<th scope="col">业务类型</th>
							<th scope="col">单笔限额</th>
							<th scope="col">日累计限额</th>
							<th scope="col">年累计限额</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text" class="form-control form-filter input-sm" id="q_acttyp" name="q_acttyp" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_trnchl" name="q_trnchl" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_crcycd" name="q_crcycd" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_bustyp" name="q_bustyp" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_siglmt" name="q_siglmt" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_totlmt" name="q_totlmt" /></td>
							<td><input type="text" class="form-control form-filter input-sm" id="q_yearmt" name="q_yearmt" /></td>
							<td><button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button></td>
							<td><button class="btn btn-sm margin-bottom" id="clearinput"><i class="fa fa-undo"></i>清除</button></td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="edittypeModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="880">
				<div style="height: 280px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true"></button>
						<h4 class="modal-title">三类账户限额控制属性</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<form class="form-horizontal" role="form" id="editform" >
									<div class="form-body">
										<div class="alert alert-danger display-hide">
											<button class="close" data-close="alert"></button>
											输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
										</div>
										<div class="alert alert-success display-hide">
											<button class="close" data-close="alert"></button>
											表单提交成功！返回信息 ：<span class="msg"></span>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">账户分类</label>
												<div class="col-md-4">
													<input type="text" name="acttyp" id="acttyp"
														class="form-control input-inline input-medium form-value"
														placeholder="账户分类" >
												</div>
											</div>
											
											<div class="form-group">
												<label class="col-md-4 control-label">渠道</label>
												<div class="col-md-4">
													<input type="text" name="trnchl" id="trnchl"
														class="form-control input-inline input-medium form-value"
														placeholder="渠道" >
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">币种</label>
												<div class="col-md-4">
													<input type="text" name="crcycd" id="crcycd"
														class="form-control input-inline input-medium form-value"
														placeholder="币种" >
												</div>
											</div>
											
											<div class="form-group">
												<label class="col-md-4 control-label">业务类型</label>
												<div class="col-md-4">
													<input type="text" name="bustyp" id="bustyp"
														class="form-control input-inline input-medium form-value"
														placeholder="业务类型" >
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">单笔限额</label>
												<div class="col-md-4">
													<input type="text" name="siglmt" id="siglmt"
														class="form-control input-inline input-medium form-value"
														placeholder="单笔限额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">日累计限额</label>
												<div class="col-md-4">
													<input type="text" name="totlmt" id="totlmt"
														class="form-control input-inline input-medium form-value"
														placeholder="日累计限额">
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="col-md-4 control-label">年累计限额</label>
												<div class="col-md-4">
													<input type="text" name="yearmt" id="yearmt"
														class="form-control input-inline input-medium form-value"
														placeholder="年累计限额">
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
						<button type="button" class="btn blue" id="btn_save_type">保存</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kupcnr/scripts/kupCnrtype.js"></script>
<%-- <script src="${ctx}/pages/crlimit/scripts/kclprodtype.js"></script> --%>
<script>
	jQuery(document).ready(function() {
		kupCnrtype.init();
	});
</script>