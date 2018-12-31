var lnfctrl=function(){
		
		/**
		 * 枚举类型调取
		 */			
		var crcycdDict =Sunline.getDict("crcycd");		//币种
		var	modrulDict = Sunline.getDict("E_MODRUL");	//账户修改规则
		
	    $("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	    $("input[name='modrul']").select2({data:modrulDict,allowClear:true});
	    
		
		var handleTable = function(prodcd) {
			var ctrlgrid = new Datatable();
			var ctrlurl = Sunline.ajaxPath("loan/qrctrl");	//URL???
			var ctrlsendData = ["prodcd","crcycd"];		//主键
			if (!Sunline.isNull(prodcd)) {
				ctrlgrid.setAjaxParam("q_prodcd", prodcd);
			}
			ctrlgrid.init({
						src : $("#datatable_ctrl"),
						deleteData : ctrlsendData,
						onSuccess : function(ctrlgrid) {
						},
						onError : function(ctrlgrid) {
						},
						dataTable : {
							"ajax" : {
								"url" : ctrlurl,
							},
							"columns" : [
									{
										"data" : "prodcd",	//产品代码
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "crcycd",	//币种
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
										"data" : "pdlvtb",	//产品级表名
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "pblvfd",	//产品级字段
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "pfinfo",	//产品级字段描述
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "accttb",	//账户级表名
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "acctfd",	//账户级字段
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "afinfo",	//账户级字段描述
										"sortable" : false,
										"searchable" : false
									},
									{
										"data" : "modrul",	//账户修改规则
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < modrulDict.length; i++) {
												if (modrulDict[i].id == data) {
													return modrulDict[i].text;
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
													+","
													+ data.crcycd
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
													+","
													+ data.crcycd
												    + "'>删除 </a>";
										}
									} ]
						}
					});
			ctrlgrid.bindTableDelete(ctrlsendData);		//绑定数据删除？？？？
			ctrlgrid.bindTableEdit(ctrlsendData,function(nRowA){
				//主键不可修改
			  $("input[name='crcycd']", $("#editctrlModal")).attr("readOnly",true);		
			  //给input框赋值
			  //基本类型
			  $("input[name='prodcd']", $("#editctrlModal")).val($(nRowA[0]).text());
			  //枚举类型
			  $("input[name='crcycd']", $("#editctrlModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
			//产品级表名
			  $("input[name='pdlvtb']", $("#editctrlModal")).val($(nRowA[2]).text());
			//产品级字段
			  $("input[name='pblvfd']", $("#editctrlModal")).val($(nRowA[3]).text());
			//产品级字段描述
			  $("input[name='pfinfo']", $("#editctrlModal")).val($(nRowA[4]).text());
			//账户级表名
			  $("input[name='accttb']", $("#editctrlModal")).val($(nRowA[5]).text());
			//账户级字段
			  $("input[name='acctfd']", $("#editctrlModal")).val($(nRowA[6]).text());
			//账户级字段描述
			  $("input[name='afinfo']", $("#editctrlModal")).val($(nRowA[7]).text());
			  //账户修改规则
			  $("input[name='modrul']", $("#editctrlModal")).val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change"); 
			
			  $("#editctrlModal").modal('show');
			});
			
			$("#editctrlModal").click(function(){
		   	    $(".select-close").select2("close");
		    });
			
			// 新增窗口
			$("#add_ctrl_btn").bind("click", function() {
				//解除input  readOnly属性
				$("input[name='crcycd']", $("#editctrlModal")).attr("readOnly",false);
				//清空 input值
				$("input", $("#editctrlModal")).val("").trigger("change");
				$("input[name='prodcd']", $("#editctrlModal")).val(prodcd);
				$("#editctrlModal").modal('show');
				$("#editctrlModal").on("hide.bs.modal", function() {
					$(".alert-success",$('form', $("#editctrlModal"))).hide();
		        	$('.alert-danger', $('form', $("#editctrlModal"))).hide(); 
		        	$(".msg",$('form', $("#editctrlModal"))).text("");
					ctrlgrid.submitFilter();
				});
				return false;
			});
			
			$("#btn_save_ctrl").click(function(){		//保存按钮
				$('form', $("#editctrlModal")).submit();
			});
			
			//赋值DIV
			var ctrlValid = Sunline.getValidate($('form', $("#editctrlModal")),
					function() {
						var data = {};
						$.each($("input", $("#editctrlModal")), function(i, n) {
							if (n.name != undefined&&n.name!=""&&n.name!=null) {
								data[n.name] = n.value;
							}
						});
						Sunline.ajaxRouter("loan/edctrl", 
							data
						, 'post', function(ret) {
	                          if(ret.ret==="success"){              
	                        	   $(".alert-success",$('form', $("#editctrlModal"))).show();
	                        	   $('.alert-danger', $('form', $("#editctrlModal"))).hide(); 		   
	                          }else{                        	 
			                   	   $(".alert-success",$('form', $("#editctrlModal"))).hide();
			                   	   $('.alert-danger', $('form', $("#editctrlModal"))).show();                        	  
	                          }
	                          $(".msg",$('form', $("#editctrlModal"))).text(ret.msg);
						});

					}, {	//字段规则
						prodcd:{required : true,maxlength : 10},	//产品代码(必填，最大长度10)
						crcycd:{required : true}					//货币代号必选
					});

			
		};

		return {
			init : function(prodcd) {
				handleTable(prodcd);
			}
		}

		
}();