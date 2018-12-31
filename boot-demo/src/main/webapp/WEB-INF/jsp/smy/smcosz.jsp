<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!-- Begin: life time stats -->
<div class="portlet light">
	<div class="portlet-title">
		<div class="caption">
			<i class="fa fa-gift font-green-sharp"></i> <span
				class="caption-subject font-green-sharp bold uppercase">萨摩耶贷款规模控制</span>
			<span class="caption-helper">萨摩耶贷款规模控制...</span>
		</div>
	</div>
	<div class="portlet-body">
		<div class="table-container">
			<div class="table-actions-wrapper">
				<span> </span>
				<button id="add_pars_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button>
			</div>
			<table class="table table-striped table-bordered table-hover"
				id="datatable_smy">
				<thead>
					<tr role="row" class="heading">
						<th scope="col">序号</th>
						<th scope="col">合作方</th>
						<th scope="col">产品号</th>
						<th scope="col">机构号</th>
						<th scope="col">币种</th>
						<th scope="col">年份</th>
						<th scope="col">月份</th>
						<th scope="col">每日新增客户数</th>
						<th scope="col">每日新增放款笔数</th>
						<th scope="col">当月新增贷款余额（万元）</th>
						<th scope="col">是否生效</th>
						<th scope="col" colspan="2">操作</th>
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
					<h4 class="modal-title">萨摩耶贷款规模控制编辑</h4>
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
										表单提交成功！<span class="msg"></span>
									</div>
									<div class="col-md-5">
										<div class="form-group" id="snoisno">
											<label class="col-md-6 control-label">序号</label>
											<div class="col-md-6">
												<input type="text" name="subsno"
													class="form-control input-inline input-medium form-value"
													 placeholder="序号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">合作方</label>
											<div class="col-md-6">
												<input type="text" name="partnr"
													class="form-control input-inline input-medium form-value"
													placeholder="序号" >
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">产品号</label>
											<div class="col-md-6">
												<input type="text" name="prodcd"
													class="form-control input-inline input-medium form-value"
													placeholder="产品号" >
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">机构号</label>
											<div class="col-md-6">
												<input type="text" name="brchno"
													class="form-control input-inline input-medium form-value"
													placeholder="机构号" >
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">年份</label>
											<div class="col-md-6">
											 <select  name="yeardt" id="yeardt" class="form-control input-inline input-medium form-value select2-choice" >
                                                       <option >--请选择年份--</option>
                                              </select>										
											</div>
										</div>	
										<div class="form-group">
											<label class="col-md-6 control-label">月份</label>
											<div class="col-md-6">
												<input type="text" name="whmoth"
													class="form-control input-inline input-medium form-value"
													 placeholder="月份">
											</div>
										</div>
									</div>
									</div>
									
									<div class="col-md-6">
									<div class="form-group">
											<label class="col-md-6 control-label">币种</label>
											<div class="col-md-6">
												<input type="text" name="crcycd"
													class="form-control input-inline input-medium form-value"
													placeholder="币种" >
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">每日新增客户数</label>
											<div class="col-md-6">
												<input type="text" name="concif"
													class="form-control input-inline input-medium form-value"
													 placeholder="每日新增客户数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">每日新增放款笔数</label>
											<div class="col-md-6">
												<input type="text" name="contsm"
													class="form-control input-inline input-medium form-value"
													 placeholder="每日新增放款笔数">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-6 control-label">当月新增贷款余额（万元）</label>
											<div class="col-md-6">
												<input type="text" name="conmam" id="conmam"
													class="form-control input-inline input-medium form-value"
													 placeholder="当月新增贷款余额（万元">
											</div>
										</div>
										<div class="form-group" >
											<label class="col-md-6 control-label">是否生效</label>
											<div class="col-md-6">
												<input type="text" name="isnoen"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否生效">
											</div>
										</div>
									
										<div class="form-group" hidden="true">
											<label class="col-md-6 control-label">是否新增</label>
											<div class="col-md-6">
												<input type="text" name="isinst"
													class="form-control input-inline input-medium form-value"
													 placeholder="是否新增">
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
					<button type="button" class="btn blue" id="btn_save_evnt">保存</button>
				</div>
			</div>
		</div>
	</div>


<script src="${ctx}/pages/smy/scripts/smcosz.js"></script>
<script>
	jQuery(document).ready(function() {
		smcosz.init();
	});
</script>