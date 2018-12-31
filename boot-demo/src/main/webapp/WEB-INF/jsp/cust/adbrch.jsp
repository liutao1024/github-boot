<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">新增机构</span>
				<span class="caption-helper">新增机构基本信息...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="adbrch-form" role="form">
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
					<div class="form-group ">
						<label class="col-md-4 control-label">机构号</label>
						<div class="col-md-8">
							<input type="text" id="brchno" name="brchno" class="form-control input-inline input-medium" maxlength="10" placeholder="输入机构号">
						</div>
					</div>
					
					<div class="form-group ">
						<label class="col-md-4 control-label">机构名称</label>
						<div class="col-md-8">
							<input type="text" id="brchna" name="brchna" class="form-control input-inline input-medium" maxlength="10" placeholder="输入机构名称">
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">分行号</label>
						<div class="col-md-8">
							<input type="text" id="cityno" name="cityno" class="form-control input-inline input-medium" maxlength="10" placeholder="输入分行号">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">部门类型</label>
						<div class="col-md-8">
							<input type="text" id="brchtp" name="brchtp" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择冻部门类型">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">机构日结状态</label>
							<div class="col-md-8">
								<input type="text" id="brchst" name="brchst" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择机构日结状态">
							</div>
					</div>
			
					<div class="form-group ">
						<label class="col-md-4 control-label">地址</label>
						<div class="col-md-8">
							<input type="text" id="addres" name="addres" class="form-control input-inline input-medium" maxlength="10" placeholder="输入地址">
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">邮编</label>
						<div class="col-md-8">
							<input type="text" id="postcd" name="postcd" class="form-control input-inline input-medium" maxlength="10" placeholder="输入邮编">
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group ">
						<label class="col-md-4 control-label">机构号简码</label>
						<div class="col-md-8">
							<input type="text" id="brnosh" name="brnosh" class="form-control input-inline input-medium" maxlength="10" placeholder="输入机构简称">
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">机构简称</label>
						<div class="col-md-8">
							<input type="text" id="brsmna" name="brsmna" class="form-control input-inline input-medium" maxlength="10" placeholder="输入机构简称">
						</div>
					</div>
					<div class="form-group ">
						<label class="col-md-4 control-label">上级节点</label>
						<div class="col-md-8">
							<input type="text" id="nodebr" name="nodebr" class="form-control input-inline input-medium" maxlength="10" placeholder="输入上级节点">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">机构级别</label>
						<div class="col-md-8">
							<input type="text" id="brchlv" name="brchlv" class="form-control input-inline input-medium" maxlength="10" placeholder="输入机构级别">
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">是否中心标志</label>
							<div class="col-md-8">
								<input type="text" id="centtg" name="centtg" class="form-control input-inline input-medium" maxlength="10" placeholder="请选择是否中心标志">
							</div>
					</div>
					<div class="form-group">
						<label class="col-md-4 control-label">电话</label>
						<div class="col-md-8">
							<input type="text" id="telecd" name="telecd" class="form-control input-inline input-medium" maxlength="10" placeholder="输入电话">
						</div>
					</div>
				</div>
				</div>
					<div class="form-actions cust-action">
					<button type="submit" class="btn blue" id="submit">新增机构</button>
				</div>
			</form>
		</div>	
		</div>
	</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script type="text/javascript" src="${ctx}/pages/cust/scripts/adbrch.js" ></script>
<script type="text/javascript">
	jQuery(document).ready(function() {
			if (jQuery().datepicker) {
				$('.date-picker').datepicker({
					rtl : Metronic.isRTL(),
					orientation : "left",
					autoclose : true,
					language : 'zh-CN',
				});
			};
		console.log("ready");
		adbrch.init();
		
	});

</script>


