var AuthReasMapp=function(){
	//获取需要的枚举
	var indcatDict = Sunline.getDict("indcat");//处理类型
	var athactDict = Sunline.getDict("athact");//授权决定
	$("#edittypeModal input[name='action']").select2({
		data : athactDict,
		allowClear : true
	});
	$("#edittypeModal input[name='revble']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='cshact']").select2({
		data : athactDict,
		allowClear : true
	});
	$("#edittypeModal input[name='rtlact']").select2({
		data : athactDict,
		allowClear : true
	});
	$("#edittypeModal input[name='qryact']").select2({
		data : athactDict,
		allowClear : true
	});
	$("#edittypeModal input[name='adjact']").select2({
		data : athactDict,
		allowClear : true
	});
	
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/authreasmapps");
		var editUrl;
		var sendData = ["reason","redesc"];
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
							"data" : "reason",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "redesc",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.reason
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.reason+"'>删除 </a>";
							}
						} ]
			}
		});
		grid.bindTableDelete(sendData);// 绑定删除按钮
		
		grid.bindTableEdit(sendData,//绑定编辑按钮
				function(nRowA) {
					// 主键不可修改
					$("input[name='reason']", $("#edittypeModal")).attr(
							"readOnly", true);
					var data = {
							reason : $(nRowA[0]).text()
						};
					Sunline.ajaxRouter("cc/authreasmapp", eval(data), "post",
							function(ret) {
						     loaddata(ret.infos[0]);			
							}, function(ret) {
								bootbox.alert(ret);
							});
					
					show();
					$("#edittypeModal").modal('show');
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#edittypeModal"))).hide();
								$(".alert-danger",
										$("form", $("#edittypeModal"))).hide();
								$(".msg", $("form", $("#edittypeModal"))).text(
										"");
								grid.submitFilter();
							});
				});
		
		var loaddata = function(data) {	
			 $("#reason").val(data.reason);
	         $("#action").select2("val",data.action);
	         $("#errtpx").val(data.errtpx)
	         $("#rearan").val(data.rearan);
	         $("#redesc").val(data.redesc);
	         $("#revble").select2("val",data.revble);
	         $("#cshact").select2("val",data.cshact);
	         $("#rtlact").select2("val",data.rtlact);
	         $("#qryact").select2("val",data.qryact);
	         $("#adjact").select2("val",data.adjact);
			
		}
		
		// 新增窗口
		$("#add_arm_btn").bind(
				"click",
				function() {
					$("#reason").val("");
					$("#action").select2("val","");
					$("#errtpx").val("")
					$("#rearan").val("")
					$("#redesc").val("")
					$("#revble").select2("val","");
					$("#cshact").select2("val","");
					$("#rtlact").select2("val","");
					$("#qryact").select2("val","");
					$("#adjact").select2("val","");
					show();
					$('input', "#edittypeModal").removeAttr("readOnly");
					$("#edittypeModal").modal("show");
					$("#edittypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$("form", $("#edittypeModal"))).hide();
								$(".alert-danger",
										$("form", $("#edittypeModal"))).hide();
								$(".msg", $("form", $("#edittypeModal"))).text(
										"");
								grid.submitFilter();
							});
					return false;
				});
		show =function(){
			$(".alert-success",
					$("form", $("#edittypeModal")))
					.hide();
			$(".alert-danger",
					$("form", $("#edittypeModal")))
					.hide();
				
			}
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
					Sunline.ajaxRouter("cc/edauthreasmapp", data, "post",
							function(ret) {
								if (ret.ret == "success") {
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
					txncdx : {
						required : true
					},	
					rearan : {
						number:true
					}
				});
				
	}
	
	return {
		init : function() {
			handleTable();
		}
	}
}();