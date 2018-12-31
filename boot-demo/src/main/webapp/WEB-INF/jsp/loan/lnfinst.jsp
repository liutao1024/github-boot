<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品计息属性表</span>
				<span class="caption-helper">管理贷款产品计息属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_inst_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_inst">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">最高利率</th>
							<th scope="col">最低利率</th>
							<th scope="col">最高上浮</th>
							<th scope="col">最低下浮</th>
							<th scope="col">利率类型</th>
							<th scope="col">利率期限</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editinstModal" class="modal fade modal-scroll" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1200px"
				style="height: 610px;" style="overflow:auto;">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品计息属性表</h4>
				</div>
				<div class="modal-body">
					<div style="height: 1310px;">
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
												<label class="col-md-6 control-label">产品代码</label>
												<div class="col-md-6">
													<input type="text" name="prodcd" readOnly
														class="form-control input-inline input-small"
														placeholder="输入产品代码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">货币代号</label>
												<div class="col-md-6">
													<input type="text" name="crcycd"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择货币代号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最高利率</label>
												<div class="col-md-6">
													<input type="text" name="mxlnir"
														class="form-control input-inline input-small form-value"
														placeholder="选择最高利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最低利率</label>
												<div class="col-md-6">
													<input type="text" name="mnlnir"
														class="form-control input-inline input-small form-value"
														placeholder="选择最低利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最高上浮</label>
												<div class="col-md-6">
													<input type="text" name="mxflir"
														class="form-control input-inline input-small form-value"
														placeholder="选择最高上浮">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最低下浮</label>
												<div class="col-md-6">
													<input type="text" name="mnflir"
														class="form-control input-inline input-small form-value"
														placeholder="选择最低下浮">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率类型</label>
												<div class="col-md-6">
													<input type="text" name="lnirkd"
														class="form-control input-inline input-small form-value"
														placeholder="选择利率类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率期限</label>
												<div class="col-md-6">
													<input type="text" name="lnirtm"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择利率期限">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率期限靠档方式</label>
												<div class="col-md-6">
													<input type="text" name="nfirtp"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择利率期限靠档方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率日期规则</label>
												<div class="col-md-6">
													<input type="text" name="irdytp"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择利率日期规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">适用汇率类型</label>
												<div class="col-md-6">
													<input type="text" name="exrttp"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择适用汇率类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">正常利率编号</label>
												<div class="col-md-6">
													<input type="text" name="lnircd"
														class="form-control input-inline input-small form-value"
														placeholder="选择正常利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">年/月利率标识</label>
												<div class="col-md-6">
													<input type="text" name="irdyfg"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择年/月利率标识">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">正常利率</label>
												<div class="col-md-6">
													<input type="text" name="lnrtir"
														class="form-control input-inline input-small form-value"
														placeholder="选择正常利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率调整方式</label>
												<div class="col-md-6">
													<input type="text" name="irrvtp"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择利率调整方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率调整周期</label>
												<div class="col-md-6">
													<input type="text" name="irrvfm"
														class="form-control input-inline input-small form-value"
														placeholder="选择利率调整周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率浮动方式</label>
												<div class="col-md-6">
													<input type="text" name="irfltp"
														class="select-close form-control input-inline input-small form-value"
														placeholder="选择利率浮动方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利率浮动值</label>
												<div class="col-md-6">
													<input type="text" name="irflvl"
														class="form-control input-inline input-small form-value"
														placeholder="选择利率浮动值">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期利率编号</label>
												<div class="col-md-6">
													<input type="text" name="piircd"
														class="form-control input-inline input-small form-value"
														placeholder="选择逾期利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期年月利率</label>
												<div class="col-md-6">
													<input type="text" name="piirfg"
														class="form-control input-inline input-small form-value"
														placeholder="选择逾期年月利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期利率</label>
												<div class="col-md-6">
													<input type="text" name="pirtir"
														class="form-control input-inline input-small form-value"
														placeholder="选择逾期利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期利率调整方式</label>
												<div class="col-md-6">
													<input type="text" name="pirvtp"
														class="form-control input-inline input-small form-value"
														placeholder="选择逾期利率调整方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期利率调整周期</label>
												<div class="col-md-6">
													<input type="text" name="pirvfm"
														class="form-control input-inline input-small"
														placeholder="输入逾期利率调整周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期罚息浮动方式</label>
												<div class="col-md-6">
													<input type="text" name="pifltp"
														class="form-control input-inline input-small"
														placeholder="输入逾期罚息浮动方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">逾期罚息浮动值</label>
												<div class="col-md-6">
													<input type="text" name="piflvl"
														class="form-control input-inline input-small"
														placeholder="输入逾期罚息浮动值">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率编号</label>
												<div class="col-md-6">
													<input type="text" name="ciircd"
														class="form-control input-inline input-small"
														placeholder="输入复利利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率年月标识</label>
												<div class="col-md-6">
													<input type="text" name="ciirfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入复利利率年月标识">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率</label>
												<div class="col-md-6">
													<input type="text" name="cirtir"
														class="form-control input-inline input-small"
														placeholder="输入复利利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率调整方式</label>
												<div class="col-md-6">
													<input type="text" name="cirvtp"
														class="select-close form-control input-inline input-small"
														placeholder="输入复利利率调整方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率调整周期</label>
												<div class="col-md-6">
													<input type="text" name="cirvfm"
														class="form-control input-inline input-small"
														placeholder="输入复利利率调整周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率浮动方式</label>
												<div class="col-md-6">
													<input type="text" name="cifltp"
														class="select-close form-control input-inline input-small"
														placeholder="输入复利利率浮动方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复利利率浮动值</label>
												<div class="col-md-6">
													<input type="text" name="ciflvl"
														class="form-control input-inline input-small"
														placeholder="输入复利利率浮动值">
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率编号</label>
												<div class="col-md-6">
													<input type="text" name="miircd"
														class="form-control input-inline input-small"
														placeholder="输入挤占挪用利率编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率年月标识</label>
												<div class="col-md-6">
													<input type="text" name="miirfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入挤占挪用利率年月标识">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率</label>
												<div class="col-md-6">
													<input type="text" name="mirtir"
														class="form-control input-inline input-small"
														placeholder="输入挤占挪用利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率调整方式</label>
												<div class="col-md-6">
													<input type="text" name="mirvtp"
														class="select-close form-control input-inline input-small"
														placeholder="输入挤占挪用利率调整方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率调整周期</label>
												<div class="col-md-6">
													<input type="text" name="mirvfm"
														class="form-control input-inline input-small"
														placeholder="输入挤占挪用利率调整周期">
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率浮动方式</label>
												<div class="col-md-6">
													<input type="text" name="mifltp"
														class="form-control input-inline input-small"
														placeholder="输入挤占挪用利率浮动方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">挤占挪用利率浮动值</label>
												<div class="col-md-6">
													<input type="text" name="miflvl"
														class="form-control input-inline input-small"
														placeholder="输入挤占挪用利率浮动值">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">实际利率计算方式</label>
												<div class="col-md-6">
													<input type="text" name="ricatp"
														class="select-close form-control input-inline input-small"
														placeholder="输入实际利率计算方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">实际年月利率</label>
												<div class="col-md-6">
													<input type="text" name="ridyfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入实际年月利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">实际利率</label>
												<div class="col-md-6">
													<input type="text" name="realir"
														class="form-control input-inline input-small"
														placeholder="输入实际利率">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计提标志</label>
												<div class="col-md-6">
													<input type="text" name="cainfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入计提标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计提规则</label>
												<div class="col-md-6">
													<input type="text" name="caintp"
														class="select-close form-control input-inline input-small"
														placeholder="输入计提规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计提利率规则</label>
												<div class="col-md-6">
													<input type="text" name="cainrt"
														class="select-close form-control input-inline input-small"
														placeholder="输入计提利率规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计提周期</label>
												<div class="col-md-6">
													<input type="text" name="cainfm"
														class="form-control input-inline input-small"
														placeholder="输入计提周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">损失准备计提编号</label>
												<div class="col-md-6">
													<input type="text" name="lscicd"
														class="form-control input-inline input-small"
														placeholder="输入损失准备计提编号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">早起息标志</label>
												<div class="col-md-6">
													<input type="text" name="isbkrt"
														class="select-close form-control input-inline input-small"
														placeholder="输入早起息标志">
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-6 control-label">晚起息标志</label>
												<div class="col-md-6">
													<input type="text" name="isltrt"
														class="select-close form-control input-inline input-small"
														placeholder="输入晚起息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">起息天数</label>
												<div class="col-md-6">
													<input type="text" name="crrtnm"
														class="form-control input-inline input-small"
														placeholder="输入起息天数">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">早起息最大天数</label>
												<div class="col-md-6">
													<input type="text" name="btmxnm"
														class="form-control input-inline input-small"
														placeholder="输入早起息最大天数">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-6 control-label">晚起息最大天数</label>
												<div class="col-md-6">
													<input type="text" name="ltmxnm"
														class="form-control input-inline input-small"
														placeholder="输入晚起息最大天数">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息规则</label>
												<div class="col-md-6">
													<input type="text" name="instbs"
														class="select-close form-control input-inline input-small"
														placeholder="输入计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">零头计息规则</label>
												<div class="col-md-6">
													<input type="text" name="instod"
														class="select-close form-control input-inline input-small"
														placeholder="输入零头计息规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息本金规则</label>
												<div class="col-md-6">
													<input type="text" name="prinsr"
														class="select-close form-control input-inline input-small"
														placeholder="输入计息本金规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利息计算方法</label>
												<div class="col-md-6">
													<input type="text" name="instfs"
														class="select-close form-control input-inline input-small"
														placeholder="输入利息计算方法">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息头尾规则</label>
												<div class="col-md-6">
													<input type="text" name="dycntp"
														class="select-close form-control input-inline input-small"
														placeholder="输入计息头尾规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息最小金额</label>
												<div class="col-md-6">
													<input type="text" name="mninam"
														class="form-control input-inline input-small"
														placeholder="输入计息最小金额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息舍入规则</label>
												<div class="col-md-6">
													<input type="text" name="rountp"
														class="select-close form-control input-inline input-small"
														placeholder="输入计息舍入规则">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">舍入最小单位</label>
												<div class="col-md-6">
													<input type="text" name="rounit"
														class="form-control input-inline input-small"
														placeholder="输入舍入最小单位">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">分段计息标志</label>
												<div class="col-md-6">
													<input type="text" name="insgfg"
														class="form-control input-inline input-small"
														placeholder="输入分段计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计息标志</label>
												<div class="col-md-6">
													<input type="text" name="instfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入计息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">计复息标志</label>
												<div class="col-md-6">
													<input type="text" name="cistfg"
														class="select-close form-control input-inline input-small"
														placeholder="输入计复息标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">复息计息标志</label>
												<div class="col-md-6">
													<input type="text" name="ciflag"
														class="form-control input-inline input-small"
														placeholder="输入复息预收息方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">预收息方式</label>
												<div class="col-md-6">
													<input type="text" name="disctp"
														class="select-close form-control input-inline input-small"
														placeholder="输入预收息方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">利息摊销周期</label>
												<div class="col-md-6">
													<input type="text" name="inamfm"
														class="form-control input-inline input-small"
														placeholder="输入利息摊销周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">每次摊销方式</label>
												<div class="col-md-6">
													<input type="text" name="inamtp"
														class="select-close form-control input-inline input-small"
														placeholder="输入每次摊销方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">每次摊销比例</label>
												<div class="col-md-6">
													<input type="text" name="inampt"
														class="form-control input-inline input-small"
														placeholder="输入每次摊销比例">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴类型</label>
												<div class="col-md-6">
													<input type="text" name="txtype"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴适用客户类型</label>
												<div class="col-md-6">
													<input type="text" name="txcutp"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴适用客户类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴提供方</label>
												<div class="col-md-6">
													<input type="text" name="txorgn"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴提供方">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴贷款资金使用目的</label>
												<div class="col-md-6">
													<input type="text" name="txufor"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴贷款资金使用目的">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴金额计算方式</label>
												<div class="col-md-6">
													<input type="text" name="txcatp"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴金额计算方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴金额或比例</label>
												<div class="col-md-6">
													<input type="text" name="txamvl"
														class="form-control input-inline input-small"
														placeholder="输入补贴金额或比例">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">补贴申领时点</label>
												<div class="col-md-6">
													<input type="text" name="txtime"
														class="select-close form-control input-inline input-small"
														placeholder="输入补贴申领时点">
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_inst">保存</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfinst.js"></script>
<script>
	$(document).ready(function() {
		lnsubobj.setparam("lnfinst", lnfinst);
	});
</script>
