var accont = function(){
	
	
   var contowDict = Sunline.getDict("E_CONTOW");
   var parmstDict = Sunline.getDict("E_PARMST");
	
	$("input[name='contow']", $("#addCntForm")).select2({
		data : contowDict,
		allowClear : true
	});	
	
	$("input[name='parmst']", $("#addCntForm")).select2({
		data : parmstDict,
		allowClear : true
	});	
	
	
	var handleTable = function(){
		var contgrid = new Datatable();
		var Actionurl = Sunline.ajaxPath("acpcnt/selAccnt");
		var sendData = ["contcd","contow","contvl"];
		
		contgrid.init({
			src : $("#datatable_scap"),
			deleteData : sendData,
			onSuccess : function(contgrid){
			},
			onError : function(contgrid){
			},
			dataTable : {
				"ajax" : {
					url : Actionurl
				},
				"columns" : [{
					"data" : "contcd",
					"sortable" : false,
					"searchable" : false,
				},{
					"data" : "contna",
					"sortable" : false,
					"searchable" : false,
				},{
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
				},{
					"data" : "contow",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < contowDict.length; i++) {
							if (contowDict[i].id == data) {
								return contowDict[i].text;
							}
						}
						return data;
					}
				},{
					"data" : "contvl",
					"sortable" : false,
					"searchable" : false
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='edit' href='javascript:;' data-src='"
								+ data.contcd
								+ ","
								+ data.contow
								+ ","
								+ data.contvl
							    + "'>编辑 </a>";
					}
				},{
					"data" : null,
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						return "<a class='delete' href='javascript:;' data-src='"
								+ data.contcd
								+ ","
								+ data.contow
								+ ","
								+ data.contvl
							    + "'>删除 </a>";
					}
				}]
			}
		});
		var actionUrl = "acpcnt/addAccont";
		
		contgrid.bindTableDelete(sendData);// 绑定删除按钮
		
		contgrid.bindTableEdit(sendData,function(nRowA){
			
		 actionUrl = "acpcnt/uptAccont";
			// 主键不可修改
		  $("input[name='contcd']", $("#editsCntModal")).attr("readOnly",true);
		  $("input[name='contow']", $("#editsCntModal")).attr("readOnly",true);
		  $("input[name='contvl']", $("#editsCntModal")).attr("readOnly",true);
		  
		  $("input[name='contcd']", $("#editsCntModal")).val($(nRowA[0]).text());
		  $("input[name='contna']", $("#editsCntModal")).val($(nRowA[1]).text());
		  $("input[name='parmst']", $("#editsCntModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
		  $("input[name='contow']", $("#editsCntModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
		  $("input[name='contvl']", $("#editsCntModal")).val($(nRowA[4]).text());
		  $("#editsCntModal").modal('show');
		  $("#editsCntModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsCntModal"))).hide();
				$(".alert-danger", $("form", $("#editsCntModal"))).hide();
				$(".msg", $("form", $("#editsCntModal"))).text("");
				contgrid.submitFilter();
			});
		  return false;
		});
		
		// 新增窗口
		$("#add_cnt_btn").bind("click", function(){
			
			$('input', $("#addCntForm")).val("").trigger("change");
			$("input[name='contcd']", $("#addCntForm")).attr("readOnly",false);
			$("input[name='contow']", $("#addCntForm")).attr("readOnly",false);
			$("input[name='contvl']", $("#addCntForm")).attr("readOnly",false);
			
			$("#editsCntModal").modal("show");			
			$("#editsCntModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsCntModal"))).hide();
				$(".alert-danger", $("form", $("#editsCntModal"))).hide();
				$(".msg", $("form", $("#editsCntModal"))).text("");
				contgrid.submitFilter();
			});
		});
		
		$("#btn_save_scap").click(function(){
			$("form", $("#editsCntModal")).submit();
		});
		
		var scapValid = Sunline.getValidate( $("form","#editsCntModal"), function(){
			var data = {};
			$.each($("input", $("#editsCntModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter(actionUrl, data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editsCntModal"))).show();
					$(".alert-danger", $("form", $("#editsCntModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editsCntModal"))).hide();
					$(".alert-danger", $("form", $("#editsCntModal"))).show();
				}
				$(".msg", $("form", $("#editsCntModal"))).text(ret.msg);
			});
			
		},{
			contcd : {required : true, maxlength : 10},
			contna : {required : true},
			parmst : {required : true},
			contvl : {required : true}
		});
	}
	
	return {
		init : function(){
			handleTable();
		}
	}
}();
