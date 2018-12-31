<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">待处理</span>
				<span class="caption-helper">待处理内容</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span>
					</span>
					
				</div>
				<table class="table table-striped table-bordered table-hover" id="datatable_deal">
					<thead>
						<tr role="row" class="heading">
							<th width="20%">
								主题ID
							</th>
							<th width="20%">
								待办序号
							</th>
							<th width="20%">
								待办明细
							</th>
							<th width="20%">
								备注
							</th>
							 
						</tr>
					
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
			
		</div>
	</div>
	<!-- End: life time stats -->
</div>
<script src="${ctx}/pages/bbs/scripts/qudetail.js"></script>

