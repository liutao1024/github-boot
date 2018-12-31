var qrbrch=function(){
	
	var brchtpDict = Sunline.getDict("E_BRCHTP");	//部门类型
	var brchlvDict = Sunline.getDict("E_BRCHLV");	//机构级别
	var brchstDict = Sunline.getDict("E_BRCHST");	//机构日结状态
	var centtgDict = Sunline.getDict("E_YES__");	//是否中心标志
	
	var formartDict = function(dict,value){
		for(var i=0 ; i<dict.length ; i++){
			if(value == dict[i].dictId){
				return dict[i].dictName;
			}
			if(value == dict[i].dictName){
				return dict[i].dictId;
			}
		}
		return value;
	};
	
	$("#m_brchtp").select2({
		data : brchtpDict,
		allowClear : true
	});
	$("#m_brchlv").select2({
		data : brchlvDict,
		allowClear : true
	});
	$("#m_brchst").select2({
		data : brchstDict,
		allowClear : true
	});


	var grid = new Datatable();
	var handleTable=function(){
		var url = Sunline.ajaxPath("cust/qrbrch");
		grid.setAjaxParam("brchno","");
		var editForm = function(nRowA){
			console.info($(nRowA[0]).text());
			$("#m_corpno").val($(nRowA[0]).text());
			$("#m_brchno").val($(nRowA[1]).text());
			$("#m_cityno").val($(nRowA[2]).text());
			$("#m_brchna").val($(nRowA[3]).text());
			$("#m_brnosh").val($(nRowA[4]).text());
			$("#m_brsmna").val($(nRowA[5]).text());
			$("#m_nodebr").val($(nRowA[6]).text());
			//$("#m_brchlv").val($(nRowA[7]).text());
			$('#m_brchlv').select2("val",formartDict(brchlvDict,$(nRowA[7]).text()));
			$("#m_brchtp").select2("val",formartDict(brchtpDict,$(nRowA[8]).text()));
			$("#m_brchst").select2("val",formartDict(brchstDict,$(nRowA[9]).text()));
			$("#m_postcd").val($(nRowA[10]).text());
			$("#m_addres").val($(nRowA[11]).text());
			$("#m_telecd").val($(nRowA[12]).text());
			$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
           	$("#editModal").modal('show');
		};
		grid.init({
	        src: $("#inac_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{     
	            	"data": "corpno",
	            	"sortable": false,
	            	"searchable": false
	            },{     
	            	"data": "brchno",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "cityno",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "brchna",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "brnosh",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "brsmna",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "nodebr",
	            	"sortable": false,
	            	"searchable": false
	            },{							
					"data" : "brchlv",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < brchlvDict.length; i++) {
							if (brchlvDict[i].dictId == data) {
								return brchlvDict[i].dictName;
							}
						}
					}
				},{							
					"data" : "brchtp",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < brchtpDict.length; i++) {
							if (brchtpDict[i].dictId == data) {
								return brchtpDict[i].dictName;
							}
						}
					}
				},{							
					"data" : "brchst",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < brchstDict.length; i++) {
							if (brchstDict[i].dictId == data) {
								return brchstDict[i].dictName;
							}
						}
					}
				},{ 
	            	"data": "postcd",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "addres",
	            	"sortable": false,
	            	"searchable": false
	            },{ 
	            	"data": "telecd",
	            	"sortable": false,
	            	"searchable": false
	            },{							
					"data" : "centtg",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < centtgDict.length; i++) {
							if (centtgDict[i].dictId == data) {
								return centtgDict[i].dictName;
							}
						}
					}
				},{
		            	"data": null,
		            	"width": "10%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.acctno + "'>编辑 </a>";
		            	}
		            }
	            ]
	        }
	    });
	//	$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;新增需验证交易码</button></div>");
		var sendData = ["prcsid","prcsnm","ysorno"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
//        grid.addBindEvent(".qryTrans", "click", sendData,
//				function(data) {
//			// 显示配置窗口
//        	loadQryTransPage(data);
//			$("#edit_setting").modal("show");
//		});
	    $('#add_btn').click(function(){
	    	$("#a_prcsid").val("");
            $("#a_prcsnm").val("");
            $("#a_ysorno").val("");
	    	$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
	    	$("#addModal").modal('show');
	    });
//	    $("#a_select").change(function(){
//	    });
	    
	  //查询
		$('#submit').click(function(){
			grid.setAjaxParam("brchno",$('#brchno').val());
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#brchno').val("");
		});
	};
	//维护窗口
	var modModal = function(){
		//表单验证
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
          /*  rules:{
            	m_ysorno: {
                    required: true
            	}
            },
            messages: {
                m_ysorno: {
                    required: "校验状态必填"
                }
            },*/

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
		
 			var input = {};
 			input.corpno = $('#m_corpno').val();
 			input.brchno = $('#m_brchno').val();
 			input.cityno = $('#m_cityno').val();
 			input.brchna = $('#m_brchna').val();
 			input.brnosh = $('#m_brnosh').val();
 			input.brsmna = $('#m_brsmna').val();
 			input.nodebr = $('#m_nodebr').val();
 			input.brchlv = $('#m_brchlv').val();
 			input.brchtp = $('#m_brchtp').val();
 			input.brchst = $('#m_brchst').val();
 			input.postcd = $('#m_postcd').val();
 			input.addres = $('#m_addres').val();
 			input.telecd = $('#m_telecd').val();
 			console.info(input);
 			Sunline.ajaxRouter(
         	"cust/upbrch", 
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
         		var info = '修改成功';
         		bootbox.alert(info, function() {
         			/*$("#m_prcsid").val("");
                     $("#m_ysorno").val("");*/
                    $('#m_corpno').val("");
          			$('#m_brchno').val("");
          			$('#m_cityno').val("");
          			$('#m_brchna').val("");
          			$('#m_brnosh').val("");
          			$('#m_brsmna').val("");
          			$('#m_nodebr').val("");
          			$('#m_brchlv').val("");
          			$('#m_brchtp').val("");
          			$('#m_brchst').val("");
          			$('#m_postcd').val("");
          			$('#m_addres').val("");
          			$('#m_telecd').val("");
         			$("#editModal").modal('hide');
         			grid.submitFilter();
                 }); 
         	},
         	function(redata){
         		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
         			$("#m_acctno").val("");
                    $("#m_acctna").val("");
         			$("#editModal").modal('hide');
                 }); 
         	},
         	"json",
         	false); 
 		});
		
	}
	//新增内部户窗口
