<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">科目信息</span>
				<span class="caption-helper">科目信息...</span>
			</div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="item_ajax">
					<thead>
						<tr role="row" class="heading">			   		
							<th width="8%">
								科目编号
							</th>	
							<th width="9%">
								科目名称
							</th>
							<th width="8%">
								科目层次
							</th>													
							<th width="8%">
								明细科目
							</th>
							<th width="8%">
								余额方向
							</th>
							<th width="8%">
								表内外标志
							</th>
							<!-- th width="6%">
								上级科目
							</th-->
							<!-- th width="7%">
								科目项目类型
							</th-->
							<th width="9%">
								资产负债类型
							</th>
							<!-- th width="7%">
								科目来源分类
							</th-->
							<th width="7%">
								科目类别
							</th>
							<th width="8%">
								损益类别
							</th>
							<th width="8%">
								业务编码
							</th>
							<th width="6%" colspan="2">
								 操作
							</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
	</div>
	
	<!-- 修改操作员弹出窗口 -->
	<div id="editModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">科目信息修改</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal mod-form" id="mod-form" role="form">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">科目编号</label>
							<div class="col-md-9">
								<input type="text" id="m_itemcd" name="m_itemcd" class="form-control input-inline input-medium" maxlength="19" readOnly>
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">科目名称</label>
							<div class="col-md-9">
								<input type="text" id="m_itemna" name="m_itemna" class="form-control input-inline input-medium" maxlength="19" placeholder="输入新科目名称">
							</div>
						</div>
						<!-- <div class="form-group">
							<label class="col-md-3 control-label">科目层次</label>
							<div class="col-md-9">
								<input type="text" id="m_itemlv" name="m_itemlv" class="form-control input-inline input-medium" maxlength="19" placeholder="输入科目层次">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">是否科目明细</label>
							<div class="col-md-9">
								<input type="text" id="m_dtittg" name="m_dtittg" class="form-control input-inline input-medium" maxlength="19" placeholder="输入科目明细">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">余额方向</label>
							<div class="col-md-9">
								<input type="text" id="m_blncdn" name="m_blncdn" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">表内外标志</label>
							<div class="col-md-9">
								<input type="text" id="m_ioflag" name="m_ioflag" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">上级科目号</label>
							<div class="col-md-9">
								<input type="text" id="m_upitem" name="m_upitem" class="form-control input-inline input-medium" maxlength="19" placeholder="输入新上级科目号">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">科目项目类型</label>
							<div class="col-md-9">
								<input type="text" id="m_itemtp" name="m_itemtp" class="form-control input-inline input-medium" maxlength="50" placeholder="输入科目项目类型">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">资产负债类型</label>
							<div class="col-md-9">
								<input type="text" id="m_aslbtp" name="m_aslbtp" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">科目来源分类</label>
							<div class="col-md-9">
								<input type="text" id="m_itemrg" name="m_itemrg" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">科目类别</label>
							<div class="col-md-9">
								<input type="text" id="m_ittype" name="m_ittype" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">损益类别</label>
							<div class="col-md-9">
								<input type="text" id="m_proftp" name="m_proftp" class="form-control input-inline input-medium" maxlength="19">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-3 control-label">业务编码</label>
							<div class="col-md-9">
								<input type="text" id="m_busino" name="m_busino" class="form-control input-inline input-medium" maxlength="19" placeholder="输入新内部户名称">
							</div>
						</div> -->
					</form>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" id="m_save" class="btn blue">保存</button>
		</div>
	</div>
	
	<!-- 新增内部户弹出窗口 -->
	<div id="addModal" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false" data-width="1000">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
			<h4 class="modal-title">新增科目</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN SINGLEDEBT FORM -->
					<form class="add-form form-horizontal" id="add-form" role="form">  
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							<span>输入交易参数有误</span>
						</div>
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">科目号</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-table"></i>
								<input class="form-control input-inline input-medium" type="text" maxlength="18" autocomplete="off" placeholder="请输入科目号" id="a_itemcd" name="a_itemcd"/>
							</div>
						</div>
						
						<div class="form-group col-md-6">
							<label class="control-label col-md-3">科目名称</label>
							<div class="input-icon col-md-9">
								<i class="fa fa-user"></i>
								<input class="form-control input-inline input-medium" type="text" autocomplete="off" maxlength="18" placeholder="请输入科目名称" id="a_itemna" name="a_itemna"/>
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">科目层次</label>
							<div class="col-md-9">
								<input type="text" id="a_itemlv" name="a_itemlv" class="form-control input-inline input-medium" maxlength="19" placeholder="输入科目层次">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">是否科目明细</label>
							<div class="col-md-9">
								<input type="text" id="a_dtittg" name="a_dtittg" class="form-control input-inline input-medium" maxlength="19" placeholder="是否科目明细">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">余额方向</label>
							<div class="col-md-9">
								<input type="text" id="a_blncdn" name="a_blncdn" class="form-control input-inline input-medium" maxlength="19" placeholder="选择余额方向">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">表内外标志</label>
							<div class="col-md-9">
								<input type="text" id="a_ioflag" name="a_ioflag" class="form-control input-inline input-medium" maxlength="19" placeholder="选择表内外标志">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">上级科目号</label>
							<div class="col-md-9">
								<input type="text" id="a_upitem" name="a_upitem" class="form-control input-inline input-medium" maxlength="19" placeholder="输入新上级科目号">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">科目项目类型</label>
							<div class="col-md-9">
								<input type="text" id="a_itemtp" name="a_itemtp" class="form-control input-inline input-medium" maxlength="50" placeholder="输入科目项目类型">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">资产负债类型</label>
							<div class="col-md-9">
								<input type="text" id="a_aslbtp" name="a_aslbtp" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">科目来源分类</label>
							<div class="col-md-9">
								<input type="text" id="a_itemrg" name="a_itemrg" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">科目类别</label>
							<div class="col-md-9">
								<input type="text" id="a_ittype" name="a_ittype" class="form-control input-inline input-medium" maxlength="19" placeholder="">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">损益类别</label>
							<div class="col-md-9">
								<input type="text" id="a_proftp" name="a_proftp" class="form-control input-inline input-medium" maxlength="19">
							</div>
						</div>
						<div class="form-group col-md-6">
							<label class="col-md-3 control-label">业务编码</label>
							<div class="col-md-9">
								<input type="text" id="a_busino" name="a_busino" class="form-control input-inline input-medium" maxlength="19" placeholder="输入新内部户名称">
							</div>
						</div>
					</form>
					<!-- END SINGLEDEBT FORM -->
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="button" class="btn blue" id="add_save">保存</button>
		</div>
	</div>
</div>

<script src="${ctx}/pages/inac/scripts/item.js"></script>
<script>
	jQuery(document).ready(function() {    
		Item.init();
	});
</script>