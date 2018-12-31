var Transfer = function(){
	var typeDict=[{"id":"1","text":"往传统核心"},{"id":"2","text":"往互联网核心"}];
	var crcycdDict=Sunline.getDict("crcycd");
	
	$('#z_crcycd').select2({
		data:crcycdDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	$("#z_trtype").select2({data:typeDict});
	
	var grid = new Datatable();
	
	var handlerTable = function(){
		
		var url = Sunline.ajaxPath("fm/qroucarela");
		grid.setAjaxParam("c_acctno","");
		grid.setAjaxParam("w_acctno","");
		grid.setAjaxParam("custna_t","");

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
		            	"data": "cardno",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "binddt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {	
		            		return "<a class='carry' href='javascript:;' data-src='" + data.cardno + "," + data.acctno + "," + data.acctna + "'>转账</a>";	            
		            	}
		            },{ 
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {	
		            		return "<a class='delete' href='javascript:;' data-src='" + data.cardno
		            		+ "," + data.acctno + "," + data.acctna +"'>解除绑定</a>";	            
		            	}
		            }
	            ]
	        }
	    });	
		
		$(".table-group-actions").append("<button id='tran_btn' class='btn btn-sm blue table-group-action-submit'><i class='fa icon-cloud-download'></i>&nbsp;新增关联</button></div>");
		var sendData = ["cardno","acctno","acctna"];
		
		$('#tran_btn').click(function(){
			$('#mc_acctno').val("");
			$('#mw_acctno').val("");
			$('#m_custna').val("");
	    	$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
			$('.mod-form .form-group .help-block').remove();
			$("#addModal").modal('show');
		});
		    
        grid.addBindEvent(".delete", "click", sendData,
				function(data) {
			bootbox.confirm("是否确定解除绑定", function(result) {
				if(!result){
            		return;
            	}
        	     	var input = {};
		            		  	input.acctno = data.acctno;
		            		  	input.cardno = data.cardno;

		            			Sunline.ajaxRouter(
		            		        	"cust/decaou", 
		            		        	 input,
		            		        	"POST",
		            		            function(ret){
		            		        		if (ret.ret === "success") {
		            		        			
		            		        			bootbox.alert("解绑成功！"); 
		            		        			grid.submitFilter();
		            		        			
		            		        		} else {
		            		        			bootbox.alert(ret.retMsg);
		            		        		}
		            		        	},
		            		        	function(ret){
		            		        		console.info(ret);
		            		        		bootbox.alert(ret.msg);
		            		        	},
		            		        	"json",
		            		        	false); 
        	});
		});
        
        grid.addBindEvent(".carry", "click", sendData,
				function(data) {
        	$("#z_trtype").select2("val","1");
        	$('#z_acctno').val(data.acctno);
        	$('#z_toacct').val(data.cardno);
        	$('#z_acctna').val(data.acctna);
        	$('#z_tranam').val("");
        	$("#z_crcycd").select2("val","01");
			$("#z_acctno").attr("readOnly",true);
			$("#z_toacct").attr("readOnly",true);
			$("#z_acctna").attr("readOnly",true);
			$('.tran-form .alert').css('display','none');
			$('.tran-form .form-group').removeClass('has-error');
			$('.tran-form .form-group .help-block').remove();
        	$("#tranModal").modal('show');
        	
        	$("#z_trtype").change(function(){
            	if($("#z_trtype").val()=="1"){
            		$("#z_acctno").val(data.acctno);
            		$("#z_toacct").val(data.cardno);
            	}else if($("#z_trtype").val()=="2"){
            		$("#z_acctno").val(data.cardno);
            		$("#z_toacct").val(data.acctno);
            	}else{
            		
            	}
            });
        });
	};
	
	
	
	//查询
	$('#submit').click(function(){
		grid.setAjaxParam("c_acctno",$('#c_acctno').val());
		grid.setAjaxParam("w_acctno",$('#w_acctno').val());
		grid.setAjaxParam("custna_t",$('#custna_t').val());
		grid.submitFilter();
	});
	//清空
	$('#cancle').click(function(){
		$('#c_acctno').val("");
		$('#w_acctno').val("");
		$('#custna_t').val("");
	});
	
	//新增保存
	$('#m_save').click(function(){
		if(!$('#mod-form').validate().form()){
			return;
		}
		var acctno = $('#mw_acctno').val();
		var cardno = $('#mc_acctno').val();
		var brchno = "";
		var acctna = $('#m_custna').val();
		var brchna = "";

		var input = {};
		input.acctno = acctno;
		input.cardno = cardno;
		input.brchno = brchno;
		input.acctna = acctna;
		input.brchna = brchna;
		Sunline.ajaxRouter(
	         	"cust/oucabi", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("新增成功！",function(){
	         			
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
	
	//转账确认
	$('#z_save').click(function(){
		if(!$('#tran-form').validate().form()){
			return;
		}
		if ($("#z_trtype").val()=="1") {
			var cardno = $('#z_toacct').val();
			var acctno = $('#z_acctno').val();
			var amntcd = "C";
		} else if($("#z_trtype").val()=="2"){
			var cardno = $('#z_acctno').val();
			var acctno = $('#z_toacct').val();
			var amntcd = "D";
		}
		var acctna = $('#z_acctna').val();
		var crcycd = $('#z_crcycd').val();
		var tranam = $('#z_tranam').val();	
		var target = "1";

		var input = {};
		input.cardno = cardno;
		input.acctno = acctno;
		input.acctna = acctna;
		input.crcycd = crcycd;
		input.tranam = tranam;
		input.amntcd = amntcd;
		input.target = target;
		Sunline.ajaxRouter(
	         	"curtain/tranow", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("转账成功！",function(){
	         			
	                   	$("#tranModal").modal('hide');
	                   	grid.submitFilter();
	         		});
	         	},
	         	function(redata){    
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	true);
	});
	
	//转账输入字段效验
	var editform = $("#tran-form");
	var editerror = $('.alert-danger', editform);
	$('#tran-form').validate({
		errorElement: 'span', 
        errorClass: 'help-block',
        focusInvalid: false, 
        rules:{
        	z_trtype: {
                required: true
        	},
        	z_acctno: {
        		required: true
        	},
        	z_toacct: {
        		required: true
        	},
        	z_acctna: {
        		required: true
        	},
        	z_tranam: {
        		ckisnum : [true,true],
        		required: true
        	},
        	z_crcycd: {
                required: true     
        	}
        },
        messages: {
        	z_trtype: {
                required: "转账方向必选"
            },
            z_acctno: {
                required: "转出方账号必填"
            },
            z_toacct: {
                required: "转入方账号必填"
            },
            z_acctna: {
                required: "账户名称必填"
            },
            z_tranam: {
                required: "交易金额必填"
            },
            z_crcycd: {
                required: "币种必选"
            }
        },
        invalidHandler: function (event, validator) {   
            $('.alert-danger', $('#tran-form')).show();
        },
        highlight: function (element) { 
            $(element).closest('.form-group').addClass('has-error'); 
        },
        success: function (label) {
            label.closest('.form-group').removeClass('has-error');
            label.remove();
        },
        errorPlacement: function (error, element) {
        	element.parent().append(error);
        }
	});
	
	//校验输入是否是数字 true时校验，第二个参数校验是否有两位小数
	jQuery.validator.addMethod("ckisnum", function(value, element, param) { 
		if(param[0]==true){
			if(param[1]==true){
				reg=/^[-\+]?\d+(\.\d{0,2})?$/; 
			}else{
				reg=/^[-\+]?\d+$/;    
			}
		        if(!reg.test(value)){
		            return false;
		        }
		}
		return true;
	}, $.validator.format("请输入有效的数字!"));
	
	//新增输入字段效验
	$('#mod-form').validate({
		errorElement: 'span', 
        errorClass: 'help-block',
        focusInvalid: false, 
        rules:{
        	mc_acctno: {
                required: true
        	},
        	mw_acctno: {
        		required: true
        	},
        	m_custna: {
                required: true     
        	}
        },
        messages: {
        	mc_acctno: {
                required: "传统核心账号必填"
            },
            mw_acctno: {
                required: "互联网核心账号必填"
            },
            m_custna: {
                required: "账户名称必填"
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