var bydkqy = function(){
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
	
	
	var handl = function(){
	if(Sunline.isNull($('#trdate').val())){
		$('#submit').attr("disabled",false);
		bootbox.alert("请选择日期！"); 
		return;
	}
	var input = {};
	input.trdate = $('#trdate').val();
	Sunline.ajaxRouter(
        	"by/dkqsinfo",
        input,
        	"POST",
            function(redata){
        		if(redata.retCode=="0000"){
        			$('#allsum').text(redata.taskam);
        			$(".alert-danger").hide();
        			if(redata.loanst=="0"){
        				$('#loanst').text("未清算");
        			}else{
        				$('#loanst').text("已清算");
        			}
        			if(redata.taskam > 0&&redata.loanst=="0"){
    	        		$("#dealdiv").css("display","block");
    	        		$('#deal').attr("disabled",false);
    	        	}else{
    	        		$("#dealdiv").css("display","none");
    	        	}
    			}else if(redata.retCode=="9999"){
    				$('#tranam').val("0");
    				$('#sucler').attr("disabled",true);
    			}else{
   
    				$("#alert").text(redata.retMsg);
					$(".alert-danger").show();
    			}
        	},
        	function(redata){
        		bootbox.alert("网络异常，请重试！"); 
        	},
        	"json",
        	false); 
	}
	var handlForm = function(){
		//时间选择
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
        };
        //初始化时间
        $('#trdate').val(FormatDate());
        //类型选择
//        $("#loanst").select2({
//        	data : [{id:'0',text:'未清算'},{id:'1',text:'已清算'}]
//        });
//        $("#loanst").select2("val","0");
		//查询URL
        var url = Sunline.ajaxPath("by/dkqsinfo");
        
        grid.setAjaxParam("trdate",$('#trdate').val());//清算日期
 		
		//初始化Datatable
		grid.init({
			src:$("#bydkqy_ajax"),
			deleteData: sendData,
			onSuccess:function(grid){
				summoy = grid.getDataTable().ajax.json().summoy;
				$("#allsum").text(summoy);
	        	if(summoy > 0){
	        		$("#dealdiv").css("display","block");
	        		$('#deal').attr("disabled",false);
	        	}else{
	        		$("#dealdiv").css("display","none");
	        	}
			},
			onError:function(grid){
				$("#dealdiv").css("display","none");
			},
			dataTable:{
				"ajax":{
					"url":url,
				},
				"aoColumns": [   {"mDataProp":"custac"},
				                 {"mDataProp":"lncfno"},
				                 {"mDataProp":"trandt"},
				                 {"mDataProp":"totamt"},
				                 {
									"mDataProp" : "clerst",//清算状态
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										var _clstat = "";
								 		if(data == "0"){
								 			_clstat = "未清算";
								 		}else if(data == "1"){
								 			_clstat = "已清算";
								 		}
								 		return _clstat;
									}
								 },
				                 ] 
			}
			
		});
		
		 // 查询按钮
//        $("#submit").click(function(){
//        	grid.setAjaxParam("trdate",$('#trdate').val());//清算日期
//        	alert("1");
//     		grid.submitFilter();
//        });
        $('#submit').click(function(){
        	$('#submit').attr("disabled",true);
        	handl();
        	$('#submit').attr("disabled",false);
		});
        // 清算
    	$("#deal").click(function(){
    			if(Sunline.isNull($('#allsum').text())){
    				bootbox.alert("待清算金额不能为空！"); 
    				return;
    			} 
    			if(Sunline.isNull($('#trdate').val())){
    				bootbox.alert("清算日期不能为空！"); 
    				return;
    			}
    			bootbox.confirm("确定要清算？", function(result) {
                	if(!result){
                		return;
                }
    			//$('#deal').attr("disabled",true);
    			var input = {}; //{"taskdt":$("#taskdt").val(),"clstat":$("#clstat").select2("val")};
    			
         		input.trdate = $("#trdate").val();
         		input.loanst = $("#loanst").select2("val");
         		input.allsum = $('#allsum').text();
    			
    			Sunline.ajaxRouter(
    		         	"by/clearDktask", 
    		         	 input,
    		         	"POST",
    		             function(redata){
    		         		if(redata.retCode=="0000"){
    		         			bootbox.alert("清算成功");
    		         			$('#deal').attr("disabled",true);
    		         			grid.submitFilter();
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
    	var sendData = ["trdate"];
		
	};
		
	return {
		init:function(){
			handlForm();
			handl();
		}
	};
}();