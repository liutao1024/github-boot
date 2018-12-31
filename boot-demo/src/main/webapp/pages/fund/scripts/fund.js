var Fund = function(){
	var formartM = function(value){
		console.info("==========|"+value);
		value = value.toString();
		if(value.toString().indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	var handlerPrc = function(){
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN'
	        });
	        //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
	    };
		
		$('#account').attr('disabled','disabled');
		$('#submit').click(function(){
			
			var dealdt = $('#dealdt').val();
			
			if(Sunline.isNull(dealdt)){
				bootbox.alter("请选择日期！");
				return;
			}
			
			var input = {};
			input.dealdt = dealdt;
			input.file = 'fund_loaning_profit_check_005_058005_';
			Sunline.ajaxRouter(
		         	"fund/getInfo", 
		         	 input,
		         	"POST",
		             function(redata){
		         		//success func
		         		//console.info("success:",redata);
		         		if(redata.retCode=='0000'){
		         			$('#dealdt1').val(redata.profit.dealdt);
		         			$('#tranam').val(formartM(redata.profit.prftam));
		         			$('#status').val(redata.profit.chekst=='N'?'未入账':'已入账');
		         			if(redata.profit.chekst=='N'){
		         				console.info("NNNNNNNNNNNNNNNN");
		         				$('#account').removeAttr('disabled');
		         			} else {
		         				console.info("YYYYYYYYYYYYYYYY");
		         				$('#account').attr('disabled',true);
		         			}
		         		} else {
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		//console.info("error:",redata);
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		 $('#account').click(function(){
             bootbox.confirm("确定要入账？", function(result) {
     if(!result){
             return;
     } else {

             var dealdt = $('#dealdt1').val();
             var input = {};
             input.dealdt = dealdt;
             Sunline.ajaxRouter(
                     "fund/dealInfo",
                      input,
                     "POST",
                  function(redata){
                             //success func
                             //console.info("success:",redata);
                             if(redata.retCode=='0000'){
                                     $('#status').val('已入账');
                                     $('#account').attr('disabled',true);
                                     bootbox.alert("入账处理完成！");
                             } else {
                                     bootbox.alert(redata.retMsg);
                             }
                     },
                     function(redata){
                             //console.info("error:",redata);
                             bootbox.alert("网络异常");
                     },
                     "json",
                     false);
     }
             });
     });
	}
	return {
		init : function(){
			handlerPrc();
		}
	}
}()