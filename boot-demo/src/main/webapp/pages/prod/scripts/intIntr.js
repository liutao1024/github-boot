var intIntr=function(){
	var incdtpDict=Sunline.getDict("incdtp");
	var rfirtpDict=Sunline.getDict("rfirtp");
	var rfirtmDict=Sunline.getDict("rfirtm");
	  var handleTable=function(){
		  var editUrl,editbkiurl,editfenurl,editrliurl;
		  var grid = new Datatable();
		  var sendData = ["intrcd"];
		  var bkiOption={
			 bkigrid:new Datatable(),
			 tobkiEditForm:function(nRowA){
				  $('#bki_intrcd').attr("readOnly",true);
				  $('#bki_crcycd').attr("readOnly",true);
				  $('#bki_depttm').attr("readOnly",true);
				  $('#bki_efctdt').attr("readOnly",true);
				  $('#bki_intrsr').attr("readOnly",true);
				  $("#bki_rfirtm").attr("readOnly",true);
				  $('#bki_intrcd').val(bkiOption.intrId); 
				  $('#bki_crcycd').val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
				  $('#bki_depttm').val($(nRowA[1]).text().substring($(nRowA[1]).text().indexOf("[")+1,$(nRowA[1]).text().indexOf("]"))).trigger("change"); 
				  $('#bki_efctdt').val($(nRowA[2]).text()); 
				  $('#bki_inefdt').val($(nRowA[3]).text()); 
				  $('#bki_intrsr').val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
				  $('#bki_intrvl').val($(nRowA[5]).text()); 
                  $('#bki_rfircd').val($(nRowA[6]).text()); 
				  $('#bki_rfirtm').val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change"); 
				  $('#bki_flirwy').val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change"); 
				  $('#bki_flirvl').val($(nRowA[9]).text()); 
				  $('#bki_flirrt').val($(nRowA[10]).text()); 
				  $('#bki_remark').val($(nRowA[11]).text());
				  if($("#bki_intrsr").val()=='1'){							           
                      $("#bki_rfircd").attr("readOnly",true);
                      $("#bki_intrvl").attr("readOnly",false);                   
                      $('#bki_rfircd').select2('data', null);
                      $("#bki_rfirtm").select2('data', null);
				  }else if($("#bki_intrsr").val()=='0')	{					 
					 $("#bki_rfircd").attr("readOnly",false);
                     $("#bki_intrvl").attr("readOnly",true);
                     $("#bki_rfirtm").val($("#bki_depttm").val()).trigger("change");
                     var rfircdDict=Sunline.getDict({rfirtm:$("#bki_depttm").val(),crcycd:$("#bki_crcycd").val()},"/rfir","rfircd","rfirtm");
                     $("#bki_rfircd").select2({
                   	  data:rfircdDict
                     });
                     $("#bki_rfircd").val($(nRowA[6]).text()).trigger("change");
				  }	

				  editbkiurl = "intr/upBki"; 
				  $("#editBkiModal").modal("show");
			  },
			  sendData:["intrcd","crcycd","depttm","efctdt"], 
			  intrId:""
		  }
		  var fenOption={
					 fengrid:new Datatable(),
					 tofenEditForm:function(nRowA){
						  $('#fen_intrcd').attr("readOnly",true);
						  $('#fen_crcycd').attr("readOnly",true);
						  $('#fen_lvamlm').attr("readOnly",true);
						  $('#fen_efctdt').attr("readOnly",true);
						  $('#fen_intrsr').attr("readOnly",true);
						  $("#fen_rfirtm").attr("readOnly",true);
						  $('#fen_intrcd').val(fenOption.intrId); 
						  $('#fen_crcycd').val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
						  $('#fen_lvamlm').val($(nRowA[1]).text()); 
						  $('#fen_efctdt').val($(nRowA[2]).text()); 
						  $('#fen_inefdt').val($(nRowA[3]).text()); 
						  $('#fen_intrsr').val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
						  $('#fen_intrvl').val($(nRowA[5]).text()); 
		                  $('#fen_rfircd').val($(nRowA[6]).text()); 
						  $('#fen_rfirtm').val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change"); 
						  $('#fen_flirwy').val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");  
						  $('#fen_flirvl').val($(nRowA[9]).text()); 
						  $('#fen_flirrt').val($(nRowA[10]).text()); 
						  $('#fen_remark').val($(nRowA[11]).text());
						  if($("#fen_intrsr").val()=='1'){							           
		                      $("#fen_rfircd").attr("readOnly",true);
		                      $("#fen_intrvl").attr("readOnly",false);                   
		                      $('#fen_rfircd').select2('data', null);
		                      $("#fen_rfirtm").select2('data', null);
						  }else if($("#fen_intrsr").val()=='0')	{					 
							 $("#fen_rfircd").attr("readOnly",false);
		                     $("#fen_intrvl").attr("readOnly",true);
		                     var rfircdDict=Sunline.getDict({crcycd:$("#fen_crcycd").val()},"/rfir","rfircd","rfirdd");
		                      var rfircddata = [];
		          	          $.each(rfircdDict,function (i,n) {
		          	        	  $.each(rfirtmDict,function(j,m){
		          	        		  if(m.id==n.rfirtm){
		          	        		  rfircddata.push({id:n.id, text: n.text+m.dictName+"("+n.rfirtm+")"}); 
		          	        		  }          	        		
		          	        	  });
		          	        });
		                      $("#fen_rfircd").select2({
		                    	  data:rfircddata                    	  
		                      });		                     
		                     $("#fen_rfircd").val($(nRowA[6]).text()).trigger("change");
						  }	
						  editfenurl = "intr/upFen"; 
						  $("#editfenModal").modal("show");
					  },
					  sendData:["intrcd","crcycd","lvamlm","efctdt"], 
					  intrId:""
				  }
		  var rliOption={
					 rligrid:new Datatable(),
					 torliEditForm:function(nRowA){
						  $('#rli_intrcd').attr("readOnly",true);
						  $('#rli_crcycd').attr("readOnly",true);
						  $('#rli_lvamlm').attr("readOnly",true);
						  $('#rli_efctdt').attr("readOnly",true);
						  $('#rli_intrsr').attr("readOnly",true);
						  $("#rli_rfirtm").attr("readOnly",true);
						  $('#rli_intrcd').val(rliOption.intrId); 
						  $('#rli_crcycd').val($(nRowA[0]).text().substring($(nRowA[0]).text().indexOf("[")+1,$(nRowA[0]).text().indexOf("]"))).trigger("change");
						  $('#rli_dayllm').val($(nRowA[1]).text()); 
						  $('#rli_efctdt').val($(nRowA[2]).text()); 
						  $('#rli_inefdt').val($(nRowA[3]).text()); 
						  $('#rli_intrsr').val($(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"))).trigger("change");
						  $('#rli_intrvl').val($(nRowA[5]).text()); 
		                  $('#rli_rfircd').val($(nRowA[6]).text()); 
						  $('#rli_rfirtm').val($(nRowA[7]).text().substring($(nRowA[7]).text().indexOf("[")+1,$(nRowA[7]).text().indexOf("]"))).trigger("change"); 
						  $('#rli_flirwy').val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");  
						  $('#rli_flirvl').val($(nRowA[9]).text()); 
						  $('#rli_flirrt').val($(nRowA[10]).text()); 
						  $('#rli_remark').val($(nRowA[11]).text());
						  if($("#rli_intrsr").val()=='1'){							           
		                      $("#rli_rfircd").attr("readOnly",true);
		                      $("#rli_intrvl").attr("readOnly",false);                   
		                      $('#rli_rfircd').select2('data', null);
		                      $("#rli_rfirtm").select2('data', null);
						  }else if($("#rli_intrsr").val()=='0')	{					 
							 $("#rli_rfircd").attr("readOnly",false);
		                     $("#rli_intrvl").attr("readOnly",true);
		                     var rfircdDict=Sunline.getDict({crcycd:$("#rli_crcycd").val()},"/rfir","rfircd","rfirdd");
		                      var rfircddata = [];
		          	          $.each(rfircdDict,function (i,n) {
		          	        	  $.each(rfirtmDict,function(j,m){
		          	        		  if(m.id==n.rfirtm){
		          	        		  rfircddata.push({id:n.id, text: n.text+m.dictName+"("+n.rfirtm+")"}); 
		          	        		  }          	        		
		          	        	  });
		          	        });
		                      $("#rli_rfircd").select2({
		                    	  data:rfircddata                    	  
		                      });		                     
		                     $("#rli_rfircd").val($(nRowA[6]).text()).trigger("change");
						  }	
						  editrliurl = "intr/upRli"; 
						  $("#editrliModal").modal("show");
					  },
					  sendData:["intrcd","crcycd","dayllm","efctdt"], 
					  intrId:""
				  }
          var url = Sunline.ajaxPath("intr/findInt");		  
		  var toEditForm = function(nRowA){
			  $('#intrcd').val($(nRowA[0]).text()); 
			  $('#intrna').val($(nRowA[1]).text()).trigger("change");
			  $('#incdtp').val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).trigger("change"); 
			  $('#rfirtp').val($(nRowA[3]).text()); 
			  $('#efctdt').val($(nRowA[4]).text()); 			 			  
			  editUrl = "intr/upInt"; 
			  $("#editModal").modal("show");
		  };		  
		  $("#incdtp").select2({
			  data:incdtpDict
		  });
		  $("#rfirtp").select2({
			  data:rfirtpDict
		  });
		  $("#q_incdtp").select2({
			  data:incdtpDict,
			  allowClear:true,
	 		  placeholder: "请选择"
		  });
		  $("#q_rfirtp").select2({
			  data:rfirtpDict,
			  allowClear:true,
	 		  placeholder: "请选择"
		  });
		  
		  //时间插件
		  if (jQuery().datepicker) {
	            $('.date-picker').datepicker({
	                rtl: Metronic.isRTL(),
	                orientation: "left",
	                autoclose: true,
	                language: 'zh-CN',
	            });	            
	        };	       
		  grid.init({
		        src: $("#datatable_ajax"),
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
			            		"data": "intrcd",
			            		"sortable": false,
			            		"searchable": false
			            	},{ 
			            		"data": "intrna",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "incdtp",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < incdtpDict.length; i++) {
				                          if (incdtpDict[i].id == data) {
				                            return incdtpDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "rfirtp",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < rfirtpDict.length; i++) {
				                          if (rfirtpDict[i].id == data) {
				                            return rfirtpDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "efctdt",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": null,
				            	"width": "18%",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='edit_setting' href='javascript:;' data-src='" +  data.intrcd +","+ data.incdtp+ "'>配置利率 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" + data.intrcd +  "'>删除 </a>";
				            	}
				            }
			            ]
			        }
			    });
			
				 grid.bindTableDelete(sendData); 				
				 grid.bindTableEdit(sendData,toEditForm);
			     grid.addBindEvent(".edit_setting","click",["intrcd","incdtp"], function(data){ 
			        	if(data.incdtp=='2'){//行内基准利率	
			        		bkiOption.bkigrid.setAjaxParam("intrcd",data.intrcd);
			        		bkiOption.intrId=data.intrcd;
			        		bkiIntr.init(bkiOption);
			        		$("#add_bki_set").append(
									"<div class='table-actions-wrapper'><span></span>"
											+ "<button id='add_bki_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
			        		$("#bki_setting").modal("show");
			        	}else if(data.incdtp=='3'){//行内分层利率
			        		fenOption.fengrid.setAjaxParam("intrcd",data.intrcd);
			        		fenOption.intrId=data.intrcd;
			        		fenIntr.init(fenOption);
			        		$("#add_fen_set").append(
									"<div class='table-actions-wrapper'><span></span>"
											+ "<button id='add_fen_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
			        		$("#fen_setting").modal("show");
			        	}else if(data.incdtp=='4'){//行内靠档利率
			        		rliOption.rligrid.setAjaxParam("intrcd",data.intrcd);
			        		rliOption.intrId=data.intrcd;
			        		rliIntr.init(rliOption);
			        		$("#add_rli_set").append(
									"<div class='table-actions-wrapper'><span></span>"
											+ "<button id='add_rli_btn' class='btn btn-sm green table-group-action-submit'>新增</button></div>");
			        		$("#rli_setting").modal("show");
			        	}else if(data.incdtp=='5'){
			        		bootbox.alert("协议利率无配置数据");
			        	}else{
			        		bootbox.alert("不支持的利率类型！");
			        	}		        	
			      }); 
			     
			     //下拉框
			     $("#editfenModal").click(function(){
			      	  $(".select-close-1").select2("close");
			      	  $(".select-close-2").select2("close");
			      	  $(".select-close-3").select2("close");
			      	  $(".select-close-4").select2("close");
			        });
			     
			        /*
				   	 * 主表表单验证方法
				   	 */ 
			       var editform = $("#edit_form");
		           var editerror = $('.alert-danger', editform);
		           var editsuccess = $('.alert-success', editform);
		           var  validator=editform.validate({
		               errorElement: 'span', 
		               errorClass: 'help-block help-block-error', 
		               focusInvalid: false, 
		               ignore: "",
		               rules: { //验证规则      
		            	   intrcd : 
			                {
			                	required : true,
			                	maxlength:20
			                },   
			                intrna: {
			                	required : true,
			                	maxlength:80
			                },
			                incdtp : 
			                {
			                	required : true, 
			                	maxlength:3   	
			                },
			                rfirtp:
			                {
			                	required : true,
			                	maxlength:3             	
			                },
			                efctdt:
			                {
			                	required : true,
			                	maxlength:8
			                }
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
				        	var data={};
			           	 $.each($(".form-value",editform),function(i,n){
			           		 data[n.name]=n.value;
			           	 });
			           	// console.info("data",data);
			           	Sunline.ajaxRouter(editUrl,data,"post",function(redata){ 
							$('.msg', editform).text(redata.msg);
							if(redata.ret=="success"){
								$('.alert-success', editform).show();
								$('.alert-danger', editform).hide(); 
							   	$('#rfircd',editform).attr("readOnly",true);
					         	$('#crcycd',editform).attr("readOnly",true);
					         	$('#rfirtm',editform).attr("readOnly",true);
					         	$('#efctdt',editform).attr("readOnly",true);
							}else{		
								$('.alert-success', editform).hide();
								$('.alert-danger', editform).show(); 							
							}
							},function(){
								$('.msg', editform).text("请求出错!");
								$('.alert-success', editform).hide();
								$('.alert-danger', editform).show(); 
							},"json"); 
		               }
		           }); 
		           //新增窗口
			        $("#add_btn").bind("click",function(){	
			        	editerror.hide();
		   	         	editsuccess.hide();
		   	     	    $('.msg', editform).text("");	
			        	$('input',editform).attr("readOnly",false);
			        	$('input',editform).val("").trigger("change");
			        	editUrl = "intr/addInt"; 
			        	$("#editModal").modal('show');	
			            $("#editModal").on("hide.bs.modal",function(){
			          	    editerror.hide();
			   	         	editsuccess.hide();
			   	     	    validator.resetForm();
			   				$('.msg', editform).text("");	
			   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
			   	        	grid.submitFilter();       	
			   	        }); 
			            return false;
			        }); 
		       		           
		           /*
				   	 * bki表单验证方法
				   	 */ 
			       var editbkiform = $("#edit_bki_form");
		           var editbkierror = $('.alert-danger', editbkiform);
		           var editbkisuccess = $('.alert-success', editbkiform);
		           var  bkivalidator=editbkiform.validate({
		               errorElement: 'span', 
		               errorClass: 'help-block help-block-error', 
		               focusInvalid: false, 
		               ignore: "",
		               rules: { //验证规则      
		            	   intrcd : 
			                {
			                	required : true,
			                	maxlength:20
			                },   
			                depttm: {
			                	required : true,
			                	maxlength:3
			                },
			                crcycd : 
			                {
			                	required : true, 
			                	maxlength:3   	
			                },
			                efctdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true             	
			                },
			                inefdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true
			                },
			                intrsr:
			                {
			                	required : true,
			                	maxlength:8
			                },
			                intrvl:
			                {
			                	required : true,
			                	maxlength:11,
			                	number:true
			                },
			                rfircd:
			                {
			                	maxlength:20
			                },
			                rfirtm:{
			                	maxlength:8
			                },
			                flirwy:{
			                	maxlength:8
			                },
			                flirvl:{
			                	maxlength:11
			                },
			                flirrt:{
			                	maxlength:21
			                },
			                remark:{
			                	maxlength:80
			                }			                
			            },
		               invalidHandler: function (event, validator) {              
		                   editbkisuccess.hide();
		                   editbkierror.show();
		                   Metronic.scrollTo(editbkierror, -200);
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
				        	var data={};
			           	 $.each($(".form-value",editbkiform),function(i,n){
			           		 data[n.name]=n.value;
			           	 });
			           	Sunline.ajaxRouter(editbkiurl,data,"post",function(redata){ 
							$('.msg', editbkiform).text(redata.msg);
							if(redata.ret=="success"){
								$('.alert-success', editbkiform).show();
								$('.alert-danger', editbkiform).hide(); 
							}else{		
								$('.alert-success', editbkiform).hide();
								$('.alert-danger', editbkiform).show(); 							
							}
							},function(){
								$('.msg', editbkiform).text("请求出错!");
								$('.alert-success', editbkiform).hide();
								$('.alert-danger', editbkiform).show(); 
							},"json"); 
		               }
		           }); 
		           //新增bki窗口
			        $("#add_bki_btn").live("click",function(){	
		        	  editbkierror.hide();
	   	         	  editbkisuccess.hide();  
	   	     	      $('.msg', editbkiform).text("");	
		        	  $('input',editbkiform).attr("readOnly",false);		      	     
		      	      $("#bki_intrcd").attr("readOnly",true);
		        	  $("#bki_rfirtm").attr("readOnly",true);
		        	  $("#bki_rfircd").attr("readOnly",true);
                      $("#bki_intrvl").attr("readOnly",true);                   
		        	  $('input',editbkiform).val("").trigger("change");
		        	  $("#bki_intrvl").val("0");
                      $("#bki_flirvl").val("0");                   
                      $("#bki_flirwy").val("0");
                      $("#bki_flirrt").val("0"); 
		        	  $("#bki_intrcd").val(bkiOption.intrId);
		        	  editbkiurl = "intr/addBki"; 
		        	  $("#editBkiModal").modal('show');	        				        	
			        }); 
		           $("#editBkiModal").live("hide.bs.modal",function(){				     
		          	    editbkierror.hide();
		   	         	editbkisuccess.hide();  
		   	            bkivalidator.resetForm();
		   				$('.msg', editbkiform).text("");	
     	   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
		   			   bkiOption.bkigrid.submitFilter(); 
		   	        });    
		           $("#bki_setting").live("hide.bs.modal",function(){
		        	   $("#bki_ajax").off("click",".delete");
		        	   $("#add_bki_set").die("click");
		        	   bkiOption.bkigrid.clearAjaxParams;    
		           });
		           
		           /*
				   	 * fen表单验证方法
				   	 */ 
			       var editfenform = $("#edit_fen_form");
		           var editfenerror = $('.alert-danger', editfenform);
		           var editfensuccess = $('.alert-success', editfenform);
		           var  fenvalidator=editfenform.validate({
		               errorElement: 'span', 
		               errorClass: 'help-block help-block-error', 
		               focusInvalid: false, 
		               ignore: "",
		               rules: { //验证规则      
		            	   intrcd : 
			                {
			                	required : true,
			                	maxlength:20
			                },   
			                lvamlm: {
			                	required : true,
			                	maxlength:21
			                },
			                crcycd : 
			                {
			                	required : true, 
			                	maxlength:3   	
			                },
			                efctdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true             	
			                },
			                inefdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true
			                },
			                intrsr:
			                {
			                	required : true,
			                	maxlength:8
			                },
			                intrvl:
			                {
			                	required : true,
			                	maxlength:11,
			                	number:true
			                },
			                rfircd:
			                {
			                	maxlength:20
			                },
			                rfirtm:{
			                	maxlength:8
			                },
			                flirwy:{
			                	maxlength:8
			                },
			                flirvl:{
			                	maxlength:11
			                },
			                flirrt:{
			                	maxlength:21
			                },
			                remark:{
			                	maxlength:80
			                }			                
			            },
		               invalidHandler: function (event, validator) {              
		                   editfensuccess.hide();
		                   editfenerror.show();
		                   Metronic.scrollTo(editfenerror, -200);
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
				        	var data={};
			           	 $.each($(".form-value",editfenform),function(i,n){
			           		 data[n.name]=n.value;
			           	 });
			           	Sunline.ajaxRouter(editfenurl,data,"post",function(redata){ 
							$('.msg', editfenform).text(redata.msg);
							if(redata.ret=="success"){
								$('.alert-success', editfenform).show();
								$('.alert-danger', editfenform).hide(); 
							}else{		
								$('.alert-success', editfenform).hide();
								$('.alert-danger', editfenform).show(); 							
							}
							},function(){
								$('.msg', editfenform).text("请求出错!");
								$('.alert-success', editfenform).hide();
								$('.alert-danger', editfenform).show(); 
							},"json"); 
		               }
		           }); 
		           //新增fen窗口
			        $("#add_fen_btn").live("click",function(){	
		        	  editfenerror.hide();
	   	         	  editfensuccess.hide();  
	   	     	      $('.msg', editfenform).text("");	
		        	  $('input',editfenform).attr("readOnly",false);		      	     
		      	      $("#fen_intrcd").attr("readOnly",true);
		        	  $("#fen_rfirtm").attr("readOnly",true);
		        	  $("#fen_rfircd").attr("readOnly",true);
                      $("#fen_intrvl").attr("readOnly",true);                   
		        	  $('input',editfenform).val("").trigger("change");
		        	  $("#fen_intrvl").val("0");
                      $("#fen_flirvl").val("0");                   
                      $("#fen_flirwy").val("0");
                      $("#fen_flirrt").val("0"); 
		        	  $("#fen_intrcd").val(fenOption.intrId);
		        	  editfenurl = "intr/addFen"; 
		        	  $("#editfenModal").modal('show');	        				        	
			        }); 
		           $("#editfenModal").live("hide.bs.modal",function(){				     
		          	    editfenerror.hide();
		   	         	editfensuccess.hide();  
		   	            fenvalidator.resetForm();
		   				$('.msg', editfenform).text("");	
    	   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
		   			    fenOption.fengrid.submitFilter(); 
		   	        });    
		           $("#fen_setting").live("hide.bs.modal",function(){
		        	   $("#fen_ajax").off("click",".delete");
		        	   $("#add_fen_set").die("click");
		        	   fenOption.fengrid.clearAjaxParams;    
		           });	
		           
		           /*
				   	 * rli表单验证方法
				   	 */ 
			       var editrliform = $("#edit_rli_form");
		           var editrlierror = $('.alert-danger', editrliform);
		           var editrlisuccess = $('.alert-success', editrliform);
		           var  rlivalidator=editrliform.validate({
		               errorElement: 'span', 
		               errorClass: 'help-block help-block-error', 
		               focusInvalid: false, 
		               ignore: "",
		               rules: { //验证规则      
		            	   intrcd : 
			                {
			                	required : true,
			                	maxlength:20
			                },   
			                lvamlm: {
			                	required : true,
			                	maxlength:21
			                },
			                crcycd : 
			                {
			                	required : true, 
			                	maxlength:3   	
			                },
			                efctdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true             	
			                },
			                inefdt:
			                {
			                	required : true,
			                	maxlength:8,
			                	number:true
			                },
			                intrsr:
			                {
			                	required : true,
			                	maxlength:8
			                },
			                intrvl:
			                {
			                	required : true,
			                	maxlength:11,
			                	number:true
			                },
			                rfircd:
			                {
			                	maxlength:20
			                },
			                rfirtm:{
			                	maxlength:8
			                },
			                flirwy:{
			                	maxlength:8
			                },
			                flirvl:{
			                	maxlength:11
			                },
			                flirrt:{
			                	maxlength:21
			                },
			                remark:{
			                	maxlength:80
			                }			                
			            },
		               invalidHandler: function (event, validator) {              
		                   editrlisuccess.hide();
		                   editrlierror.show();
		                   Metronic.scrollTo(editrlierror, -200);
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
				        	var data={};
			           	 $.each($(".form-value",editrliform),function(i,n){
			           		 data[n.name]=n.value;
			           	 });
			           	Sunline.ajaxRouter(editrliurl,data,"post",function(redata){ 
							$('.msg', editrliform).text(redata.msg);
							if(redata.ret=="success"){
								$('.alert-success', editrliform).show();
								$('.alert-danger', editrliform).hide(); 
							}else{		
								$('.alert-success', editrliform).hide();
								$('.alert-danger', editrliform).show(); 							
							}
							},function(){
								$('.msg', editrliform).text("请求出错!");
								$('.alert-success', editrliform).hide();
								$('.alert-danger', editrliform).show(); 
							},"json"); 
		               }
		           }); 
		           //新增rli窗口
			        $("#add_rli_btn").live("click",function(){	
		        	  editrlierror.hide();
	   	         	  editrlisuccess.hide();  
	   	     	      $('.msg', editrliform).text("");	
		        	  $('input',editrliform).attr("readOnly",false);		      	     
		      	      $("#rli_intrcd").attr("readOnly",true);
		        	  $("#rli_rfirtm").attr("readOnly",true);
		        	  $("#rli_rfircd").attr("readOnly",true);
                     $("#rli_intrvl").attr("readOnly",true);                   
		        	  $('input',editrliform).val("").trigger("change");
		        	  $("#rli_intrvl").val("0");
                     $("#rli_flirvl").val("0");                   
                     $("#rli_flirwy").val("0");
                     $("#rli_flirrt").val("0"); 
		        	  $("#rli_intrcd").val(rliOption.intrId);
		        	  editrliurl = "intr/addRli"; 
		        	  $("#editrliModal").modal('show');	        				        	
			        }); 
		           $("#editrliModal").live("hide.bs.modal",function(){				     
		          	    editrlierror.hide();
		   	         	editrlisuccess.hide();  
		   	            rlivalidator.resetForm();
		   				$('.msg', editrliform).text("");	
   	   			 	$('.form-group').removeClass('has-error').removeClass("has-success");
		   			    rliOption.rligrid.submitFilter(); 
		   	        });    
		           $("#rli_setting").live("hide.bs.modal",function(){
		        	   $("#rli_ajax").off("click",".delete");
		        	   $("#add_rli_set").die("click");
		        	   rliOption.rligrid.clearAjaxParams;    
		           });	
		           
	  };
	return {
		init:function(){
			handleTable();
		}
	}
}();