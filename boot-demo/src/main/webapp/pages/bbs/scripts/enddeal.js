
var enddeal = function() {

	/**
	 * 枚举类型调取
	 */
	var emrgfgDict = Sunline.getDict("E_EMRGFG"); // 紧急标志
	var procstDict = Sunline.getDict("E_PROCST"); // 处理状态
	var subjtpDict = Sunline.getDict("E_SUBJTP"); // 主题类型
	
	var readfgDict = Sunline.getDict("E_YES___"); // 是否已读标志
	
       $("input[name='subjtp']").select2({        // 主题类型
		data : subjtpDict,
		allowClear : true
	});          
       $("input[name='q_subjtp']").select2({        // 主题类型
   		data : subjtpDict,
   		allowClear : true,
   		placeholder : "请选择"
   	});  
	
       $("input[name='readfg']").select2({        // 是否已读标志
   		data : readfgDict,
   		allowClear : true
   	});
	
	$("input[name='emrgfg']").select2({            // 紧急标志
		data : emrgfgDict,
		allowClear : true
	});
	 $("input[name='q_emrgfg']").select2({        // 主题类型
	   		data : emrgfgDict,
	   		allowClear : true,
	   		placeholder : "请选择"
	   	})
	
	$("input[name='procst']").select2({            // 处理状态
		data : procstDict,
		allowClear : true
	});
	var content = $('#deal_load');//配置权限子页面
	
	
	
	
	var handleTable = function() {
		
		var endgrid = new Datatable();
 		var typeurl = Sunline.ajaxPath("bbs/qrproc"); // URL???
		var typesendData = [ "subjid"]; // 主键

		endgrid
				.init({
					src : $("#datatable_end"),
					deleteData : typesendData,
					onSuccess : function(endgrid) {
					},
					onError : function(endgrid) {
					},
					
					dataTable : {
						"ajax" : {
							"url" : typeurl,
						},
						"columns" : [
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
									"data" : "relsna", // 发布人名称
									"sortable" : false,
									"searchable" : false
								},
								
								
								
								{
									"data" : "inefdt", // 失效日期
									"sortable" : false,
									"searchable" : false
								},
								
								/*{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_end' href='javascript:;' data-src='"
												+ data.subjid+","+data.subjtp+"'>查看内容 </a>";
									}
								},*/
								 ]
					}
				});
		
		/*//查询明细内容
		endgrid.addBindEvent(".edit_end",'click',["subjid","subjtp"],function(data){
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
	        $("#dealhtml").modal('show');
	});
		*/
		
	};

	return {
		init : function() {
			handleTable();
		}
	
	}

}();