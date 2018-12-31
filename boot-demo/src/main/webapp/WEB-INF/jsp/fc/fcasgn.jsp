<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">小马bank待分配处理</span>
				<span class="caption-helper">小马bank待分配处理</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "fcdate">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "clerdt" class="form-control" name="clerdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">分配状态</label>
						<div class="input-group col-md-8">
							<input type="hidden" id="asgnst" name="asgnst" class="form-control input-inline input-small" placeholder="选择处理状态"/>
						</div>
					</div>
				</div>
				<div class="form-actions file-action col-md-4">
					<button type="button" class="btn blue" id="submit">查询待分配数据</button>
				</div>
			</form>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="fcasgn_ajax">
					<thead>
						<tr role="row" class="heading">	
						    <th width="8%">
								生成日期
							</th>
							<th width="8%">
								标的编号
							</th>
							<th width="8%">
								还款期数
							</th>
							<th width="6%">
								还款状态
							</th>
							<th width="8%">
								待分配金额
							</th>
							<th width="8%">
								实际分配日期
							</th>
							<th width="6%">
								成功分配金额
							</th>
							<th width="6%">
								 产品编号
							</th>
							<th width="8%">
								产品名称
							</th>
							<th width="8%">
								产品类型
							</th>
							<th width="8%">
								融资来源编号
							</th>
							<th width="8%">
								融资来源名称
							</th>
							<th width="8%">
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
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/fc/scripts/fcasgn.js"></script>
<script>
	jQuery(document).ready(function() {    
		Fcasgn.init();
	});
</script>