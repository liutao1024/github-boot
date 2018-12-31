<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-tags font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">待办事项</span>
				<span class="caption-helper">已处理内容</span>
			</div>
		</div>
		
			<div class="table-container">
				
				<table class="table table-striped table-bordered table-hover"
					id="datatable_end">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">主题ID</th>
							<th scope="col">主题名称</th>
							<th scope="col">主题类型</th>
							
							<th scope="col">紧急标志</th>
							
							<th scope="col">发布人名称</th>						
							
							<th scope="col">失效日期</th>
							<!-- <th scope="col" colspan="2">操作</th> -->
						</tr>
						<tr role="row" class="filter">
							<td>								
							</td>
							<td>							
							</td>
							
							<td>
					<input type="hidden"  class="form-control form-filter input-sm" id="q_subjtp" name="q_subjtp" /> 
							</td>
							
							<td>
					<input type="hidden"  class="form-control form-filter input-sm" id="q_emrgfg" name="q_emrgfg" /> 
							</td>
							<td>
							</td>
							
							
							<td  colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
						
					</thead>
					
				</table>
			</div>
			<!-- edit modal -->
			
		
	</div>
	<div id="dealhtml" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">已处理事项</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="deal_load">
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button'  class='btn  btn-default' data-dismiss="modal">关闭</button>
			</div>
		</div>
	

	
</div>
<script src="${ctx}/pages/bbs/scripts/enddeal.js"></script>
<script>
	jQuery(document).ready(function() {
		enddeal.init();
	});
</script>