<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="col-md-12">
	<div class="portlet light">
		<div class="portlet-title">
			<div class="caption">
				<i class="fa fa-gift font-green-sharp"></i> <span
					class="caption-subject font-green-sharp bold uppercase">任务列表</span>
				<span class="caption-helper">执行任务...</span>
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
						<div class="col-md-2">
							<div class="form-group">
								<div class="input-icon col-md-9">
									<i class="fa fa-cubes"></i> <input type="text" id="tkgpid"
										name="tkgpid" class="form-control input-inline input-medium"
										maxlength="19" placeholder="输入批量交易组">
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="form-group">
								<div class="col-md-9 input-icon input-group">
									<i class="fa fa-cube"></i> <input type="text" id="tkprcd"
										name="tkprcd" class="form-control input-inline" maxlength="10"
										placeholder="输入批量交易处理码"> <span class="input-group-btn">
										<button type="button" class="btn blue btn_sm margin-bottom"
											id="chck_btn">
											<i class="fa fa-search"></i>获取任务
										</button>
									</span>
								</div>
							</div>
						</div>

						<div class="col-md-3">
							<div class="form-group">
								<label
									class="col-md-5 control-label caption-subject font-green-sharp bold uppercase"><i
									class="fa fa-mail-forward"></i>任务:</label> <label id="tkname"
									class="col-md-7 control-label font-green-sharp bold "></label>
							</div>
						</div>
						<div class="col-md-2">
							<button type="button" class="btn btn_sm green"
								disabled='disabled' id="do_task_btn">
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
								<label class="col-md-3 control-label font-green-sharp">批量交易批次号</label>
								<div class="col-md-9">
									<input type="text" id="pljypich" name="pljypich"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">批量交易组ID</label>
								<div class="col-md-9">
									<input type="text" id="pljyzbsh" name="pljyzbsh"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">批量组执行耗时</label>
								<div class="col-md-9">
									<input type="text" id="pljyzuhs" name="pljyzuhs"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">服务标识</label>
								<div class="col-md-9">
									<input type="text" id="fuwbiaoz" name="fuwbiaoz"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">批量交易流程ID</label>
								<div class="col-md-9">
									<input type="text" id="pljylcbs" name="pljylcbs"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">批量交易ID</label>
								<div class="col-md-9">
									<input type="text" id="piljybss" name="piljybss"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">错误堆栈</label>
								<div class="col-md-9">
									<textarea id="cuowduiz" name="cuowduiz"
										class="form-control input-inline input-medium" readOnly></textarea>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">批量交易时间</label>
								<div class="col-md-9">
									<input type="text" id="pljioysj" name="pljioysj"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">依赖批交易组ID</label>
								<div class="col-md-9">
									<input type="text" id="yilpljyz" name="yilpljyz"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">交易开始时间</label>
								<div class="col-md-9">
									<input type="text" id="jyksshij" name="jyksshij"
										class="form-control input-inline input-medium" readOnly>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label font-green-sharp">交易结束时间</label>
								<div class="col-md-9">
									<input type="text" id="jyjsshij" name="jyjsshij"
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
<script src="${ctx}/pages/task/scripts/task.js"></script>
<script>
	jQuery(document).ready(function() {
		task.init();
	});
</script>