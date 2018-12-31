var grid = new Datatable();
var totalAm = 0.00;//初始化总金额
var summoy = 0.00;
var weijsu = 0.00;
var yxfkjs = function(){
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	
	var handleForm = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
        };
        
        //初始化日期
        $('#taskdt').val(FormatDate());
        
        $("#ststat").select2({
        	data : [{id:'0',text:'未结算'},{id:'1',text:'已结算'}]
        });
        $("#ststat").select2("val","0");
        var url = Sunline.ajaxPath("ln/fkjsinfo");
		grid.init({
	        src: $("#yxfkjs_ajax"),
	        
	        onSuccess: function (grid) {
	        	summoy = grid.getDataTable().ajax.json().summoy;
	        	$("#allsum").text(summoy);
	        	
	        	weijsu = grid.getDataTable().ajax.json().weijsu;
	        	//console.log("weijs====="+weijsu)
	        	$("#unsumm").text(weijsu);
	        	
	        	var ststat = $('#ststat').select2("val");
	        	if(ststat == "0" && summoy > 0){
	        		$("#dealdiv").css("display","block");
	        		$('#deal').attr("disabled",false);
	        		
	        	}else{
	        		//$("#dealdiv").css("display","none");	 
	        		if(summoy > 0){
	        			//打开到账通知按钮
	         			$("#noticediv").css("display","block");
	         			$('#notice').attr("disabled",false);
	         			
	         			if(ststat == '1'){
		        			$("#keepdt").text($('#taskdt').val());
		        		}
	        		}	        		
	        		
	        	}
	        },
	        onError: function (grid) {
	        	$("#dealdiv").css("display","none");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url,
	            },
				"columns" : [
 				             {
							"data" : "custac",//电子账号
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "lncfno",//贷款借据号
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "loandt",//放款日期
							"sortable" : false,
							"searchable" : false
						}, 
						{
							"data" : "lenval",//放款金额
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "cldate",//结算日期
							"sortable" : false,
							"searchable" : false
						},
						/*{
							"data" : "tophno",//总期数
							"sortable" : false,
							"searchable" : false
						},*/ 
						{
							"data" : "clstat",//清算状态
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								var _clstat = "";
         	            		if(data == "1"){
         	            			_clstat = "未清算";
         	            		}else if(data == "2"){
         	            			_clstat = "已清算";
         	            		}
         	            		return _clstat;
							}
						}, {
							"data" : "ststat",//结算状态
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								var _ststat = "";
         	            		if(data == "0"){
         	            			_ststat = "未结算";
         	            		}else if(data == "1"){
         	            			_ststat = "已结算";
         	            		}
         	            		return _ststat;
							}
						},{
							"data" : "stdate",//结算日期
							"sortable" : false,
							"searchable" : false
						}
	            ]
	        }
	    });
		 // 查询按钮
        $('#submit').click(function(){
        	$("#noticediv").css("display","none");
        	grid.setAjaxParam("taskdt",$('#taskdt').val());//结算日期
         	grid.setAjaxParam("ststat",$('#ststat').select2("val"));//结算状态
     		grid.submitFilter();
     		$("#dealdiv").css("display","none");
        });
        // 结算
    	$("#deal").click(function(){
    		//console.info($('#allsum').val());
    		/*	if(Sunline.isNull($('#allsum').val())){
    				bootbox.alert("待结算金额不能为空！"); 
    				return;
    			} */
    			if(Sunline.isNull($('#taskdt').val())){
    				bootbox.alert("结算日期不能为空！"); 
    				return;
    			}
    			bootbox.confirm("确定要结算？", function(result) {
                	if(!result){
                		return;
                }
    			//$('#deal').attr("disabled",true);
    			var input = {}; //{"taskdt":$("#taskdt").val(),"clstat":$("#clstat").select2("val")};
    			
         		input.taskdt = $("#taskdt").val();
         		input.ststat = $("#ststat").select2("val");
         		input.allsum = summoy;
    			
    			Sunline.ajaxRouter(
    		         	"ln/closeLoantask", 
    		         	 input,
    		         	"POST",
    		             function(redata){
    		         		if(redata.retCode=="0000"){
    		         			$("#keepdt").text(redata.cldate);
    		         			
    		         			bootbox.alert("结算成功"+","+"结算笔数:"+redata.count+","+"结算日期:"+redata.cldate);
    		         			$('#deal').attr("disabled",true);
    		         			//打开到账通知按钮
    		         			$("#noticediv").css("display","block");
    		         			$('#notice').attr("disabled",false);
    		         		}else{
    		         			$('#deal').attr("disabled",false);
    		         			bootbox.alert(redata.retMsg);
    		         		}
    		         	},
    		         	function(redata){
    		         		$('#deal').attr("disabled",false);
    		         		bootbox.alert("网络异常");
    		         	},
    		         	"json",
    		         	false); 	
    					
    			});
    	});
    	
    	
    	//到账通知
    	$("#notice").click(function(){
    			/*if(Sunline.isNull($('#allsum').text())){
    				bootbox.alert("金额不能为空！"); 
    				return;
    			} 
    			if(Sunline.isNull($('#taskdt').val())){
    				bootbox.alert("结算日期不能为空！"); 
    				return;
    			}*/
    			bootbox.confirm("确定要到账通知？", function(result) {
                	if(!result){
                		return;
                	}
    			var input_notice = {}; 
    			input_notice.notctp = "T004";//T004为放款结算通知类型
    			input_notice.target= '1';//1为发前置
    			input_notice.keepdt = $("#keepdt").text();
    			input_notice.tranam = summoy;
    			
    			Sunline.ajaxRouter(
    		         	"ln/loanNotice", 
    		         	input_notice,
    		         	"POST",
    		             function(redata){
    		         		if(redata.retCode=="0000"){
    		         			bootbox.alert("放款结算到账通知成功！"+redata.retMsg);
    		         			//关闭到账通知按钮
    		         			$('#notice').attr("disabled",false);
    		         		}else{
    		         			bootbox.alert(redata.retMsg);
    		         		}
    		         	},
    		         	"json",
    		         	false); 	
    					
    			});
    	});
    	
    	//xsl 导出
    	$(".table-group-actions").append("<button id='download' class='btn btn-sm purple table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;导出全部明细</button></div>");
    	
    	 $('#download').click(function(){
	    		 if(Sunline.isNull($('#taskdt').val())){
	 				bootbox.alert("结算日期不能为空！"); 
	 				return;
	 			 } 
	    		 if(Sunline.isNull($('#ststat').select2("val"))){
		 				bootbox.alert("结算状态不能为空！"); 
		 				return;
		 		} 
	    		 bootbox.confirm("确定要导出？", function(result) {
	                	if(!result){
	                		return;
	                	}
					var input = {};
					input.taskdt = $('#taskdt').val();
					input.ststat = $('#ststat').select2("val");
		        	Sunline.ajaxRouter(
				        	"ln/genfkjsXls", 
				        	 input,
				        	"POST",
				            function(redata){
				        		if(redata.retCode == '0000'){
				           			bootbox.confirm("文件["+redata.fileName+"]已生成，确定下载文件？",function(res){
				           				if (!res) {
				           					return;
				           				}
				           				window.location.href = Sunline.getBasePath() + '/rest/download/downLoadFile?path=' + redata.filePath + redata.fileName;
				           			});
				        		} else {
				        			bootbox.alert(redata.retMsg);
				        		}
				        	},
				        	function(redata){
				        		console.info(redata);
				        		bootbox.alert("交易异常，请检查网络设置或重新登录"); 
				        	},
				        	"json",
				        	false);
	    		 });
			});
    	
    	
	};
	
	
	return {
		init : function(){
			handleForm();
		}
	}
}()