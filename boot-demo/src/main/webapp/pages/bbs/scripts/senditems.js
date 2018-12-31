var senditems = function() {

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
	
	console.log(roleDict);
	
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
	 var content = $('#send_load');//配置权限子页面
	 var content1 = $('#esend_load');
	 
	var handleTable = function() {
		//$("#add_mingxi_btn1").hide();
		var typegrid1 = new Datatable();
 		var typeurl1 = Sunline.ajaxPath("bbs/qrwais"); // URL???
		var typesendData = ["subjid","subjtp"]; // 主键
		
		typegrid1.init({
					src : $("#datatable_bbs"),
					deleteData : typesendData,
					onSuccess : function(typegrid1) {
					},
					onError : function(typegrid1) {
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
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.subjid+ "'>编辑事项 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit_detail' href='javascript:;' data-src='"
												+ data.subjid+","+data.subjtp+"'>发送 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.subjid+","+data.subjtp+ "'>删除 </a>";
									}
								} ] ,
													}
				});
		
		typegrid1.bindTableDelete(typesendData); // 绑定数据删除？？？？
	//发送明细
		typegrid1.addBindEvent(".edit_detail",'click',["subjid","subjtp",],function(data){
		    content.html('');
		
		    if(data.subjtp == 1){
		    	var flag ="addnew";
		    	}
		    else{
		    	var flag="addetail"
		    }
		    //if(flag ==addnew )
		   // console.log("id:"+data.subjid+"  tp:"+data.subjtp); 
		   
	        $.ajax({
	            type: "GET",
	            url: "../bbs/"+flag,
	            dataType: "html",
	            success: function(res) 
	            {    
	                content.html(res);
	                
	                content.ready(function(){               	
	                	if(flag =='addnew'){
	                		addnew.init(data.subjid);
	                	}else if(flag == 'addetail'){
	                		addetail.init(data.subjid,data.recvid);
	                	}
	                	
	                });;             
	            },
	            error: function(xhr, ajaxOptions, thrownError)
	            {
	            },
	            async: false
	        });
	        $("#quanxian").modal('show');
		 
		  
	});
		typegrid1.bindTableEdit(typesendData,
				function(nRowA) {
				 	// 主键不可修改
			    $("input[name='subjid']",$("#sendtypeModal")).attr("readOnly",true);
			    $("input[name='recvid']",$("#sendtypeModal")).attr("readOnly",true);
			    $("input[name='recvrl']",$("#sendtypeModal")).attr("readOnly",true);
			    //$("input[name='crcycd']",$("#sendtypeModal")).attr("readOnly",true);
			    $("#sub").show();
			    $("input[name='inseno']",$("#sendtypeModal")).attr("hidden",true);
				$("input[name='subjid']",$("#sendtypeModal")).val($(nRowA[0]).text());
				$("input[name='subjtp']",$("#sendtypeModal")).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change");
				$("input[name='recvrl']",$("#sendtypeModal")).val($(nRowA[5]).text().substring($(nRowA[5]).text().indexOf("[")+1,$(nRowA[5]).text().indexOf("]"))).trigger("change"); 
				$("input[name='efctdt']",$("#sendtypeModal")).val($(nRowA[6]).text()); 
				$("input[name='subjna']",$("#sendtypeModal")).val($(nRowA[1]).text()); 
				//$("input[name='contnt']",$("#sendtypeModal")).val($(nRowA[3]).text());
				$("input[name='emrgfg']",$("#sendtypeModal")).val($(nRowA[3]).text().substring($(nRowA[3]).text().indexOf("[")+1,$(nRowA[3]).text().indexOf("]"))).trigger("change");
				$("input[name='inefdt']",$("#sendtypeModal")).val($(nRowA[7]).text()); 
				$("input[name='recvid']",$("#sendtypeModal")).val($(nRowA[4]).text());
				$("input[name='inseno']").val("0");
					$("#sendtypeModal").modal('show');
					$("#sendtypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#sendtypeModal"))).hide();
								$('.alert-danger',
										$('form', $("#sendtypeModal"))).hide();
								$(".msg", $('form', $("#sendtypeModal"))).text(
										"");
								typegrid1.submitFilter();
							});
				});

    //新增待办事项
		$("#add_mingxi_btn1").bind(
				"click",
				function() {
			    
				     
				       // $("#bianji").modal('show');
					    /*$("input[name='syscod']",$("#sendtypeModal")).attr("readOnly",true);
					    $("input[name='permtp']",$("#sendtypeModal")).attr("readOnly",true);
					    $("input[name='crcycd']",$("#sendtypeModal")).attr("readOnly",true);
						*/
					// 清空 input值
					$("input", $("#sendtypeModal")).val("").trigger("change");
					$("input[name='subjid']",$("#sendtypeModal")).attr("readOnly",true);
					$("input[name='recvid']",$("#sendtypeModal")).attr("readOnly",true);
					$("input[name='recvrl']",$("#sendtypeModal")).attr("readOnly",true);
					$("#sub").hide();
				     
					$("input[name='subjtp']",$("#sendtypeModal")).val('').trigger("change"); 
					$("input[name='procst']",$("#sendtypeModal")).val('').trigger("change");
				
					$("input[name='emrgfg']",$("#sendtypeModal")).val('').trigger("change");
					$("input[name='readfg']",$("#sendtypeModal")).val('').trigger("change");
					$("input[name='inseno']").val("1");
					
					// 解除input readOnly属性
										
					$("#sendtypeModal").modal('show');
					$("#sendtypeModal").on(
							"hide.bs.modal",
							function() {
								$(".alert-success",
										$('form', $("#sendtypeModal"))).hide();
								$('.alert-danger',
										$('form', $("#sendtypeModal"))).hide();
								$(".msg", $('form', $("#sendtypeModal"))).text(
										"");
								typegrid1.submitFilter();
							});
					return false;
				});
		$("#btn_save_type1").click(function() { // 保存按钮
			$('form', $("#sendtypeModal")).submit();
			grid.submitFilter();
		});
		
		
		$("#sendtypeModal").click(function(){
	   	    $(".select-close").select2("close");
	    });
		
		$("#end_send_btn").click(function() { 
			 $.ajax({
		            type: "GET",
		            url: "../bbs/endsend",
		            dataType: "html",
		            success: function(res) 
		            {    
		                content1.html(res);
		                          
		            },
		            error: function(xhr, ajaxOptions, thrownError)
		            {
		            },
		            async: false
		        });
		        $("#endsend").modal('show');
		});
		// 赋值DIV
		var typeValid = Sunline.getValidate($('form', $("#sendtypeModal")),
				function() {
					var data = {};
					$.each($("input", $("#sendtypeModal")), function(i, n) {
						if (n.name != undefined && n.name != ""
								&& n.name != null) {
							data[n.name] = n.value;
						}
					});
					Sunline.ajaxRouter("bbs/adwait", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#sendtypeModal")))
											.show();
									$('.alert-danger',
											$('form', $("#sendtypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#sendtypeModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#sendtypeModal")))
											.show();
								}
								$(".msg", $('form', $("#sendtypeModal"))).text(
										ret.msg);
							});

				}
				);
		$('#quanxian').on('hide.bs.modal',function(){
			typegrid1.submitFilter();
		});
		
		
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