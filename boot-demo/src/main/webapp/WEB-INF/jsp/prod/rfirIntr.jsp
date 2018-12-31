<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">参考利率列表</span>
				<span class="caption-helper">管理参考利率配置...</span>
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
								参考利率代码
							</th>
							<th width="13%">
								 货币代号
							</th>
							<th width="13%">
								参考利率存期
							</th>
							<th width="8%">
								生效日期
							</th>
							<th width="8%">
								失效日期
							</th>
							<th width="8%">
								基准利率
							</th>
							<th width="10%">
								年月利率标志
							</th>
							<th width="10%">
								说明信息
							</th>
							<th width="24" colspan="2">
								 操作
							</th> 
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_rfircd" name="q_rfircd" />
							</td>
							<td>
					<input type="hidden" class="form-control form-filter input-sm" id="q_crcycd" name="q_crcycd" /> 
							</td>
							<td>
					<input type="hidden"  class="form-control form-filter input-sm" id="q_rfirtm" name="q_rfirtm" /> 
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
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
			<!-- edit modal -->
			<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">参考利率信息</h4>
				</div>
				<div class="modal-body">
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
									<div class="form-group">
										<label class="col-md-3 control-label">参考利率代码</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="rfircd" name="rfircd" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入参考利率代码">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">货币代号</label>
										<div class="col-md-9">
											<input type="hidden" id="crcycd" name="crcycd" readOnly class="form-control input-inline input-medium" maxlength="3" placeholder="输入货币代号">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">参考利率存期</label>
										<div class="col-md-9">
											<input type="hidden" id="rfirtm" name="rfirtm" readOnly class="form-control input-inline input-medium" maxlength="3" placeholder="输入参考利率存期">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">生效日期</label>
										<div class="col-md-9">
										   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<span class="input-group-btn"> -->
												<button class="btn default" disabled="disabled" type="button"><i class="fa fa-calendar"></i></button>
												</span>
												<input type="text" id="efctdt" name="efctdt" disabled="disabled" class="form-control input-inline input-medium" maxlength="8" placeholder="输入生效日期">
											</div>							
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">失效日期</label>
										<div class="col-md-9">
										   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<span class="input-group-btn">
												<button class="btn default"  type="button"><i class="fa fa-calendar"></i></button>
												</span>
												<input type="text" id="inefdt" name="inefdt"  class="form-control input-inline input-medium" maxlength="8" placeholder="输入失效日期">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">基准利率</label>
										<div class="col-md-9">
											<input type="text" id="baseir" name="baseir" class="form-control input-inline input-medium" maxlength="11" placeholder="输入基准利率">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">年月利率标志</label>
										<div class="col-md-9">
											<input type="hidden" id="intrfg" name="intrfg" class="form-control input-inline input-medium" maxlength="1" placeholder="输入年月利率标志">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">说明信息</label>
										<div class="col-md-9">
											<input type="text" id="remark" name="remark" class="form-control input-inline input-medium" maxlength="80" placeholder="输入说明信息">
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
<script src="${ctx}/pages/prod/scripts/rfirIntr.js"></script>
<script>
	jQuery(document).ready(function() {    
		rfirIntr.init();
	});
</script>
