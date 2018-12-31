var clearjjg =function(){
	var trantpDict=Sunline.getDict("clertp");
	var insubstDict=Sunline.getDict("clerst");
	var _formartDict=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].id == value) {
                return dict[i].dictName;
              }
            }
	    return value;
	};
	
	var _formartDict2=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].dictName == value) {
                return dict[i].id;
              }
            }
	    return value;
	};
	
	var handlerInsuclear = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		$('#trantp').select2({
			data:trantpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#checkS').select2({
			data:insubstDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#trantp').select2("val","0");
		$('#trantp').on("change",function(e){
			console.info(e);
			$('#sucler').attr("disabled",true);
		});
		$('#dealdt').on("change",function(e){
			console.info(e);
			$('#sucler').attr("disabled",true);
		});
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			if(Sunline.isNull($('#dealdt').val())){
				$('#select').attr("disabled",false);
				bootbox.alert("请选择日期！"); 
				return;
			}
			var input = {};
			input.dealdt = $('#dealdt').val();
			input.tacler = $('#trantp').val();

			Sunline.ajaxRouter(
		        	"fund/getclearJjg",
		        input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
		        			$('#tranam').val(redata.tranam);
		        			$('#checkS').select2("val",redata.checkS);
		        			console.info(redata);
		        			if("0"!=$('#checkS').val()){
								$("#sucler").attr('disabled',true);
							}else if("0"==$('#checkS').val()&&redata.tacler!="1"){
								$("#sucler").attr('disabled',true);
								bootbox.alert("还有正在赎回中的基金订单，请处理！");
							}else{
								$("#sucler").attr('disabled',false);
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
		$('#sucler').click(function(){
			
			if(Sunline.isNull($('#tranam').val())){
				bootbox.alert("请输入金额！"); 
				return;
			}
			if($('#tranam').val()=='0'){
				bootbox.alert("清算金额为0，无需清算！"); 
				return;
			}
			if($('#checkS').val()!="0"){
				bootbox.alert("清算状态不能为空！"); 
				return;
			}
			var _status = _formartDict2(insubstDict,$('#checkS').val());
			if(_status!="0"){
				bootbox.alert("清算状态不正确！"); 
				return;
			}
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			$('#sucler').attr("disabled",true);
			var input = {};
			input.tranam =  $('#tranam').val();
			input.dealdt =  $('#dealdt').val();
			input.clerdt =  $('#dealdt').val();
			input.trantp =  $('#trantp').val();
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"fund/clearJjg", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			$('#checkS').select2("val","1");
		         			bootbox.alert("清算成功");
		         			$('#sucler').attr("disabled",true);
		         		}else{
		         			$('#sucler').attr("disabled",false);
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		$('#sucler').attr("disabled",false);
		         		bootbox.alert("网络异常");
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