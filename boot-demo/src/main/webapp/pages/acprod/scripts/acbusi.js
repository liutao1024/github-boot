var acbusi = function(){
	
   //产品类型
   var prodtpDict = Sunline.getDict("E_PRODTP");
   //状态
   var parmstDict = Sunline.getDict("E_PARMST");
	
	$("input[name='prodtp']", $("#addBsiForm")).select2({
		data : prodtpDict,
		allowClear : true
	});	
	
	$("input[name='parmst']", $("#addBsiForm")).select2({
		data : parmstDict,
		allowClear : true
	});	
	
	
	var handleTable = function(prodcd){
		var busigrid = new Datatable();
		var Actionurl = Sunline.ajaxPath("acpbsi/selAcbsi");
		var sendData = [ "prodcd" ];
		
		busigrid.init({
			src : $("#datatable_scap"),
			deleteData : sendData,
			onSuccess : function(busigrid){
			},
			onError : function(busigrid){
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
					"data" : "prodna",
					"sortable" : false,
					"searchable" : false,
				},{
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
				},{
					"data" : "dtitcd",
					"sortable" : false,
					"searchable" : false,
				},{
					"data" : "acctno",
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
		var actionUrl = "acpbsi/addAcbsi";
		
		busigrid.bindTableDelete(sendData);// 绑定删除按钮
		
		busigrid.bindTableEdit(sendData,function(nRowA){
			
			actionUrl = "acpbsi/uptAcbsi";
			// 主键不可修改
		  $("input[name='prodcd']", $("#editsBsiModal")).attr("readOnly",true);
		  $("input[name='prodna']", $("#editsBsiModal")).attr("readOnly",true);
		  
		  $("input[name='prodcd']", $("#editsBsiModal")).val($(nRowA[0]).text());
		  $("input[name='prodna']", $("#editsBsiModal")).val($(nRowA[1]).text());
		  
		  $("input[name='prodtp']", $("#editsBsiModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
		  
		  $("input[name='dtitcd']", $("#editsBsiModal")).val($(nRowA[3]).text());
		  $("input[name='acctno']", $("#editsBsiModal")).val($(nRowA[4]).text());
		  $("input[name='parmst']", $("#editsBsiModal")).val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change"); 
		  
		  $("#editsBsiModal").modal('show');
		  $("#editsBsiModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsBsiModal"))).hide();
				$(".alert-danger", $("form", $("#editsBsiModal"))).hide();
				$(".msg", $("form", $("#editsBsiModal"))).text("");
				busigrid.submitFilter();
			});
		});
		
		// 新增窗口
		$("#add_bsi_btn").bind("click", function(){
			$("#editsBsiModal").modal("show");
			//清除表单域数据
			actionUrl = "acpbsi/addAcbsi";
			
			$('input', $("#addBsiForm")).val("").trigger("change");
			$("input[name='prodcd']", $("#editsBsiModal")).attr("readOnly",false);
			$("input[name='prodna']", $("#editsBsiModal")).attr("readOnly",false);
			
			$("#editsBsiModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editsBsiModal"))).hide();
				$(".alert-danger", $("form", $("#editsBsiModal"))).hide();
				$(".msg", $("form", $("#editsBsiModal"))).text("");
				busigrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_bsi").click(function(){
			
			$("form", $("#editsBsiModal")).submit();
		});
		
		var scapValid = Sunline.getValidate( $("form","#editsBsiModal"), function(){
			var data = {};
			$.each($("input", $("#editsBsiModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter(actionUrl, data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editsBsiModal"))).show();
					$(".alert-danger", $("form", $("#editsBsiModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editsBsiModal"))).hide();
					$(".alert-danger", $("form", $("#editsBsiModal"))).show();
				}
				$(".msg", $("form", $("#editsBsiModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			prodna : {required : true},
			dtitcd : {required : true},
			acctno : {required : true}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
}();
