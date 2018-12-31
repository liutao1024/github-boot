<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time status -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品缺省控制表</span>
				<span class="caption-helper">贷款产品缺省控制配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_ctrl_btn" class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_ctrl">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品代码</th>
							<th scope="col">货币代号</th>
							<th scope="col">产品级表名</th>
							<th scope="col">产品级字段</th>
							<th scope="col">产品级字段描述</th>
							<th scope="col">账户级表名</th>
							<th scope="col">账户级字段</th>
							<th scope="col">账户级字段描述</th>
							<th scope="col">账户修改规则</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editctrlModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">贷款产品缺省控制表</h4>
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
									<div class="form-group">
										<label class="col-md-3 control-label">产品代码</label>
										<div class="col-md-9">											
											<input type="text"  name="prodcd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入产品代码">											
										</div>
									</div>
									<div class="form-group">
											<label class="col-md-3 control-label">币种</label>
											<div class="col-md-9">
												<input type="text" name="crcycd"
													class="select-close form-control input-inline input-medium form-value"
													maxlength="3" placeholder="选择币种">
											</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">产品级表名</label>
										<div class="col-md-9">
											<input type="text"  name="pdlvtb"  class="form-control input-inline input-medium" placeholder="产品级表名">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">产品级字段</label>
										<div class="col-md-9">
											<input type="text"  name="pblvfd"  class="form-control input-inline input-medium"  placeholder="产品级字段">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">产品级字段描述</label>
										<div class="col-md-9">
											<input type="text"  name="pfinfo"  class="form-control input-inline input-medium"  placeholder="产品级字段描述">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">账户级表名</label>
										<div class="col-md-9">
											<input type="text"  name="accttb"  class="form-control input-inline input-medium"  placeholder="账户级表名">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">账户级字段</label>
										<div class="col-md-9">
											<input type="text"  name="acctfd"  class="form-control input-inline input-medium"  placeholder="账户级字段">
										</div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">账户级字段描述</label>
										<div class="col-md-9">
											<input type="text"  name="afinfo"  class="form-control input-inline input-medium"  placeholder="账户级字段描述">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">账户修改规则</label>
										<div class="col-md-9">
											<input type="text"  name="modrul"  class="select-close form-control input-inline input-medium"  placeholder="账户修改规则">
										</div>
									</div>	
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="button" class="btn blue" id="btn_save_ctrl">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
	    </div> 
	 </div>
</div>
<script src="${ctx}/pages/loan/scripts/lnsubobj.js"></script>
<script src="${ctx}/pages/loan/scripts/lnfctrl.js"></script>
<script>
	$(document).ready(function() {
		lnsubobj.setparam("lnfctrl",lnfctrl);	
	});
</script>