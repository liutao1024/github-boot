<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">客户余额检查信息</span>
				<span class="caption-helper">客户余额检查信息...</span>
			</div>
		</div>
		<div class="portlet-body">
		<form class="form-horizontal cust-form" id="custye-form" role="form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">平台会员号</label>
					<div class="input-icon col-md-9">
						<input type="text" id="plafno" name="plafno" class="form-control input-inline input-medium"  placeholder="输入平台服务商会员号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">用户会员号</label>
					<div class="input-icon col-md-9">
						<i class="fa fa-book"></i>
						<input type="text" id="custno" name="custno" class="form-control input-inline input-medium"  placeholder="输入用户服务商会员号">
					</div>
				</div>
				<div class="form-group col-md-6">
					<label class="col-md-3 control-label">处理结果状态</label>
					<div class="input-icon col-md-9">
						<input type="text" id="chekst" name="chekst" class="form-control input-inline input-medium" >
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">查询</button>
					<button type="button" class="btn gray" id="cancle">清空</button>
				</div>
				<div class="cif-pp"></div>
			</form>
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="custye_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<th width="10%">
								法人代码
							</th>	
							<th width="12%">
								平台服务商会员号
							</th>
							<th width="12%">
								用户服务商会员号
							</th>													
							<th width="8%">
								期末余额
							</th>
							<th width="6%">
								扩展字段
							</th>
							<th width="10%">
								错误提示
							</th>
							<th width="6%">
								检查状态
							</th>
							<th width="8%">
								维护日期
							</th>
							<th width="8%">
								维护时间
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
	</div>
	
	<div class="inbox-content"></div>
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/cust/scripts/qrcuye.js"></script>
<script>
	jQuery(document).ready(function() {    
		Qrcuye.init();
	});
</script>