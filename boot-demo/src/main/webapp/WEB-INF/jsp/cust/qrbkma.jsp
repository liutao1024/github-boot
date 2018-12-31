<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">黑名单验证交易码信息</span>
				<span class="caption-helper">黑名单验证交易码信息...</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal cust-form" id="inac-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">交易码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="prcsid" name="prcsid" class="form-control input-inline input-medium" maxlength="20" placeholder="输入交易码">
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="inac_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<th width="30%">
								交易码
							</th>	
							<th width="30%">
								交易名称
							</th>
							<th width="20%">
								校验状态
							</th>													
							<th width="20%" colspan="4">
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
	
	<!-- 修改操作员弹出窗口 -->
	<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">黑名单验证交易码信息修改</h4>
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
							<label class="col-md-3 control-label">交易码</label>
							<div class="col-md-9">
								<input type="text" id="m_prcsid" name="m_prcsid" class="form-control input-inline input-medium" maxlength="19" readOnly>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">交易名称</label>
							<div class="col-md-9">
								<input type="text" id="m_prcsnm" name="m_prcsnm" class="form-control input-inline input-medium" maxlength="19" readOnly>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">校验状态</label>
							<div class="col-md-9">
								<input type="text" id="m_ysorno" name="m_ysorno" class="form-control input-inline input-medium" maxlength="19" placeholder="请选择校验状态">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="m_save" class="btn blue">保存</button>
		</div>
	</div>
	<!-- 新增内部户弹出窗口 -->
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">新增需校验的交易码</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						
						<div class="form-group" id="d1">
							<label class="control-label col-md-3">交易码</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入交易码" id="a_prcsid" name="a_prcsid"/>
							</div>
						</div>
						<div class="form-group" id="d2">
							<label class="control-label col-md-3">交易名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入交易名称" id="a_prcsnm" name="a_prcsnm"/>
							</div>
						</div>
						
						<div class="form-group">
							<label class="control-label col-md-3">校验状态</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-user"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="18" placeholder="请选择校验状态" id="a_ysorno" name="a_ysorno"/>
							</div>
						</div>
						
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="add_save">保存</button>
		</div>
	</div>
<!-- 	<div id="lastBillModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "700">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">上日余额信息</h4>
		</div>
		<div class="modal-body">
			<table id="lastBill" class="table table-striped table-bordered table-hover"></table>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
		</div>
	</div>
	<div class="inbox-content"></div> -->
</div>

<script src="${ctx}/pages/cust/scripts/qrbkma.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qryac.init();
	});
</script>