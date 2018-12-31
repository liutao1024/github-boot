<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
		<div class="row">
			<div class="col-md-12">
				<form id="prdAddForm" class="form-horizontal" role="form">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							输入有误，请检查下面表单！
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							表单提交成功！
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label">产品编号</label>
								<div class="col-md-9">
										<input type="text"   name="prodcd"
											class="form-control input-inline input-medium form-value"
											maxlength="10"  placeholder="输入产品编号">
								</div>
							</div>
						<div class="form-group">
								<label class="col-md-3 control-label">产品名称</label>
								<div class="col-md-9">
									<input type="text" name="prodna"
										class="form-control input-inline input-medium form-value"
										maxlength="80" placeholder="输入产品名称">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">币种</label>
								<div class="col-md-9">
									<input type="text" name="crcycd"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请选择币种">
								</div>
							</div>
						<div class="form-group">
							<label class="col-md-3 control-label">是否有效</label>
							<div class="col-md-9">
								<input type="text" name="parmst"
									class="form-control input-inline input-medium form-value"
									maxlength="2" placeholder="请选择是否有效">
							</div>
						</div>
					</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="col-md-3 control-label">产品类型</label>
								<div class="col-md-9">
									<input type="text" name="prodtp"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请选择产品类型">
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">交易控制方式</label>
								<div class="col-md-9">
									<input type="text" name="pscntl"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请输入交易控制方式">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易控制码</label>
								<div class="col-md-9">
									<input type="text" name="psctcd"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入交易控制码">
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-3 control-label">渠道控制方式</label>
								<div class="col-md-9">
									<input type="text" name="svcntl"
										class="form-control input-inline input-medium form-value"
										maxlength="2" placeholder="请输入渠道控制方式">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">渠道控制码</label>
								<div class="col-md-9">
									<input type="text" name="svctcd"
										class="form-control input-inline input-medium form-value"
										maxlength="8" placeholder="请输入渠道控制码">
								</div>
							</div>
						</div>
						
					</div>
				</form>
			</div>
		</div>
