var qrdcrt =function(){
	
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
                format : "yyyymm",
    			startView : "year",
    			minViewMode : "months"
            });
		}
		
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			
			var input = {};
			if(Sunline.isNull($('#stardt').val())){
				bootbox.alert("开始日期不能为空！"); 
				$('#select').attr("disabled",false);
				return;
			}
			if(Sunline.isNull($('#endxdt').val())){
				bootbox.alert("结束日期不能为空！"); 
				$('#select').attr("disabled",false);
				return;
			}
			input.stardt = $('#stardt').val()+'01';
			input.endxdt = $('#endxdt').val()+'01';
			input.prodcd = $('#prodcd').val();
			input.dlkind = 2;
			
			Sunline.ajaxRouter(
		        	"ln/qrdcrt",
		        	input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
	        			$('#dcsuam').val(redata.dcsuam);
	        			$('#mtyham').val(redata.mtyham);
	        			$('#dcrate').val(redata.dcrate);
	        			
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