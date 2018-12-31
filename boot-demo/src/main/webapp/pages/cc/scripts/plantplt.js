var PlanTplt=function(){
	//获取需要的枚举
	var plantpDict = Sunline.getDict("plantp");//计划类型
	var mergplDict = Sunline.getDict("mergpl");//多交易共享计划标识
	var indcatDict = Sunline.getDict("indcat");//是否参与还款分配标志
	var intacuDict = Sunline.getDict("intacu");//起息日类型  
	var _intbidDict=[];//利率表编号
	var input ={};
	Sunline.ajaxRouter(
         	"cc/qrrtid", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
         			return;
         		}
         		if(redata.infos!=null){
	         		$.each(redata.infos, function(i, n){
	                    n.text=n['intbna'];
	                    n.id=n['intbid'];            
	                    });	
	         		_intbidDict = redata.infos;
         		}        		
         	},
         	function(redata){
         		
         	},
         	"json",
         	false);	
	
	$("#edittypeModal input[name='plantp']").select2({
		data : plantpDict,
		allowClear : true
	});
	$("#edittypeModal input[name='mergfg']").select2({
		data : mergplDict,
		allowClear : true
	});
	$("#edittypeModal input[name='pmhier']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intbid1']").select2({
		data : _intbidDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intbid2']").select2({
		data : _intbidDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intbid3']").select2({
		data : _intbidDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intbid4']").select2({
		data : _intbidDict,
		allowClear : true
	});
	$("#edittypeModal input[name='acrutp1']").select2({
		data : intacuDict,
		allowClear : true
	});
	$("#edittypeModal input[name='acrutp2']").select2({
		data : intacuDict,
		allowClear : true
	});
	$("#edittypeModal input[name='acrutp3']").select2({
		data : intacuDict,
		allowClear : true
	});
	$("#edittypeModal input[name='acrutp4']").select2({
		data : intacuDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intwav1']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intwav2']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intwav3']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='intwav4']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isfull1']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isfull2']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isfull3']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isfull4']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isotbx1']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isotbx2']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isotbx3']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isotbx4']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isovlm1']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isovlm2']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isovlm3']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='isovlm4']").select2({
		data : indcatDict,
		allowClear : true
	});
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/plantplt");
		var editUrl;
		var sendData = ["planbr"];
		
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
							"data" : "planbr",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "plantp",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								for (var i = 0; i < plantpDict.length; i++) {
									if (plantpDict[i].id == data) {
										return plantpDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "plande",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "mergfg",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								for (var i = 0; i < mergplDict.length; i++) {
									if (mergplDict[i].id == data) {
										return mergplDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "pmhier",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								for (var i = 0; i < indcatDict.length; i++) {
									if (indcatDict[i].id == data) {
										return indcatDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='edit' href='javascript:;' data-src='"
										+ data.planbr
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.planbr+"'>删除 </a>";
							}
						} ]
			}
		});
		grid.bindTableDelete(sendData);// 绑定删除按钮
		
		grid.bindTableEdit(sendData,//绑定编辑按钮
				function(nRowA) {
					// 主键不可修改
					$("input[name='planbr']", $("#edittypeModal")).attr(
							"readOnly", true);
					$("input[name='bnpidx1']", $("#edittypeModal")).attr(
							"readOnly", true);
					$("input[name='bnpidx2']", $("#edittypeModal")).attr(
							"readOnly", true);
					$("input[name='bnpidx3']", $("#edittypeModal")).attr(
							"readOnly", true);
					$("input[name='bnpidx4']", $("#edittypeModal")).attr(
							"readOnly", true);
					var data = {
							planbr : $(nRowA[0]).text()
						};
					Sunline.ajaxRouter("cc/qruntp", eval(data), "post",
							function(ret) {
						     loaddata(ret);			
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
			$("#planbr").val(data.planbr);
	         $("#plantp").select2("val",data.plantp);
	         $("#plande").val(data.plande);
	         $("#prorty").val(data.prorty);
	         $("#mergfg").select2("val",data.mergfg);
	         $("#pmhier").select2("val",data.pmhier);
	         $("#xfrnbr").val(data.xfrnbr);
	         $("#clndys").val(data.clndys);
	         
	         $("#bnpidx1").val(data.bnpidx1);
	         $("#intbid1").select2("val",data.intbid1);
	         $("#acrutp1").select2("val",data.acrutp1);
	         $("#intwav1").select2("val",data.intwav1);
	         $("#isfull1").select2("val",data.isfull1);	         
	         $("#isotbx1").select2("val",data.isotbx1);
	         $("#isovlm1").select2("val",data.isovlm1);
	         $("#ctdrat1").val(data.ctdrat1);
	         $("#pstrat1").val(data.pstrat1);
	         
	         $("#bnpidx2").val(data.bnpidx2);
	         $("#intbid2").select2("val",data.intbid2);
	         $("#acrutp2").select2("val",data.acrutp2);
	         $("#intwav2").select2("val",data.intwav2);
	         $("#isfull2").select2("val",data.isfull2);	         
	         $("#isotbx2").select2("val",data.isotbx2);
	         $("#isovlm2").select2("val",data.isovlm2);
	         $("#ctdrat2").val(data.ctdrat2);
	         $("#pstrat2").val(data.pstrat2);
	         
	         $("#bnpidx3").val(data.bnpidx3);
	         $("#intbid3").select2("val",data.intbid3);
	         $("#acrutp3").select2("val",data.acrutp3);
	         $("#intwav3").select2("val",data.intwav3);
	         $("#isfull3").select2("val",data.isfull3);	         
	         $("#isotbx3").select2("val",data.isotbx3);
	         $("#isovlm3").select2("val",data.isovlm3);
	         $("#ctdrat3").val(data.ctdrat3);
	         $("#pstrat3").val(data.pstrat3);
	         
	         $("#bnpidx4").val(data.bnpidx4);
	         $("#intbid4").select2("val",data.intbid4);
	         $("#acrutp4").select2("val",data.acrutp4);
	         $("#intwav4").select2("val",data.intwav4);
	         $("#isfull4").select2("val",data.isfull4);	         
	         $("#isotbx4").select2("val",data.isotbx4);
	         $("#isovlm4").select2("val",data.isovlm4);
	         $("#ctdrat4").val(data.ctdrat4);
	         $("#pstrat4").val(data.pstrat4);			
		}
		show =function(){
			$(".alert-success",
					$("form", $("#edittypeModal")))
					.hide();
			$(".alert-danger",
					$("form", $("#edittypeModal")))
					.hide();
				
			}
		// 新增窗口
		$("#add_pt_btn").click(function(){
					 $("#planbr").val("");
			         $("#plantp").select2("val","");
			         $("#plande").val("");
			         $("#prorty").val("");
			         $("#mergfg").select2("val","");
			         $("#pmhier").select2("val","");
			         $("#xfrnbr").val("");
			         $("#clndys").val("");
			         
			         $("#bnpidx1").val("");
			         $("#intbid1").select2("val","");
			         $("#acrutp1").select2("val","");
			         $("#intwav1").select2("val","");
			         $("#isfull1").select2("val","");	         
			         $("#isotbx1").select2("val","");
			         $("#isovlm1").select2("val","");
			         $("#ctdrat1").val("");
			         $("#pstrat1").val("");
			         
			         $("#bnpidx2").val("");
			         $("#intbid2").select2("val","");
			         $("#acrutp2").select2("val","");
			         $("#intwav2").select2("val","");
			         $("#isfull2").select2("val","");	         
			         $("#isotbx2").select2("val","");
			         $("#isovlm2").select2("val","");
			         $("#ctdrat2").val("");
			         $("#pstrat2").val("");
			         
			         $("#bnpidx3").val("");
			         $("#intbid3").select2("val","");
			         $("#acrutp3").select2("val","");
			         $("#intwav3").select2("val","");
			         $("#isfull3").select2("val","");	         
			         $("#isotbx3").select2("val","");
			         $("#isovlm3").select2("val","");
			         $("#ctdrat3").val("");
			         $("#pstrat3").val("");
			         
			         $("#bnpidx4").val("");
			         $("#intbid4").select2("val","");
			         $("#acrutp4").select2("val","");
			         $("#intwav4").select2("val","");
			         $("#isfull4").select2("val","");	         
			         $("#isotbx4").select2("val","");
			         $("#isovlm4").select2("val","");
			         $("#ctdrat4").val("");
			         $("#pstrat4").val("");
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
					Sunline.ajaxRouter("cc/edplantplt", data, "post",
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
					planbr : {
						required : true
					},
					bnpidx1 : {
						number : true,
						required : true
					},
					bnpidx2 : {
						number : true,
						required : true
					},
					bnpidx3 : {
						number : true,
						required : true
					},
					bnpidx4 : {
						number : true,
						required : true
					},
					prorty : {
						number : true
					}
				});
				
	}
	
	return {
		init : function() {
			handleTable();
		}
	}
}();