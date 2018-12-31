var Index = function() {
	// 获取登陆用户ID
	var _userId = Auth.getCookieUserId();
	/*
	 * 初始化用户信息设置cookie,
	 */
	var handleUser = function() {
		var rqdata;//在请求目标中发现的无效字符,有效字符是在RFC 7230和RFC 3986中定义的
		Sunline.ajaxRouter(
				"auth/userinfo", 
				rqdata, 
				"GET", 
				function(data) {
					if (data.ret == "success") {
						$(".username").text(data.user.userna);
						Auth.setCookieUserId(data.user.userid);
					} else {
						bootbox.alert(data.msg);
					}
				}, 
				function(data) {
				
				});

		/**
		 * 修改密码
		 */
		var mod = $("#pwdModal");
		$("#resetpwd").on("click", function() {
			// 清空原纪录
			$("#oldpwd", mod).val("");
			$("#passwd", mod).val("");
			$("#confirmPwd", mod).val("");
			$(".msg", mod).text("");
			$('.alert-success', mod).hide();
			$('.alert-danger', mod).hide();
			mod.modal("show");
		});
		// 保存修改的密码
		$("#pwdsave", mod).click(function(e) {
			e.preventDefault();
			$("#pwd_form").submit();
		});

		/**
		 * 签退
		 */
		$("#logout").click(function() {
			Sunline.ajaxRouter("auth/logout", {}, "POST", function() {
				Auth.deleteCookieUserId();
				Sunline.localPath("auth/login");
			});
		});
		/**
		 * 表单验证
		 */
		$("#pwd_form").validate(
				{
					errorElement : 'span',
					errorClass : 'help-block help-block-error',
					focusInvalid : false,
					ignore : "",
					rules : { // 验证规则
						oldpwd : {
							required : true,
							rangelength : [ 4, 19 ]
						},
						passwd : {
							required : true,
							rangelength : [ 4, 19 ]
						},
						confirmPwd : {
							required : true,
							equalTo : "#passwd"
						}

					},

					invalidHandler : function(event, validator) {
						editsuccess.hide();
						editerror.show();
						Metronic.scrollTo(editerror, -200);
					},

					errorPlacement : function(error, element) {
						element.parent().append(error);
					},

					highlight : function(element) {
						$(element).closest('.form-group').removeClass(
								"has-success").addClass('has-error');
					},

					unhighlight : function(element) {

					},

					success : function(label, element) {
						var icon = $(element).parent('.input-icon').children(
								'i');
						$(element).closest('.form-group').removeClass(
								'has-error').addClass('has-success'); // set
						icon.removeClass("fa-warning").addClass("fa-check");
					},
					submitHandler : function(form) {
						$("#pwd_form").validate().resetForm();
						$('.form-group').removeClass('has-error').removeClass(
								"has-success");
						var data = {};
						data.passwd = $("#oldpwd", mod).val();
						data.nwpswd = $("#passwd", mod).val();
						Sunline.ajaxRouter(
								"auth/ucpswd", 
								data, 
								"post",
								function(ret) {
									$(".msg", mod).text(ret.msg);
									$('.alert-success', mod).show();
									$('.alert-danger', mod).hide();
								}, 
								function() {
									$(".msg", mod).text("请求异常,请检查网络");
									$('.alert-success', mod).hide();
									$('.alert-danger', mod).show();
								});
					}
				});
	};
	
	/**
	 * 获取用户菜单数据,生成菜单
	 * 
	 */
	var handleMenu = function() {
		var sendData;
		Sunline.ajaxRouter(
						"auth/menu",
						sendData,
						"GET",
						function(data) {
							jQuery.each(data.menu,function(index, val) {
												var menu = $("#menu");
												var menuscript = '<li class="menu-dropdown classic-menu-dropdown ">'
														+ '<a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" ';
												// 处理菜单链接
												if (Sunline.isNull(val.authUrl)) {
													menuscript = menuscript + 'href="javascript:;">';
												} else {
													menuscript = menuscript + 'href="' + val.authUrl + '">';
												}
												// 处理菜单名称
												menuscript = menuscript + val.menuName;
												menuscript = menuscript + ' <i class="fa fa-angle-down"></i>';
												menuscript = menuscript + '</a>';
												// 处理子菜单
												if (!Sunline.isNull(val.haschild) && val.haschild === "Y") {
													menuscript = menuscript + '<ul class="dropdown-menu pull-left">';
													// 调用处理子菜单方法
													menuscript = menuscript + handleSubMenu(val.children);
													menuscript = menuscript + '</ul>';
												}
												menuscript = menuscript + '</li>';
												menu.append(menuscript);
											});
							Layout.init(); // init current layout
							handleNavigation();
						});
	};
	
	/**
	 * 生成菜单内容 url 菜单链接 iconfg 菜单图标 menuName 菜单名称
	 * 
	 */
	var handleMenuUrl = function(menu) {
		var menuscript = '';
		if (Sunline.isNull(menu.authUrl)) {
			menuscript = menuscript + '<a href="javascript:;">';
		} else {
			menuscript = menuscript + '<a href="#" data-target="'
					+ menu.authUrl + '"';
			// 处理跳转外部系统
			if (Sunline.isNull(menu.targetFlag)) {
				menuscript = menuscript + ' target-flag="N" ';
			} else {
				menuscript = menuscript + ' target-flag="' + menu.targetFlag + '" ';
			}

			menuscript = menuscript + '>';
		}
		if (!Sunline.isNull(menu.iconfg)) {
			menuscript = menuscript + ' <i class="' + menu.iconfg + '"></i>';
		} else {
			menuscript = menuscript + ' <i class=""></i>';
		}
		menuscript = menuscript + menu.menuName + '</a>';
		return menuscript;
	};

	/**
	 * 生成子菜单
	 * 
	 */
	var handleSubMenu = function(submenu) {
		var subscript = '';
		jQuery.each(submenu, function(index, val) {
			// 递归处理子菜单
			if (!Sunline.isNull(val.haschild) && val.haschild === "Y") {
				subscript = subscript + '<li class="dropdown-submenu">';
				subscript = subscript + handleMenuUrl(val);
				subscript = subscript + '<ul class="dropdown-menu">';
				subscript = subscript + handleSubMenu(val.children);
				subscript = subscript + '</ul></li>';
			} else {
				// 节点菜单
				subscript = subscript + '<li class=" ">';
				subscript = subscript + handleMenuUrl(val) + '</li>';
			}
		});
		return subscript;
	};

	/**
	 * 控制菜单链接,加载菜单页面
	 */
	var handleHref = function(obj) {
		// 菜单页面加载
		var href = $(obj).attr("data-target");
		var targetFlag = $(obj).attr("target-flag");
		if (!Sunline.isNull(href)) {
			if (targetFlag == "N") {
				href = Sunline.getBasePath() + "/path" + href;
			}

			$.ajax({
				type : "POST",
				url : href,
				success : function(data) {
					$("#main-content").html(data);
				},
				statusCode : {
					404 : function() {
						var err = Sunline.getBasePath() + "/error/404";
						$("#main-content").load(err);
					}
				}
			});
		}
	};

	/**
	 * 点击菜单生成导航信息
	 * 
	 */
	var handleNavigation = function() {
		// 点击菜单生成导航
		$(".dropdown-menu > li > a").click(
						function(e) {
							var navscript = '<li class="active">' + $(this).text() + '</li>';
							jQuery.each($(this).parents(),
										function(index, val) {
											// 遍历所有父节点,查找样式为menu-dropdown或dropdown-submenu的父节点
											var classList = val.classList;
											for (var i = 0; i < classList.length; i++) {
												if (classList[i] == "menu-dropdown" || classList[i] == "dropdown-submenu") {
													navscript = '<li><a href="#">' + val.firstChild.text
															+ '</a><i class="fa fa-circle"></i></li>' + navscript;
												}
											}
										});
							$(".page-breadcrumb").html(navscript);
							handleHref(this);
						});
		// 首页链接点击,生成导航
		$("#home").click(function() {
			$(".page-breadcrumb").html('<li class="active">首页</li>');
			handleHref(this);
		});
	};
	
	/**
	 * 获取待办事项
	 */
	var handBSB =function(){
		var rqdata;
		Sunline.ajaxRouter(
				"auth/to-do-list",
				rqdata,
				"GET",
				function(rpdata){
					if(rpdata.ret=="success"){
						var list = rpdata.infos;
						var lm=rpdata.wcouts;
						var m=0;
						var n=0;
						for(var i=0;i<list.length;i++){
							obj = list[i];
							
							if(obj.subjtp == 1){
								m++;
							}else{
								n++;
							}
							
						}
						var sum=parseInt(rpdata.iTotalDisplayRecords)+parseInt(lm);
						
						$("#BBSw").text(m+"条未查看通知");
						$("#BBSd").text(n+"未处理事项");
						$("#BBSm").text(lm+"待清算事项");
						$("#BBSl").text("提醒"+"("+sum+")");
						
					}else{						
						bootbox.alert(rpdata.msg);
					}	
				
				});
	};
	
	/**
	 * 页面初始化
	 */
	return {
		init : function() {
			handleUser();
			handleMenu();
			handBSB();
		}
	};
}();