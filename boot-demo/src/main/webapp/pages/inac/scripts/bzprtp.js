var Bzprtp=function(){
	var payatgDict = Sunline.getDict("payatg");
	var pauntgDict = Sunline.getDict("pauntg");
	var rlbltgDict = Sunline.getDict("rlbltg");
	var ovdftgDict = Sunline.getDict("isFlag");
	var totltgDict = Sunline.getDict("isFlag");
	var kpacfgDict = Sunline.getDict("kpacfg");
	var billtgDict = Sunline.getDict("billtg");
	var usdcmtDict = Sunline.getDict("isFlag");
	var usdctgDict = Sunline.getDict("usdctg");
	var trcrlmDict = Sunline.getDict("trcrlm");
	var trdrlmDict = Sunline.getDict("trdrlm");
	var grid = new Datatable();
	var handleTable=function(){
		var url = Sunline.ajaxPath("inac/bzprtp");
		grid.init({
	        src: $("#bzprtp_ajax"),
	       // deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	        	"ajax":{
	        		"url" : url,
	        	},
	        	"columns" : [{
	        		"data" : "bzprtp",
	        		"sortable" : false,
	        		"searchable" : false
	        	},{
	        		"data" : "payatg",
	        		"sortable": false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<payatgDict.length; i++){
	        				if(payatgDict[i].id == data){
	        					return payatgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},
	        	{
	        		"data" : "pauntg",
	        		"sortable": false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<pauntgDict.length; i++){
	        				if(pauntgDict[i].id == data){
	        					return pauntgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "rlbltg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<rlbltgDict.length; i++){
	        				if(rlbltgDict[i].id == data){
	        					return rlbltgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "ovdftg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<ovdftgDict.length; i++){
	        				if(ovdftgDict[i].id == data){
	        					return ovdftgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "totltg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<totltgDict.length; i++){
	        				if(totltgDict[i].id == data){
	        					return totltgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "kpacfg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<kpacfgDict.length; i++){
	        				if(kpacfgDict[i].id == data){
	        					return kpacfgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "billtg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<billtgDict.length; i++){
	        				if(billtgDict[i].id == data){
	        					return billtgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "usdcmt",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<usdcmtDict.length; i++){
	        				if(usdcmtDict[i].id == data){
	        					return usdcmtDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "usdctg",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<usdctgDict.length; i++){
	        				if(usdctgDict[i].id == data){
	        					return usdctgDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "trcrlm",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<trcrlmDict.length; i++){
	        				if(trcrlmDict[i].id == data){
	        					return trcrlmDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "trdrlm",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<trdrlmDict.length; i++){
	        				if(trdrlmDict[i].id == data){
	        					return trdrlmDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "desctx",
	        		"sortable" : false,
	        		"searchable" : false
	        	}
	        	]
	        }
		});
		$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;新增业务代码属性</button></div>");
        
	    $('#add_btn').click(function(){
	    	$("#a_bzprtp").val("");
            $("#a_payatg").select2("val","N");
            $("#a_pauntg").select2("val","0");
            $("#a_rlbltg").select2("val","1");
            $("#a_ovdftg").select2("val","0");
            $("#a_totltg").select2("val","0");
            $("#a_kpacfg").select2("val","0");
            $("#a_billtg").select2("val","0");
            $("#a_usdcmt").select2("val","0");
            $("#a_usdctg").select2("val","N");
            $("#a_trcrlm").select2("val","0");
            $("#a_trdrlm").select2("val","0");
            $("#a_desctx").val("");
	    	$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
	    	$("#addModal").modal('show');
	    });
	    
	    $('#a_payatg').select2({
	    	data:payatgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_pauntg').select2({
	    	data:pauntgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_rlbltg').select2({
	    	data:rlbltgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_ovdftg').select2({
	    	data:ovdftgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_totltg').select2({
	    	data:totltgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_kpacfg').select2({
	    	data:kpacfgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_billtg').select2({
	    	data:billtgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_usdcmt').select2({
	    	data:usdcmtDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_usdctg').select2({
	    	data:usdctgDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_trcrlm').select2({
	    	data:trcrlmDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_trdrlm').select2({
	    	data:trdrlmDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	};
	//新增业务代码属性窗口
	var handlerAddmodal = function(){
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	a_bzprtp: {
                    required: true
                },
                a_desctx: {
                    required: true
                }
            },
            messages: {
            	a_bzprtp: {
                    required: "属性类型必填"
                },
                a_desctx: {
                    required: "描述必填"
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
		
		//保存时提交数据
		$('#add_save').click(function(){
			if(!$('#add-form').validate().form()){
				return;
			}
			var bzprtp = $("#a_bzprtp").val();
			var desctx = $("#a_desctx").val();
			var input={};
			input.bzprtp =bzprtp;
            input.payatg =$("#a_payatg").select2("val");
            input.pauntg =$("#a_pauntg").select2("val");
            input.rlbltg =$("#a_rlbltg").select2("val");
            input.ovdftg =$("#a_ovdftg").select2("val");
            input.totltg =$("#a_totltg").select2("val");
            input.kpacfg =$("#a_kpacfg").select2("val");
            input.billtg =$("#a_billtg").select2("val");
            input.usdcmt =$("#a_usdcmt").select2("val");
            input.usdctg =$("#a_usdctg").select2("val");
            input.trcrlm =$("#a_trcrlm").select2("val");
            input.trdrlm =$("#a_trdrlm").select2("val");
            input.desctx =desctx;
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/inbztp", 
                	 input,
                	"POST",
                    function(redata){
                		//success func
                		//console.info("success:",redata);
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '新增业务代码属性：['+desctx+']成功,属性类型为：['+bzprtp+']';
                		bootbox.alert(info, function() {
                			$("#a_bzprtp").val("");
                            $("#a_payatg").select2("val","");
                            $("#a_pauntg").select2("val","");
                            $("#a_rlbltg").select2("val","");
                            $("#a_ovdftg").select2("val","");
                            $("#a_totltg").select2("val","");
                            $("#a_kpacfg").select2("val","");
                            $("#a_billtg").select2("val","");
                            $("#a_usdcmt").select2("val","");
                            $("#a_usdctg").select2("val","");
                            $("#a_trcrlm").select2("val","");
                            $("#a_trdrlm").select2("val","");
                            $("#a_desctx").val("");
                			$("#addModal").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
                			$("#a_bzprtp").val("");
                            $("#a_payatg").select2("val","");
                            $("#a_pauntg").select2("val","");
                            $("#a_rlbltg").select2("val","");
                            $("#a_ovdftg").select2("val","");
                            $("#a_totltg").select2("val","");
                            $("#a_kpacfg").select2("val","");
                            $("#a_billtg").select2("val","");
                            $("#a_usdcmt").select2("val","");
                            $("#a_usdctg").select2("val","");
                            $("#a_trcrlm").select2("val","");
                            $("#a_trdrlm").select2("val","");
                            $("#a_desctx").val("");
                			$("#addModal").modal('hide');
                        }); 
                	},
                	"json",
                	false); 
		});
	};
	return {

        //main function to initiate the module
        init: function () {
            handleTable();
            handlerAddmodal();
        }
    }
}()