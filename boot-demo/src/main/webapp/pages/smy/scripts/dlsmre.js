var dlsmre =function(){
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
		        	"smy/getSmyRep",
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
		        		console.info("返回数据是:"+redata);
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