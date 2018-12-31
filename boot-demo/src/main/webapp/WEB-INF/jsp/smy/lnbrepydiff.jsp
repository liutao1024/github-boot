<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">还款差异登记簿</span>
				<span class="caption-helper">还款差异信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
			
				<div class="table-actions-wrapper">
				<!-- 
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				 -->
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="6%">
								借据号
							</th>
							<th width="6%">
								产品号
							</th>
							<th width="3%">
								核心归还本金
							</th>
							<th width="3%">
								核心归还利息
							</th>
							<th width="3%">
								合作方归还本金
							</th>
							<th width="3%">
								合作方归还利息
							</th>
							<th width="6%">
								还款期数
							</th>
							<th width="6%">
								总期数
							</th>
							<th width="10%">
								还款日期
							</th>
							<th width="6%">
								差异类型
							</th>
							<th width="25" colspan="2">
								 操作
							</th> 
						</tr>
						<tr role="row" class="filter">
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>
								<div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
									<span class="input-group-btn"> 
									<button class="btn default" disabled="disabled" type="button"><i class="fa fa-calendar"></i></button>
									</span>
									<input type="text" id="q_repydt" name="q_repydt"  class="form-control form-filter input-medium" >
								</div>
							</td>
							<td></td>
							<td colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom">
									<i class="fa fa-search"></i> 查询
								</button>
								<button class="btn btn-sm red filter-cancel">
									<i class="fa fa-times"></i> 清空
								</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- edit modal -->
			<!-- 
			<div id="editModal_role" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
							<form class="form-horizontal" role="form" id="edit_form">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">放款差异信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
									</div>
									<div class="alert alert-success display-hide">
										<button class="close" data-close="alert"></button>
										表单提交成功！返回信息 ：<span class="msg"></span>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">借据号</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="lncfno" name="lncfno" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入借据号">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">放款金额</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="lenval" name="lenval"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入放款金额">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label class="col-md-5 control-label">状态</label>
											<div class="col-md-7">
												<div>
													<input type="text" id="rostat" name="rostat"  class="form-control input-inline input-medium" maxlength="20" placeholder="输入状态">
												</div>
											</div>
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
			 -->
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/smy/scripts/lnbrepydiff.js"></script>
<script>
	jQuery(document).ready(function() {    
		lnbrepydiff.init();
	});
</script>
 --%>