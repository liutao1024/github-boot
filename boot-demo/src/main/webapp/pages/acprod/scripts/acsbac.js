var acsbac = function(){
	// 时间插件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
   //是否产生子户
   var subafgDict = Sunline.getDict("E_YES___");
   //部分支取许可标志
   var ptdwfgDict = subafgDict;
   //失效控制
   var infetpDict = Sunline.getDict("E_INFETP");
   //存入金额控制方式
   var amntwyDict = Sunline.getDict("E_AMNTWY");
   //存入次数控制方式
   var timewyDict = Sunline.getDict("E_TIMEWY");
   //支取金额控制方式
   var dramwyDict = amntwyDict;
   //支取次数控制方式
   var drtmwyDict = timewyDict;
   //支取规则
   var drruleDict = Sunline.getDict("E_DRRULE");
   
   
	$("input[name='subafg']", $("#addSbcForm")).select2({
		data : subafgDict,
		allowClear : true
	});	
	$("input[name='ptdwfg']", $("#addSbcForm")).select2({
		data : ptdwfgDict,
		allowClear : true
	});	
	$("input[name='infetp']", $("#addSbcForm")).select2({
		data : infetpDict,
		allowClear : true
	});	
	$("input[name='amntwy']", $("#addSbcForm")).select2({
		data : amntwyDict,
		allowClear : true
	});	
	$("input[name='timewy']", $("#addSbcForm")).select2({
		data : timewyDict,
		allowClear : true
	});	
	$("input[name='dramwy']", $("#addSbcForm")).select2({
		data : dramwyDict,
		allowClear : true
	});	
	$("input[name='drtmwy']", $("#addSbcForm")).select2({
		data : drtmwyDict,
		allowClear : true
	});	

	
	
	var handleTable = function(prodcd){
		var sbacgrid = new Datatable();
		var Actionurl = Sunline.ajaxPath("acpsbc/selAcsbc");
		var sendData = ["prodcd"];
		
		sbacgrid.init({
			src : $("#datatable_scap"),
			deleteData : sendData,
			onSuccess : function(sbacgrid){
			},
			onError : function(sbacgrid){
			},
			dataTable : {
				"ajax" : {
					url : Actionurl
				},
				"columns" : [{
					"data" : "prodcd",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "subafg",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < subafgDict.length; i++) {
							if (subafgDict[i].id == data) {
								return subafgDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "ptdwfg",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < ptdwfgDict.length; i++) {
							if (ptdwfgDict[i].id == data) {
								return ptdwfgDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "infetp",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < infetpDict.length; i++) {
							if (infetpDict[i].id == data) {
								return infetpDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "infedt",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "infnum",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "spinrt",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "amntwy",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < amntwyDict.length; i++) {
							if (amntwyDict[i].id == data) {
								return amntwyDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "miniam",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "maxiam",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "timewy",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < timewyDict.length; i++) {
							if (timewyDict[i].id == data) {
								return timewyDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "minitm",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "maxitm",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "dramwy",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < dramwyDict.length; i++) {
							if (dramwyDict[i].id == data) {
								return dramwyDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "drmiam",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "drmxam",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "drtmwy",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < drtmwyDict.length; i++) {
							if (drtmwyDict[i].id == data) {
								return drtmwyDict[i].text;
							}
						}
						return data;
					}
					},{
					"data" : "drmitm",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "drmxtm",
					"sortable" : false,
					"searchable" : false,
					},{
					"data" : "drrule",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < drruleDict.length; i++) {
							if (drruleDict[i].id == data) {
								return drruleDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='edit' href='javascript:;' data-src='"
								+ data.prodcd
							    + "'>编辑 </a>";
					}
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='delete' href='javascript:;' data-src='"
								+ data.prodcd
							    + "'>删除 </a>";
					}
				}]
			}
		});
		var actionUrl = "acpsbc/addAcsbc";
		sbacgrid.bindTableDelete(sendData);// 绑定删除按钮
		//编辑函数
		sbacgrid.bindTableEdit(sendData,function(nRowA){
			
			actionUrl = "acpsbc/uptAcsbc";
			// 主键不可修改
		  $("input[name='prodcd']", $("#editsSbcModal")).attr("readOnly",true);
		  
		  $("input[name='prodcd']", $("#editsSbcModal")).val($(nRowA[0]).text());
		  $("input[name='subafg']", $("#editsSbcModal")).val(getValue(nRowA[1])).trigger("change"); 
		  $("input[name='ptdwfg']", $("#editsSbcModal")).val(getValue(nRowA[2])).trigger("change"); 
		  
		  $("input[name='infetp']", $("#editsSbcModal")).val(getValue(nRowA[3])).trigger("change"); 
		  $("input[name='infedt']", $("#editsSbcModal")).val($(nRowA[4]).text());
		  $("input[name='infnum']", $("#editsSbcModal")).val($(nRowA[5]).text());
		  $("input[name='spinrt']", $("#editsSbcModal")).val($(nRowA[6]).text());
		  $("input[name='amntwy']", $("#editsSbcModal")).val(getValue(nRowA[7])).trigger("change"); 

		  $("input[name='miniam']", $("#editsSbcModal")).val($(nRowA[8]).text());
		  $("input[name='maxiam']", $("#editsSbcModal")).val($(nRowA[9]).text());
		  $("input[name='timewy']", $("#editsSbcModal")).val(getValue(nRowA[10])).trigger("change"); 

		  $("input[name='minitm']", $("#editsSbcModal")).val($(nRowA[11]).text());
		  $("input[name='maxitm']", $("#editsSbcModal")).val($(nRowA[12]).text());
		  $("input[name='dramwy']", $("#editsSbcModal")).val(getValue(nRowA[13])).trigger("change"); 
	
		  $("input[name='drmiam']", $("#editsSbcModal")).val($(nRowA[14]).text());
		  $("input[name='drmxam']", $("#editsSbcModal")).val($(nRowA[15]).text());
		  $("input[name='drtmwy']", $("#editsSbcModal")).val(getValue(nRowA[16])).trigger("change"); 
		  
		  $("input[name='drmitm']", $("#editsSbcModal")).val($(nRowA[17]).text());
		  $("input[name='drmxtm']", $("#editsSbcModal")).val($(nRowA[18]).text());
		  $("input[name='drrule']", $("#editsSbcModal")).val(getValue(nRowA[19])).trigger("change"); 

		  $("#editsSbcModal").modal('show');
		  $("#editsSbcModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsSbcModal"))).hide();
				$(".alert-danger", $("form", $("#editsSbcModal"))).hide();
				$(".msg", $("form", $("#editsSbcModal"))).text("");
				sbacgrid.submitFilter();
			});
		});
		//取行值
		function getValue(nRow){
			
			return  $(nRow).text().substring($(nRow).text().indexOf("[")+1,$(nRow).text().indexOf("]"));
		}
		
		// 新增窗口
		$("#add_sbc_btn").bind("click", function(){
			
			$("input[name='prodcd']", $("#editsSbcModal")).attr("readOnly",false);
			$("#editsSbcModal").modal("show");
			$('input', $("#editsSbcModal")).val("").trigger("change");
			
			$("#editsSbcModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsSbcModal"))).hide();
				$(".alert-danger", $("form", $("#editsSbcModal"))).hide();
				$(".msg", $("form", $("#editsSbcModal"))).text("");
				sbacgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_sbc").click(function(){
			$("form", $("#editsSbcModal")).submit();
		});
		
		var scapValid = Sunline.getValidate( $("form","#editsSbcModal"), function(){
			var data = {};
			$.each($("input", $("#editsSbcModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter(actionUrl, data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editsSbcModal"))).show();
					$(".alert-danger", $("form", $("#editsSbcModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editsSbcModal"))).hide();
					$(".alert-danger", $("form", $("#editsSbcModal"))).show();
				}
				$(".msg", $("form", $("#editsSbcModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			subafg : {required : true}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
}();
