<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<style type="text/css">
  .bs-input-height{
  	height : 62px;
  }
</style>
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">提前还款扣款</span>
			<span class="caption-helper">提前还款扣款...</span>
		</div>
	</div>
	<div class="portlet-body">
		<form class="form-horizontal cust-form" id="cust-form" role="form">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				<span>输入交易参数有误</span>
			</div>
			<div class="form-group col-md-5">
				<label class="col-md-3 control-label">借据编号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-user"></i>
						<input type="text" id="q_lncfno" name="q_lncfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入借据编号">
			</div>
					</div>
			<div class="form-group col-md-6">
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle" style="background:grey;color:black">清空</button>
					<button type="button" class="btn gray" id="query"  style="background:yellow;color:black " >查询扣款情况</button>
				</div>
			</div>
			<div class="cif-clear"></div>
			
			<div class="cif-pp"></div>
		</form>
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_pars_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_pars">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">借据编号</th>
						<th scope="col">交易流水</th>
						<th scope="col">处理状态</th>
						<th scope="col">处理结果</th>
						<th scope="col">客户名称</th>
						<th scope="col">身份证号</th>
						<th scope="col">证件类型</th>
						<th scope="col">卡号</th>
						<th scope="col">开户行号</th>
						<th scope="col">开户行名</th>
						<th scope="col">还款总额</th>
						<th scope="col">实际扣款总额</th>
						<th scope="col">交易金额</th>
						<th scope="col">交易时间</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		<!-- edit modal -->
		<div id="editparsModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1100">
			<div>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">提前还款扣款</h4>
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
										操作成功！<span class="msg"></span>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">借据号</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-user"></i>
											<input type="text" id="lncfno" name="lncfno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入借据号">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">客户名称</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-user"></i>
											<input type="text" id="custna" name="custna" readonly="readonly" class="form-control input-inline input-medium" maxlength="18" >
										</div>
									</div>
									<!--<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">借据号</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-user"></i>
											<input type="text" id="lncfno" name="lncfno" readonly="readonly" class="form-control input-inline input-medium" maxlength="18" >
										</div>
									</div>  -->
									<div class="form-group col-md-6 bs-input-height" >
										<label class="col-md-3 control-label">证件类型</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-user"></i>
											<input type="text" id="idtftp" name="idtftp" readonly="readonly" class="form-control input-inline input-medium" maxlength="10">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">证件号码</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-table"></i>
											<input type="text" id="idtfno" name="idtfno" readonly="readonly" class="form-control input-inline input-medium" maxlength="18">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">卡号</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-credit-card"></i>
											<input type="text" id="cardno" name="cardno" readonly="readonly" class="form-control input-inline input-medium" maxlength="20">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height" >
										<label class="col-md-3 control-label">开户行号</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-table"></i>
											<input type="text" id="brchno" name="brchno" readonly="readonly" class="form-control input-inline input-medium" maxlength="18">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height" >
										<label class="col-md-3 control-label">开户行名称</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-book"></i>
											<input type="text" id="brchna" name="brchna" readonly="readonly" class="form-control input-inline input-medium" maxlength="19">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">币种</label>
										<div class="input-icon col-md-9">
											<input type="text" id="crcycd" name="crcycd"  class="form-control input-inline input-medium"  placeholder="输入币种">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">银行预留手机号</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-mobile-phone"></i>
											<input type="text" id="mobile" name="mobile" class="form-control input-inline input-medium" maxlength="手机号" >
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">应还金额</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-table"></i>
											<input type="text" id="totamo" name="totamo" readonly="readonly" class="form-control input-inline input-medium" maxlength="18" >
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">已扣款金额</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-table"></i>
											<input type="text" id="resvam" name="resvam" readonly="readonly" class="form-control input-inline input-medium" maxlength="18">
										</div>
									</div>  
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">未还金额</label>
										<div class="input-icon col-md-9">
											<input type="text" id="tranam" name="tranam"  class="form-control input-inline input-medium"  placeholder="输入交易金额">
										</div>
									</div>
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">已还金额</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-mobile-phone"></i>
											<input type="text" id="rpedam" name="rpedam"  readonly="readonly"  class="form-control input-inline input-medium" maxlength="已还金额" >
										</div>
									</div>																															
									<div class="form-group col-md-6 bs-input-height">
										<label class="col-md-3 control-label">本期期数</label>
										<div class="input-icon col-md-9">
											<i class="fa fa-mobile-phone"></i>
											<input type="text" id="termno" name="termno"    class="form-control input-inline input-medium" maxlength="本期期数" >
										</div>
									</div>
									
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
					<button type="button" class="btn blue" id="btn_save_evnt">扣款</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/fc/scripts/xmcpcn.js"></script>
<script>
	jQuery(document).ready(function() {
		xmcpcn.init();
	});
</script>