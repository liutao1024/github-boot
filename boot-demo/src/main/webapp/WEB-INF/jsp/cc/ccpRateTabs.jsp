<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">利率参数表列表</span>
				<span class="caption-helper">利率参数表管理配置...</span>
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
									利率表编号
								</th>
								<th width="20%">
									描述
								</th>
								<th width="20%">
									计息基准年
								</th>
								<th width="20%">
									利息累计计算方式
								</th>														
								<th width="20%" colspan="2">
									 操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_intbid" name="q_intbid" />
								</td>
								<td>
								</td>
								<td></td>
								<td></td>
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
	<div id="edittypeModal" class="modal fade" tabindex="-1"
		data-backdrop="static" data-keyboard="false" data-width="800">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true"></button>
			<h4 class="modal-title">利率参数信息</h4>
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
									<label class="col-md-3 control-label">利率表编号</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value"  type="text" maxlength="8" autocomplete="off" placeholder="请输利率表编号" id="intbid" name="intbid"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">描述</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text"  maxlength="40" autocomplete="off" placeholder="描述" id="intdes" name="intdes"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">计息基准年</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" autocomplete="off" type="text" id="basday" name="basday" maxlength="8" placeholder="请输入计息基准年"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">利息累计计算方式</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="hidden" placeholder="请选择利息累计计算方式" id="intiri" name="intiri"/>
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
	
	<!-- 比率参数 开始 -->
	<div aria-hidden="true" style="display: none;" id="bilv_setting"
	class="modal fade" tabindex="-1" data-width="1200">
		<div class="modal-dialog modal-full">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close closeModal" data-dismiss="modal"
						aria-hidden="true"></button>
					<h4 class="modal-title">比率参数管理</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<div class="table-container" id="add_bl_set">
								<div class='table-actions-wrapper'><span></span>
								  <button id='add_bl_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
								</div>
								<table class="table table-striped table-bordered table-hover"
									id="bilv_ajax">
									<thead>
										<tr role="row" class="heading">
											<th width="20%">比率定义编号</th>
											<th width="20%">对应手续费比率</th>
											<th width="20%">透支金额分阶最大值</th>
											<th width="20%">对应手续费固定附加</th>										
											<th width="20%" colspan="2">操作</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-default closeModal">关闭</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- edit  modal -->
	<div id="editfenModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">比率参数信息</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal" role="form" id="edit_fen_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
							</div>
							<div class="alert alert-success display-hide">
								<button class="close" data-close="alert"></button>
								表单提交成功！返回信息 ：<span class="msg"></span>
							</div>							    
								<div class="form-group">
									<label class="col-md-3 control-label">利率表编号
									</label>
									<div class="col-md-9">
										<div>
											<input type="text" id="bl_intbid" name="bl_intbid" readOnly class="form-control input-inline input-medium form-value" maxlength="8" placeholder="利率表编号">
										</div>
									</div>
							    </div>
							    <div class="form-group">
									<label class="col-md-3 control-label">比率定义编号
									</label>
									<div class="col-md-9">
										<div>
											<input type="text" id="rateid" name="rateid"  class="form-control input-inline input-medium form-value" maxlength="8" placeholder="比率定义编号">
										</div>
									</div>
							    </div>
							    <div class="form-group">
									<label class="col-md-3 control-label">对应手续费比率</label>
									<div class="col-md-9">
										<input type="text" id="ratexx" name="ratexx"  class="form-control input-inline input-medium form-value" maxlength="15" placeholder="对应手续费比率">
									</div>
								</div>
								 <div class="form-group">
									<label class="col-md-3 control-label">透支金额分阶最大值</label>
									<div class="col-md-9">
										<input type="text" id="maxamt" name="maxamt"  class="form-control input-inline input-medium form-value" maxlength="15" placeholder="输入透支金额分阶最大值">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">对应手续费固定附加</label>
									<div class="col-md-9">
										<input type="text" id="addamt" name="addamt"  class="form-control input-inline input-medium form-value" maxlength="15" placeholder="输入对应手续费固定附加">
									</div>
								</div>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
							<button type="submit" class="btn blue" id="btn_save_fen">保存</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
			<!--end edit fen modal -->	
<!-- 比率参数 结束-->	
</div>
<script src="${ctx}/pages/cc/scripts/ratetabs.js"></script>
<script src="${ctx}/pages/cc/scripts/ratedefi.js"></script>
<script>
	jQuery(document).ready(function(){
		RateTabs.init();
	});
</script>