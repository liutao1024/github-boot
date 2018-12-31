<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">账户列表</span>
				<span class="caption-helper">账户管理...</span>
			</div>
		</div>
		<div id="edittypeModal" class="modal fade" tabindex="-1"  style="overflow-y:scroll;height:200px;" 
		data-backdrop="static" data-keyboard="false" data-width="200">
			<form class="form-horizontal control-label" role="form" id="lock_from">	
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					操作失败！返回信息 ：<span class="msg"></span>
				</div>
				<div class="alert alert-success display-hide">
					<button class="close" data-close="alert"></button>
					操作成功！返回信息 ：<span class="msg"></span>
				</div>
			</form>
				<div>
					<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
				</div>
							
		</div>
		<div class="portlet-body">
			<div class="table-container" >												
				<table class="table table-striped table-bordered table-hover" id="datatable_ajax">
						<thead>
							<tr role="row" class="heading">
								<th width="15%">
									账户编号
								</th>
								<th width="15%">
									账户类型
								</th>	
								<th width="15%">
									电子账号
								</th>
								<th width="15%">
									产品代码
								</th>
								<th width="20%">
									帐户锁定码
								</th>													
								<th width="20%" colspan="2">
									 操作
								</th>
							</tr>
							<tr role="row" class="filter">
								<td>									
								</td>
								<td>									
								</td>
								<td>
									<input type="text" class="form-control form-filter input-sm" id="elacct" name="elacct" />
								</td>
								<td>
									<input type="text" class="form-control form-filter input-sm" id="prodcd" name="prodcd" />
								</td>
								<td></td>
								<td  colspan="2">
									<button class="btn btn-sm yellow filter-submit margin-bottom"><i class="fa fa-search"></i>查询</button>
									<button class="btn btn-sm red filter-cancel"><i class="fa fa-times"></i>清空</button>
								</td>
							
							</tr>
						</thead>
						<tbody>
						</tbody>
				</table>
			</div>
		</div>			
	</div>
</div>
<script src="${ctx}/pages/cc/scripts/ccaacct.js"></script>
<script>
	jQuery(document).ready(function(){
		CcaAcct.init();
	});
</script>