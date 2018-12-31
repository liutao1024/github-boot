var smtrqs =function(){
	
	var tpDict=[{"id":"1225","text":"大额[1225]"}		//20160803 改造：萨摩耶代偿资金清算改造  新增汇款类型
				,{"id":"1238","text":"小额[1238]"}
				,{"id":"1216","text":"超网[1216]"}
				,{"id":"1200","text":"包商[1200]"}]
	
	$("#paychn").select2({data:tpDict});	//	20160803 改造：新增清算汇款类型选择
	
	var doQuery = function(){
		var input = {};
		Sunline.ajaxRouter(
	         	"smy/smqrdc", 
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
			if(Sunline.isNull($('#paychn').val())){		//20160803改造： 新增下拉框输入判断
				bootbox.alert("请选择汇款类型！"); 
				return;
			}
			
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			var input = {};
			input.tranam =  $('#tranam').val();
			input.chnnal =  $('#paychn').val();			//20160803 改造：新增清算汇款类型
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"smy/clearsmy", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			bootbox.alert("清算提交成功");
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