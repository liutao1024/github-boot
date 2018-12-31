<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费套餐信息定义表</span>
			<span class="caption-helper">收费套餐信息定义表配置...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_prcs_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_prcs" style="white-space: nowrap;">
				<thead>
					<tr role="row" class="heading" >
						<th scope="col">费用套餐代码</th>
						<th scope="col">费用套餐币种</th>
						<th scope="col">费用套餐名称</th>
						<th scope="col">套餐费用金额</th>
						<th scope="col">费用套餐扣收方式</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col">收费累计类型</th>
						<th scope="col">累计笔数</th>
						<th scope="col">累计金额</th>
						<th scope="col">周期单位</th>
						<th scope="col">周期数</th>
						<th scope="col">优惠策略</th>
						<th scope="col">套餐优惠类型</th>
						<th scope="col">优惠比例</th>
						<th scope="col">优惠笔数</th>
						<th scope="col">说明</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
					<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_packcd" name="q_packcd" />
							</td>
							<td>
							</td>
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_packna" name="q_packna" /> 
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
		<div id="editprcsModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280" style="white-space: nowrap;">
			<div >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费套餐信息定义表属性</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
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
											<label class="col-md-3 control-label">套餐编号</label>
											<div class="col-md-6">
												<input type="text" name="packcd"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐编号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">套餐币种</label>
											<div class="col-md-6">
												<input type="text" name="pkcrcy"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐币种">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">套餐名称</label>
											<div class="col-md-6">
												<input type="text" name="packna"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">套餐费用金额</label>
											<div class="col-md-6">
												<input type="text" name="packam"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐费用金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">套餐扣费方式</label>
											<div class="col-md-6">
												<input type="text" name="pkdetp"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐扣费方式">
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-md-3">生效日期</label>
											<div class="input-group col-md-6 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<input type="text"  class="form-control input-inline input-medium form-value" name="efctdt">
												<span class="input-group-btn">
												<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
												</span>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-md-3">失效日期</label>
											<div class="input-group col-md-6 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<input type="text"  class="form-control input-inline input-medium form-value" name="inefdt">
												<span class="input-group-btn">
												<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
												</span>
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-3 control-label">收费累计类型</label>
											<div class="col-md-6">
												<input type="text" name="cgsmtp"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="收费累计类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">累计笔数</label>
											<div class="col-md-6">
												<input type="text" name="sumnum"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="累计笔数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">累计金额</label>
											<div class="col-md-6">
												<input type="text" name="sumamt"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="累计金额">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">周期单位</label>
											<div class="col-md-6">
												<input type="text" name="pdunit"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="周期单位">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">周期数</label>
											<div class="col-md-6">
												<input type="text" name="prdnum"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="周期数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">优惠策略</label>
											<div class="col-md-6">
												<input type="text" name="favotp"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="优惠策略">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">套餐优惠类型</label>
											<div class="col-md-6">
												<input type="text" name="pkfatp"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="套餐优惠类型">
											</div>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-3 control-label">优惠比例</label>
											<div class="col-md-6">
												<input type="text" name="favpec"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="优惠比例">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">优惠笔数</label>
											<div class="col-md-6">
												<input type="text" name="favnum"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="优惠笔数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">说明</label>
											<div class="col-md-6">
												<input type="text" name="explan"
													class="form-control input-inline input-medium form-value"
													maxlength="10" placeholder="说明">
												<input type="hidden" name="action"/>
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
					<button type="button" class="btn blue" id="btn_save_prcs">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcp/scripts/kcppackdefi.js"></script>
<script>
	jQuery(document).ready(function() {
		kcppackdefi.init();
	});
</script>