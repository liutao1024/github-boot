var quyvat =function(){
	var _formartDict=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].id == value) {
                return dict[i].dictName;
              }
            }
	    return value;
	};
	$("input[name='amntcd']").select2({
		data :[{id:'C',text:'贷方[C]'},{id:'D',text:'借方[D]'},{id:'P',text:'付方[P]'},{id:'R',text:'收方[R]'},{id:'M',text:'备忘[M]'}],
		allowClear : true
	});

	
	var handler = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		$('#submit').click(function(){
			$('#submit').attr("disabled",true);
			if(Sunline.isNull($('#trandt').val())){
				$('#submit').attr("disabled",false);
				bootbox.alert("请选择日期！"); 
				return;
			}
			if(Sunline.isNull($('#transq').val())){
				$('#submit').attr("disabled",false);
				bootbox.alert("请输入交易流水！"); 
				return;
			}
			var input = {};
			input.trandt_0 = $('#trandt').val();
			input.transq_0 = $('#transq').val();
			Sunline.ajaxRouter(
		        	"vat/findvatx",
		        input,
		        	"POST",
		            function(redata){
		        		$('#submit').attr("disabled",false);
		        		if(redata.retCode=="0000"){
		        			$('#trandt_1').val(redata.trandt);
		        			$('#m_trandt').val(redata.trandt);
		        			$('#transq_1').val(redata.transq);
		        			$('#m_transq').val(redata.transq);
		        			$('#amntcd').select2("val",redata.amntcd);
		        			$('#itemcd').val(redata.itemcd);
		        			$('#m_itemcd').val(redata.itemcd);
		        			$('#crcycd').val(redata.crcycd);
		        			$('#tranam').val(redata.tranam);
		        			$('#m_tranam').val(redata.tranam);
		        			$('#extamt').val(redata.extamt);
		        			$('#m_extamt').val(redata.extamt);
		        			$('#taxamt').val(redata.taxamt);
		        			$('#m_taxamt').val(redata.taxamt);
		        			if(redata.strktp="Y"){
		        				$('#strktp').val("是");
		        			}else if(redata.strktp="N"){
		        				$('#strktp').val("否");
		        			}
		        			$('#retrsq').val(redata.retrsq);
		        			$('#retrdt').val(redata.retrdt);//opacno
		        			$('#hxjzsq').val(redata.hxjzsq);
		        			$('#opacno').val(redata.opacno);//
		        			$('#m_opacno').val(redata.opacno);//
		        			$('#taxret').val(redata.taxret);
		        			$('#m_taxret').val(redata.taxret);
		        			if(Sunline.isNull($('#transq').val())){
		        				
		    	        	}else{
		    	        		$("#deaing").removeAttr("disabled");
		    	        		
		    	        	}
	        			}else if(redata.retCode=="9999"){

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
		$('#deaing').click(function(){
			$("#editModal").modal('show');
		});
		
		$('#delvat').click(function(){
			
			if(Sunline.isNull($('#m_tranam').val())){
				bootbox.alert("请输入交易金额(含税额)！"); 
				return;
			}
			if(Sunline.isNull($('#m_extamt').val())){
				bootbox.alert("请输入交易金额(不含税额）！"); 
				return;
			}
			if(Sunline.isNull($('#m_taxamt').val()!="0")){
				bootbox.alert("请输入税额！"); 
				return;
			}
			bootbox.confirm("确定要冲正？", function(result) {
            	if(!result){
            		return;
            	}
			$('#delvat').attr("disabled",true);
			var input = {};
			input.tranam =  $('#m_tranam').val();
			input.extamt =  $('#m_extamt').val();
			input.taxamt =  $('#m_taxamt').val();
			input.transq_2 = $('#m_transq').val();
			input.opacno = $('#m_opacno').val();
			input.trandt_2 = $('#m_trandt').val();
			input.taxret = $('#m_taxret').val();
			input.itemcd = $('#m_itemcd').val();
			Sunline.ajaxRouter(
		         	"vat/dealvat", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			bootbox.alert("清算成功");
		         			$('#delvat').attr("disabled",true);
		         		}else{
		         			$('#delvat').attr("disabled",false);
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(delvat){
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
			handler();
		}
	}
}()