<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">产品参数管理</span>
				<span class="caption-helper">产品参数配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" >				
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_tc_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>						
				
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
						<thead>
							<tr role="row" class="heading">
								<th scope="col">产品代码</th>
								<th scope="col">描述</th>												
								<th scope="col" colspan="2">操作</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_prodcd" name="q_prodcd" />
								</td>
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_descrp" name="q_descrp" />
								</td>
								<td  colspan="2">
									<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
									<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
								</td>
							
							</tr>
						</thead>
						<tbody>
						</tbody>
				</table>
			</div>
		</div>			
	</div>
           <!--修改和新增锁定码模块 -->			
	<div id="edittypeModal" class="modal fade" tabindex="-1"
		data-backdrop="static" data-keyboard="false" data-width="800">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true"></button>
			<h4 class="modal-title">产品参数信息</h4>
		</div>			
		<div class="modal-body">				
			<div class="row">					
				<div class="col-md-12">
					<form class="form-horizontall" role="form" id="lock_from">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
							</div>
							<div class="alert alert-success display-hide">
								<button class="close" data-close="alert"></button>
								表单提交成功！返回信息 ：<span class="msg"></span>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">产品代码</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value"  type="text" maxlength="6" autocomplete="off" placeholder="请输入产品代码" id="prodcd" name="prodcd"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">描述</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value"  type="text" maxlength="40" autocomplete="off" placeholder="请输入描述" id="descrp" name="descrp"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">转贷款的产品代码</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" maxlength="10" autocomplete="off"  placeholder="请输入转贷款的产品代码" id="xfrpcd" name="xfrpcd"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">产品类型</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" maxlength="1" autocomplete="off"  id="plantp" name="plantp"  placeholder="请输入产品类型"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">本币入账币种</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择本币入账币种" id="currcd" name="currcd"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">缺省账单日</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" placeholder="缺省账单日" maxlength="2" id="cycldt" name="cycldt"/>
									</div>
								</div>
							</div>
							
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">滞纳金</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text"  maxlength="8" autocomplete="off"  placeholder="请输入滞纳金" id="latpym" name="latpym"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">账户属性ID</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text"  maxlength="8" autocomplete="off" placeholder="请输入账户属性ID" id="attrid" name="attrid"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">取现计划模板</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择取现计划模板" id="cshpln" name="cshpln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">消费计划模板</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择消费计划模板" id="retpln" name="retpln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">随借随还转出计划</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择随借随还转出计划" id="bpopln" name="bpopln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">随借随还转入计划</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择随借随还转入计划" id="bpipln" name="bpipln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">溢缴款计划</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择溢缴款计划" id="ovppln" name="ovppln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">特殊计划</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择特殊计划" id="splpln" name="splpln"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">自定义计划</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择自定义计划" id="usrpln" name="usrpln"/>
									</div>
								</div>
							</div>													
						</div>										
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="btn_save_type">保存</button>
		</div>	
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cc/scripts/prodlion.js"></script>
<script>
jQuery(document).ready(function() {
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	}
	;
	ProdLion.init();
});
</script>