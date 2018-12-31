var lnfscope = function() {

	var yesnoDict=[{"id":"0","text":"否[0]"}
	,{"id":"1","text":"是[1]"}]
	
	$("input[name='isprod']").select2({
		data : yesnoDict,
		allowClear : true
	});
	
	$("input[name='isopen']").select2({
		data : yesnoDict,
		allowClear : true
	});
	
	$("input[name='isloan']").select2({
		data : yesnoDict,
		allowClear : true
	});

	var handleTable = function(prodcd) {
		
		//zjj begin
		
		var input = {};
		input.prodcd = prodcd;
		input.dlkind = 1;//1、查询，2、设置
		
		Sunline.ajaxRouter(
	        	"loan/lnsccl",
	        	input,
	        	"POST",
	            function(redata){
	        		if(redata.retCode=="0000"){
        			$('#prodcd').val(redata.prodcd);
        			$('#prodna').val(redata.prodna);
        			$('#margrt').val(redata.margrt);
        			$('#prosam').val(redata.prosam);
        			$('#riskam').val(redata.riskam);
        			$('#thream').val(redata.thream);
        			$('#isprod').val(redata.isprod).trigger("change");
        			$('#isopen').val(redata.isopen).trigger("change");
        			$('#isloan').val(redata.isloan).trigger("change");
        			
        			}else{
        				bootbox.alert(redata.retMsg);
        			}
	        	},
	        	function(redata){
	        		bootbox.alert("网络异常，请重试！"); 
	        	},
	        	"json",
	        	false); 
		//保存
		$('#save').click(function(){
			//$('#save').attr("disabled",true);
			
			var input = {};
			input.prodcd = $('#prodcd').val();
			input.dlkind = 2;//1、查询，2、设置
			input.prodcd = $('#prodcd').val();
			input.prodna = $('#prodna').val();
			input.margrt = $('#margrt').val();
			input.prosam = $('#prosam').val();
			input.riskam = $('#riskam').val();
			input.thream = $('#thream').val();
			input.isprod = $('#isprod').val();
			input.isopen = $('#isopen').val();
			input.isloan = $('#isloan').val();
			
			Sunline.ajaxRouter(
		        	"loan/lnsccl",
		        	input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
		        			$('#prodcd').val(redata.prodcd);
		        			$('#prodna').val(redata.prodna);
		        			$('#margrt').val(redata.margrt);
		        			$('#prosam').val(redata.prosam);
		        			$('#riskam').val(redata.riskam);
		        			$('#thream').val(redata.thream);
		        			$('#isprod').val(redata.isprod);
		        			$('#isopen').val(redata.isopen);
		        			$('#isloan').val(redata.isloan);
		        			bootbox.alert("保存成功！");
	        			
	        			}else{
	        				bootbox.alert(redata.retMsg);
	        				$('#save').attr("disabled",false);
	        			}
		        	},
		        	function(redata){
		        		$('#save').attr("disabled",false);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
		});
		//zjj end

	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}

}();