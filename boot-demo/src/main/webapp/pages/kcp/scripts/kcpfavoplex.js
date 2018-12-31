var kcpchrgpars = function() {

	var crcycdDict = Sunline.getDict("crcycd");//货币代号
	var fasttpDict = Sunline.getDict("E_FASTTP");//费用优惠起点类型
	/*var plcdDict = Sunline.getDict("type", "/plcd", "diplcd","planna");//优惠计划代码
	var rgcdDict = Sunline.getDict("type", "/rgcd", "chrgcd","chrgna");//收费代码*/
	
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	$("input[name='fasttp']").select2({data:fasttpDict,allowClear:true});
	/*$("input[name='diplcd']").select2({data:plcdDict,allowClear:true});*/
	/*$("input[name='chrgcd']").select2({data:rgcdDict,allowClear:true});*/
	
	var handleTable = function() {
		var parsgrid = new Datatable();
		var parsurl = Sunline.ajaxPath("kcp/qkcple");
		var parssendData = [ "chrgcd","crcycd","diplcd"];

		parsgrid.init({
					src : $("#datatable_pars"),
					deleteData : parssendData,
					onSuccess : function(parsgrid) {
					},
					onError : function(parsgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : parsurl,
						},
						"columns" : [
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false,
									/*"render" : function(data, type, full) {
										for (var i = 0; i < rgcdDict.length; i++) {
											if (rgcdDict[i].id == data) {
												return rgcdDict[i].text;
											}
										}
										return data;
									}*/
								},
								{
									"data" : "crcycd",
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
								},
								{
									"data" : "diplcd",
									"sortable" : false,
									"searchable" : false,
									/*"render" : function(data, type, full) {
										for (var i = 0; i < plcdDict.length; i++) {
											if (plcdDict[i].id == data) {
												return plcdDict[i].text;
											}
										}
										return data;
									}*/
								},
								{
									"data" : "fasttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < fasttpDict.length; i++) {
											if (fasttpDict[i].id == data) {
												return fasttpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "fastam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "favoir",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.chrgcd
												+","
												+data.crcycd
												+","
												+data.diplcd
												+","
												+data.fasttp
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.chrgcd
												+","
												+data.crcycd
												+","
												+data.diplcd
												+","
												+data.fasttp
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		
		parsgrid.bindTableDelete(parssendData);
		
		parsgrid.bindTableEdit(parssendData,function(nRowA){
			$("input[name='chrgcd']").attr("readOnly",true);//收费代码
			$("input[name='crcycd']").attr("readOnly",true);//货币代号
			$("input[name='diplcd']").attr("readOnly",true);//优惠计划代码
			$("input[name='chrgcd']").val($(nRowA[0]).text()); 
			/*$("input[name='chrgcd']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");*/
			$("input[name='crcycd']").val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change");
			/*$("input[name='diplcd']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");*/
			$("input[name='diplcd']").val($(nRowA[2]).text()); 
			$("input[name='fasttp']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='fastam']").val($(nRowA[4]).text()); 
			$("input[name='favoir']").val($(nRowA[5]).text());
			$("input[name='isinst']").val("0");
			
			$("#editparsModal").modal('show');
			$("#editparsModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editparsModal"))).hide();
	        	$('.alert-danger', $('form', $("#editparsModal"))).hide(); 
	        	$(".msg",$('form', $("#editparsModal"))).text("");
				parsgrid.submitFilter();
			});
		})
		
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_pars_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editparsModal").modal('show');
			$("#editparsModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				parsgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_evnt").click(function(){
			$('form', $("#editparsModal")).submit();
		});
		
		var parsValid = Sunline.getValidate($('form', $("#editparsModal")),
				function() {
					var data = {};
					$.each($("input", $("#editparsModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/ekcple", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editparsModal"))).show();
                        	   $('.alert-danger', $('form', $("#editparsModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editparsModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editparsModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editparsModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 defncd:{maxlength : 20}	
//				}
				);

		
	};
	
	// 时间插件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();