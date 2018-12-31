<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">贷款产品基础属性表</span>
				<span class="caption-helper">管理贷款产品基础属性配置...</span>
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
							<th scope="col">产品代码</th>
							<th scope="col">产品名称</th>
							<th scope="col">产品描述</th>
							<!-- <th scope="col">贷款对象</th>
							<th scope="col">贷款对象细分</th>
							<th scope="col">业务分类</th>
							<th scope="col">表外产品</th>
							<th scope="col">循环贷款</th>
							<th scope="col">补贴贷款</th>
							<th scope="col">银团贷款</th>
							<th scope="col">银团贷款方式</th>
							<th scope="col">银团类别</th>
							<th scope="col">内部银团成员行类型</th>
							<th scope="col">外部银团成员行类型</th>
							<th scope="col">资产转让类型</th>
							<th scope="col">纳入忠诚度/积分计划</th>
							<th scope="col">产品关联的日历类型</th>
							<th scope="col">贷款对象</th> -->
							<th scope="col">生效日期</th>
							<th scope="col">失效日期</th>
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
				<h4 class="modal-title">贷款产品信息</h4>
				<div class=" col-md-12"></div>
			</div>
			<div class="modal-body" id="edit_load">
				<jsp:include page="/WEB-INF/jsp/loan/lnsubpage.jsp"></jsp:include>
			</div>
			<div class="modal-footer col-md-12" id="btn_cont">
			    <button type='button' id='lastpage' class='btn btn-default'>上一页</button>
				<button type='button' id='nextpage' class='btn btn-default'>下一页</button>
			</div>
		</div>
		<!-- edit mode end -->
	</div>
</div>
<script src="${ctx}/pages/loan/scripts/lnfprod.js"></script>
<script>
	jQuery(document).ready(function() {
		lnfprod.init();
	});
</script>