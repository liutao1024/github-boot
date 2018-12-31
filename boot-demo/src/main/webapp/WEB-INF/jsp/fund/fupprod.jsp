<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">基金产品配置</span>
			<span class="caption-helper">管理基金产品配置配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_fdpd_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_fdpd">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">产品号</th>
						<th scope="col">产品名称</th>
						<th scope="col">基金代码</th>
						<th scope="col">基金名称</th>
						<th scope="col">基金公司代码</th>
						<th scope="col">基金公司客户</th>
						<th scope="col">基金公司账号</th>
						<th scope="col">7日年化收益率</th>
						<th scope="col">万份基金收益</th>
						<th scope="col">收益率更新日期</th>
						<th scope="col">核算代码</th>
						<th scope="col">产品营销说明</th>
						<th scope="col">最小认购份额</th>
						<th scope="col">产品状态</th>
						<th width="15%" colspan="2">操作</th>
					</tr>
					<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_prodcd" name="q_prodcd" />
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_prodna" name="q_prodna" /> 
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
		<div id="editfdpdModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1300">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">基金产品配置属性</h4>
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
											<label class="col-md-6 control-label">产品号</label>
											<div class="col-md-6">
												<input type="text" name=prodcd
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="产品号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">产品名称</label>
											<div class="col-md-6">
												<input type="text" name="prodna"
													class="form-control input-inline input-medium form-value"
													maxlength="200" placeholder="产品名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">基金代码</label>
											<div class="col-md-6">
												<input type="text" name="fundcd"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="基金代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">基金名称</label>
											<div class="col-md-6">
												<input type="text" name="fundna"
													class="form-control input-inline input-medium form-value"
													maxlength="200" placeholder="基金名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">基金公司代码</label>
											<div class="col-md-6">
												<input type="text" name="fundno"
													class="form-control input-inline input-medium form-value"
													maxlength="40" placeholder="基金公司代码">
											</div>
										</div>

										<div class="form-group">
											<label class="col-md-6 control-label">基金公司客户</label>
											<div class="col-md-6">
												<input type="text" name="fdcust"
													class="form-control input-inline input-medium form-value"
													maxlength="40" placeholder="基金公司客户">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">基金公司账号</label>
											<div class="col-md-6">
												<input type="text" name="fdacct"
													class="form-control input-inline input-medium form-value"
													maxlength="40" placeholder="基金公司账号">
											</div>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<label class="col-md-6 control-label">7日年化收益率</label>
											<div class="col-md-6">
												<input type="text" name="seinrt"
													class="form-control input-inline input-medium form-value"
													maxlength="11" placeholder="7日年化收益率">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">万份基金收益</label>
											<div class="col-md-6">
												<input type="text" name="wfprof"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="万份基金收益">
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-md-6">收益率更新日期</label>
											<div class="input-group col-md-6 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<input type="text"  class="form-control input-inline input-medium form-value" name="pfupdt">
												<span class="input-group-btn">
												<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
												</span>
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">核算代码</label>
											<div class="col-md-6">
												<input type="text" name="acctcd"
													class="form-control input-inline input-medium form-value"
													maxlength="20" placeholder="核算代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">产品营销说明</label>
											<div class="col-md-6">
												<input type="text" name="pdmktx"
													class="form-control input-inline input-medium form-value"
													maxlength="200" placeholder="产品营销说明">
											</div>
										</div>

										<div class="form-group">
											<label class="col-md-6 control-label">最小认购份额</label>
											<div class="col-md-6">
												<input type="text" name="minuit"
													class="form-control input-inline input-medium form-value"
													maxlength="21" placeholder="最小认购份额">
											</div>
										</div>
											<div class="form-group">
											<label class="col-md-6 control-label">产品状态</label>
											<div class="col-md-6">
												<input type="text" name="prodst"
													class="form-control input-inline input-medium form-value"
													maxlength="2" placeholder="产品状态">
											</div>
										</div>
										<input type="hidden" name="trantp"
													class="form-control input-inline input-medium form-value"
													maxlength="2" placeholder="交易类型">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_fdpd">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/fund/scripts/fupprod.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script>
	jQuery(document).ready(function() {
		fupprod.init();
	});
</script>