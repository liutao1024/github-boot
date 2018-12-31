<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">预制卡</span>
				<span class="caption-helper">状态查询...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
				<form class="form-horizontal" role="form" id="task_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！
							</div>
						</div>
					
						<div class="form-group col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">预制卡总数：</label>
							<div class="col-md-9">

							<input id="preconts" class="form-control input-inline input-medium form-value" type="text"  maxlength="5" disabled name="preconts" name="shoamt" style="margin-top: 33px;" >

							</div>
							
						</div>
						<div class="form-group col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">预制卡未被使用数：</label>
							<div class="col-md-9">
												
							<input id="preconte" class="form-control input-inline input-medium form-value" type="text"  maxlength="5" disabled name="preconte" name="shoamt" style="margin-top: 33px;" >
							
							</div>
							
						</div>
						<div class="form-group col-md-2">
							<button id="queryf" class="btn btn_sm green"  type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>查询
							</button>
						</div>
						
						
						<div class="form-group col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">预制卡生成：</label>
							<div class="input-icon col-md-9">
							
							<input id="futday" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" name="futday" style="margin-top: 33px;" placeholder="每次生成数量小于500000张">
							
							</div>
						</div>
						<div class="form-group col-md-2">
							<button id="trans" class="btn btn_sm blue"  type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>生成
							</button>
						</div>
							</form>
			         </div>			
				</div>
			</div>
		</div>
		</div>
	


<script type="text/javascript"src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script><script type="text/javascript"src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/task/scripts/precar.js"></script>
<script type="text/javascript">

</script>
<script>
	jQuery(document).ready(function() {
		Precar.init();
	});
</script>