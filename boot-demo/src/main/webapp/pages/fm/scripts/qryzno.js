var Qryzno = function(){
	var acctstDict=Sunline.getDict("acctst");	
	var grid = new Datatable();
	var YesNoDict=[{"dictId":"1","dictName":"是"}
	,{"dictId":"2","dictName":"否"}]
	var YesnoDict=[{"dictId":"1","dictName":"是"}
	,{"dictId":"0","dictName":"否"}]
	var StustpDict=[{"dictId":"1","dictName":"正常"}
	,{"dictId":"2","dictName":"销户"}]
	var AcctypDict=[
     {"dictId":"01","dictName":"委托方--费用收入账户"}
	,{"dictId":"02","dictName":"委托方--费用支取账户"}
	,{"dictId":"03","dictName":"委托方—风险金账户"}
	,{"dictId":"04","dictName":"委托方—运营账户"}
	,{"dictId":"05","dictName":"担保方账户"}
	,{"dictId":"09","dictName":"代还款账户"}
	]
	var formartDict = function(dict){
	$.each(dict, function(i, n){
        n.text=n['dictName']+"["+n['dictId']+"]";
        n.id=n['dictId'];            
        });
	
	roleDict = dict;
	return roleDict;
	}

	/*$('#samefg').on("change",function(e){
		console.info(e);
		$('#headnm').attr("value","");
	});*/
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
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	$("input[name='samefg']").select2({data:formartDict(YesnoDict),allowClear:true});
	$("input[name='conttg']").select2({data:formartDict(YesNoDict),allowClear:true});
	$("input[name='acctyp']").select2({data:formartDict(AcctypDict),allowClear:true});
	$("input[name='syacst']").select2({data:formartDict(YesnoDict),allowClear:true});
	$("input[name='ifaucl']").select2({data:formartDict(YesnoDict),allowClear:true});
	var handlerTable = function(){
		var editForm = function(nRowA){
		};
		var url = Sunline.ajaxPath("fm/qrmpac");
		grid.setAjaxParam("zjcgno_t","");
		grid.setAjaxParam("inerac_t","");
		grid.setAjaxParam("headno_t","");
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
	            "aoColumns" : [
	                         {     
		            	"mDataProp": "mappno", 
		            	"sClass" : "center",
		            	"bSortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "zjcgno",
		            	"sortable": false,
		            	"sClass" : "center",
		            	"searchable": false
		            }
		            ,{     
		            	"data": "acctyp",
		            	"sortable": false,
		            	"searchable": false,
		             	"render" : function(data,type,full){
     	            		
     	            		return _formartDict(AcctypDict,data);
     	            		
     	            	}
		            },{ 
		            	"data": "actpur",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "headno",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "headnm",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "accbal",
		            	"sortable": false,
		            	"searchable": false/*,
		            	"render" : function(data,type,full){
		            	return formartM(data);
		            	}*/
		            }
		            ,{ 
		            	"data": "conttg",
		            	"sortable": false,
		            	"searchable": false,
		             	"render" : function(data,type,full){
     	            		
     	            		return _formartDict(YesNoDict,data);
     	            		
     	            	}
		            }
		            ,{ 
		            	"data": "inerac",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "samefg",
		            	"sortable": false,
		            	"searchable": false,
		             	"render" : function(data,type,full){
     	            		
     	            		return _formartDict(YesnoDict,data);
     	            		
     	            	}
		            }
		            ,{ 
		            	"data": "clerac",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "batcac",
		            	"sortable": false,
		            	"searchable": false
		            }
		            
		            
		            ,{ 
		            	"data": "ifaucl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
			            	return _formartDict(YesnoDict,data);
		              }
		            }
		            ,
		            { 
		            	"data": "syacst",
		            	"sortable": false,
		            	"searchable": false,
		             	"render" : function(data,type,full){
     	            		
     	            		return _formartDict(YesnoDict,data);
     	            		
     	            	}
		            }
		            ,{ 
		            	"data": "curtam",
		            	"sortable": false,
		            	"searchable": false/*,
		            	"render" : function(data,type,full){
			            	return formartM(data);
		            }*/
		            }
		            ,{ 
		            	"data": "curtdt",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "stustp",
		            	"sortable": false,
		            	"searchable": false,
		             	"render" : function(data,type,full){
     	            		
     	            		return _formartDict(StustpDict,data);
     	            		
     	            	}
		            }
		            ,{ 
		            	"data": "opendt",
		            	"sortable": false,
		            	"searchable": false
		            },
		            {   "data": null,
		            	"width": "10%",
		            	"sortable": false,
		            	"searchable": false,
		            	"mRender": function (data, type, full) {		          	
		            		return "<a class='edit' href='javascript:;' data-src='"
							+ data.zjcgno
							+ ","
							+ data.mappno  
							+ "'>删除 </a>";
		            	}
		            }
	            ]
	        }
	    });				
		$(".table-group-actions").append("<button id='tran_btn' class='btn btn-sm blue table-group-action-submit'><i class='fa icon-cloud-download'></i>&nbsp;新增影子账户</button></div>");
		var sendData = ["zjcgno","mappno"];//存管商户号--影子账户账号
		grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);      
        grid.addBindEvent(".releInfo", "click", sendData,
				function(data) {		
        	showReleInfo(data);
		});
        grid.addBindEvent(".edit",'click',sendData,function(data){
        	
        	bootbox.confirm("确定要删除该影子账户吗？", function(result) {
				if(!result){
            		return;
            	}
        	     	var input = {};
		            		  	input.zjcgno = data.zjcgno;
		            		  	input.mappno = data.mappno;
		            			Sunline.ajaxRouter(
		            		        	"fm/delsac", 
		            		        	 input,
		            		        	"POST",
		            		            function(ret){
		            		        		if (ret.ret === "success") {
		            		        			
		            		        			bootbox.alert("删除完成！"); 
		            		        			grid.submitFilter();
		            		        			
		            		        		} else {
		            		        			bootbox.alert(ret.retMsg);
		            		        		}
		            		        	},
		            		        	function(ret){
		            		        		//$("#myModal").modal('hide');
		            		        		console.info(ret);
		            		        		bootbox.alert(ret.msg);
		            		        	},
		            		        	"json",
		            		        	false); 
});
        });    
	
	var showReleInfo = function(data) {};
	//交易明细
	$('#tran_btn').click(function(){
		
		$("input", $("#editModal")).val("").trigger("change");
		//$("#editModal").show();
		$("input[name='samefg']").select2("val","");
		$("input[name='conttg']").select2("val","");
		$("input[name='acctyp']").select2("val","");
		$("input[name='syacst']").select2("val","");
		$("input[name='ifaucl']").select2("val","");
		$("#editModal").modal('show');
		
		$("#editModal").on(
				"hide.bs.modal",
				function() {
					$("#d-acct-i").empty();
					$("#d-acct-b").empty();
					$("span", $("#editModal")).empty();
					$(".alert-success",
							$('form', $("#editModal"))).hide();
					$('.alert-danger',
							$('form', $("#editModal"))).hide();
					$(".msg", $('form', $("#editModal"))).text(
							"");
					grid.submitFilter();
				});
		
	});
	
	//查询
	$('#submit').click(function(){
		if(!$('#cust-form').validate().form()){
			return;
		}
		grid.setAjaxParam("zjcgno_t",$('#zjcgno_t').val());
		grid.setAjaxParam("inerac_t",$('#inerac_t').val());
		grid.setAjaxParam("headno_t",$('#headno_t').val());
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#zjcgno_t').val("");
		$('#inerac_t').val("");
		$('#headno_t').val("");
	});
	
	//新增保存
	$('#m_save').click(function(){
		if(!$('#mod-form').validate().form()){
			return;
		}
		
		var data = {};
		$.each($("input", $("#editModal")), function(i, n) {
			if (n.name != undefined && n.name != ""
					&& n.name != null) {
				data[n.name] = n.value;
			}
		});
	    console.info(data);
		Sunline.ajaxRouter(
	         	"fm/admpac", 
	         	data,
	         	"POST",
	             function(redata){
	         		if(redata.retCode!='0000'){
	         			bootbox.alert(redata.retMsg);
	         			return;
	         		}
	         		bootbox.alert("影子账户新增成功！",function(){
	         			
	                   	$("#editModal").modal('hide');
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
			console.info($('#samefg').val() + value);
			if($('#samefg').val()==1)
				{		
				 $('#clerac').attr({maxlength:"0"});		
				 $('#clerac').attr("disabled",true);
				 
				 return true; 
				}
			else{
				$('#clerac').attr("disabled",false);				
				return true;
			}
			
		}
		return true;
		
	}, $.validator.format("记账与清算户是同一账户不必输入"));
	$('#samefg').on("change",function(e){
		console.info(e);	
		
		$('#clerac').attr("disabled",false);
		$('#clerac').val("");
		
		$('#clerac').removeAttr("maxlength");
		$("#d-acct-c").empty();
		
	});
	$('#mod-form').validate({
		errorElement: 'span', 
        errorClass:'err',
		//errorClass: 'help-block', // default input error message class
		focusInvalid: false, 
          onfocusin: function(element) { $(element).valid(); 
          $(element).addClass('highlight');},  
          onfocusout: function(element) { $(element).valid();
          $(element).removeClass('highlight');},  
         // onclick:    function(element) { $(element).valid(); }, 
         // onkeyup:    function(element) { $(element).valid(); }, 
       
        
        rules:{
        	headnm: {
        		required:  function(element) { 
        			   return $('#ifaucl').val()==1? true : false;
        			           
        			         }  
        	},
        	clerac: {
        		istruedt: true
        	},
        	acctyp: {
                required: true
        	},
        	zjcgno: {
                required: true
        	},
        	actpur: {
                required: true
        	},
        	samefg: {
                required: true
        	},
        	inerac: {
                required: true,
                rangelength:[10,18]
        	},
        	
        	headno: {
                required:   function(element) { 
     			   return $('#ifaucl').val()==1? true : false;
		           
		         }   
        	}
        	,
        	conttg: {
                required: true     
        	},
        	syacst: {
                required: true     
        	}
        	
        },
        messages: {
        	headnm: {
        		istruedt: "总行户名不能为空",
        		required: "总行户名不能为空"	
        	},
        	acctyp: {
                required: "账户类型不能为空"
        	},
        	zjcgno: {
                required: "存管商号不能为空"
        	},
        	actpur: {
                required: "账户用途不能为空"
        	},
        	samefg: {
                required: "是否同一类型不能为空"
        	},
        	inerac: {
                required: "内部户账号不能为空"
        	},
        	headno: {
                required: "总行账号不能为空"    
        	}
        	,
        	conttg: {
                required: "控制余额不能为空"     
        	},
        	syacst: {
                required: "是否同步余额不能为空"     
        	}
        },
       /* invalidHandler: function (event, validator) {   
            $('.alert-danger', $('#mod-form')).show();
        },*/
       
       highlight: function (element) { 
            $(element).closest('.form-group').addClass('has-error'); 
        },
        success: function (label) {
        	//label.html("&nbsp;").addClass("valid")
            label.closest('.form-group').removeClass('has-error');
            label.remove();
            //label.text('').addClass('valid');
            
        },
        errorPlacement: function (error, element) {
        	//error.insertAfter(element.closest('.input-icon'));
           // error.insertAfter(element.closest('.input-group'));
        	 error.appendTo(element.parent());
        }
	});
	/*jQuery.validator.setDefaults( {
	    debug : true
	});*/
	
	$('#inerac').blur(function(){
		_acctno = $("#inerac").val();
		var acctno = $("#inerac").val();
		var input = {};
		input.acctno = acctno;
		Sunline.ajaxRouter(
         	"curtain/acct", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
         			bootbox.alert(redata.retMsg);
         			_isOK = false;
         			return;
         		}
         		_isOK = true;
         		$('#d-acct-i').text(redata.acctna).css("font-size","14px"); 
         	},
         	function(redata){
         		//console.info("error:",redata);
         		_isOK = false;
         		bootbox.alert("网络异常");
         	},
         	"json",
         	false); 			
	});
	$('#clerac').blur(function(){
		_acctno = $("#clerac").val();
		var acctno = $("#clerac").val();
		var input = {};
		input.acctno = acctno;
		Sunline.ajaxRouter(
         	"curtain/acct", 
         	 input,
         	"POST",
             function(redata){
         		
         		if(redata.retCode!='0000'){
         			bootbox.alert(redata.retMsg);
         			_isOK = false;
         			return;
         		}
         		_isOK = true;
         		$('#d-acct-c').text(redata.acctna).css("font-size","14px");
         	},
         	function(redata){
         		//console.info("error:",redata);
         		_isOK = false;
         		bootbox.alert("网络异常");
         	},
         	"json",
         	false); 			
	});
	$('#batcac').blur(function(){
		_acctno = $("#batcac").val();
		var acctno = $("#batcac").val();
		console.info(acctno);
		if(!Sunline.isNull(acctno)){
			
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
         			bootbox.alert(redata.retMsg);
         			_isOK = false;
         			return;
         		}
         		_isOK = true;
         		$('#d-acct-b').text(redata.acctna).css("font-size","14px");
         	},
         	function(redata){
         		//console.info("error:",redata);
         		_isOK = false;
         		bootbox.alert("网络异常");
         	},
         	"json",
         	false); }			
	});
	};
	return {
		init : function(){
			handlerTable();
		}
	}
}()