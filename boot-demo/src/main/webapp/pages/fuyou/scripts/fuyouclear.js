
var clearfuyou =function(){
	
	var fycltpDict=Sunline.getDict("fycltp");
	var insubstDict=Sunline.getDict("E_DEALST");
	var inoutpDict=Sunline.getDict("E_CLERDR");
	
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
		
		$('#fycltp').select2({
			data:fycltpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		
		$('#fycltp').select2("val","01");
		
		$('#fycltp').on("change",function(e){
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
			input.clerdt = $('#dealdt').val();
			input.clertp = $('#fycltp').val();

			Sunline.ajaxRouter(
		        	"fuyou/qrfycl",
		        input,
		        	"POST",
		            function(data){
		        		$('#select').attr("disabled",false);
		        		$('#tranam').val(data.cleram);
		        		$('#clerst').val(_formartDict(insubstDict, data.clerst));
		        		$('#inoutp').val(_formartDict(inoutpDict, data.inoutp));
		        		if(data.clerst=="1"){
		        			$('#sucler').attr("disabled",false);
		        		}else{
		        			$('#sucler').attr("disabled",true);
		        		}
		        	},
		        	function(data){
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
			if(Sunline.isNull($('#clerst').val()!="0")){
				bootbox.alert("清算状态不能为空！"); 
				return;
			}
			
			var _status = _formartDict2(insubstDict,$('#clerst').val());
			if(_status!="1"){
				bootbox.alert("清算状态不正确！"); 
				return;
			}
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			$('#sucler').attr("disabled",true);
			var input = {};
			input.clerdt = $('#dealdt').val();
			input.clertp = $('#fycltp').val();
			input.cleram =  $('#tranam').val();
			input.clerdr =  _formartDict2(inoutpDict,$('#inoutp').val());
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"fuyou/clearfy", 
		         	 input,
		         	"POST",
		             function(data){
		         		if(data.retCode=="0000"){
		         			$('#clerst').val("已清算");
		         			bootbox.alert("清算成功");
		         			$('#sucler').attr("disabled",true);
		         		}else{
		         			$('#sucler').attr("disabled",false);
		         			bootbox.alert(data.retMsg);
		         		}
		         	},
		         	function(data){
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