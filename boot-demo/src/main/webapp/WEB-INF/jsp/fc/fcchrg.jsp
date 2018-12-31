<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">小马备付金充值</span>
				<span class="caption-helper">小马备付金充值...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="file-form form-horizontal intran-form" id = "file-form">
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="form-group">
					<div class="col-md-6">
						<div class="form-group">
							<label class="control-label col-md-6">小马备付金余额</label>
							<div class="input-group col-md-6">
								<input type="text" id="dredbl_1" class="form-control" disabled name="dredbl_1">
							</div>
						</div>
					</div>
					<div class="form-actions file-action col-md-6"
						style="text-align: right;">
						
					</div>
				</div>
				<div class="clean"></div>
				<br/>
				<br/>
				<div class="form-group">
					<div class="col-md-6">
						<div class="form-group">
							<label class="control-label col-md-6">交易金额</label>
							<div class="input-group col-md-6 input-icon">
								<!-- <input class="form-control placeholder-no-fix" type="text" disabled placeholder="交易金额,保留两位有效数字" id="tranam" name="tranam"/> -->
								<input type="text" id="tranam" name="tranam" class="form-control input-inline input-medium" maxlength="50" placeholder="交易金额,保留两位有效数字">
							</div>
						</div>
					</div>
					<div class="form-actions intran-action">
						<button type="button" class="btn blue" id="submit">确认</button>
						<button type="button" class="btn gray" id="cancle">清空</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<div id="myModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<i class="fa fa-cogs font-green-sharp"></i>
		<span class="caption-subject font-green-sharp bold uppercase">充值结果</span>
	</div>
	<div class="modal-body">
	</div>
</div>
<script src="${ctx}/pages/fc/scripts/fcchrg.js" type="text/javascript" ></script>
<script>
	jQuery(document).ready(function() {    
		fcchrg.init();
	});
</script>