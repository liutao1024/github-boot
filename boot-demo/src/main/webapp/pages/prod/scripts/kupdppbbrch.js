var kupdppbbrch = function() {

	$("input[name='brchno']").select2({
		data : kupdppbdict.brchDict,
		allowClear : true
	});
	$("input[name='crcycd']").select2({
		data : kupdppbdict.pdcrcyDict,
		allowClear : true
	});
	var handleTable = function(prodcd) {
		var brchgrid = new Datatable();
		var brchurl = Sunline.ajaxPath("prod/dbrsel");
		var brchsendData = [ "prodcd", "crcycd", "brchno" ];
		if (!Sunline.isNull(prodcd)) {
			brchgrid.setAjaxParam("q_prodcd", prodcd);
		}
		brchgrid.init({
					src : $("#datatable_brch"),
					deleteData : brchsendData,
					onSuccess : function(brchgrid) {
					},
					onError : function(brchgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : brchurl,
						},
						"columns" : [
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.pdcrcyDict.length; i++) {
											if (kupdppbdict.pdcrcyDict[i].id == data) {
												return kupdppbdict.pdcrcyDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.brchDict.length; i++) {
											if (kupdppbdict.brchDict[i].id == data) {
												return kupdppbdict.brchDict[i].text;
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
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.prodcd
												+ ","
												+ data.crcycd
												+ ","
												+ data.brchno + "'>删除 </a>";
									}
								} ]
					}
				});
		brchgrid.bindTableDelete(brchsendData);
		// 新增窗口
		$("#add_brch_btn").bind("click", function() {
			$("input[name='prodcd']", $("#editbrchModal")).val(prodcd);
			$("#editbrchModal").modal('show');
			$("#editbrchModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editbrchModal"))).hide();
	        	$('.alert-danger', $('form', $("#editbrchModal"))).hide(); 
	        	$(".msg",$('form', $("#editbrchModal"))).text("");
				brchgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_brch").click(function(){
			$('form', $("#editbrchModal")).submit();
		});
		
		var brchValid = Sunline.getValidate($('form', $("#editbrchModal")),
				function() {
					var data = {};
					$.each($("input", $("#editbrchModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					var datas=[];
					datas.push(data);					
					var dpbrchs = {"dpbrch":datas};
					Sunline.ajaxRouter("prod/dbrins", 
						dpbrchs
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editbrchModal"))).show();
                        	   $('.alert-danger', $('form', $("#editbrchModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editbrchModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editbrchModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editbrchModal"))).text(ret.msg);
					});

				}, {
					brchno : {
						required : true,
						maxlength : 10
					},
					crcycd : {
						required : true
					}
				});

		
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();