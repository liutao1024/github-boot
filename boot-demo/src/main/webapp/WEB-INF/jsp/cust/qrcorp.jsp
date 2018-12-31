<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">对公账户服务</span>
				<span class="caption-helper">对公账户服务...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">客户名称</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="custna_t" name="custna_t" class="form-control input-inline input-medium" 
						maxlength="20" placeholder="输入客户名称">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件类型</label>
					<div class="input-icon col-md-9">
						<input type="text" id="idtftp_t" name="idtftp_t" class="form-control input-inline input-medium" 
						maxlength="19" >
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">企业联系人电话</label>
					<div class="input-icon col-md-9">
					    <i class="fa fa-credit-card"></i>
						<input type="text" id="epcotl_t" name="epcotl_t" class="form-control input-inline input-medium" 
						maxlength="19" placeholder="输入联系人电话">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">证件号码</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-credit-card"></i>
						<input type="text" id="idtfno_t" name="idtfno_t" class="form-control input-inline input-medium" 
						maxlength="18" placeholder="输入证件号码">
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
							<th width="15%">
								对公账号
							</th>
							<th width="15%">
								客户姓名
							</th>
							<th width="15%">
								联系电话
							</th>
							<th width="15%">
								证件类型
							</th>												
							<th width="15%">
								证件号码
							</th>
							<th width="15%">
								邮箱地址
							</th>
							<th width="10%">
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


<script src="${ctx}/pages/cust/scripts/qrcorp.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qrcorp.init();
	});
</script>