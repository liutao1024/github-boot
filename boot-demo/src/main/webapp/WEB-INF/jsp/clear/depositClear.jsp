<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">新浪出入金清算</span>
				<span class="caption-helper">新浪出入金清算</span>
			</div>
		</div>
		<div class="portlet-body">
			<!-- BEGIN FILE FORM -->
			<form class="file-form form-horizontal" id = "cleardate">  
				<div class="alert alert-danger display-hide">
					<button class="close" data-close="alert"></button>
					<span>输入交易参数有误</span>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">对账日期</label>
						<div class="input-group col-md-8 input-small date date-picker" data-date-format="yyyymmdd" data-date-viewmode="years" data-date-minviewmode="months">
							<input type="text" id = "keepdt" class="form-control" name="keepdt">
							<span class="input-group-btn">
							<button class="btn default" type="button"><i class="fa fa-calendar"></i></button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label class="control-label col-md-4">清算状态</label>
						<div class="input-group col-md-8">
							<input type="hidden" id="clerst" name="clerst" class="form-control input-inline input-small" placeholder="选择清算状态"/>
						</div>
					</div>
				</div>
				
				<div class="form-actions file-action col-md-4">
					<button type="button" class="btn blue" id="submit">查询清算数据</button>
				</div>
			</form>
			<!-- END FILE FORM -->
			<div class="clean"></div>
		</div>
		<div class="portlet-body">
		 <div class="table-container">
				<table class="table table-striped table-bordered table-hover" id="clear_ajax">
					<thead>
						<tr role="row" class="heading">	
							<th width="9%">
								清算日期
							</th>
							<th width="8%">
								渠道号
							</th>
							<th width="9%">
								出入金方式
							</th>
							<th width="9%">
								业务编码
							</th>
							<th width="9%">
								内部户帐号
							</th>
							<th width="9%">
								与传统核心账户
							</th>
							<th width="9%">
								与传统核心账户名
							</th>
							<th width="9%">
								是否轧差
							</th>
							<th width="9%">
								余额方向
							</th>
							<th width="9%">
								交易金额
							</th>
							<th width="6%">
								 币种
							</th>
							<th width="9%">
								清算状态
							</th>
							<th width="5%">
								操作
							</th>
						</tr>
						
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
	   </div>
		<div class="clean_t"></div>
	</div>
</div>

<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/clear/scripts/depositClear.js"></script>
<script>
	jQuery(document).ready(function() {    
		DepositClear.init();
	});
</script>