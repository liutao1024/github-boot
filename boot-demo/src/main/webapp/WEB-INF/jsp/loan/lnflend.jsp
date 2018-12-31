<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品放款属性表列表</span>
				<span class="caption-helper">管理贷款产品放款属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_lend_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_lend">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">最大放款金额</th>
							<th scope="col">最小放款金额</th>
							<th scope="col">最长贷款期限</th>
							<th scope="col">最短贷款期限</th>
							<th scope="col">最大放款次数</th>
							<th scope="col">每次最大金额</th>
							<th scope="col">每次最小金额</th>
							<th scope="col">放款有效期限（天）</th>
							<th scope="col">放款最小间隔</th>
							<th scope="col">放款最大间隔</th>
							<th scope="col">放款类型</th>
							<th scope="col">自动放款标志</th>
							<th scope="col">自动放款借据管理模式</th>
							<th scope="col">周期性放款标志</th>
							<th scope="col">放款周期</th>
							<th scope="col">放款方式</th>
							<th scope="col">每次放款金额或比例</th>
							<th scope="col">放款资金来源类型</th>
							<th scope="col">放款资金处理方式</th>
							<th scope="col">是否允许超额放款</th>
							<th scope="col">超额放款比例</th>
							<th scope="col">借新还旧原贷款控制</th>
							<th scope="col">借新还旧还款控制</th>
							<th scope="col">允许特殊放款标志</th>
							<th scope="col">允许对行内非同名账户放款</th>
							<th scope="col">允许对行外账户放款</th>
							<th scope="col">允许对内部账户放款</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->

			<div id="editlendModal" class="modal fade" tabindex="-1"
				data-backdrop="static" data-keyboard="false" data-width="1200px">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品放款属性表</h4>
				</div>
				<div class="modal-body">
					<div style="height: 500px;">
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
												<div class="form-group">
													<label class="col-md-3 control-label">产品代码</label>
													<div class="col-md-9">
														<input type="text" name="prodcd"
															class="form-control input-inline input-medium form-value"
															readOnly placeholder="产品代码">
													</div>
												</div>
												<label class="col-md-6 control-label">币种</label>
												<div class="col-md-6">
													<input type="text" name="crcycd"
														class="select-close form-control input-inline input-small form-value"
														maxlength="3" placeholder="选择币种">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">自动放款标志</label>
												<div class="col-md-6">
													<input type="text" name="isauld"
														class="select-close form-control input-inline input-small"
														placeholder="自动放款标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">周期性放款标志</label>
												<div class="col-md-6">
													<input type="text" name="isperi"
														class="select-close form-control input-inline input-small"
														placeholder="周期性放款标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款周期</label>
												<div class="col-md-6">
													<input type="text" name="perifm"
														class="form-control input-inline input-small"
														placeholder="放款周期">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最大放款金额</label>
												<div class="col-md-6">
													<input type="text" name="mxtlam"
														class="form-control input-inline input-small"
														placeholder="最大放款金额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最小放款金额</label>
												<div class="col-md-6">
													<input type="text" name="mntlam"
														class="form-control input-inline input-small"
														placeholder="最小放款金额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款资金来源类型</label>
												<div class="col-md-6">
													<input type="text" name="fundsr"
														class="select-close form-control input-inline input-small"
														placeholder="放款资金来源类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款有效期限（天）</label>
												<div class="col-md-6">
													<input type="text" name="vadays"
														class="form-control input-inline input-small"
														placeholder="放款有效期限">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最长贷款期限</label>
												<div class="col-md-6">
													<input type="text" name="mxterm"
														class="form-control input-inline input-small"
														placeholder="最长贷款期限">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最短贷款期限</label>
												<div class="col-md-6">
													<input type="text" name="mnterm"
														class="form-control input-inline input-small"
														placeholder="最短贷款期限">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-6 control-label">放款类型</label>
												<div class="col-md-6">
													<input type="text" name="lendmd"
														class="select-close form-control input-inline input-small"
														placeholder="放款类型">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">是否允许超额放款</label>
												<div class="col-md-6">
													<input type="text" name="isexcs"
														class="select-close form-control input-inline input-small"
														placeholder="是否允许超额放款">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">允许特殊放款标志</label>
												<div class="col-md-6">
													<input type="text" name="isspec"
														class="select-close form-control input-inline input-small"
														placeholder="允许特殊放款标志">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">最大放款次数</label>
												<div class="col-md-6">
													<input type="text" name="mxtmes"
														class="form-control input-inline input-small"
														placeholder="最大放款次数">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款最大间隔</label>
												<div class="col-md-6">
													<input type="text" name="mxinva"
														class="form-control input-inline input-small"
														placeholder="放款最大间隔">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款最小间隔</label>
												<div class="col-md-6">
													<input type="text" name="mninva"
														class="form-control input-inline input-small"
														placeholder="放款最小间隔">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">借新还旧原贷款控制</label>
												<div class="col-md-6">
													<input type="text" name="rocndn"
														class="select-close form-control input-inline input-small"
														placeholder="借新还旧原贷款控制 ">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">借新还旧还款控制</label>
												<div class="col-md-6">
													<input type="text" name="rorpfg"
														class="select-close form-control input-inline input-small"
														placeholder="借新还旧还款控制">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">自动放款借据管理模式</label>
												<div class="col-md-6">
													<input type="text" name="autotg"
														class="select-close form-control input-inline input-small"
														placeholder="自动放款借据管理模式">
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label class="col-md-6 control-label">放款资金处理方式</label>
												<div class="col-md-6">
													<input type="text" name="fundmd"
														class="select-close form-control input-inline input-small"
														placeholder="放款资金处理方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">超额放款比例</label>
												<div class="col-md-6">
													<input type="text" name="excspt"
														class="form-control input-inline input-small"
														placeholder="超额放款比例">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">放款方式</label>
												<div class="col-md-6">
													<input type="text" name="lendtp"
														class="select-close form-control input-inline input-small"
														placeholder="放款方式">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">每次放款金额或比例</label>
												<div class="col-md-6">
													<input type="text" name="lendvl"
														class="form-control input-inline input-small"
														placeholder="每次放款金额或比例">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">每次最大金额</label>
												<div class="col-md-6">
													<input type="text" name="mxotam"
														class="form-control input-inline input-small"
														placeholder="每次最大金额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">每次最小金额</label>
												<div class="col-md-6">
													<input type="text" name="mnotam"
														class="form-control input-inline input-small"
														placeholder="每次最小金额">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">允许对行外账户放款</label>
												<div class="col-md-6">
													<input type="text" name="isotld"
														class="select-close form-control input-inline input-small"
														placeholder="允许对行外账户放款">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">允许对内部账户放款</label>
												<div class="col-md-6">
													<input type="text" name="isinld"
														class="select-close form-control input-inline input-small"
														placeholder="允许对内部账户放款">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-6 control-label">允许对行内非同名账户放款</label>
												<div class="col-md-6">
													<input type="text" name="isnmld"
														class="select-close form-control input-inline input-small"
														placeholder="允许对行内非同名账户放款">
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
					<button type="button" class="btn blue" id="btn_save_lend">保存</button>
				</div>
			</div>
		</div>
	</div>
	<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
	<script src="${ctx}/pages/loan/scripts/lnflend.js"></script>
	<script>
		jQuery(document).ready(function() {
			lnsubobj.setparam("lnflend", lnflend);
		});
	</script>