/*	var handlerAddmodal = function(){
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{          
                a_prcsid: {
                    required: true
                },
				a_prcsnm: {
					required: true
				},
                a_ysorno: {
                	required: true
                }
            },
            messages: {
                a_prcsid: {
                    required: "交易码必填"
                },
                a_prcsnm: {
                	required: "交易名称必填"
                },
                a_ysorno: {
                	required: "是否校验状态必填"
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
			
			var input={};
			
			if("" == $("#a_prcsid").val() && "" == $("#a_ysorno").val()){
				bootbox.alert("交易码和校验状态必填");
			}
			input.prcsid = $("#a_prcsid").val();
			input.prcsnm =$("#a_prcsnm").val();
			input.ysorno =$("#a_ysorno").val();
			
            console.info(input);
            Sunline.ajaxRouter(
                	"cust/inbkma", 
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
                		var info = '新增交易码：['+$("#a_prcsid").val()+']验证完成！';
                		bootbox.alert(info, function() {
                			$("#a_prcsid").val("");
                            $("#a_prcsnm").val("");
                            $("#a_ysorno").val("");
                			$("#addModal").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
                			$("#a_prcsid").val("");
                            $("#a_prcsnm").val("");
                            $("#a_ysorno").val("");
                			$("#addModal").modal('hide');
                        }); 
                	},
                	"json",
                	false); 
		});
	};*/

	return {

        //main function to initiate the module
        init: function () {
            handleTable();
            modModal();
            
        }
    };	
}();



/*
 * {"data": "brchlv","sortable": false,"searchable": false,
	            	"render" : function(data,type,full){
	            		for(var i=0 ; i<froztpDict.length ; i++){
	            			if(data == brchlvDict[i].dictId){
	            				return brchlvDict[i].dictName;
	            			}
	            		}
	            		return data;
	            }},
 * 
 */
