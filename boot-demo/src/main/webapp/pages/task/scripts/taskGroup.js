var taskid;
var taskGroup = function() {
	var handlePage = function() {
		
		$("#do_task_btn").bind('click',function() {
			
			Sunline.ajaxRouter("task/dogrop", {
				'tkmbrq' : $("#tkmbrq").val()
			}, 'post', function(ret) {
				taskid = ret.taskid;
			}, function(ret) {
				console.info(ret);
			}, 'json', false);
			if(!Sunline.isNull(taskid)){
		   	 Sunline.ajaxRouter("task/qrtask", {
					'taskid' : taskid,
				}, 'post', function(ret) { 						
					$.each(ret.lstask,function(i,n){
		 				$("#plrwtjsj").val(n.plrwtjsj);
		 				$("#jiaoyzht").val(n.jiaoyzht);
		 				$("#cuowxinx").val(n.cuowxinx); 																		
					}); 				 								
				}, function(ret) {
					bootbox.alert("网络异常");
				});       	 
		    }
		});
	}

	return {
		init : function() {
			handlePage();
		}
	}

}();