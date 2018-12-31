var lnfagnt=function(){
		
		/**
		 * 枚举类型调取
		 */			
		var crcycdDict =Sunline.getDict("crcycd");		//币种
		var	ioflagDict = Sunline.getDict("D_IOFLAG");	//代理核算方式
		var	aglvfgDict = Sunline.getDict("E_AGLVFG");	//代理信息指定规则
		var	agobfgDict = Sunline.getDict("E_AGOBFG");	//代理信息取值规则
		
	    $("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	    $("input[name='ioflag']").select2({data:ioflagDict,allowClear:true});
	    $("input[name='aglvfg']").select2({data:aglvfgDict,allowClear:true});
	    $("input[name='agobfg']").select2({data:agobfgDict,allowClear:true});
	    
		
		var handleTable = function(prodcd) {
			var agntgrid = new Datatable();
			var agnturl = Sunline.ajaxPath("loan/qragnt");	//URL???
			console.log(agntgrid);
			var agntsendData = ["prodcd","crcycd"];		//主键
			if (!Sunline.isNull(prodcd)) {
				agntgrid.setAjaxParam("q_prodcd", prodcd);
			}
			agntgrid.init({
						src : $("#datatable_agnt"),
						deleteData : agntsendData,
						onSuccess : function(agntgrid) {
						},
						onError : function(agntgrid) {
						},
						"bRetrieve": false,
		                "destroy": true, 
						dataTable : {
							"ajax" : {
								"url" : agnturl,
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
										"data" : "ioflag",//代理核算方式
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < ioflagDict.length; i++) {
												if (ioflagDict[i].id == data) {
													return ioflagDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "aglvfg",	//代理信息指定规则
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < aglvfgDict.length; i++) {
												if (aglvfgDict[i].id == data) {
													return aglvfgDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "agobfg",	//代理信息取值规则
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < agobfgDict.length; i++) {
												if (agobfgDict[i].id == data) {
													return agobfgDict[i].text;
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
			agntgrid.bindTableDelete(agntsendData);		//绑定数据删除？？？？
			agntgrid.bindTableEdit(agntsendData,function(nRowA){
				//主键不可修改
			  $("input[name='crcycd']", $("#editagntModal")).attr("readOnly",true);
			  //基本类型
			  $("input[name='prodcd']", $("#editagntModal")).val($(nRowA[0]).text());
			  //枚举类型
			  $("input[name='crcycd']", $("#editagntModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
			  //代理核算方式
			  $("input[name='ioflag']", $("#editagntModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
			//代理信息指定规则
			  $("input[name='aglvfg']", $("#editagntModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change"); 
			//代理信息取值规则
			  $("input[name='agobfg']", $("#editagntModal")).val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change"); 
			 
			  $("#editagntModal").modal('show');
			  $("#editagntModal").on("hide.bs.modal", function() {
					$(".alert-success",$('form', $("#editagntModal"))).hide();
		        	$('.alert-danger', $('form', $("#editagntModal"))).hide(); 
		        	$(".msg",$('form', $("#editagntModal"))).text("");
					agntgrid.submitFilter();
				});
			});
			
			$("#editagntModal").click(function(){
			   	$(".select-close").select2("close");
			});
			
			// 新增窗口
			$("#add_agnt_btn").bind("click", function() {
				//解除input  readOnly属性
				$("input[name='crcycd']", $("#editagntModal")).attr("readOnly",false);
				//清空 input值
				$("input", $("#editagntModal")).val("").trigger("change");
				$("input[name='prodcd']", $("#editagntModal")).val(prodcd);
				$("#editagntModal").modal('show');
				$("#editagntModal").on("hide.bs.modal", function() {
					$(".alert-success",$('form', $("#editagntModal"))).hide();
		        	$('.alert-danger', $('form', $("#editagntModal"))).hide(); 
		        	$(".msg",$('form', $("#editagntModal"))).text("");
					agntgrid.submitFilter();
				});
				return false;
			});
			
			$("#btn_save_agnt").click(function(e){	
				e.preventDefault();
				     //保存按钮
				$('form', $("#editagntModal")).submit();
			});
			
			//赋值DIV
			var acctValid = Sunline.getValidate($('form', $("#editagntModal")),
					function() {
						var data = {};
						$.each($("input", $("#editagntModal")), function(i, n) {
							if (n.name != undefined&&n.name!=""&&n.name!=null) {
								data[n.name] = n.value;
							}
						});
						Sunline.ajaxRouter("loan/edagnt", 
							data
						, 'post', function(ret) {
	                          if(ret.ret==="success"){              
	                        	   $(".alert-success",$('form', $("#editagntModal"))).show();
	                        	   $('.alert-danger', $('form', $("#editagntModal"))).hide(); 		   
	                          }else{                        	 
			                   	   $(".alert-success",$('form', $("#editagntModal"))).hide();
			                   	   $('.alert-danger', $('form', $("#editagntModal"))).show();                        	  
	                          }
	                          $(".msg",$('form', $("#editagntModal"))).text(ret.msg);
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