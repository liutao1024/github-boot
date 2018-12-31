<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">对公账户开户</span>
				<span class="caption-helper">对公账户开户...</span>
			</div>
		</div>
		<div class="portlet-body">
		 <div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">证件类型</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" id="a_idtftp" name="a_idtftp"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">证件号码</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入证件号码" id="a_idtfno" name="a_idtfno"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">客户名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-user"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入客户名称" id="a_custna" name="a_custna"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">组织机构代码</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入组织机构代码" id="a_cropcd" name="a_cropcd"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">产品</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" placeholder="请选择产品" id="a_prodcd" name="a_prodcd"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">货币代号</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入货币代号" id="a_crcycd" name="a_crcycd"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">地税登记号</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入地税登记号" id="a_locatx" name="a_locatx"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">国税登记号</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入国税登记号" id="a_natitx" name="a_natitx"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">是否银行客户</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入是否银行客户" id="a_isbank" name="a_isbank"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">主管单位法定代表人</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入主管单位法定代表人" id="a_upcrps" name="a_upcrps"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">主管单位法定代表人证件类别</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入主管单位法定代表人证件类别" id="a_upidtp" name="a_upidtp"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">主管单位法定代表人证件号</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入主管单位法定代表人证件号" id="a_upidno" name="a_upidno"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">企业联系人</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入企业联系人" id="a_epcona" name="a_epcona"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">企业联系人电话</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入企业联系人电话" id="a_epcotl" name="a_epcotl"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">基本户开户核准号</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入基本户开户核准号" id="a_opcfno" name="a_opcfno"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">核准日期</label>
							<div class="col-md-9">
								<div class="input-group col-md-12 date input-medium date-picker"
									data-date-format="yyyymmdd" data-date-viewmode="years"
									data-date-minviewmode="months">
									<input type="text" class="form-control" id="a_opcfdt"
										maxlength="8" placeholder="选择日期"> <span
										class="input-group-btn">
										<button class="btn default" type="button">
											<i class="fa fa-calendar"></i>
										</button>
									</span>
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">税务机关证明</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入税务机关证明" id="a_txdpid" name="a_txdpid"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">境内客户标识</label>
							<div class="col-md-9">
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入境内客户标识" id="a_iomark" name="a_iomark"/>
							</div>
						</div>
						
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
	   </div>
	   <div align="right">
	   		<button type="button" id="add_save" class="btn blue">保存</button>
	   </div>
	</div>
	
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cust/scripts/corpadd.js"></script>
<script>
	jQuery(document).ready(function() {    
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		Corpadd.init();
	});
</script>