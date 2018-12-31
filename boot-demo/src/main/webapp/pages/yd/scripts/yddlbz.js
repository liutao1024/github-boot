var yddlbz =function(){
	
	/**
	 * 处理雨点保证金设置
	 * kind = 1时为查询，kind = 2时设置并查询
	 */
	var doService = function(kind){
		var input = {};
		input.tranam =  $('#tranam_2').val();
		input.risknt =  $('#pecent_2').val();
		input.pecent =  $('#loanpt_2').val();
		input.dlkind = kind;
		Sunline.ajaxRouter(
	         	"yd/yddlbz", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			// 查询成功设置界面展示
	         			$("input[name='tranam_1']").val(redata.dredbl);
	         			$("input[name='pecent_1']").val(redata.risknt);
	         			$("input[name='loanpt_1']").val(redata.pecent);
	         			if(kind == 2){
	         				// 设置成功提示
	         				bootbox.alert("设置成功");
	         			}
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 	
	};
	
	var handlerInsuclear = function(){
		$('#deal').click(function(){
			if(Sunline.isNull($('#tranam_2').val())){
				bootbox.alert("请输入金额！"); 
				return;
			}
			if(Sunline.isNull($('#pecent_2').val())){
				bootbox.alert("请输入预警比例！"); 
				return;
			}
			if(Sunline.isNull($('#loanpt_2').val())){
				bootbox.alert("请输入保证金比例！"); 
				return;
			}
			doService(2);
		});
		doService(1);
	};
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()