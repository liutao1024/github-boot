var Down =function(){
	var handlerDown = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		
		$('#retfile').click(function(){
			$('#retfile').attr("disabled",true);
			if(Sunline.isNull($('#check-date').val())){
				bootbox.alert("请选择日期！"); 
				return;
			}
			var input = {};
			input.filedt = $('#check-date').val();
			Sunline.ajaxRouter(
		        	"insu/getPoliFile",
		        	 input,
		        	"POST",
		            function(redata){
		        		$('#retfile').attr("disabled",false);
		        		if(redata.retCode == '0000'){
		        			_filename = redata.fileName;
		        			bootbox.alert("文件["+redata.fileName+"]已生成，确定下载文件？",function(){
		        				window.location.href = Sunline.getBasePath() + redata.fileName;
		        			});
		        		} else {
		        			bootbox.alert(redata.retMsg);
		        		}
		        	},
		        	function(redata){
		        		$('#retfile').attr("disabled",false);
		        		console.info(redata);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
		});
		
		$('#retfileDown').click(function(){
			$('#retfileDown').attr("disabled",true);
			var input = {};
			input.filedt = $('#down-date').val();
			Sunline.ajaxRouter(
		        	"insu/getInsuReturnFile",
		        	 input,
		        	"POST",
		            function(redata){
		        		$('#retfileDown').attr("disabled",false);
		        		if(redata.retCode == '0000'){
		        			_filename = redata.fileName;
		        			bootbox.alert("文件["+redata.fileName+"]已生成，确定下载文件？",function(){
		        				window.location.href = Sunline.getBasePath() + redata.fileName;
		        			});
		        		} else {
		        			bootbox.alert(redata.retMsg);
		        		}
		        	},
		        	function(redata){
		        		$('#retfileDown').attr("disabled",false);
		        		console.info(redata);
		        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
		        	},
		        	"json",
		        	false); 
		});
		
		$('#retRfileDown').click(function(){
			$('#retRfileDown').attr("disabled",true);
			if(Sunline.isNull($('#realdate').val())){
				bootbox.alert("请选择日期！"); 
				return;
			}
			var input = {};
			input.filedt = $('#realdate').val();
			Sunline.ajaxRouter(
		        	"insu/getInsureBackFile",
		        	 input,
		        	"POST",
		            function(redata){
		        		$('#retRfileDown').removeAttr("disabled");
		        		if(redata.retCode == '0000'){
		        			_filename = redata.fileName;
		        			bootbox.alert("文件["+redata.fileName+"]已生成，确定下载文件？",function(){
		        				window.location.href = Sunline.getBasePath() + redata.fileName;
		        			});
		        		} else {
		        			bootbox.alert(redata.retMsg);
		        		}
		        	},
		        	function(redata){
		        		$('#retRfileDown').removeAttr("disabled");
		        		console.info(redata);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
		});
	};
	return {
		init : function(){
			handlerDown();
		}
	}
}()