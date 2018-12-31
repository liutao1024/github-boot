var DamaiSettle = function(){
	var chkStatusDict = Sunline.getDict("state");
	var grid = new Datatable();
	var trandt = $('#trandt').val();
	$('#incler').attr("disabled",true);
	$('#oucler').attr("disabled",true);
	var loanam;
	var refdam;
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	//读取数据字典
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
            if (dict[i].dictId == value) {
            	return dict[i].dictName;
            }
          }
	    return value;
	};
	
	var handleFileUpload = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });  
        };
      	$('#submit').click(function(){
      		if(Sunline.isNull($('#trandt').val())){
				bootbox.alert("请选择查询日期！"); 
				return;
			}
      		//alert($('#trandt').val());
      		$("#myModal").modal('show');
      		var input = {};
    		var trandt = $('#trandt').val();
    		input.loanfile = '_loanck';
    		input.refdfile = '_refdck';
    		input.trandt = trandt;
    		Sunline.ajaxRouter(
            	"loan/damaidetail", 
            	input,
            	"POST",
                function(redata){
            		$("#myModal").modal('hide');
            		//读取数据区表
            		if(redata.retCode == '0000'){
            			var info = redata.infos;
            			console.info(info);
            			for(var i = 0;i<info.length;i++){
            				var status = info[i].status=='0'?"未清算":"已清算";
            				console.info("status:"+status);
            				if(info[i].trantp=='0'){
            					$('#loanam').text(info[i].totlam.toFixed(2)+"元");
            					loanam = info[i].totlam;
            					$('#inchek').val(status);
            					$('#incler').attr("disabled",info[i].status=='1' && info[i].trantp=='0');
            				} else if(info[i].trantp=='1'){
            					$('#refdam').text(info[i].totlam.toFixed(2)+"元");
            					refdam = info[i].totlam;
            					$('#ouchek').val(status);
            					$('#oucler').attr("disabled",info[i].status=='1' && info[i].trantp=='1');
            				}
            			}
            			console.info(redata.profit == null);
            			var prftam = 0;
            			if(redata.profit != null){
            				prftam = redata.profit.prftam;
            			}
            			grid.setAjaxParam("trandt",$('#trandt').val());
            			grid.submitFilter();
            		} else {
            			bootbox.alert(redata.retMsg);
            			//bootbox.alert("文件不存在");
            			$('#loanam').text("");
            			$('#refdam').text("");
            			loanam = "";
            			refdam = "";
            			grid.setAjaxParam("trandt",$('#trandt').val());
            			grid.submitFilter();
            		}
            	},
            	function(redata){
            		$("#myModal").modal('hide');
            		console.info(redata);
            		bootbox.alert("交易异常哦，请检查网络设置或重新登录"); 
            	},
            	"json",
            	false); 
        }); 
      	
      	$('#incler').click(function(){
			
			if(Sunline.isNull(loanam)){
				bootbox.alert("清算金额不能为空"); 
				return;
			}
      		if(Sunline.isNull($('#trandt').val())){
				bootbox.alert("日期不能为空！"); 
				return;
			}
			
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			$('#incler').attr("disabled",true);
			var input = {};
			input.tranam =  loanam;
			input.trandt =  $('#trandt').val();
			input.trantp =  '0';
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"loan/clear", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			$('#inchek').val("已清算");
		         			bootbox.alert("清算成功");
		         			$('#incler').attr("disabled",true);
		         		}else{
		         			$('#incler').attr("disabled",false);
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		$('#incler').attr("disabled",false);
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 	
			});		
		});
      	
      	$('#oucler').click(function(){
			
			if(Sunline.isNull(refdam)){
				bootbox.alert("清算金额不能为空"); 
				return;
			}
      		if(Sunline.isNull($('#trandt').val())){
				bootbox.alert("日期不能为空！"); 
				return;
			}
			
			bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			$('#oucler').attr("disabled",true);
			var input = {};
			input.tranam =  refdam;
			input.trandt =  $('#trandt').val();
			input.trantp =  '1';
			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"loan/clear", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			$('#ouchek').val("已清算");
		         			bootbox.alert("清算成功");
		         			$('#oucler').attr("disabled",true);
		         		}else{
		         			$('#oucler').attr("disabled",false);
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		$('#oucler').attr("disabled",false);
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 	
			});		
		});
      	
        var url = Sunline.ajaxPath("loan/getBillData");
        grid.setAjaxParam("trandt","");
      	grid.init({
	        src: $("#bill_ajax"),
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	//console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [
	         				{
	         					"data": "lncfno",
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "trantp",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		var _tp = "";
	         	            		if(data == "0"){
	         	            			_tp = "放款";
	         	            		}else if(data == "1"){
	         	            			_tp = "退票";
	         	            		}else{
	         	            			_tp = "未知";
	         	            		}
	         	            		return _tp;
	         	            	}
	         	            },{ 
	         	            	"data": "transq",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            },{ 
	         	            	"data": "trandt",
	         	            	"sortable": false,
//	         	            	"width": "200",
	         	            	"searchable": false
//	         	            	"render" : function(data,type,full){
//	         	            		return "11";
//	         	            	}
	         	            },{ 
	         	            	"data": "tranam",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		return formartM(data+"");
	         	            	}
	         	            },{ 
	         	            	"data": "transt",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		var _tp = "";
	         	            		if(data == "0"){
	         	            			_tp = "成功";
	         	            		}else if(data == "1"){
	         	            			_tp = "失败";
	         	            		}else{
	         	            			_tp = "未知";
	         	            		}
	         	            		return _tp;
	         	            	}
	         	            	
	         	            },{ 
	         	            	"data": "tranno",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            } ,{ 
	         	            	"data": "ordrid",
	         	            	"sortable": false,
	         	            	"searchable": false
         	            	} ,{ 
	         	            	"data": "timetm",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            } 
	                     ]
	        }
	        
	    });
	    };
	
	return {
		init : function(){
			handleFileUpload();
		}
	}
	
}()