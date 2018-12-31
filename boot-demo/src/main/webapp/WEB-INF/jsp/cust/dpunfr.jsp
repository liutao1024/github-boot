<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">司法解冻</span>
				<span class="caption-helper">司法解冻</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal fund-form" id="fund-form" role="form">
			<div class="form-group">
				<div class="col-md-6">
					<div class="form-group">
						<label class="control-label col-md-4">电子账号</label>
						<div class="input-group col-md-8">
							<input type="text" id="custac" name="custac" class="form-control input-inline" placeholder="请输入电子账号"/>
						</div>
					</div>
				</div>
				<div class="cust-action" class="col-md-6">	
					<button type="button" class="btn blue" id="submit">查询</button>
				</div>
				<div class="clean" ></div>
			</div>
			<br />
			</form>
			 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="bill_ajax">
					<thead>
						<tr role="row" class="heading">	   	
							<th>操&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;</th>	
							<th>冻结编号</th>
							<th>客户账号</th>
							<th>冻结业务类型</th>
							<th>冻结主体类型</th>
							<th>冻结主体ID</th>
							<th>冻结金额</th>
							<th>冻结余额</th>
							<th>冻结状态</th>
							<th>冻结日期</th>
							<th>冻结时间</th>
							<th>冻结起始日期</th>
							<th>冻结终止日期</th>
							<th>冻结分类码</th>
							<th>限制类型</th>
							<th>冻结通知书编号</th>
							<th>冻结证明文书类别</th>
							<th>冻结原因</th>
							<th>执法部门</th>
							<th>冻结执法部门名称</th>
							<th>执法人员1证件种类</th>
							<th>执法人员1证件号码</th>
							<th>执法人员1姓名</th>
							<th>执法人员2证件种类</th>
							<th>执法人员2证件号码</th>
							<th>执法人员2姓名</th>
							<th>主交易流水</th>	
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<!-- 解冻弹出窗口 -->
	<div id="unfrozeModel" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="1000">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">司法解冻</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入参数有误</span>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-4">冻结编号</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" readOnly maxlength="18" autocomplete="off" placeholder="冻结编号" id="a_frozno" name="a_frozno"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-4">客户账号</label>
							<div class="input-icon col-md-8">
								<i class="fa fa-user"></i>
								<input class="form-control input-inline input-medium" type="text" readOnly autocomplete="off" maxlength="18" placeholder="输入客户账号" id="a_custac" name="a_custac"/>
							</div>
						</div>
						<div class="form-group col-md-6" id="div_unfram">
							<label class="control-label col-md-4">解冻金额</label>
							<div class="col-md-8">
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="18" placeholder="输入解冻金额" id="a_unfram" name="a_unfram"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻原因</label>
							<div class="col-md-8">
								<input type="text" id="a_ufreas" name="a_ufreas" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻原因">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻证明文书类别</label>
							<div class="col-md-8">
								<input type="text" id="a_ufcttp" name="a_ufcttp" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻证明文书类别">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻通知书编号</label>
							<div class="col-md-8">
								<input type="text" id="a_ufctno" name="a_ufctno" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻通知书编号">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻执法部门</label>
							<div class="col-md-8">
								<input type="text" id="a_ufexog" name="a_ufexog" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻执法部门">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻执法部门名称</label>
							<div class="col-md-8">
								<input type="text" id="a_ufogna" name="a_ufogna" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻执法部门名称">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">执法人员1证件种类</label>
							<div class="col-md-8">
								<input type="text" id="a_idtp01" name="a_idtp01" class="form-control input-inline input-medium" maxlength="50" placeholder="选择执法人员1证件种类">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">执法人员1证件号码</label>
							<div class="col-md-8">
								<input type="text" id="a_idno01" name="a_idno01" class="form-control input-inline input-medium" maxlength="19" placeholder="输入执法人员1证件号码">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻执法人员1姓名</label>
							<div class="col-md-8">
								<input type="text" id="a_ufna01" name="a_ufna01" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻执法人员1姓名">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">执法人员2证件种类</label>
							<div class="col-md-8">
								<input type="text" id="a_idtp02" name="a_idtp02" class="form-control input-inline input-medium" maxlength="19" placeholder="选择执法人员2证件种类">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">执法人员2证件号码</label>
							<div class="col-md-8">
								<input type="text" id="a_idno02" name="a_idno02" class="form-control input-inline input-medium" maxlength="19" placeholder="输入执法人员2证件号码">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-4 control-label">解冻执法人员2姓名</label>
							<div class="col-md-8">
								<input type="text" id="a_ufna02" name="a_ufna02" class="form-control input-inline input-medium" maxlength="19" placeholder="输入解冻执法人员2姓名">
							</div>
						</div>
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="add_save">提交</button>
		</div>
	</div>

<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cust/scripts/dpunfr.js"></script>
<script>
	 jQuery(document).ready(function() {    
		 Dpunfr.init();
	}); 
</script>