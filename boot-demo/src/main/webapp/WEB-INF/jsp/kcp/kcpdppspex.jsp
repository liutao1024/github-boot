<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">简单优惠信息表</span>
			<span class="caption-helper">管理简单优惠信息表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_dime_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_dime">
				<thead>
					<tr role="row" class="heading">
						<th scope="col" width="10%">收费代码</th>
						<th scope="col">分行代码</th>
						<th scope="col">机构号</th>						
                        <th scope="col" width="8%" >币种</th>
                        <th scope="col" width="5%">费用优惠起点类型</th>
                        <th scope="col">费用优惠起点</th>
                        <th scope="col">简单优惠类型</th>
                        <th scope="col">优惠值</th>
                        <th scope="col">优惠利率</th>
                        <th scope="col">生效日期</th>
                        <th scope="col">失效日期</th>
                        <th scope="col" width="14%" colspan="2">操作</th> 
					</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_chrgcd" name="q_chrgcd" />
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
		<div id="editdimeModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1100">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">简单优惠信息参数表属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
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
											<label class="col-md-4 control-label">收费代码</label>
										<div class="col-md-4">
												<input type="text" name="chrgcd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费代码">
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
											<label class="col-md-4 control-label">币种</label>
											<div class="col-md-4">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													 placeholder="币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">费用优惠起点类型</label>
											<div class="col-md-4">
												<input type="text" name="fasttp"
													class="form-control input-inline input-medium form-value"
													 placeholder="费用优惠起点类型">
											</div>
										</div> 
									</div>								
									<div class="col-md-6">	
										 <div class="form-group">
											<label class="col-md-4 control-label">费用优惠起点</label>
											<div class="col-md-4">
												<input type="text" name="fastam"
													class="form-control input-inline input-medium form-value"
													 placeholder="费用优惠起点">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">简单优惠类型</label>
											<div class="col-md-4">
												<input type="text" name="fatype"
													class="form-control input-inline input-medium form-value"
													 placeholder="简单优惠类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">优惠值</label>
											<div class="col-md-4">
												<input type="text" name="favalu"
													class="form-control input-inline input-medium form-value"
													 placeholder="优惠值">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-4 control-label">优惠利率</label>
											<div class="col-md-4">
												<input type="text" name="favoir"
													class="form-control input-inline input-medium form-value"
													 placeholder="优惠利率">
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
										<div class="form-group" hidden="true">
											<label class="col-md-4 control-label">是否新增</label>
											<div class="col-md-4">
												<input type="text" name="isinst"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="是否新增">
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
					<button type="button" class="btn blue" id="btn_save_dime">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcp/scripts/kcpdppspex.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpspex.init();
	});
</script>