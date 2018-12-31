var ProdLion=function(){
	//获取需要的枚举
	var crcycdDict = Sunline.getDict("crcycd");//币种
	
	
	var _cshplnDict=[];//取现计划模板集合
	var _retplnDict=[];//消费计划模板
	var _bpoplnDict=[];//随借随还转出计划
	var _bpiplnDict=[];//随借随还转入计划
	var _ovpplnDict=[];//溢缴款计划
	var _splplnDict=[];//特殊计划
	var _usrplnDict=[];//自定义计划
	var input ={};
	Sunline.ajaxRouter(
         	"cc/qrtpid", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
         			return;
         		}
         		if(redata.cashxx!=null){
	         		$.each(redata.cashxx, function(i, n){
	                    n.text=n['cashna'];
	                    n.id=n['cashbr'];            
	                    });	
	         		_cshplnDict = redata.cashxx;
         		}
         		if(redata.retail!=null){
	         		$.each(redata.retail, function(i, n){
	                    n.text=n['retabr'];
	                    n.id=n['retana'];            
	                    });
	         		_retplnDict = redata.retail;
         		}
         		if(redata.depost){
	         		$.each(redata.depost, function(i, n){
	                    n.text=n['depona'];
	                    n.id=n['depobr'];            
	                    });	
	         		_ovpplnDict = redata.depost;
         		}
         		if(redata.otherx){
	         		$.each(redata.otherx, function(i, n){
	                    n.text=n['othena'];
	                    n.id=n['othebr'];            
	                    });	
	         		_usrplnDict = redata.otherx;
         		}
         		
         	},
         	function(redata){
         		
         	},
         	"json",
         	false);
	

	$("#edittypeModal input[name='currcd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("#edittypeModal input[name='cshpln']").select2({
		data : _cshplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='retpln']").select2({
		data : _retplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='bpopln']").select2({
		data : _bpoplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='bpipln']").select2({
		data : _bpiplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='ovppln']").select2({
		data : _ovpplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='splpln']").select2({
		data : _splplnDict,
		allowClear : true
	});
	$("#edittypeModal input[name='usrpln']").select2({
		data : _usrplnDict,
		allowClear : true
	});        
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/prodlions");
		var editUrl;
		var sendData = ["prodcd"];
		
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
							"data" : "prodcd",
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
										+ data.prodcd
										 + "'>编辑 </a>";
							}
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' data-src='"
										+ data.prodcd+"'>删除 </a>";
							}
						} ]
			}
		});
		grid.bindTableDelete(sendData);// 绑定删除按钮
		
		grid.bindTableEdit(sendData,//绑定编辑按钮
				function(nRowA) {
					// 主键不可修改
					$("input[name='prodcd']", $("#edittypeModal")).attr(
							"readOnly", true);
					var data = {
							prodcd : $(nRowA[0]).text()
						};
					Sunline.ajaxRouter("cc/prodlion", eval(data), "post",
							function(ret) {
						     loaddata(ret.infos[0]);			
							}, function(ret) {
								bootbox.alert(ret);
							});
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
			 $("#prodcd").val(data.prodcd);
	         $("#descrp").val(data.descrp);
	         $("#prodtp").val(data.prodtp)
	         $("#cycldt").val(data.cycldt);
	         $("#attrid").val(data.attrid);
	         
	         $("#latpym").val(data.latpym);
	         $("#xfrpcd").val(data.xfrpcd);
	         
	         $("#currcd").select2("val",data.currcd);
	         $("#retpln").select2("val",data.retpln);
	         $("#cshpln").select2("val",data.cshpln);
	         $("#ovppln").select2("val",data.ovppln);
	         
	         $("#bpopln").select2("val",data.bpopln);
	         $("#bpipln").select2("val",data.bpipln);
	         $("#splpln").select2("val",data.splpln);
	         $("#usrpln").select2("val",data.usrpln);
			
		}
		// 新增窗口
		$("#add_tc_btn").bind(
				"click",
				function() {
					$("#prodcd", "#edittypeModal").removeAttr("readOnly");
					$("#prodcd").val("");
					$("#descrp").val("");
					$("#prodtp").val("");
					$("#cycldt").val("");
					$("#attrid").val("");
					
					 $("#latpym").val("");
			         $("#xfrpcd").val("");
					
					$("#currcd").select2("val","");
					$("#retpln").select2("val","");
					$("#cshpln").select2("val","");
					$("#ovppln").select2("val","");
					$("#bpopln").select2("val","");
					$("#bpipln").select2("val","");
					$("#splpln").select2("val","");
					$("#usrpln").select2("val","");
					
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
					Sunline.ajaxRouter("cc/edprodlion", data, "post",
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
					prodcd : {
						required : true
					},	
					cycldt : {
						number:true
					},
					attrid : {
						number:true
					},
					latpym : {
						number:true
					},
					cycldt : {
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