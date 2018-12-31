var lnfdtit=function(){
		
		/**
		 * 枚举类型调取
		 */			
		var crcycdDict =Sunline.getDict("crcycd");		//币种
		var	prlnfgDict = Sunline.getDict("E_PRLNFG");	//按应计非应计核算
		var	clssfgDict = Sunline.getDict("E_CLSSFG");	//按一逾两呆核算
		var	dtitfgDict = Sunline.getDict("E_DTITFG");	//按贷款形态分科目核算
		var	isautoDict = Sunline.getDict("E_ISAUTO");	//自动形态转移
		var	inottpDict = Sunline.getDict("E_INOTTP");	//利息转出规则
		var	inintpDict = Sunline.getDict("E_ININTP");	//利息转回规则
		var	dtittpDict = Sunline.getDict("E_DTITTP");	//核算方式
		
	    $("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
	    $("input[name='prlnfg']").select2({data:prlnfgDict,allowClear:true});
	    $("input[name='clssfg']").select2({data:clssfgDict,allowClear:true});
	    $("input[name='dtitfg']").select2({data:dtitfgDict,allowClear:true});
	    $("input[name='isauto']").select2({data:isautoDict,allowClear:true});
	    $("input[name='inottp']").select2({data:inottpDict,allowClear:true});
	    $("input[name='inintp']").select2({data:inintpDict,allowClear:true});
	    $("input[name='dtittp']").select2({data:dtittpDict,allowClear:true});
	    
		
		var handleTable = function(prodcd) {
			var dtitgrid = new Datatable();
			var dtiturl = Sunline.ajaxPath("loan/qrdtit");	//URL???
			var dtitsendData = ["prodcd","crcycd"];		//主键
			if (!Sunline.isNull(prodcd)) {
				dtitgrid.setAjaxParam("q_prodcd", prodcd);
			}
			dtitgrid.init({
						src : $("#datatable_dtit"),
						deleteData : dtitsendData,
						onSuccess : function(dtitgrid) {
						},
						onError : function(dtitgrid) {
						},
						dataTable : {
							"ajax" : {
								"url" : dtiturl,
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
										"data" : "prlnfg",//按应计非应计核算
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < prlnfgDict.length; i++) {
												if (prlnfgDict[i].id == data) {
													return prlnfgDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "clssfg",	//按一逾两呆核算
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < clssfgDict.length; i++) {
												if (clssfgDict[i].id == data) {
													return clssfgDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "dtitfg",	//按贷款形态分科目核算
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < dtitfgDict.length; i++) {
												if (dtitfgDict[i].id == data) {
													return dtitfgDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "isauto",	//自动形态转移
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < isautoDict.length; i++) {
												if (isautoDict[i].id == data) {
													return isautoDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "inottp",	//利息转出规则
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < inottpDict.length; i++) {
												if (inottpDict[i].id == data) {
													return inottpDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "inintp",	//利息转回规则
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < inintpDict.length; i++) {
												if (inintpDict[i].id == data) {
													return inintpDict[i].text;
												}
											}
											return data;
										}
									},
									{
										"data" : "dtittp",	//核算方式
										"sortable" : false,
										"searchable" : false,
										"render" : function(data, type, full) {
											for (var i = 0; i < dtittpDict.length; i++) {
												if (dtittpDict[i].id == data) {
													return dtittpDict[i].text;
												}
											}
											return data;
										}
									},{
										"data" : "dtitcd",	//核算代码
										"sortable" : false,
										"searchable" : false
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
													
												    + "'>删除 </a>";
										}
									} ]
						}
					});
			dtitgrid.bindTableDelete(dtitsendData);		//绑定数据删除？？？？
			dtitgrid.bindTableEdit(dtitsendData,function(nRowA){
				//主键不可修改
			  $("input[name='crcycd']", $("#editdtitModal")).attr("readOnly",true);		
			  //给input框赋值
			  //基本类型
			  $("input[name='prodcd']", $("#editdtitModal")).val($(nRowA[0]).text());
			  //枚举类型
			  $("input[name='crcycd']", $("#editdtitModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
			//按应计非应计核算
			  $("input[name='prlnfg']", $("#editdtitModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
			//按一逾两呆核算
			  $("input[name='clssfg']", $("#editdtitModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change"); 
			//按贷款形态分科目核算
			  $("input[name='dtitfg']", $("#editdtitModal")).val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change"); 
			//自动形态转移
			  $("input[name='isauto']", $("#editdtitModal")).val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change"); 
			//利息转出规则
			  $("input[name='inottp']", $("#editdtitModal")).val($(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"))).trigger("change"); 
			//利息转回规则
			  $("input[name='inintp']", $("#editdtitModal")).val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change"); 
			//核算方式
			  $("input[name='dtittp']", $("#editdtitModal")).val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change"); 
			//核算代码
			  $("input[name='dtitcd']", $("#editdtitModal")).val($(nRowA[9]).text());
			  
			  $("#editdtitModal").modal('show');
			  $("#editdtitModal").on("hide.bs.modal", function() {
					$(".alert-success",$('form', $("#editdtitModal"))).hide();
		        	$('.alert-danger', $('form', $("#editdtitModal"))).hide(); 
		        	$(".msg",$('form', $("#editdtitModal"))).text("");
					dtitgrid.submitFilter();
				});
			});
			
			$("#editdtitModal").click(function(){
			   	  $(".select-close").select2("close");
			     });
			
			// 新增窗口
			$("#add_dtit_btn").bind("click", function() {
				//解除input  readOnly属性
				$("input[name='crcycd']", $("#editdtitModal")).attr("readOnly",false);
				//清空 input值
				$("input", $("#editdtitModal")).val("").trigger("change");
				$("input[name='prodcd']", $("#editdtitModal")).val(prodcd);
				$("#editdtitModal").modal('show');
				$("#editdtitModal").on("hide.bs.modal", function() {
					$(".alert-success",$('form', $("#editdtitModal"))).hide();
		        	$('.alert-danger', $('form', $("#editdtitModal"))).hide(); 
		        	$(".msg",$('form', $("#editdtitModal"))).text("");
					dtitgrid.submitFilter();
				});
				return false;
			});
			
			$("#btn_save_dtit").click(function(){		//保存按钮
				$('form', $("#editdtitModal")).submit();
			});
			
			//赋值DIV
			var acctValid = Sunline.getValidate($('form', $("#editdtitModal")),
					function() {
						var data = {};
						$.each($("input", $("#editdtitModal")), function(i, n) {
							if (n.name != undefined&&n.name!=""&&n.name!=null) {
								data[n.name] = n.value;
							}
						});
						Sunline.ajaxRouter("loan/eddtit", 
							data
						, 'post', function(ret) {
	                          if(ret.ret==="success"){              
	                        	   $(".alert-success",$('form', $("#editdtitModal"))).show();
	                        	   $('.alert-danger', $('form', $("#editdtitModal"))).hide(); 		   
	                          }else{                        	 
			                   	   $(".alert-success",$('form', $("#editdtitModal"))).hide();
			                   	   $('.alert-danger', $('form', $("#editdtitModal"))).show();                        	  
	                          }
	                          $(".msg",$('form', $("#editdtitModal"))).text(ret.msg);
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