var qydcam =function(){
	
	var prodDict=[{"id":"020010002","text":"萨摩耶代偿[020010002]"}
				,{"id":"020010008","text":"小马助贷-非农贷消费贷[020010008]"}
				,{"id":"020010009","text":"小马助贷-非农贷[020010009]"}
				,{"id":"020010010","text":"小马助贷-农贷[020010010]"}
				,{"id":"020010012","text":"运费贷[020010012]"}
				,{"id":"020010015","text":"易鑫新车车贷[020010015]"}
				,{"id":"020010016","text":"易鑫二手车车贷[020010016]"}]
			
	$('#prodcd').select2({
		data : prodDict,
		allowClear : true
	});
	
	
	var handlerInsuclear = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		
		$('#prodcd').click(function(){
			var input = {};
			
			input.prodcd = $('#prodcd').val();
			input.dlkind = 1;
			
			Sunline.ajaxRouter(
		        	"ln/qrdcrt",
		        	input,
		        	"POST",
		            function(redata){
		        		if(redata.retCode=="0000"){
	        			$('#pecent').val(redata.dcrate);
	        			}else{
	        				bootbox.alert(redata.retMsg);
	        			}
		        	},
		        	function(redata){
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
		
		});
		
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			
			var input = {};
			input.bgdate = $('#bgdate').val();
			input.endate = $('#endate').val();
			input.pecent = $('#pecent').val();
			input.prodcd = $('#prodcd').val();
			input.dlkind = "1"; //操作类型：1、查询
			
			Sunline.ajaxRouter(
		        	"ln/qydcam",
		        	input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
	        			$('#pyshou').val(redata.pyshou);
	        			$('#estval').val(redata.estval);
	        			$('#dredbl').val(redata.dredbl);
	        			$('#diffam').val(redata.diffam);
	        			if(redata.diffam > 0){
	        				$('#sendmsg').attr("disabled",false);
	        			}
	        			else{
	        				$('#sendmsg').attr("disabled",true);
	        			}
	        			
	        			}else{
	        				bootbox.alert(redata.retMsg);
	        			}
		        	},
		        	function(redata){
		        		$('#select').attr("disabled",false);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
		});
		
		$('#sendmsg').click(function(){
			bootbox.confirm("确定要发送短信？", function(result) {
				if(!result){
					return;
				}
			
			$('#sendmsg').attr("disabled",true);
			
			var input = {};
			input.bgdate = $('#bgdate').val();
			input.endate = $('#endate').val();
			input.pecent = $('#pecent').val();
			input.prodcd = $('#prodcd').val();
			input.dlkind = "2"; //操作类型：2、发短信
			
			Sunline.ajaxRouter(
		        	"ln/qydcam",
		        	input,
		        	"POST",
		            function(redata){
		        		if(redata.retCode=="0000"){
	        			$('#pyshou').val(redata.pyshou);
	        			$('#estval').val(redata.estval);
	        			$('#dredbl').val(redata.dredbl);
	        			$('#diffam').val(redata.diffam);
	        			
	        			}else{
	        				bootbox.alert(redata.retMsg);
	        			}
		        	},
		        	function(redata){
		        		$('#sendmsg').attr("disabled",false);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); 
			});
		});
		
	};
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()