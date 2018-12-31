var AcctAttr=function(){
	var accttpDict = Sunline.getDict("accttp");//账户类型
	var pmdudyDict = Sunline.getDict("pmdudy");//到期还款日类型
	var dddttpDict = Sunline.getDict("dddttp");//约定还款日标识
	var deldayDict = Sunline.getDict("delday");//拖欠处理日标识
	var aghierDict = Sunline.getDict("aghier");//还款帐龄冲销优先方式
	var indcatDict = Sunline.getDict("indcat");//判断
	
	
	$("#edittypeModal input[name='accttp']").select2({
		data : accttpDict,
		allowClear : true
	});
	$("#edittypeModal input[name='dudttp']").select2({
		data : pmdudyDict,
		allowClear : true
	});
	$("#edittypeModal input[name='fixfgx']").select2({
		data : indcatDict,
		allowClear : true
	});
	$("#edittypeModal input[name='dddttp']").select2({
		data : dddttpDict,
		allowClear : true
	});
	$("#edittypeModal input[name='delfgx']").select2({
		data : deldayDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfgc']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg1']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg2']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg3']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg4']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg5']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg6']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg7']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg8']").select2({
		data : aghierDict,
		allowClear : true
	});
	$("#edittypeModal input[name='hirfg9']").select2({
		data : aghierDict,
		allowClear : true
	});
	
	var handleTable = function() {
		var grid = new Datatable();
		var url=Sunline.ajaxPath("cc/acctattrs");
		var sendData = ["attrid"];
		var editUrl;
		
		grid.init({
					src : $("#datatable_ajax"),
					deleteData : sendData,
					onSuccess : function(grid) {
						
					},
					onError : function(grid) {
						
					},
					dataTable : { 
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "attrid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "accttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < accttpDict.length; i++) {
											if (accttpDict[i].id == data) {
												return accttpDict[i].text;
											}
										}
									}
								},
								{
									"data" : "dudttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < pmdudyDict.length; i++) {
											if (pmdudyDict[i].id == data) {
												return pmdudyDict[i].text;
											}
										}
									}
								},
								{
									"data" : "graday",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dddttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < dddttpDict.length; i++) {
											if (dddttpDict[i].id == data) {
												return dddttpDict[i].text;
											}
										}
									}
								},
								{
									"data" : "delfgx",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < deldayDict.length; i++) {
											if (deldayDict[i].id == data) {
												return deldayDict[i].text;
											}
										}
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.attrid + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.attrid+ "'>删除 </a>";
									}
								} ]
					}
				});
		//编辑
		var editForm = function(nRowA){
			var data = {
					attrid : $(nRowA[0]).text()
				};
			Sunline.ajaxRouter("cc/acctattr", eval(data), "post",
					function(ret) {
				     loaddata(ret.infos[0]);			
					}, function(ret) {
						bootbox.alert(ret);
					});
			   
			show();
	       	$("#edittypeModal").modal('show');
	        $("#edittypeModal").on("hide.bs.modal",function(){
   				$('.msg', $("#edittypeModal")).text("");	
   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
   	        	grid.submitFilter();       	
   	        }); 
		};
		show =function(){
				$(".alert-success",
						$("form", $("#edittypeModal")))
						.hide();
				$(".alert-danger",
						$("form", $("#edittypeModal")))
						.hide();
					
				}
		var loaddata = function(data) {	
			
			$("#attrid").val(data.attrid);
	        $("#accttp").select2("val",data.accttp);
	        $("#dudttp").select2("val",data.dudttp);
	        $("#dudays").val(data.dudays);
	        $("#dudate").val(data.dudate);
	        $("#fixfgx").select2("val",data.fixfgx);
	        $("#fixday").val(data.fixday);
	        $("#msgday").val(data.msgday);
	        $("#graday").val(data.graday);
	        $("#dddate").val(data.dddate);
	        $("#dddttp").select2("val",data.dddttp);
	        $("#dddays").val(data.dddays);
	        $("#delfgx").select2("val",data.delfgx);
	        $("#delday").val(data.delday);
	        
	        $("#hirfgc").select2("val",data.hirfgc);	        
	        $("#hiridc").val(data.hiridc);
	        $("#hirfg1").select2("val",data.hirfg1);	        
	        $("#hirid1").val(data.hirid1);
	        $("#hirfg2").select2("val",data.hirfg2);	        
	        $("#hirid2").val(data.hirid2);
	        $("#hirfg3").select2("val",data.hirfg3);	        
	        $("#hirid3").val(data.hirid3);
	        $("#hirfg4").select2("val",data.hirfg4);	        
	        $("#hirid4").val(data.hirid4);
	        $("#hirfg5").select2("val",data.hirfg5);	        
	        $("#hirid5").val(data.hirid5);
	        $("#hirfg6").select2("val",data.hirfg6);	        
	        $("#hirid6").val(data.hirid6);
	        $("#hirfg7").select2("val",data.hirfg7);	        
	        $("#hirid7").val(data.hirid7);
	        $("#hirfg8").select2("val",data.hirfg8);	        
	        $("#hirid8").val(data.hirid8);
	        $("#hirfg9").select2("val",data.hirfg9);	        
	        $("#hirid9").val(data.hirid9);
	        		
		}
		grid.bindTableDelete(sendData);//绑定删除按钮
		grid.bindTableEdit(sendData,editForm);//绑定编辑按钮
		
		$('#add_clc_btn').click(function(){
			$("#attrid").val("");
	        $("#accttp").select2("val","");
	        $("#dudttp").select2("val","");
	        $("#dudays").val("");
	        $("#dudate").val("");
	        $("#fixfgx").select2("val","");
	        $("#fixday").val("");
	        $("#msgday").val("");
	        $("#graday").val("");
	        $("#dddate").val("");
	        $("#dddttp").select2("val","");
	        $("#dddays").val("");
	        $("#delfgx").select2("val","");
	        $("#delday").val("");
	        
	        $("#hirfgc").select2("val","");	        
	        $("#hiridc").val("");
	        $("#hirfg1").select2("val","");	        
	        $("#hirid1").val("");
	        $("#hirfg2").select2("val","");	        
	        $("#hirid2").val("");
	        $("#hirfg3").select2("val","");	        
	        $("#hirid3").val("");
	        $("#hirfg4").select2("val","");	        
	        $("#hirid4").val("");
	        $("#hirfg5").select2("val","");	        
	        $("#hirid5").val("");
	        $("#hirfg6").select2("val","");	        
	        $("#hirid6").val("");
	        $("#hirfg7").select2("val","");	        
	        $("#hirid7").val("");
	        $("#hirfg8").select2("val","");	        
	        $("#hirid8").val("");
	        $("#hirfg9").select2("val","");	        
	        $("#hirid9").val("");
	        show();
	        $("#edittypeModal").modal('show');
		    // $('.add-form .alert').css('display','none');
			// $('.add-form .form-group').removeClass('has-error');
			 //$('.add-form .form-group .help-block').remove();
	        $("#edittypeModal").on("hide.bs.modal",function(){
   				$('.msg', $("#edittypeModal")).text("");	
   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
   	        	grid.submitFilter();       	
   	        });  
	   	});
		
		//保存
		$("#btn_save_type").click(function() {
			$("form", $("#edittypeModal")).submit();
		});
		var matuValid = Sunline.getValidate($("form", "#edittypeModal"),
				function() {
					var data = {};
					$.each($("input", $("#edittypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("cc/edacctattr", data, "post",
							function(ret) {
								if (ret.ret == "success") {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.show();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$("form", $("#edittypeModal")))
											.hide();
									$(".alert-danger",
											$("form", $("#edittypeModal")))
											.show();
								}
								$(".msg", $("form", $("#edittypeModal"))).text(
										ret.msg);
							});

				}, {
					attrid : {
						required : true,
						number:true
					},
					accttp : {
						required : true
					},	
					dudays : {
						number:true
					},
					dudate : {
						number:true
					},
					fixday : {
						number:true
					},
					msgday : {
						number:true
					},
					graday : {
						number:true
					},
					dddays : {
						number:true
					},
					delday : {
						number:true
					}
				});

	}

	return {
		init : function() {
			handleTable();
		}
	}
}();