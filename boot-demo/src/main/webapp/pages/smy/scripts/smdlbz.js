var smdlbz =function(){
	
	/**
	 * 处理萨摩耶保证金设置
	 * kind = 1时为查询，kind = 2时设置并查询
	 */
	var doService = function(kind){
		var input = {};
		input.tranam =  $('#tranam').val();
		input.pecent = $('#pecent').val();
		input.dlkind = kind;
		Sunline.ajaxRouter(
	         	"smy/smdlbz", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			// 查询成功设置界面展示
	         			$("input[name='dredbl_1']").val(redata.dredbl);
	         			$("input[name='pecent_1']").val(redata.pecent);
	         			$("input[name='pecent']").val(redata.pecent);
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
			if(Sunline.isNull($('#tranam').val())){
				bootbox.alert("请输入金额！"); 
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