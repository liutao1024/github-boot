<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="tab-pane">
	<form class="form-horizontal control-label" role="form" id="prod_form">
		<div class="form-body">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				输入有误，请检查下面表单！<span class="msg"></span>
			</div>
			<div class="alert alert-success display-hide">
				<button class="close" data-close="alert"></button>
				表单提交成功！<span class="msg"></span>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="col-md-3 control-label">产品代码</label>
					<div class="col-md-9">
						<input type="text" name="prodcd"
							class="form-control input-inline input-medium form-value"
							placeholder="产品代码">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">产品名称</label>
					<div class="col-md-9">
						<input type="text" name="prodna"
							class="form-control input-inline input-medium form-value"
							placeholder="产品名称">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品类型</label>
					<div class="col-md-9">
						<input type="text" name="prodtp"
							class="form-control input-inline input-medium form-value"
							placeholder="产品类型">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">融资来源编号</label>
					<div class="col-md-9">
						<input type="text" name="fcsrcd"
							class="form-control input-inline input-medium form-value"
							placeholder="融资来源编号">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">融资来源名称</label>
					<div class="col-md-9">
						<input type="text" name="fcsrna"
							class="form-control input-inline input-medium form-value"
							placeholder="融资来源名称">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">唯一规则</label>
					<div class="col-md-9">
						<input type="text" name="onlyfg"
							class="form-control input-inline input-medium form-value"
							placeholder="唯一规则">
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="col-md-3 control-label">收款业务编号</label>
					<div class="col-md-9">
						<input type="text" name="rvbsno"
							class="form-control input-inline input-medium form-value"
							placeholder="收款业务编号">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">收款业务名称</label>
					<div class="col-md-9">
						<input type="text" name="pybsno"
							class="form-control input-inline input-medium form-value"
							placeholder="收款业务名称">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品状态</label>
					<div class="col-md-9">
						<input type="text" name="prodst"
							class="form-control input-inline input-medium form-value"
							placeholder="产品状态">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">生效日期</label>
					<div class="col-md-9">
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" class="form-control" name="efctdt"
								maxlength="8" placeholder="输入生效日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">失效日期</label>
					<div class="col-md-9">
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" class="form-control" name="inefdt"
								maxlength="8" placeholder="输入失效日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<button type="button" data-dismiss="modal" class="btn btn-default">关闭</button>
			<button type="submit" class="btn blue" id="btn_save_edit">保存</button>
		</div>
	</form>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script>
	jQuery(document).ready(function() {
		// 时间插件
		var lnfprodedit = function() {
			var hander = function() {
				if (jQuery().datepicker) {
					$('.date-picker',$("#prod_form")).datepicker({
						rtl : Metronic.isRTL(),
						orientation : "left",
						autoclose : true,
						language : 'zh-CN',
					});
				};
				
				var prodstDict = Sunline.getDict("F_PRODST");
				$("input[name='prodst']").select2({
					data : prodstDict,
					allowClear : true
				});
				
				var onlyfgDict = Sunline.getDict("F_ONLYFG");
				$("input[name='onlyfg']").select2({
					data : onlyfgDict,
					allowClear : true
				});
				
				var prodtpDict = Sunline.getDict("F_PRODTP");
				$("input[name='prodtp']").select2({
					data : prodtpDict,
					allowClear : true
				});
				
				//Metronic.initSlimScroll();
			}

			return {
				init : function() {
					hander();
				}
			}
		}();
		lnfprodedit.init();
	});
</script>
