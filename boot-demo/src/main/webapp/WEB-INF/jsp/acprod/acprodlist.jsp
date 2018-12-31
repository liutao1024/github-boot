<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">红包积分产品基础属性列表</span>
				<span class="caption-helper">红包积分产品基础属性配置...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
					<button id="add_btn"
						class="btn btn-sm green table-group-action-submit">
						<i class="fa fa-plus"></i> 新增
					</button>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th width="10%">产品编号</th>
							<th width="10%">产品名称</th>
							<th width="8%">产品类型</th>
							<th width="10%">交易控制码</th>
							<th width="10%">交易控制方式</th>
							<th width="8%">渠道控制码</th>
							<th width="10%">渠道控制方式</th>
							<th width="8%">币种</th>
							<th width="8%">状态</th>
							<th width="19%" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodcd"
								name="q_prodcd" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_prodna"
								name="q_prodna" /></td>
							<td></td>
							<td></td>
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
			<!-- ADD-->
	<div id="addModal" class="modal fade modal-scroll" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="1280">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">红包积分产品信息</h4>
		</div>
		
		 <div class="modal-body" id="edit_load">
				<jsp:include page="/WEB-INF/jsp/acprod/acsubpage.jsp"></jsp:include>
		</div>
		
		<div class="modal-footer">
			<button type="button" data-dismiss="modal"  class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="btn_save" >保存</button>
			<button type="button" class="btn blue" id="btn_save_upst" >上一步</button>
			<button type="button" class="btn blue" id="btn_save_next" >下一步</button>
		</div>
		
		</div>
	</div>
</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script
	src="${ctx}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
	type="text/javascript"></script>
<script src="${ctx}/pages/acprod/scripts/acprodindex.js"></script>
<script>
	jQuery(document).ready(function() {
		acpprod.init();
	});
</script>