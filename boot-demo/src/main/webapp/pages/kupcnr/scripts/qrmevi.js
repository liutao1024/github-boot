var qrmevi = function() {
	var handlePage = function() {
				
		var taskValid =Sunline.getValidate(
				$("#task_form"),
				function() { 	   	    
					Sunline.ajaxRouter("kupcon/qrmevi", {
						'mechno' : $("#mechno").val(),
					}, 'post', function(n) {			
		 					$("#mechno").val(n.mechno);
		 	 				$("#mechnm").val(n.mechnm);
		 	 				$("#totnum").val(n.totnum);
		 	 				$("#totbln").val(n.totbln);
		 	 				$("#onenum").val(n.onenum);
		 	 				$("#onebln").val(n.onebln);
		 	 				$("#twonum").val(n.twonum);
		 	 				$("#twobln").val(n.twobln);
		 	 				$("#thrnum").val(n.thrnum);
		 	 				$("#thrbln").val(n.thrbln);																		
					}, function(ret) {
						bootbox.alert("网络异常");
					}, 'json', false);
					
				},{
					mechno:{required : true , maxlength : 30}
				 });
		
		$("#chck_btn").bind("click",function(){
			$("#task_form").submit();
		});
		$("#clear_btn").bind("click",function(){
			$("#mechno").val("");
		});
	
	}

	return {
		init : function() {
			handlePage();
		}
	}

}();