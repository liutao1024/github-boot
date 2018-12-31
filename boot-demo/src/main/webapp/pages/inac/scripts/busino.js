var Busino=function(){
	var acbrlvDict = Sunline.getDict("acbrlv");
	var isatopDict = Sunline.getDict("isFlag");
	var bzprtpDict;
	var itemDict;
	var input ={};
	Sunline.ajaxRouter(
         	"inac/qrbztp", 
         	 input,
         	"POST",
             function(redata){
         		//success func
         		//console.info("success:",redata);
         		//console.info(redata);
         		if(redata.retCode!='0000'){
         			//bootbox.alert(redata.retMsg);
         			return;
         		}
         		bzprtpDict = redata.bzprtpInfo;
         	},
         	function(redata){
         		
         	},
         	"json",
         	false);
	Sunline.ajaxRouter(
         	"inac/qritem", 
         	 input,
         	"POST",
             function(redata){
         		//success func
         		//console.info("success:",redata);
         		//console.info(redata);
         		if(redata.retCode!='0000'){
         			//bootbox.alert(redata.retMsg);
         			return;
         		}
         		itemDict = redata.itemcdInfos;
         	},
         	function(redata){
         		
         	},
         	"json",
         	false);
	var grid = new Datatable();
	var handleTable=function(){
		var url = Sunline.ajaxPath("inac/busino");
		var editForm = function(nRowA){
			$("#m_busino").val("");
			$("#m_busina").val("");
			$("#m_busino").val($(nRowA[0]).text());
			$("#m_busina").val($(nRowA[1]).text());
			$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
           	$("#editModal").modal('show');
		};
		
		grid.init({
	        src: $("#busino_ajax"),
	        deleteData: sendData,
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
	        		"data" : "busino",
	        		"sortable" : false,
	        		"searchable" : false
	        	},{
	        		"data" : "busina",
	        		"sortable": false,
	        		"searchable" : false
	        	},
	        	{
	        		"data" : "acbrlv",
	        		"sortable": false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<acbrlvDict.length; i++){
	        				if(acbrlvDict[i].id == data){
	        					return acbrlvDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "itemcd",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<itemDict.length; i++){
	        				if(itemDict[i].id == data){
	        					return itemDict[i].itemna;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "subsac",
	        		"sortable" : false,
	        		"searchable" : false
	        	},{
	        		"data" : "asgnbr",
	        		"sortable" : false,
	        		"searchable" : false
	        	},{
	        		"data" : "bzprtp",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<bzprtpDict.length; i++){
	        				if(bzprtpDict[i].id == data){
	        					return bzprtpDict[i].desctx;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "isatop",
	        		"sortable" : false,
	        		"searchable" : false,
	        		"render":function(data,type,full){
	        			for(var i=0; i<isatopDict.length; i++){
	        				if(isatopDict[i].id == data){
	        					return isatopDict[i].dictName;
	        				}
	        			}
	        			return data;
	        		}
	        	},{
	        		"data" : "serial",
	        		"sortable" : false,
	        		"searchable" : false
	        	},{ "data": "busino",
	            	"width": "10%",
	            	"sortable": false,
	            	"searchable": false,
	            	"render": function (data, type, full) {
	            		if(data.substr(0,2) == "IA"){
	            			return "";
	            		}
	            		return "<a class='edit' href='javascript:;' data-src='" + data.busino + "'>编辑 </a>";
	            	}
	            }
	        	]
	        }
		});
		$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;新增业务编码</button></div>");
		var sendData = ["busino"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        
	    $('#add_btn').click(function(){
	    	$("#a_busino").val("");
            $("#a_busina").val("");
            $("#a_acbrlv").select2("val","0");
            $("#a_itemcd").select2("val","2231");
            $("#a_subsac").val("");
            $("#a_asgnbr").val("");
            $("#a_bzprtp").select2("val","00");
            $("#a_isatop").select2("val","0");
            $("#a_serial").val("");
	    	$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
	    	$("#addModal").modal('show');
	    });
	    
	    $('#a_acbrlv').select2({
	    	data:acbrlvDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}

	    });
	    
	    $('#a_isatop').select2({
	    	data:isatopDict,
	    	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
	    });
	    
	    $('#a_bzprtp').select2({
	    	data:bzprtpDict,
	    	formatSelection: function(item){
				return item.desctx;
			},
		    formatResult: function(item){
				return item.desctx;
			}
	    });
	    
	    $('#a_itemcd').select2({
	    	data:itemDict,
	    	formatSelection: function(item){
				return item.itemna;
			},
		    formatResult: function(item){
				return item.itemna;
			}
	    });
	};
	//维护业务编码窗口
	var modModal = function(){
		//表单验证
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	m_busina: {
                    required: true
            	}
            },
            messages: {
            	m_busina: {
                    required: "内部户名称必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#mod-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            submitHandler: function (form) {
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
           
		});
		
		
		 $('#m_save').click(function(){
			 if(!$('#mod-form').validate().form()){
					return;
			}
			
			var busino = $('#m_busino').val();
			var busina = $('#m_busina').val();
 			var input = {};
 			input.busino = busino;
 			input.busina = busina;
 			console.info(input);
 			Sunline.ajaxRouter(
         	"inac/upbusi", 
         	 input,
         	"POST",
             function(redata){
         		//success func
         		//console.info("success:",redata);
         		//console.info(redata);
         		if(redata.retCode!='0000'){
         			bootbox.alert(redata.retMsg);
         			return;
         		}
         		var info = '业务编码：['+busino+'],已更名为：['+busina+']';
         		bootbox.alert(info, function() {
         			$("#m_busino").val("");
                     $("#m_busina").val("");
         			$("#editModal").modal('hide');
         			grid.submitFilter();
                 }); 
         	},
         	function(redata){
         		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
         			$("#m_busino").val("");
                    $("#m_busina").val("");
         			$("#editModal").modal('hide');
                 }); 
         	},
         	"json",
         	false); 
 		});
		
	};
	//新增业务编码窗口
	var handlerAddmodal = function(){
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	a_busino: {
                    required: true
                },
                a_busina: {
                    required: false
                },
                a_itemcd: {
                	required: true
                },
                a_subsac: {
                	required: true
                },
                a_bzprtp: {
                	required: true
                }
            },
            messages: {
            	a_busino: {
                    required: "业务编码必填"
                },
                a_busina: {
                    
                },
                a_itemcd: {
                    required: "科目必填"
                },
                a_subsac: {
                    required: "子户号必填"
                },
                a_bzprtp: {
                    required: "属性类型必填"
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
			var busina = $("#a_busina").val();
			var busino = $("#a_busino").val();
			var input={};
			input.busino =busino;
			input.busina =busina;
			input.acbrlv =$("#a_acbrlv").select2("val");
            input.itemcd =$("#a_itemcd").select2("val");
            input.subsac =$("#a_subsac").val();
            input.asgnbr =$("#a_asgnbr").val();
            input.bzprtp =$("#a_bzprtp").select2("val");
            input.isatop =$("#a_isatop").select2("val");
            input.serial =$("#a_serial").val();
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/inbusi", 
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
                		var info = '新增业务编码：['+busina+']成功,业务编码IA为：['+busino+']';
                		bootbox.alert(info, function() {
                			$("#a_busina").val("");
                			$("#a_busino").val("");
                			$("#a_acbrlv").select2("val","");
                			$("#a_itemcd").select2("val","");
                			$("#a_subsac").val("");
                			$("#a_asgnbr").val("");
                			$("#a_bzprtp").select2("val","");
                			$("#a_isatop").select2("val","");
                			$("#a_serial").val("");
                			$("#addModal").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
                			$("#a_busina").val("");
                			$("#a_busino").val("");
                			$("#a_acbrlv").select2("val","");
                			$("#a_itemcd").select2("val","");
                			$("#a_subsac").val("");
                			$("#a_asgnbr").val("");
                			$("#a_bzprtp").select2("val","");
                			$("#a_isatop").select2("val","");
                			$("#a_serial").val("");
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
            modModal();
        }
    }
}()