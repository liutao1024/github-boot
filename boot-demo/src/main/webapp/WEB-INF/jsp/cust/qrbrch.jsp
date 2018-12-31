<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">机构信息</span>
				<span class="caption-helper">机构信息...</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal cust-form" id="inac-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">机构号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="brchno" name="brchno" class="form-control input-inline input-medium" maxlength="20" placeholder="输入机构号">
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
							
							<th width="60px">
								法人代码
							</th>
							<th width="6%">
								机构号
							</th>	
							<th width="6%">
								分行号
							</th>
							<th width="12%">
								机构名称
							</th>
							<th width="6%">
								机构号简码
							</th>
							<th width="12%">
								机构简称
							</th>
							<th width="6%">
								上级节点
							</th>
							<th width="6%">
								机构级别
							</th>													
							<th width="8%">
								部门类型
							</th>
							<th width="6%">
								机构日结状态
							</th>
							<th width="9%">
								邮编
							</th>
							<th width="20%">
								地址
							</th>
							<th width="10%">
								电话
							</th>
							<th width="10%">
								是否中心标志
							</th>
							
							<th width="18%" colspan="2">
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
			<h4 class="modal-title">机构信息修改</h4>
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
						<label class="col-md-3 control-label">法人代码</label>
						<div class="col-md-9">
							<input type="text" id="m_corpno" name="m_corpno" class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
						<div class="form-group">
						<label class="col-md-3 control-label">机构号</label>
						<div class="col-md-9">
							<input type="text" id="m_brchno" name="m_brchno" class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">分行号</label>
						<div class="col-md-9">
							<input type="text" id="m_cityno" name="m_cityno" class="form-control input-inline input-medium" readOnly>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">机构名称</label>
						<div class="col-md-9">
							<input type="text" id="m_brchna" name="m_brchna" class="form-control input-inline input-medium" maxlength="100" >
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">机构简码</label>
						<div class="col-md-9">
							<input type="text" id="m_brnosh" name="m_brnosh" class="form-control input-inline input-medium" maxlength="100">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">机构简称</label>
						<div class="col-md-9">
							<input type="text" id="m_brsmna" name="m_brsmna" class="form-control input-inline input-medium" maxlength="100" readOnly>
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-md-3 control-label">上级节点</label>
						<div class="col-md-9">
							<input type="text" id="m_nodebr" name="m_nodebr" class="form-control input-inline input-medium" maxlength="19" placeholder="输入上级节点">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">部门级别</label>
						<div class="col-md-9">
							<input type="text" id="m_brchlv" name="m_brchlv" class="form-control input-inline input-medium" maxlength="19" placeholder="输入部门级别">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">部门类型</label>
						<div class="col-md-9">
							<input type="text" id="m_brchtp" name="m_brchtp" class="form-control input-inline input-medium" placeholder="部门类型"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">部门日结状态</label>
						<div class="col-md-9">
							<input type="text" id="m_brchst" name="m_brchst" class="form-control input-inline input-medium" maxlength="19" placeholder="输入部门日结状态">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">邮政编码</label>
						<div class="col-md-9">
							<input type="text" id="m_postcd" name="m_postcd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入邮政编码">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">地址</label>
						<div class="col-md-9">
							<input type="text" id="m_addres" name="m_addres" class="form-control input-inline input-medium" maxlength="19" placeholder="输入机构地址">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">电话</label>
						<div class="col-md-9">
							<input type="text" id="m_telecd" name="m_telecd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入电话">
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
	<!-- 新增内部户弹出窗口 
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">新增需校验的交易码</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					 BEGIN SINGLEDEBT FORM 
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
					 END SINGLEDEBT FORM 
				</div>
			</div>
		</div>-->
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

<script src="${ctx}/pages/cust/scripts/qrbrch.js"></script>
<script>
	jQuery(document).ready(function() {    
		qrbrch.init();
	});
</script>