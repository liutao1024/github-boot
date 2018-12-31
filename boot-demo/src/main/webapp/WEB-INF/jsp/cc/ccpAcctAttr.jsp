<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">账户属性参数列表</span>
				<span class="caption-helper">账户属性参数配置...</span>
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
								<th width="10%">
									账户属性ID
								</th>
								<th width="10%">
									账户类型
								</th>																
								<th width="15%" >
									到期还款日类型
								</th>
								<th width="15%" >
									到期还款宽限天数
								</th>
								<th width="15%" >
									约定还款日标识
								</th>
								<th width="15%" >
									拖欠处理日标识
								</th>
								<th width="20%" colspan="2" >
									操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_attrid" name="q_attrid" />
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
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
	<div id="edittypeModal" class="modal fade" tabindex="-1"  style="overflow-y:scroll;height:600px;" 
		data-backdrop="static" data-keyboard="false" data-width="1300">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true"></button>
			<h4 class="modal-title">账户属性参数信息</h4>
		</div>		
		<form class="form-horizontal control-label" role="form" id="lock_from">	
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
							<div class="col-md-4">
								<div class="form-group">
									<label class="col-md-3 control-label">账户属性ID</label>
									<div class="col-md-9">
										<input type="text" name="attrid" id="attrid" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="账户属性ID">
									</div>
								</div>				
								<div class="form-group">
									<label class="col-md-3 control-label">账户类型</label>
									<div class="col-md-9">
										<input type="hidden" name="accttp" id="accttp"
											class="form-control input-inline input-medium form-value"
											placeholder="账户类型">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">到期还款日类型</label>
									<div class="col-md-9">
										<input type="hidden" name="dudttp" id="dudttp"
											class="form-control input-inline input-medium form-value"
											placeholder="到期还款日类型">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">到期还款日天数</label>
									<div class="col-md-9">
										<input type="text" name="dudays" id="dudays" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="到期还款日天数">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">到期还款固定日</label>
									<div class="col-md-9">
										<input type="text" name="dudate" id="dudate" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="到期还款固定日">
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-group">
									<label class="col-md-3 control-label">大小月统一到期还款日</label>
									<div class="col-md-9">
										<input type="hidden" name="fixfgx" id="fixfgx"
											class="form-control input-inline input-medium form-value"
											placeholder="大小月统一到期还款日">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">大小月统一月天数</label>
									<div class="col-md-9">
										<input type="text" name="fixday" id="fixday" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="大小月统一月天数">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">到期还款短信/信函提前天数</label>
									<div class="col-md-9">
										<input type="text" name="msgday" id="msgday" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="到期还款短信/信函提前天数">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">到期还款宽限天数</label>
									<div class="col-md-9">
										<input type="text" name="graday" id="graday" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="到期还款宽限天数">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">约定还款固定日</label>
									<div class="col-md-9">
										<input type="text" name="dddate" id="dddate" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="约定还款固定日">
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-group">
									<label class="col-md-3 control-label">约定还款日标识</label>
									<div class="col-md-9">
										<input type="hidden" name="dddttp" id="dddttp"
											class="form-control input-inline input-medium form-value"
											placeholder="约定还款日标识">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">约定还款提前天数</label>
									<div class="col-md-9">
										<input type="text" name="dddays" id="dddays" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="约定还款提前天数">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">拖欠处理日标识</label>
									<div class="col-md-9">
										<input type="hidden" name="delfgx" id="delfgx"
											class="form-control input-inline input-medium form-value"
											placeholder="拖欠处理日标识">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">拖欠短信/信函产生标识天数</label>
									<div class="col-md-9">
										<input type="text" name="delday" id="delday" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="拖欠短信/信函产生标识天数">
									</div>
								</div>
							</div>							
						</div>										
					
				</div>
			</div>
		</div>
		<div>
			<table class="table table-striped table-bordered table-hover" >
				<thead>
					<tr role="row" class="heading">
						<th width="15%">
							账龄	
						</th>
						<th width="25%">
							还款冲销优先标示
						</th>											

	
						<th width="25%" >
							还款冲销顺序表id
						</th>
					</tr>
					<tr>									
						<td>C</td>
						<td>
							<input type="hidden" name="hirfgc" id="hirfgc"
								placeholder="账龄C对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hiridc" id="hiridc" maxlength="10" autocomplete="off"
							placeholder="账龄C对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>1</td>
						<td>
							<input type="hidden" name="hirfg1" id="hirfg1"
								placeholder="账龄1对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid1" id="hirid1" maxlength="10" autocomplete="off"
							placeholder="账龄1对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>2</td>
						<td>
							<input type="hidden" name="hirfg2" id="hirfg2"
								placeholder="账龄2对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid2" id="hirid2" maxlength="10" autocomplete="off"
							placeholder="账龄2对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>3</td>
						<td>
							<input type="hidden" name="hirfg3" id="hirfg3"
								placeholder="账龄3对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid3" id="hirid3" maxlength="10" autocomplete="off"
							placeholder="账龄3对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>4</td>
						<td>
							<input type="hidden" name="hirfg4" id="hirfg4"
								placeholder="账龄4对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid4" id="hirid4" maxlength="10" autocomplete="off"
							placeholder="账龄4对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>5</td>
						<td>
							<input type="hidden" name="hirfg5" id="hirfg5"
								placeholder="账龄5对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid5" id="hirid5" maxlength="10" autocomplete="off"
							placeholder="账龄5对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>6</td>
						<td>
							<input type="hidden" name="hirfg6" id="hirfg6"
								placeholder="账龄6对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid6" id="hirid6" maxlength="10" autocomplete="off"
							placeholder="账龄6对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>7</td>
						<td>
							<input type="hidden" name="hirfg7" id="hirfg7"
								placeholder="账龄7对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid7" id="hirid7" maxlength="10" autocomplete="off"
							placeholder="账龄7对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>8</td>
						<td>
							<input type="hidden" name="hirfg8" id="hirfg8"
								placeholder="账龄8对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid8" id="hirid8" maxlength="10" autocomplete="off"
							placeholder="账龄8对应还款冲销顺序">
						</td>
					</tr>
					<tr>									
						<td>9</td>
						<td>
							<input type="hidden" name="hirfg9" id="hirfg9"
								placeholder="账龄9对应还款冲销标识">
						</td>
						<td>
							<input type="text" name="hirid9" id="hirid9" maxlength="10" autocomplete="off"
							placeholder="账龄9对应还款冲销顺序">
						</td>
					</tr>
				</thead>
			</table>							
		</div>
		</form>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="btn_save_type">保存</button>
		</div>	
	</div>
</div>
<script src="${ctx}/pages/cc/scripts/acctattr.js"></script>
<script>
	jQuery(document).ready(function(){
		AcctAttr.init();
	});
</script>