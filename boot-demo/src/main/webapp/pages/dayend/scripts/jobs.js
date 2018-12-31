var Jobs = function () {

	var handleTable = function () {
		
		var grid = new Datatable();
		var url = Sunline.ajaxPath("/services/rest/dayend/jobs");
		var editForm = function(nRowA){
			$('#m_job_cd').val($(nRowA[0]).text());
			$('#m_job_name').val($(nRowA[1]).text());
			$('#m_job_code').val($(nRowA[2]).text());
			$('#m_job_type').each(function(i,n){
				if(n.option==$(nRowA[3]).text()){
					n.selected="selected";
					return true;
				}
				return false;				
			});
			$('#m_mproc_field').val($(nRowA[4]).text());
			$('#m_max_proc').val($(nRowA[5]).text());
			$('#m_job_abort_flag').val($(nRowA[6]).text());
			$('#m_ver').val($(nRowA[7]).text());
           	$("#editModal").modal('show');
		}
		grid.init({
	        src: $("#job_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            
	        },
	        onError: function (grid) {
	            
	        },
	        dataTable: {  
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [{ 
	            		"data": "job_cd",
	            		"sortable": false,
	            		"searchable": false
	            	},{ 
	            		"data": "job_name",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "job_code",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "job_type",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "mproc_field",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "max_proc",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "job_abort_flag",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ver",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "16%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.user_cd + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.user_cd + "'>删除 </a>";
		            	}
		            }
	            ]
	        }
	    });
		 var sendData = ["job_cd"];
	        grid.bindTableDelete(sendData);
	        grid.bindTableEdit(sendData,editForm);
	        $("#add_new_job").click(function(){
	        	$("#addModal").modal('show');
	        	
	        });         
	}; 
	
	var handleValidation = function() {
		//编辑表单验证开始
             var editform = $("#edit_form");
             var editerror = $('.alert-danger', editform);
             var editsuccess = $('.alert-success', editform);
             var validator=editform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则      
 	                m_job_name : 
 	                {
 	                	required : true,
 	                	rangelength:[2,60]
 	                },   
 	                m_job_cod: {
 	                	required : false,
 	                	rangelength:[7,200]               	
 	                },
 	                m_mproc_field : 
 	                {
 	                	required : false,
 	                	rangelength:[5,60]   	
 	                },
 	                m_max_proc:
 	                {   
 	                	required : false,
 	                 	number : true            	
 	                },
 	               m_job_abort_flag:
	                {   
	                	required : false,
	                	rangelength:[1,1]           	
	                },
	                m_ver:
 	                {   
 	                	required : false,
 	                 	number : true            	
 	                },
 	            },

                 invalidHandler: function (event, validator) {              
                     editsuccess.hide();
                     editerror.show();
                     Metronic.scrollTo(editerror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },

                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },

                 unhighlight: function (element) { 
                     
                 },

                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 },
                 submitHandler: function (form) {
                     editsuccess.show();
                     editerror.hide();
                    // form[0].submit(); // submit the form
                 }
             });
             //编辑表单验证结束
             //新增表单验证开始
             var addform = $("#add_form");
             var adderror = $('.alert-danger', addform);
             var addsuccess = $('.alert-success', addform);
             var validator=addform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则      
 	                add_job_cd : 
 	                {
 	                	required : true,
 	                	rangelength:[2,20]
 	                },  
 	                add_job_name : 
	                {
	                	required : true,
	                	rangelength:[2,60]
	                },   
	                add_job_cod: {
	                	required : false,
	                	rangelength:[7,200]               	
	                },
	                add_mproc_field : 
	                {
	                	required : false,
	                	rangelength:[5,60]   	
	                },
	                add_max_proc:
	                {   
	                	required : false,
	                 	number : true            	
	                },
	                add_job_abort_flag:
	                {   
	                	required : false,
	                	rangelength:[1,1]           	
	                },
	                add_ver:
	                {   
	                	required : false,
	                 	number : true            	
	                },
 	            },

                 invalidHandler: function (event, validator) {              
                     addsuccess.hide();
                     adderror.show();
                     Metronic.scrollTo(adderror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },

                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },

                 unhighlight: function (element) { 
                     
                 },

                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 },
                 submitHandler: function (form) {
                     addsuccess.show();
                     adderror.hide();
                    // form[0].submit(); // submit the form
                 }
             });
             //新增表单验证结束
             
             $("#btn_save").click(function(){
            	 validator.resetForm();
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	        	$('.alert-danger', $('#edit_form')).hide();
 	        });
 	        $("#editModal").on("hide.bs.modal",function(){
 	        	//alert("关闭");
 	        	validator.resetForm();
 	        	$('.form-group').removeClass('has-error').removeClass("has-success");
 	         	$('.alert-danger', $('#edit_form')).hide();        	
 	        });   
     };
	return {
        init: function () {
            handleTable();
            handleValidation();       
        }

    };
	
}();