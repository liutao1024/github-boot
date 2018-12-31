var byfkqy = function(){
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
        $("#loanst").select2({
        	data : [{id:'0',text:'未清算'},{id:'1',text:'已清算'}]
        });
        $("#loanst").select2("val","0");
		//查询URL
        var url = Sunline.ajaxPath("by/dcqsinfo");
        
        grid.setAjaxParam("trdate",$('#trdate').val());//清算日期
     	grid.setAjaxParam("loanst",$('#loanst').select2("val"));//清算状态
 		
		//初始化Datatable
		grid.init({
			src:$("#byfkqy_ajax"),
			deleteData: sendData,
			onSuccess:function(grid){
				if(grid.getDataTable().ajax.json().retCode!="0000"){
					$("#alert").text(grid.getDataTable().ajax.json().retMsg);
					$(".alert-danger").show();
				}else{
					$(".alert-danger").hide();
				}
			
				summoy = grid.getDataTable().ajax.json().summoy;
				$("#allsum").text(summoy);
				
	        	//显示清算按钮
	        	var loanst = $('#loanst').select2("val");
	        	if(loanst == "0" && summoy > 0){
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
        $("#submit").click(function(){
        	grid.setAjaxParam("trdate",$('#trdate').val());//清算日期
         	grid.setAjaxParam("loanst",$('#loanst').select2("val"));//清算状态
     		grid.submitFilter();
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
         		input.allsum = summoy;
    			
    			Sunline.ajaxRouter(
    		         	"by/clearRepaytask", 
    		         	 input,
    		         	"POST",
    		             function(redata){
    		         		if(redata.retCode=="0000"){
    		         			bootbox.alert("清算成功"+","+"清算笔数:"+redata.count);
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
		}
	};
}();