<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">联合贷款备付金账户汇总对账单</span>
				<span class="caption-helper">联合贷款备付金账户汇总对账单</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "file-form">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-3">
					<div class="form-group">
						<label class="control-label col-md-4">对账日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "check-date" class="form-control" name="checkdate">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				
				<div class="form-actions file-action col-md-3">
					<button type="button" class="btn blue" id="submit">导入文件</button>
				</div>
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
		  <!-- id="cppchk_ajax -->
		  
			 <table  class="table table-striped table-bordered table-hover" id = "tablesa"  style="font-size: 15px">
			     <thead>
			     <tr  role="row" class="heading">
			        <td   width= "15%"></td>  
			        <td colspan="5" width="8%">
			                                                          包商银行联合贷款备付金账户（微众银行端 ）汇总对账单
			        </td>
			     </tr>
			     <tr>
			        <td   width= "8%">备付金账号：</td>
			        <td    colspan="2"></td>  
			        <td   width= "8%">户名：</td>
			        <td   colspan="2"   ></td>  
			     </tr>
			      <tr>
			        <td   width= "8%">开户银行：</td>
			        <td   colspan="5"   >深圳前海微众银行股份有限公司</td>
			     </tr>
			      <tr>
			        <td   width= "8%">日期：</td>
			        <td   colspan="5"   ></td>
			     </tr>
			      <tr>
			        <td   width= "8%">上日余额：</td>
			        <td   colspan="2"></td>
			        <td   width= "8%"  >今日余额：</td> 
			        <td   colspan="2"></td>
			         
			     </tr>
			      <tr>
			        <td   width= "15%">其他划入款项：</td>
			        <td   colspan="2"></td>  
			        <td   width= "15%">其他划出款项：</td>
			        <td   colspan="2"></td>  
			     </tr>
			     
			     </thead>
			 
			    </table>
			    
				
			</div>
	   </div>
	   <div class="portlet-body">
	   		<table class="table table-striped table-bordered table-hover" id="cppchk_ajax">
					<thead>
						<tr role="row" class="heading">	
							
							<th width="12%">
								银团编号
							</th>
							<th width="15%">
								放款金额
							</th>
							<th width="15%">
								放款撤销金额
							</th>
							<th width="12%">
								还款金额
							</th>
							<th width="15%">
								还款撤销金额
							</th>
							
						</tr>
						
					</thead>
					<tbody>
					</tbody>
				</table>
				<div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="totle">
					<thead>
						<tr role="row" class="heading">	
							<th width="">
							</th>
							<th width="">
								放款金额
							</th>
							<th width="" >
								放款撤销金额
							</th>
							<th width="">
								还款金额
							</th>
							<th width="">
								还款撤销金额
							</th>
							
						</tr>	
						<tr><td height="30px">合计：</td><td height="30px"></td><td height="30px"></td><td height="30px"></td><td height="30px"></td></tr>		
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
		<div class="clean_t"></div>
	</div>
</div>
<div id="myModal" class="modal fade bs-modal-sm" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-body">
		<img alt="" src="${ctx}/assets/global/img/loading-spinner-grey.gif"><span>处理中</span>
	</div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/liquidation/scripts/provis.js"></script>
<script>
	jQuery(document).ready(function() {    
		provis.init();
	});
</script>