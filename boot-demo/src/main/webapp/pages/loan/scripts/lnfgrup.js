var lnfgrup = function(){
	
	var handleTable = function(prodcd){
		var grupgrid = new Datatable();
		var grupurl = Sunline.ajaxPath("loan/qrgrup");// url
		var grupsendData = [ "prodcd"];// 主键
		if(!Sunline.isNull(prodcd)){
			grupgrid.setAjaxParam("q_prodcd", prodcd);
		}
		grupgrid.init({
			src : $("#datatable_grup"),
			deleteData : grupsendData,
			onSuccess : function(grupgrid){
			},
			onError : function(grupgrid){
			},
			dataTable : {
				"ajax" : {
					url : grupurl
				},
				"columns" : [{
					"data" : "prodcd",// 产品代码
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "prodna",// 产品名称
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "grupcd",// 产品组代码
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "grupna",// 产品组名称
					"sortable" : false,
					"searchable" : false
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
		grupgrid.bindTableDelete(grupsendData);// 绑定删除按钮
		
		grupgrid.bindTableEdit(grupsendData,function(nRowA){
		  // 给input框赋值
			$("input[name='prodcd']", $("#editnoteModal")).attr("readOnly",true);
		  // 产品代码
		  $("input[name='prodcd']", $("#editgrupModal")).val($(nRowA[0]).text());
		  // 产品名称
		  $("input[name='prodna']", $("#editgrupModal")).val($(nRowA[1]).text()); 
		  // 产品组代码
		  $("input[name='grupcd']", $("#editgrupModal")).val($(nRowA[2]).text());
		  // 产品组名称
		  $("input[name='grupna']", $("#editgrupModal")).val($(nRowA[3]).text());
		  $("#editgrupModal").modal('show');
			$("#editgrupModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editgrupModal"))).hide();
				$(".alert-danger", $("form", $("#editgrupModal"))).hide();
				$(".msg", $("form", $("#editgrupModal"))).text("");
				grupgrid.submitFilter();
			});
		});
		
		// 新增窗口
		$("#add_grup_btn").bind("click", function(){
			$("input[name='prodcd']", $("#editgrupModal")).val(prodcd);
			$("#editgrupModal").modal("show");
			$("#editgrupModal").on("hide.bs.modal", function(){
				$(".alert-success", $("form", $("#editgrupModal"))).hide();
				$(".alert-danger", $("form", $("#editgrupModal"))).hide();
				$(".msg", $("form", $("#editgrupModal"))).text("");
				grupgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_grup").click(function(){
			$("form", $("#editgrupModal")).submit();
		});
		
		var grupValid = Sunline.getValidate( $("form","#editgrupModal"), function(){
			var data = {};
			$.each($("input", $("#editgrupModal")), function(i, n){
				if(n.name != undefined && n.name != "" && n.name != null){
					data[n.name] = n.value;
				}
			});
			Sunline.ajaxRouter("loan/edgrup", data, "post", function(ret){
				if(ret.ret == "success"){
					$(".alert-success", $("form", $("#editgrupModal"))).show();
					$(".alert-danger", $("form", $("#editgrupModal"))).hide();
				}else{
					$(".alert-success", $("form", $("#editgrupModal"))).hide();
					$(".alert-danger", $("form", $("#editgrupModal"))).show();
				}
				$(".msg", $("form", $("#editgrupModal"))).text(ret.msg);
			});
			
		},{
			prodcd : {required : true, maxlength : 10},
			prodna : {maxlength : 21, maxlength : 80},
			grupcd : {maxlength : 10},
			grupna : {maxlength : 200}
		});
	}
	
	return {
		init : function(prodcd){
			handleTable(prodcd);
		}
	}
	
	
}();
