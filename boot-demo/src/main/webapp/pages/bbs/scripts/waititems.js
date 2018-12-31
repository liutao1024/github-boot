/*function onRead(subjid){
		alert(subjid);
	}*/
var kupperm = function() {

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
	var content = $('#edit_load');//配置权限子页面
	var content1 = $('#edit_load1');//配置权限子页面
	var content2 = $('#edit_load2');
	
	
	
	var handleTable = function() {
		
		var typegrid = new Datatable();
 		var typeurl = Sunline.ajaxPath("bbs/qrwait"); // URL???
		var typesendData = [ "subjid"]; // 主键

		typegrid
				.init({
					src : $("#datatable_type"),
					deleteData : typesendData,
					onSuccess : function(typegrid) {
						
					},
					onError : function(typegrid) {
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
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										//return "<button type='button' class='btn blue' onclick='onRead("+data+")''>标记已读</button>";
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.subjid+ "'>改变状态 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_setting' href='javascript:;' data-src='"
												+ data.subjid+","+data.subjtp+"'>查看内容 </a>";
									}
								},
								 ]
					}
				});
		
		//修改处理状态
		typegrid.addBindEvent(".edit",'click',["subjid"],function(data){
		  	var input = {};
		  	input.subjid = data.subjid;
		  	$("#btn_send").attr("disabled",false);
		  	$("#message").modal('show');
		  	
		  	$('#btn_send').on('click',function(){
		  		$("#btn_send").attr("disabled",true);
		  		
		  		
		  		Sunline.ajaxRouter("bbs/edsubj", input, 'post',
						function(ret) {
		  			

				  	$("#message").modal('hide');
				   	typegrid.submitFilter();
					if (ret.ret === "success") {
						bootbox.alert("待办事项已处理完成");
						//$("#BBSw").text(m+"条未查看通知");
						//$("#BBSd").text(n+"未处理事项");
						handBSB();
					} else {
						bootbox.alert(ret.msg);
					}
					
			});
		  		
			});	
			
		  	

		  	/*if(confirm("是否确认删除"))
		  		submit_function();
		  		else
		  		{return false;}*/
		  	  	
		    
	});
		//查询明细内容
		typegrid.addBindEvent(".edit_setting",'click',["subjid","subjtp"],function(data){
		    content1.html('');
		    if(data.subjtp == 1){
		    	var flag ="quenew";
		    	}
		    else if(data.subjtp == 2){
		    	var flag="qudetail"
		    }
		  	    
	        $.ajax({
	            type: "GET",
	            url: "../bbs/"+flag,
	            dataType: "html",
	            success: function(res) 
	            {    
	                content1.html(res);
	                content1.ready(function(){               	
	                	
	                	if(flag =='quenew'){
	                		quenew.init(data.subjid);
	                	}else if(flag == 'qudetail'){
	                		qudetail.init(data.subjid);
	                	}
	                });   
	            },
	            error: function(xhr, ajaxOptions, thrownError)
	            {
	            },
	            async: false
	        });
	        $("#bianji1").modal('show');
	});
		
	
		
		
		// 发布待办事项
		$("#add_type_btn").bind(
				"click",
				function() {
			    
				        $.ajax({
				            type: "GET",
				            url: "../bbs/senditems",
				            dataType: "html",
				            success: function(res) 
				            {    
				                content.html(res);
				                          
				            },
				            error: function(xhr, ajaxOptions, thrownError)
				            {
				            },
				            async: false
				        });
				        $("#bianji").modal('show');
			
				});
		$("#add_send_btn").click(function() { 
			 $.ajax({
		            type: "GET",
		            url: "../bbs/enddeal",
		            dataType: "html",
		            success: function(res) 
		            {    
		                content2.html(res);
		                          
		            },
		            error: function(xhr, ajaxOptions, thrownError)
		            {
		            },
		            async: false
		        });
		        $("#endhtml").modal('show');
		});
		
		$('#bianji').on('hide.bs.modal',function(){
			typegrid.submitFilter();
		});
		
		

		
		
	};

	return {
		init : function() {
			handleTable();
		}
	
	}

}();