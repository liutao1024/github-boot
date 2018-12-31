<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">商户管理</span>
				<span class="caption-helper">商户管理...</span>
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
						<input type="text" id="zjcgno_t" name="zjcgno_t" class="form-control input-inline input-medium" maxlength="19" placeholder="输入存管商户号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件类型</label>
					<div class="input-icon col-md-9">
						<input type="text" id="certtp_t" name="certtp_t" class="form-control input-inline input-medium" maxlength="19" >
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="certno_t" name="certno_t" class="form-control input-inline input-medium" maxlength="18" placeholder="输入证件号码">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">所属支付平台</label>
					<div class="input-icon col-md-9">
						<input type="text" id="sszfpt_t" name="sszfpt_t" class="form-control input-inline input-medium" maxlength="19" >
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
				<table class="table table-striped table-bordered table-hover" id="cif_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="8%">
								存管商户号
							</th>	
							<th width="8%">
								商户名称
							</th>
							<th width="10%">
								证件号码
							</th>													
							<th width="8%">
								证件类型
							</th>
							<th width="8%">
								商户状态
							</th>
							<th width="8%">
								存管商户管理方式
							</th>
							<th width="8%">
								渠道号
							</th>
							<th width="8%">
								是否绑多卡
							</th>
							<th width="10%">
								所属支付平台
							</th>
							<th width="8%">
								平台账号
							</th>
							<th width="8%">
								注册日期
							</th>
							<th width="8%">
								客户总数
							</th>
							<th width="8%">
								余额
							</th>
							<th width="8%" colspan="2">
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
	
	<!-- 新增弹出窗口 -->
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">商户信息新增</h4>
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
							<label class="col-md-3 control-label">客户名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="m_custnm" name="m_custnm" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">证件类型</label>
							<div class="input-icon col-md-9">
								
								<input type="text" id="m_certtp" name="m_certtp" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">证件号码</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="m_certno" name="m_certno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">存管商户管理方式</label>
							<div class=" input-icon col-md-9">
								
								<input type="text" id="m_mangtp" name="m_mangtp" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">是否绑多卡</label>
							<div class=" input-icon col-md-9">
								
								<input type="text" id="m_multfg" name="m_multfg" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">所属支付平台</label>
							<div class=" input-icon col-md-9">
								
								<input type="text" id="m_sszfpt" name="m_sszfpt" class="form-control input-inline input-medium" 
								onBlur="setStyle()" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">平台账号</label>
							<div class=" input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="m_plafno" name="m_plafno" class="form-control input-inline input-medium" >
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">商户渠道简称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-credit-card"></i>
								<input type="text" id="m_servna" name="m_servna" class="form-control input-inline input-medium" >
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
	<!-- 新增弹出窗口结束 -->
	
	<div id="oprela" class="modal fade out" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="1280">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">商户关联信息</h4>
			<div class=" col-md-12"></div>
		</div>
		<div class="modal-body" id="edit_load">
		</div>
		<div class="modal-footer col-md-12" id="btn_cont">
		    <button type='button'  class='btn btn-default closeModal' data-dismiss="modal">关闭</button>
		</div>
	</div>
	
</div>


<script src="${ctx}/pages/fm/scripts/qrplaf.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qrplaf.init();
	});
</script>