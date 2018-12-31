var fupprod = function() {


	var handleTable = function() {
		var fdpdgrid = new Datatable();
		var fdpdurl = Sunline.ajaxPath("fund/qrfdpd");
		var fdpdsendData = [ "prodcd"];
		var editMode=$("#editfdpdModal");
		var prodstDict =Sunline.getDict("E_PRODST");	
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN',
	        });
        };
		fdpdgrid.init({
					src : $("#datatable_fdpd"),
					deleteData : fdpdsendData,
					onSuccess : function(fdpdgrid) {
					},
					onError : function(fdpdgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : fdpdurl,
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
									"data" : "fundcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fundna",
									"visible" : false,
									"sortable" : false,
									"searchable" : false,
									
								},
								{
									"data" : "fundno",
									"visible" : false,
									"sortable" : false,
									"searchable" : false,
									
								},
								{
									"data" : "fdcust",
									"visible" : false,
									"sortable" : false,
									"searchable" : false,
									
								},
								{
									"data" : "fdacct",
									"visible" : false,
									"sortable" : false,
									"searchable" : false,
									
								},
								{
									"data" : "seinrt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "wfprof",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pfupdt",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "acctcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "pdmktx",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "minuit",
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
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		fdpdgrid.bindTableDelete(fdpdsendData);
		fdpdgrid.bindTableEdit(fdpdsendData,function(nRowA){
			var qrdata={};
			qrdata['q_prodcd']= $(nRowA[0]).text();
			jQuery.ajax({
				type : "post",
				async : false,
				data : qrdata,
				url : Sunline.ajaxPath("fund/qrfdpd"),
				success : function(ret) {
                    var redata = ret.data[0];
        			$("input[name='prodcd']",editMode).val(redata["prodcd"]); 
        			$("input[name='prodna']",editMode).val(redata["prodna"]); 
	      			$("input[name='fundcd']",editMode).val(redata["fundcd"]); 
	      			$("input[name='fundna']",editMode).val(redata["fundna"]); 
	      			$("input[name='fundno']",editMode).val(redata["fundno"]); 
	      			$("input[name='fdcust']",editMode).val(redata["fdcust"]);
	      			$("input[name='fdacct']",editMode).val(redata["fdacct"]); 
	      			$("input[name='seinrt']",editMode).val(redata["seinrt"]); 
	      			$("input[name='wfprof']",editMode).val(redata["wfprof"]); 
	      			$("input[name='pfupdt']",editMode).val(redata["pfupdt"]); 
	      			$("input[name='acctcd']",editMode).val(redata["acctcd"]); 
	      			$("input[name='pdmktx']",editMode).val(redata["pdmktx"]); 
	      			$("input[name='minuit']",editMode).val(redata["minuit"]); 
	      			$("input[name='prodst']",editMode).val(redata["prodst"]).trigger("change");
	      			$("input[name='trantp']",editMode).val("3");//1为新增，3为修改	
				}
			});
			editMode.modal('show');
			editMode.on("hide.bs.modal", function() {
				$(".alert-success",$('form', editMode)).hide();
	        	$('.alert-danger', $('form', editMode)).hide(); 
	        	$(".msg",$('form', editMode)).text("");
				fdpdgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_fdpd_btn").bind("click", function() {
			$("input", editMode).val("").trigger("change");
			$("input[name='trantp']", editMode).val("1");
			editMode.modal('show');
			editMode.on("hide.bs.modal", function() {
				$(".alert-success",$('form', editMode)).hide();
	        	$('.alert-danger', $('form', editMode)).hide(); 
	        	$(".msg",$('form', editMode)).text("");
				fdpdgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_fdpd").click(function(){
			$('form', editMode).submit();
		});
		
		var fdpdValid = Sunline.getValidate($('form', editMode),
				function() {
					var data = {};
					$.each($("input", editMode), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("fund/upfdpd", 
						data
					, 'post', function(ret) {
                          if(ret.retCode==="0000"){              
                        	   $(".alert-success",$('form', editMode)).show();
                        	   $('.alert-danger', $('form', editMode)).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', editMode)).hide();
		                   	   $('.alert-danger', $('form', editMode)).show();                        	  
                          }
                          $(".msg",$('form', editMode)).text(ret.retMsg);
					});

				}
				,{
					 prodcd:{required : true},
					 seinrt:{number:true},
					 wfprof:{number:true},
					 pfupdt:{number:true},
					 minuit:{number:true}
				}
				);

		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();