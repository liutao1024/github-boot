<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">收费代码定义表</span>
			<span class="caption-helper">管理收费代码定义属性配置...</span>
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
						<th scope="col">收费代码</th>
						<th scope="col">收费代码名称</th>
						<th scope="col">币种兑换</th>
						<th scope="col">最低小数位数</th>
						<th scope="col">四舍五入方式</th>
						<th scope="col">计费金额来源</th>
						<th scope="col">分层方式</th>
						<th scope="col">收费分层取值类型</th>
						<th scope="col">收费核算业务编号</th>
						<th scope="col">收费挂账业务编号</th>
						<th scope="col">余额不足处理方式</th>
						<th scope="col">宽限期</th>
						<th scope="col">是否允许优惠</th>
						<th scope="col">最低优惠比例</th>
						<th scope="col">最高优惠比例</th>
						<th scope="col">收费分成标志</th>
						<th scope="col">场景代码</th>
						<th scope="col">收取方式</th>
						<th scope="col">收费金额来源</th>
						<th scope="col">收费周期</th>
						<th scope="col">损益入账控制</th>
						<th scope="col">费用收付标志</th>
						<th scope="col">货币代号</th>
						<th scope="col">账务机构</th>
						<th scope="col">滞纳金收费代码</th>
						<th scope="col">是否重复计算滞纳金</th>
						<th scope="col">生效日期</th>
						<th scope="col">失效日期</th>
						<th scope="col">欠费扣费周期</th>
						<th scope="col" colspan="2">操作</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editchrgModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1300">
			<div style="width: 1200px; height: 400px;">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">收费代码定义属性</h4>
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
											<label class="col-md-6 control-label">收费代码</label>
											<div class="col-md-6">
												<input type="text" name="chrgcd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费代码名称</label>
											<div class="col-md-6">
												<input type="text" name="chrgna"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费代码名称">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">币种兑换</label>
											<div class="col-md-6">
												<input type="text" name="cvcyfg"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择币种兑换">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">最低小数位数</label>
											<div class="col-md-6">
												<input type="text" name="mndecm"
													class="form-control input-inline input-medium form-value"
													 placeholder="最低小数位数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">四舍五入方式</label>
											<div class="col-md-6">
												<input type="text" name="carrtp"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择四舍五入方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">计费金额来源</label>
											<div class="col-md-6">
												<input type="text" name="cufesr"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择计费金额来源">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">分层方式</label>
											<div class="col-md-6">
												<input type="text" name="lysptp"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择分层方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费分层取值类型</label>
											<div class="col-md-6">
												<input type="text" name="felytp"
													class="form-control input-inline input-medium form-value"
													 placeholder="选择收费分层取值类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费核算业务编号</label>
											<div class="col-md-6">
												<input type="text" name="cgfacd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费核算业务编号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费挂账业务编号</label>
											<div class="col-md-6">
												<input type="text" name="cghacd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费挂账业务编号">
											</div>
										</div>
									</div>
									
									
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-6 control-label">余额不足处理方式</label>
											<div class="col-md-6">
												<input type="text" name="bllwtp"
													class="form-control input-inline input-medium form-value"
													 placeholder="余额不足处理方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">宽限期</label>
											<div class="col-md-6">
												<input type="text" name="cractm"
													class="form-control input-inline input-medium form-value"
													 placeholder="宽限期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">是否允许优惠</label>
											<div class="col-md-6">
												<input type="text" name="isfavo"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否允许优惠">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">最低优惠比例</label>
											<div class="col-md-6">
												<input type="text" name="mnfvrt"
													class="form-control input-inline input-medium form-value"
													 placeholder="最低优惠比例">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">最高优惠比例</label>
											<div class="col-md-6">
												<input type="text" name="mxfvrt"
													class="form-control input-inline input-medium form-value"
													 placeholder="最高优惠比例">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费分成标志</label>
											<div class="col-md-6">
												<input type="text" name="fedive"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费分成标志">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">场景代码</label>
											<div class="col-md-6">
												<input type="text" name="scencd"
													class="form-control input-inline input-medium form-value"
													 placeholder="场景代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收取方式</label>
											<div class="col-md-6">
												<input type="text" name="chrgtp"
													class="form-control input-inline input-medium form-value"
													 placeholder="收取方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费金额来源</label>
											<div class="col-md-6">
												<input type="text" name="chrgsr"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费金额来源">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">收费周期</label>
											<div class="col-md-6">
												<input type="text" name="chrgpd"
													class="form-control input-inline input-medium form-value"
													 placeholder="收费周期">
											</div>
										</div>
									</div>
									
									
									<div class="col-md-4">
										<div class="form-group">
											<label class="col-md-6 control-label">损益入账控制</label>
											<div class="col-md-6">
												<input type="text" name="plcgct"
													class="form-control input-inline input-medium form-value"
													 placeholder="损益入账控制">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">费用收付标志</label>
											<div class="col-md-6">
												<input type="text" name="cgpyrv"
													class="form-control input-inline input-medium form-value"
													 placeholder="费用收付标志">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">货币代号</label>
											<div class="col-md-6">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													 placeholder="货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">账务机构</label>
											<div class="col-md-6">
												<input type="text" name="brchno"
													class="form-control input-inline input-medium form-value"
													 placeholder="账务机构">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">滞纳金收费代码</label>
											<div class="col-md-6">
												<input type="text" name="fepecd"
													class="form-control input-inline input-medium form-value"
													 placeholder="滞纳金收费代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">是否重复计算滞纳金</label>
											<div class="col-md-6">
												<input type="text" name="fepefg"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否重复计算滞纳金">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">生效日期</label>
											<div class="col-md-6">
												<input type="text" name="efctdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="生效日期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">失效日期</label>
											<div class="col-md-6">
												<input type="text" name="inefdt"
													class="form-control input-inline input-medium form-value"
													 placeholder="失效日期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">欠费扣费周期</label>
											<div class="col-md-6">
												<input type="text" name="debkpd"
													class="form-control input-inline input-medium form-value"
													 placeholder="欠费扣费周期">
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
<script src="${ctx}/pages/kcp/scripts/kcpchrg.js"></script>
<script>
	jQuery(document).ready(function() {
		kcpchrg.init();
	});
</script>