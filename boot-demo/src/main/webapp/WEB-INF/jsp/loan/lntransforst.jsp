<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款账户</span>
				<span class="caption-helper">贷款账户相关信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal" role="form" id="tran_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<div class="input-icon col-md-9">
									<i class="fa fa-cubes"></i> <input type="text" id="acctno_in"
										name="acctno_in" class="form-control input-inline input-medium"
										maxlength="40" placeholder="输入贷款账号">
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<div class="col-md-9 input-icon input-group">
									<i class="fa fa-cube"></i> <input type="text" id="lncfno_in"
										name="lncfno_in" class="form-control input-inline" maxlength="30"
										placeholder="输入贷款借据号"> <span class="input-group-btn">
										<button type="button" class="btn blue btn_sm margin-bottom"
											id="serch_btn">
											<i class="fa fa-search"></i>查找贷款账户
										</button>
									</span>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="form-group">
								<label
									class="col-md-5 control-label caption-subject font-green-sharp bold uppercase"><i
									class="fa fa-mail-forward"></i>贷款形态转移:</label> 
										<input type="text" id="clssst_trans" name="clssst_trans"  class="form-control input-inline input-small"  placeholder="选择贷款形态">
										<!-- 
										<label id="clssst_trans"
										class="col-md-7 control-label font-green-sharp bold "></label>
										 -->
							</div>
						</div>
						<div class="col-md-2">
							<button type="button" class="btn btn_sm green"
								disabled='disabled' id="do_tran_btn">
								<i class="fa fa-toggle-right"></i>确认转移
							</button>
						</div>
						<div class='clean'></div>
					</form>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12" id="edittranModal">
					<form class="form-horizontal control-label" role="form" id="dataform_tran">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款账号</label>
								<div class="col-md-9">
									<input type="text" id="acctno" name="acctno"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款借据号</label>
								<div class="col-md-9">
									<input type="text" id="lncfno" name="lncfno"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户号</label>
								<div class="col-md-9">
									<input type="text" id="custno" name="custno"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户名称</label>
								<div class="col-md-9">
									<input type="text" id="acctn" name="acctn"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">产品代码</label>
								<div class="col-md-9">
									<input type="text" id="prodcd" name="prodcd"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">开户日期</label>
								<div class="col-md-9">
									<input type="text" id="initdt" name="initdt"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">起息日期</label>
								<div class="col-md-9">
									<input type="text" id="instdt" name="instdt"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">到期日期</label>
								<div class="col-md-9">
									<input type="text" id="matudt" name="matudt"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款期限</label>
								<div class="col-md-9">
									<input type="text" id="termfm" name="termfm"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款形态</label>
								<div class="col-md-9">
									<input type="text" id="clssst" name="clssst"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">应计非应计状态</label>
								<div class="col-md-9">
									<input type="text" id="prlntg" name="prlntg"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">贷款账户状态</label>
								<div class="col-md-9">
									<input type="text" id="acctst" name="acctst"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">货币代号</label>
								<div class="col-md-9">
									<input type="text" id="crcycd" name="crcycd"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">正常本金</label>
								<div class="col-md-9">
									<input type="text" id="lnnpbl" name="lnnpbl"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">逾期本金</label>
								<div class="col-md-9">
									<input type="text" id="lnopbl" name="lnopbl"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">呆滞本金</label>
								<div class="col-md-9">
									<input type="text" id="lndpbl" name="lndpbl"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">呆账本金</label>
								<div class="col-md-9">
									<input type="text" id="lnbpbl" name="lnbpbl"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">核销本金</label>
								<div class="col-md-9">
									<input type="text" id="hxxxpr" name="hxxxpr"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lntransforst.js"></script>
<script>
	jQuery(document).ready(function() {
		lntransfor.init();
	});
</script>