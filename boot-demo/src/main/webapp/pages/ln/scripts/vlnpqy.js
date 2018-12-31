var vlnpqy=function(){
	var grid = new Datatable();
	var isF=true;
	var handleTable = function() {
		var url = Sunline.ajaxPath("ln/vlnpqy");
		
		grid.setAjaxParam("custna",$('#custna').val());
		grid.setAjaxParam("idtfno",$('#idtfno').val());
		grid.setAjaxParam("teleno",$('#teleno').val());
		
		grid.init({
	        src: $("#fcclear_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	//$('.cif_tran_ajax_wrapper .alert-danger').css("display","none");
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
		            	"data": "custna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "idtfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "teleno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lncfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "tlterm",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "termno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repydt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repyam",
		            	"sortable": false,
		            	"searchable": false
		            },{
		            	 "data" : null,
		            	 "sortable" : false,
		            	 "searchable" : false,
		            	 "render" : function(data, type, full) {
		            		 return "<a class='releInfo' href='javascript:;' data-src='"
		            		 + data.lncfno
		            		 +","
		            		 +data.termno
		            		 + "'>还款</a>";
		            	 }
		             }
	            ]
	        }
	    });
		var sendData = ["lncfno","termno"];
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
			/*if(Sunline.isNull($('#custna').val())){
				bootbox.alert("客户姓名不能为空！");
				return;
			}
			if(Sunline.isNull($('#idtfno').val())){
				bootbox.alert("身份证号不能为空！");
				return;
			}
			if(Sunline.isNull($('#teleno').val())){
				bootbox.alert("手机号码不能为空！");
				return;
			}*/
			grid.setAjaxParam("custna",$('#custna').val());
			grid.setAjaxParam("idtfno",$('#idtfno').val());
			grid.setAjaxParam("teleno",$('#teleno').val());
			grid.submitFilter();
		});
		
		//取消
		$('#cancle').click(function(){
			$('#custna').val("");
			$('#idtfno').val("");
			$('#teleno').val("");
		});
		
		
	}
	
	
	var showReleInfo = function(data) {
		var tabData = [];
		var dataSet = [];
		var input={};
		input.lncfno = data.lncfno;
		input.termno = data.termno;
		console.log(input);
    	Sunline.ajaxRouter(
	        	"ln/vlnpwd",
	        	input,
	        	"POST",
	        	function(redata){
	        		console.log(redata);
	        		if(redata.retCode == '0000'){
	        			var dataList=[redata.releinfo];
	        			for(var i=0 ; i<dataList.length ; i++){
	        		    tabData=[dataList[i].transq,dataList[i].repyam];
	        			dataSet.push(tabData);
	        			}
	        			if(isF){
        				re_grid = $('#releInfo').DataTable({
        					data: dataSet,
        					paging: false,
        					searching: false,
        					ordering: false,
        					info: false,
        					columns: [
        					          { title: "交易流水" },
        					          { title: "扣款金额" },			   
        					         ]
        				});
        				isF = false;
	        			}else{
	        				re_grid.clear().draw();
	        				for(var i=0;i<dataSet.length;i++){
	        					re_grid.row.add(dataSet[i]).draw(false);
	        				}
	        				
	        			}	        	
	        			$("#releInfoModal").modal("show");       				        			
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