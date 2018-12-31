var kcpchrgdeta = function() {

	var plcdDict = Sunline.getDict("type", "/plcd", "diplcd","planna");//优惠计划代码
	
	$("input[name='diplcd']").select2({data:plcdDict,allowClear:true});
	
	var handleTable = function() {
		var detagrid = new Datatable();
		var detaurl = Sunline.ajaxPath("kcp/qkcplj");
		var detasendData = [ "diplcd","dimecg","fadmvl","ildmdn","ildmup"];

		detagrid.init({
					src : $("#datatable_deta"),
					deleteData : detasendData,
					onSuccess : function(detagrid) {
					},
					onError : function(detagrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : detaurl,
						},
						"columns" : [
								{
									"data" : "diplcd",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < plcdDict.length; i++) {
											if (plcdDict[i].id == data) {
												return plcdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "dimecg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fadmvl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ildmdn",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "ildmup",
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
												+ data.diplcd
												+","
												+data.dimecg
												+","
												+data.fadmvl
												+","
												+data.ildmdn
												+","
												+data.ildmup
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.diplcd
												+","
												+data.dimecg
												+","
												+data.fadmvl
												+","
												+data.ildmdn
												+","
												+data.ildmup
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		detagrid.bindTableDelete(detasendData);
		
		detagrid.bindTableEdit(detasendData,function(nRowA){
			$("input[name='diplcd']").attr("readOnly",true);//优惠计划代码
			$("input[name='dimecg']").attr("readOnly",true);//维度类别
			$("input[name='fadmvl']").attr("readOnly",true);//优惠计划维度取值
			$("input[name='ildmdn']").attr("readOnly",true);//关联维度值下限
			$("input[name='ildmup']").attr("readOnly",true);//关联维度值上限
			
			$("input[name='diplcd']").val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
			$("input[name='dimecg']").val($(nRowA[1]).text()); 
			$("input[name='fadmvl']").val($(nRowA[2]).text()); 
			$("input[name='ildmdn']").val($(nRowA[3]).text());
			$("input[name='ildmup']").val($(nRowA[4]).text()); 
			$("input[name='efctdt']").val($(nRowA[5]).text()); 
			$("input[name='inefdt']").val($(nRowA[6]).text()); 
			$("input[name='isinst']").val("0");
			
			$("#editdetaModal").modal('show');
			$("#editdetaModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdetaModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdetaModal"))).hide(); 
	        	$(".msg",$('form', $("#editdetaModal"))).text("");
				detagrid.submitFilter();
			});
		})
		
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_deta_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editdetaModal").modal('show');
			$("#editdetaModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				detagrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_evnt").click(function(){
			$('form', $("#editdetaModal")).submit();
		});
		
		var detaValid = Sunline.getValidate($('form', $("#editdetaModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdetaModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/ekcplj", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editdetaModal"))).show();
                        	   $('.alert-danger', $('form', $("#editdetaModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editdetaModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editdetaModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editdetaModal"))).text(ret.msg);
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