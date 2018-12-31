<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i>
				<span class="caption-subject font-green-sharp bold uppercase">计提资产减值</span>
				<span class="caption-helper">计提资产减值...</span>
			</div>
		</div>
		<div class="portlet-body">
			<form class="form-horizontal cust-form" id="cust-form" role="form">
				
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-5">交易金额</label>
						<div class="input-group col-md-5"  >
							<input type="text" id = "tranam" class="form-control input-inline " name="tranam">
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-5">贷方种类</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="clstat" name="clstat" 
								class="form-control input-inline" placeholder="贷方" />
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<label class="control-label col-md-5">货币种类</label>
						<div class="input-group col-md-5">
							<input type="hidden" id="crcycd" name="crcycd"
								class="form-control input-inline" placeholder="货币种类" />
						</div>
					</div>
				</div>
				<div class="cif-clear"></div>
				<div class="form-actions cust-action">
					<button type="button" class="btn blue" id="submit">记账</button>
				</div>
				<div class="cif-pp"></div>
			</form>
			</div>
	</div>
</div>

<script src="${ctx}/pages/ln/scripts/lnconjt.js"></script>
<script>
	jQuery(document).ready(function() {
		Lnconjt.init();
	});
</script>
