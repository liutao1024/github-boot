var lnflend = function() {

	/**
	 * 枚举类型调取
	 */
	var crcycdDict = Sunline.getDict("crcycd"); // 币种
	var lendmdDict = Sunline.getDict("E_LENDMD"); // 放款类型
	var isauldDict = Sunline.getDict("E_ISAULD"); // 自动放款标志
	var autotgDict = Sunline.getDict("E_AUTOTG"); // 自动放款借据管理模式
	var isperiDict = Sunline.getDict("E_ISPERI"); // 周期性放款标志
	var lendtpDict = Sunline.getDict("E_LENDTP"); // 放款方式
	var fundsrDict = Sunline.getDict("E_FUNDSR"); // 放款资金来源类型
	var fundmdDict = Sunline.getDict("E_FUNDMD"); // 放款资金处理方式
	var isexcsDict = Sunline.getDict("E_ISEXCS"); // 是否允许超额放款
	var rocndnDict = Sunline.getDict("E_ROCNDN"); // 借新还旧原贷款控制
	var rorpfgDict = Sunline.getDict("E_RORPFG"); // 借新还旧还款控制
	var isspecDict = Sunline.getDict("E_ISSPEC"); // 允许特殊放款标志
	var isnmldDict = Sunline.getDict("E_ISNMLD"); // 允许对行内非同名账户放款
	var isotldDict = Sunline.getDict("E_ISOTLD"); // 允许对行外账户放款
	var isinldDict = Sunline.getDict("E_ISINLD"); // 允许对内部账户放款

	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='lendmd']").select2({
		data : lendmdDict,
		allowClear : true
	});
	$("input[name='isauld']").select2({
		data : isauldDict,
		allowClear : true
	});
	$("input[name='autotg']").select2({
		data : autotgDict,
		allowClear : true
	});
	$("input[name='isperi']").select2({
		data : isperiDict,
		allowClear : true
	});
	$("input[name='lendtp']").select2({
		data : lendtpDict,
		allowClear : true
	});
	$("input[name='fundsr']").select2({
		data : fundsrDict,
		allowClear : true
	});
	$("input[name='fundmd']").select2({
		data : fundmdDict,
		allowClear : true
	});
	$("input[name='isexcs']").select2({
		data : isexcsDict,
		allowClear : true
	});
	$("input[name='rocndn']").select2({
		data : rocndnDict,
		allowClear : true
	});
	$("input[name='rorpfg']").select2({
		data : rorpfgDict,
		allowClear : true
	});
	$("input[name='isspec']").select2({
		data : isspecDict,
		allowClear : true
	});
	$("input[name='isnmld']").select2({
		data : isnmldDict,
		allowClear : true
	});
	$("input[name='isotld']").select2({
		data : isotldDict,
		allowClear : true
	});
	$("input[name='isinld']").select2({
		data : isinldDict,
		allowClear : true
	});
	var handleTable = function(prodcd) {
		var lendgrid = new Datatable();
		var lendurl = Sunline.ajaxPath("loan/qrlend"); // URL???
		var lendsendData = [ "prodcd" ,"crcycd"]; // 主键
		if (!Sunline.isNull(prodcd)) {
			lendgrid.setAjaxParam("q_prodcd", prodcd);
		}
		lendgrid
				.init({
					src : $("#datatable_lend"),
					deleteData : lendsendData,
					onSuccess : function(lendgrid) {
					},
					onError : function(lendgrid) {
					},
					
					dataTable : {
						"ajax" : {
							"url" : lendurl,
						},
						"columns" : [
								{
									"data" : "prodcd", // 产品代码
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "crcycd", // 币种
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
									"data" : "mxtlam", // 最大放款金额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mntlam", // 最小放款金额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mxterm", // 最长贷款期限
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mnterm", // 最短贷款期限
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mxtmes", // 最大放款次数
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mxotam", // 每次最大金额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mnotam", // 每次最小金额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "vadays", // 放款有效期限（天）
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mninva", // 放款最小间隔
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "mxinva", // 放款最大间隔
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "lendmd",// 放款类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < lendmdDict.length; i++) {
											if (lendmdDict[i].id == data) {
												return lendmdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isauld", // 自动放款标志
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isauldDict.length; i++) {
											if (isauldDict[i].id == data) {
												return isauldDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "autotg", // 自动放款借据管理模式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < autotgDict.length; i++) {
											if (autotgDict[i].id == data) {
												return autotgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isperi", // 周期性放款标志
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isperiDict.length; i++) {
											if (isperiDict[i].id == data) {
												return isperiDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "perifm", // 放款周期
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "lendtp", // 放款方式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < lendtpDict.length; i++) {
											if (lendtpDict[i].id == data) {
												return lendtpDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "lendvl", // 每次放款金额或比例
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "fundsr", // 放款资金来源类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < fundsrDict.length; i++) {
											if (fundsrDict[i].id == data) {
												return fundsrDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "fundmd", // 放款资金处理方式
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < fundmdDict.length; i++) {
											if (fundmdDict[i].id == data) {
												return fundmdDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isexcs", // 是否允许超额放款
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isexcsDict.length; i++) {
											if (isexcsDict[i].id == data) {
												return isexcsDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "excspt", // 超额放款比例
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "rocndn", // 借新还旧原贷款控制
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < rocndnDict.length; i++) {
											if (rocndnDict[i].id == data) {
												return rocndnDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "rorpfg", // 借新还旧还款控制
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < rorpfgDict.length; i++) {
											if (rorpfgDict[i].id == data) {
												return rorpfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isspec", // 允许特殊放款标志
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isspecDict.length; i++) {
											if (isspecDict[i].id == data) {
												return isspecDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isnmld", // 允许对行内非同名账户放款
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isnmldDict.length; i++) {
											if (isnmldDict[i].id == data) {
												return isnmldDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isotld", // 允许对行外账户放款
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isotldDict.length; i++) {
											if (isotldDict[i].id == data) {
												return isotldDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "isinld", // 允许对内部账户放款
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < isinldDict.length; i++) {
											if (isinldDict[i].id == data) {
												return isinldDict[i].text;
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
		lendgrid.bindTableDelete(lendsendData); // 绑定数据删除？？？？
		
		lendgrid.bindTableEdit(lendsendData,function(nRowA){
			//主键不可修改
		  $("input[name='crcycd']", $("#editlendModal")).attr("readOnly",true);		
		  //给input框赋值
		  //基本类型
		  $("input[name='prodcd']", $("#editlendModal")).val($(nRowA[0]).text());
		  //枚举类型
		  $("input[name='crcycd']", $("#editlendModal")).val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
		  //最大放款金额
		  $("input[name='mxtlam']", $("#editlendModal")).val($(nRowA[2]).text());
		  //最小放款金额
		  $("input[name='mntlam']", $("#editlendModal")).val($(nRowA[3]).text());
		  //最长贷款期限
		  $("input[name='mxterm']", $("#editlendModal")).val($(nRowA[4]).text());
		  //最短贷款期限
		  $("input[name='mnterm']", $("#editlendModal")).val($(nRowA[5]).text());
		  //最大放款次数
		  $("input[name='mxtmes']", $("#editlendModal")).val($(nRowA[6]).text());
		  //每次最大金额
		  $("input[name='mxotam']", $("#editlendModal")).val($(nRowA[7]).text());
		  //每次最小金额
		  $("input[name='mnotam']", $("#editlendModal")).val($(nRowA[8]).text());
		  //放款有效期限（天）
		  $("input[name='vadays']", $("#editlendModal")).val($(nRowA[9]).text());
		  //放款最小间隔
		  $("input[name='mninva']", $("#editlendModal")).val($(nRowA[10]).text());
		  //放款最大间隔
		  $("input[name='mxinva']", $("#editlendModal")).val($(nRowA[11]).text());
		  //放款类型
		  $("input[name='lendmd']", $("#editlendModal")).val($(nRowA[12]).text().substring($(nRowA[12]).text().indexOf("[")+1,$(nRowA[12]).text().indexOf("]"))).trigger("change");
		  //自动放款标志
		  $("input[name='isauld']", $("#editlendModal")).val($(nRowA[13]).text().substring($(nRowA[13]).text().indexOf("[")+1,$(nRowA[13]).text().indexOf("]"))).trigger("change");
		  //自动放款借据管理模式
		  $("input[name='autotg']", $("#editlendModal")).val($(nRowA[14]).text().substring($(nRowA[14]).text().indexOf("[")+1,$(nRowA[14]).text().indexOf("]"))).trigger("change");
		  //周期性放款标志
		  $("input[name='isperi']", $("#editlendModal")).val($(nRowA[15]).text().substring($(nRowA[15]).text().indexOf("[")+1,$(nRowA[15]).text().indexOf("]"))).trigger("change");
		  //放款周期
		  $("input[name='perifm']", $("#editlendModal")).val($(nRowA[16]).text());
		  //放款方式
		  $("input[name='lendtp']", $("#editlendModal")).val($(nRowA[17]).text().substring($(nRowA[17]).text().indexOf("[")+1,$(nRowA[17]).text().indexOf("]"))).trigger("change");
		  //每次放款金额或比例
		  $("input[name='lendvl']", $("#editlendModal")).val($(nRowA[18]).text());
		//放款资金来源类型
		  $("input[name='fundsr']", $("#editlendModal")).val($(nRowA[19]).text().substring($(nRowA[19]).text().indexOf("[")+1,$(nRowA[19]).text().indexOf("]"))).trigger("change");
		//放款资金处理方式
		  $("input[name='fundmd']", $("#editlendModal")).val($(nRowA[20]).text().substring($(nRowA[20]).text().indexOf("[")+1,$(nRowA[20]).text().indexOf("]"))).trigger("change");
		//是否允许超额放款
		  $("input[name='isexcs']", $("#editlendModal")).val($(nRowA[21]).text().substring($(nRowA[21]).text().indexOf("[")+1,$(nRowA[21]).text().indexOf("]"))).trigger("change");
		  //超额放款比例
		  $("input[name='excspt']", $("#editlendModal")).val($(nRowA[22]).text());
		//借新还旧原贷款控制
		  $("input[name='rocndn']", $("#editlendModal")).val($(nRowA[23]).text().substring($(nRowA[23]).text().indexOf("[")+1,$(nRowA[23]).text().indexOf("]"))).trigger("change");
		//借新还旧还款控制
		  $("input[name='rorpfg']", $("#editlendModal")).val($(nRowA[24]).text().substring($(nRowA[24]).text().indexOf("[")+1,$(nRowA[24]).text().indexOf("]"))).trigger("change");
		//允许特殊放款标志
		  $("input[name='isspec']", $("#editlendModal")).val($(nRowA[25]).text().substring($(nRowA[25]).text().indexOf("[")+1,$(nRowA[25]).text().indexOf("]"))).trigger("change");
		//允许对行内非同名账户放款
		  $("input[name='isnmld']", $("#editlendModal")).val($(nRowA[26]).text().substring($(nRowA[26]).text().indexOf("[")+1,$(nRowA[26]).text().indexOf("]"))).trigger("change");
		//允许对行外账户放款
		  $("input[name='isotld']", $("#editlendModal")).val($(nRowA[27]).text().substring($(nRowA[27]).text().indexOf("[")+1,$(nRowA[27]).text().indexOf("]"))).trigger("change");
		//允许对内部账户放款
		  $("input[name='isinld']", $("#editlendModal")).val($(nRowA[28]).text().substring($(nRowA[28]).text().indexOf("[")+1,$(nRowA[28]).text().indexOf("]"))).trigger("change");
		  $("#editlendModal").modal('show');
		  $("#editlendModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editlendModal"))).hide();
				$('.alert-danger', $('form', $("#editlendModal"))).hide();
				$(".msg", $('form', $("#editlendModal"))).text("");
				lendgrid.submitFilter();
			});
		});
		
		$("#editlendModal").click(function(){
		   	  $(".select-close").select2("close");
		     });
		
		// 新增窗口
		$("#add_lend_btn").bind("click", function() {
			//解除input  readOnly属性
			$("input[name='crcycd']", $("#editlendModal")).attr("readOnly",false);
			//清空 input值
			$("input", $("#editlendModal")).val("").trigger("change");
			$("input[name='prodcd']", $("#editlendModal")).val(prodcd);
			$("#editlendModal").modal('show');
			$("#editlendModal").on("hide.bs.modal", function() {
				$(".alert-success", $('form', $("#editlendModal"))).hide();
				$('.alert-danger', $('form', $("#editlendModal"))).hide();
				$(".msg", $('form', $("#editlendModal"))).text("");
				lendgrid.submitFilter();
			});
			return false;
		});

		$("#btn_save_lend").click(function() { // 保存按钮
			$('form', $("#editlendModal")).submit();
		});

		// 赋值DIV
		var lendValid = Sunline.getValidate($('form', $("#editlendModal")),
				function() {
					var data = {};
					$.each($("input", $("#editlendModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("loan/edlend", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#editlendModal")))
											.show();
									$('.alert-danger',
											$('form', $("#editlendModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#editlendModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#editlendModal")))
											.show();
								}
								$(".msg", $('form', $("#editlendModal"))).text(
										ret.msg);
							});

				}, { // 字段规则
					prodcd : {
						required : true,
						maxlength : 10
					}, // 产品代码(必填，最大长度10)
					crcycd : {
						required : true
					}, // 货币代号必选
					mxtlam : {
						number : true,
						maxlength : 17
					}, // 最大放款金额(正确数字，最大长度17)
					mntlam : {
						number : true,
						maxlength : 17
					}, // 最小放款金额
					mxterm : {
						maxlength : 10
					}, // 最长贷款期限
					mnterm : {
						maxlength : 10
					}, // 最短贷款期限
					mxtmes : {
						maxlength : 19
					}, // 最大放款次数
					mxotam : {
						number : true,
						maxlength : 17
					}, // 每次最大金额
					mnotam : {
						number : true,
						maxlength : 17
					}, // 每次最小金额
					vadays : {
						maxlength : 19
					}, // 放款有效期限（天）
					mninva : {
						maxlength : 19
					}, // 放款最小间隔
					mxinva : {
						maxlength : 19
					}, // 放款最大间隔
					perifm : {
						maxlength : 8
					}, // 放款周期
					lendvl : {
						number : true,
						maxlength : 17
					}, // 每次放款金额或比例
					excspt : {
						number : true,
						maxlength : 12
					}, // 超额放款比例
				});

	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}

}();