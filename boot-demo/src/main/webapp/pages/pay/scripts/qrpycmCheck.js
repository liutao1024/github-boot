var qrpycmCheck = function() {
	var dict={
			idtftpDict:Sunline.getDict("E_IDTFTP"),//证件类型
			agrestDict:Sunline.getDict("E_VALID_"),//客户状态	agrest,custst
			agretpDict:Sunline.getDict("E_PROTOC"),//协议类型
			appvstDict:Sunline.getDict("E_APPVST")//审核状态
	}
	$("input[name='idtftp']").select2({
		data : dict.idtftpDict,
		allowClear : true
	});
	$("input[name='status']").select2({
		data : dict.agrestDict,
		allowClear : true
	});
	$("input[name='agretp']").select2({
		data : dict.agretpDict,
		allowClear : true
	}).select2('val','01');;
	$("input[name='appvst']").select2({
		data : dict.appvstDict,
		allowClear : true
	}).select2('val','0');

	var sump_query_datatable = new Datatable();
	var init_sump_query_datatable_flag = false;
	var sump_query_form = $("#sump_query_form");
	var sump_query_table =  $("#sump_query_table");
	var sump_query_url = Sunline.ajaxPath("pay/sumpQrpycm");
	var sump_query_main_ID = ["idtftp","idtfno"];

	var check_Modal = $("#check_Modal");
	var check_form = $("#check_form");

	var core_query_datatable = new Datatable();
	var core_query_Modal = $("#core_query_Modal");//core_query_Modal
	var init_core_query_datatable_flag = false;
	var core_query_form = $("#core_query_form");
	var core_query_table = $("#core_query_table");
	var core_query_url = Sunline.ajaxPath("pay/qrpycm");
	var core_query_main_ID = ["cmpyno","agretp"];
	
	var core_edit_Modal = $("#core_edit_Modal");
	var core_edit_form = $("#core_edit_form");



	var handlerOperator = function(){
		//清空
		$("button[name='cancle']",sump_query_form).click(function(){
			$("input", sump_query_form).val("").trigger('change');
		});
		$("button[name='cancle']",core_query_form).click(function(){
			$("input", core_query_form).val("").trigger('change');
		});

		//sump_query查询
		$("button[name='submit']",sump_query_form).click(function(){
			$.each($("input", sump_query_form), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					sump_query_datatable.setAjaxParam(n.name,n.value);
				}
			});
			sump_query_datatable.submitFilter();
		});
		//core_query查询
		$("button[name='submit']",core_query_form).click(function(){
			$.each($("input", core_query_form), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					core_query_datatable.setAjaxParam(n.name,n.value);
				}
			});
			core_query_datatable.submitFilter();
		});

		$("#btn_check_pass").click(function(){
			var inputData = {};
			$.each($("input", check_form), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					inputData[n.name] = n.value;
				}
			});
			console.info(inputData);
			Sunline.ajaxRouter("pay/oppycm", 
					inputData
					, 'POST', function(ret) {
				console.info(ret);
				if(ret.retCode=="0000"){
					var check_data = {};
					check_data.idtftp = $("input[name='idtftp']",check_form).val();
					check_data.idtfno = $("input[name='idtfno']",check_form).val();
					check_data.appvst = "1";
					console.info(check_data);
					Sunline.ajaxRouter("pay/editCmInfo", 
							check_data
							, 'POST', function(sumpRet) {
						console.info(sumpRet);
					});
					$(".alert-success",check_form).show();
					$('.alert-danger', check_form).hide(); 		   
				}else{                        	 
					$(".alert-success",check_form).hide();
					$('.alert-danger', check_form).show();                        	  
				}
				$(".msg",check_form).text(ret.retMsg);
			});
		});


		//核心信息查询
		$("#core_query").click(function() {
			init_core_query_datatable();
			core_query_Modal.modal('show');
			core_query_Modal.on("hide.bs.modal", function() {
				//窗口关闭后查询管理平台录入信息
				sump_query_datatable.submitFilter();
			});
			core_query_datatable_action();
		});

		$("#btn_save_add").click(function(){
			$('form', $("#addModal")).submit();
		});
		$("#btn_save_edit").click(function(){
			$('form', $("#editModal")).submit();
		});

		$("#core_edit_submit").click(function(){
			core_edit_form.submit();
		});
		
		sump_query_datatable_action();
	}

	//表单提交验证
	var valids =function(){
		var editValid = Sunline.getValidate(core_edit_form,
				function() {
			var data = {};
			$.each($("input", core_edit_form), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					data[n.name] = n.value;
				}
			});
			console.log(data);
			Sunline.ajaxRouter('pay/uppycm', 
					data
					, 'post', function(ret) {
				if(ret.retCode=="0000"){              
					$(".alert-success",core_edit_form).show();
					$('.alert-danger', core_edit_form).hide(); 		   
				}else{                        	 
					$(".alert-success",core_edit_form).hide();
					$('.alert-danger', core_edit_form).show();                        	  
				}
				$(".msg",core_edit_form).text(ret.retMsg);
			});

		},
		{
			cmpyno:{required : true},
			agretp:{required : true},
			custna:{required : true},
			opcftf:{required : true},
			opcfno:{required : true},
			opcfna:{required : true},
			opcfbn:{required : true},
			opcfba:{required : true},
			upidno:{required : true},
			rpidno:{required : true},
			rptlno:{required : true},
			rpmail:{required : true},
			addrrs:{required : true},
			status:{required : true}
		}
		);
	}
	
	//初始化sump_query_datatable
	var init_sump_query_datatable = function(){
		$.each($("input", sump_query_form), function(i, n) {
			if (n.name != undefined&&n.name!=""&&n.name!=null) {
				console.info(n.name+","+n.value);
				sump_query_datatable.setAjaxParam(n.name,n.value);
			}
		});
		if(!init_sump_query_datatable_flag){
			//第一次初始化datatable
			sump_query_datatable.init({
				src : sump_query_table,
				deleteData : sump_query_main_ID,
				onSuccess : function(sump_query_datatable) {
				},
				onError : function(sump_query_datatable) {
				},
				dataTable : {
					"ajax" : {
						"url" : sump_query_url,
					},
					"columns" : [
					             {
					            	 "data" : "custno",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "custna",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "idtftp",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.idtftpDict.length; i++) {
					            			 if (dict.idtftpDict[i].id == data) {
					            				 return dict.idtftpDict[i].text;
					            			 }
					            		 }
					            		 return data;
					            	 }
					             },
					             {
					            	 "data" : "idtfno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcftf",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "opcfno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcfna",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "opcfbn",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcfba",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "upidno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "rpidno",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "rptlno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "rpmail",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "addrrs",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "appvst",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.appvstDict.length; i++) {
					            			 if (dict.appvstDict[i].id == data) {
					            				 return dict.appvstDict[i].text;
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
					            		 + data.idtftp
					            		 +","
					            		 +data.idtfno
					            		 + "'>审核</a>";
					            	 }
					             }]
				}
			});
			init_sump_query_table_flag = true;
		}else{
			sump_query_datatable.submitFilter();
		}
	};


	//绑定datatable事件
	var sump_query_datatable_action = function(){
		sump_query_datatable.bindTableEdit(sump_query_main_ID,function(nRowA){
			//审核的信息不允许修改
			$('input', check_form).attr("readOnly",true);
			$('input', check_form).attr("disabled",true);
			$("input[name='custno']", check_form).val($(nRowA[0]).text());
			$("input[name='custna']", check_form).val($(nRowA[1]).text());
			$("input[name='idtftp']", check_form).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
			$("input[name='idtfno']", check_form).val($(nRowA[3]).text()); 
			$("input[name='opcftf']", check_form).val($(nRowA[4]).text()); 
			$("input[name='opcfno']", check_form).val($(nRowA[5]).text());
			$("input[name='opcfna']", check_form).val($(nRowA[6]).text()); 
			$("input[name='opcfbn']", check_form).val($(nRowA[7]).text()); 
			$("input[name='opcfba']", check_form).val($(nRowA[8]).text()); 
			$("input[name='upidno']", check_form).val($(nRowA[9]).text());
			$("input[name='rpidno']", check_form).val($(nRowA[10]).text()); 
			$("input[name='rptlno']", check_form).val($(nRowA[11]).text()); 
			$("input[name='rpmail']", check_form).val($(nRowA[12]).text()); 
			$("input[name='addrrs']", check_form).val($(nRowA[13]).text());
			$("input[name='appvst']", check_form).val($(nRowA[14]).text().substring($(nRowA[14]).text().indexOf("[")+1,$(nRowA[14]).text().indexOf("]"))).trigger("change");
			check_Modal.modal('show');
			check_Modal.on("hide.bs.modal", function() {
				$(".alert-success",check_form).hide();
				$('.alert-danger', check_form).hide(); 
				$(".msg",check_form).text("");
				sump_query_datatable.submitFilter();
			});
		})
	}

	
	//绑定datatable事件
	var core_query_datatable_action = function(){
		core_query_datatable.bindTableEdit(core_query_main_ID,function(nRowA){
			//审核的信息不允许修改
			$('input', core_edit_form).removeAttr("readOnly");
			$('input', core_edit_form).removeAttr("disabled");
			$("input[name='cmpyno']", core_edit_form).val($(nRowA[1]).text()).attr("readOnly",true);
			$("input[name='agretp']", core_edit_form).val($(nRowA[23]).text().substring($(nRowA[23]).text().indexOf("[")+1,$(nRowA[23]).text().indexOf("]"))).attr("readOnly",true).trigger("change");
			$("input[name='custna']", core_edit_form).val($(nRowA[2]).text()); 
			$("input[name='opcftf']", core_edit_form).val($(nRowA[5]).text()); 
			$("input[name='opcfno']", core_edit_form).val($(nRowA[6]).text()); 
			$("input[name='opcfna']", core_edit_form).val($(nRowA[7]).text());
			$("input[name='opcfbn']", core_edit_form).val($(nRowA[8]).text()); 
			$("input[name='opcfba']", core_edit_form).val($(nRowA[9]).text()); 
			$("input[name='upidno']", core_edit_form).val($(nRowA[10]).text()); 
			$("input[name='rpidno']", core_edit_form).val($(nRowA[11]).text());
			$("input[name='rptlno']", core_edit_form).val($(nRowA[12]).text()); 
			$("input[name='rpmail']", core_edit_form).val($(nRowA[13]).text()); 
			$("input[name='addrrs']", core_edit_form).val($(nRowA[14]).text()); 
			$("input[name='status']", core_edit_form).val($(nRowA[29]).text().substring($(nRowA[29]).text().indexOf("[")+1,$(nRowA[29]).text().indexOf("]"))).trigger("change");
			core_edit_Modal.modal('show');
			core_edit_Modal.on("hide.bs.modal", function() {
				$(".alert-success",core_edit_form).hide();
				$('.alert-danger', core_edit_form).hide(); 
				$(".msg",core_edit_form).text("");
				core_query_datatable.submitFilter();
			});
		})
	}

	//初始化core_query_datatable
	var init_core_query_datatable = function(){
		$.each($("input", core_query_form), function(i, n) {
			if (n.name != undefined&&n.name!=""&&n.name!=null) {
				console.info(n.name+","+n.value);
				core_query_datatable.setAjaxParam(n.name,n.value);
			}
		});
		if(!init_core_query_datatable_flag){
			//第一次初始化datatable
			core_query_datatable.init({
				src : core_query_table,
				deleteData : core_query_main_ID,
				onSuccess : function(core_query_datatable) {
				},
				onError : function(core_query_datatable) {
				},
				dataTable : {
					"ajax" : {
						"url" : core_query_url,
					},
					"columns" : [
					             {
					            	 "data" : "custno",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "cmpyno",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "custna",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "idtftp",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.idtftpDict.length; i++) {
					            			 if (dict.idtftpDict[i].id == data) {
					            				 return dict.idtftpDict[i].text;
					            			 }
					            		 }
					            		 return data;
					            	 }
					             },
					             {
					            	 "data" : "idtfno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcftf",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "opcfno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcfna",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "opcfbn",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opcfba",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "upidno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "rpidno",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "rptlno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "rpmail",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "addrrs",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "custst",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.agrestDict.length; i++) {
					            			 if (dict.agrestDict[i].id == data) {
					            				 return dict.agrestDict[i].text;
					            			 }
					            		 }
					            		 return data;
					            	 }
					             },
					             {
					            	 "data" : "opendt",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "opensq",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "closdt",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "clossq",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "stan01",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "stan02",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "stan03",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "agretp",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.agretpDict.length; i++) {
					            			 if (dict.agretpDict[i].id == data) {
					            				 return dict.agretpDict[i].text;
					            			 }
					            		 }
					            		 return data;
					            	 }
					             },
					             {
					            	 "data" : "agreno",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "effcdt",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "effcsq",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "faildt",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "failsq",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "agrest",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 for (var i = 0; i < dict.agrestDict.length; i++) {
					            			 if (dict.agrestDict[i].id == data) {
					            				 return dict.agrestDict[i].text;
					            			 }
					            		 }
					            		 return data;
					            	 }
					             },
					             {
					            	 "data" : "remark",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "stax01",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "stax02",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "stax03",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : null,
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full) {
					            		 return "<a class='edit' href='javascript:;' data-src='"
					            		 + data.cmpyno
					            		 +","
					            		 +data.agretp
					            		 + "'>编辑 </a>";
					            	 }
					             }]
				}
			});
			init_core_query_datatable_flag = true;
		}else{
			core_query_datatable.submitFilter();
		}
	};
	
	//初始化表单
	var handleTable = function() {
		init_sump_query_datatable();
	};
	return {
		init : function() {
			valids();
			handleTable();
			handlerOperator();
		}
	}
}();