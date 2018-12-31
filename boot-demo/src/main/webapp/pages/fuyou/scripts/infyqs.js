var infyqs =function(){
	var inoutpDict=Sunline.getDict("E_INOUTP");
	var _formartDict=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].id == value) {
                return dict[i].dictName;
              }
            }
	    return value;
	};
	
	var handlerInsuclear = function(){
		$('#inoutp').select2({
			data:inoutpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#sucler').click(function(){
			
			if(Sunline.isNull($('#tranam').val())){
				bootbox.alert("请输入金额！"); 
				return;
			}
			if(Sunline.isNull($('#inoutp').val()!="0")){
				bootbox.alert("清算类型不能为空！"); 
				return;
			}
			
//			var _status = _formartDict(insubstDict,$('#inoutp').val());
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			$('#sucler').attr("disabled",true);
			var input = {};
			input.tranam =  $('#tranam').val();
			input.inoutp =  $('#inoutp').val();
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"fuyou/clearfy", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
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