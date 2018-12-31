<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">业务代码属性信息</span>
				<span class="caption-helper">业务代码属性信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="bzprtp_ajax">
					<thead>
						<tr>
							<th width="5%">
								属性类型
							</th>
							<th width="6%">
								待销账方向
							</th>
							<th width="10%">
								全额销账标志
							</th>
							<th width="7%">
								余额更新方式
							</th>
							<th width="7%">
								透支控制方式
							</th>
							<th width="5%">
								汇总标志
							</th>
							<th width="5%">
								记账控制
							</th>
							<th width="7%">
								账单控制方式
							</th>
							<th width="8%">
								是否使用开户凭证
							</th>
							<th width="8%">
								是否使用交易凭证
							</th>
							<th width="10%">
								贷方交易检查条件
							</th>
							<th width="10%">
								借方交易检查条件
							</th>
							<th width="12%">
								描述
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!-- 新增业务代码属性弹出窗口 -->
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="900" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">新增业务代码属性</h4>
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
						<div class="form-group col-md-5">
							<label class="control-label col-md-5">属性类型</label>
							<div class="input-icon col-md-7">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="2" autocomplete="off" placeholder="请输入属性类型" id="a_bzprtp" name="a_bzprtp"/>
							</div>
						</div>
						<div class="col-md-1"></div>
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">待销账方向</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="待销账方向" id="a_payatg" name="a_payatg"/>
							</div>
						</div>
						
						<div class="form-group  col-md-5">
							<label class="control-label col-md-5">全额销账标志</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" id="a_pauntg" name="a_pauntg" placeholder="全额销账标志"/>
							</div>
						</div>
						<div class="col-md-1"></div>
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">余额更新方式</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="余额更新方式" id="a_rlbltg" name="a_rlbltg"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">透支控制方式</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="透支控制方式" id="a_ovdftg" name="a_ovdftg"/>
							</div>
						</div>
						
						<div class="col-md-1"></div>
						<div class="form-group  col-md-5">
							<label class="control-label col-md-5">汇总标志</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="汇总标志" id="a_totltg" name="a_totltg"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">记账控制</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="记账控制" id="a_kpacfg" name="a_kpacfg"/>
							</div>
						</div>
						
						<div class="col-md-1"></div>
						<div class="form-group  col-md-5">
							<label class="control-label col-md-5">账单控制方式</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="账单控制方式" id="a_billtg" name="a_billtg"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">是否使用开户凭证</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="是否使用开户凭证" id="a_usdcmt" name="a_usdcmt"/>
							</div>
						</div>
						
						<div class="col-md-1"></div>
						<div class="form-group  col-md-5">
							<label class="control-label col-md-5">是否使用开户凭证</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="是否使用交易凭证" id="a_usdctg" name="a_usdctg"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">贷方交易检查条件</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="贷方交易检查条件" id="a_trcrlm" name="a_trcrlm"/>
							</div>
						</div>
						
						<div class="col-md-1"></div>
						<div class="form-group  col-md-5">
							<label class="control-label col-md-5">借方交易检查条件</label>
							<div class="input-icon col-md-7">
								<input class="form-control input-inline input-medium" type="hidden" placeholder="借方交易检查条件" id="a_trdrlm" name="a_trdrlm"/>
							</div>
						</div>
						
						<div class="form-group  col-md-6">
							<label class="control-label col-md-5">描述</label>
							<div class="input-icon col-md-7">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="80" placeholder="描述" id="a_desctx" name="a_desctx"/>
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
</div>
<script src="${ctx}/pages/inac/scripts/bzprtp.js"></script>
<script>
	jQuery(document).ready(function(){
		Bzprtp.init();
	});
</script>