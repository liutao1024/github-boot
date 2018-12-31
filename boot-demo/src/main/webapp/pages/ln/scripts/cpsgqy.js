var cpsgqy =function(){

	var prodDict=[{"id":"020010002","text":"萨摩耶代偿[020010002]"}
				,{"id":"020010008","text":"小马助贷-非农贷消费贷[020010008]"}
				,{"id":"020010009","text":"小马助贷-非农贷[020010009]"}
				,{"id":"020010010","text":"小马助贷-农贷[020010010]"}
				,{"id":"020010012","text":"运费贷[020010012]"}
				,{"id":"020010015","text":"易鑫新车车贷[020010015]"}
				,{"id":"020010016","text":"易鑫二手车车贷[020010016]"}]
	
	$("input[name='prodcd']").select2({
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
		
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			
			var input = {};
			input.prodcd = $('#prodcd').val();
			
			Sunline.ajaxRouter(
		        	"ln/cpsgqy",
		        	input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
	        			$('#prodcd2').val(redata.prodcd);
	        			$('#prodna').val(redata.prodna);
	        			$('#trandt').val(redata.trandt);
	        			$('#totamo').val(redata.totamo);
	        			$('#alreim').val(redata.alreim);
	        			$('#hvreim').val(redata.hvreim);
	        			$('#cpstam').val(redata.cpstam);
	        			$('#btotam').val(redata.btotam);
	        			
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
		
	};
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()