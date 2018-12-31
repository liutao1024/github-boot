var changecard = function(){
	
	var cardtpDict=Sunline.getDict("E_CARDTP");
	$("input[name='cardtp']").select2({
		data : cardtpDict,
		allowClear : true
	});
	
	var handler =function(){
	 Sunline.getValidate($("#qry_form"),
			function() {
				var data = {};
				$.each($("input", $("#qry_form")), function(i, n) {
					if (n.name != undefined&&n.name!=""&&n.name!=null) {
						data[n.name] = n.value;
					}
				});
				
				Sunline.ajaxRouter("cust/qzcard", 
						data
				, 'post', function(ret) {
					//bootbox.alert(ret.retMsg);
					if(ret.retCode!='0000'){
	         			bootbox.alert(ret.retMsg);
	         			return;
	         		}
	         		bootbox.alert("新增成功！",function(){
	         			$('#custac').val("");
	         			$('#brchno').val("");
	         			$('#cakhmc').val("");
	         			$('#brchna').val("");
	         			$('#cardno').val("");
	         			$('#odcdno').val("");
	         			$('#cardtp').select2("val","");
	         		});
				});
			}, {
				custac : {	
					maxlength:40
				},
				brchno : {	
					maxlength:40
				}
				,
				cakhmc : {	
					maxlength:40
				}
				,
				brchna : {	
					maxlength:40
				}
				,
				cardno : {
					maxlength:40
				}
				,
				odcdno : {	
					maxlength:40
				}
				,
				cardtp : {	
					maxlength:40
				}
			});
     	}
	 return {
		 init :function(){
			 handler();
		 }
	 }
}();