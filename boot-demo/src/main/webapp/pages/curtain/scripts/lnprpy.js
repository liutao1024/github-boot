var lnprpy = function() {
	//贷款提前还款
	var E_REPYTP = Sunline.getDict("E_REPYTP");
	var E_ADRPTP = Sunline.getDict("E_ADRPTP");
	var E_EPCHPL = Sunline.getDict("E_EPCHPL");
	var E_CRCYCD = Sunline.getDict("E_CRCYCD");
	//增加下拉框
	$("input[name='paytyp']").select2({
		data :[{id:'1',text:'借记卡[1]'},{id:'2',text:'代偿户[2]'},{id:'3',text:'有氧账户[3]'}],
		allowClear : true
	});
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
          }
	    return value;
	};
	
	var _formartDictId = function(dict,id){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictId == id) {
              return '['+id+']'+dict[i].dictName;
            }
          }
	    return value;
	}
	var handlePage = function() {
		
//		$("#repytp").select2({
//			data : E_REPYTP,
//			allowClear : true
//		});
//		$("#adrptp").select2({
//			data : E_ADRPTP,
//			allowClear : true
//		});
//		$("#epchpl").select2({
//			data : E_EPCHPL,
//			allowClear : true
//		});
		
		var lnbacct = new Object();
		
		var retQracctInfo = null;//贷款信息
		var retXmqrtqInfo = null;//代扣信息
		var retPmtralInfo = null;//还款试算信息
		
		$('#acctno1').blur(function(){
			if($("#acctno1").val()==''){
				return;
			}
			//回显贷款信息
			Sunline.ajaxRouter("curtain/qracct", {
				'acctno' : $("#acctno1").val()
			}, 'post', function(ret) {
				if(ret.retCode == "0000"){
					
					retQracctInfo = ret;//贷款信息
					
					$("#lncfno").val(ret.lncfno);
					$("#cntrno").val(ret.cntrno);
					$("#acctna").val(ret.acctna);
					$("#crcycd").val(_formartDictId(E_CRCYCD,ret.crcycd));
					$("#repacc").val(ret.custno);
					$("#repyam").val(ret.lncfam);
				}
				else{
					bootbox.alert(ret.retMsg);
				}					
			}, function(ret) {
				bootbox.alert("网络异常");
			}, 'json', false);
			
		});
			
		$("#deal").bind("click",function(){
			//查询借款信息
			Sunline.ajaxRouter("fc/xmqrtq", {
				'lncfno' : $("#acctno1").val()
			}, 'post', function(ret2) {
				if(ret2.retCode == "0000"){
					retXmqrtqInfo = ret2;//代扣信息
				}
				else{
					bootbox.alert("实际扣款总额查询失败！");//test
				}					
			}, function(ret2) {
				bootbox.alert("网络异常");
			}, 'json', false);
			
			//提前还款试算
			Sunline.ajaxRouter("fc/pmtral", {
				'lncfno' : $("#acctno1").val(),
			}, 'post', function(ret) {
				if(ret.retCode == "0000"){
					retPmtralInfo = ret;//还款试算返回信息
					$("#acctno").val($("#acctno1").val());
					$("#lncfno1").val($("#acctno1").val());
					$("#acctna1").val(retXmqrtqInfo.custna);//xmqrtq
					$("#repyam1").val(formartM(retQracctInfo.lncfam+''));//qracct
					$("#lnnpbl").val(formartM(retPmtralInfo.lnnpbl+''));//pmtral
					$("#initin").val(formartM(retPmtralInfo.initin+''));
					$("#ysxxfe").val(formartM(retPmtralInfo.ysxxfe+''));
					$("#totalm").val(formartM(retPmtralInfo.totalm+''));
					$("#resvam").val(formartM(retXmqrtqInfo.resvam+''));//xmqrtq
					//当实际扣款总额大于借据总金额时，可提前还款
						if(parseFloat(retXmqrtqInfo.resvam) - parseFloat(retPmtralInfo.totalm)<0){
						//	$("#submit_btn").addClass("disabled");
						}
						$("#submit_btn").removeAttr("disabled");//test
				}
				else{
					bootbox.alert(ret.retMsg);
				}
			}, function(ret) {
				bootbox.alert("网络异常");
			}, 'json', false);
			
			
			
		});
		
		$("#submit_btn").bind("click",function(){
//			Sunline.ajaxRouter("fc/xmprpy", {
//				'lncfno' : $("#acctno1").val(),
//				'repacc' : "5111622222220002",
//				'adpytp' : "2",//"ZDZE","2","指定总额"
//				'repyam' : retPmtralInfo.totalm,//(总金额)还款金额
//				'repytp' : "3",//"TQHK","3","提前还款"
//				'servno' : "GL"
//				
//			}, 'post', function(ret) {
//				$("#submit_btn").addClass("disabled");
//				if(ret.retCode == "0000"){
//					bootbox.alert("提前还款成功！");
//				}
//				else{
//					bootbox.alert(ret.retMsg);
//				}
//			}, function(ret) {
//				bootbox.alert("网络异常");
//			}, 'json', false);
			var data={};
			data.lncfno=$("#lncfno").val();//贷款借据号
			data.crcycd=retQracctInfo.crcycd;//币种
			data.repyam=$("#totalm").val();//应扣金额
			data.paytyp=$("#paytyp").val();//还款账号种类
		Sunline.ajaxRouter("fc/xmbgpy",data,'post',function(redata){
			$("#submit_btn").addClass("disabled");
			if(redata.retCode == '0000'){
				bootbox.alert("提前还款成功！");
			}
			else{
				bootbox.alert(redata.retMsg);
			}
			
			},function(redata){
				bootbox.alert("网络异常");
			},"json",false);
		});
		
//		$("#deal").bind("click",function(){
//			Sunline.ajaxRouter("loan/qrepsc", {
//				'acctno' : $("#acctno1").val(),
//				'repytp' : $('#repytp').select2("val"),
//				'adrptp' : $('#adrptp').select2("val"),
//				'epchpl' : $('#epchpl').select2("val")
//			}, 'post', function(ret) {
//				if(ret.retCode == "0000"){
//					$("#acctno").val(ret.acctno);
//					$("#lncfno1").val(ret.lncfno);
//					$("#acctna1").val(ret.acctna);
//					$("#prevdt").val(ret.prevdt);
//					$("#schdtp").val(ret.schdtp);
//					$("#repyam1").val(ret.repyam1);
//					$("#lncfam").val(ret.lncfam);
//					$("#leavtm").val(ret.leavtm);
//					$("#lnrtir").val(ret.lnrtir);
//				}
//				else{
//					bootbox.alert(ret.retMsg);
//				}
//			}, function(ret) {
//				bootbox.alert("网络异常");
//			}, 'json', false);
//			
//		});
//		
//		var qrexpd = function() { 	   	    
//			Sunline.ajaxRouter("curtain/qrexpd", {
//				'lncfno' : $("#lncfno").val(),
//				'loexst' : '2',
//				'startt' : '0',
//				'record' : '10'
//			}, 'post', function(ret) {
//				if(ret.retCode == "0000"){
//					//recdsm == '0'表示不存在预约信息，则可以发起录入交易；否则表示存在，则只能发起取消交易
//					if(ret.recdsm == '0'){
//						$("#cancel_btn").attr("disabled","disabled");
//						$("#submit_btn").removeAttr("disabled");
//						$("#exctno").removeAttr("disabled");
//						$("#expdam").removeAttr("disabled");
//						$("#expddt").removeAttr("disabled");
//						$("#exmtdt").removeAttr("disabled");
//						$("#lnirkd").removeAttr("disabled");
//						$("#lnrtir").removeAttr("disabled");
//						$("#irrvtp").removeAttr("disabled");
//						$("#irrvfm").removeAttr("disabled");
//						$("#irfltp").removeAttr("disabled");
//						$("#irflvl").removeAttr("disabled");
//					}else{
//						$("#submit_btn").attr("disabled","disabled");
//						$("#cancel_btn").removeAttr("disabled");
//						$("#exctno").val(ret.lnbexpdinfos[0].exctno);
//            			$("#expdam").val(ret.lnbexpdinfos[0].expdam);
//            			$("#expddt").val(ret.lnbexpdinfos[0].expddt);
//            			$("#exmtdt").val(ret.lnbexpdinfos[0].exmtdt);
//            			$("#lnirkd").val(ret.lnbexpdinfos[0].lnirkd).trigger("change");
//            			$("#lnrtir").val(ret.lnbexpdinfos[0].lnrtir);
//            			$("#irrvtp").val(ret.lnbexpdinfos[0].irrvtp).trigger("change");
//            			$("#irrvfm").val(ret.lnbexpdinfos[0].irrvfm);
//            			$("#irfltp").val(ret.lnbexpdinfos[0].irfltp).trigger("change");
//            			$("#irflvl").val(ret.lnbexpdinfos[0].irflvl);
//						$("#exctno").attr("disabled","disabled");
//						$("#expdam").attr("disabled","disabled");
//						$("#expddt").attr("disabled","disabled");
//						$("#exmtdt").attr("disabled","disabled");
//						$("#lnirkd").attr("disabled","disabled");
//						$("#lnrtir").attr("disabled","disabled");
//						$("#irrvtp").attr("disabled","disabled");
//						$("#irrvfm").attr("disabled","disabled");
//						$("#irfltp").attr("disabled","disabled");
//						$("#irflvl").attr("disabled","disabled");
//					}
//				}
//				else{
//					bootbox.alert(ret.retMsg);
//				}
//			}, function(ret) {
//				bootbox.alert("网络异常");
//			}, 'json', false);
//			
//		};
//		
//		var subValid =Sunline.getValidate(
//				$("#lnprpy_form"),
//				function() { 	   	    
//					Sunline.ajaxRouter("curtain/lnprpy", {
//						'lncfno' : $("#lncfno").val(),
//						'exctno' : $("#exctno").val(),
//						'opratp' : '3',
//						'expddt' : $("#expddt").val(),
//						'exmtdt' : $("#exmtdt").val(),
//						'expdam' : $("#expdam").val(),
//						'lnirkd' : $("#lnirkd").val(),
//						'lnrtir' : $("#lnrtir").val(),
//						'irrvtp' : $("#irrvtp").val(),
//						'irrvfm' : $("#irrvfm").val(),
//						'irfltp' : $("#irfltp").val(),
//						'irflvl' : $("#irflvl").val(),
//						'acctno' : $("#acctno").val(),
//						'cntrno' : lnbacct.cntrno,
//						'custno' : lnbacct.custno,
//						'acctna' : $("#acctna").val(),
//						'crcycd' : lnbacct.crcycd,
//						'isclyy' : lnbacct.isclyy
//					}, 'post', function(ret) {
//						if(ret.retCode == "0000"){
//							var info;
//							if(lnbacct.isclyy == '0'){
//								info = "预约展期录入成功";
//							}else{
//								info = '预约展期取消成功';
//							}
//		            		bootbox.alert(info, function() {
//		            			$("#exctno").val("");
//		            			$("#expdam").val("");
//		            			$("#expddt").val("");
//		            			$("#exmtdt").val("");
//		                        $("#lnirkd").val("").trigger("change");
//		            			$("#lnrtir").val("");
//		            			$("#irrvtp").val("").trigger("change");
//		            			$("#irrvfm").val("");
//		            			$("#irfltp").val("").trigger("change");
//		            			$("#irflvl").val("");
//		                    }); 
//						}
//						else{
//							bootbox.alert(ret.retMsg);
//						}					
//					}, function(ret) {
//						bootbox.alert("网络异常");
//					}, 'json', false);
//					
//				},{
//					exctno:{required : true , maxlength : 30},
//					expdam:{required : true , maxlength : 30},
//					expddt:{required : true , maxlength : 8},
//					exmtdt:{required : true , maxlength : 8},
//					lnirkd:{required : true , maxlength : 30},
//					lnrtir:{required : true , maxlength : 30},
//					irrvtp:{required : true , maxlength : 30},
//					irrvfm:{required : true , maxlength : 30},
//					irfltp:{required : true , maxlength : 30},
//					irflvl:{required : true , maxlength : 30}
//				 }
//		);
//		$("#submit_btn").bind("click",function(){
//			//赋值预约展期是否取消标志，否
//			lnbacct.isclyy = '0';
//			$("#lnprpy_form").submit();
//		});
		
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