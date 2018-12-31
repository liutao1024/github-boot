var Corpadd = function(){
	
	var _a_idtftp ='';
	var _a_idtfno ='';
	
	var idcorptpDict=Sunline.getDict("E_CORP_IDTF");
	var idtftpDict=Sunline.getDict("E_IDTFTP");
	var prodDict=Sunline.getDict(null, "/dppb", "prodcd",
			"prodtx");
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	var yesDict=[{"id":"1","text":"是[1]"},{"id":"0","text":"否[0]"}];
	
	//TODO busino = 。。。
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
	$("#a_idtftp").select2({data:idcorptpDict});
	$("#a_prodcd").select2({data:prodDict});
	$("#a_crcycd").select2({data:crcycdDict});
	$("#a_iomark").select2({data:yesDict});
	$("#a_isbank").select2({data:yesDict});
	$("#a_upidtp").select2({data:idtftpDict});
	
	//新增对公账户
	var handlerAddmodal = function(){
		
		$('#a_crcycd').select2("val","01");
		$('#a_iomark').select2("val","1");
		$('#a_isbank').select2("val","0");
		$("#a_idtftp").select2("val","22");
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	a_custna: {
                    required: true
                },
                a_idtftp: {
                    required: true
                },
                a_prodcd: {
                    required: true
                }
            },
            messages: {
            	a_custna: {
                    required: "客户名称必填"
                },
                a_idtftp: {
                    required: "证件类型必填"
                },
                a_prodcd: {
                    required: "产品类型必选"
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
		$('#a_idtftp').blur(function(){
			alert(1);
			showBack();
		});
		$('#a_idtfno').blur(function(){
			showBack();
		});
		var showBack = function(){
			if(_a_idtftp == $('#a_idtftp').val() && _a_idtfno == $('#a_idtfno').val()){
				return;
			}
			_a_idtftp = $('#a_idtftp').val();
			_a_idtfno = $('#a_idtfno').val();
			var input = {};
			input.idtftp = _a_idtftp;
			input.idtfno = _a_idtfno;
			Sunline.ajaxRouter(
	         	"cust/cpacct", 
	         	 input,
	         	"POST",
	             function(redata){
	         		//success func
	         		//console.info("success:",redata);
	         		if(redata.retCode!='0000'){
//	         			bootbox.alert(redata.retMsg);
	         			$('#a_custna').attr("disabled",false);
	         			$('#a_cropcd').attr("disabled",false);
	         			$('#a_locatx').attr("disabled",false);
	         			$('#a_natitx').attr("disabled",false);
	         			$('#a_isbank').attr("disabled",false);
	         			$('#a_upcrps').attr("disabled",false);
	         			$('#a_upidtp').attr("disabled",false);
	         			$('#a_upidno').attr("disabled",false);
	         			$('#a_epcona').attr("disabled",false);
	         			$('#a_epcotl').attr("disabled",false);
	         			$('#a_opcfno').attr("disabled",false);
	         			$('#a_opcfdt').attr("disabled",false);
	         			$('#a_txdpid').attr("disabled",false);
	         			$('#a_iomark').attr("disabled",false);
	         			isOk = false;
	         			return;
	         		}
	         		isOk = true;
	         		console.info("账户名称"+redata.custna);
	         		$('#a_custna').val(redata.custna);
	         		$('#a_cropcd').val(redata.cropcd);
	         		$('#a_locatx').val(redata.locatx);
	         		$('#a_natitx').val(redata.natitx);
	         		$('#a_isbank').select2("val",redata.isbank);
	         		$('#a_upcrps').val(redata.upcrps);
	         		$('#a_upidtp').select2("val",redata.upidtp);
	         		$('#a_upidno').val(redata.upidno);
	         		$('#a_epcona').val(redata.epcona);
	         		$('#a_epcotl').val(redata.epcotl);
	         		$('#a_opcfno').val(redata.opcfno);
	         		$('#a_opcfdt').val(redata.opcfdt);
	         		$('#a_txdpid').val(redata.txdpid);
	         		$('#a_iomark').select2("val",redata.iomark);
	         		$('#a_custna').attr("disabled",true);
	         		$('#a_cropcd').attr("disabled",true);
	         		$('#a_locatx').attr("disabled",true);
	         		$('#a_natitx').attr("disabled",true);
	         		$('#a_isbank').attr("disabled",true);
	         		$('#a_upcrps').attr("disabled",true);
	         		$('#a_upidtp').attr("disabled",true);
	         		$('#a_upidno').attr("disabled",true);
	         		$('#a_epcona').attr("disabled",true);
	         		$('#a_epcotl').attr("disabled",true);
	         		$('#a_opcfno').attr("disabled",true);
	         		$('#a_opcfdt').attr("disabled",true);
	         		$('#a_txdpid').attr("disabled",true);
	         		$('#a_iomark').attr("disabled",true);
	         	},
	         	function(redata){
	         		//console.info("error:",redata);
	         		isOk = false;
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
		}
		
		//保存时提交数据
		$('#add_save').click(function(){
			if(!$('#add-form').validate().form()){
				return;
			}
			var input={};
			input.custna = $("#a_custna").val();
            input.idtftp = $('#a_idtftp').val();
            input.idtfno = $('#a_idtfno').val();
            input.cropcd = $('#a_cropcd').val();
            input.prodcd = $('#a_prodcd').val();
            input.locatx = $('#a_locatx').val();
            input.natitx = $('#a_natitx').val();
            input.isbank = $('#a_isbank').val();
            input.upcrps = $('#a_upcrps').val();
            input.upidtp = $('#a_upidtp').val();
            input.upidno = $('#a_upidno').val();
			input.epcona = $('#a_epcona').val();
			input.epcotl = $('#a_epcotl').val();
			input.opcfno = $('#a_opcfno').val();
			input.opcfdt = $('#a_opcfdt').val();
			input.txdpid = $('#a_txdpid').val();
			input.iomark = $('#a_iomark').val();
			input.crcycd = $('#a_crcycd').val();
            
            console.info(input);
            Sunline.ajaxRouter(
                	"cust/opcpac", 
                	 input,
                	"POST",
                    function(redata){
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '对公账户：['+input.custna+']信息录入完成！';
                		bootbox.alert(info, function() {
                			$("#a_itemcd").val("");
                            $("#a_itemna").val("");
                            $("#a_itemtp").select2("val");
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
//                			$("#a_itemcd").val("");
//                            $("#a_itemna").val("");
//                            $("#a_itemtp").select2("val");
                        }); 
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