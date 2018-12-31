<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">三类账户限额修改</span>
				<span class="caption-helper">三类账户限额修改</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">负债账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="acctno" name="acctno" class="form-control input-inline input-medium" placeholder="输入负债账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">客户账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="custac" name="custac" class="form-control input-inline input-medium" placeholder="输入客户账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">业务类型</label>
					<div class="input-icon col-md-9">
						<input type="text" id="bustyp" name="bustyp" class="form-control input-inline input-medium" placeholder="输入业务类型">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">渠道</label>
					<div class="input-icon col-md-9">
						<input type="text" id="trnchl" name="trnchl" class="form-control input-inline input-medium" placeholder="输入渠道">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">币种</label>
					<div class="input-icon col-md-9">
						<input type="text" id="crcycd" name="crcycd" class="form-control input-inline input-medium" placeholder="输入币种">
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" onclick="qrysetlmt.queryUserInfo()">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			<div class="table-container">
			 	<table class="table table-striped table-bordered table-hover" id="ajax_table">
					<thead>
						<tr role="row" class="heading">
							<th scope="col" style="text-align: center;" width="8%">负债账号</th>
							<th scope="col" style="text-align: center;" width="8%">客户账号</th>
							<th scope="col" style="text-align: center;" width="5%">渠道</th>
							<th scope="col" style="text-align: center;" width="5%">币种</th>
							<th scope="col" style="text-align: center;" width="8%">业务类型</th>
							<th scope="col" style="text-align: center;" width="10%">统一配置的单笔限额</th>
							<th scope="col" style="text-align: center;" width="10%">统一配置的日累计限额</th>
							<th scope="col" style="text-align: center;" width="10%">统一配置的年累计限额</th>
							<th scope="col" style="text-align: center;" width="10%">账户单笔限额</th>
							<th scope="col" style="text-align: center;" width="8%">账户日累计限额</th>
							<th scope="col" style="text-align: center;" width="8%">账户年累计限额</th>
							<th scope="col" style="text-align: center;" width="10%">操作</th>
						</tr>
					</thead>
					<tbody style="text-align: center;">
						<tr>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "300">
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<!--三类账户限额修改-->
<div id="edittypeModal" class="modal fade" tabindex="-1"
			data-backdrop="static" data-keyboard="false">
	<div class="modal-header">
		<button type="button" class="close closeModal" data-dismiss="modal"
			aria-hidden="false"></button>
		<h4 class="modal-title">三类账户限额修改</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="edit_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							提交表单正确！后台信息 ： <span class="msg"></span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">负债账号</label>
							<div class="input-icon col-md-9">
								<input type="text" id="acctno1" name="acctno" class="form-control input-inline input-medium" placeholder="负债账号" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">客户账号</label>
							<div class="input-icon col-md-9">
								<input type="text" id="custac1" name="custac" class="form-control input-inline input-medium" placeholder="电子账号" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">渠道</label>
							<div class="input-icon col-md-9">
								<input type="text" id="trnchl1" name="trnchl1" class="form-control input-inline input-medium" placeholder="渠道" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="input-icon col-md-9">
								<input type="text" id="crcycd1" name="crcycd1" class="form-control input-inline input-medium" placeholder="币种" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">业务类型</label>
							<div class="input-icon col-md-9">
								<input type="text" id="bustyp1" name="bustyp" class="form-control input-inline input-medium" placeholder="新账户分类" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">统一配置的单笔限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="stasig" name="stasig" class="form-control input-inline input-medium" placeholder="统一配置的单笔限额" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">统一配置的日累计限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="statot" name="statot" class="form-control input-inline input-medium" placeholder="统一配置的日累计限额" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">统一配置的年累计限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="stayer" name="stayer" class="form-control input-inline input-medium" placeholder="统一配置的年累计限额" readOnly="readOnly">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户单笔限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="siglim" name="siglim" class="form-control input-inline input-medium" placeholder="账户单笔限额">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户日累计限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="totlim" name="totlim" class="form-control input-inline input-medium" placeholder="账户日累计限额">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">账户年累计限额</label>
							<div class="input-icon col-md-9">
								<input type="text" id="yerlim" name="yerlim" class="form-control input-inline input-medium" placeholder="账户年累计限额">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal"
							class="btn btn-default closeModal">关闭</button>
						<button type="button" class="btn blue" id="btn_save_type">保存</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kupcnr/scripts/qrysetlmt.js"></script>
<script>
	jQuery(document).ready(function() {
		qrysetlmt.init();
	});
</script>
