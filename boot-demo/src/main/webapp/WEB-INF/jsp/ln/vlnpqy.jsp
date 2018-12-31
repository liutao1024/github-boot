<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">待还款列表</span>
				<span class="caption-helper">待还款列表...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">客户姓名</label>
						<div class="input-group col-md-5">
							<input type="text" id="custna" class="form-control" name="custna"></input>
						</div>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">身份证号</label>
						<div class="input-group col-md-5">
							<input type="text" id="idtfno" class="form-control" name="idtfno"></input>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-5">手机号码</label>
						<div class="input-group col-md-5">
							<input type="text" id="teleno" class="form-control" name="teleno"></input>
						</div>
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			</div>
			<div class="row">
			<div class="col-md-12">
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="fcclear_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">
								客户姓名
							</th>	
							<th width="8%">
								身份证号码
							</th>
							<th width="10%">
								手机号码
							</th>													
							<th width="8%">
								贷款借据号
							</th>
							<th width="8%">
								总期数
							</th>
							<th width="8%">
								当期期数
							</th>
							<th width="8%">
								应还款日期
							</th>
							<th width="8%">
								应还款金额
							</th>
							<th width="8%">
								操作
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			</div>
		</div>	
		<div class="clean_t"></div>
		<div class="clean_t"></div>
	</div>
</div>
<div id="releInfoModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "700">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">还款信息</h4>
		</div>
		<div class="modal-body">
			<table id="releInfo" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
<script src="${ctx}/pages/ln/scripts/vlnpqy.js"></script>
<script>
	jQuery(document).ready(function() {
		vlnpqy.init();
	});
</script>
