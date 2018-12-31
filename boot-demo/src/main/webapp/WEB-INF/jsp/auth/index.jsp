<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<%@include file="/WEB-INF/common/comm-css.jsp"%>
		<title>Bank金融核心综合管理系统</title>
		<%@include file="/WEB-INF/common/comm-plugin-css.jsp"%>
		<%@include file="/WEB-INF/common/comm-theme.jsp"%>
		<link href="${ctx}/pages/curtain/css/intran.css" type="text/css" rel="stylesheet"/>
		<link href="${ctx}/assets/global/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" type="text/css"/>
		<link href="${ctx}/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css"/>
	
	</head>
	<body>
	
		<!-- BEGIN HEADER -->
		<div class="page-header">
			<div class="page-header-top">
				<div class="container">
					<!-- BEGIN LOGO -->
					<div class="page-logo">
						<img src="${ctx}/assets/admin/layout/img/logo-default.png" alt="logo" title="首页" class="logo-default">
					</div>
					<!-- END LOGO -->
					<!-- BEGIN RESPONSIVE MENU TOGGLER -->
					<a href="javascript:;" class="menu-toggler"></a>
					<!-- END RESPONSIVE MENU TOGGLER -->
					<!-- BEGIN TOP NAVIGATION MENU -->
					<div class="top-menu">
						<ul class="nav navbar-nav pull-right">
							<!-- BEGIN USER LOGIN DROPDOWN -->
							<li class="dropdown  dropdown-dark"><a href="#"
								class="dropdown-toggle" data-toggle="dropdown"
								data-hover="dropdown" data-close-others="true"> <span
									class="label label-warning " id="BBSl"></span> <i
									class="fa fa-bell-o"></i>
							</a>
								<ul class="dropdown-menu dropdown-menu-default"
									data-handle-color="#637283"
									style="background: rgb(252, 247, 252)">
									<li class="divider"></li>
									<li><a target-flag="N" data-target="/bbs/waititems"
										href="#" style="color: #000"> <i
											class="fa fa-users text-aqua"><font id="BBSw" size="3"
												color="red"></font></i>
									</a></li>
									<li class="divider"></li>
									<li><a target-flag="N" data-target="/bbs/waititems"
										href="#" style="color: #000"> <i
											class="fa fa-warning text-yellow"><font id="BBSd" size="3"
												color="red"></font></i>
									</a></li>
									<li class="divider"></li>
									<li><a target-flag="N" data-target="/fund/cleardm" href="#"
										style="color: #000"> <i class="fa fa-warning text-yellow"><font
												id="BBSm" size="3" color="red"></font></i>
									</a></li>
	
	
								</ul>
							<li class="dropdown dropdown-user dropdown-dark"><a href="#"
								class="dropdown-toggle" data-toggle="dropdown"
								data-hover="dropdown" data-close-others="true"> <img alt=""
									class="img-circle"
									src="${ctx}/assets/admin/layout/img/avatar9.jpg"> <span
									class="username username-hide-mobile"></span>
							</a>
								<ul class="dropdown-menu dropdown-menu-default"
									data-handle-color="#637283"
									style="background: rgb(252, 247, 252)">
	
									<li class="divider"></li>
									<li><a href="#" id="resetpwd" style="color: #000"> <i
											class="icon-key"></i> 修改密码
									</a></li>
									<li class="divider"></li>
									<li><a href="#" id="logout" style="color: #000"> <i
											class="icon-logout"></i> 退出
									</a></li>
								</ul></li>
	
							<!-- END USER LOGIN DROPDOWN -->
						</ul>
					</div>
					<!-- END TOP NAVIGATION MENU -->
				</div>
			</div>
			<!-- END HEADER TOP -->
			<!-- BEGIN HEADER MENU -->
			<div class="page-header-menu">
				<div class="container">
	
					<!-- BEGIN MEGA MENU -->
					<!-- DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background -->
					<!-- DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover -->
					<div class="hor-menu ">
						<ul class="nav navbar-nav" id="menu">
						</ul>
					</div>
					<!-- END MEGA MENU -->
				</div>
			</div>
			<!-- END HEADER MENU -->
		</div>
		<!-- END HEADER -->
		<!-- BEGIN PAGE CONTAINER -->
		<div class="page-container">
			<!-- BEGIN PAGE CONTENT -->
			<div class="page-content">
				<div class="container">
					<!-- BEGIN PAGE BREADCRUMB -->
					<ul class="page-breadcrumb breadcrumb">
						<li class="active">首页</li>
					</ul>
					<!-- END PAGE BREADCRUMB -->
					<!-- BEGIN PAGE CONTENT INNER -->
					<div class="row" id="main-content"></div>
					<!-- END PAGE CONTENT INNER -->
					<!-- 修改操作员密码弹出窗口 开始 -->
					<div id="pwdModal" class="modal fade" tabindex="-1"
						data-backdrop="static" data-keyboard="false">
						<div class="modal-header">
							<button type="button" class="close closeModal"
								data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">密码修改</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<form class="form-horizontal" role="form" id="pwd_form">
										<div class="form-body">
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												输入有误，请检查下面表单！返回信息 ：<span class="msg"></span>
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												提交表单正确！后台信息 ： <span class="msg"></span>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">旧密码</label>
												<div class="col-md-9">
													<input type="password" id="oldpwd" name="oldpwd"
														class="form-control input-inline input-medium"
														maxlength="19">
												</div>
											</div>
	
											<div class="form-group">
												<label class="col-md-3 control-label">新密码</label>
												<div class="col-md-9">
													<input type="password" id="passwd" name="passwd"
														class="form-control input-inline input-medium"
														maxlength="19" placeholder="输入新密码">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">确认新密码</label>
												<div class="col-md-9">
													<input type="password" id="confirmPwd" name="confirmPwd"
														class="form-control input-inline input-medium"
														maxlength="19" placeholder="确认新密码">
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal"
								class="btn btn-default closeModal">关闭</button>
							<button type="button" class="btn blue" id="pwdsave">保存</button>
						</div>
					</div>
					<!-- 修改操作员密码弹出窗口 结束-->
					<!-- 交易复核弹出窗口 开始 -->
					<div id="index_checkModal" class="modal fade" tabindex="-1"
						data-backdrop="static" data-keyboard="false">
						<div class="modal-header">
							<button type="button" class="close closeModal"
								data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">交易复核</h4>
						</div>
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<form class="form-horizontal" role="form" id="check_form">
										<div class="form-body">
											<div class="alert alert-danger display-hide">
												<button class="close" data-close="alert"></button>
												<span class="msg"></span>
											</div>
											<div class="alert alert-success display-hide">
												<button class="close" data-close="alert"></button>
												<span class="msg"></span>
											</div>
											<div id="index_recheck">
												<!-- 触发复核事件的隐藏节点 -->
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">复核人员账号</label>
												<div class="col-md-9">
													<input type="text" name="authus"
														class="form-control input-inline input-medium"
														maxlength="19" placeholder="输入账号">
												</div>
											</div>
											<div class="form-group">
												<label class="col-md-3 control-label">密码</label>
												<div class="col-md-9">
													<input type="password" name="authpw1"
														class="form-control input-inline input-medium"
														maxlength="19" placeholder="输入密码">
												</div>
											</div>
											<input type="hidden" name="pswdfg" value="1">
											<!-- 是否验证密码  默认验证-->
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal" id="check_cancel"
								class="btn btn-default closeModal">关闭</button>
							<button type="button" class="btn blue" id="check_save">确认</button>
						</div>
					</div>
					<div id="DmModal" class="modal fade" tabindex="-1"
						data-backdrop="static" data-keyboard="false">
						<div class="modal-header">
							<button type="button" class="close closeModal"
								data-dismiss="modal" aria-hidden="true"></button>
							<h4 class="modal-title">待清算</h4>
						</div>
						<div class="modal-body">
							<a target-flag="N" data-target="/bbs/waititems" href="#"
								style="color: #000"> <i class="fa fa-users text-aqua"><font
									id="BBSw" size="3" color="red"></font></i>
							</a>
						</div>
						<div class="modal-footer">
							<button type="button" data-dismiss="modal"
								class="btn btn-default closeModal">关闭</button>
							<button type="button" class="btn blue" id="pwdsave">保存</button>
						</div>
					</div>
					<!--  交易复核弹出窗口 结束-->
				</div>
			</div>
			<!-- END PAGE CONTENT -->
		</div>
		<!-- END PAGE CONTAINER -->
		<!-- BEGIN FOOTER -->
		<div class="page-footer">
			<div class="container">
				<%@include file="/WEB-INF/jsp/auth/foot.jsp"%>
			</div>
		</div>
		<div class="scroll-to-top">
			<i class="icon-arrow-up"></i>
		</div>
		<%@include file="/WEB-INF/common/comm-js.jsp"%>
		<%@include file="/WEB-INF/common/comm-plugin-js.jsp"%>
		<script src="${ctx}/pages/auth/scripts/auth.js" type="text/javascript"></script>
		<script src="${ctx}/pages/auth/scripts/index.js" type="text/javascript"></script>
		<script>
			jQuery(document).ready(function() {
				Index.init(); //init menu
				Demo.init(); // init demo features
			});
		</script>
	</body>
</html>