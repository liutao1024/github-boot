var yxzdqs = function(){
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
        $('#taskdt').val(FormatDate());
        //类型选择
        $("#clstat").select2({
        	data : [{id:'1',text:'未清算'},{id:'2',text:'已清算'}]
        });
        $("#clstat").select2("val","1");
		//查询URL
        var url = Sunline.ajaxPath("ln/zdqsinfo");
        
        grid.setAjaxParam("taskdt",$('#taskdt').val());//清算日期
     	grid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
 		
		//初始化Datatable
		grid.init({
			src:$("#yxzdqs_ajax"),
			onSuccess:function(grid){
				summoy = grid.getDataTable().ajax.json().taskam;
				$("#allsum").text(summoy);
	        	//显示清算按钮
	        	var clstat = $('#clstat').select2("val");
	        	if(clstat == "1" && summoy > 0){
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
				                 {"mDataProp":"repypl"},
				                 {"mDataProp":"inteam"},
				                 {"mDataProp":"penaam"},
				                 {"mDataProp":"petyam"},
				                 {"mDataProp":"repyam"},				                
				                 {
									"mDataProp" : "clstat",//清算状态
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
								 },
				                 {"mDataProp":"cldate"}
				                 ] 
				/*"columno":[
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
								"data" : "repypl",//本金
								"sortable" : false,
								"searchable" : false
							},
							{
								"data" : "inteam",//利息
								"sortable" : false,
								"searchable" : false
							},
							{
								"data" : "penaam",//罚息
								"sortable" : false,
								"searchable" : false
							},
							{
								"data" : "petyam",//违约金
								"sortable" : false,
								"searchable" : false
							},
							{
								"data" : "repyam",//追款总额
								"sortable" : false,
								"searchable" : false
							},
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
							},
							{
								"data" : "cldate",//清算日期
								"sortable" : false,
								"searchable" : false
							}
				    ]*/
			}
			
		});
		
		 // 查询按钮
        $('#submit').click(function(){
        	grid.setAjaxParam("taskdt",$('#taskdt').val());//清算日期
         	grid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
     		grid.submitFilter();
     		//隐藏清算按钮
     		$("#dealdiv").css("display","none");
        });
        // 清算
    	$("#deal").click(function(){
	    		if(Sunline.isNull($('#allsum').text())){
					bootbox.alert("待清算金额不能为空！"); 
					return;
				} 
    			if(Sunline.isNull($('#taskdt').val())){
    				bootbox.alert("清算日期不能为空！"); 
    				return;
    			}
    			if(Sunline.isNull($('#taskdt').val())){
    				bootbox.alert("清算日期不能为空！"); 
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
    		         	"ln/clearzdtask", 
    		         	 input,
    		         	"POST",
    		             function(redata){
    		         		if(redata.retCode=="0000"){
    		         			bootbox.alert("清算成功"+","+"清算笔数:"+redata.count+","+"清算日期:"+redata.cldate);
    		         			$('#deal').attr("disabled",true);
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
		
	};
		
	return {
		init:function(){
			handlForm();
		}
	};
}();