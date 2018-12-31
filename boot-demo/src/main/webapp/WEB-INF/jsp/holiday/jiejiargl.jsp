<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">节假日管理</span>
				<span class="caption-helper">节假日管理</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-12 ">
					<div class="form-group col-md-5">
						<label class="col-md-3 control-label">年份</label>
						<div class="input-icon col-md-9">
							<input type="text" id="inyear" name="inyear" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择年份">
						</div>
					</div>
					<div class="form-group col-md-5">
						<label class="col-md-3 control-label">月份</label>
						<div class="input-icon col-md-9">
							<input type="text" id="inmoth" name="inmoth" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择月份">
						</div>
					</div>
				</div>
				<div class="form-group col-md-12">
					<div class="form-group col-md-5">
						<label class="col-md-3 control-label">节假日期</label>
						<div class="col-md-9">
							<div class="input-group col-md-12 date input-medium date-picker"
								data-date-format="yyyymmdd" data-date-viewmode="years"
								data-date-minviewmode="months" id="mubiao">
								<input type="text" class="form-control" id="indate"
									maxlength="8" placeholder="输入目标日期"> <span
									class="input-group-btn">
									<button class="btn default" type="button">
										<i class="fa fa-calendar"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
					<div class="form-group col-md-5">
						<label class="col-md-3 control-label">节假日名称</label>
						<div class="input-icon col-md-9">
							<input type="text" id="remark" name="remark" class="form-control input-inline input-medium" >
						</div>
					</div>
					<div class="form-actions cust-action">
						<button type="button" class="btn blue" id="submit" onclick="jiejiargl.queryCust()">查询</button>
						<button type="button" class="btn gray" id="cancle">清空</button>
					</div>
					<div class="cif-pp"></div>
				</div>
			</form>
			 <div class="table-container">
				<div class="table-actions-wrapper">
					<button id="add_prod_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
					<button id="add_week_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 一键新增当前年份周末
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_prod">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">节假日名称</th>
							<th scope="col">节假日日期</th>
							<th scope="col">失效日期</th>
							<th scope="col">操作</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="tranModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title">新增节假日</h4>
	</div>
	<div class="modal-body">
		<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="cif_tran_ajax">
					<tr>
						<td>节假日名称</td>
						<td><input type="text" placeholder="输入节假日名称" maxlength="10" class="form-control input-inline input-medium valid" name="beizhuxx" id="beizhuxx"></td>
					</tr>
					<tr>
						<td>节假日日期</td>
						<td>
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months" id="mubiao1">
							<input type="text" class="form-control" id="indate1"
								maxlength="8" placeholder="输入目标日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
						</td>
					</tr><tr>
						<td>失效时间</td>
						<td>
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months" id="mubiao2">
							<input type="text" class="form-control" id="effcdt"
								maxlength="8" placeholder="输入目标日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div></td>
					</tr>
				</table>
			</div>
	</div>
	<div class="modal-footer">
		<button type="button" id="m_save_debt" class="btn blue">保存</button>
		<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/holiday/scripts/jiejiargl.js"></script>
<script>
	jQuery(document).ready(function() {    
		jiejiargl.init();
	});
</script>