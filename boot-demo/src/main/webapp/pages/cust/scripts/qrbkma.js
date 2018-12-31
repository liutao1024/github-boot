var Qryac=function(){
	
	
	var yesDict=[{"id":"Y","text":"是[Y]"},{"id":"N","text":"否[N]"}];
	$("#a_ysorno").select2({data:yesDict});
	
	var grid = new Datatable();
	var handleTable=function(){
		var url = Sunline.ajaxPath("cust/qrbkma");
		grid.setAjaxParam("prcsid","");
		var editForm = function(nRowA){
			console.info($(nRowA[0]).text());
			$("#m_prcsid").val($(nRowA[0]).text());
			$("#m_prcsnm").val($(nRowA[1]).text());
			$("#m_ysorno").val($(nRowA[2]).text());
			$("#m_ysorno").select2({data:yesDict});
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
		            	"data": "prcscd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prcsna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ysorno",
		            	"sortable": false,
		            	"searchable": false
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
		$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;新增需验证交易码</button></div>");
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
			grid.setAjaxParam("prcsid",$('#prcsid').val());
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#prcsid').val("");
		});
	};
	//维护窗口
	var modModal = function(){
		//表单验证
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	m_ysorno: {
                    required: true
            	}
            },
            messages: {
                m_ysorno: {
                    required: "校验状态必填"
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
		
 			var input = {};
 			input.prcsid = $('#m_prcsid').val();
 			input.ysorno = $('#m_ysorno').val();
 			console.info(input);
 			Sunline.ajaxRouter(
         	"cust/upbkma", 
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
         			$("#m_prcsid").val("");
                     $("#m_ysorno").val("");
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
	var handlerAddmodal = function(){
		
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
	};
	
	return {

        //main function to initiate the module
        init: function () {
            handleTable();
            handlerAddmodal();
            modModal();
            
        }
    };	
}();