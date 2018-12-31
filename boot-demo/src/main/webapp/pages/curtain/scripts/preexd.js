var preexd = function() {
	var E_LNIRKD = Sunline.getDict("E_LNIRKD");
	var E_IRRVTP = Sunline.getDict("E_IRRVTP");
	var E_IRFLTP = Sunline.getDict("E_IRFLTP");
	
	var handlePage = function() {
		var lnbacct = new Object();
		var qryValid =Sunline.getValidate(
				$("#task_form"),
				function() { 	   	    
					Sunline.ajaxRouter("curtain/qracct", {
						'lncfno' : $("#lncfno").val()
					}, 'post', function(ret) {
						if(ret.retCode == "0000"){
							$("#lncfno1").val(ret.lncfno);
							$("#acctno").val(ret.acctno);
							$("#acctna").val(ret.acctna);
							$("#prodna").val(ret.prodna);
							$("#lncfam").val(ret.lncfam);
							$("#lnnpbl").val(ret.lnnpbl);
							$("#instdt").val(ret.instdt);
							$("#matudt").val(ret.matudt);
							lnbacct.cntrno = ret.cntrno;
							lnbacct.custno = ret.custno;
							lnbacct.crcycd = ret.crcycd;
							//查询展期登记簿
							qrexpd();
						}
						else{
							bootbox.alert(ret.retMsg);
						}					
					}, function(ret) {
						bootbox.alert("网络异常");
					}, 'json', false);
					
				},{
					lncfno:{required : true , maxlength : 30},
				 }
		);
		$("#qry_btn").bind("click",function(){
			$("#task_form").submit();
		});
		
		var qrexpd = function() { 	   	    
			Sunline.ajaxRouter("curtain/qrexpd", {
				'lncfno' : $("#lncfno").val(),
				'loexst' : '2',
				'startt' : '0',
				'record' : '10'
			}, 'post', function(ret) {
				if(ret.retCode == "0000"){
					//recdsm == '0'表示不存在预约信息，则可以发起录入交易；否则表示存在，则只能发起取消交易
					if(ret.recdsm == '0'){
						$("#cancel_btn").attr("disabled","disabled");
						$("#submit_btn").removeAttr("disabled");
						$("#exctno").removeAttr("disabled");
						$("#expdam").removeAttr("disabled");
						$("#expddt").removeAttr("disabled");
						$("#exmtdt").removeAttr("disabled");
						$("#lnirkd").removeAttr("disabled");
						$("#lnrtir").removeAttr("disabled");
						$("#irrvtp").removeAttr("disabled");
						$("#irrvfm").removeAttr("disabled");
						$("#irfltp").removeAttr("disabled");
						$("#irflvl").removeAttr("disabled");
					}else{
						$("#submit_btn").attr("disabled","disabled");
						$("#cancel_btn").removeAttr("disabled");
						$("#exctno").val(ret.lnbexpdinfos[0].exctno);
            			$("#expdam").val(ret.lnbexpdinfos[0].expdam);
            			$("#expddt").val(ret.lnbexpdinfos[0].expddt);
            			$("#exmtdt").val(ret.lnbexpdinfos[0].exmtdt);
            			$("#lnirkd").val(ret.lnbexpdinfos[0].lnirkd).trigger("change");
            			$("#lnrtir").val(ret.lnbexpdinfos[0].lnrtir);
            			$("#irrvtp").val(ret.lnbexpdinfos[0].irrvtp).trigger("change");
            			$("#irrvfm").val(ret.lnbexpdinfos[0].irrvfm);
            			$("#irfltp").val(ret.lnbexpdinfos[0].irfltp).trigger("change");
            			$("#irflvl").val(ret.lnbexpdinfos[0].irflvl);
						$("#exctno").attr("disabled","disabled");
						$("#expdam").attr("disabled","disabled");
						$("#expddt").attr("disabled","disabled");
						$("#exmtdt").attr("disabled","disabled");
						$("#lnirkd").attr("disabled","disabled");
						$("#lnrtir").attr("disabled","disabled");
						$("#irrvtp").attr("disabled","disabled");
						$("#irrvfm").attr("disabled","disabled");
						$("#irfltp").attr("disabled","disabled");
						$("#irflvl").attr("disabled","disabled");
					}
				}
				else{
					bootbox.alert(ret.retMsg);
				}
			}, function(ret) {
				bootbox.alert("网络异常");
			}, 'json', false);
			
		};
		
		var subValid =Sunline.getValidate(
				$("#preexd_form"),
				function() { 	   	    
					Sunline.ajaxRouter("curtain/preexd", {
						'lncfno' : $("#lncfno").val(),
						'exctno' : $("#exctno").val(),
						'opratp' : '3',
						'expddt' : $("#expddt").val(),
						'exmtdt' : $("#exmtdt").val(),
						'expdam' : $("#expdam").val(),
						'lnirkd' : $("#lnirkd").val(),
						'lnrtir' : $("#lnrtir").val(),
						'irrvtp' : $("#irrvtp").val(),
						'irrvfm' : $("#irrvfm").val(),
						'irfltp' : $("#irfltp").val(),
						'irflvl' : $("#irflvl").val(),
						'acctno' : $("#acctno").val(),
						'cntrno' : lnbacct.cntrno,
						'custno' : lnbacct.custno,
						'acctna' : $("#acctna").val(),
						'crcycd' : lnbacct.crcycd,
						'isclyy' : lnbacct.isclyy
					}, 'post', function(ret) {
						if(ret.retCode == "0000"){
							var info;
							if(lnbacct.isclyy == '0'){
								info = "预约展期录入成功";
							}else{
								info = '预约展期取消成功';
							}
		            		bootbox.alert(info, function() {
		            			$("#exctno").val("");
		            			$("#expdam").val("");
		            			$("#expddt").val("");
		            			$("#exmtdt").val("");
		                        $("#lnirkd").val("").trigger("change");
		            			$("#lnrtir").val("");
		            			$("#irrvtp").val("").trigger("change");
		            			$("#irrvfm").val("");
		            			$("#irfltp").val("").trigger("change");
		            			$("#irflvl").val("");
		                    }); 
						}
						else{
							bootbox.alert(ret.retMsg);
						}					
					}, function(ret) {
						bootbox.alert("网络异常");
					}, 'json', false);
					
				},{
					exctno:{required : true , maxlength : 30},
					expdam:{required : true , maxlength : 30},
					expddt:{required : true , maxlength : 8},
					exmtdt:{required : true , maxlength : 8},
					lnirkd:{required : true , maxlength : 30},
					lnrtir:{required : true , maxlength : 30},
					irrvtp:{required : true , maxlength : 30},
					irrvfm:{required : true , maxlength : 30},
					irfltp:{required : true , maxlength : 30},
					irflvl:{required : true , maxlength : 30},
				 }
		);
		$("#submit_btn").bind("click",function(){
			//赋值预约展期是否取消标志，否
			lnbacct.isclyy = '0';
			$("#preexd_form").submit();
		});
		$("#cancel_btn").bind("click",function(){
			//赋值预约展期是否取消标志，是
			lnbacct.isclyy = '1';
			var confirmMessage = "确定要执行预约展期取消吗？";
			bootbox.confirm(confirmMessage, function(result) {
            	if(!result){
            		return;
            	}
    			$("#preexd_form").submit();
            });
		});
		$("#lnirkd").select2({
			data : E_LNIRKD,
			allowClear : true
		});
		$("#irrvtp").select2({
			data : E_IRRVTP,
			allowClear : true
		});
		$("#irfltp").select2({
			data : E_IRFLTP,
			allowClear : true
		});
		// 时间插件
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
	}
	return {
		init : function(){
			handlePage();
		}
	}
}();