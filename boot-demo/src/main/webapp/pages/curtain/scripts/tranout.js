var Tranout = function(){
	/**
	 * 收款处理页面实现
	 */
	var _isOK = false;
	var servno = "";
	
	var brchDict=Sunline.getDict("","/brch","brchno","brchna");
	 $("input[name='operbr']", $("#add-form")).select2({
		data : brchDict
	});
	
	var cardDict=[];
	var chanlDict=[{"id":"MAGR","text":"管理平台[MAGR]"}];
	//证件类型，按前置配置的
	var idtftpDict=[{"id":"01","text":"身份证"},{"id":"03","text":"护照"},{"id":"04","text":"港澳回乡证"}
	               ,{"id":"05","text":"台胞证"},{"id":"07","text":"户口簿"},{"id":"27","text":"军官证"}
	               ,{"id":"51","text":"组织机构代码"},{"id":"55","text":"企业法人营业执照"}];
	//币种，按前置配置的
	var currcdDict=[{"id":"CNY","text":"人民币"},{"id":"USD","text":"美元"},{"id":"HKD","text":"港币"},{"id":"EUR","text":"欧元"}
	               ,{"id":"JPY","text":"日元"},{"id":"GBP","text":"英镑"},{"id":"CHF","text":"瑞士法郎"},{"id":"SGD","text":"新加坡元"}
	               ,{"id":"AUD","text":"澳元"},{"id":"CAD","text":"加元"},{"id":"KRW","text":"韩元"},{"id":"MYR","text":"马拉西亚林吉特"}
	               ,{"id":"NZD","text":"新西兰"},{"id":"RUB","text":"卢布"},{"id":"THB","text":"泰铢"},{"id":"TWD","text":"新台币"}];

	var formartItem = function(dict,value){
		for(var i= 0 ; i<dict.length;i++){
			if(value == dict[i].text){
				return dict[i].dictId;
			}
			if(value == dict[i].dictId){
				return dict[i].text;
			}
			return value;
		}
	}
	
	$("#chnnel").select2({data:chanlDict});
	$("#operbr").select2({data:brchDict});
	$("#idtftp").select2({data:idtftpDict});
	$("#currcd").select2({data:currcdDict});
	$("#payrac").select2({data:cardDict});
	
	var handlerAddmodal = function(){
		$("#chnnel").select2("val","MAGR");
		$("#operbr").select2("val","AAAAA");
		$("#currcd").select2("val","CNY");
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	payrac: {
                    required: true
                },
                payrna: {
                    required: true
                },
                idtftp: {
                    required: true
                },
                idtfno: {
                    required: true
                },
                mobile: {
                    required: true
                },
                ordeam: {
                    required: true
                },
                payeac: {
                    required: true
                },
                payena: {
                    required: true
                },
                currcd: {
                    required: true
                },
                chnnel: {
                    required: true
                },
                operbr: {
                    required: true
                }
            },
            messages: {
            	payrac: {
                    required: "付款账号必填"
                },
                payrna: {
                    required: "付款户名必填"
                },
                idtftp: {
                    required: "证件类型必填"
                },
                idtfno: {
                    required: "证件号码必选"
                },
                mobile: {
                    required: "预留手机号码必填"
                },
                ordeam: {
                    required: "金额必填"
                },
                payeac: {
                    required: "收款账户必填"
                },
                payena: {
                    required: "帐号名称必填"
                },
                currcd: {
                    required: "币种必填"
                },
                chnnel: {
                    required: "渠道号必填"
                },
                operbr: {
                    required: "操作机构号必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#add-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
		});
		
		//回显账户名称
		$('#payeac').blur(function(){
			if($("#payeac").val() == payeac ){
				return;
			}
			payeac = $("#payeac").val();
			var acctno = $("#payeac").val();
			var input = {};
			input.acctno = acctno;
			Sunline.ajaxRouter(
	         	"curtain/acct", 
	         	 input,
	         	"POST",
	             function(redata){
	         		//success func
	         		//console.info("success:",redata);
	         		if(redata.retCode!='0000'){
	         			$('#payena').text("");
	         			$('#payrna').text("");
	         			cardDict=[];
	         			$("#payrac").select2({data:cardDict});
	         			payeac = "";
	         			bootbox.alert(redata.retMsg);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		console.info("账户名称"+redata.acctna);
	         		payeac = "";
	    			$('#payena').text(redata.acctna);
	    			cardDict=Sunline.getDict($("#payeac").val(), "/card", "cardno", "brchna");
	    			$("#payrac").select2({data:cardDict});
	    			if($('#payrna').text() != $('#payena').text()){
	    				$('#payrna').text("");
	    			}
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		isOk = false;
	         		payeac = "";
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		});
		
		//卡效验及回显账户名
		$('#payrac').on("change", function() {
			if($("#payrac").select2("val") == payrac ){
				return;
			}
			payrac = $("#payrac").select2("val");
			var custac = $("#payeac").val();
			var cardno = $("#payrac").select2("val");
			var input = {};
			input.custac = custac;
			input.cardno = cardno;
			Sunline.ajaxRouter(
	         	"curtain/ckcard", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			$('#payrna').text("");
	         			payrac = "";
	         			bootbox.alert(redata.retMsg);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		payrac = "";
	    			$('#payrna').text(redata.acctna);
	    			servno = redata.servno;
	         	},
	         	function(redata){
	         		isOk = false;
	         		payrac = "";
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		});
		
		//登记付款信息数据
		$('#add_save').click(function(){
			if(!$('#add-form').validate().form()){
				return;
			}
			
			if($('#payrna').text() != $('#payena').text()){
				$('#payrna').text("");
				bootbox.alert("输入卡号与电子账户未建立绑定关系");
				return;
			}
			
			var input={};
			input.payrac = $("#payrac").select2("val");
            input.payrna = $('#payrna').text();
            input.idtftp = $('#idtftp').select2("val");
            input.idtfno = $('#idtfno').val();
            input.mobile = $('#mobile').val();
            input.ordeam = $('#ordeam').val();
            input.payeac = $('#payeac').val();
            input.payena = $('#payena').text();
            input.currcd = $('#currcd').select2("val");
            input.chnnel = $('#chnnel').select2("val");
            input.operbr = $('#operbr').select2("val");
            input.servno = servno;
			input.target = "1";

            console.info(input);
            Sunline.ajaxRouter(
                	"curtain/payset", 
                	 input,
                	"POST",
                    function(redata){
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '付款处理提交完成！';
                		bootbox.alert(info, function() {
                			
                			$("#payrac").select2("val","");
                            $('#payrna').text("");
                            $('#idtftp').select2("val","");
                            $('#idtfno').val("");
                            $('#mobile').val("");
                            $('#ordeam').val("");
                            $('#payeac').val("");
                            $('#payena').text("");
                            $('#currcd').select2("val","CNY");
                            $('#chnnel').select2("val","MAGR");
                            $('#operbr').select2("val","AAAAA");
                            servno = "";
                        }); 
                	},
                	function(redata){
                		bootbox.alert("付款信息提交失败，请重试！"); 
                	},
                	"json",
                	false); 
		});
	};
	
	return {
		init : function(){
			handlerAddmodal();
		}
	}
}()