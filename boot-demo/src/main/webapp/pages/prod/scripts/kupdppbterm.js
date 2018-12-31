var kupdppbterm = function() {

	$("input[name='crcycd']").select2({
		data : kupdppbdict.pdcrcyDict,
		allowClear : true
	});
	$("input[name='depttm']").select2({
		data : kupdppbdict.depttmDict,
		allowClear : true
	});
	var handleTable = function(prodcd) {
		var termgrid = new Datatable();
		var termurl = Sunline.ajaxPath("prod/dtesel");
		var termsendData = [ "prodcd", "crcycd", "depttm" ,"deptdy" ];
		if (!Sunline.isNull(prodcd)) {
			termgrid.setAjaxParam("q_prodcd", prodcd);
		}
		termgrid.init({
					src : $("#datatable_term"),
					deleteData : termsendData,
					onSuccess : function(termgrid) {
					},
					onError : function(termgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : termurl,
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
									"data" : "depttm",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.depttmDict.length; i++) {
											if (kupdppbdict.depttmDict[i].id == data) {
												return kupdppbdict.depttmDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "deptdy",
									"sortable" : false,
									"searchable" : false
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
												+ data.depttm 
												+ ","
												+ data.deptdy +"'>删除 </a>";
									}
								} ]
					}
				});
		termgrid.bindTableDelete(termsendData);
		// 新增窗口
		$("#add_term_btn").bind("click", function() {
			$("input[name='prodcd']", $("#edittermModal")).val(prodcd);
			$("#edittermModal").modal('show');
			$("#edittermModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#edittermModal"))).hide();
	        	$('.alert-danger', $('form', $("#edittermModal"))).hide(); 
	        	$(".msg",$('form', $("#edittermModal"))).text("");
				termgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_term").click(function(){
			$('form', $("#edittermModal")).submit();
		});
		
		 var inArray = function(arr, item) { 
             for (var i = 0; i < arr.length; i++) { 
                 if (arr[i] == item) { 
                     return true; 
                 } 
             } 
             return false; 
           };
		
           var depttmArray=["901","902","903","904","905","906","907","908","909"];
		$("input[name='depttm']",$("#edittermModal")).on("select2-close",function(){
			if(inArray(depttmArray,$("input[name='depttm']",$("#edittermModal")).select2("val"))){
				$("input[name='deptdy']",$("#edittermModal")).val("").attr("readOnly",false);
			}else{
				$("input[name='deptdy']",$("#edittermModal")).val("").attr("readOnly",true);
			}
		});
		
		var termValid = Sunline.getValidate($('form', $("#edittermModal")),
				function() {
					var data = {};
					$.each($("input", $("#edittermModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					var datas=[];
					datas.push(data);					
					var dpterms = {"dpterm":datas};
					Sunline.ajaxRouter("prod/dteins", 
						dpterms
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#edittermModal"))).show();
                        	   $('.alert-danger', $('form', $("#edittermModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#edittermModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#edittermModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#edittermModal"))).text(ret.msg);
					});

				}, {
					 depttm:{required : true , maxlength:3},
					 crcycd:{required : true}
				});
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();