var Qydiff = function(){
	//
	var grid = new Datatable();
	var _type = "0";
	//
	var procfgDict=Sunline.getDict("E_PROCFG");
	var ioflagDict=Sunline.getDict("U_IOFLAG");
	var difftpDict=Sunline.getDict("D_DIFFTP");
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	var fromtpDict=[{"id":"4","text":"二代大额支付"},{"id":"5","text":"二代小额支付"},{"id":"6","text":"二代超级网银"}];
	//
	var formartDict = function(dict,value){
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
	//
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		}else {
			return value;
		}
	};
	
	//弹出窗口下拉框
	//主页面下拉框
	$("#procfg").select2({//是否差错处理标志
		data : procfgDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	$("#fromtp").select2({data:fromtpDict});
	
	$("#th_procfg").select2({//是否差错处理标志
		data : procfgDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#th_ioflag").select2({//出入金标志
		data : ioflagDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#th_difftp").select2({//差错类型
		data : difftpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	$("#th_crcycd").select2({//币种
		data : crcycdDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	//查询主页面
	var handlerTable = function(){
		var editForm = function(nRowA){
		};
		var url = Sunline.ajaxPath("curtain/qydiff");
		
		$('#fromtp').select2("val","5");
		grid.setAjaxParam("chckdt",$('#chckdt').val());
		grid.setAjaxParam("procfg",$('#procfg').select2("val"));
		grid.setAjaxParam("fromtp",$('#fromtp').select2("val"));
		grid.init({
	        src: $("#cif_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {	      
	        	console.info("It is error!");
	        },
	        dataTable: { 
	        	
	            "ajax": {
	                "url": url, 
	              
	            },
	            "aoColumns" : [{ 
		            	"mDataProp": "servno",
		            	"bSortable": false,
		            	"searchable": false
		            },{     
		            	"data": "servsq",
		            	"sortable": false,
		            	"searchable": false
		            },{ //对账日期
		            	"data": "keepdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ //出入金方式
		            	"data": "fromtp",
		            	"sortable": false,
		            	"searchable": false,
						"render" : function(data,type,full){
							for(var i=0 ; i<fromtpDict.length ; i++){
		            			if(data == fromtpDict[i].id){
		            				return fromtpDict[i].text;
		            			}
		            		}
		            		return data;
		            	}
		            },{ //出入金标志
		            	"data": "ioflag",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartDict(ioflagDict,data);
		            	}
		            },{ //交易日期
		            	"data": "trandt",
		            	"sortable": false,
		            	"searchable": false
		            },{ //交易流水
		            	"data": "transq",
		            	"sortable": false,
		            	"searchable": false
		            },{ //交易帐号
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },{ //客户名称
		            	"data": "acctna",
		            	"sortable": false,
		            	"searchable": false
		            },{ //发起行行号
		            	"data": "bankno",
		            	"sortable": false,
		            	"searchable": false
		            },{ //卡号
		            	"data": "cardno",
		            	"sortable": false,
		            	"searchable": false
		            },{ //交易金额
		            	"data": "tranam",
		            	"sortable": false,
		            	"searchable": false
		            },{ //币种
		            	"data": "crcycd",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartDict(crcycdDict,data);
		            	}
		            },{ //差错类型
		            	"data": "difftp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartDict(difftpDict,data);
		            	}
		            },{ //是否完成差错处理
		            	"data": "procfg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartDict(procfgDict,data);
		            	}
		            },{ //入金退汇
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		if (full.ioflag == "I" && full.procfg == "0") {
		            			return "<a class='qryLastBill1' href='javascript:;' data-src='" +  
			            		data.servno + "," + data.servsq + "," + data.keepdt + "," + data.fromtp + "," + data.ioflag + "," + 
			            		data.trandt + "," + data.transq + "," + data.acctno + "," + data.acctna + "," + data.bankno + "," + 
			            		data.cardno + "," + data.tranam + "," + data.crcycd + "," + data.difftp + "," + data.procfg + "," + "'>入金退汇</a>";
							}else if(full.ioflag == "I" && full.procfg == "1"){
								return "<a class='tuihui1' href='javascript:;' data-src='" + data.servno + "'>入金退汇</a>"
							}
		            		
		            		return "<a class='tuihui2' href='javascript:;' data-src='" + data.servno + "'>入金退汇</a>";
		            	}
		            },{ //维护入账
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		if (full.ioflag == "I" && full.procfg == "0") {
		            			return "<a class='qryLastBill2' href='javascript:;' data-src='" +  
			            		data.servno + "," + data.servsq + "," + data.keepdt + "," + data.fromtp + "," + data.ioflag + "," + 
			            		data.trandt + "," + data.transq + "," + data.acctno + "," + data.acctna + "," + data.bankno + "," + 
			            		data.cardno + "," + data.tranam + "," + data.crcycd + "," + data.difftp + "," + data.procfg + "," + "'>维护入账</a>";
							}else if(full.ioflag == "I" && full.procfg == "1"){
								return "<a class='ruzhang1' href='javascript:;' data-src='" + data.servno + "'>维护入账</a>"
							}
		            		
		            		return "<a class='ruzhang2' href='javascript:;' data-src='" + data.servno + "'>维护入账</a>";
		            	}
		            },{ //出金冲账
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		if (full.ioflag == "O" && full.procfg == "0") {
		            			return "<a class='qryLastBill3' href='javascript:;' data-src='" +  
			            		data.servno + "," + data.servsq + "," + data.keepdt + "," + data.fromtp + "," + data.ioflag + "," + 
			            		data.trandt + "," + data.transq + "," + data.acctno + "," + data.acctna + "," + data.bankno + "," + 
			            		data.cardno + "," + data.tranam + "," + data.crcycd + "," + data.difftp + "," + data.procfg + "," + "'>出金冲账</a>";
							}else if(full.ioflag == "O" && full.procfg == "1"){
								return "<a class='chongzheng1' href='javascript:;' data-src='" + data.servno + "'>出金冲账</a>";
							}
		            		
		            		return "<a class='chongzheng2' href='javascript:;' data-src='" + data.servno + "'>出金冲账</a>";
		            	}
		            }
	            ]
	        }
	       
	    });	
		var sendData = ["servno","servsq","keepdt","fromtp","ioflag","trandt","transq","acctno","acctna","bankno","cardno","tranam","crcycd","difftp","procfg"];
		
		/**绑定点击事件*/
		//入金退汇 按钮绑定弹窗事件
        grid.addBindEvent(".qryLastBill1", "click", sendData,
				function(data) {
        	_type = "1";
        	showInfo(data);
		});
        grid.addBindEvent(".tuihui1", "click", sendData,
				function(data) {		
        	bootbox.alert("已完成差错处理，无需再次处理");
		});
        grid.addBindEvent(".tuihui2", "click", sendData,
				function(data) {		
        	bootbox.alert("标识为出金，无法进行此处理");
		});
        //维护入账 按钮绑定弹窗事件
        grid.addBindEvent(".qryLastBill2", "click", sendData,
				function(data) {
        	_type = "2";
        	showInfo(data);
		});
        grid.addBindEvent(".ruzhang1", "click", sendData,
				function(data) {		
        	bootbox.alert("已完成差错处理，无需再次处理");
		});
        grid.addBindEvent(".ruzhang2", "click", sendData,
				function(data) {		
        	bootbox.alert("标识为出金，无法进行此处理");
		});
        //出金冲账
        grid.addBindEvent(".qryLastBill3", "click", sendData,
				function(data) {
        	_type = "3";
        	showInfo(data);
		});
        grid.addBindEvent(".chongzheng1", "click", sendData,
				function(data) {		
        	bootbox.alert("已完成差错处理，无需再次处理");
		});
        grid.addBindEvent(".chongzheng2", "click", sendData,
				function(data) {		
        	bootbox.alert("标识为入金，无法进行此处理");
		});
		//主页面查询
		$('#mainSubmit').click(function(){
			grid.setAjaxParam("chckdt",$('#chckdt').val());
			grid.setAjaxParam("procfg",$('#procfg').select2("val"));
			grid.setAjaxParam("fromtp",$('#fromtp').select2("val"));
			grid.submitFilter();
		});
		//主页面取消
		$('#mainCancle').click(function(){
			$('#chckdt').val("");
			$('#procfg').select2("val","");
			//$('#fromtp').select2("val","");
		});
		
		//弹出窗口
		var showInfo = function(date) {//给页面控件赋值
			$('#th_servno').val(date.servno);
			$('#th_servsq').val(date.servsq);
			$('#th_keepdt').val(date.keepdt);
			$('#th_ioflag').val(date.ioflag);
			$('#th_ioflag').select2({data:ioflagDict});
			$('#th_trandt').val(date.trandt);
			$('#th_fromtp').val(date.fromtp);
			$('#th_fromtp').select2({data:fromtpDict});
			$('#th_transq').val(date.transq);
			$('#th_acctno').val(date.acctno);
			$('#th_acctna').val(date.acctna);
			$('#th_bankno').val(date.bankno);
			$('#th_cardno').val(date.cardno);
			$('#th_tranam').val(date.tranam);
			$('#th_crcycd').val(date.crcycd);
			$('#th_crcycd').select2({data:crcycdDict});
			$('#th_difftp').val(date.difftp);
			$('#th_difftp').select2({data:difftpDict});
			$('#th_procfg').val(date.procfg);
			$('#th_procfg').select2({data:procfgDict});
			$('#th_chckdt').val(date.keepdt);
			$('#th_remark').val("");

			$("#chaCuoChuLiModal").modal("show");
		};
		
		$('#th_save').click(function(){
			if (_type == "1") {
				$("#makeSureTuiHuiModal").modal("show");
			} else if(_type == "2") {
				$("#makeSureWeiHuRuZhangModal").modal("show");
			} else {
				$("#makeSureChuJingChongZhangModal").modal("show");
			}
		});
		
		//退汇确认按钮
		$('#btn_rjth').click(function(){
			$("#makeSureTuiHuiModal").modal("hide");
			var input = {};
			input.chanel = $('#th_servno').val();
			input.chansq = $('#th_servsq').val();
			input.chckdt = $('#th_chckdt').val();
			input.crcycd = $('#th_crcycd').select2("val");
            input.tranam = $('#th_tranam').val();
            input.remark = $('#th_remark').val();
            input.fromtp = $('#th_fromtp').select2("val");
            input.custac = $('#th_acctno').val();
            input.cardno = $('#th_cardno').val();
            input.difftp = $('#th_difftp').select2("val");
            input.target = "1";
			Sunline.ajaxRouter(
		         	"curtain/inrtbk", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("该笔交易退汇成功！",function(){
		                   	$("#chaCuoChuLiModal").modal('hide');
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		//维护入账
		$('#btn_whrz').click(function(){
			$("#makeSureWeiHuRuZhangModal").modal("hide");
			var input = {};
			input.chanel = $('#th_servno').val();
			input.chansq = $('#th_servsq').val();
			input.chckdt = $('#th_chckdt').val();
			input.custac = $('#th_acctno').val();
			input.custna = $('#th_acctna').val();
			input.cardno = $('#th_cardno').val();
			input.crcycd = $('#th_crcycd').select2("val");
		    input.tranam = $('#th_tranam').val();
		    input.fromtp = $('#th_fromtp').select2("val");
		    input.ioflag = $('#th_ioflag').select2("val");
		    input.remark = $('#th_remark').val();
		    input.difftp = $('#th_difftp').select2("val");
		    input.linkno = "";
		    input.target = "1";
			Sunline.ajaxRouter(
		         	"curtain/inckin", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("该笔交易维护入账成功！",function(){
		                   	$("#chaCuoChuLiModal").modal('hide');
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
	    //出金冲账
		$('#btn_cjcz').click(function(){
			$("#makeSureChuJingChongZhangModal").modal("hide");
			var input = {};
			input.servsq = $('#th_servsq').val();
			input.chckdt = $('#th_chckdt').val();
			input.fromtp = $('#th_fromtp').select2("val");
			input.yszjylsh = $('#th_transq').val();
            input.czczflei = "2";
            input.beizhuuu = $('#th_remark').val();
            input.difftp = $('#th_difftp').select2("val");
            input.renggybz = "1";
            input.target = "1";
			Sunline.ajaxRouter(
		         	"curtain/mgrchz", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("该笔交易冲账成功！",function(){
		                   	$("#chaCuoChuLiModal").modal('hide');
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
	};
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()