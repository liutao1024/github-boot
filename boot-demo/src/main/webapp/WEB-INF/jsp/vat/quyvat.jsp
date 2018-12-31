<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">价税分离上报总行流水表</span>
				<span class="caption-helper">价税分离上报总行流水表...</span>
			</div>
		</div>
		<div class="portlet-body">

			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>输入交易参数有误</span>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="control-label col-md-3">日期</label>
					<div class="input-group col-md-9 input-medium date date-picker"
						data-date-format="yyyymmdd" data-date-viewmode="years"
						data-date-minviewmode="months">
						<input type="text" id="trandt" class="form-control" name="trandt">
						<span class="input-group-btn">
							<button class="btn default" type="button">
								<i class="fa fa-calendar"></i>
							</button>
						</span>
					</div>
				</div>
			</div>
			<div class="form-group col-md-6">
				<label class="col-md-3 control-label">交易流水</label>
				<div class="input-icon col-md-9">
					<input type="text" id="transq" name="transq"
						class="form-control input-inline input-medium" maxlength="18"
						placeholder="输入交易流水">
				</div>
			</div>
			<div class="cif-clear"></div>
			<div class="form-actions cust-action">
				<button type="button" class="btn blue" id="submit">查询</button>
			</div>
			<div class="clean"></div>
			<form class="form-horizontal control-label" role="form" id="return_form">
			<div class="row">
				
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">交易日期</label>
						<div class="col-md-9">
							<input type="text" id="trandt_1" name="trandt_1" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">交易流水</label>
						<div class="col-md-9">
							<input type="text" id="transq_1" name="transq_1" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">借贷标志</label>
						<div class="col-md-9">
							<input type="text" id="amntcd" name="amntcd" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">科目</label>
						<div class="col-md-9">
							<input type="text" id="itemcd" name="itemcd" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">货币代号</label>
						<div class="col-md-9">
							<input type="text" id="crcycd" name="crcycd" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">交易金额(含税额)</label>
						<div class="col-md-9">
							<input type="text" id="tranam" name="tranam" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">交易金额(不含税额）</label>
						<div class="col-md-9">
							<input type="text" id="extamt" name="extamt" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">税额</label>
						<div class="col-md-9">
							<input type="text" id="taxamt" name="taxamt" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">冲正标志</label>
						<div class="col-md-9">
							<input type="text" id="strktp" name="strktp" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">冲抹源交易流水号</label>
						<div class="col-md-9">
							<input type="text" id="retrsq" name="retrsq" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">冲抹原交易日期</label>
						<div class="col-md-9">
							<input type="text" id="retrdt" name="retrdt" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">核心记账流水号</label>
						<div class="col-md-9">
							<input type="text" id="hxjzsq" name="hxjzsq" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">开票账号</label>
						<div class="col-md-9">
							<input type="text" id="opacno" name="opacno" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="col-md-3 control-label font-green-sharp">增值税率</label>
						<div class="col-md-9">
							<input type="text" id="taxret" name="taxret" maxlength="30"
								class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
				</div>
			</div>
			<div class="form-actions"> 
				<button type="button" id="deaing" disabled="disabled" class="btn blue">冲正编辑</button>
			</div>
			<div class="clean"></div>
		    </form>

		</div>

		<!-- 修改操作员弹出窗口 -->
		<div id="editModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">价税分离冲正</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<form class="form-horizontal mod-form" id="mod-form" role="form">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								<span>输入交易参数有误</span>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易金额(含税额)</label>
								<div class="input-icon col-md-9">
									<i class="fa fa-credit-card"></i> <input type="text"
										id="m_tranam" name="m_tranam"
										class="form-control input-inline input-medium">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易金额(不含税额)</label>
								<div class="input-icon col-md-9">
									<i class="fa fa-credit-card"></i> <input type="text"
										id="m_extamt" name="m_extamt"
										class="form-control input-inline input-medium">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">税额</label>
								<div class="input-icon col-md-9">
									<i class="fa fa-map-marker"></i> <input type="text"
										id="m_taxamt" name="m_taxamt"
										class="form-control input-inline input-medium" maxlength="100" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易流水号</label>
								<div class=" input-icon col-md-9">
									<i class="fa fa-mnoney-o"></i> <input type="text"
										id="m_transq" name="m_transq"
										class="form-control input-inline input-medium" maxlength="19"
										readOnly />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">开票账号</label>
								<div class="input-icon col-md-9">
									<input type="text" id="m_opacno" name="m_opacno"
										class="form-control input-inline input-medium" />
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">交易日期</label>
								<div class="input-icon col-md-9">
									<input type="text" id="m_trandt" name="m_trandt"
										class="form-control input-inline input-medium" readOnly />
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">增值税率</label>
								<div class="input-icon col-md-9">
									<input type="text" id="m_taxret" name="m_taxret"
										class="form-control input-inline input-medium" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">科目</label>
								<div class="input-icon col-md-9">
									<input type="text" id="m_itemcd" name="m_itemcd"
										class="form-control input-inline input-medium" readOnly />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
				<button type="button" id="delvat" class="btn blue">冲正</button>
			</div>
		</div>
		<script
			src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js"
			type="text/javascript"></script>
		<script type="text/javascript"
			src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
		<script type="text/javascript"
			src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
		<script src="${ctx}/pages/vat/scripts/quyvat.js"></script>
		<script>
			jQuery(document).ready(function() {
				quyvat.init();
			});
		</script>