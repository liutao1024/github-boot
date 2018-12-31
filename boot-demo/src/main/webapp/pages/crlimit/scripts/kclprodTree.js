var kclprodTree = function() {
	var cyclfgDict = Sunline.getDict("E_CYCLFG"); // 循环标志
	var freezeDict = Sunline.getDict("E_FREEZE"); // 释放额度
	var clmodeDict = Sunline.getDict("E_CLMODE"); // 额度模式
	var isbdamDict = Sunline.getDict("E_ISBDAM"); // 是否超出额度金额
	var busicdDict = Sunline.getDict("E_BUSICD");
	var cllevlDict = Sunline.getDict("E_CLLEVL");
	var updtfgDict = Sunline.getDict("E_UPDTFG");
	$("input[name='busicd']", $("#confaddForm")).select2({
		data : busicdDict,
		allowClear : true
	});
	$("input[name='cllevl']", $("#confaddForm")).select2({
		data : cllevlDict,
		allowClear : true
	});
	$("input[name='updtfg']", $("#confaddForm")).select2({
		data : updtfgDict,
		allowClear : true
	});
	
	$("input[name='cyclfg']", $("#confaddForm")).select2({
		data : cyclfgDict,
		allowClear : true
	});
	$("input[name='freeze']", $("#prodaddForm")).select2({
		data : freezeDict,
		allowClear : true
	});
	$("input[name='clmode']", $("#prodaddForm")).select2({
		data : clmodeDict,
		allowClear : true
	});
	$("input[name='isbdam']", $("#prodaddForm")).select2({
		data : isbdamDict,
		allowClear : true
	});
	
	var initDictprod = function() {
		$("input[name='cyclfg']", $("#inform")).select2({
			data : cyclfgDict,
			allowClear : true
		});
		$("input[name='freeze']", $("#inform")).select2({
			data : freezeDict,
			allowClear : true
		});
		$("input[name='clmode']", $("#inform")).select2({
			data : clmodeDict,
			allowClear : true
		});
		$("input[name='isbdam']", $("#inform")).select2({
			data : isbdamDict,
			allowClear : true
		});

	}
	var initDictconf = function() {
		$("input[name='busicd']", $("#inform")).select2({
			data : busicdDict,
			allowClear : true
		});
		$("input[name='cllevl']", $("#inform")).select2({
			data : cllevlDict,
			allowClear : true
		});
		$("input[name='updtfg']", $("#inform")).select2({
			data : updtfgDict,
			allowClear : true
		});
		
	}

	var handleTree = function() {
		var options = {
			src : "#app_tree",
			qrysrc : "#qryApp",
			selectedEvent : onSelectedNode
		};
//		$(options.src).empty();
		// 获取菜单数据
		var initTree = function() {
			Sunline.ajaxRouter("crlimit/qrcltr", {}, "post", function(data) {
				var reg = new RegExp("\=", "g")
				var obj = data.data.replace(reg, ":");
				var a = eval('(' + obj + ')');
//				$('#app_tree').data('jstree', false).empty();
			     $(options.src).jstree(
									{"core" : {
											"themes" : {
												"responsive" : false
											},
											"check_callback" : true,
											'data' : a
										},
										"types" : {
											"default" : {
												"icon" : "fa fa-folder icon-state-warning icon-lg"
											},
											"file" : {
												"icon" : "fa fa-file icon-state-warning icon-lg"
											}
										},
										"plugins" : [ "types", "search", "wholerow",
												"contextmenu" ],
										"contextmenu" : {
											"items" : {
												"新增" : {
													"label" : "新增",
													"action" : function(data) {
														var inst = $.jstree
																.reference(data.reference), obj = inst
																.get_node(data.reference);
														$("input[name='prodcd']",
																$("#confaddForm"))
																.attr("readOnly",
																		"readOnly");
														$("input[name='ptclcd']",
																$("#confaddForm"))
																.attr("readOnly",
																		"readOnly");

														$("input[name='prodcd']",
																$("#confaddForm")).val(
																obj.original.prodcd);
														$("input[name='cltpcd']",
																$("#confaddForm"))
																.val();
														if (obj.parent === "#") {
															$("input[name='ptclcd']",
																	$("#confaddForm"))
																	.val();
														} else {
															$("input[name='ptclcd']",
																	$("#confaddForm"))
																	.val(
																			obj.original.info.cltpcd);
														}
														$("input[name='cllevl']",
																$("#confaddForm"))
																.val();
														$("input[name='busicd']",
																$("#confaddForm"))
																.val();
														$("input[name='bupdcd']",
																$("#confaddForm"))
																.val();
														$("input[name='fixamt']",
																$("#confaddForm"))
																.val();
														$("input[name='pratio']",
																$("#confaddForm"))
																.val();
														$("input[name='updtfg']",
																$("#confaddForm"))
																.val();
														$("#confModal").modal('show');
													}
												},
												"删除" : {
													"label" : "删除",
													"action" : function(data) {
														bootbox
																.confirm(
																		"确定要删除该条数据 ?",
																		function(result) {
																			if (!result) {
																				return;
																			}
																			var inst = $.jstree
																					.reference(data.reference), obj = inst
																					.get_node(data.reference);
																			if (obj.parent === "#") {
																				Sunline
																						.ajaxRouter(
																								"crlimit/declpr",
																								{
																									prodcd : obj.original.prodcd
																								},
																								"post",
																								function(
																										ret) {
																									bootbox
																											.alert(ret.msg);
																								},
																								null,
																								"json",
																								true);
																			} else {
																				Sunline
																						.ajaxRouter(
																								"crlimit/deconf",
																								{
																									prodcd : obj.original.prodcd,
																									cltpcd : obj.original.info.cltpcd
																								},
																								"post",
																								function(
																										ret) {
																									bootbox
																											.alert(ret.msg);
																								},
																								null,
																								"json",
																								true);
																			}
																		});
														initTree();
													}
												}
											}
										}
									}).bind("select_node.jstree", function(e, data) {
								options.selectedEvent(e, data)
							});
			});
		}
		initTree();
		var to = false;
		$(options.qrysrc).keyup(function() {
			if (to) {
				clearTimeout(to);
			}
			to = setTimeout(function() {
				var v = $(options.qrysrc).val();
				$(options.src).jstree(true).search(v);
			}, 250);
		});
	};

	var Valid = function(form) {
		return {
			prodValid : function(form) {
				return Sunline.getValidate(form, function() {
					var data = {};
					$.each($("input", form), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("crlimit/edclpr", data, 'post',
							function(ret) {
								if (ret.retCode === "0000") {
									$(".alert-success", $(form)).show();
									$('.alert-danger', $(form)).hide();
									handleTree();
								} else {
									$(".alert-success", $(form)).hide();
									$('.alert-danger', $(form)).show();
								}
								$(".msg", $(form)).text(ret.msg);
							});

				}, {
					prodcd : {
						required : true,
						maxlength : 20
					},
					prodna : {
						required : true,
						maxlength : 100
					},
					cyclfg : {
						required : true,
						maxlength : 1,
					},
					freeze : {
						maxlength : 1,
					},
					clmode : {
						maxlength : 1,
					},
					isbdam : {
						maxlength : 1,
					}
				})
			},
			confValid : function(form) {
				return Sunline.getValidate(form, function() {
					var data = {};
					$.each($("input", form), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("crlimit/edconf", data, 'post',
							function(ret) {
								if (ret.retCode === "0000") {
									$(".alert-success", $(form)).show();
									$('.alert-danger', $(form)).hide();
									handleTree();
								} else {
									$(".alert-success", $(form)).hide();
									$('.alert-danger', $(form)).show();
								}
								$(".msg", $(form)).text(ret.msg);
							});
				}, {
					prodcd : {
						required : true,
						maxlength : 20
					},
					cltpcd : {
						required : true,
						maxlength : 10
					},
					ptclcd : {
						maxlength : 10
					},
					cllevl : {
						required : true,
						maxlength : 1
					},
					busicd : {
						maxlength : 1
					},
					bupdcd : {
						maxlength : 20
					},
					fixamt : {
						number : true,
						maxlength : 21,
					},
					pratio : {
						number : true,
						maxlength : 21,
					},
					updtfg : {
						maxlength : 1
					}
				})
			}
		};
	}();

	Valid.prodValid($("#prodaddForm"));

	Valid.confValid($("#confaddForm"));

	$("#add_fu").bind("click", function() {
		$("#prodModal").modal('show');
	});

	$("#btn_conf_edit").click(function(e) {
		e.preventDefault();
		$("#confaddForm").submit();
	});
	$("#btn_prod_edit").click(function(e) {
		e.preventDefault();
		$("#prodaddForm").submit();
	});
	$("#upd_btn").click(function(e) {
		e.preventDefault();
		$("#upd_form").submit();
	});
	// 选择节点事件
	var onSelectedNode = function(e, data) {
		if (data.node.parent === "#") {
			var url = 'crlimit/qrclpr';
			Sunline.ajaxRouter(url, {
				prodcd : data.node.original.prodcd
			}, "post", function(menudata) { // 右边框填值
				$("#inform").empty();
				$("#inform").append($("#copy_prod").html());
				initDictprod();
				$("input[name='prodcd']", $("#inform")).val(
						menudata.pinfos[0].prodcd);
				$("input[name='prodna']", $("#inform")).val(
						menudata.pinfos[0].prodna);
				$("input[name='cyclfg']", $("#inform")).val(
						menudata.pinfos[0].cyclfg).trigger("change");
				$("input[name='freeze']", $("#inform")).val(
						menudata.pinfos[0].freeze).trigger("change");
				$("input[name='clmode']", $("#inform")).val(
						menudata.pinfos[0].clmode).trigger("change");
				$("input[name='isbdam']", $("#inform")).val(
						menudata.pinfos[0].isbdam).trigger("change");
			}, null, "json", true);
			Valid.prodValid($("#upd_form")).resetForm();
		} else {
			var url = 'crlimit/qrconf';
			Sunline.ajaxRouter(url, {
				prodcd : data.node.original.prodcd,
				cltpcd : data.node.original.info.cltpcd
			}, "post", function(menudata) { // 右边框填值
				console.info(menudata);
				$("#inform").empty();
				$("#inform").append($("#copy_conf").html());
				initDictconf(); 
				$("input[name='prodcd']", $("#inform")).val(
						menudata.pinfos[0].prodcd);
				$("input[name='cltpcd']", $("#inform")).val(
						menudata.pinfos[0].cltpcd);
				$("input[name='ptclcd']", $("#inform")).val(
						menudata.pinfos[0].ptclcd).trigger("change");
				$("input[name='cllevl']", $("#inform")).val(
						menudata.pinfos[0].cllevl).trigger("change");
				$("input[name='busicd']", $("#inform")).val(
						menudata.pinfos[0].busicd).trigger("change");
				$("input[name='bupdcd']", $("#inform")).val(
						menudata.pinfos[0].bupdcd);
				$("input[name='fixamt']", $("#inform")).val(
						menudata.pinfos[0].fixamt);
				$("input[name='pratio']", $("#inform")).val(
						menudata.pinfos[0].pratio);
				$("input[name='updtfg']", $("#inform")).val(
						menudata.pinfos[0].updtfg).trigger("change");
			}, null, "json", true);
		}
		Valid.confValid($("#upd_form")).resetForm();
	};

	var handleForm = function() {
		Sunline.initForm();
		$("#zipcode").inputmask({
			"mask" : "9",
			"repeat" : 6,
			"greedy" : false
		});
	};
	$("#tree_ref").click(function() {
		$.ajax({
			 type: "GET",
	            url: "../crlimit/kclprodTree",
	            dataType: "html",
			success:function(data){
				$("#main-content").html(data);
			},
			statusCode: {
				404: function() {
					var err = Sunline.getBasePath() + "/error/404";
					$("#main-content").load(err);
				}
			}
		});
	});

	return {
		init : function() {
			handleTree();
			handleForm();
		}
	};
}();