<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">利率代码定义列表</span>
				<span class="caption-helper">管理利率代码定义配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" >
			
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="8%">
								利率代码
							</th>
							<th width="8%">
								利率代码名称
							</th>
							<th width="8%">
								利率代码类型
							</th>
							<th width="8%">
								参考利率类型
							</th>
							<th width="12%">
								生效日期
							</th>
							
							<th width="16%" colspan="2">
								 操作
							</th> 
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="q_intrcd" name="q_intrcd" />
							</td>
							<td>
					            <input type="text" class="form-control form-filter input-sm" id="q_intrna" name="q_intrna" /> 
							</td>
							<td>
				        	    <input type="hidden"  class="form-control form-filter input-sm" id="q_incdtp" name="q_incdtp" /> 
							</td>
							<td>
							   <input type="hidden"  class="form-control form-filter input-sm" id="q_rfirtp" name="q_rfirtp" /> 
							</td>
							<td>
							   <input type="text"  class="form-control form-filter input-sm" id="q_efctdt" name="q_efctdt" /> 
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
					<h4 class="modal-title">期限参数信息</h4>
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
										<label class="col-md-3 control-label">利率代码</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="intrcd" name="intrcd" readOnly class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入利率代码">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">利率代码名称</label>
										<div class="col-md-9">
											<input type="text" id="intrna" name="intrna"  class="form-control input-inline input-medium form-value"  maxlength="80" placeholder="输入利率代码名称">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">利率代码类型</label>
										<div class="col-md-9">
											<input type="hidden" id="incdtp" name="incdtp"  class="form-control input-inline input-medium form-value" maxlength="3" placeholder="选择利率代码类型">
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">参考利率类型</label>
										<div class="col-md-9">
											<input type="hidden" id="rfirtp" name="rfirtp"  class="form-control input-inline input-medium form-value" maxlength="3" placeholder="选择参考利率类型">
										</div>
									</div>
								<div class="form-group">
										<label class="col-md-3 control-label">生效日期</label>										
										<div class="col-md-9">
										   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
												<input type="text" id="efctdt" name="efctdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入生效日期">
												<span class="input-group-btn">
												<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
												</span>
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
	<!-- 行内基准利率 -->
	<div aria-hidden="true" style="display: none;" id="bki_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">行内基准利率</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_bki_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_bki_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="bki_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="8%">货币代号</th>
										<th width="8%">存期</th>
										<th width="8%">生效日期</th>
										<th width="8%">失效日期</th>
										<th width="8%">利率来源</th>					
										<th width="8%">利率</th>
										<th width="8%">参考利率代码</th>
										<th width="8%">参考利率存期</th>
										<th width="8%">利率浮动方式</th>
										<th width="8%">利率浮动点数</th>
										<th width="8%">利率浮动百分比</th>
										<th width="8%">说明信息</th>										
										<th width="10%" colspan="2">操作</th>
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
	<!-- edit bki modal -->
		<div id="editBkiModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">行内基准利率信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_bki_form">
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
											<label class="col-md-3 control-label">利率代码</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="bki_intrcd" name="intrcd" readOnly class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入利率代码">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">存期</label>
											<div class="col-md-9">
												<input type="hidden" id="bki_depttm" name="depttm" readOnly class="form-control input-inline input-medium form-value" maxlength="3" placeholder="选择存期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">生效日期</label>
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="bki_efctdt" name="efctdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入生效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
										</div>
										 <div class="form-group">
											<label class="col-md-3 control-label">利率来源</label>
											<div class="col-md-9">
												<input type="text" id="bki_intrsr" name="intrsr" readOnly class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率类型">
											</div>
										</div>
										
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率存期</label>
											<div class="col-md-9">
												<input type="hidden" id="bki_rfirtm" name="rfirtm"  class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率存期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动方式</label>
											<div class="col-md-9">
												<input type="text" id="bki_flirwy" name="flirwy"  class="form-control input-inline input-medium form-value" maxlength="8" placeholder="选择利率浮动方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动点数</label>
											<div class="col-md-9">
												<input type="text" id="bki_flirvl" name="flirvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率浮动点数">
											</div>
										</div>																			
								    </div>
								    <div class="col-md-6">
								       <div class="form-group">
											<label class="col-md-3 control-label">&nbsp;</label>
											<div class="col-md-9">
												<div>	
												<span>&nbsp;&nbsp;&nbsp;</span>							
												</div>
											</div>
									    </div>
										<div class="form-group">
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="hidden" id="bki_crcycd" name="crcycd" readOnly class="form-control input-inline input-medium form-value"  maxlength="3" placeholder="选择货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">失效日期</label>										
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="bki_inefdt" readOnly name="inefdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入失效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
									   </div>																										
									   <div class="form-group">
											<label class="col-md-3 control-label">利率</label>
											<div class="col-md-9">
												<input type="text" id="bki_intrvl" name="intrvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率">
											</div>
										</div>										
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率代码</label>
											<div class="col-md-9">
												<input type="text" id="bki_rfircd" name="rfircd"  class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入参考利率代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动百分比</label>
											<div class="col-md-9">
												<input type="text" id="bki_flirrt" name="flirrt"  class="form-control input-inline input-medium form-value" maxlength="21" placeholder="输入利率浮动百分比">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">说明信息</label>
											<div class="col-md-9">
												<input type="text" id="bki_remark" name="remark"  class="form-control input-inline input-medium form-value" maxlength="80" placeholder="输入说明信息">
											</div>
										</div>	
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_bki">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--end edit bki modal -->	
<!-- 行内基准利率 结束-->	
<!-- 行内分层利率 -->
	<div aria-hidden="true" style="display: none;" id="fen_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">行内分层利率</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_fen_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_fen_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="fen_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="8%">货币代号</th>
										<th width="8%">层次金额下限</th>
										<th width="8%">生效日期</th>
										<th width="8%">失效日期</th>
										<th width="8%">利率来源</th>					
										<th width="8%">利率</th>
										<th width="8%">参考利率代码</th>
										<th width="8%">参考利率存期</th>
										<th width="8%">利率浮动方式</th>
										<th width="8%">利率浮动点数</th>
										<th width="8%">利率浮动百分比</th>
										<th width="8%">说明信息</th>										
										<th width="10%" colspan="2">操作</th>
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
	<!-- edit fen modal -->
		<div id="editfenModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">行内分层利率信息</h4>
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
									<div class="col-md-6">
									    
										<div class="form-group">
											<label class="col-md-3 control-label">利率代码</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="fen_intrcd" name="intrcd" readOnly class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入利率代码">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">层次金额下限</label>
											<div class="col-md-9">
												<input type="text" id="fen_lvamlm" name="lvamlm" readOnly class="form-control input-inline input-medium form-value" maxlength="21" placeholder="层次金额下限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">生效日期</label>
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="fen_efctdt" name="efctdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入生效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
										</div>
										 <div class="form-group">
											<label class="col-md-3 control-label">利率来源</label>
											<div class="col-md-9">
												<input type="text" id="fen_intrsr" name="intrsr" readOnly class="select-close-1 form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率代码</label>
											<div class="col-md-9">
												<input type="text" id="fen_rfircd" name="rfircd"  class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入参考利率代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动方式</label>
											<div class="col-md-9">
												<input type="text" id="fen_flirwy" name="flirwy"  class="select-close-2 form-control input-inline input-medium form-value" maxlength="8" placeholder="选择利率浮动方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动点数</label>
											<div class="col-md-9">
												<input type="text" id="fen_flirvl" name="flirvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率浮动点数">
											</div>
										</div>																			
								    </div>
								    <div class="col-md-6">
								       <div class="form-group">
											<label class="col-md-3 control-label">&nbsp;</label>
											<div class="col-md-9">
												<div>	
												<span>&nbsp;&nbsp;&nbsp;</span>							
												</div>
											</div>
									    </div>
										<div class="form-group">
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="hidden" id="fen_crcycd" name="crcycd" readOnly class="select-close-3 form-control input-inline input-medium form-value"  maxlength="3" placeholder="选择货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">失效日期</label>										
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="fen_inefdt" readOnly name="inefdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入失效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
									   </div>																										
									   <div class="form-group">
											<label class="col-md-3 control-label">利率</label>
											<div class="col-md-9">
												<input type="text" id="fen_intrvl" name="intrvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率">
											</div>
										</div>										
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率存期</label>
											<div class="col-md-9">
												<input type="hidden" id="fen_rfirtm" name="rfirtm"  class="select-close-4 form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率存期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动百分比</label>
											<div class="col-md-9">
												<input type="text" id="fen_flirrt" name="flirrt"  class="form-control input-inline input-medium form-value" maxlength="21" placeholder="输入利率浮动百分比">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">说明信息</label>
											<div class="col-md-9">
												<input type="text" id="fen_remark" name="remark"  class="form-control input-inline input-medium form-value" maxlength="80" placeholder="输入说明信息">
											</div>
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
<!-- 行内分层利率 结束-->	
<!-- 行内靠档利率 -->
	<div aria-hidden="true" style="display: none;" id="rli_setting"
	class="modal fade" tabindex="-1" data-width="1200">
	<div class="modal-dialog modal-full">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close closeModal" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">行内靠档利率</h4>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="table-container" id="add_rli_set">
							<div class='table-actions-wrapper'><span></span>
							  <button id='add_rli_btn' class='btn btn-sm green table-group-action-submit'>新增</button>
							</div>
							<table class="table table-striped table-bordered table-hover"
								id="rli_ajax">
								<thead>
									<tr role="row" class="heading">
										<th width="8%">货币代号</th>
										<th width="8%">档次存期天数下限</th>
										<th width="8%">生效日期</th>
										<th width="8%">失效日期</th>
										<th width="8%">利率来源</th>					
										<th width="8%">利率</th>
										<th width="8%">参考利率代码</th>
										<th width="8%">参考利率存期</th>
										<th width="8%">利率浮动方式</th>
										<th width="8%">利率浮动点数</th>
										<th width="8%">利率浮动百分比</th>
										<th width="8%">说明信息</th>										
										<th width="10%" colspan="2">操作</th>
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
	<!-- edit rli modal -->
		<div id="editrliModal" class="modal fade" data-width="800" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">行内靠档利率信息</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="edit_rli_form">
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
											<label class="col-md-3 control-label">利率代码</label>
											<div class="col-md-9">
												<div>
													<input type="text" id="rli_intrcd" name="intrcd" readOnly class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入利率代码">
												</div>
											</div>
									    </div>
									    <div class="form-group">
											<label class="col-md-3 control-label">档次存期天数下限</label>
											<div class="col-md-9">
												<input type="text" id="rli_dayllm" name="dayllm" readOnly class="form-control input-inline input-medium form-value" maxlength="21" placeholder="输入档次存期天数下限">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">生效日期</label>
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="rli_efctdt" name="efctdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入生效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
										</div>
										 <div class="form-group">
											<label class="col-md-3 control-label">利率来源</label>
											<div class="col-md-9">
												<input type="text" id="rli_intrsr" name="intrsr" readOnly class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率类型">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率代码</label>
											<div class="col-md-9">
												<input type="text" id="rli_rfircd" name="rfircd"  class="form-control input-inline input-medium form-value" maxlength="20" placeholder="输入参考利率代码">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动方式</label>
											<div class="col-md-9">
												<input type="text" id="rli_flirwy" name="flirwy"  class="form-control input-inline input-medium form-value" maxlength="8" placeholder="选择利率浮动方式">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动点数</label>
											<div class="col-md-9">
												<input type="text" id="rli_flirvl" name="flirvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率浮动点数">
											</div>
										</div>																			
								    </div>
								    <div class="col-md-6">
								       <div class="form-group">
											<label class="col-md-3 control-label">&nbsp;</label>
											<div class="col-md-9">
												<div>	
												<span>&nbsp;&nbsp;&nbsp;</span>							
												</div>
											</div>
									    </div>
										<div class="form-group">
											<label class="col-md-3 control-label">货币代号</label>
											<div class="col-md-9">
												<input type="hidden" id="rli_crcycd" name="crcycd" readOnly class="form-control input-inline input-medium form-value"  maxlength="3" placeholder="选择货币代号">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">失效日期</label>										
											<div class="col-md-9">
											   <div class="input-group col-md-9 input-medium date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
													<input type="text" id="rli_inefdt" readOnly name="inefdt" class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入失效日期">
													<span class="input-group-btn">
													<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
													</span>
												</div>
											</div>
									   </div>																										
									   <div class="form-group">
											<label class="col-md-3 control-label">利率</label>
											<div class="col-md-9">
												<input type="text" id="rli_intrvl" name="intrvl"  class="form-control input-inline input-medium form-value" maxlength="11" placeholder="输入利率">
											</div>
										</div>										
										<div class="form-group">
											<label class="col-md-3 control-label">参考利率存期</label>
											<div class="col-md-9">
												<input type="hidden" id="rli_rfirtm" name="rfirtm"  class="form-control input-inline input-medium form-value" maxlength="8" placeholder="输入参考利率存期">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">利率浮动百分比</label>
											<div class="col-md-9">
												<input type="text" id="rli_flirrt" name="flirrt"  class="form-control input-inline input-medium form-value" maxlength="21" placeholder="输入利率浮动百分比">
											</div>
										</div>
										<div class="form-group">
											<label class="col-md-3 control-label">说明信息</label>
											<div class="col-md-9">
												<input type="text" id="rli_remark" name="remark"  class="form-control input-inline input-medium form-value" maxlength="80" placeholder="输入说明信息">
											</div>
										</div>	
									</div>							
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_save_rli">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!--end edit rli modal -->	
<!-- 行内靠档利率结束-->	
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/prod/scripts/intIntr.js"></script>
<script src="${ctx}/pages/prod/scripts/bkiIntr.js"></script>
<script src="${ctx}/pages/prod/scripts/fenIntr.js"></script>
<script src="${ctx}/pages/prod/scripts/rliIntr.js"></script>
<script>
	jQuery(document).ready(function() {    
		
		intIntr.init();		 
	});
</script>
