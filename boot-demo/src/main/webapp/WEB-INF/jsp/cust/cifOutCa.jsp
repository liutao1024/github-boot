<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		
		<div class="portlet-body">
			 <div class="table-container">
			 	
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax" style="white-space: nowrap;">
					<thead>
						<tr role="row" class="heading">   		
							<th width="12%">
								绑定卡号
							</th>
							<th width="11%">
								卡开户行号
							</th>
							<th width="11%">
								账户名称
							</th>
							<th width="11%">
								卡开户行名称
							</th>
							<th width="11%">
								绑定日期
							</th>
							<th width="11%">
								卡类型
							</th>
							<th width="11%">
								主副卡标识
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>

<script src="${ctx}/pages/cust/scripts/cifOutCa.js"></script>