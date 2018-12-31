var clearfund =function(){
	var trantpDict=Sunline.getDict("clertp");
	var insubstDict=Sunline.getDict("clerst");
	var tpDict=[{"id":"1225","text":"大额[1225]"}
				,{"id":"1238","text":"小额[1238]"}
				,{"id":"1216","text":"超网[1216]"}
				,{"id":"1200","text":"包商[1200]"}]
	var _formartDict=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].id == value) {
                return dict[i].dictName;
              }
            }
	    return value;
	};
	$("#paychn").select2({data:tpDict});
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
		$('#trantp').select2("val","0");
		$('#trantp').on("change",function(e){
			console.info(e);
			$('#sucler').attr("disabled",true);
		});
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			$('#sucler').attr("disabled",false);
			if(Sunline.isNull($('#dealdt').val())){
				$('#select').attr("disabled",false);
				bootbox.alert("请选择日期！"); 
				return;
			}
			var input = {};
			input.micldt = $('#dealdt').val();
			input.micltp = $('#trantp').val();
			Sunline.ajaxRouter(
		        	"fund/getclearMi",
		        input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
		        			$('#tranam').val(redata.fundSetlle.totlam);
		        			$('#checkS').val(_formartDict(insubstDict,redata.fundSetlle.status));
		        			if(redata.fundSetlle.status=="0"){
		        				$('#sucler').attr("disabled",false);
		        			}else{
		        				$('#sucler').attr("disabled",true);
		        			}
	        			}else if(redata.retCode=="9999"){
	        				$('#tranam').val("0");
	        				$('#checkS').val();
	        				$('#sucler').attr("disabled",true);
	        			}else{
	        				//输入日期大于或等于服务器当前日期
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
			if(Sunline.isNull($('#paychn').val())){
				bootbox.alert("请选择汇款类型！"); 
				return;
			}
			if(Sunline.isNull($('#checkS').val()!="0")){
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
			input.trandt =  $('#dealdt').val();
			input.trantp =  $('#trantp').val();
			input.chnnal = $('#paychn').val();		//20160801  清算改造：增加汇款类型
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"fund/clearMi", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			$('#checkS').val("已清算");
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