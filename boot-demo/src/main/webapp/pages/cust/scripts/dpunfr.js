var Dpunfr = function(){
	var froztpDict=Sunline.getDict("E_FROZTP");
	var frozstDict=Sunline.getDict("E_FROZST");
	var frlmtpDict=Sunline.getDict("E_FRLMTP");
	var frozowDict=Sunline.getDict("E_FROZOW");
	var lawcopDict=Sunline.getDict("E_LAWCOP");
	var idtftpDict=Sunline.getDict("E_IDTFTP");
	
	var grid = new Datatable();
	
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
	
	var handle = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });  
        };
        //查询
		$('#submit').click(function(){
			if(Sunline.isNull($('#custac').val())){
				bootbox.alert("请输入电子账号！"); 
				return;
			}
			grid.setAjaxParam("custac",$('#custac').val());
			grid.submitFilter();
		});
        
      	
        var url = Sunline.ajaxPath("cust/dpfrqr");
        grid.setAjaxParam("custac","");
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
							"data": null,
							"sortable": false,
							"searchable": false,
							"render": function (data, type, full) {
									if(data.frozst=='0'){
										return "<a class='unfroze' href='javascript:;' data-src='" 
										+data.custac+","+ data.frozno+","+data.frozbl + "'>解冻 </a>";
									}else{
										return "已解冻";
									}
								}
	                         },
							{"data": "frozno","sortable": false,"searchable": false},
							{"data": "custac","sortable": false,"searchable": false},
							{"data": "froztp","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<froztpDict.length ; i++){
				            			if(data == froztpDict[i].dictId){
				            				return froztpDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
			            	{"data": "frozow","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<frozowDict.length ; i++){
				            			if(data == frozowDict[i].dictId){
				            				return frozowDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							{"data": "frowid","sortable": false,"searchable": false},
							{"data": "frozam","sortable": false,"searchable": false},
							{"data": "frozbl","sortable": false,"searchable": false},
							{"data": "frozst","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<frozstDict.length ; i++){
				            			if(data == frozstDict[i].dictId){
				            				return frozstDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							{"data": "frozdt","sortable": false,"searchable": false},
							{"data": "froztm","sortable": false,"searchable": false},
							{"data": "frbgdt","sortable": false,"searchable": false},
							{"data": "freddt","sortable": false,"searchable": false},
							{"data": "frozcd","sortable": false,"searchable": false},
							{"data": "frlmtp","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<frlmtpDict.length ; i++){
				            			if(data == frlmtpDict[i].dictId){
				            				return frlmtpDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							
							{"data": "frctno","sortable": false,"searchable": false},
							{"data": "frcttp","sortable": false,"searchable": false},
							{"data": "frreas","sortable": false,"searchable": false},
							{"data": "frexog","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<lawcopDict.length ; i++){
				            			if(data == lawcopDict[i].dictId){
				            				return lawcopDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							{"data": "frogna","sortable": false,"searchable": false},
							{"data": "idtp01","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<idtftpDict.length ; i++){
				            			if(data == idtftpDict[i].dictId){
				            				return idtftpDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							{"data": "idno01","sortable": false,"searchable": false},
							{"data": "frna01","sortable": false,"searchable": false},
							{"data": "idtp02","sortable": false,"searchable": false,
				            	"render" : function(data,type,full){
				            		for(var i=0 ; i<idtftpDict.length ; i++){
				            			if(data == idtftpDict[i].dictId){
				            				return idtftpDict[i].dictName;
				            			}
				            		}
				            		return data;
				            	}},
							{"data": "idno02","sortable": false,"searchable": false},
							{"data": "frna02","sortable": false,"searchable": false},
							{"data": "mntrsq","sortable": false,"searchable": false}
	                     ]
	        }
	        
	    });
      	var sendData = ["custac","frozno","frozbl"];
      	 grid.addBindEvent(".unfroze", "click", sendData,
 				function(data) {
 			// 显示配置窗口
         	loadUnfrozeData(data);
 			$("#unfrozeModel").modal("show");
 		});
 	    
 	    var loadUnfrozeData = function(data) {
 	    	$("#a_frozno").val(data.frozno);
 	    	$("#a_custac").val(data.custac);
 	    	if(data.frozbl > 0){
 	    		$("#a_unfram").attr('disabled',false);
 	    		$("#a_unfram").attr('placeholder','请输入解冻金额');
 	    	}else{
 	    		$("#a_unfram").attr('disabled',true);
 	    		$("#a_unfram").attr('placeholder','');
 	    	}
 	    	$("#a_unfram").val("");
 	    	$("#a_ufreas").val("");
 	    	$("#a_ufcttp").val("");
 	    	$("#a_ufctno").val("");
 	    	$("#a_ufogna").val("");
 	    	$("#a_idno01").val("");
 	    	$("#a_ufna01").val("");
 	    	$("#a_idno02").val("");
 	    	$("#a_ufna02").val("");
 		};
 		
		$("#a_ufexog").select2({
			data : lawcopDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$("#a_idtp01").select2({
			data : idtftpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$("#a_idtp02").select2({
			data : idtftpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$("#a_ufexog").select2('val','1');
		$("#a_idtp01").select2('val','10');
		$("#a_idtp02").select2('val','10');
		
		
		var validator = $('.add-form').validate({
			
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			rules:{
            	a_frozno: {required: true},
				a_ufreas: {required: true},
				a_ufcttp: {required: true},
				a_ufctno: {required: true},
				a_ufogna: {required: true},
				a_idno01: {required: true},
				a_ufna01: {required: true},
				a_idno02: {required: true},
				a_ufna02: {required: true}
				},
			errorPlacement : function(error, element) {
				element.parent().append(error);
			},

			highlight : function(element) {
				$(element).closest('.form-group').removeClass("has-success")
						.addClass('has-error');
			},
			success : function(label, element) {
				var icon = $(element).parent('.input-icon').children('i');
				$(element).closest('.form-group').removeClass('has-error')
						.addClass('has-success'); // set success class to the
													// control group
				icon.removeClass("fa-warning").addClass("fa-check");
			}
		});
		
 		//保存时提交数据
		$('#add_save').click(function(){
			if(!$('.add-form').validate().form()){
				return;
			}
			var input={};
			input.custac =$("#a_custac").val();
			input.frozno =$("#a_frozno").val();
			input.unfram =$("#a_unfram").val();
			input.ufreas =$("#a_ufreas").val();
			input.ufcttp =$("#a_ufcttp").val();
			input.ufctno =$("#a_ufctno").val();
			input.ufexog =$('#a_ufexog').select2("val");
			input.ufogna =$("#a_ufogna").val();
			input.idtp01 =$('#a_idtp01').select2("val");
			input.idno01 =$("#a_idno01").val();
			input.ufna01 =$("#a_ufna01").val();
			input.idtp02 =$('#a_idtp02').select2("val");
			input.idno02 =$("#a_idno02").val();
			input.ufna02 =$("#a_ufna02").val();
            console.info(input);
            Sunline.ajaxRouter(
                	"cust/dpunfr", 
                	 input,
                	"POST",
                    function(redata){
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '冻结编号'+input.frozno+(input.unfram>0?(",解冻金额"+input.unfram):"")+'解冻完成';
                		bootbox.alert(info, function() {
                			$("#unfrozeModel").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
                			$("#unfrozeModel").modal('hide');
                        }); 
                	},
                	"json",
                	false); 
		});
      	
	    };
	   
	
	return {
		init : function(){
			handle();
		}
	}
	
}()