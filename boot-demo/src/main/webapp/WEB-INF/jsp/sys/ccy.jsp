<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>
			 NOTE: 下面为demo模仿数据.
		</p>
	</div>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">币种列表</span>
				<span class="caption-helper">管理币种...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="16%">
								 币种
							</th>
							<th width="16%">
								币种名称
							</th>
							<th width="16%">
								汇率
							</th>
							<th width="16%">
								版本号
							</th>
							<th width="36%" colspan="2">
								 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="tt" name="query_period_cd" />
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
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
	<!-- End: life time stats -->
	<!-- modal add start -->
			<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">币种信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">币种</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="add_ccy_cd" name="ccy_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入币种">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">币种名称</label>
										<div class="col-md-9">
											<input type="text" id="add_ccy_name" name ="ccy_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入币种名称">
										</div>
									</div>
									
									<div class="form-group">
										<label class="col-md-3 control-label">汇率</label>
										<div class="col-md-9">
											<input type="text" id="add_exchange_rate" name ="exchange_rate" class="form-control input-inline input-medium" maxlength="19" placeholder="输入汇率">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">版本</label>
										<div class="col-md-9">
											<input type="text" id="add_ver" readOnly name ="ver" class="form-control input-inline input-medium" maxlength="19" >
										</div>
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- modal add end -->
			<!-- modal edit start -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">字典值信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">币种</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="ccy_cd" name="ccy_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入币种">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">币种名称</label>
										<div class="col-md-9">
											<input type="text" id="ccy_name" name ="ccy_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入币种名称">
										</div>
									</div>
									
									<div class="form-group">
										<label class="col-md-3 control-label">汇率</label>
										<div class="col-md-9">
											<input type="text" id="exchange_rate" name ="exchange_rate" class="form-control input-inline input-medium" maxlength="19" placeholder="输入汇率">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">版本</label>
										<div class="col-md-9">
											<input type="text" id="ver" readOnly name ="ver" class="form-control input-inline input-medium" maxlength="19" >
										</div>
									</div>									
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- modal edit end -->
</div>
<script src="${ctx}/pages/sys/scripts/ccy.js"></script>
<script>
	jQuery(document).ready(function() {    
		Ccy.init();
	});
</script>
