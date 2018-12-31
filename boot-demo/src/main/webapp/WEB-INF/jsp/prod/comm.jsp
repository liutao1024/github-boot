<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="note note-danger note-bordered">
		<p>
			 NOTE: 下面为demo模仿数据
	   </p>
	</div>
	<!-- Begin: life time stats -->
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">商品列表</span>
				<span class="caption-helper">管理商品...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">			
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
					<thead>
						<tr role="row" class="heading">
							<th >
								 商品号
							</th>
							<th >
								商品名称
							</th>
							<th >
								产品cd
							</th>
							<th >
								产品版本号
							</th>
							<th >
								分类cd
							</th>
							<th >
								商品状态
							</th>
							<th >
								是否自动上架
							</th>	
							<th >
							           预计上架日期
							</th>	
							<th >
								实际上架日期
							</th>	
							<th >
								上架发起人
							</th>
							<th >
								下架日期
							</th>						
							<th width="30%" colspan="2">
								 操作
							</th>
						</tr>
						<tr role="row" class="filter">
							<td>
								<input type="text" class="form-control form-filter input-sm" id="tt" name="query_period_cd" />
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>	
							</td>
							<td>	
							</td>
							<td>	
							</td>
							<td>	
							</td>
							<td>	
							</td>
							<td>	
							</td>
							<td>	
							</td>
					        <td>	
							</td>
							<td>
								<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i> 查询</button>
								<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i> 清空</button>
							</td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>			
		</div>
	</div>
<!-- End: life time stats -->
 <!-- edit prod start -->
    <div id="edit_prod" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
					<h4 class="modal-title">新增产品</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<form class="form-horizontal" role="form" id="form">
								<div class="form-body">
									<div class="alert alert-danger display-hide">
										<button class="close" data-close="alert"></button>
										输入有误，请检查下面表单！
									</div>														
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">产品cd</label>
									<div class="col-md-9">
										<input type="text" id="edit_prod_cd" name="prod_cd" class="form-control input-inline input-medium" readOnly maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">最新版本号</label>
									<div class="col-md-9">
										<input type="text" id="edit_last_ver" name="last_ver" class="form-control input-inline input-medium" readOnly maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">抽象模板</label>
									<div class="col-md-9">
										<input type="text" id="edit_abstract_cd" name="abstract_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">分类cd</label>
									<div class="col-md-9">
										<input type="text" id="edit_class_cd" name="class_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">产品名称</label>
									<div class="col-md-9">
										<input type="text" id="edit_prod_name" name="prod_name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-3 control-label">合作商户</label>
									<div class="col-md-9">
										<input type="text" id="edit_merchant_cd" name="merchant_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入参数描述">
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
									<button type="submit" class="btn blue" id="btn_edit_save">保存</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
     <!-- edit prod end-->
</div>

<script src="${ctx}/pages/prod/scripts/comm.js"></script>
<script>
	jQuery(document).ready(function() {    
		Comm.init();
	});
</script>