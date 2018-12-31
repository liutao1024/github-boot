<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">放款暂停</span>
				<span class="caption-helper">放款暂停...</span>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal" role="form" id="task_form">
						<div class="form-body">
							<div class="alert alert-danger display-hide">
								<button class="close" data-close="alert"></button>
								输入有误，请检查下面表单！
							</div>
						</div>
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">雨点代偿资金余额</label>
							<div class="col-md-9">
							<div>
							<input id="comamt" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" disabled name="comamt" name="comamt" style="margin-top: 33px;" >
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="docomamt" class="btn btn_sm green" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>查询
							</button>
						</div>
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">当日应还款金额</label>
							<div class="col-md-9">
							<div>
							<input id="shoamt" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" disabled name="shoamt" name="shoamt" style="margin-top: 33px;" >
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="doshoamt" class="btn btn_sm green" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>查询
							</button>
						</div>
						
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">逾期金额</label>
							<div class="col-md-9">
							<div>
							<input id="oveamt" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" name="oveamt" disabled name="oveamt" style="margin-top: 33px;">
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="dooveamt" class="btn btn_sm green" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>查询
							</button>
						</div>
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">当前放款状态</label>
							<div class="col-md-9">
							<div>
							<input id="stopflag" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" disabled name="stopflag" name="stopflag" style="margin-top: 33px;">
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="dostopflag" class="btn btn_sm green" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>查询
							</button>
						</div>
						<div class='clean'></div>
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">是否暂停放款</label>
							<div class="col-md-9">
							<div>
							<input id="loanflag" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" name="loanflag" style="margin-top: 33px;">
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="deal" class="btn btn_sm blue" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>设置
							</button>
						</div>
						<div class='clean'></div>
						<div class="col-md-8">
							<label class="col-md-3 control-label" style="border-top-width: 33px; margin-top: 33px;">未来天数设置</label>
							<div class="col-md-9">
							<div>
							<input id="futday" class="form-control input-inline input-medium form-value" type="text"  maxlength="10" name="futday" style="margin-top: 33px;">
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button id="trans" class="btn btn_sm blue" type="button" style="margin-top: 33px;">
								<i class="fa fa-toggle-right"></i>设置
							</button>
						</div>
						<div class='clean'></div>
					</form>
				</div>
			</div>
		</div>
		
	</div>
</div>
<script type="text/javascript"src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script><script type="text/javascript"src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script src="${ctx}/pages/yd/scripts/ydpaus.js"></script>
<script>
	jQuery(document).ready(function() {
		ydpaus.init();
	});
</script>