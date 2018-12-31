var plcheck = function() {
	var dict={
			statusDict:Sunline.getDict("E_ZUOYZXZT"),//证件类型
	}
	$("input[name='status']").select2({
		data : dict.statusDict,
		allowClear : true
	});
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
	var plcheck_datatable = new Datatable();
	var init_plcheck_datatable_flag = false;
	var plcheck_form = $("#plcheck_form");
	var plcheck_table =  $("#plcheck_table");
	var plcheck_url = Sunline.ajaxPath("task/plchek");

	var handlerOperator = function(){
		//清空
		$("button[name='cancle']",plcheck_form).click(function(){
			$("input", plcheck_form).val("").trigger('change');
		});

		//sump_query查询
		$("button[name='submit']",plcheck_form).click(function(){
			if(!Sunline.isNull($("#jiayma").val())&&!jiyimaValid()){
				return;
			}
			if(!timeValid()){
				return;
			}
			$.each($("input", plcheck_form), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					plcheck_datatable.setAjaxParam(n.name,n.value);
				}
			});
			plcheck_datatable.submitFilter();
		});
	}

	//初始化plcheck_datatable
	var init_plcheck_datatable = function(){
		
		if(!timeValid()){
			return;
		}
		$.each($("input", plcheck_form), function(i, n) {
			if (n.name != undefined&&n.name!=""&&n.name!=null) {
				plcheck_datatable.setAjaxParam(n.name,n.value);
			}
		});
		if(!init_plcheck_datatable_flag){
			//第一次初始化datatable
			plcheck_datatable.init({
				src : plcheck_table,
				onSuccess : function(plcheck_datatable) {
				},
				onError : function(plcheck_datatable) {
				},
				dataTable : {
					"ajax" : {
						"url" : plcheck_url,
					},
					"columns" : [
					             {
					            	 "data" : "jyzbsh",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "ljybss",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "jyzwmc",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "ksshij",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "jsshij",
					            	 "sortable" : false,
					            	 "searchable" : false
					             },
					             {
					            	 "data" : "jyzuhs",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             },
					             {
					            	 "data" : "oyzxzt",
					            	 "sortable" : false,
					            	 "searchable" : false,
					            	 "render" : function(data, type, full){
					            		 for (var i = 0; i < dict.statusDict.length; i++) {
												if (dict.statusDict[i].id == data) {
													return dict.statusDict[i].text;
												}
											}
					            	 }
					             },
					             {
					            	 "data" : "owxinx",
					            	 "sortable" : false,
					            	 "searchable" : false,
					             }]
				}
			});
			init_plcheck_datatable_flag = true;
		}else{
			plcheck_datatable.submitFilter();
		}
	};
	var jiyimaValid = function(){//日期校验
		var reg = /^(?:[0-9a-zA-Z]{4,6},)*[0-9a-zA-Z]{4,6}$/;
        // 如果验证失败给出警告
        if(!reg.test($("#jiayma").val())){
        	
        	bootbox.alert({
        		message: "<div class='comfirm'><p>输入格式：<span>六位英文字母+英文逗号{,}其他字符和格式无效    例：xxxxx,xxxxx,...</span></p></div>",
                title: "请核对输入内容格式是否无误",
                callback: function() {  
                	$("#jiayma").val(""); 
                }
        	});
        	return false;
        }
        return true;
    }
	var timeValid = function(){//日期校验
        var start = $("#stdate").val();
        var end = $("#eddate").val();
        if(start!=""&&end!=""){
        	if(start>end){//日期判断
        		bootbox.alert("起始日期不能大于结束日期");
        		return false;
        	}
        }
        return true;
    }
	
	//初始化表单
	var handleTable = function() {
		init_plcheck_datatable();
	};
	return {
		init : function() {
			handleTable();
			handlerOperator();
		}
	}
}();