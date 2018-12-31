var endsend = function() {

	/**
	 * 枚举类型调取
	 */
	var emrgfgDict = Sunline.getDict("E_EMRGFG"); // 紧急标志
	var procstDict = Sunline.getDict("E_PROCST"); // 处理状态
	var subjtpDict = Sunline.getDict("E_SUBJTP"); // 主题类型
	
	var readfgDict = Sunline.getDict("E_YES___"); // 是否已读标志
	var roleDict = [];
	Sunline.ajaxRouter("bbs/getRole", null, 'get',
			function(ret) {
			$.each(ret, function(i, n){
	             n.text=n['dictName']+"["+n['dictId']+"]";
	             n.id=n['dictId'];            
	             });
			console.log(ret);
			roleDict = ret;
			},null,null,false);
	
	//console.log(roleDict);
	
	$("input[name='recvrl']").select2({        // 接受角色
		data : roleDict,
		allowClear : true
	});      
	
       $("input[name='subjtp']").select2({        // 主题类型
		data : subjtpDict,
		allowClear : true
	});                                        
	
       $("input[name='readfg']").select2({        // 是否已读标志
   		data : readfgDict,
   		allowClear : true
   	});
	/*$("input[name='q_syscod']").select2({
		data : syscodDict,
		allowClear : true,
		placeholder : "请选择"
	});*/
	$("input[name='emrgfg']").select2({            // 紧急标志
		data : emrgfgDict,
		allowClear : true
	});
	
	/*$("input[name='q_permtp']").select2({
		data : permtpDict,
		allowClear : true,
		placeholder : "请选择"
	});*/	
	$("input[name='procst']").select2({            // 处理状态
		data : procstDict,
		allowClear : true
	});
	
	 var content = $('#send1_load');//配置权限子页面
	var handleTable = function() {
		//$("#add_mingxi_btn1").hide();
		var endgrid = new Datatable();
 		var typeurl1 = Sunline.ajaxPath("bbs/qrwais"); // URL???
		var typesendData = ["subjid","subjtp"]; // 主键
		endgrid.setAjaxParam("change","1");
		endgrid.init({
					src : $("#datatable_send"),
					deleteData : typesendData,
					onSuccess : function(endgrid) {
					},
					onError : function(endgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : typeurl1,
						},
						"columns" :[
								{
									"data" : "subjid", // 主题ID
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "subjna", // 主题名称
									"sortable" : false,
									"searchable" : false
								},
							
								{
									"data" : "subjtp",   //主题类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < subjtpDict.length; i++) {
											if (subjtpDict[i].id == data) {
												return subjtpDict[i].text;
											}
										}
										return data;
									}
								},
							
								/*{
									"data" : "contnt", // 内容描述
									"sortable" : false,
									"searchable" : false
								},*/
								
								{
									"data" : "emrgfg",    //紧急标注
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < emrgfgDict.length; i++) {
											if (emrgfgDict[i].id == data) {
												return emrgfgDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "recvid", // 接收柜员
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "recvrl", // 接受角色
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < roleDict.length; i++) {
											if (roleDict[i].id == data) {
												return roleDict[i].text;
											}
										}
										return data;
									}
								},
								{
									"data" : "efctdt", // 生效日期
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "inefdt", // 失效日期
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "procus", // 处理柜员
									"sortable" : false,
									"searchable" : false
								},
								/*{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_send' href='javascript:;' data-src='"
												+ data.subjid+","+data.subjtp+"'>查看内容 </a>";
									}
								},
								*/
							 ] ,
													}
				});
		
	/*	
		endgrid.addBindEvent(".edit_send",'click',["subjid","subjtp"],function(data){
		    content.html('');
		    if(data.subjtp == 1){
		    	var flag ="quenew";
		    	}
		    else{
		    	var flag="qudetail"
		    }
		  	    
	        $.ajax({
	            type: "GET",
	            url: "../bbs/"+flag,
	            dataType: "html",
	            success: function(res) 
	            {    
	                content.html(res);
	                content.ready(function(){               	
	                	
	                	if(flag =='quenew'){
	                		quenew.init(data.subjid);
	                	}else if(flag == 'qudetail'){
	                		qudetail.init(data.subjid);
	                	}
	                });;   
	            },
	            error: function(xhr, ajaxOptions, thrownError)
	            {
	            },
	            async: false
	        });
	        $("#ydetail").modal('show');
	});*/
		

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