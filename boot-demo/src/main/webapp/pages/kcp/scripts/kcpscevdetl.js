var kcpscevdetl = function() {

	var moduleDict = Sunline.getDict("E_MODULE");//维度类型
	var evetusDict = Sunline.getDict("E_EVETUS");//事件用途类型
	
	$("input[name='module']").select2({data:moduleDict,allowClear:true});
	$("input[name='evetus']").select2({data:evetusDict,allowClear:true});
	
	var handleTable = function() {
		var detlgrid = new Datatable();
		var detlurl = Sunline.ajaxPath("kcp/qrdetl");
		var detlsendData = [ "scencd","module","evetcd","dimecg","evetus"];

		detlgrid.init({
					src : $("#datatable_detl"),
					deleteData : detlsendData,
					onSuccess : function(detlgrid) {
					},
					onError : function(detlgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : detlurl,
						},
						"columns" : [
								{
									"data" : "scencd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "scends",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "module",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < moduleDict.length; i++) {
											if (moduleDict[i].id == data) {
												return moduleDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "evetcd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dimecg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dimevl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "evetus",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < evetusDict.length; i++) {
											if (evetusDict[i].id == data) {
												return evetusDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.scencd
												+","
												+ data.module
												+","
												+ data.evetcd
												+","
												+ data.dimecg
												+","
												+ data.evetus
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.scencd
												+","
												+ data.module
												+","
												+ data.evetcd
												+","
												+ data.dimecg
												+","
												+ data.evetus
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		detlgrid.bindTableDelete(detlsendData);
		
		detlgrid.bindTableEdit(detlsendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
		//编辑时锁定场景代码、模块、事件编号、维度类别、事件用途
			$("input[name='scencd']").attr("readOnly",true);
			$("input[name='module']").attr("readOnly",true);
			$("input[name='evetcd']").attr("readOnly",true);
			$("input[name='dimecg']").attr("readOnly",true);
			$("input[name='evetus']").attr("readOnly",true);
			
			$("input[name='scencd']").val($(nRowA[0]).text()); 
			$("input[name='scends']").val($(nRowA[1]).text()); 
			$("input[name='module']").val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
			$("input[name='evetcd']").val($(nRowA[3]).text()); 
			$("input[name='dimecg']").val($(nRowA[4]).text()); 
			$("input[name='dimevl']").val($(nRowA[5]).text()); 
			$("input[name='evetus']").val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change");
			$("input[name='remark']").val($(nRowA[7]).text()); 
			
			$("#editdetlModal").modal('show');
			$("#editdetlModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdetlModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdetlModal"))).hide(); 
	        	$(".msg",$('form', $("#editdetlModal"))).text("");
				detlgrid.submitFilter();
			});
		})
		
		// 新增窗口
		$("#add_detl_btn").bind("click", function() {
			//新增时解锁场景代码、模块、事件编号、维度类别、事件用途
			$("input[name='scencd']").attr("readOnly",false);
			$("input[name='module']").attr("readOnly",false);
			$("input[name='evetcd']").attr("readOnly",false);
			$("input[name='dimecg']").attr("readOnly",false);
			$("input[name='evetus']").attr("readOnly",false);
			//清空原纪录
			$("input[name='scencd']").val(""); 
			$("input[name='scends']").val("");
			$("input[name='module']").val("").trigger("change");
			$("input[name='evetcd']").val(""); 
			$("input[name='dimecg']").val(""); 
			$("input[name='dimevl']").val(""); 
			$("input[name='evetus']").val("");
			$("input[name='remark']").val("");
			
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editdetlModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editdetlModal").modal('show');
			$("#editdetlModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdetlModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdetlModal"))).hide(); 
	        	$(".msg",$('form', $("#editdetlModal"))).text("");
				detlgrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_detl").click(function(){
			$('form', $("#editdetlModal")).submit();
		});
		
		var detlValid = Sunline.getValidate($('form', $("#editdetlModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdetlModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/eddetl", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editdetlModal"))).show();
                        	   $('.alert-danger', $('form', $("#editdetlModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editdetlModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editdetlModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editdetlModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 detlcd:{maxlength : 20}	
//				}
				);

		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();