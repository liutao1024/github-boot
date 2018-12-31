var ydtrqs =function(){
	
	var doQuery = function(){
		var input = {};
		Sunline.ajaxRouter(
	         	"yd/ydqrdc", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			$("input[name='dredbl_1']").val(redata.dredbl);
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 	
	}
	
	var handlerInsuclear = function(){
		$('#sucler').click(function(){
			
			if(Sunline.isNull($('#tranam').val())){
				bootbox.alert("请输入金额！"); 
				return;
			}
			
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			var input = {};
			input.tranam =  $('#tranam').val();
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"yd/ydtrqs", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			bootbox.alert("清算成功");
		         			doQuery();
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 	
			});		
			});
		doQuery();
	};
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()