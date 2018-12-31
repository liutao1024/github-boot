var acpprod = function() {
	// 时间插件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
	var parmstDict = Sunline.getDict("E_PARMST");
	var crcycdDict = Sunline.getDict("E_CRCYCD");
	var prodtpDict = Sunline.getDict("E_PRODTP");
	var pscntlDict = Sunline.getDict("E_CONTTP");
	var svcntlDict = Sunline.getDict("E_CONTTP");
	
	$("input[name='crcycd']", $("#prdAddForm")).select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='parmst']", $("#prdAddForm")).select2({
		data : parmstDict,
		allowClear : true
	});
	$("input[name='prodtp']", $("#prdAddForm")).select2({
		data : prodtpDict,
		allowClear : true
	});
	$("input[name='pscntl']", $("#prdAddForm")).select2({
		data : pscntlDict,
		allowClear : true
	});
	$("input[name='svcntl']", $("#prdAddForm")).select2({
		data : svcntlDict,
		allowClear : true
	});
	//全局变量定义
	var nextPage = 0;
	
	var handleTable = function() {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("acprod/selAcprod");
		var editUrl;
		var sendData = [ "prodcd" ];

		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
					},
					onError : function(grid) {
					},
					dataTable : {
						"ajax" : {
							"url" : url,
						},
						"columns" : [
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prodna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prodtp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < prodtpDict.length; i++) {
											if (prodtpDict[i].id == data) {
												return prodtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "pscntl",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pscntlDict.length; i++) {
											if (pscntlDict[i].id == data) {
												return pscntlDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "psctcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "svcntl",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < svcntlDict.length; i++) {
											if (svcntlDict[i].id == data) {
												return svcntlDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "svctcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < crcycdDict.length; i++) {
											if (crcycdDict[i].id == data) {
												return crcycdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "parmst",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < parmstDict.length; i++) {
											if (parmstDict[i].id == data) {
												return parmstDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : null,
									"width" : "18%",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.prodcd + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd + "'>删除 </a>";
									}
								} ]
					}
				});
	   //+++++++++++++++++++++++++++++++++++++++++++++++++++++
		var actionUrl = "acprod/uptAcprod";
		var editform = $('.form-horizontal');
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_btn").bind("click", function() {
			nextPage = 0;
			loadSubPage($(this),'acprod');
			$("#btn_save_upst").attr("disabled", true);
			$("#btn_save_next").attr("disabled", false);
			
			actionUrl = "acprod/addAcprod";
			$('input', editform).attr("readOnly", false);
			//清除表单域数据
			$('input', editform).val("").trigger("change");
			$("#addModal").modal('show');
			$("#addModal").on("hide.bs.modal", function() {
				grid.submitFilter();
			});
		});
		grid.bindTableEdit(sendData,function(nRowA){
			nextPage = 0;
			loadSubPage($(this),'acprod');
			$("#btn_save_upst").attr("disabled", true);
			$("#btn_save_next").attr("disabled", false);
			
			 actionUrl = "acprod/uptAcprod";
			 // 主键不可修改
			  $("input[name='prodcd']", $("#addModal")).attr("readOnly",true);
			  $("input[name='prodtp']", $("#addModal")).attr("readOnly",true);
			  $("input[name='crcycd']", $("#addModal")).attr("readOnly",true);
			  // 给input框赋值
			  $("input[name='prodcd']", $("#addModal")).val($(nRowA[0]).text());
			  $("input[name='prodna']", $("#addModal")).val($(nRowA[1]).text()); 
			 //产品类型
			  $("input[name='prodtp']", $("#addModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			 //交易控制方式
			  $("input[name='pscntl']", $("#addModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			  //交易码
			  $("input[name='psctcd']", $("#addModal")).val($(nRowA[4]).text());
			 //渠道方式
			  $("input[name='svcntl']", $("#addModal")).val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change");
			  //渠道码
			  $("input[name='svctcd']", $("#addModal")).val($(nRowA[6]).text());
			  //币种
			  $("input[name='crcycd']", $("#addModal")).val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change");
			  //状态
			  $("input[name='parmst']", $("#addModal")).val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");
			  $("#addModal").modal('show');
			  $("#addModal").on("hide.bs.modal", function(){
					$(".alert-success", $("#addModal")).hide();
					$(".alert-danger", $("#addModal")).hide();
					$(".msg", $("#addModal")).text("");
					grid.submitFilter();
				});
		});
		//-------del start------------------
		grid.bindTableDelete(sendData);
		//------end---------------
		
		$("#btn_save").click(function() {
			$("#prdAddForm").submit();
		});
		//下一页保存
		$("#btn_save_next").click(function() {
			nextPage=nextPage+1;
			$("#btn_save").hide();
			if(nextPage%4==1){
				loadSubPage($(this),'accont');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", false);
			}else if(nextPage%4==2){
				loadSubPage($(this),'acsbac');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", false);
			}else if(nextPage%4==3){
				loadSubPage($(this),'acbusi');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", true);
			}else if(nextPage%4==0){
				loadSubPage($(this),'acprod');
				$("#btn_save").show();
				$("#btn_save_upst").attr("disabled", true);
				$("#btn_save_next").attr("disabled", false);
			}
		});
		$("#btn_save_upst").click(function() {
			nextPage=nextPage-1;
			$("#btn_save").hide();
			if(nextPage%4==1){
				loadSubPage($(this),'accont');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", false);
			}else if(nextPage%4==2){
				loadSubPage($(this),'acsbac');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", false);
			}else if(nextPage%4==3){
				loadSubPage($(this),'acbusi');
				$("#btn_save_upst").attr("disabled", false);
				$("#btn_save_next").attr("disabled", true);
			}else if(nextPage%4==0){
				loadSubPage($(this),'acprod');
				$("#btn_save").show();
				$("#btn_save_upst").attr("disabled", true);
				$("#btn_save_next").attr("disabled", false);
			}
		});
		
		var toggleButton = function(el) {
	        if (typeof el == 'undefined') {
	            return;
	        }
	        if (el.attr("disabled")) {
	            el.attr("disabled", false);
	        } else {
	            el.attr("disabled", true);
	        }
	    }
		
	   Sunline.getValidate( $("#prdAddForm"),
				function() {
					var data = {};
					$.each($("input", $("#prdAddForm")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter(actionUrl, data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$("#prdAddForm")).show();
									$('.alert-danger',
											$("#prdAddForm"))
											.hide();
								} else {
									$(".alert-success",
											 $("#prdAddForm"))
											.hide();
									$('.alert-danger',
											$("#prdAddForm"))
											.show();
								}
								$(".msg", $("#prdAddForm")).text(ret.msg);
							});

				}, {
					prodcd : {
						required : true
					},
					prodna : {
						required : true
					},
					crcycd : {
						required : true
					},
					parmst : {
						required : true
					},
					psctcd : {
						maxlength : 20
					},
					svctcd : {
						maxlength : 20
					}
				});
	};
	
	 var content = $('.inbox-content');
	 var loadSubPage = function (el,name) { 
	    	console.info("加载子页面",name);   	
	        content.html('');
	        $.ajax({
	            type: "GET",
	            url: "../acprod/"+name,
	            dataType: "html",
	            success: function(res) 
	            {    
	                $('.inbox-nav > li.active').removeClass('active');
	                $('.inbox-nav > li.' + name).addClass('active');

	                content.html(res);
	                content.ready(function(){               	
	                	 Metronic.initUniform();
	                });;             
	            },
	            error: function(xhr, ajaxOptions, thrownError)
	            {
	            },
	            async: false
	        });
	    }
	 
	 
	return {
		init : function() {
			handleTable();
		}
	}
}();