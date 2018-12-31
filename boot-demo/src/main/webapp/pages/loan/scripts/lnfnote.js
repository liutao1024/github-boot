var lnfnote = function(){
	
	var crcycdDict = Sunline.getDict("E_CRCYCD");// 币种
	var isnormDict = Sunline.getDict("E_ISNORM");// 正常提前通知标志
	var isovduDict = Sunline.getDict("E_ISOVDU");// 逾期催收通知
	var isirrvDict = Sunline.getDict("E_ISIRRV");// 利率变更通知
	var isblchDict = Sunline.getDict("E_ISBLCH");// 余额变更通知
	var isprntDict = Sunline.getDict("E_ISPRNT");// 客户回单打印
	
	$("#editnoteModal input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("#editnoteModal input[name='isnorm']").select2({
		data : isnormDict,
		allowClear : true
	});
	$("#editnoteModal input[name='isovdu']").select2({
		data : isovduDict,
		allowClear : true
	});
	$("#editnoteModal input[name='isirrv']").select2({
		data : isirrvDict,
		allowClear : true
	});
	$("#editnoteModal input[name='isblch']").select2({
		data : isblchDict,
		allowClear : true
	});
	$("#editnoteModal input[name='isprnt']").select2({
		data : isprntDict,
		allowClear : true
	});
	
	var handleTable = function(prodcd){
		var notegrid = new Datatable();
		var noteurl = Sunline.ajaxPath("loan/qrnote");
		var notesendData = ["prodcd", "crcycd"];
		if(!Sunline.isNull(prodcd)){
			notegrid.setAjaxParam("q_prodcd", prodcd);
		}
		notegrid.init({
			src : $("#datatable_note"),
			deleteData : notesendData,
			onSuccess : function(notegrid){
			},
			onError : function(notegrid){
			},
			dataTable : {
				"ajax" : {
					url : noteurl
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
					"data" : "isnorm",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < isnormDict.length; i++) {
							if (isnormDict[i].id == data) {
								return isnormDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "bfdays",
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "isovdu",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < isovduDict.length; i++) {
							if (isovduDict[i].id == data) {
								return isovduDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "evdays",
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "isirrv",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < isirrvDict.length; i++) {
							if (isirrvDict[i].id == data) {
								return isirrvDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "isblch",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < isblchDict.length; i++) {
							if (isblchDict[i].id == data) {
								return isblchDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "isprnt",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < isprntDict.length; i++) {
							if (isprntDict[i].id == data) {
								return isprntDict[i].text;
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
								+ ","
								+ data.crcycd
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
							    + "'>删除 </a>";
					}
				}]
			}
		});
		notegrid.bindTableDelete(notesendData);// 绑定删除按钮
		
		notegrid.bindTableEdit(notesendData,function(nRowA){
			// 主键不可修改
		  $("input[name='prodcd']", $("#editnoteModal")).attr("readOnly",true);
		  $("input[name='crcycd']", $("#editnoteModal")).attr("readOnly",true);
		  // 给input框赋值
		  $("input[name='prodcd']", $("#editnoteModal")).val($(nRowA[0]).text());
		  $("input[name='crcycd']", $("#editnoteModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
		  $("input[name='isnorm']", $("#editnoteModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
		  $("input[name='bfdays']", $("#editnoteModal")).val($(nRowA[3]).text());
		  $("input[name='isovdu']", $("#editnoteModal")).val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
		  $("input[name='evdays']", $("#editnoteModal")).val($(nRowA[5]).text());
		  $("input[name='isirrv']", $("#editnoteModal")).val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
		  $("input[name='isblch']", $("#editnoteModal")).val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change");
		  $("input[name='isprnt']", $("#editnoteModal")).val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");
		  $("#editnoteModal").modal('show');
		  $("#editnoteModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editnoteModal"))).hide();
				$(".alert-danger", $("form", $("#editnoteModal"))).hide();
				$(".msg", $("form", $("#editnoteModal"))).text("");
				notegrid.submitFilter();
			});
		});

		$("#editnoteModal").click(function(){
	   	  	$(".select-close").select2("close");
		});
	
		// 新增窗口
		$("#add_note_btn").bind("click", function(){
			  $("input[name='crcycd']", $("#editnoteModal")).attr("readOnly",false);	
			$("input[name='prodcd']", $("#editnoteModal")).val(prodcd);
			$("#editnoteModal").modal("show");
			$("#editnoteModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editnoteModal"))).hide();
				$(".alert-danger", $("form", $("#editnoteModal"))).hide();
				$(".msg", $("form", $("#editnoteModal"))).text("");
				notegrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_note").click(function(){
			$("form", $("#editnoteModal")).submit();
		});
		
		var noteValid = Sunline.getValidate($("form","#editnoteModal"), function(){
			var data = {};
			$.each($("input", $("#editnoteModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("loan/ednote", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editnoteModal"))).show();
					$(".alert-danger", $("form", $("#editnoteModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editnoteModal"))).hide();
					$(".alert-danger", $("form", $("#editnoteModal"))).show();
				}
				$(".msg", $("form", $("#editnoteModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			crcycd : {required : true},
			isnorm : {},
			bfdays : {maxlength : 19},
			isovdu : {},
			evdays : {maxlength : 19},
			isirrv : {},
			isblch : {},
			isprnt : {}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
	
	
}();
