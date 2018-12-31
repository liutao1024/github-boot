<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">锁定码管理列表</span>
				<span class="caption-helper">锁定码管理配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" >				
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_clc_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>						
				
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
						<thead>
							<tr role="row" class="heading">
								<th width="20%">
									锁定码
								</th>
								<th width="60%">
									描述
								</th>														
								<th width="20%" colspan="2">
									 操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_lockcd" name="q_lockcd" />
								</td>
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_descrp" name="q_descrp" />
								</td>
								<td  colspan="2">
									<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i>查询</button>
									<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i>清空</button>
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
			<h4 class="modal-title">锁定码信息</h4>
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
									<label class="col-md-3 control-label">锁定码</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value"  type="text" maxlength="32" autocomplete="off" placeholder="请输入锁定码" id="lockcd" name="lockcd"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">逾期转贷款指示</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择逾期转贷款指示" id="loanxf" name="loanxf"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">优先级</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" autocomplete="off" type="text" id="prorty" name="prorty" maxlength="8" placeholder="请选择优先级"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">入账许可指示</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择入账许可指示" id="postfg" name="postfg"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">是否进行日常利息累积</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="是否进行日常利息累积" id="acrufg" name="acrufg"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">是否免除利息</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden"  placeholder="是否免除利息" id="wintfg" name="wintfg"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">是否免除交易费</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="是否免除交易费" id="wtxffg" name="wtxffg"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">是否输出账单</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="是否输出账单" id="stmtfg" name="stmtfg"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">最小还款额计算方式</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden"  placeholder="请选择最小还款额计算方式" id="duecal" name="duecal"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">系统自动添加标志</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" autocomplete="off" maxlength="32" placeholder="系统自动添加标志" id="autofg" name="autofg"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">描述</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" autocomplete="off" maxlength="32" placeholder="描述" id="descrp" name="descrp"/>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">业务错误原因码</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" autocomplete="off" maxlength="32" placeholder="业务错误原因码" id="reason" name="reason"/>
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
<script src="${ctx}/pages/cc/scripts/lockcode.js"></script>
<script>
	jQuery(document).ready(function(){
		LockCode.init();
	});
</script>