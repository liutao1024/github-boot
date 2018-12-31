var task = function() {
	var handlePage = function() {
				
		var taskValid =Sunline.getValidate(
				$("#task_form"),
				function() { 	   	    
					Sunline.ajaxRouter("task/qrtkif", {
						'tkgpid' : $("#tkgpid").val(),
						'tkprcd' : $("#tkprcd").val()
					}, 'post', function(ret) {			
						$("#tkname").text(ret.lsbttr[0].pljyzwmc);	
						if(!Sunline.isNull(ret.lsbttr[0].pljyzwmc)){
							$("#do_task_btn").removeAttr("disabled");
						}else{
							bootbox.alert("查无此数据");
						}						
					}, function(ret) {
						bootbox.alert("网络异常");
					}, 'json', false);
					
				},{
					tkgpid:{required : true , maxlength : 19},
					tkprcd:{required : true , maxlength : 10},
				 });
		
		$("#chck_btn").bind("click",function(){
			$("#task_form").submit();
		});
		
		$("#do_task_btn").bind('click',function() {
			var taskid;
			Sunline.ajaxRouter("task/dotask", {
				'tkgpid' : $("#tkgpid").val(),
				'tkprcd' : $("#tkprcd").val()
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
 					$("#pljypich").val(n.piljybss);
 	 				$("#pljyzbsh").val(n.pljyzbsh);
 	 				$("#pljyzuhs").val(n.pljyzuhs);
 	 				$("#fuwbiaoz").val(n.fuwbiaoz);
 	 				$("#pljylcbs").val(n.pljylcbs);
 	 				$("#piljybss").val(n.piljybss);
 	 				$("#cuowduiz").val(n.cuowduiz);
 	 				$("#pljioysj").val(n.pljioysj);
 	 				$("#yilpljyz").val(n.yilpljyz);
 	 				$("#jyksshij").val(n.jyksshij);
 	 				$("#jyjsshij").val(n.jyjsshij);
 	 				$("#jiaoyzht").val(n.jiaoyzht);
 	 				$("#cuowxinx").val(n.cuowxinx); 																		
 				}); 				 								
 			}, function(ret) {
 				bootbox.alert("网络异常");
 			});       	 
         }		                  
     	$("#do_task_btn").attr("disabled","disabled");
		});
	}

	return {
		init : function() {
			handlePage();
		}
	}

}();