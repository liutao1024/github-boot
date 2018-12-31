var LklClear=function(){
	var grid = new Datatable();
	var clerstDict=Sunline.getDict("E_CLERSTT");//清算状态
	var fromtpDict=Sunline.getDict("E_FROMTP");//支付平台
	var amntcdDict=Sunline.getDict("E_AMNTCD");//余额方向
	var crcycdDict=Sunline.getDict("crcycd");//币种
	var iszcfgDict=Sunline.getDict("E_YES___");//是否轧差
	
	//格式化显示金额保留的位数
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	$("input[name='clerst']",$("#cleardate")).select2({data:clerstDict,allowClear:true});
	
	var handleForm =function(){
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN',
	        });
        };
	}
	
	
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("clear/qrclre");
		
		grid.setAjaxParam("keepdt",$('#keepdt').val());
		grid.setAjaxParam("clerst",$('#clerst').select2("val"));
		grid.setAjaxParam("fromtp","2");
		grid.init({
	        src: $("#clear_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	        	console.info("It is error!");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [
	                { 
		            	"data": "keepdt",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "servno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "fromtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < fromtpDict.length; i++) {
								if (fromtpDict[i].id == data) {
									return fromtpDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "busino",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "trditn",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "trdita",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "iszcfg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < iszcfgDict.length; i++) {
								if (iszcfgDict[i].id == data) {
									return iszcfgDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "amntcd",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < amntcdDict.length; i++) {
								if (amntcdDict[i].id == data) {
									return amntcdDict[i].text;
								}
							}
							return data;
						}	            	
		            },{ 
		            	"data": "tranam",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "crcycd",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < crcycdDict.length; i++) {
								if (crcycdDict[i].id == data) {
									return crcycdDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "clerst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < clerstDict.length; i++) {
								if (clerstDict[i].id == data) {
									return clerstDict[i].text;
								}
							}
							return data;
						}
		            },{
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							if(full.clerst=="01"){
								return "已清算";
							}				
							return "<a class='clear' href='javascript:;' data-src='"
									+ data.fromtp
									+ ","
									+ data.busino
									+ ","
									+ data.trditn
									+ ","
									+ data.trdita
									+ ","
									+ data.iszcfg
									+ ","
									+ data.amntcd
									+ ","
									+ data.tranam
									+ ","
									+ data.crcycd
									+ ","
									+ data.keepdt
									+ ","
									+ data.acctac
									+ ","
									+ data.acctna
									+ ","
									+ data.bankno
									+ "'>清算 </a>";
						}
					}
	            ]
	        }
	    });
		
		var sendData = ["fromtp","busino","trditn","trdita","iszcfg","amntcd","tranam","crcycd","keepdt","acctac","acctna","bankno"];
        grid.addBindEvent(".clear", "click", sendData,
				function(data) {		
        	allClear(data);
		});
        
	}
	
	var allClear = function(data) {
		 bootbox.confirm("是否确定清算",function(result){
			if(result){
        		
    	     	var input = {};
    		  	input.fromtp = data.fromtp;
    		  	input.busino = data.busino;
    		  	input.trditn = data.trditn;
    		  	input.trdita = data.trdita;
    		  	input.iszcfg = data.iszcfg;
    		  	input.amntcd = data.amntcd;
    		  	input.tranam = data.tranam;
    		  	input.crcycd = data.crcycd;
    		  	input.keepdt = data.keepdt;
    		  	input.acctac = data.acctac;
    		  	input.acctna = data.acctna;
    		  	input.bankno = data.bankno;
    		  	input.target = "1";

    			Sunline.ajaxRouter(
		        	"clear/wdptqs", 
		        	 input,
		        	"POST",
		        	function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			grid.submitFilter();
		         			return;
		         		}
		         		bootbox.alert("清算成功！",function(){
		         			
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){    
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true); 
			}
    	})
	};
	
	$("#submit").click(function(){	
		grid.setAjaxParam("keepdt",$('#keepdt').val());
		grid.setAjaxParam("clerst",$('#clerst').select2("val"));
		grid.setAjaxParam("fromtp","2");
		grid.submitFilter();
	});
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
}();