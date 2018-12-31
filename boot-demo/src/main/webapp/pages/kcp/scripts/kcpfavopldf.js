var kcpchrgmten = function() {
	
	var handleTable = function() {
		var mtengrid = new Datatable();
		var mtenurl = Sunline.ajaxPath("kcp/qkcpld");
		var mtensendData = [ "diplcd","dimecg"];

		mtengrid.init({
					src : $("#datatable_mten"),
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
									"data" : "diplcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "planna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fadmmp",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dimecg",
									"sortable" : false,
									"searchable" : false,
								},
								{
									"data" : "expmsg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "ildmch",
									"sortable" : false,
									"searchable" : false,
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
									"data" : "explan",
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
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		
		mtengrid.bindTableDelete(mtensendData);
		
		mtengrid.bindTableEdit(mtensendData,function(nRowA){
			
			var editform = $("#edit_form");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			
			$("input[name='diplcd']").attr("readOnly",true);//优惠计划代码
			$("input[name='dimecg']").attr("readOnly",true);//维度类别
			
			$("input[name='diplcd']").val($(nRowA[0]).text()); 
			$("input[name='planna']").val($(nRowA[1]).text()); 
			$("input[name='fadmmp']").val($(nRowA[2]).text()); 
			$("input[name='dimecg']").val($(nRowA[3]).text());
			$("input[name='expmsg']").val($(nRowA[4]).text()); 
			$("input[name='ildmch']").val($(nRowA[5]).text());
			$("input[name='efctdt']").val($(nRowA[6]).text()); 
			$("input[name='inefdt']").val($(nRowA[7]).text()); 
			$("input[name='explan']").val($(nRowA[8]).text()); 
			$("input[name='isinst']").val("0");
			
			$("#editmtenModal").modal('show');
			$("#editmtenModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editmtenModal"))).hide();
	        	$('.alert-danger', $('form', $("#editmtenModal"))).hide(); 
	        	$(".msg",$('form', $("#editmtenModal"))).text("");
				mtengrid.submitFilter();
			});
		})
		
		
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		// 新增窗口
		$("#add_mten_btn").bind("click", function() {
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			$("input[name='isinst']").val("1");
			$("#editmtenModal").modal('show');
			$("#editmtenModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
								.removeClass("has-success");
				mtengrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_evnt").click(function(){
			$('form', $("#editmtenModal")).submit();
		});
		
		var mtenValid = Sunline.getValidate($('form', $("#editmtenModal")),
				function() {
					var data = {};
					$.each($("input", $("#editmtenModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/ekcpld", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editmtenModal"))).show();
                        	   $('.alert-danger', $('form', $("#editmtenModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editmtenModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editmtenModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editmtenModal"))).text(ret.msg);
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
	
	$.validator.addMethod(
			"compdata", 
			function(param,element) {
				var bool = false;
				if($("#efctdt").val()!="" && $("#inefdt").val()!=""){
					parseInt($("#efctdt").val())>parseInt($("#inefdt").val()) ? bool=false:bool=true;
				}else{
					bool=true;
				}
		        return this.optional(element) || bool ;
			}, 
			$.validator.format("开始日期不能大于结束日期!")
		);

	return {
		init : function() {
			handleTable();
		}
	}
}();