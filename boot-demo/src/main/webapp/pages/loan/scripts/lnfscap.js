var lnfscap = function(){
	
	var crcycdDict = Sunline.getDict("E_CRCYCD");// 币种
	var scaptpDict = Sunline.getDict("E_SCAPTP");// 适用类型
	var scapfgDict = Sunline.getDict("E_SCAPFG");// 适用标志
	
	$("#editscapModal input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("#editscapModal input[name='scaptp']").select2({
		data : scaptpDict,
		allowClear : true
	});
	$("#editscapModal input[name='scapfg']").select2({
		data : scapfgDict,
		allowClear : true
	});
	
	var handleTable = function(prodcd){
		var scapgrid = new Datatable();
		var scapurl = Sunline.ajaxPath("loan/qrscap");
		var scapsendData = ["prodcd", "crcycd", "scaptp", "scapfg", "scaptx"];
		if(!Sunline.isNull(prodcd)){
			scapgrid.setAjaxParam("q_prodcd", prodcd);
		}
		scapgrid.init({
			src : $("#datatable_scap"),
			deleteData : scapsendData,
			onSuccess : function(scapgrid){
			},
			onError : function(scapgrid){
			},
			dataTable : {
				"ajax" : {
					url : scapurl
				},
				"columns" : [{
					"data" : "prodcd",
					"sortable" : false,
					"searchable" : false
				},{
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
				},{
					"data" : "scaptp",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < scaptpDict.length; i++) {
							if (scaptpDict[i].id == data) {
								return scaptpDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "scapfg",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < scapfgDict.length; i++) {
							if (scapfgDict[i].id == data) {
								return scapfgDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "scaptx",
					"sortable" : false,
					"searchable" : false
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
								+ data.scaptp
								+ ","
								+ data.scapfg
								+ ","
								+ data.scaptx
							    + "'>删除 </a>";
					}
				}]
			}
		});
		scapgrid.bindTableDelete(scapsendData);// 绑定删除按钮
		
		scapgrid.bindTableEdit(scapsendData,function(nRowA){
			// 主键不可修改
		  $("input[name='crcycd']", $("#editscapModal")).attr("readOnly",true);
		  $("input[name='scaptp']", $("#editscapModal")).attr("readOnly",true);
		  $("input[name='scapfg']", $("#editscapModal")).attr("readOnly",true);
		  $("input[name='scaptx']", $("#editscapModal")).attr("readOnly",true);
		  
		  $("input[name='prodcd']", $("#editscapModal")).val($(nRowA[0]).text());
		  $("input[name='crcycd']", $("#editscapModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
		  $("input[name='scaptp']", $("#editscapModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
		  $("input[name='scapfg']", $("#editscapModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
		  $("input[name='scaptx']", $("#editscapModal")).val($(nRowA[4]).text());
		  $("#editscapModal").modal('show');
		  $("#editscapModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editscapModal"))).hide();
				$(".alert-danger", $("form", $("#editscapModal"))).hide();
				$(".msg", $("form", $("#editscapModal"))).text("");
				scapgrid.submitFilter();
			});
		});
		
		$("#editscapModal").click(function(){
		   	  $(".select-close").select2("close");
		     });
		
		// 新增窗口
		$("#add_scap_btn").bind("click", function(){
			 $("input[name='crcycd']", $("#editscapModal")).attr("readOnly",false);
			  $("input[name='scaptp']", $("#editscapModal")).attr("readOnly",false);
			  $("input[name='scapfg']", $("#editscapModal")).attr("readOnly",false);
			  $("input[name='scaptx']", $("#editscapModal")).attr("readOnly",false);
			$("input[name='prodcd']", $("#editscapModal")).val(prodcd);
			$("#editscapModal").modal("show");
			$("#editscapModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editscapModal"))).hide();
				$(".alert-danger", $("form", $("#editscapModal"))).hide();
				$(".msg", $("form", $("#editscapModal"))).text("");
				scapgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_scap").click(function(){
			$("form", $("#editscapModal")).submit();
		});
		
		var scapValid = Sunline.getValidate( $("form","#editscapModal"), function(){
			var data = {};
			$.each($("input", $("#editscapModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("loan/edscap", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editscapModal"))).show();
					$(".alert-danger", $("form", $("#editscapModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editscapModal"))).hide();
					$(".alert-danger", $("form", $("#editscapModal"))).show();
				}
				$(".msg", $("form", $("#editscapModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			crcycd : {required : true},
			scaptp : {required : true},
			scapfg : {required : true},
			scaptx : {required : true, maxlength : 32}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
	
	
}();
