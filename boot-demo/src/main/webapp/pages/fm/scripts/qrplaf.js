var Qrplaf = function(){
	var idtftpDict=Sunline.getDict("E_IDTFTP");	
	var yesDict=Sunline.getDict("E_PLAFST");
	var plaftpDict=Sunline.getDict("E_PLAFTP");
	var multfgDict=Sunline.getDict("E_YES___");
	var sszfptDict=Sunline.getDict("E_SSZFPT");
	var grid = new Datatable();
	$("#certtp_t").select2({
		data : idtftpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#sszfpt_t").select2({
		data : sszfptDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	$("#m_certtp").select2({
		data : idtftpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#m_mangtp").select2({
		data : plaftpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#m_multfg").select2({
		data : multfgDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$("#m_sszfpt").select2({
		data : sszfptDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	var formartM = function(value){
		value = value.toString();
		if(value.toString().indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var content = $('#edit_load');//配置商户关联信息子页面
	var handlerTable = function(){
		
		var url = Sunline.ajaxPath("fm/qeplafinfo");
		grid.setAjaxParam("zjcgno_t","");
		grid.setAjaxParam("certno_t","");
		grid.setAjaxParam("certtp_t","");
		grid.setAjaxParam("sszfpt_t","");
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
	            "columns" : [{     
		            	"data": "zjcgno",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "custnm",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "certno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "certtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<idtftpDict.length ; i++){
		            			if(data == idtftpDict[i].dictId){
		            				return idtftpDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "zjcgst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<yesDict.length ; i++){
		            			if(data == yesDict[i].dictId){
		            				return yesDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "mangtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<plaftpDict.length ; i++){
		            			if(data == plaftpDict[i].dictId){
		            				return plaftpDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "servno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "multfg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<multfgDict.length ; i++){
		            			if(data == multfgDict[i].dictId){
		            				return multfgDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "sszfpt",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<sszfptDict.length ; i++){
		            			if(data == sszfptDict[i].dictId){
		            				return sszfptDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "plafno",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		if(full.sszfpt == "00"){
		            			return "";
		            		}else{
		            			return data;
		            		}
		            	}
		            },{ 
		            	"data": "opendt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "custsum",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "onlnbl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data);
		            	}
		            },{ 
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {	
		            		return "<a class='rela_setting' href='javascript:;' data-src='" + data.zjcgno + "'>关联设置</a>";	            
		            	}
		            },{ 
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {	
		            		return "<a class='reState' href='javascript:;' data-src='" + data.zjcgno
		            		+ ","+ data.zjcgst+ "'>冻结或解冻</a>";	            
		            	}
		            }
	            ]
	        }
	    });	
		
		$(".table-group-actions").append("<button id='tran_btn' class='btn btn-sm blue table-group-action-submit'><i class='fa icon-cloud-download'></i>&nbsp;新增商户</button></div>");
		var sendData = ["zjcgno","zjcgst"];
		
		$('#tran_btn').click(function(){
			$('#m_custnm').val("");
			$('#m_certno').val("");
			$('#m_certtp').select2("val","");
			$('#m_mangtp').select2("val","");
			$('#m_multfg').select2("val","");
			$('#m_sszfpt').select2("val","00");
			$('#m_plafno').val("无支付平台不必输入");
			$("#m_plafno").attr("readOnly",true);
	    	$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
			$('.mod-form .form-group .help-block').remove();
			$("#addModal").modal('show');
		});
		    
        grid.addBindEvent(".reState", "click", sendData,
				function(data) {		
        	showReleInfo(data);
		});
        grid.addBindEvent(".rela_setting", "click", ["zjcgno"],
				function(data) {
        	content.html('');
    	    name="qrplafrela";
    	    
            $.ajax({
                type: "GET",
                url: "../fm/"+name,
                dataType: "html",
                success: function(res) 
                {    
                    content.html(res);
                    content.ready(function(){               	
                    	  Metronic.initUniform();
                    	  try{      
                    		  Qrplafrela.init(data.zjcgno);
                    	  }catch(e){
                    		  bootbox.alert("子页面加载失败！");
                    	  }
                    });             
                },
                error: function(xhr, ajaxOptions, thrownError)
                {
                },
                async: false
            });
            $("#oprela").modal('show');
		});
	};

	var showReleInfo = function(data) {
		var as = "解冻";
		var zjcgst = data.zjcgst;
		if(data.zjcgst == '1'){
			as = "冻结";
			zjcgst = "2";
		}else{
			as = "解冻";
			zjcgst = "1";
		}
		 bootbox.confirm("是否"+as+"账号",function(result){
	            if(result){
	            	var input = {};
	            	input.zjcgno = data.zjcgno;
	            	input.zjcgst = zjcgst;
					Sunline.ajaxRouter("fm/dlplaf", input,
							"POST", function(data) {
								if(data.retCode == "0000"){
									bootbox.alert(as+"成功");
									grid.submitFilter();
								}else{
									bootbox.alert(as+"失败");
								}
							},
							function(){
								bootbox.alert(as+"出现异常，请重新操作");
							});
	            }
			 })
	};
	
	//查询
	$('#submit').click(function(){
		if(!$('#cust-form').validate().form()){
			return;
		}
		grid.setAjaxParam("zjcgno_t",$('#zjcgno_t').val());
		grid.setAjaxParam("certno_t",$('#certno_t').val());
		grid.setAjaxParam("certtp_t",$('#certtp_t').select2("val"));
		grid.setAjaxParam("sszfpt_t",$('#sszfpt_t').select2("val"));
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#zjcgno_t').val("");
		$('#certno_t').val("");
		$('#certtp_t').select2("val","");
		$('#sszfpt_t').select2("val","");
	});
	
	//新增保存
	$('#m_save').click(function(){
		if(!$('#mod-form').validate().form()){
			return;
		}
		var custnm = $('#m_custnm').val();
		var certno = $('#m_certno').val();
		var certtp = $('#m_certtp').select2("val");
		var mangtp = $('#m_mangtp').select2("val");
		var multfg = $('#m_multfg').select2("val");
		var sszfpt = $('#m_sszfpt').select2("val");
		var plafno = $('#m_plafno').val();
		var servna = $('#m_servna').val();
		var input = {};
		input.custnm = custnm;
		input.certno = certno;
		input.certtp = certtp;
		input.mangtp = mangtp;
		input.multfg = multfg;
		input.sszfpt = sszfpt;
		input.plafno = plafno;
		input.servna = servna;
		Sunline.ajaxRouter(
	         	"fm/addata", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("商户["+redata.zjcgno+"]新增成功！",function(){
	         			
	                   	$("#addModal").modal('hide');
	                   	grid.submitFilter();
	         		});
	         	},
	         	function(redata){    
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	true);
	});
	
	jQuery.validator.addMethod("istruedt", function(value, element, param) { 
		if(param==true){
			if($('#m_sszfpt').val()=="00")
				{
				$('#m_plafno').val("无支付平台不必输入");
				$("#m_plafno").attr("readOnly",true);
				 
				return true; 
				}
			else{
				$('#m_plafno').attr("readOnly",false);				
				return true;
			}
			
		}
		return true;
		
	}, $.validator.format("无支付平台不必输入"));
	$('#m_sszfpt').on("change",function(e){	
		
		$('#m_plafno').attr("readOnly",false);
		$('#m_plafno').val("");
		
	});
	
	$('#mod-form').validate({
		errorElement: 'span', 
        errorClass: 'help-block',
        focusInvalid: false, 
        rules:{
        	m_custnm: {
                required: true
        	},
        	m_certno : {
        		required: true
        	},
        	m_certtp: {
                required: true     
        	},
        	m_mangtp: {
                required: true     
        	},
        	m_sszfpt: {
        		required: true     
        	},
        	m_plafno: {
        		istruedt: true,
        		required: function(element) { 
     			   return $('#m_sszfpt').val()!=00? true : false;
		           
		         }     
        	}
        },
        messages: {
        	m_custnm: {
                required: "客户名称必填"
            },
            m_certno: {
                required: "证件号码必填"
            },
            m_certtp: {
                required: "证件类型必填"
            },
            m_mangtp: {
                required: "存管商户管理方式必填"
            },
            m_sszfpt: {
            	required: "所属支付平台必填"
            },
            m_plafno: {
            	required: "平台账号必填"
            }
        },
        invalidHandler: function (event, validator) {   
            $('.alert-danger', $('#mod-form')).show();
        },
        highlight: function (element) { 
            $(element).closest('.form-group').addClass('has-error'); 
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error');
            label.remove();
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element.closest('.input-icon'));
        }
	});
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()