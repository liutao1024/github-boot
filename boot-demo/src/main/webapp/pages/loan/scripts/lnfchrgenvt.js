var lnfchrgenvt = function(){
	
	/**
	 * 枚举类型调取
	 */
	var crcycdDict = Sunline.getDict("E_CRCYCD"); // 币种
	var chrgfgDict = Sunline.getDict("E_CHRGFG"); // 收费种类
	var recdstDict = Sunline.getDict("E_RECDST"); // 记录状态
	
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='chrgfg']").select2({
		data : chrgfgDict,
		allowClear : true
	});
	$("input[name='recdst']").select2({
		data : recdstDict,
		allowClear : true
	});
	
	var handleTable = function(prodcd){
		var envtgrid = new Datatable();
		var envturl = Sunline.ajaxPath("loan/qrenvt");// URL???
		var envtsendData = [ "prodcd", "crcycd", "envtcd"];// 主键
		if(!Sunline.isNull(prodcd)){
			envtgrid.setAjaxParam("q_prodcd", prodcd);
		}
		envtgrid.init({
			src : $("#datatable_envt"),
			deleteData : envtsendData,
			onSuccess : function(envtgrid){
			},
			onError : function(envtgrid){
			},
			dataTable : {
				"ajax" : {
					url : envturl
				},
				"columns" : [{
					"data" : "prodcd",// 产品代码
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "crcycd",// 币种
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
				},{
					"data" : "envtcd",// 收费事件
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "envtna",// 收费事件名称
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "chrgfg",// 收费种类
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full){
						for(var i=0; i<chrgfgDict.length; i++){
							if(chrgfgDict[i].id == data){
								return chrgfgDict[i].text;
							}
						}
					}
				},{
					"data" : "chrgcd",// 收费代码
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "chrgna",// 收费代码名称
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "chrgam",// 收费金额
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "recdst",// 记录状态
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full){
						for(var i=0; i<recdstDict.length; i++){
							if(recdstDict[i].id == data){
								return recdstDict[i].text;
							}
						}
					}
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='edit' href='javascript:;' data-src='"
								+ data.prodcd
								+ ","
								+ data.crcycd
								+ ","
								+ data.envtcd
							    + "'>编辑 </a>";
					}
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='delete' href='javascript:;' data-src='"
								+ data.prodcd
								+ ","
								+ data.crcycd
								+ ","
								+ data.envtcd
							    + "'>删除 </a>";
					}
				}]
			}
		});
		envtgrid.bindTableDelete(envtsendData);// 绑定删除按钮
		
		envtgrid.bindTableEdit(envtsendData,function(nRowA){
			// 主键不可修改
		  $("input[name='prodcd']", $("#editenvtModal")).attr("readOnly",true);
		  $("input[name='crcycd']", $("#editenvtModal")).attr("readOnly",true);
		  $("input[name='envtcd']", $("#editenvtModal")).attr("readOnly",true);
		  // 给input框赋值
		  // 产品代码 --基本类型
		  $("input[name='prodcd']", $("#editenvtModal")).val($(nRowA[0]).text());
		  // 货币代号--枚举类型
		  $("input[name='crcycd']", $("#editenvtModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
		  // 收费事件
		  $("input[name='envtcd']", $("#editenvtModal")).val($(nRowA[2]).text());
		  // 收费事件名称
		  $("input[name='envtna']", $("#editenvtModal")).val($(nRowA[3]).text());
		  // 收费种类
		  $("input[name='chrgfg']", $("#editenvtModal")).val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
		  // 收费代码
		  $("input[name='chrgcd']", $("#editenvtModal")).val($(nRowA[5]).text());
		  // 收费代码名称
		  $("input[name='chrgna']", $("#editenvtModal")).val($(nRowA[6]).text());
		  // 收费金额
		  $("input[name='chrgam']", $("#editenvtModal")).val($(nRowA[7]).text());
		  // 记录状态
		  $("input[name='recdst']", $("#editenvtModal")).val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");
		  $("#editenvtModal").modal('show');
		  
		  $("#editenvtModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editenvtModal"))).hide();
				$(".alert-danger", $("form", $("#editenvtModal"))).hide();
				$(".msg", $("form", $("#editenvtModal"))).text("");
				envtgrid.submitFilter();
			});
		});
		
		$("#editenvtModal").click(function(){
	   	    $(".select-close").select2("close");
		});
		
		// 新增窗口
		$("#add_envt_btn").bind("click", function(){
			$("input[name='crcycd']", $("#editenvtModal")).attr("readOnly",false);	
			$("input[name='prodcd']", $("#editenvtModal")).val(prodcd);
			$("#editenvtModal").modal("show");
			$("#editenvtModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editenvtModal"))).hide();
				$(".alert-danger", $("form", $("#editenvtModal"))).hide();
				$(".msg", $("form", $("#editenvtModal"))).text("");
				envtgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_envt").click(function(){
			$("form", $("#editenvtModal")).submit();
		});
		
		var envtValid = Sunline.getValidate( $("form","#editenvtModal"), function(){
			var data = {};
			$.each($("input", $("#editenvtModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("loan/edenvt", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editenvtModal"))).show();
					$(".alert-danger", $("form", $("#editenvtModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editenvtModal"))).hide();
					$(".alert-danger", $("form", $("#editenvtModal"))).show();
				}
				$(".msg", $("form", $("#editenvtModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			crcycd : {required : true},
			envtcd : {required : true, maxlength : 32},
			envtna : {maxlength : 80},
			chrgfg : {},
			chrgcd : {maxlength : 32},
			chrgna : {maxlength : 80},
			chrgam : {maxlength : 21},
			recdst : {}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
	
	
}();
