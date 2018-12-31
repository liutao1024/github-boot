<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="tab-pane">
	<form class="form-horizontal control-label" role="form"
		id="edit_kupdppb">
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
					<label class="col-md-3 control-label">产品编号</label>
					<div class="col-md-9">
						<div>
							<input type="text" id="e_prodcd" name="prodcd" readOnly
								class="form-control input-inline input-medium form-value"
								maxlength="10" placeholder="输入产品编号">
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品说明</label>
					<div class="col-md-9">
						<input type="text" name="prodtx"
							class="form-control input-inline input-medium form-value"
							maxlength="100" placeholder="输入产品说明">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品营销说明</label>
					<div class="col-md-9">
						<input type="text" name="pdmktx"
							class="form-control input-inline input-medium form-value"
							maxlength="200" placeholder="输入产品营销说明">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">生效日期</label>
					<div class="col-md-9">
						<div class="input-medium col-md-9  date date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" name="efctdt"
								class="form-control input-inline input-medium form-value"
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
						<div class="input-medium col-md-9  date date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" name="inefdt"
								class="form-control input-inline input-medium form-value"
								maxlength="8" placeholder="输入失效日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品状态</label>
					<div class="col-md-9">
						<input type="text" name="prodst"
							class="form-control input-inline input-medium form-value"
							maxlength="2" placeholder="输入产品状态">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">预售份额</label>
					<div class="col-md-9">
						<input type="text" name="presal"
							class="form-control input-inline input-medium form-value"
							maxlength="19" placeholder="输入预售份额" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
					</div>
				</div>	
			</div>
			<div class="col-md-6">
				<div class="form-group">
					<label class="col-md-3 control-label">产品定活标志</label>
					<div class="col-md-9">
						<input type="text" name="pddpfg"
							class="form-control input-inline input-medium form-value"
							maxlength="1" placeholder="输入产品定活标志">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品所属对象</label>
					<div class="col-md-9">
						<input type="text" name="prodtp"
							class="form-control input-inline input-medium form-value"
							maxlength="1" placeholder="输入产品所属对象">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品默认币种</label>
					<div class="col-md-9">
						<input type="text" name="pdcrcy"
							class="form-control input-inline input-medium form-value"
							maxlength="3" placeholder="输入产品默认币种">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">机构控制标志</label>
					<div class="col-md-9">
						<input type="text" name="brchfg"
							class="form-control input-inline input-medium form-value"
							maxlength="2" placeholder="机构控制标志">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">客户控制标志</label>
					<div class="col-md-9">
						<input type="text" name="custfg"
							class="form-control input-inline input-medium form-value"
							maxlength="2" placeholder="输入客户控制标志">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">存款种类</label>
					<div class="col-md-9">
						<input type="text" name="debttp"
							class="form-control input-inline input-medium form-value"
							maxlength="2" placeholder="输入存款种类">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">早起息许可标志</label>
					<div class="col-md-9">
						<input type="text" name="mginfg"
							class="form-control input-inline input-medium form-value"
							maxlength="2" placeholder="输入早起息许可标志">
					</div>
				</div>
			</div>
			<div>
				<button type="button" id="save_prod" class="btn blue">保存修改</button>
			</div>
		</div>
	</form>
</div>
<script>
jQuery(document).ready(function() {
	kupdppbdict.initdict();
	 Metronic.initSlimScroll();
});
</script>