var loantask=function(){
	var grid = new Datatable();
	var summoy = 0.00;
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	
	var handleTable = function() {
		 //初始化时间
        $('#taskdt').val(FormatDate());
		
		$("#clstat").select2({
	        	data : [{id:'1',text:'未清算'},{id:'2',text:'已清算'}]
	        });
	    $("#clstat").select2("val","1");
		
		var url = Sunline.ajaxPath("ln/findLoantask");
		
		grid.setAjaxParam("taskdt",$('#taskdt').val());//清算日期
		grid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
		
		grid.init({
	        src: $("#fcclear_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	summoy = grid.getDataTable().ajax.json().summoy;
	        	$("#allsum").text(summoy);
	        	
	        	var clstat = $('#clstat').select2("val");
	        	if(clstat == "1" && summoy > 0){
	        		$("#dealdiv").css("display","block");
	        		$('#deal').attr("disabled",false);
	        	}else{
	        		//$("#dealdiv").css("display","none");
	        		if(summoy > 0){	        			
	        			//打开到账通知按钮
	         			$("#noticediv").css("display","block");
	         			$('#notice').attr("disabled",false);	
	         			
	         			if(clstat == '2'){
		        			console.log(clstat);
	         				$("#keepdt").text($("#taskdt").val());
	         			}
	           		}       		
	        		
	        	}
	        },
	        onError: function (grid) {
	        	//$("#dealdiv").css("display","block");
	        	//$("#allsum").text(summoy);
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: {  
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [
	                {     
		            	"data": "custac",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lncfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "loandt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lenval",
		            	"sortable": false,
		            	"searchable": false,
		            	"mRender" : function(data, type, full) {
							
		            		var text=	parseFloat(data).toFixed(2);
							
							return text;
							}
		            },{ 
		            	"data": "clstat",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
		            		var status;
		            		if(data == "1"){
		            			status = "未清算";
     	            		}else if(data == "2"){
     	            			status = "已清算";
     	            		}
		            		return status;
						}
		            },{ 
		            	"data": "cldate",
		            	"sortable": false,
		            	"searchable": false
		            }
	            ]
	        }
	    });
		var sendData = ["taskdt"];
	}
	
	//清算
	$("#deal").click(function(){
			if(Sunline.isNull($('#allsum').text())){
				bootbox.alert("待清算金额不能为空！"); 
				return;
			} 
			if(Sunline.isNull($('#taskdt').val())){
				bootbox.alert("待清算日期不能为空！"); 
				return;
			}
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            }
			//$('#deal').attr("disabled",true);
			var input = {}; //{"taskdt":$("#taskdt").val(),"clstat":$("#clstat").select2("val")};
			
     		input.taskdt = $("#taskdt").val();
     		input.clstat = $("#clstat").select2("val");
     		input.allsum = summoy;
			Sunline.ajaxRouter(
		         	"ln/clearLoantask", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			$("#keepdt").text(redata.cldate);
		         			
		         			bootbox.alert("清算成功"+","+"清算笔数:"+redata.count+","+"清算日期:"+redata.cldate);
		         			$('#deal').attr("disabled",true);
		         			//打开到账通知按钮
		         			$("#noticediv").css("display","block");
		         			$('#notice').attr("disabled",false);
		         		}else{
		         			$('#deal').attr("disabled",true);
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
//			if(Sunline.isNull($('#allsum').val())){
//				bootbox.alert("金额不能为空！"); 
//				return;
//			} 
//			if(Sunline.isNull($('#taskdt').val())){
//				bootbox.alert("清算日期不能为空！"); 
//				return;
//			}
			bootbox.confirm("确定要到账通知？", function(result) {
            	if(!result){
            		return;
            }
			var input_notice = {}; 
			input_notice.notctp = "T003";//T003为放款清算通知类型
			input_notice.target= '1';//1为发前置
			input_notice.keepdt = $("#keepdt").text(); 
			input_notice.tranam = summoy; 

			Sunline.ajaxRouter(
		         	"ln/loanNotice", 
		         	input_notice,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			bootbox.alert("放款清算到账通知成功！"+redata.retMsg);
		         			//关闭到账通知按钮
		         			$("#noticediv").css("display","none");
//		         			$('#notice').attr("disabled",true);
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	"json",
		         	false); 	
					
			});
	});
	
	var handleForm =function(){
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN'
	        });
        }; 
        $("#clstat").select2({
        	data : [{id:'1',text:'未清算'},{id:'2',text:'已清算'}]
        });
        $("#clstat").select2("val","1");
      
        //查询
		$("#submit").click(function(){
			if(Sunline.isNull($('#taskdt').val())){
				bootbox.alert("清算日期不能为空！");
				return;
			}
			
			$("#noticediv").css("display","none");
			grid.setAjaxParam("taskdt",$('#taskdt').val());
			grid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
			grid.submitFilter();
		});
		
		//取消
		$('#cancle').click(function(){
			$('#taskdt').val("");
		});
		
		
	}
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
	
}();