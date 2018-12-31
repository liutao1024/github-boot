<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">三类账户商户视图列表</span>
				<span class="caption-helper">三类账户商户视图...</span>
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
						<div class="col-md-1"></div>
						<div class="col-md-5">
							<div class="form-group">
								<div class="input-icon col-md-9">
									<i class="fa fa-cubes"></i> <input type="text" id="mechno"
										name="商户号" class="form-control input-inline input-medium"
										maxlength="19" placeholder="输入商户号">
								</div>
							</div>
						</div>
						<div class="col-md-1">
							<div class="form-group">
								<div class="col-md-12 input-icon input-group">
									<button type="button" class="btn blue btn_sm margin-bottom"
										id="chck_btn">
										<i class="fa fa-search"></i>查询
									</button>
								</div>
							</div>
						</div>
						<div class='col-md-1'>
							<div class="form-group">
								<div class="col-md-12 input-icon input-group">
									<button type="button" class="btn blue btn_sm margin-bottom"
										id="clear_btn">
										<i class="fa fa-search"></i>清空
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="portlet-body">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal control-label" role="form">

						<div class="col-md-12">
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">商户名称</label>
								<div class="col-md-9">
									<input type="text" id="mechnm" name="mechnm"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div></div>
						</div>
						<div class="col-md-6">

							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">客户数量</label>
								<div class="col-md-9">
									<input type="text" id="totnum" name="totnum"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">I类户数量</label>
								<div class="col-md-9">
									<input type="text" id="onenum" name="onenum"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">Ⅱ类户数量</label>
								<div class="col-md-9">
									<input type="text" id="twonum" name="twonum"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">Ⅲ类户数量</label>
								<div class="col-md-9">
									<input type="text" id="thrnum" name="thrnum"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">总余额</label>
								<div class="col-md-9">
									<input type="text" id="totbln" name="totbln"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">I类户总余额</label>
								<div class="col-md-9">
									<input type="text" id="onebln" name="onebln"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">Ⅱ类户总余额</label>
								<div class="col-md-9">
									<input type="text" id="twobln" name="twobln"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">Ⅲ类户总余额</label>
								<div class="col-md-9">
									<input type="text" id="thrbln" name="thrbln"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/kupcnr/scripts/qrmevi.js"></script>
<script>
	jQuery(document).ready(function() {
		qrmevi.init();
	});
</script>