var LockCode=function(){
	var indcatDict = Sunline.getDict("indcat");//判断
	var pmcameDict = Sunline.getDict("pmcame");//还款计算方式
	var postfgDict = Sunline.getDict("postfg");//入账许可指示
	$("#edittypeModal input[name='loanxf']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='postfg']").select2({
		data : postfgDict,
		allowClear : true
	});
	$("#edittypeModal input[name='wintfg']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='wtxffg']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='stmtfg']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='duecal']").select2({
		data : pmcameDict,
		allowClear : true
	});
	$("#edittypeModal input[name='acrufg']").select2({
		data : indcatDict,
		allowClear : true
	});
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/lockcodes");
		var sendData = ["lockcd","descrp"];
		var editUrl;
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						
					},
					onError : function(grid) {
						
					},
					dataTable : { 
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "lockcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "descrp",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.lockcd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.lockcd+ "'>删除 </a>";
									}
								} ]
					}
				});
		//编辑
		var editForm = function(nRowA){
			var data = {
					lockcd : $(nRowA[0]).text()
				};
			Sunline.ajaxRouter("cc/lockcode", eval(data), "post",
					function(ret) {
				     loaddata(ret.infos[0]);			
					}, function(ret) {
						bootbox.alert(ret);
					});
			   
			show();
	       	$("#edittypeModal").modal('show');
		};
		show =function(){
				$(".alert-success",
						$("form", $("#edittypeModal")))
						.hide();
				$(".alert-danger",
						$("form", $("#edittypeModal")))
						.hide();
					
				}
		var loaddata = function(data) {	
			$("#lockcd").val(data.lockcd);
	         $("#loanxf").select2("val",data.loanxf);
	         $("#prorty").val(data.prorty)
	         $("#postfg").select2("val",data.postfg);
	         $("#acrufg").select2("val",data.acrufg);
	         $("#wintfg").select2("val",data.wintfg);
	         $("#wtxffg").select2("val",data.wtxffg);
	         $("#stmtfg").select2("val",data.stmtfg);
	         $("#duecal").select2("val",data.duecal);
	         $("#autofg").val(data.autofg);
	         $("#descrp").val(data.descrp);
	         $("#reason").val(data.reason);
			
		}
		grid.bindTableDelete(sendData);//绑定删除按钮
		grid.bindTableEdit(sendData,editForm);//绑定编辑按钮
		
		$('#add_clc_btn').click(function(){
		     $("#lockcd").val("");
	         $("#loanxf").select2("val","");
	         $("#prorty").val("")
	         $("#postfg").select2("val","");
	         $("#acrufg").select2("val","");
	         $("#wintfg").select2("val","");
	         $("#wtxffg").select2("val","");
	         $("#stmtfg").select2("val","");
	         $("#duecal").select2("val","");
	         $("#autofg").val("");
	         $("#descrp").val("");
	         $("#reason").val("");
	         show();
		     $('.add-form .alert').css('display','none');
			 $('.add-form .form-group').removeClass('has-error');
			 $('.add-form .form-group .help-block').remove();
			
		     $("#edittypeModal").modal('show');
	   	});
		
		
		
		//保存
		$("#btn_save_type").click(function() {
			$("form", $("#edittypeModal")).submit();
		});
		var matuValid = Sunline.getValidate($("form", "#edittypeModal"),
				function() {
					var data = {};
					$.each($("input", $("#edittypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("cc/edlockcode", data, "post",
							function(ret) {
								if (ret.retCode == "success") {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.show();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.show();
								}
								$(".msg", $("form", $("#edittypeModal"))).text(
										ret.msg);
							});

				}, {
					lockcd : {
						required : true
					}					
				});

	}

	return {
		init : function() {
			handleTable();
		}
	}
}();