var unbindcard=function(){
	var grid = new Datatable();
	var isF=true;
	var custac;
	var handleTable = function() {
	
		
		var url = Sunline.ajaxPath("cust/secust");
			
		
		grid.init({
	        src: $("#fcclear_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	custac = grid.getDataTable().ajax.json().custac;
	        	
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
		            	"data": "cardno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "brchno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "brchna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "binddt",
		            	"sortable": false,
		            	"searchable": false
		            },{
		            	 "data" : null,
		            	 "sortable" : false,
		            	 "searchable" : false,
		            	 "render" : function(data, type, full) {
		            		 return "<a class='releInfo' href='javascript:;' data-src='"
		            		 +data.cardno
		            		 + "'>解绑</a>";
		            	 }
		             }
	            ]
	        }
	    });
		var sendData = ["cardno"];
		grid.addBindEvent(".releInfo", "click", sendData,
				function(data) {
			// 显示配置窗口
        	showReleInfo(data);
			//$("#releInfoModal").modal("show");
		});
	}
	
	var handleForm =function(){
        //查询
		$("#submit").click(function(){
			grid.setAjaxParam("custac",$('#custac').val());
			grid.setAjaxParam("idtfno",$('#idtfno').val());
			grid.submitFilter();
		});
		
		//取消
		$('#cancle').click(function(){
			$('#custac').val("");
			$('#idtfno').val("");
		});
		
		
	}
	
	
	
	
	//解绑
	var showReleInfo = function(data) {
		var tabData = [];
		var dataSet = [];
		var input={};
		input.odcdno = data.cardno;
		input.custac = custac;
		console.log(input);
    	Sunline.ajaxRouter(
	        	"cust/camdub",
	        	input,
	        	"POST",
	        	function(redata){
	        		console.log(redata);
	        		if(redata.retCode == '0000'){
	        			bootbox.alert("解绑成功");
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
		}
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
}();