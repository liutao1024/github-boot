<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">活动列表</span>
				<span class="caption-helper">管理活动定义配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<th width="10%">
								活动号
							</th>	
							<th width="10%">
								产品定价号
							</th>
							<th width="10%">
								业务种类编号
							</th>													
							<th width="10%">
								活动名称
							</th>
							<th width="10%">
								是否有效
							</th>
							<th width="10%">
								开始日期
							</th>
							<th width="10%">
								结束日期
							</th>
							<th width="10%">
								最小金额
							</th>
							<th width="10%">
								最大金额
							</th>
							<th width="10%" colspan="3">
								 操作
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width = "800">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">活动信息</h4>
				</div>
				<div class="modal-body" style="text-align:left;">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="row">
										<div class="col-md-5">
											<div class="form-group">
												<label class="col-md-4 control-label">活动号</label>
												<div class="col-md-8">
													<div>
														<input type="text" id="actvcd" name="actvcd" readOnly class="form-control input-inline input-small" maxlength="20" placeholder="输入活动号">
													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">产品定价号</label>
												<div class="col-md-8">
													<div>
														<input type="text" id="tmplcd" name="tmplcd" readOnly class="form-control input-inline input-small" maxlength="20" placeholder="输入产品定价号">
													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">业务种类编号</label>
												<div class="col-md-8">
												<div>
													<input type="text" id="busicd" name="busicd" readOnly class="form-control input-inline input-small" maxlength="50" placeholder="选择业务种类">
												</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">活动名称</label>
												<div class="col-md-8">
												<div>
													<input type="text" id="actvna" name="actvna" class="form-control input-inline input-small" maxlength="50" placeholder="输入活动名称">
												</div>
												</div>
											</div>
											<!-- <div class="form-group">
												<label class="col-md-4 control-label">定价信息</label>
												<div class="col-md-8">
												<div>
													<input type=text id="cminfo" name="cminfo" class="form-control input-inline input-sm" maxlength="50" placeholder="输入定价信息">
												</div>
												</div>
											</div> -->
											<div class="form-group">
												<label class="col-md-4 control-label">是否有效</label>
												<div class="col-md-8">
												<div>
													<input type="text" id="isvald" name="isvald" class="form-control input-inline input-small" maxlength="50" placeholder="选择是否有效">
												</div>
												</div>
											</div>
										</div>
										<div class="col-md-7">
											
											<div class="form-group">
												<label class="control-label col-md-4">开始日期</label>
												<div class="col-md-8">
													<div class="input-group input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
														<input type="text" readonly id = "statdt" class="form-control" name="statdt">
														<span class="input-group-btn">
														<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
														</span>
													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="control-label col-md-4">结束日期</label>
												<div class="col-md-8">
													<div class="input-group input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
														<input type="text" readonly id = "endxdt" class="form-control" name="endxdt">
														<span class="input-group-btn">
														<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
														</span>
													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">最小金额</label>
												<div class="col-md-8">
												<div>
													<input type="text" id="minxam" name="minxam" class="form-control input-inline input-small" maxlength="20" placeholder="最小金额">
												</div>
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-4 control-label">最大金额</label>
												<div class="col-md-8">
												<div>
													<input type="text" id="maxxam" name="maxxam" class="form-control input-inline input-small" maxlength="20" placeholder="最大金额">
												</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/kcm/scripts/kcmactv.js"></script>
<script>
	jQuery(document).ready(function() {    
		kcmactv.init();
	});
</script>
