var grid = new Datatable();

// 清算
var qingSuan = function(bathid,servtp){
	bootbox.confirm("确定要清算？", function(result) {
    	if(!result){
    		return;
        }else {
        	var input = {"bathid":bathid,"servno":servtp};
         	Sunline.ajaxRouter(
        	        	"op/xmbeforpydeal", 
        	        	 input,
        	        	"POST",
        	            function(redata){
        	        		
        	        		if(redata.retCode == '0000'){
        	        			bootbox.alert("清算成功！");
        	                	grid.setAjaxParam("clstus",$('#clstus').select2("val"));//清算状态$('#clstus').select2("val")
        	                 	grid.setAjaxParam("clertp",$('#clertp').select2("val"));//清算类型默认为“收”
        	             		grid.submitFilter();        	             		        	             		
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
	
	};

var XmBeforpy = function(){
	var rolecontent = $('.inbox-content');
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
        	data : [{id:'1',text:'未清算'},{id:'2',text:'已清算'},{id:'3',text:'已清算待分配'},{id:'4',text:'已分配'}]
        });
        $("#clstus").select2("val","1");
        $("#clertp").select2({
        	data : [{id:'2',text:'收'},{id:'3',text:'退'}]
        });
        $("#clertp").select2("val","2");
        var url = Sunline.ajaxPath("op/xmbeforpydetail");
        grid.setAjaxParam("clstus",$('#clstus').select2("val"));//清算状态$('#clstus').select2("val")
    	grid.setAjaxParam("clertp",$('#clertp').select2("val"));//清算类型默认为“收”
		grid.init({
	        src: $("#xmbeforpy_ajax"),
	        onSuccess: function (grid) {
	        },
	        onError: function (grid) {
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url,
	            },
				"columns" : [
 				             {
							"data" : "bathid",//批次编号
							"sortable" : false,
							"searchable" : false
						},
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
							"data" : "cleram",//待清算金额
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								//alert(totalAm+"------------"+data);
								return data;
							}
						},
						{
							"data" : "brchno",//所属机构
							"sortable" : false,
							"searchable" : false
						}, 
						{
							"data" : "clstus",//资金清算状态
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								var _clstus = "";
         	            		if(data == "1"){
         	            			_clstus = "未清算";
         	            		}else if(data == "2"){
         	            			_clstus = "已清算";
         	            		}else if(data == "3"){
         	            			_clstus = "已清算待分配";
         	            		}else if(data == "4"){
         	            			_clstus = "已分配";
         	            		}
         	            		return _clstus;
							}
						}, {
							"data" : "clertp",//清算类型
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								var _tp = "";
         	            		if(data == "1"){
         	            			_tp = "付";
         	            		}else if(data == "2"){
         	            			_tp = "收";
         	            		}else if(data == "3"){
         	            			_tp = "退";
         	            		}else{
         	            			_tp = data;
         	            		}
         	            		return _tp;
							}
							
						},
						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								if(data.clstus == "1"){
									return '<a href="javascript:;" onclick="qingSuan('+"'"+data.bathid+"'"+","+"'"+data.servtp+"'"+')" >清算</a>';
								}else{
									return null;
								}
							}
						}
	            ]
	        }
	    });
		 // 查询按钮
        $('#submit').click(function(){
        	
        	grid.setAjaxParam("clstus",$('#clstus').select2("val"));//清算状态$('#clstus').select2("val")
         	grid.setAjaxParam("clertp",$('#clertp').select2("val"));//清算类型默认为“收”
     		grid.submitFilter();
     		
        });
	};
	
	
	return {
		init : function(){
			handleForm();
		}
	}
}()