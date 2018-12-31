var Prod=function(){
    var prodTree;//树对象
	var prodTT;//树父对象由分类获得
	var busiClasses=[];//业务分类数组
	//初始化左侧树 
	var handleTree =function(){
		 var grid = new Datatable();
		 var sendData = ["prod_cd"];
		  grid.init({
	            src: "#datatable_ajax",
	            deleteData: sendData,
	            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	                "bRetrieve": false,
	                "destroy": true, 
	                "columns" : [
	                    { 
	                		"data": "prod_cd",
	                		"sortable": false,
	                		"searchable": false
	                	},{ 
	                		"data": "last_ver",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "abstract_cd",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "prod_name",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "merchant_cd",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": null,
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            		return "<a class='edit_setting' href='javascript:;' data-src='" + data.prod_cd+","+data.last_ver + "'>配置产品 </a>";
			            	}		            	
			            },{ 
			            	"data": "prod_status",
			            	"sortable": false,
			            	"searchable": false
			            },{
			            	"data": null,
			            	"width": "10%",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            		return "<a class='edit' href='javascript:;' data-src='" + data.prod_cd + "'>编辑 </a>";
			            	}
			            },{ 
			            	"data": null,
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            		return "<a class='delete' href='javascript:;' data-src='" + data.prod_cd + "'>删除 </a>";
			            	}
			            }
		            ]
	            }
	        });
		 $(".table-group-actions").empty();
	     $(".table-group-actions").append( //新增按钮，摧毁datatable会使新增按钮丢失，在此追加 
	        		"<span></span>"+
					"<button id='add_btn' class='btn btn-sm green table-group-action-submit'>新增</button>" ); 
		 
		//绑定选择节点事件   	
		var onSelectedNode = function(e,data){
			var urlstr = '/services/rest/prod/prodClassCd'+data.selected[0];//class_cd
			console.info(urlstr); 
			var url = Sunline.ajaxPath(urlstr);
			  grid.init({
		            src: "#datatable_ajax",
		            deleteData: sendData,
		            onSuccess: function (grid) {
		                // execute some code after table records loaded
		            },
		            onError: function (grid) {
		                // execute some code on network or other general error  
		            },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
		                "ajax": {
		                    "url": url, // ajax source
		                },
		                "bRetrieve": false,
		                "destroy": true, 
		                "columns" : [
		                    { 
		                		"data": "prod_cd",
		                		"sortable": false,
		                		"searchable": false
		                	},{ 
		                		"data": "last_ver",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "abstract_cd",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "prod_name",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "merchant_cd",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='edit_setting' href='javascript:;' data-src='" + data.prod_cd+","+data.last_ver + "'>配置产品 </a>";
				            	}		            	
				            },{ 
				            	"data": "prod_status",
				            	"sortable": false,
				            	"searchable": false
				            },{
				            	"data": null,
				            	"width": "10%",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='edit' href='javascript:;' data-src='" + data.prod_cd + "'>编辑 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" + data.prod_cd + "'>删除 </a>";
				            	}
				            }
			            ]
		            }
		        });
			  $(".table-group-actions").empty();
		       $(".table-group-actions").append( //新增按钮，摧毁datatable会使新增按钮丢失，在此追加
		        		"<span></span>"+ 
						"<button id='add_btn' class='btn btn-sm green table-group-action-submit'>新增</button>" );
		};  
			
		var classurl ="/services/rest/prod/busi"; 
    	//获取分类
    	Sunline.ajaxRouter(
    	   classurl,
			"",
			"get",
			function(jsondata){  
				//console.info(jsondata.data); 				
				var s="";
				busiClasses=[];//重置分类数组 
				$.each(jsondata.data, function(i, n){
					var busiclass={name:n.busi_name,cd:n.busi_cd};
					s += "<div id='busi_"+n.busi_cd+"' class='tree-demo'></div>";
					busiClasses.push(busiclass);
					
				});
				$("#class_tree").append(s);
			    $.each(busiClasses,function(i,n){
			    	//console.info(n);
			    	//classTree(n.cd);busi_cd 
			    	var tree=new Tree();
			    	tree.init(
			    		{	src: "#busi_"+n.cd,
						url: "/services/rest/prod/busi"+n.cd, 
						qrysrc: "#qryBranch",
						selectedEvent:onSelectedNode,
						menu:{
			            	"items":{
			            		"新增分类":{
			            			"label":"新增分类",
			            			"action":function (data) {
			            				//待修改
			    						var inst = $.jstree.reference(data.reference),
			    							obj = inst.get_node(data.reference);
			    						//console.info("obj:",obj); 
			    						var c_id = (obj.children.length+1)+"0";
			    						//$('#add_branch_cd').val(obj.id+c_id);
			    						$('#add_parent').val(obj.id);
			    						$("#myModal").modal('show');
			    						
			    					}
			            		}, 
			            		"删除分类":{
			            			"label":"删除分类",
			            			"action": function (data) {
			            				var confirmMessage = "确定删除该分类吗？";
			            				bootbox.confirm(confirmMessage, function(result) {
				    						if(result){
					    						var inst = $.jstree.reference(data.reference),
					    							obj = inst.get_node(data.reference);
					    						if(inst.is_selected(obj)) {
					    							inst.delete_node(inst.get_selected());
					    						}
					    						else {
					    							inst.delete_node(obj);
					    						}
				    						}else{
				    							return;
				    						}
			            				});
			    					}
			            		}
			            	}
			            }
					}); 	    	
			    });
        	},
        	function(b){
        		console.info("error ajax 通讯异常");
        		$(".note .note-danger .note-bordered").append("<h2>ajax 通讯异常</h2>"); 
        	},
        	"json",
        	true);
   	
		 //配置产品按钮触发事件 data 为  prod_cd，last_ver
		var counts;//
	    var sendProdData=["prod_cd","last_ver"];//需要多个值时data-src 用逗号隔开    
        grid.addBindEvent(".edit_setting","click",sendProdData, function(data){   
        	/*
        	 * 获取数据，new prodPropObj
        	 * 
        	 */
        	$(".nav-tabs").empty();
        	$(".tab-content").empty();
        	 counts=[];
        	//$("#setting_col1").empty();
        	//$("#setting_col0").empty();
        	//console.info(data.prod_cd,data.last_ver);
        	var url ="/services/rest/prod/prodpropExmple";//prod_cd="+data.prod_cd+"&ver="+data.last_ver
        	//获取产品配置
        	Sunline.ajaxRouter(
    			url,
    			"",
    			"get",
    			function(jsondata){
    				bindsettingXML(jsondata);//绑定直接处理json数据按钮    				
    				$.each(jsondata, function(i, n){
    					var obj=new ProdPropObj();//初始化属性对象
    					obj.init(i,n);
    				  //console.info(obj.getpropTitleHTML());
    					$(".nav-tabs").append(obj.getpropTitleHTML());
    					$(".tab-content").append(obj.getpropHTML());		
    				    counts.push(obj);
    					});
    				bindPlugins();			  
    		        //console.info(counts);
    				$(".nav-tabs li:first").addClass("active");
    				$(".tab-content div:first").addClass("active");
    				//console.info(counts[0].getpropTitleHTML());
	        	},
	        	function(b){
	        		$("#setting_col1").append("<h2>ajax 通讯异常</h2>"); 
	        	},
	        	"json",
	        	true);   	
        	//显示配置窗口        	
        	$("#edit_setting").modal("show");        	
        }); 
        grid.bindTableDelete(sendData);
      //编辑表单赋值方法--根据不同页面表格修改
        grid.bindTableEdit(sendData, function(nRowA){ 
           	$('#edit_prod_cd').val($(nRowA[0]).text());
           	$('#edit_last_ver').val($(nRowA[1]).text());
           	$('#edit_abstract_cd').val($(nRowA[2]).text());
           	$('#edit_prod_name').val($(nRowA[3]).text());
           	$('#edit_merchant_cd').val($(nRowA[4]).text());           	
        	$("#edit_prod").modal("show");
		});           
        /*
         * 新增产品
         */ 
        $("#add_btn").live("click",function(){      
        	$("#add_prod").modal("show");  	
        }); 
        /*
         * 保存编辑配置属性方法
         */
        $("#save_setting").bind("click",function(){
        	//console.info(counts);      	
        	$.each(counts,function(i,obj){	
        		obj.bindPropSave(this);
        		//sconsole.info(obj.getpropData());
        		//组装json
        	});
        	//发送ajax
        });			
	};	
	 
	  /*
     * 一些输入框的插件绑定
     */
 var bindPlugins=function(){
	 $("#period_unit").select2();
    };
   /*
    * 编写配置XML文件
    */
    var  bindsettingXML=function(data){ 
	    $("#settingXML_btn").click(function(){
	    	$("#edit_setting_XML").val(JSON.stringify(data));//浏览器支持问题
	    	$("#editsettingXML").modal("show");
	    });
    }
    /*
     * 替换 名称方法 可ajax从字典中取
     */
    var _replaceName =function (a){
    	switch(a){
    	case "period" : a="期限"; break;
    	case "rate" : a="利率"; break;
    	case "guar_cd" : a="担保方式"; break;
    	case "installment_cd" : a="还款方式"; break;
    	case "start_date" : a="起始日期"; break;
    	case "everytime_amt" : a="每次投资金额"; break;
    	case "value" : a="值";break;
    	case "min_amt" : a="最小金额";break;
    	case "max_amt" : a="最大金额";break; 
    	case "period_value" : a="期限值";break; 
    	case "period_unit" : a="期限单位";break; 
    	}
    	return a;
    }
    
    /*
     * 判断是否是数组方法
     */
    var _isArry  =  function (o) { 
      return Object.prototype.toString.call(o) === '[object Array]';   
    }  
    
    /*
     * 表单验证
     */
    var handleValidation = function() {
		//编辑表单验证开始
             var editform = $("#edit_form");
             var editerror = $('.alert-danger', editform);
             var editsuccess = $('.alert-success', editform);
             var validator=editform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则      
                	 edit_last_ver: {
  	                	required : false,
  	                	rangelength:[0,2],
  	                	number : true
  	                },
                	 edit_abstract_cd : 
 	                {
 	                	required : false,
 	                	rangelength:[2,19]
 	                },   
 	                edit_busi_cd: {
 	                	required : false,
 	                	rangelength:[2,19]               	
 	                }, 
 	                edit_class_cd: {
 	                	required : false,
 	                	rangelength:[2,19]               	
 	                },
 	                edit_prod_name : 
 	                {
 	                	required : false,
 	                	rangelength:[5,50]   	
 	                },
 	               edit_merchant_cd:
 	                {
 	                	required : false,
 	                 	rangelength:[2,19]              	
 	                },
 	            },

                 invalidHandler: function (event, validator) {              
                     editsuccess.hide();
                     editerror.show();
                     Metronic.scrollTo(editerror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },

                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },

                 unhighlight: function (element) { 
                     
                 },

                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 },
                 submitHandler: function (form) {
                     editsuccess.show();
                     editerror.hide();
                    // form[0].submit(); // submit the form
                 }
             });
             //编辑表单验证结束
             //新增表单验证开始
             var addform = $("#add_form");
             var adderror = $('.alert-danger', addform);
             var addsuccess = $('.alert-success', addform);
             var validator=addform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则
                  add_last_ver: {
   	                	required : false,
   	                	rangelength:[0,2],
   	                	number : true
   	                },
   	              add_abstract_cd : 
  	                {
  	                	required : false,
  	                	rangelength:[2,19]
  	                },   
  	              add_busi_cd: {
  	                	required : false,
  	                	rangelength:[2,19]               	
  	                }, 
  	              add_class_cd: {
  	                	required : false,
  	                	rangelength:[2,19]               	
  	                },
  	              add_prod_name : 
  	                {
  	                	required : false,
  	                	rangelength:[5,50]   	
  	                },
  	              add_merchant_cd:
  	                {
  	                	required : false,
  	                 	rangelength:[2,19]              	
  	                },
 	            },

                 invalidHandler: function (event, validator) {              
                     addsuccess.hide();
                     adderror.show();
                     Metronic.scrollTo(adderror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },

                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },

                 unhighlight: function (element) { 
                     
                 },

                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 },
                 submitHandler: function (form) {
                     addsuccess.show();
                     adderror.hide();
                    // form[0].submit(); // submit the form
                 }
             });
             //新增表单验证结束
             
             $("#btn_save").click(function(){
            	 validator.resetForm();
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	        	$('.alert-danger', $('#edit_form')).hide();
 	        });
 	        $("#editModal").on("hide.bs.modal",function(){
 	        	//alert("关闭");
 	        	validator.resetForm();
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	         	$('.alert-danger', $('#edit_form')).hide();        	
 	        });   
     };	
	
	return{
		init:function(){
			handleTree();
		//	handleTable();			
		}
		
		
	}
	
}();