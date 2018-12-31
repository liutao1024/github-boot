<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">额度解冻</span>
				<span class="caption-helper">额度解冻基本信息</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="table-container">
				<div class="table-actions-wrapper">
					<span> </span>
				</div>
				<table class="table table-striped table-bordered table-hover"
					id="datatable_custno">
					<thead>
						<tr role="row" class="heading">
							<th scope="col">客户号</th>
							<th scope="col">额度编号</th>
							<th scope="col">产品号/账号/卡号/上级客户号/交易渠道</th>
							<th scope="col">币种</th>
							<th scope="col">冻结额度</th>
							<th scope="col">解冻金额</th>
							<th scope="col">主键顺序号</th>
							<th scope="col" colspan="2">操作</th>
						</tr>
						<tr role="row" class="filter">
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_custno"
								name="q_custno" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_crdlno"
								name="q_crdlno" /></td>
							<td><input type="text"
								class="form-control form-filter input-sm" id="q_busino"
								name="q_busino" /></td>
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
	</div>
</div>
<!-- edit modal -->
<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
		<h4 class="modal-title">额度冻结解冻详情</h4>
	</div>
	<div class="modal-body">
		<div class="row">
			<div class="col-md-12">
				<form class="form-horizontal" role="form" id="edit_form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							表单提交成功！返回信息 ：<span class="msg"></span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">客户号</label>
							<div class="col-md-9">
								<div>
									<input type="text" id="custno" name="custno" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入客户号">
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">额度编号</label>
							<div class="col-md-9">
								<input type="text" id="crdlno" name="crdlno" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="输入额度编号">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">产品号/账号/卡号/上级客户号/渠道</label>
							<div class="col-md-9">
								<input type="text" id="busino" name="busino" readOnly class="form-control input-inline input-medium" maxlength="20" placeholder="产品号/账号/卡号/上级客户号/渠道">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">币种</label>
							<div class="col-md-9">
								<input type="text" id="crcycd" name="crcycd" class="form-control input-inline input-medium" maxlength="11" placeholder="输入币种">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">冻结额度</label>
							<div class="col-md-9">
								<input type="text" id="amount" name="amount" class="form-control input-inline input-medium" maxlength="11" placeholder="输入冻结金额">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">解冻金额</label>
							<div class="col-md-9">
								<input type="text" id="unfrzd" name="unfrzd" class="form-control input-inline input-medium" maxlength="20" placeholder="解冻金额">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">主键顺序号</label>
							<div class="col-md-9">
								<input type="text" id="freezd" name="freezd" class="form-control input-inline input-medium" maxlength="80" placeholder="主键顺序号">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
						<button type="submit" class="btn blue" id="btn_save_edit">解冻</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- End: life time stats -->
<script type="text/javascript" src="${ctx}/pages/crlimit/scripts/unfrcl.js"></script>
<script>
	jQuery(document).ready(function() {    
		unfrcl.init();
	});
</script>