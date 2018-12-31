var kcpspex = function() {
	var crcycdDict = Sunline.getDict("E_CRCYCD");// 币种
	var fasttpDict = Sunline.getDict("E_FASTTP");// 费用优惠起点类型
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	
	$("input[name='fasttp']").select2({
		data : fasttpDict,
		allowClear : true
	});

	var handleTable = function() {
		var mtengrid = new Datatable();
		var mtenurl = Sunline.ajaxPath("kcp/qkspex");
		var mtensendData = [ "chrgcd","sbbkcd","brchno","crcycd","fasttp","fastam","fatype","favalu"];

		mtengrid.init({
					src : $("#datatable_dime"),
					deleteData : mtensendData,
					onSuccess : function(mtengrid) {
					},
					onError : function(mtengrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : mtenurl,
						},
						"columns" : [
								{
									"data" : "chrgcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "sbbkcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "brchno",
									"sortable" : false,
									"searchable" : false
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
									"searchable" : false,
								},
								{
									"data" : "fatype",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "favalu",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "favoir",
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
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
										+ data.chrgcd
										+","
										+data.sbbkcd
										+","
										+data.brchno
										+","
										+data.crcycd
										+","
										+data.fasttp
										+","
										+data.fastam
										+","
										+data.fatype
										+","
										+data.favalu
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
												+data.sbbkcd
												+","
												+data.brchno
												+","
												+data.crcycd
												+","
												+data.fasttp
												+","
												+data.fastam
												+","
												+data.fatype
												+","
												+data.favalu
											    + "'>删除 </a>";
									}
								} ]
					}
				});
	
	mtengrid.bindTableDelete(mtensendData);
		
	mtengrid.bindTableEdit(mtensendData,function(nRowA){
			$("input[name='chrgcd']").attr("readOnly",true);
			$("input[name='sbbkcd']").attr("readOnly",true);
			$("input[name='brchno']").attr("readOnly",true);
			$("input[name='crcycd']").attr("readOnly",true);
			$("input[name='fasttp']").attr("readOnly",true);
			$("input[name='fastam']").attr("readOnly",true);
			$("input[name='fatype']").attr("readOnly",true);
			$("input[name='favalu']").attr("readOnly",true);
			
			$("input[name='chrgcd']").val($(nRowA[0]).text()); 
			$("input[name='sbbkcd']").val($(nRowA[1]).text()); 
			$("input[name='brchno']").val($(nRowA[2]).text()); 
			$("input[name='crcycd']").val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
			$("input[name='fasttp']").val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
			$("input[name='fastam']").val($(nRowA[5]).text()); 
			$("input[name='fatype']").val($(nRowA[6]).text()); 
			$("input[name='favalu']").val($(nRowA[7]).text()); 
			$("input[name='favoir']").val($(nRowA[8]).text()); 
			$("input[name='efctdt']").val($(nRowA[9]).text()); 
			$("input[name='inefdt']").val($(nRowA[10]).text());
			$("input[name='isinst']").val("0");
		
			$("#editdimeModal").modal('show');
			$("#editdimeModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdimeModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdimeModal"))).hide(); 
	        	$(".msg",$('form', $("#editdimeModal"))).text("");
				mtengrid.submitFilter();
			});
		})
		
		
		var form = $("#form");
		var editerror = $('.alert-danger', form);
		var editsuccess = $('.alert-success', form);
		// 新增窗口
		$("#add_dime_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', form).text("");
			$('input', form).removeAttr("readOnly");
			$('input', form).removeAttr("disabled");
			$('input', form).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editdimeModal").modal('show');
			$("#editdimeModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', form).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				mtengrid.submitFilter();
			});
			return false;
		});
	
			
		$("#btn_save_dime").click(function(){
			$('form', $("#editdimeModal")).submit();
		});
		
		var mtenValid = Sunline.getValidate($('form', $("#editdimeModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdimeModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/ekspex", 
						data
					, 'post', function(ret) {
                         if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editdimeModal"))).show();
                       	   $('.alert-danger', $('form', $("#editdimeModal"))).hide(); 		   
                         }else{                        	 
		                   	   $(".alert-success",$('form', $("#editdimeModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editdimeModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editdimeModal"))).text(ret.msg);
				});

				}
//				{
//				 depttm:{required : true},
//				 defncd:{maxlength : 20}	
//			}
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