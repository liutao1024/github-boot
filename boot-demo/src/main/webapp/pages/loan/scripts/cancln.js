var cncln = function(){
	
	/**
	 * 枚举类型调取
	 */
	var crcycdDict = Sunline.getDict("E_CRCYCD"); // 币种
	var clssstDict = Sunline.getDict("E_CLSSST"); // 币种
	
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='clssst']").select2({
		data : clssstDict,
		allowClear : true
	});
	
	var handleTable = function(){
		var grid = new Datatable();
		var url = Sunline.ajaxPath("loan/qrxrep");
		var sendData = [ "acctno", "lncfno"];// 主键
		grid.init({
			src : $("#datatable_ajax"),
			deleteData : sendData,
			onSuccess : function(grid){
			},
			onError : function(grid){
			},
			dataTable : {
				"ajax" : {
					url : url
				},
				"columns" : [{
					"data" : "acctno",// 贷款账号
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "lncfno",// 贷款借据号
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "acctna",// 客户名称
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
					"data" : "matudt",// 到期日期
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "termfm",// 贷款期限
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "clssst",// 贷款形态
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < clssstDict.length; i++) {
							if (clssstDict[i].id == data) {
								return clssstDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "kyhxpr",// 可核销本金
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "kyhxin",// 可核销利息
					"sortable" : false,
					"searchable" : false
				}]
			}
		});
		
		// 核销窗口
		$("#add_btn").bind("click", function(){
			$("input[name='crcycd']", $("#editModal")).attr("readOnly",false);	
			$("#editModal").modal("show");
			$("#editModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editModal"))).hide();
				$(".alert-danger", $("form", $("#editModal"))).hide();
				$(".msg", $("form", $("#editModal"))).text("");
				grid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save").click(function(){
			$("form", $("#editModal")).submit();
		});
		
		var Valid = Sunline.getValidate( $("form","#editModal"), function(){
			var data = {};
			$.each($("input", $("#editModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("loan/cancln", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editModal"))).show();
					$(".alert-danger", $("form", $("#editModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editModal"))).hide();
					$(".alert-danger", $("form", $("#editModal"))).show();
				}
				$(".msg", $("form", $("#editModal"))).text(ret.msg);
			});
			
		},{
			acctno : {required : true, maxlength : 40},
			lncfno : {required : true, maxlength : 30},
			crcycd : {required : true},
			clnpbl : {maxlength : 21},
			clintr : {maxlength : 21},
			clacno : {maxlength : 40},
			clsuac : {maxlength : 40}
		});
	}
	
	return {
		init : function(){
			handleTable();
		}
	}
	
	
}();
