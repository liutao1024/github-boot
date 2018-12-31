<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">贷款核销模版</span>
				<span class="caption-helper">管理贷款核销模版...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 核销</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">贷款账号</th>
							<th scope="col">贷款借据号</th>
							<th scope="col">客户名称</th>
							<th scope="col">货币代码</th>
							<th scope="col">到期日期</th>
							<th scope="col">贷款期限</th>
							<th scope="col">贷款形态</th>
							<th scope="col">可核销本金</th>
							<th scope="col">可核销利息</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_acctno" name="q_acctno" />
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_lncfno" name="q_lncfno" /> 
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
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
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">参考利率信息</h4>
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
										<label class="col-md-3 control-label">贷款账号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="acctno" name="acctno" class="form-control input-inline input-medium" placeholder="输入贷款账号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">贷款借据号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="lncfno" name="lncfno" class="form-control input-inline input-medium" placeholder="输入贷款借据号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="hidden" id="crcycd" name="crcycd" class="form-control input-inline input-medium" placeholder="输入货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">核销本金</label>
										<div class="col-md-9">
											<input type="text" id="clnpbl" name="clnpbl" class="form-control input-inline input-medium" placeholder="输入核销本金">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">核销利息</label>
										<div class="col-md-9">
											<input type="text" id="clintr" name="clintr" class="form-control input-inline input-medium" placeholder="输入核销利息">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">核销来源账号</label>
										<div class="col-md-9">
											<input type="text" id="clacno" name="clacno" class="form-control input-inline input-medium" placeholder="输入核销来源账号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">核销来源账号子序号</label>
										<div class="col-md-9">
											<input type="text" id="clsuac" name="clsuac" class="form-control input-inline input-medium" placeholder="输入核销来源账号子序号">
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save">保存</button>
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
<script src="${ctx}/pages/loan/scripts/cancln.js"></script>
<script>
	jQuery(document).ready(function() {    
		cncln.init();
	});
</script>
