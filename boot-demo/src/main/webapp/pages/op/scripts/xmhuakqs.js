var XmHuakqs = function(){
	
	var grid = new Datatable();
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
          }
	    return value;
	};
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	 
	
	var handleForm = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
        };
        $("#clstus").select2({
        	data : [{id:'1',text:'未付款'},{id:'2',text:'已付款'}]
        });
        $("#clstus").select2("val","1");
        
        console.log("------------start---------");
        var _tranDate = "0000";
        var totalAm = "0.00";
        var servtp = "XMXJ";
        var qsStatus = 1;
        $("#allsum").text(totalAm);
        var url = Sunline.ajaxPath("op/xmhuakqsdetail");   
    	grid.setAjaxParam("servtpnum",servtp);
    	
    	
    	console.log("------------start---------");
		grid.init({	      
			src: $("#xmhuakqs_ajax"),
			
	        onSuccess: function (grid) {
	        	$('#deal').attr("disabled",false);
	        	qsStatus = grid.getDataTable().ajax.json().qsstatus;	        	
	        	console.log(grid.getDataTable().ajax.json().qsstatus);
	        	if(qsStatus == '2') {	        		
	        		$("#dealdiv").css("display","none");
	        	}else {	        		
	        		$("#dealdiv").css("display","block");
	        	}
	        	totalAm = grid.getDataTable().ajax.json().summon;
	        	$("#allsum").text(totalAm);
	        	_tranDate = $('#check-date').val();
	        	servtp = $('#servtp').val();
	        },
	        onError: function (grid) {
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url,
	            },
				"columns" : [
 				             
						{
							"data" : "subjcd",//标的编号
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "servtp",//渠道号
							"sortable" : false,
							"searchable" : false
						}, 
						{
							"data" : "tranam",//待清算金额
							"sortable" : false,
							"searchable" : false,
							/*"render" : function(data, type, full) {
								totalAm = (totalAm+Float.parseFloat(data)).toFixed(2);
								return data;
							}*/
							"render" : function(data, type, full) {																
//								$("#allsum").text(totalAm);
								return data;
							}
						},
						{
							"data" : "custac",//客户账号
							"sortable" : false,
							"searchable" : false
						}, 
						{
							"data" : "ordrid",//订单编号
							"sortable" : false,
							"searchable" : false
						}
	            ]
	        }
	    });
		console.log("------------start---------");
		 // 查询按钮
        $('#submit').click(function(){
//            grid.setAjaxParam("clstus",$('#checkS').select2("val"));//清算状态        	
        	totalAm = 0.00;//初始化总金额
        	var trandt = $('#check-date').val();
         	grid.setAjaxParam("stadat",trandt);
         	servtp = $('#servtp').val();
         	grid.setAjaxParam("servtpnum",servtp);
         	grid.setAjaxParam("clstus",$('#clstus').select2("val"));
     		grid.submitFilter();
     		
     		$("#allsum").text(totalAm); 
     		if($('#clstus').select2("val") == '2'){
     			$("#dealdiv").css("display","none");
     		}else {
     			$("#dealdiv").css("display","block");
     		}
        });
        console.log("------------start---------");             
        
        // 提交付款信息
        $('#deal').click(function(){
        	bootbox.confirm("确定要提交付款信息？", function(result) {
            	if(!result){            		
            		return;
                }else {
                	var input = {};
                	
        			input.stadat = $('#check-date').val();
        			input.tranam = $('#cleram').val();
        			input.servno = $('#servtp').val();
        			input.tranam = totalAm;
//        			var trandt = $('#check-date').val();
//            		grid.setAjaxParam("stadat",trandt);
//            		servtp = $('#servtp').val();
//                	grid.setAjaxParam("servtpnum",servtp);
//                 	grid.setAjaxParam("clstus",$('#clstus').select2("val"));
//             		grid.submitFilter();
                	Sunline.ajaxRouter(
        		        	"op/xmhuakqsdeal", 
        		        	 input,
        		        	"POST",
        		            function(redata){
        		        		if(redata.retCode == '0000'){
        		        			bootbox.alert("付款成功！"); 
//        		        			grid.setAjaxParam("clstus",$('#checkS').select2("val"));//清算状态
//        		        	        grid.setAjaxParam("clertp","1");//清算类型默认为“付”
        		        			qsStatus = 2;
        		                	
        		                	var trandt = $('#check-date').val();
        		                 	grid.setAjaxParam("stadat",trandt);
        		                 	servtp = $('#servtp').val();
        		                 	grid.setAjaxParam("servtpnum","");
        		             		grid.submitFilter();    		             		
        		             		$("#allsum").text(totalAm);    		             		    		     		             		
        		             		grid.submitFilter();
        		             		qsStatus = grid.getDataTable().ajax.json().qsstatus;
        		    	        	
        		    	        	console.log(grid.getDataTable().ajax.json().qsstatus);
        		    	        	if(qsStatus == '2') {
        		    	        		$('#clstus').text("已付款");
        		    	        		$("#dealdiv").css("display","none");
        		    	        	}else {
        		    	        		$('#clstus').text("未付款");
        		    	        		$("#dealdiv").css("display","block");
        		    	        	}
        		        		} else {
        		        			bootbox.alert(redata.retMsg);
        		        		}
        		        	},
        		        	function(redata){
        		        		console.info(redata);
        		        		bootbox.alert("交易异常，请检查网络设置货重新登录"); 
        		        	},
        		        	"json",
        		        	false); 
                }
          });
        		
        	});
        console.log("------------start---------");
	};
	
	
	
	return {
		init : function(){
			handleForm();
		}
	}
}()