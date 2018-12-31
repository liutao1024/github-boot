var Tranin = function(){
	/**
	 * 付款处理页面实现
	 */
	var _isOK = false;
	var servno = "";
	
	var brchDict=Sunline.getDict("","/brch","brchno","brchna");
	 $("input[name='operbr']", $("#add-form")).select2({
		data : brchDict
	});
	 
	var cardDict=[];
	var tpDict=[{"id":"HVPS","text":"大额[HVPS]"},{"id":"BEPS","text":"小额[BEPS]"},{"id":"IBPS","text":"超网[IBPS]"}]
	var chanlDict=[{"id":"MAGR","text":"管理平台[MAGR]"}];

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
	
	$("#chnnal").select2({data:tpDict});
	$("#channl").select2({data:chanlDict});
	$("#operbr").select2({data:brchDict});
	$("#pyeeac").select2({data:cardDict});
	
	var handlerAddmodal = function(){
		$("#channl").select2("val","MAGR");
		$('#operbr').select2("val","AAAAA");
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	pyerac: {
                    required: true
                },
                pyerna: {
                    required: true
                },
                tranam: {
                    required: true
                },
                chnnal: {
                    required: true
                },
                pyeeac: {
                    required: true
                },
                pyeena: {
                    required: true
                },
                operbr: {
                    required: true
                }
            },
            messages: {
            	pyerac: {
                    required: "付款账户必填"
                },
                pyerna: {
                    required: "付款户名必填"
                },
                tranam: {
                    required: "付款金额必填"
                },
                chnnal: {
                    required: "汇款类型必选"
                },
                pyeeac: {
                    required: "收款人账号必填"
                },
                pyeena: {
                    required: "收款人户名必填"
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
		$('#pyerac').blur(function(){
			if($("#pyerac").val() == pyerac ){
				return;
			}
			pyerac = $("#pyerac").val();
			var acctno = $("#pyerac").val();
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
	         			$('#pyerna').text("");
	         			$('#pyeena').text("");
	         			cardDict=[];
	         			$("#pyeeac").select2({data:cardDict});
	         			pyerac = "";
	         			bootbox.alert(redata.retMsg);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		console.info("账户名称"+redata.acctna);
	         		console.info("账户余额"+redata.acbltp);
	         		pyerac = "";
	    			$('#pyerna').text(redata.acctna);
	    			$('#acbltp').val(redata.acbltp);
	    			cardDict=Sunline.getDict($("#pyerac").val(), "/card", "cardno", "brchna");
	    			$("#pyeeac").select2({data:cardDict});
	    			if($('#pyeena').text() != $('#pyerna').text()){
	    				$('#pyeena').text("");
	    			}
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		isOk = false;
	         		pyerac = "";
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		});
		
		
		
		$('#pyeeac').on("change", function() {
			if($("#pyeeac").select2("val") == pyeeac ){
				return;
			}
			pyeeac = $("#pyeeac").select2("val");
			var custac = $("#pyerac").val();
			var cardno = $("#pyeeac").select2("val");
			var input = {};
			input.custac = custac;
			input.cardno = cardno;
			Sunline.ajaxRouter(
	         	"curtain/ckcard", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			$('#pyeena').text("");
	         			pyeeac = "";
	         			bootbox.alert(redata.retMsg);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		pyeeac = "";
	    			$('#pyeena').text(redata.acctna);
	    			servno = redata.servno;
	         	},
	         	function(redata){
	         		isOk = false;
	         		pyeeac = "";
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
			var input={};
			input.pyerac = $("#pyerac").val();
            input.pyerna = $('#pyerna').text();
            input.tranam = $('#tranam').val();
            input.chnnal = $('#chnnal').select2("val");
            input.pyeeac = $("#pyeeac").select2("val");
            input.pyeena = $('#pyeena').text();
            input.channl = $('#channl').select2("val");
            input.remark = $('#remark').val();
			input.operbr = $('#operbr').select2("val");
			input.servno = servno;
			input.target = "1";
            
            console.info(input);
            Sunline.ajaxRouter(
                	"curtain/unipmt", 
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
                			$("#pyerac").val("");
                            $('#pyerna').text("");
                            $('#tranam').val("");
                            $('#chnnal').select2("val","");
                            $('#pyeeac').select2("val","");
                            $('#pyeena').text("");
                            $("#channl").select2("val","MAGR");
                            $('#remark').val("");
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