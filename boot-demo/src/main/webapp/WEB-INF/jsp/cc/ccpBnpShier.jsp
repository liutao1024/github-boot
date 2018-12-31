<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">BNP优先级参数管理</span>
				<span class="caption-helper">BNP优先级参数配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" >				
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_bs_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>						
				
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
						<thead>
							<tr role="row" class="heading">
								<th width="10%">
									还款冲销顺序表id
								</th>
								<th width="10%">
									描述
								</th>	
								<th width="60%">
									BNP优先级列表
								</th>													
								<th width="20%" colspan="2">
									 操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_hierid" name="q_hierid" />
								</td>
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_descrp" name="q_descrp" />
								</td>
								<td></td>
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
			<h4 class="modal-title">BNP优先级信息</h4>
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
									<label class="col-md-3 control-label">还款冲销顺序表id</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value"  type="text" maxlength="10" autocomplete="off" placeholder="请输还款冲销顺序表id" id="hierid" name="hierid"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">描述</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" type="text" maxlength="40" autocomplete="off" placeholder="描述" id="descrp" name="descrp"/>
									</div>
								</div>
							</div>
							
							<div class="col-md-6">
								<div class="form-group">
									<label class="col-md-3 control-label">BNP优先级列表</label>
									<div class="col-md-9">
										<input class="form-control input-inline input-medium form-value" autocomplete="off" type="text" id="bnphir" name="bnphir" maxlength="300" placeholder="请输入BNP优先级列表"/>
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
<script src="${ctx}/pages/cc/scripts/bnpshier.js"></script>
<script>
	jQuery(document).ready(function(){
		BnpShier.init();
	});
</script>