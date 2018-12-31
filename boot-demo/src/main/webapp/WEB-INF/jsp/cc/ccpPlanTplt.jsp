<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">信用计划模板参数列表</span>
				<span class="caption-helper">信用计划模板参数配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container" >				
				<div class="table-actions-wrapper">
					<span>
					</span>
					<button id="add_pt_btn" class="btn btn-sm green table-group-action-submit"><i class="fa fa-plus"></i> 新增</button>
				</div>						
				
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
						<thead>
							<tr role="row" class="heading">
								<th width="20%">
									主信用计划模板号
								</th>
								<th width="15%">
									计划类型
								</th>																
								<th width="15%" >
									计划描述
								</th>
								<th width="15%" >
									多交易共享计划标识
								</th>
								<th width="15%" >
									是否参与还款分配标志
								</th>
								<th width="20%" colspan="2">
									操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>
									<input type="text" class="form-control form-filter input-sm" id="q_planbr" name="q_planbr" />
								</td>
								<td></td>
								<td><input type="text" class="form-control form-filter input-sm" id="q_plande" name="q_plande" /></td>
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
           <!--修改和新增 -->			
	<div id="edittypeModal" class="modal fade" tabindex="-1"  style="overflow-y:scroll;overflow-x:scroll;height:600px;" 
		 data-keyboard="false" data-width="1300"> 
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true"></button>
			<h4 class="modal-title">信用计划模板参数信息</h4>
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
									<label class="col-md-3 control-label">主信用计划模板号</label>
									<div class="col-md-9">
										<input type="text" name="planbr" id="planbr" maxlength="6" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="主信用计划模板号">
									</div>
								</div>				
								<div class="form-group">
									<label class="col-md-3 control-label">计划类型</label>
									<div class="col-md-9">
										<input type="hidden" name="plantp" id="plantp"
											class="form-control input-inline input-medium form-value"
											placeholder="计划类型">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">计划描述</label>
									<div class="col-md-9">
										<input type="text" name="plande" id="plande" maxlength="40" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="计划描述">
									</div>
								</div>
							</div>
							
							<div class="col-md-4">
								<div class="form-group">
									<label class="col-md-3 control-label">优先级</label>
									<div class="col-md-9">
										<input type="text" name="prorty" id="prorty" maxlength="6" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="优先级">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">多交易共享计划标识</label>
									<div class="col-md-9">
										<input type="hidden" name="mergfg" id="mergfg"
											class="form-control input-inline input-medium form-value"
											placeholder="多交易共享计划标识">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">是否参与还款分配标志</label>
									<div class="col-md-9">
										<input type="hidden" name="pmhier" id="pmhier"
											class="form-control input-inline input-medium form-value"
											placeholder="是否参与还款分配标志">
									</div>
								</div>
							</div>
							
							<div class="col-md-4">
								<div class="form-group">
									<label class="col-md-3 control-label">xfr计划号</label>
									<div class="col-md-9">
										<input type="text" name="xfrnbr" id="xfrnbr" maxlength="6" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="xfr计划号">
									</div>
								</div>
				
								<div class="form-group">
									<label class="col-md-3 control-label">计划保存天数</label>
									<div class="col-md-9">
										<input type="text" name="clndys" id="clndys" maxlength="8" autocomplete="off"
											class="form-control input-inline input-medium form-value"
											placeholder="计划保存天数">
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
							<th width="10%">
								余额成分类型
							</th>
							<th width="10%">
								余额成分编号
							</th>	
							<th width="10%">
								利率表编号	
							</th>																			
							<th width="10%" >
								起息日类型
							</th>
							<th width="10%">
								是否享受免息期	
							</th>
							<th width="10%">
								是否计入全额应还款金额
							</th>													
							<th width="10%" >
								是否计入OTB
							</th>
							<th width="10%">
								是否参与超限计算	
							</th>
							<th width="10%">
								当期最小还款额计算比例
							</th>													
							<th width="10%" >
								往期最小还款额计算比例
							</th>
						</tr>
						<tr>									
							<td>本金成分</td>
							<td>
								<input type="text" name="bnpidx1" id="bnpidx1" maxlength="8"
									placeholder="余额成分编号">
							</td>
							<td>
								<input type="hidden" name="intbid1" id="intbid1"
									placeholder="利率表编号">
							</td>
							<td>
								<input type="hidden" name="acrutp1" id="acrutp1"
								placeholder="起息日类型">
							</td>
							<td>
								<input type="hidden" name="intwav1" id="intwav1"
								placeholder="是否享受免息期">
							</td>
							<td>
								<input type="hidden" name="isfull1" id="isfull1"
								placeholder="是否计入全额应还款金额">
							</td>
							<td>
								<input type="hidden" name="isotbx1" id="isotbx1"
								placeholder="是否计入OTB">
							</td>
							<td>
								<input type="hidden" name="isovlm1" id="isovlm1"
								placeholder="是否参与超限计算">
							</td>
							<td>
								<input type="text" name="ctdrat1" id="ctdrat1" maxlength="15"
								placeholder="当期最小还款额计算比例">
							</td>
							<td>
								<input type="text" name="pstrat1" id="pstrat1" maxlength="15"
								placeholder="往期最小还款额计算比例">
							</td>
						</tr>
						<tr>									
							<td>利息成分</td>
							<td>
								<input type="text" name="bnpidx2" id="bnpidx2" maxlength="8"
									placeholder="余额成分编号">
							</td>
							<td>
								<input type="hidden" name="intbid2" id="intbid2"
									placeholder="利率表编号">
							</td>
							<td>
								<input type="hidden" name="acrutp2" id="acrutp2"
								placeholder="起息日类型">
							</td>
							<td>
								<input type="hidden" name="intwav2" id="intwav2"
								placeholder="是否享受免息期">
							</td>
							<td>
								<input type="hidden" name="isfull2" id="isfull2"
								placeholder="是否计入全额应还款金额">
							</td>
							<td>
								<input type="hidden" name="isotbx2" id="isotbx2"
								placeholder="是否计入OTB">
							</td>
							<td>
								<input type="hidden" name="isovlm2" id="isovlm2"
								placeholder="是否参与超限计算">
							</td>
							<td>
								<input type="text" name="ctdrat2" id="ctdrat2" maxlength="15"
								placeholder="当期最小还款额计算比例">
							</td>
							<td>
								<input type="text" name="pstrat2" id="pstrat2" maxlength="15"
								placeholder="往期最小还款额计算比例">
							</td>
						</tr>
						<tr>									
							<td>交易费成分</td>
							<td>
								<input type="text" name="bnpidx3" id="bnpidx3" maxlength="8"
									placeholder="余额成分编号">
							</td>
							<td>
								<input type="hidden" name="intbid3" id="intbid3" 
									placeholder="利率表编号">
							</td>
							<td>
								<input type="hidden" name="acrutp3" id="acrutp3"
								placeholder="起息日类型">
							</td>
							<td>
								<input type="hidden" name="intwav3" id="intwav3"
								placeholder="是否享受免息期">
							</td>
							<td>
								<input type="hidden" name="isfull3" id="isfull3"
								placeholder="是否计入全额应还款金额">
							</td>
							<td>
								<input type="hidden" name="isotbx3" id="isotbx3"
								placeholder="是否计入OTB">
							</td>
							<td>
								<input type="hidden" name="isovlm3" id="isovlm3"
								placeholder="是否参与超限计算">
							</td>
							<td>
								<input type="text" name="ctdrat3" id="ctdrat3" maxlength="15"
								placeholder="当期最小还款额计算比例">
							</td>
							<td>
								<input type="text" name="pstrat3" id="pstrat3" maxlength="15"
								placeholder="往期最小还款额计算比例">
							</td>
						</tr>
						<tr>									
							<td>滞纳金成分</td>
							<td>
								<input type="text" name="bnpidx4" id="bnpidx4" maxlength="8"
									placeholder="余额成分编号">
							</td>
							<td>
								<input type="hidden" name="intbid4" id="intbid4" 
									placeholder="利率表编号">
							</td>
							<td>
								<input type="hidden" name="acrutp4" id="acrutp4"
								placeholder="起息日类型">
							</td>
							<td>
								<input type="hidden" name="intwav4" id="intwav4"
								placeholder="是否享受免息期">
							</td>
							<td>
								<input type="hidden" name="isfull4" id="isfull4"
								placeholder="是否计入全额应还款金额">
							</td>
							<td>
								<input type="hidden" name="isotbx4" id="isotbx4"
								placeholder="是否计入OTB">
							</td>
							<td>
								<input type="hidden" name="isovlm4" id="isovlm4"
								placeholder="是否参与超限计算">
							</td>
							<td>
								<input type="text" name="ctdrat4" id="ctdrat4" maxlength="15"
								placeholder="当期最小还款额计算比例">
							</td>
							<td>
								<input type="text" name="pstrat4" id="pstrat4" maxlength="15"
								placeholder="往期最小还款额计算比例">
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
<script src="${ctx}/pages/cc/scripts/plantplt.js"></script>
<script>
	jQuery(document).ready(function(){
		PlanTplt.init();
	});
</script>