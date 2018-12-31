var Branch = function(){
	
	var handleTree = function(){
		var branchTree = new Tree();
		//选择节点事件
		var onSelectedNode = function(e,data){
			//console.log(data.selected[0]);
			var url = '/services/rest/auth/'+data.selected[0];
			console.log(url);
			Sunline.ajaxRouter(url,data.selected[0],"GET",function(rec){
    			//console.log(rec);
    			$('#branch_cd').val(data.selected[0]);
    			$('#branch_name').val(rec.branch_name);
    			//$('#branch_type > option[value="1"]').attr('selected',true);
    			$("#branch_type").select2('val',rec.branch_type); 
    			//console.log($('#branch_type > option[value="1"]').attr('selected'));
    			$('#branch_status').select2("val",rec.branch_status);
    			$('#branch_address').val(rec.branch_address);
    			$('#zipcode').val(rec.branch_unicode);
    		},null,"json",true);
		};
		var options = {	src: "#branch_tree",
						url: "/services/rest/auth/branch",
						qrysrc: "#qryBranch",
						selectedEvent:onSelectedNode,
						menu:{
			            	"items":{
			            		"新增机构":{
			            			"label":"新增机构",
			            			"action"			: function (data) {
			    						var inst = $.jstree.reference(data.reference),
			    							obj = inst.get_node(data.reference);
			    						console.info(obj);
			    						/*inst.create_node(obj, {}, "last", function (new_node) {
			    							setTimeout(function () { inst.edit(new_node);
				    							var c_id = obj.children.length+"0";
				    							new_node.id = new_node.parent+c_id;
				    							console.info(new_node);
			    							},0);
			    							});*/
			    						var c_id = (obj.children.length+1)+"0";
			    						//$('#add_branch_cd').val(obj.id+c_id);
			    						$('#add_parent').val(obj.id);
			    						$("#myModal").modal('show');
			    						
			    					}
			            		}, 
			            		"删除机构":{
			            			"label":"删除机构",
			            			"action": function (data) {
			            				var confirmMessage = "确定删除该机构吗？";
			            				bootbox.confirm(confirmMessage, function(result) {
				    						if(result){
					    						var inst = $.jstree.reference(data.reference),
					    							obj = inst.get_node(data.reference);
					    						if(inst.is_selected(obj)) {
					    							inst.delete_node(inst.get_selected());
					    						}
					    						else {
					    							inst.delete_node(obj);
					    						}
				    						}else{
				    							return;
				    						}
			            				});
			    					}
			            		}
			            	}
			            }
					};
		branchTree.init(options);		
	};
	
	var handleForm = function(){
		Sunline.initForm();
    	Sunline.initValidator();
		$("#zipcode").inputmask({
            "mask": "9",
            "repeat": 6,
            "greedy": false
        });
	};
	
	var handlerAddBranch = function(){
		var form1 = $('#add_form');
		var url = Sunline.ajaxPath("/services/rest/auth/branch_cd");
		var validator1 = form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules : {
                branch_cd: {
                    minlength: 1,
                    required: true,
					remote : {
						url : url,
						data : $("#branch_cd").val()
					}
                },
                branch_name : {
                	required:true
                },
                branch_type : {
                	required:true
                },
                branch_status : {
                	required:true
                },
                branch_address : {
                	required:true
                },
                zip_code : {
                	required:true,
                	minlength:6,
                	maxlength:6,
                	digits:true
                }
			},
			messages : {
				branch_cd : {
                	minlength: jQuery.validator.format("请最少输入 {0} 位！"),
                	required : jQuery.validator.format("此项为必输项，请输入相关内容！"),
                	remote : jQuery.validator.format("此编号已存在，请重新输入！")
                }
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
                	alert("验证通过");
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
	};
	var handlerEditBranch = function(){
		var form2 = $('#edit_form');
		var url = Sunline.ajaxPath("/services/rest/auth/branch_cd");
		var validator2 = form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules : {
                branch_cd: {
                    minlength: 1,
                    required: true,
					remote : {
						url : url,
						data : $("#branch_cd").val()
					}
                },
                branch_name : {
                	required:true
                },
                branch_type : {
                	required:true
                },
                branch_status : {
                	required:true
                },
                branch_address : {
                	required:true
                },
                zip_code : {
                	required:true,
                	minlength:6,
                	maxlength:6,
                	digits:true
                }
			},
			messages : {
				branch_cd : {
                	minlength: jQuery.validator.format("请最少输入 {0} 位！"),
                	required : jQuery.validator.format("此项为必输项，请输入相关内容！"),
                	remote : jQuery.validator.format("此编号已存在，请重新输入！")
                }
			},
            invalidHandler: function (event, validator) { //display error alert on form submit              
                /*success1.hide();
                error1.show();
                Metronic.scrollTo(error1, -200);*/
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
	};
	return {
		init: function(){
			handleTree();
			handleForm();
			handlerAddBranch();
			handlerEditBranch();
		}
	};
}();