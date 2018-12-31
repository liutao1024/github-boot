<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">总账换日</span>
				<span class="caption-helper">总账换日...</span>
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
							<label class="col-md-3 control-label">目标日期</label>
							<div class="col-md-9">
								<div class="input-group col-md-12 date input-medium date-picker"
									data-date-format="yyyymmdd" data-date-viewmode="years"
									data-date-minviewmode="months" id="mubiao">
									<input type="text" class="form-control" id="tkmbrq"
										maxlength="8" placeholder="输入目标日期"> <span
										class="input-group-btn">
										<button class="btn default" type="button">
											<i class="fa fa-calendar"></i>
										</button>
									</span>
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<button type="button" class="btn btn_sm green" id="do_task_btn">
								<i class="fa fa-toggle-right"></i>执行任务
							</button>
						</div>
						<div class='clean'></div>
					</form>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal control-label" role="form">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">交易提交时间</label>
								<div class="col-md-9">
									<input type="text" id="plrwtjsj" name="plrwtjsj"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">交易状态</label>
								<div class="col-md-9">
									<input type="text" id="jiaoyzht" name="jiaoyzht"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">错误信息</label>
								<div class="col-md-9">
									<textarea id="cuowxinx" name="cuowxinx"
										class="form-control input-inline input-medium" readOnly></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>

<script src="${ctx}/pages/task/scripts/taskGroup.js"></script>
<script>
	jQuery(document).ready(function() {
		// 时间插件
		var lnfprodedit = function() {
			var hander = function() {
				if (jQuery().datepicker) {
					$('#mubiao').datepicker({
						rtl : Metronic.isRTL(),
						orientation : "left",
						autoclose : true,
						language : 'zh-CN',
					});
				};
			}

			return {
				init : function() {
					hander();
				}
			}
		}();
		lnfprodedit.init();
		taskGroup.init();
	});
</script>