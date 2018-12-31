<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">客户套餐签约表</span>
			<span class="caption-helper">管理客户套餐签约属性配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_chrg_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_chrg">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">客户号</th>
						<th scope="col">货币代号</th>
						<th scope="col">钞汇标志</th>
						<th scope="col">客户账号</th>
						<th scope="col">费用套餐代码</th>
						<th scope="col">套餐扣费账号</th>
						<th scope="col">收费累计类型</th>
						<th scope="col">签约类别</th>
						<th scope="col">签约日期</th>
						<th scope="col">签约期数</th>
						<th scope="col">周期单位</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col">是否自动续签</th>
						<th scope="col">自动续签次数</th>
						<th scope="col">当前累计期首日</th>
						<th scope="col">当前累计期末日</th>
						<th scope="col">签约机构</th>
						<th scope="col">当前累计金额</th>
						<th scope="col">当前累计笔数</th>
						<th scope="col">说明</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
			<div style="width: 1200px; height: 750px;">
		<div id="editchrgModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1300">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">客户套餐签约属性</h4>
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
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-4 control-label">客户号</label>
											<div class="col-md-4">
												<input type="text" name="custno"
													class="form-control input-inline input-medium form-value"
													 placeholder="客户号">
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
											<label class="col-md-4 control-label">钞汇标志</label>
											<div class="col-md-4">
												<input type="text" name="csexfg"
													class="form-control input-inline input-medium form-value"
													 placeholder="钞汇标志">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">客户账号</label>
											<div class="col-md-4">
												<input type="text" name="custac"
													class="form-control input-inline input-medium form-value"
													 placeholder="客户账号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">费用套餐代码</label>
											<div class="col-md-4">
												<input type="text" name="packcd"
													class="form-control input-inline input-medium form-value"
													 placeholder="费用套餐代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">套餐扣费账号</label>
											<div class="col-md-4">
												<input type="text" name="pkdeac"
													class="form-control input-inline input-medium form-value"
													 placeholder="套餐扣费账号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">收费累计类型</label>
											<div class="col-md-4">
												<input type="text" name="cgsmtp"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费累计类型">
											</div>
										</div>
									</div>
									
									
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-4 control-label">签约类别</label>
											<div class="col-md-4">
												<input type="text" name="signtp"
													class="form-control input-inline input-medium form-value"
													 placeholder="签约类别">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">签约日期</label>
											<div class="col-md-4">
												<input type="text" name="signdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="签约日期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">签约期数</label>
											<div class="col-md-4">
												<input type="text" name="signpd"
													class="form-control input-inline input-medium form-value"
													 placeholder="签约期数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">周期单位</label>
											<div class="col-md-4">
												<input type="text" name="pdunit"
													class="form-control input-inline input-medium form-value"
													 placeholder="周期单位">
											</div>
										</div>
										<div class="form-group">
													<label class="col-md-4 control-label">生效日期</label>
													<div class="col-md-4">
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
													<label class="col-md-4 control-label">失效日期</label>
													<div class="col-md-4">
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
											<label class="col-md-4 control-label">是否自动续签</label>
											<div class="col-md-4">
												<input type="text" name="isatsn"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否自动续签">
											</div>
										</div>
									</div>
									
									
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-4 control-label">自动续签次数</label>
											<div class="col-md-4">
												<input type="text" name="atsnnm"
													class="form-control input-inline input-medium form-value"
													 placeholder="自动续签次数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">当前累计期首日</label>
											<div class="col-md-4">
												<input type="text" name="crbgdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="当前累计期首日">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">当前累计期末日</label>
											<div class="col-md-4">
												<input type="text" name="creddt"
													class="form-control input-inline input-medium form-value"
													 placeholder="当前累计期末日">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">签约机构</label>
											<div class="col-md-4">
												<input type="text" name="signbr"
													class="form-control input-inline input-medium form-value"
													 placeholder="签约机构">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">当前累计金额</label>
											<div class="col-md-4">
												<input type="text" name="crsmam"
													class="form-control input-inline input-medium form-value"
													 placeholder="当前累计金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">当前累计笔数</label>
											<div class="col-md-4">
												<input type="text" name="crsmnm"
													class="form-control input-inline input-medium form-value"
													 placeholder="当前累计笔数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">说明</label>
											<div class="col-md-4">
												<input type="text" name="explan"
													class="form-control input-inline input-medium form-value"
													 placeholder="说明">
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
					<button type="button" class="btn blue" id="btn_save_chrg">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcp/scripts/kcppacksign.js"></script>
<script>
	jQuery(document).ready(function() {
		kcppacksign.init();
	});
</script>