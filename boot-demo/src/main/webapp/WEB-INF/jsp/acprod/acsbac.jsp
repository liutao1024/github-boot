<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">红包积分子户属性定义列表</span>
				<span class="caption-helper">红包积分子户属性定义表配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_sbc_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_scap">
					<thead>
						<tr role="row" class="heading">
						<th scope="col">产品号</th>
						<th scope="col">是否产生子户</th>
						<th scope="col">部分支取许可标志</th>
						<th scope="col">失效控制</th>
						<th scope="col">失效日期</th>
						<th scope="col">失效周期数量</th>
						<th scope="col">兑换比例</th>
						<th scope="col">存入金额控制方式</th>
						<th scope="col">单次存入最小金额</th>
						<th scope="col">单次存入最大金额</th>
						<th scope="col">存入次数控制方式</th>
						<th scope="col">最小存入次数</th>
						<th scope="col">最大存入次数</th>
						<th scope="col">支取金额控制方式</th>
						<th scope="col">单次支取最小金额</th>
						<th scope="col">单次支取最大金额</th>
						<th scope="col">支取次数控制方式</th>
						<th scope="col">最小支取次数</th>
						<th scope="col">最大支取次数</th>
						<th scope="col">支取规则</th>
						<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editsSbcModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1200">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">红包积分子户属性定义</h4>
				</div>
				<div class="modal-body">
					<div style="height: 510px;">
						<div class="row">
							<div class="col-md-12">
								<form class="form-horizontal" role="form" id="addSbcForm">
									<div class="form-body">
										<div class="alert alert-danger display-hide">
											<button class="close" data-close="alert"></button>
											输入有误，请检查下面表单！<span class="msg"></span>
										</div>
										<div class="alert alert-success display-hide">
											<button class="close" data-close="alert"></button>
											表单提交成功！<span class="msg"></span>
										</div>
										<!--  start-->
				<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label">产品编号</label>
								<div class="col-md-9">
										<input type="text"   name="prodcd"
											class="form-control input-inline input-medium form-value"
											maxlength="10"  placeholder="输入产品编号">
								</div>
							</div>
						<div class="form-group">
								<label class="col-md-3 control-label">是否产生子户</label>
								<div class="col-md-9">
									<input type="text" name="subafg"
										class="form-control input-inline input-medium form-value"
										maxlength="80" placeholder="输选择是否产生子户">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">部分支取许可标志</label>
								<div class="col-md-9">
									<input type="text" name="ptdwfg"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请选择部分支取许可标志">
								</div>
							</div>
						<div class="form-group">
							<label class="col-md-3 control-label">失效控制</label>
							<div class="col-md-9">
								<input type="text" name="infetp"
									class="form-control input-inline input-medium form-value"
									maxlength="2" placeholder="请选择失效控制">
							</div>
						</div>
						<div class="form-group">
								<label class="col-md-3 control-label">支取金额控制方式</label>
								<div class="col-md-9">
									<input type="text" name="dramwy"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请选择支取金额控制方式">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">单次支取最小金额</label>
								<div class="col-md-9">
									<input type="text" name="drmiam"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入单次支取最小金额">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-md-3 control-label">单次支取最大金额</label>
								<div class="col-md-9">
									<input type="text" name="drmxam"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入单次支取最大金额">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-md-3 control-label">支取次数控制方式</label>
								<div class="col-md-9">
									<input type="text" name="drtmwy"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请选择支取次数控制方式">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-md-3 control-label">最小支取次数</label>
								<div class="col-md-9">
									<input type="text" name="drmitm"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入最小支取次数">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-md-3 control-label">最大支取次数</label>
								<div class="col-md-9">
									<input type="text" name="drmxtm"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入最大支取次数">
								</div>
							</div>
					</div>
				   <div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label">失效日期</label>
								<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyy" data-date-viewmode="years" data-date-minviewmode="months">
									<input type="text" id="infedt" name="infedt" class="form-control input-inline input-medium" maxlength="4" placeholder="请选择失效日期">
												<span class="input-group-btn">
												<button class="btn default"   type="button"><i class="fa fa-calendar"></i></button>
												</span>
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">失效周期数量</label>
								<div class="col-md-9">
									<input type="text" name="infnum"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请输入失效周期数量">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">兑换比例</label>
								<div class="col-md-9">
									<input type="text" name="spinrt"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入兑换比例">
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">存入金额控制方式</label>
								<div class="col-md-9">
									<input type="text" name="amntwy"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请选择存入金额控制方式">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">单次存入最小金额</label>
								<div class="col-md-9">
									<input type="text" name="miniam"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输单次存入最小金额">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-md-3 control-label">单次存入最大金额</label>
								<div class="col-md-9">
									<input type="text" name="maxiam"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入单次存入最大金额">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">存入次数控制方式</label>
								<div class="col-md-9">
									<input type="text" name="timewy"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请选择存入次数控制方式">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">最小存入次数</label>
								<div class="col-md-9">
									<input type="text" name="minitm"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入最小存入次数">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">最大存入次数</label>
								<div class="col-md-9">
									<input type="text" name="maxitm"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入最大存入次数">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">支取规则 </label>
								<div class="col-md-9">
									<input type="text" name="drrule"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入支取规则">
								</div>
							</div>
						</div>
											
				  <!--  end -->
							
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_sbc">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/acprod/scripts/acsbac.js"></script>
<script>
	$(document).ready(function() {
		jQuery(document).ready(function() {
			acsbac.init();
		});
	});
</script>