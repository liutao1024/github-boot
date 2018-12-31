<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">融资产品基础属性表</span>
				<span class="caption-helper">管理融资产品基础属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_prod_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_prod">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">产品编号</th>
							<th scope="col">产品名称</th>
							<th scope="col">产品类型</th>
							<!-- <th scope="col">融资产品编号</th>
							<th scope="col">融资产品名称</th> -->
							<th scope="col">唯一规则</th>
							<th scope="col">生效日期</th>
							<th scope="col">失效日期</th>
							<!-- <th scope="col">收款业务编号</th>
							<th scope="col">付款业务编号</th> -->
							<th scope="col">产品状态</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodcd"
								name="q_prodcd" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodtx"
								name="q_prodna" /></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td colspan="2">
								<button class="btn btn-sm yellow filter-submit margin-bottom">
									<i class="fa fa-search"></i> 查询
								</button>
								<button class="btn btn-sm red filter-cancel">
									<i class="fa fa-times"></i> 清空
								</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
		<!-- edit mode start -->
		<div id="bianji" class="modal fade out" tabindex="-1"
			data-backdrop="static" data-keyboard="false" data-width="1280">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true"></button>
				<h4 class="modal-title">融资产品信息</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load">
				<jsp:include page="/WEB-INF/jsp/fc/fcsubpage.jsp"></jsp:include>
			</div>
		</div>
		<!-- edit mode end -->
	</div>
</div>
<script src="${ctx}/pages/fc/scripts/fcsetprod.js"></script>
<script>
	jQuery(document).ready(function() {
		fcsetprod.init();
	});
</script>