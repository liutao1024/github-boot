var Period = function () {

	var handleTable = function () {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/prod/period");
		//编辑表单赋值方法--根据不同页面表格修改
		var editForm = function(nRowA){
           	$('#edit_period_cd').val($(nRowA[0]).text());
           	$('#edit_remark').val($(nRowA[1]).text());
           	$('#edit_unit').select2("val",$(nRowA[2]).text());
           	$("#period_value_edit").spinner("value",$(nRowA[3]).text());
           	$("#editModal").modal("show");
		}
        grid.init({
            src: "#datatable_ajax",
            deleteData: sendData,
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
                "ajax": {
                    "url": url, // ajax source
                },
                "columns" : [{ 
                		"data": "period_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "remark",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "period_unit",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "period_value",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "18%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.period_cd + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.period_cd + "'>删除 </a>";
		            	}
		            }
	            ]
            }
        });
        
        var sendData = ["period_cd"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        $("#add").click(function(){
        	$("#myModal").modal("show");
        	$("#myModal").on('hide.bs.modal',function(){
           		$(this).removeData("bs.modal");
           	});
        });
        var url_1 = Sunline.ajaxPath("/services/rest/prod/periodForAutocomplete");
        var data = ["oneday","sevendays","onemonth","threemonths","sixmonths","oneyear","threeyear","fiveyears"];
        $("#tt").autocomplete(data,{
    		width: 160,
    		selectFirst: false,
    		autoFill:true});
    };
    
    var handleForm = function(){
    	Sunline.initForm();
    	Sunline.initValidator();
    	$("#period_value").spinner({value:0, min: 0});
    	//$("#period_value_edit").spinner({value:0, min: 0});
    	
    };
    
    var handlerEdit = function(){
    	var form1 = $('#form');
        var url = Sunline.ajaxPath("/services/rest/prod/period_cd");
        var validator1 = form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages:{
            	name : {
	            	minlength: jQuery.validator.format("请最少输入 {0} 位！"),
	            	required : jQuery.validator.format("此项为必输项，请输入相关内容！"),
	            	remote : jQuery.validator.format("此编号已存在，请重新输入！")
            	}
            },
            rules: {
            	name: {
                    minlength: 2,
                    required: true,
					remote : {
						url : url,
						data : $("#period_cd").val()
					}
                },
                period_name : {
                	required:true
                },
                period_unit:{required:true}
            },

            invalidHandler: function (event, validator) { //display error alert on form submit              
                /*success1.hide();
                error1.show();
                Metronic.scrollTo(error1, -200);*/
            	$('.alert-danger', form1).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                if(form.validate().form()){
                	form.submit();
                }
            }
        });
        
        var form2 = $('#edit_form');
        var validator2 = form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                period_name : {
                	required:true
                },
                period_unit:{required:true}
            },

            invalidHandler: function (event, validator) { //display error alert on form submit              
                /*success2.hide();
                error2.show();
                Metronic.scrollTo(error2, -200);*/
            	$('.alert-danger', form2).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                if(form.validate().form()){
                	form.submit();
                }
            }
        });
        $("#myModal").on("hide.bs.modal",function(){
        	//alert("关闭");
        	validator1.resetForm();
        	$('.form-group').removeClass('has-error').removeClass("has-success");
        	$('.alert-danger', form1).hide();
        });
        $("#editModal").on("hide.bs.modal",function(){
        	//alert("关闭");
        	validator2.resetForm();
        	$('.form-group').removeClass('has-error').removeClass("has-success");
        	$('.alert-danger', form2).hide();
        });
    }
    return {

        //main function to initiate the module
        init: function () {
            handleTable();
            handleForm();
            handlerEdit();
        }

    };

}();