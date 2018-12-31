<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-tags font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">已发送事项</span>
				<span class="caption-helper">已发送明细</span>
			</div>
		</div>
		<div class="portlet-body">
			
				
				<table class="table table-striped table-bordered table-hover"
					id="datatable_send">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">主题ID</th>
							<th scope="col">主题名称</th>
							<th scope="col">主题类型</th>																				
							<th scope="col">紧急标志</th>
							<th scope="col">接受柜员</th>
							<th scope="col">接受角色</th>
							<th scope="col">生效日期</th>
							<th scope="col">失效日期</th>
							<th scope="col">处理柜员</th>
							<!-- <th scope="col" colspan="4">操作</th> -->
						</tr>
						
					</thead>
					
				</table>
			
		
		</div>
	</div>
	
	
	<div id="ydetail" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">已处理内容</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="send1_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn close' data-dismiss="modal">关闭</button>
			</div>
		</div>
	
</div>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/bbs/scripts/endsend.js"></script>

<script>
   jQuery(document).ready(function() {
	   endsend.init();
});
</script>