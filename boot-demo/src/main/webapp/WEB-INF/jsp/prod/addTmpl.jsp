<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> 
<div class="row">
	<div class="col-md-12">
		<div class="portlet light" id="form_wizard_1">
			<div class="portlet-title">
				<div class="caption"> 
					<span class="caption-subject font-green-sharp bold uppercase">
						<i class="fa fa-gift"></i>新增模板 - <span class="step-title">步骤
							1 of 2 </span>
					</span>
				</div>
				<!-- <div class="tools">
					<a href="javascript:;" class="collapse"> </a> <a
						href="#portlet-config" data-toggle="modal" class="config"> </a> <a
						href="javascript:;" class="reload"> </a> <a href="javascript:;"
						class="remove"> </a>
				</div> -->
			</div>
			<div class="portlet-body form">
				<form novalidate="novalidate" action="#" class="form-horizontal"
					id="submit_form" method="POST">
					<div class="form-wizard">
						<div class="form-body">
							<ul class="nav nav-pills nav-justified steps">
								<li class="active"><a href="#tab1" data-toggle="tab"
									class="step"> <span class="number"> 1 </span> <span
										class="desc"> <i class="fa fa-check"></i>填写模板信息 
									</span>
								</a></li>
								<li><a href="#tab2" data-toggle="tab" class="step"> <span
										class="number"> 2 </span> <span class="desc"> <i
											class="fa fa-check"></i> 添加属性
									</span>
								</a></li>		
							</ul>
							<div id="bar" class="progress progress-striped"
								role="progressbar">
								<div style="width: 25%;"
									class="progress-bar progress-bar-success"></div>
							</div>
							<div class="tab-content">
								<div class="alert alert-danger display-none">
									<button class="close" data-dismiss="alert"></button>
									填写错误，请重新填写
								</div>
								<div class="alert alert-success display-none">
									<button class="close" data-dismiss="alert"></button>
									Your form validation is successful!
								</div>
								<div class="tab-pane active" id="tab1">
								  <div class="form-group">
										<label class="col-md-3 control-label">模板编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="abstract_cd" name="name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入模板编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">选择分类</label>
										<div class="col-md-9"> 
										<select id="add_class_cd" class="form-control input-inline select-medium"> 
												</select>											
										</div>
									</div>							
									<div class="form-group">
										<label class="control-label col-md-3">模板名称</label>
										<div class="col-md-9">
											<input type="text" id="remark" name ="class_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入模板名称">
										</div>
									</div>
								</div>
								<div class="tab-pane" id="tab2">
									<table class="table table-striped table-bordered table-hover"
										id="prop_ajax">
										<thead>
											<tr role="row" class="heading">
												<th width="20%">模板编号</th>
												<th width="20%">属性编号</th>
												<th width="20%">属性值类型</th>
												<th width="20%">顺序号</th>
												<th width="20%">操作</th>
											</tr>
										</thead>
										<tbody> 
										</tbody>
								    </table>
								    <div class="form-group">
										<label class="col-md-3 control-label">模板编号</label>
										<div class="col-md-9">
											<div>
												<input type="text" id="abstract_cd" name="name" class="form-control input-inline input-medium" maxlength="19" placeholder="输入模板编号">
											</div>
										</div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">选择分类</label>
										<div class="col-md-9"> 
										<select id="add_class_cd" class="form-control input-inline select-medium"> 
												</select>											
										</div> 
									</div>							
									<div class="form-group">
										<label class="control-label col-md-3">模板名称</label>
										<div class="col-md-9">
											<input type="text" id="remark" name ="class_cd" class="form-control input-inline input-medium" maxlength="19" placeholder="输入模板名称">
										</div>
									</div>
									<div class="row">
										<div class="col-md-offset-8 col-md-9">
										<a style="display: none;" href="javascript:;"
											class="btn green button-submit" id="btn_add_save"> 增加 属性
										</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="form-actions">
							<div class="row">
								<div class="col-md-offset-7 col-md-9">
									<a style="display: none;" href="javascript:;"
										class="btn default button-previous disabled"> <i
										class="m-icon-swapleft"></i> 返回
									</a> <a href="javascript:;" class="btn blue button-next">
										下一步 <i class="m-icon-swapright m-icon-white"></i>
									</a> <a style="display: none;" href="javascript:;"
										class="btn green button-submit" id="btn_save"> 保存 <i
										class="m-icon-swapright m-icon-white"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<script src="${ctx}/pages/prod/scripts/addTmpl.js"></script>
<script>
	jQuery(document).ready(function() {    
		AddTmpl.init();
	});
</script>