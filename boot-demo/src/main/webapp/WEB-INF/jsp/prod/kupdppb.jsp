<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<script src="${ctx}/pages/prod/scripts/kupdppbdict.js"></script>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">存款产品基础属性列表</span>
				<span class="caption-helper">管理存款产品基础属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_btn_prod"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">产品编号</th>
							<th width="10%">产品说明</th>
							<th width="10%">产品营销说明</th>
							<th width="10%">生效日期</th>
							<th width="10%">失效日期</th>
							<th width="10%">产品状态</th>
							<th width="24%" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodcd"
								name="q_prodcd" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodtx"
								name="q_prodtx" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom">
									<i class="fa fa-search"></i> 查询
								</button>
								<button class="btn btn-sm red filter-cancel">
									<i class="fa fa-times"></i> 清空
								</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- add modal start-->
			<div id="editModal" class="modal fade modal-scroll" tabindex="-1"
			data-backdrop="static"	 data-keyboard="false" data-width="1280" data-height='600'>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">存款产品信息</h4>
				</div>
				<div class="modal-body">
					<div class="row profile">
						<ul class="nav nav-tabs">
							<li class="active tab_1"><a href="#tab_1" data-toggle="tab">
									基础参数 </a></li>
						</ul>
						<div class="col-md-12">
							<div class="tab-content">
								<div class="tab-pane tab_1 active">
									<form class="form-horizontal control-label" role="form"
										id="kupdppb" name="kupdppb">
										<div class="form-body">
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label class="col-md-3 control-label">产品编号</label>
													<div class="col-md-9">
														<div>
															<input type="text" id="prodcd" name="prodcd"
																class="form-control input-inline input-medium form-value"
																maxlength="10" placeholder="输入产品编号">
														</div>
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">产品说明</label>
													<div class="col-md-9">
														<input type="text" name="prodtx"
															class="form-control input-inline input-medium form-value"
															maxlength="100" placeholder="输入产品说明">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">产品营销说明</label>
													<div class="col-md-9">
														<input type="text" name="pdmktx"
															class="form-control input-inline input-medium form-value"
															maxlength="200" placeholder="输入产品营销说明">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">生效日期</label>
													<div class="col-md-9">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="efctdt"
																maxlength="8" placeholder="输入生效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">失效日期</label>
													<div class="col-md-9">
														<div
															class="input-group col-md-12 date input-medium date-picker"
															data-date-format="yyyymmdd" data-date-viewmode="years"
															data-date-minviewmode="months">
															<input type="text" class="form-control form-value" name="inefdt"
																maxlength="8" placeholder="输入失效日期"> <span
																class="input-group-btn">
																<button class="btn" type="button">
																	<i class="fa fa-calendar"></i>
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">产品状态</label>
													<div class="col-md-9">
														<input type="text" name="prodst"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="输入产品状态">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">预售份额</label>
													<div class="col-md-9">
														<input type="text" name="presal"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="输入预售份额" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label class="col-md-3 control-label">产品定活标志</label>
													<div class="col-md-9">
														<input type="text" name="pddpfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="输入产品定活标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">产品所属对象</label>
													<div class="col-md-9">
														<input type="text" name="prodtp"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="输入产品所属对象">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">产品默认币种</label>
													<div class="col-md-9">
														<input type="text" name="pdcrcy"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="输入产品默认币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">机构控制标志</label>
													<div class="col-md-9">
														<input type="text" name="brchfg"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="机构控制标志">
													</div>
												</div>
												<!-- <div class="form-group">
													<label class="col-md-3 control-label">客户控制标志</label>
													<div class="col-md-9">
														<input type="text" name="custfg"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="输入客户控制标志">
													</div>
												</div>-->
												<div class="form-group">
													<label class="col-md-3 control-label">存款种类</label>
													<div class="col-md-9">
														<input type="text" name="debttp"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="输入存款种类">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">早起息许可标志</label>
													<div class="col-md-9">
														<input type="text" name="mginfg"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="输入早起息许可标志">
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_2">
									<form class="form-horizontal" role="form" id="kupdppbbrch"
										name="kupdppbbrch">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">机构号</label>
													<div class="col-md-9">
														<input type="text" name="brchno"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="选择机构">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="选择币种">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_brch">
												<thead>
													<tr role="row" class="heading">
														<th width="10%">产品编号</th>
														<th width="10%">机构号</th>
														<th width="10%">币种</th>
														<th width="10%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_3">
									<form class="form-horizontal" role="form" id="kupdppbactp"
										name="kupdppbactp">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">客户账号类型</label>
													<div class="col-md-8">
														<input type="text" name="cacttp"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="选择客户账号类型">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">开子账户关联凭证标志</label>
													<div class="col-md-8">
														<input type="text" name="dcmtfg"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="选择开子账户关联凭证标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">子户支付条件选项值</label>
													<div class="col-md-8">
														<input type="text" name="sactcn"
															class="form-control input-inline input-medium form-value"
															maxlength="80" placeholder="子户支付条件选项值">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">账户下唯一标识</label>
													<div class="col-md-8">
														<input type="text" name="acolfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择账户下唯一标识">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">开子户关联凭证种类</label>
													<div class="col-md-8">
														<input type="text" name="dcmttp"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择开子户关联凭证种类">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">交易凭证选项值</label>
													<div class="col-md-8">
														<input type="text" name="dcmtcn"
															class="form-control input-inline input-medium form-value"
															maxlength="80" placeholder="交易凭证选项值">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_actp">
												<thead>
													<tr role="row" class="heading">
														<th width="10%">产品编号</th>
														<th width="10%">客户账号类型</th>
														<th width="10%">开子账户关联凭证标志</th>
														<th width="10%">子户支付条件选项值</th>
														<th width="10%">账户下唯一标识</th>
														<th width="10%">开子户关联凭证种类</th>
														<th width="10%">交易凭证选项值</th>
														<th width="10%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_4">
									<form class="form-horizontal" role="form" id="kupdppbcust"
										name="kupdppbcust">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>

											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">到期日确定方式</label>
													<div class="col-md-9">
														<input type="text" name="madtby"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择到期日确定方式">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">客户下唯一标志</label>
													<div class="col-md-9">
														<input type="text" name="onlyfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择客户下唯一标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">起存金额</label>
													<div class="col-md-9">
														<input type="text" name="srdpam"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="起存金额">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_cust">
												<thead>
													<tr role="row" class="heading">
														<th width="10%">产品编号</th>
														<th width="10%">币种</th>
														<th width="10%">到期日确定方式</th>
														<th width="10%">客户下唯一标志</th>
														<th width="10%">起存金额</th>
														<th width="10%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_5">
									<form class="form-horizontal" role="form" id="kupdppbterm"
										name="kupdppbterm">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">存期</label>
													<div class="col-md-9">
														<input type="text" name="depttm"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择存期">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">存期天数</label>
													<div class="col-md-9">
														<input type="text" name="deptdy" readOnly
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="输入存期天数">
													</div>
												</div>
											</div>
											<div class="col-md-5">
											<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_term">
												<thead>
													<tr role="row" class="heading">
														<th width="10%">产品编号</th>
														<th width="10%">存期</th>
														<th width="10%">币种</th>
														<th width="10%">存期天数</th>
														<th width="10%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_6">
									<form class="form-horizontal" role="form" id="kupdppbmatu"
										name="kupdppbmatu">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">遇节假日处理方式</label>
													<div class="col-md-9">
														<input type="text" name="festdl"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择遇节假日处理方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">允许转存标志</label>
													<div class="col-md-9">
														<input type="text" name="trdpfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择允许转存标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">转存产品</label>
													<div class="col-md-9">
														<input type="text" name="trprod"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="转存产品">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">到期宽限期</label>
													<div class="col-md-9">
														<input type="text" name="matupd"
															class="form-control input-inline input-medium form-value"
															maxlength="6" placeholder="选择到期宽限期">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">是否根据存款顺延到期日</label>
													<div class="col-md-9">
														<input type="text" name="delyfg"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择到期宽限期">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">可以更换转存产品号</label>
													<div class="col-md-9">
														<input type="text" name="trpdfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="是否可以更换转存产品号">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">转存利率调整方式</label>
													<div class="col-md-9">
														<input type="text" name="trinwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择转存利率调整方式">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_matu">
												<thead>
													<tr role="row" class="heading">
														<th width="8%">产品编号</th>
														<th width="8%">币种</th>
														<th width="8%">遇节假日处理方式</th>
														<th width="8%">是否根据存款顺延到期日</th>
														<th width="8%">到期宽限期</th>
														<th width="8%">允许转存标志</th>
														<th width="8%">可以更换转存产品号</th>
														<th width="8%">转存产品</th>
														<th width="8%">转存利率调整方式</th>
														<th width="8%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_7">
									<form class="form-horizontal" role="form" id="kupdppbpost" name="kupdppbpost">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入控制方式</label>
													<div class="col-md-8">
														<input type="text" name="posttp"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择存入控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入控制方法</label>
													<div class="col-md-8">
														<input type="text" name="postwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择存入控制方法">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入金额控制方式</label>
													<div class="col-md-8">
														<input type="text" name="amntwy"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="选择存入金额控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">是否明细汇总</label>
													<div class="col-md-8">
														<input type="text" name="detlfg"
															class="form-control input-inline input-medium form-value"
															maxlength="10" placeholder="是否明细汇总">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">每人限购份数</label>
													<div class="col-md-8">
														<input type="text" name="svrule"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="输入每人限购份数"
															onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">单次存入最小金额</label>
													<div class="col-md-8">
														<input type="text" name="miniam"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="单次存入最小金额">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">单次存入最大金额</label>
													<div class="col-md-8">
														<input type="text" name="maxiam"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="单次存入最大金额">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入次数控制方式</label>
													<div class="col-md-8">
														<input type="text" name="timewy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入次数控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">最小存入次数</label>
													<div class="col-md-8">
														<input type="text" name="minitm"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="最小存入次数">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">最大存入次数</label>
													<div class="col-md-8">
														<input type="text" name="maxitm"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="最大存入次数">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover" id="table_post">
												<thead>
													<tr role="row" class="heading">
														<th width="7%">产品编号</th>
														<th width="7%">币种</th>
														<th width="7%">存入控制方式</th>
														<th width="7%">存入控制方法</th>
														<th width="7%">存入金额控制方式</th>
														<th width="7%">单次存入最小金额</th>
														<th width="7%">单次存入最大金额</th>
														<th width="7%">存入次数控制方式</th>
														<th width="7%">最小存入次数</th>
														<th width="7%">最大存入次数</th>
														<th width="7%">是否明细汇总</th>
														<th width="7%">每人限购份数</th>
														<th width="7%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_8">
									<form class="form-horizontal" role="form" id="kupdppbpostplan"
										name="kupdppbpostplan">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">币种</label>
													<div class="col-md-8">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">设置存入计划标志</label>
													<div class="col-md-8">
														<input type="text" name="planfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="设置存入计划标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入计划调整方式</label>
													<div class="col-md-8">
														<input type="text" name="planwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择存入计划调整方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入计划调整周期</label>
													<div class="col-md-8">
														<input type="text" name="adjtpd"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="存入计划调整周期">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入计划结束日期方式</label>
													<div class="col-md-8">
														<input type="text" name="endtwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入计划结束日期方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入计划生成方式</label>
													<div class="col-md-8">
														<input type="text" name="gentwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入计划生成方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">漏存补足宽限期</label>
													<div class="col-md-8">
														<input type="text" name="svlepd"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="漏存补足宽限期">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">存入漏补方式</label>
													<div class="col-md-8">
														<input type="text" name="svlewy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入漏补方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">最大补足次数</label>
													<div class="col-md-8">
														<input type="text" name="maxisp"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="最大补足次数">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入违约标准</label>
													<div class="col-md-8">
														<input type="text" name="dfltsd"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入违约标准">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">漏存次数</label>
													<div class="col-md-8">
														<input type="text" name="svletm"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="漏存次数">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入违约处理方式</label>
													<div class="col-md-8">
														<input type="text" name="dfltwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入违约处理方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">存入计划控制方式</label>
													<div class="col-md-8">
														<input type="text" name="pscrwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="存入计划控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">账户留存最大余额</label>
													<div class="col-md-8">
														<input type="text" name="maxibl"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="账户留存最大余额">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_postplan">
												<thead>
													<tr role="row" class="heading">
														<th width="6%">产品编号</th>
														<th width="6%">币种</th>
														<th width="6%">设置存入计划标志</th>
														<th width="6%">存入计划调整方式</th>
														<th width="6%">存入计划调整周期</th>
														<th width="6%">存入计划结束日期方式</th>
														<th width="6%">存入计划生成方式</th>
														<th width="6%">漏存补足宽限期</th>
														<th width="6%">存入漏补方式</th>
														<th width="6%">最大补足次数</th>
														<th width="6%">存入违约标准</th>
														<th width="6%">漏存次数</th>
														<th width="6%">存入违约处理方式</th>
														<th width="6%">存入计划控制方式</th>
														<th width="6%">账户留存最大余额</th>
														<th width="6%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_9">
									<form class="form-horizontal" role="form" id="kupdppbdraw"
										name="kupdppbdraw">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">币种</label>
													<div class="col-md-8">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取控制方式</label>
													<div class="col-md-8">
														<input type="text" name="drawtp"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取控制方法</label>
													<div class="col-md-8">
														<input type="text" name="ctrlwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取控制方法">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">自定义控制方式</label>
													<div class="col-md-8">
														<input type="text" name="selfwy"
															class="form-control input-inline input-medium form-value"
															maxlength="4" placeholder="选择自定义控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取预约方式</label>
													<div class="col-md-8">
														<input type="text" name="ordrwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取预约方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取金额控制方式</label>
													<div class="col-md-8">
														<input type="text" name="dramwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取金额控制方式">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">单次支取最小金额</label>
													<div class="col-md-8">
														<input type="text" name="drmiam"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="单次支取最小金额">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">单次支取最大金额</label>
													<div class="col-md-8">
														<input type="text" name="drmxam"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="单次支取最大金额">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取次数控制方式</label>
													<div class="col-md-8">
														<input type="text" name="drtmwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取次数控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">最小支取次数</label>
													<div class="col-md-8">
														<input type="text" name="drmitm"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="最小支取次数">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">最大支取次数</label>
													<div class="col-md-8">
														<input type="text" name="drmxtm"
															class="form-control input-inline input-medium form-value"
															maxlength="19" placeholder="最大支取次数">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取规则</label>
													<div class="col-md-8">
														<input type="text" name="drrule"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="支取规则">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body table-container col-md-12">
											<table class="table table-striped table-bordered table-hover"
												id="table_draw">
												<thead>
													<tr role="row" class="heading">
														<th width="6%">产品编号</th>
														<th width="6%">币种</th>
														<th width="6%">支取控制方式</th>
														<th width="6%">支取控制方法</th>
														<th width="6%">自定义控制方式</th>
														<th width="6%">支取预约方式</th>
														<th width="6%">支取金额控制方式</th>
														<th width="6%">单次支取最小金额</th>
														<th width="6%">单次支取最大金额</th>
														<th width="6%">支取次数控制方式</th>
														<th width="6%">最小支取次数</th>
														<th width="6%">最大支取次数</th>
														<th width="6%">支取规则</th>
														<th width="6%">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_10">
									<form class="form-horizontal" role="form" id="kupdppbdfintr"
										name="kupdppbdfintr">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-4">
												<div class="form-group">
													<label class="col-md-4 control-label">币种</label>
													<div class="col-md-8">
														<input type="text" name="crcycd"
															class="form-control input-inline input-samll form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取利息类型</label>
													<div class="col-md-8">
														<input type="text" name="drintp"
															class="form-control input-inline input-samll form-value"
															maxlength="2" placeholder="选择支取利息类型">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">利息组代码</label>
													<div class="col-md-8">
														<input type="text" name="ingpcd"
															class="form-control input-inline input-samll form-value"
															maxlength="8" placeholder="利息组代码">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">利息类型</label>
													<div class="col-md-8">
														<input type="text" name="intrtp"
															class="form-control input-inline input-samll form-value"
															maxlength="8" placeholder="利息类型">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">利息支付方法说明</label>
													<div class="col-md-8">
														<input type="text" name="drintx"
															class="form-control input-inline input-samll form-value"
															maxlength="200" placeholder="利息支付方法说明">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">利息调整类型</label>
													<div class="col-md-8">
														<input type="text" name="inadtp"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="利息调整类型">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">同时段多组利息调整选项</label>
													<div class="col-md-8">
														<input type="text" name="sminad"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="同时段多组利息调整选项">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">被调整利率编号</label>
													<div class="col-md-8">
														<input type="text" name="adincd"
															class="form-control input-inline input-samll form-value"
															maxlength="20" placeholder="被调整利率编号">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">利率确定方式</label>
													<div class="col-md-8">
														<input type="text" name="insrwy"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="利率确定方式">
													</div>
												</div>

											</div>
											<div class="col-md-4">
												<div class="form-group">
													<label class="col-md-4 control-label">利率靠挡标志</label>
													<div class="col-md-8">
														<input type="text" name="inclfg"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="利率靠挡标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">基准结息金额来源</label>
													<div class="col-md-8">
														<input type="text" name="bsinam"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="基准结息金额来源">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">基准结息起始日来源</label>
													<div class="col-md-8">
														<input type="text" name="bsindt"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="基准结息起始日来源">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">结息终止日来源</label>
													<div class="col-md-8">
														<input type="text" name="inedsc"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="结息终止日来源">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">基准结息利率编号</label>
													<div class="col-md-8">
														<input type="text" name="bsincd"
															class="form-control input-inline input-samll form-value"
															maxlength="20" placeholder="基准结息利率编号">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">基准计息规则</label>
													<div class="col-md-8">
														<input type="text" name="bsinrl"
															class="form-control input-inline input-samll form-value"
															maxlength="2" placeholder="基准计息规则">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">基准利率生效日选项</label>
													<div class="col-md-8">
														<input type="text" name="bsinef"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="基准利率生效日选项">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">日期分层日来源</label>
													<div class="col-md-8">
														<input type="text" name="dtlvsr"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="日期分层日来源">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">日期分层利率编号</label>
													<div class="col-md-8">
														<input type="text" name="dtsrcd"
															class="form-control input-inline input-samll form-value"
															maxlength="20" placeholder="日期分层利率编号">
													</div>
												</div>
											</div>
											<div class="col-md-4">

												<div class="form-group">
													<label class="col-md-4 control-label">日期分层计息规则</label>
													<div class="col-md-8">
														<input type="text" name="dtlvrl"
															class="form-control input-inline input-samll form-value"
															maxlength="20" placeholder="日期分层计息规则">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">日期分层利率生效日选项</label>
													<div class="col-md-8">
														<input type="text" name="dtlvef"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="日期分层利率生效日选项">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">金额分层来源</label>
													<div class="col-md-8">
														<input type="text" name="amlvsr"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="金额分层来源">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">金额分层利率编号</label>
													<div class="col-md-8">
														<input type="text" name="amlvcd"
															class="form-control input-inline input-samll form-value"
															maxlength="20" placeholder="金额分层利率编号">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">金额分层计息规则</label>
													<div class="col-md-8">
														<input type="text" name="amlvrl"
															class="form-control input-inline input-samll form-value"
															maxlength="2" placeholder="金额分层计息规则">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">金额分层利率生效日选项</label>
													<div class="col-md-8">
														<input type="text" name="amlvef"
															class="form-control input-inline input-samll form-value"
															maxlength="2" placeholder="金额分层利率生效日选项">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取利息范围</label>
													<div class="col-md-8">
														<input type="text" name="drinsc"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="支取利息范围">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取是否扣除已付利息</label>
													<div class="col-md-8">
														<input type="text" name="drdein"
															class="form-control input-inline input-samll form-value"
															maxlength="1" placeholder="支取是否扣除已付利息">
													</div>
												</div>
											</div>
										</div>
										<div class="form-actions">
											<div class="row">
												<div class="col-md-9">
													<div class="row">
														<div class="col-md-offset-3 col-md-9">
															<button type="button" class="btn blue add_row_btn">增加一条</button>
														</div>
													</div>
												</div>
												<div class="col-md-3"></div>
											</div>
										</div>
										<div class="form-body  col-md-12 table-scrollable">
											<table class="table table-striped table-bordered table-hover"
												id="table_dfintr">
												<thead>
													<tr role="row" class="heading">
														<th scope="col">产品编号</th>
														<th scope="col">币种</th>
														<th scope="col">支取利息类型</th>
														<th scope="col">利息组代码</th>
														<th scope="col">利息类型</th>
														<th scope="col">利息支付方法说明</th>
														<th scope="col">利息调整类型</th>
														<th scope="col">同时段多组利息调整选项</th>
														<th scope="col">被调整利率编号</th>
														<th scope="col">利率确定方式</th>
														<th scope="col">利率靠挡标志</th>
														<th scope="col">基准结息金额来源</th>
														<th scope="col">基准结息起始日来源</th>
														<th scope="col">结息终止日来源</th>
														<th scope="col">基准结息利率编号</th>
														<th scope="col">基准计息规则</th>
														<th scope="col">基准利率生效日选项</th>
														<th scope="col">日期分层日来源</th>
														<th scope="col">日期分层利率编号</th>
														<th scope="col">日期分层计息规则</th>
														<th scope="col">日期分层利率生效日选项</th>
														<th scope="col">金额分层来源</th>
														<th scope="col">金额分层利率编号</th>
														<th scope="col">金额分层计息规则</th>
														<th scope="col">金额分层利率生效日选项</th>
														<th scope="col">支取利息范围</th>
														<th scope="col">支取是否扣除已付利息</th>
														<th scope="col">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>

								<div class="tab-pane tab_11">
									<form class="form-horizontal" role="form" id="kupdppbdrawplan"
										name="kupdppbdrawplan">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">币种</label>
													<div class="col-md-8">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">是否设置支取计划</label>
													<div class="col-md-8">
														<input type="text" name="setpwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择是否设置支取计划">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取计划调整周期方式</label>
													<div class="col-md-8">
														<input type="text" name="termwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择支取计划调整周期方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取计划调整周期</label>
													<div class="col-md-8">
														<input type="text" name="dradpd"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="支取计划调整周期">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取计划结束日期方式</label>
													<div class="col-md-8">
														<input type="text" name="dredwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="支取计划结束日期方式">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-4 control-label">支取计划控制方式</label>
													<div class="col-md-8">
														<input type="text" name="drcrwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="支取计划控制方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取违约标准</label>
													<div class="col-md-8">
														<input type="text" name="drdfsd"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="支取违约标准">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取违约处理方式</label>
													<div class="col-md-8">
														<input type="text" name="drdfwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="支取违约处理方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">账户留存最小余额</label>
													<div class="col-md-8">
														<input type="text" name="minibl"
															class="form-control input-inline input-medium form-value"
															maxlength="21" placeholder="账户留存最小余额">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-4 control-label">支取时结息处理标志</label>
													<div class="col-md-8">
														<input type="text" name="beinfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder=支取时结息处理标志>
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body  col-md-12 table-scrollable">
											<table class="table table-striped table-bordered table-hover"
												id="table_drawplan">
												<thead>
													<tr role="row" class="heading">
														<th scope="col">产品编号</th>
														<th scope="col">币种</th>
														<th scope="col">是否设置支取计划</th>
														<th scope="col">支取计划调整周期方式</th>
														<th scope="col">支取计划调整周期</th>
														<th scope="col">支取计划结束日期方式</th>
														<th scope="col">支取计划控制方式</th>
														<th scope="col">支取违约标准</th>
														<th scope="col">支取违约处理方式</th>
														<th scope="col">账户留存最小余额</th>
														<th scope="col">支取时结息处理标志</th>
														<th scope="col">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_12">
									<form class="form-horizontal" role="form" id="kupdppbintr"
										name="kupdppbintr">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">币种</label>
													<div class="col-md-9">
														<input type="text" name="crcycd"
															class="form-control input-inline input-medium form-value"
															maxlength="3" placeholder="选择币种">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利息类型</label>
													<div class="col-md-9">
														<input type="text" name="intrtp"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="选择利息类型">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">计息标志</label>
													<div class="col-md-9">
														<input type="text" name="inbefg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择计息标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">计税标志</label>
													<div class="col-md-9">
														<input type="text" name="txbefg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择计税标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">计息基础</label>
													<div class="col-md-9">
														<input type="text" name="txbebs"
															class="form-control input-inline input-medium form-value"
															maxlength="2" placeholder="选择计息基础">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">舍弃角分计息标志</label>
													<div class="col-md-9">
														<input type="text" name="hutxfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="选择舍弃角分计息标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">结息频率</label>
													<div class="col-md-9">
														<input type="text" name="txbefr"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="结息频率">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利率编号</label>
													<div class="col-md-9">
														<input type="text" name="intrcd"
															class="form-control input-inline input-medium form-value"
															maxlength="20" placeholder="利率编号">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利率靠档方式</label>
													<div class="col-md-9">
														<input type="text" name="intrwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="利率靠档方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利率代码类型</label>
													<div class="col-md-9">
														<input type="text" name="incdtp"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="利率代码类型">
													</div>
												</div>

											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">分层计息方式</label>
													<div class="col-md-9">
														<input type="text" name="lyinwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="分层计息方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">计息金额模式</label>
													<div class="col-md-9">
														<input type="text" name="inammd"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="计息金额模式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">平均余额天数计算方式</label>
													<div class="col-md-9">
														<input type="text" name="bldyca"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="平均余额天数计算方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利率重定价方式</label>
													<div class="col-md-9">
														<input type="text" name="inprwy"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="利率重定价方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">利率调整频率</label>
													<div class="col-md-9">
														<input type="text" name="inadlv"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="利率调整频率">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">重订价利息处理方式</label>
													<div class="col-md-9">
														<input type="text" name="reprwy"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="重订价利息处理方式">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">优惠变化调整优惠标志</label>
													<div class="col-md-9">
														<input type="text" name="fvrbfg"
															class="form-control input-inline input-medium form-value"
															maxlength="1" placeholder="优惠变化调整优惠标志">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">优惠调整频率</label>
													<div class="col-md-9">
														<input type="text" name="fvrblv"
															class="form-control input-inline input-medium form-value"
															maxlength="8" placeholder="优惠调整频率">
													</div>
												</div>
												<div class="form-group">
													<label class="col-md-3 control-label">税率编号</label>
													<div class="col-md-9">
														<input type="text" name="taxecd"
															class="form-control input-inline input-medium form-value"
															maxlength="20" placeholder="税率编号">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body  col-md-12 table-scrollable">
											<table class="table table-striped table-bordered table-hover"
												id="table_intr">
												<thead>
													<tr role="row" class="heading">
														<th scope="col">产品编号</th>
														<th scope="col">币种</th>
														<th scope="col">利息类型</th>
														<th scope="col">计息标志</th>
														<th scope="col">计税标志</th>
														<th scope="col">计息基础</th>
														<th scope="col">舍弃角分计息标志</th>
														<th scope="col">结息频率</th>
														<th scope="col">利率编号</th>
														<th scope="col">利率靠档方式</th>
														<th scope="col">利率代码类型</th>
														<th scope="col">分层计息方式</th>
														<th scope="col">计息金额模式</th>
														<th scope="col">平均余额天数计算方式</th>
														<th scope="col">利率重定价方式</th>
														<th scope="col">利率调整频率</th>
														<th scope="col">重订价利息处理方式</th>
														<th scope="col">优惠变化调整优惠标志</th>
														<th scope="col">优惠调整频率</th>
														<th scope="col">税率编号</th>
														<th scope="col">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="tab-pane tab_13">
									<form class="form-horizontal" role="form" id="kupdppbacct"
										name="kupdppbacct">
										<div class="form-body">
											<input type="hidden" name="prodcd"
												class='form-value prodcd-value'>
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												表单提交成功！
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">存期</label>
													<div class="col-md-9">
														<input type="text" name="depttm"
															class="form-control input-inline input-medium form-value"
															maxlength="6" placeholder="选择存期">
													</div>
												</div>
											</div>
											<div class="col-md-5">
												<div class="form-group">
													<label class="col-md-3 control-label">核算代码</label>
													<div class="col-md-9">
														<input type="text" name="acctcd"
															class="form-control input-inline input-medium form-value"
															maxlength="20" placeholder="核算代码">
													</div>
												</div>
											</div>
											<div class="col-md-2">
												<button type="button" class="btn blue add_row_btn">增加一条</button>
											</div>
										</div>
										<div class="form-body  col-md-12 table-scrollable">
											<table class="table table-striped table-bordered table-hover"
												id="table_acct">
												<thead>
													<tr role="row" class="heading">
														<th scope="col">产品编号</th>
														<th scope="col">存期</th>
														<th scope="col">核算代码</th>
														<th scope="col">操作</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</form>
								</div>
								<div class="modal-footer col-md-12">
									<ul class="pager tabbable">
										<li><a href="#" id="tab_last">上一步</a></li>
										<li><a href="#" id="tab_next">下一步</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- add mode end-->

			<!-- edit mode start -->
			<div id="bianji" class="modal  modal-scroll out" tabindex="-1"
				data-keyboard="false" data-width="1280">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">存款产品信息</h4>
					<div class=" col-md-12"></div>
				</div>
				<div class="modal-body" id="edit_load">
					<jsp:include page="/WEB-INF/jsp/prod/kupdppbedit.jsp"></jsp:include>
				</div>
				<div class="modal-footer col-md-12"></div>
			</div>
			<!-- edit mode end -->
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script src="${ctx}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppb.js"></script>
<script src="${ctx}/pages/prod/scripts/kupdppbadd.js"></script>
<script>
	jQuery(document).ready(function() {
		// 时间插件
		$('.date-picker',$("#editModal")).datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
		kupdppb.init();
		kupdppbadd.init();
	});
</script>
