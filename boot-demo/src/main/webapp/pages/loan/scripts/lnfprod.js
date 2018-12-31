var lnfprod = function() {    
	
	var prodstDict =Sunline.getDict("E_PRODST");
	var handleTable = function() {
		var prodgrid = new Datatable();
		var produrl = Sunline.ajaxPath("loan/qrprod");
		var prodsendData = [ "prodcd" ];
		prodgrid.init({
					src : $("#datatable_prod"),
					deleteData : prodsendData,
					onSuccess : function(prodgrid) {
					},
					onError : function(prodgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : produrl,
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
									"data" : "prodtx",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "efctdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inefdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "prodst",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < prodstDict.length; i++) {
											if (prodstDict[i].id == data) {
												return prodstDict[i].text;
											}
										}
										return data;
									}
								},								
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.depttm
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.depttm
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		prodgrid.bindTableDelete(prodsendData);
		prodgrid.bindTableEdit(prodsendData,function(nRowA){
			lnsubpage.setdata(nRowA);
			var data = {
					q_prodcd : $(nRowA[0]).text()
				};
		  Sunline.ajaxRouter("loan/qrprsl", eval(data), "post",
						function(ret) {
				           //console.info(ret);
			             $("input[name='prodcd']", $("#prod_form")).attr("readOnly",true);
							lnsubpage.setdata(ret.pinfos[0]);
							lnsubpage.setmode("edit");
							lnsubpage.loadPage($('.inbox-nav > li.lnfprodedit > a'));
						}, function(ret) {
                             bootbox.alert(ret.retMsg);
						});
		        
				$("#bianji").modal("show");
				$("#bianji").on("hide.bs.modal",function(e){
					if(e.date!=undefined){//modal绑定隐藏事件会影响datapicker隐藏事件，此处判断如是datapicker隐藏事件就return
						return;
					}
					clearEditForm();
					prodgrid.submitFilter();
				});        
		});
		
		// 新增窗口
		$("#add_prod_btn").bind("click", function() {
			lnsubpage.setmode("add");
			$("li #editmodal").remove("active");
			$(".lnfprodedit",$("#editmodal")).addClass("active");	
			lnsubpage.loadPage($('.inbox-nav > li.lnfprodedit > a'));
			$("#bianji").modal('show');
			$("#bianji").on("hide.bs.modal", function(e) {
				if(e.date!=undefined){//modal绑定隐藏事件会影响datapicker隐藏事件，此处判断如是datapicker隐藏事件就return
					return;
				}
				$(".alert-success", $("#prod_form")).hide();
	        	$('.alert-danger',$("#prod_form")).hide(); 
	        	$(".msg", $("#prod_form")).text("");
				prodgrid.submitFilter();
			});
			return false;
		});
		
		//重置编辑窗口
		var clearEditForm = function() {
			$(".alert-success", $("#prod_form")).hide();
			$('.alert-danger',  $("#prod_form")).hide();
			$('input', $("#prod_form")).val("").trigger("change");
			$('.msg', $("#prod_form")).text("");
			$('.form-group').removeClass('has-error').removeClass("has-success");
			lnsubpage.clear();
		}
		
	       };

	return {
		init : function() {
			handleTable();
		}
	}
}();