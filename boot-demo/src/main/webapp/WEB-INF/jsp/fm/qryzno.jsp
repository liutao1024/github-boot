<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">影子账户管理</span>
				<span class="caption-helper">影子账户...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">存管商户号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="zjcgno_t" name="zjcgno_t" class="form-control input-inline input-medium" maxlength="10" placeholder="输入存管商户号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">内部户账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="inerac_t" name="inerac_t" class="form-control input-inline input-medium" maxlength="18" placeholder="输入内部户账号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">总行账号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-book"></i>
						<input type="text" id="headno_t" name="headno_t" class="form-control input-inline input-medium" maxlength="19" placeholder="输入总行账号">
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
			 <div class="table-actions-wrapper">
				<span> </span>
				<!-- <button id="add_pars_btn"
					class="btn btn-sm green table-group-action-submit">
					<i class="fa fa-plus"></i> 新增
				</button> -->
			</div>
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="8%">
								影子账户账号
							</th>	
							<th width="5%">
								存管商户号
							</th>
							<th width="10%">
								账户类型
							</th>													
							<th width="8%">
								账户用途
							</th>
							<th width="9%">
								总行账号
							</th>
							<th width="12%">
								总行户名
							</th>
							<th width="6%">
								账户余额
							</th>
							<th width="5%">
								是否控制余额
							</th>
							<th width="5%" >
								内部户账号
							</th>
							<th width="5%">
								记账与清算是否用同一账户
							</th>
							<th width="5%">
							        清算内部户
							</th>
							<th width="5%">
								过渡户
							</th>
							<th width="5%">
								是否自动清算
							</th>
							<th width="5%">
								是否同步余额
							</th>
							<th width="5%">
								实体户最新余额
							</th>
							<th width="5%">
								最新余额更新日期
							</th>
							<th width="5%">
								账户状态
							</th>
							
							<th width="8%">
								创建日期
							</th>
							
							<th >操作</th>	
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<!-- 新增弹出窗口 -->
<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="1080">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title">影子账户编辑</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal mod-form" id="mod-form" role="form">
					<div class="alert alert-danger display-hide">
						<button class="close" data-close="alert"></button>
						<span>输入交易参数有误</span>
					</div>
					<div class="col-md-6">
					<div class="form-group">
						<label class="col-md-3 control-label">存管商户号</label>
						<div class="input-group col-md-9">
							
							<input type="text" id="zjcgno" name="zjcgno" class="form-control input-inline input-medium" >
						</div>
					</div>
				
				
					<div class="form-group">
						<label class="col-md-3 control-label">账户用途</label>
						<div class="input-group col-md-9">
							
							<input type="text" id="actpur" name="actpur" class="form-control input-inline input-medium" >
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">内部户账号</label>
						<div class=" input-group col-md-9">						
							<input type="text" id="inerac" name="inerac"  maxlength="18" class="form-control input-inline input-medium" >
							<div  style="margin-left: -85px; margin-top:45px;" class="acctna">帐号名称：<span class="name" id="d-acct-i"></span></div>
						</div>
					</div>
					<div class="form-group">			
						<label class="col-md-3 control-label">清算内部户</label>
						<div class=" input-group col-md-9">							
							<input type="text" id="clerac" name="clerac"  maxlength="18"  placeholder="记账与清算户是同一账户不必输入"  class="form-control input-inline input-medium" >
							<div  style="margin-left: -85px; margin-top:45px;" class="acctna">帐号名称：<span class="name" id="d-acct-c"></span></div>						
					</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">过&nbsp;&nbsp;&nbsp;渡&nbsp;&nbsp;&nbsp;户</label>
						<div class=" input-group col-md-9">							
							<input type="text" id="batcac" name="batcac"  maxlength="18" class="form-control input-inline input-medium" >
							<div  style="margin-left: -85px; margin-top:45px;" class="acctna">帐号名称：<span class="name"  id="d-acct-b"></span></div>
						</div>
					</div>
					
					
					
					
					
					</div>
					<div class="col-md-6">
						<div class="form-group ">
						<label class="col-md-3 control-label">账号类型</label>
						<div class="input-group col-md-9">
							
							<input type="text" id="acctyp" name="acctyp" class="form-control input-inline input-medium" >
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-3 control-label">是否控制余额</label>
						<div class=" input-group col-md-9">
							
							<input type="hidden" id="conttg" name="conttg"  class="form-control input-inline input-medium" >
						</div>
					</div>
						<div class="form-group">
						<label class="col-md-3 control-label">记账与清算是否用同一账户</label>
						<div class="  input-group col-md-9">						
							<input type="hidden" id="samefg" name="samefg"  maxlength="18" autocomplete="off"class="form-control input-inline input-medium" >
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">是否自动清算</label>
						<div class="input-group col-md-9">
							
							<input type="text" id="ifaucl" name="ifaucl" class="form-control input-inline input-medium" >
						</div>
					</div>
						<div class="form-group">
						<label class="col-md-3 control-label">总行账号</label>
						<div class=" input-group col-md-9">							
							<input type="text" id="headno" name="headno" class="form-control input-inline input-medium" >
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">总行户名</label>
						<div class=" input-group col-md-9">

							<input type="text" id="headnm" name="headnm" class="form-control input-inline input-medium" >
						</div>
					</div>
				
				<div class="form-group">
						<label class="col-md-3 control-label">是否同步余额</label>
						<div class="input-group col-md-9">
							
							<input type="text" id="syacst" name="syacst" class="form-control input-inline input-medium" >
						</div>
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
<div id="message" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="500">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
					                   
				<h4 class="modal-title">您确定完成处理了吗</h4>		
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			     <button type="button" class="btn blue" id="btn_send">保存</button>
			    <button type='button'  class='btn btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>

<script src="${ctx}/assets/global/plugins/jquery-validation/js/acdInput.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<link href="${ctx}/pages/fm/css/fm.css" rel="stylesheet" type="text/css" />
<script src="${ctx}/pages/fm/scripts/qryzno.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qryzno.init();
	});
</script>