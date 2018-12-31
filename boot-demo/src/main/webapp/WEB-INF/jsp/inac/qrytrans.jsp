<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div aria-hidden="true" style="display: none;" id="edit_setting"
	class="modal fade" tabindex="-1" data-width="1200">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">交易明细</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" id = "qry-form">  
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						<span>输入交易参数有误</span>
					</div>
					<div class="col-md-5">
						<div class="form-group">
							<label class="control-label col-md-3">内部户帐号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="q_acctno" name="q_acctno" class="form-control input-inline input-medium" maxlength="18" placeholder="输入内部户帐号" readOnly>
							</div>
						</div>
					</div>  
					<div class="form-group col-md-4">
						<label class="control-label col-md-3">日期</label>
						<div class="input-icon col-md-9">
							<div class="input-group input-large date-picker input-daterange"  data-date-format="yyyymmdd">
								<input type="text" class="form-control" id="startdt" name="from" placeholder="输入起始日期">
								<span class="input-group-addon">
								到 </span>
								<input type="text" class="form-control" id="enddt" name="to" placeholder="输入结束日期">
							</div>
						</div>
					</div>
					<div class="form-actions file-action col-md-3">
						<button type="button" class="btn blue" id="tran_submit">查询</button>
						<button type="button" class="btn gray" id="tran_cancle">清空</button>
					</div>
				</form>
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_btn_set">
							<table class="table table-striped table-bordered table-hover"
								id="trans_table" style="white-space: nowrap;">
								<thead>
									<tr role="row" class="heading">
										<th width="5%">交易日期</th>
										<th width="5%">借贷标志</th>
										<th width="5%">记账科目</th>
										<th width="10%">币种</th>
										<th width="5%">交易金额</th>
										<th width="5%">余额方向CDR</th>
										<th width="5%">本次余额</th>
										<th width="5%">记账柜员</th>
										<th width="5%">复核柜员</th>
										<th width="5%">流水号</th> 
										<th width="5%">表内外标志</th>
										<th width="5%">对方账号</th>
										<th width="5%">对方子账号</th>
										<th width="5%">对方户名</th>
										<th width="5%">摘要</th>
										<th width="5%">操作</th>
									</tr>
							<tr role="row" class="filter">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td><input type="text"
									class="form-control form-filter input-sm" name="q_tranus"
									id="q_tranus" /></td>
								<td></td>
								<td></td>
								<td></td>
								<td><input type="text"
									class="form-control form-filter input-sm" name="q_toacct"
									id="q_toacct" /></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
						</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" data-dismiss="modal"
					class="btn btn-default closeModal">关闭</button>
			</div>
			
		</div>
	<div id="qrAcifModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "1200">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">会计分录信息</h4>
		</div>
		<div class="modal-body">
			<table id="qrAcifInfo" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
	</div>

</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/inac/scripts/qrytrans.js"></script>
<script>	
        $('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
</script>