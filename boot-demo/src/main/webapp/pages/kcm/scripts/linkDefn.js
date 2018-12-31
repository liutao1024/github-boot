var linkDefn=function(){
//	  var crcycdDict=Sunline.getDict("crcycd");
//      $("#link_crcycd").select2({
//    	  data:crcycdDict
//      });
	
	var merctpDict = Sunline.getDict("cmtype");		//合作类型
	var corefgDict = Sunline.getDict("corefg");		//是否核心商户
	var relatpDict = Sunline.getDict("relatp");		//上下游标志
      
	  var handleTable=function(linkOption){	
		  $("#merctp").select2({
				data : merctpDict
			});
			$("#link_corefg").select2({
				data : corefgDict
			});
			$("#link_relatp").select2({
				data : relatpDict
			});
			var mercDict=Sunline.getDict("","/merc","merccd","mercna");
			$("#link_merccd").select2({
		 			data:mercDict
		 		});
		  var linkurl = Sunline.ajaxPath("kcm/selKcmDefn");		 		      
		  linkOption.linkgrid.init({
		        src: $("#link_ajax"),
		        deleteData: linkOption.sendData,
		        onSuccess: function (linkgrid) {
		            // execute some code after table records loaded
		        },
		        onError: function (linkgrid) {
		            // execute some code on network or other general error  
		        },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": linkurl, // ajax source
			            },
			            "bDestroy" :true,
			            "bServerSide":true,
			            "columns" : [
			                { 
				            	"data": "defncd",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "merccd",
				            	"sortable": false,
				            	"searchable": false
				            },{
								"data" : "corefg",
								"sortable" : false,
								"searchable" : false,
								"render" : function(data, type, full) {
									for (var i = 0; i < corefgDict.length; i++) {
										if (corefgDict[i].id == data) {
											return corefgDict[i].text;
										}
									}
								}
							},{
								"data" : "relatp",
								"sortable" : false,
								"searchable" : false,
								"render" : function(data, type, full) {
									for (var i = 0; i < relatpDict.length; i++) {
										if (relatpDict[i].id == data) {
											return relatpDict[i].text;
										}
									}
								}
							},{
								"data" : "cmtype",
								"sortable" : false,
								"searchable" : false,
								"render" : function(data, type, full) {
									for (var i = 0; i < merctpDict.length; i++) {
										if (merctpDict[i].id == data) {
											return merctpDict[i].text;
										}
									}
								}
							},{
								"data" : null,
								"sortable" : false,
								"searchable" : false,
								"render" : function(data, type, full) {
									return "<a class='delete' href='javascript:;' data-src='"+ data.defncd + ","+data.merccd +","+data.cmtype +"'>删除 </a>";
								}
							}
			            ]
			        }
			    });
		  /*
			 * 表单验证方法
			 */
			var editform = $("#edit_link_form");
			var editerror = $('.alert-danger', editform);
			var editsuccess = $('.alert-success', editform);
			var validator = editform.validate({
				errorElement : 'span',
				errorClass : 'help-block help-block-error',
				focusInvalid : false,
				ignore : "",
				rules : { // 验证规则
					merccd : {
						required : true,
						maxlength : 20
					},
					defncd : {
						required : true,
						maxlength : 20
					},
					cmtype : {
						required : true,
						maxlength : 20
					}
				},

				invalidHandler : function(event, validator) {
					editsuccess.hide();
					editerror.show();
					Metronic.scrollTo(editerror, -200);
				},

				errorPlacement : function(error, element) {
					element.parent().append(error);
				},

				highlight : function(element) {
					$(element).closest('.form-group').removeClass("has-success")
							.addClass('has-error');
				},

				unhighlight : function(element) {

				},

				success : function(label, element) {
					var icon = $(element).parent('.input-icon').children('i');
					$(element).closest('.form-group').removeClass('has-error')
							.addClass('has-success'); // set success class to the
														// control group
					icon.removeClass("fa-warning").addClass("fa-check");
				},
				submitHandler : function(form) {
					console.info(123);
					/*
					 * 提交数据,必须是json对象 返回也必须是json对象
					 */
					var data = {};
					$.each($("input", editform), function(i, n) {
						data[n.name] = n.value;
					});

					Sunline.ajaxRouter("kcm/addKcmRelaLink", data, "post", function(redata) {
						$('.msg', editform).text(redata.msg);
						if (redata.ret == "success") {
							$('.alert-success', editform).show();
							$('.alert-danger', editform).hide();
							$('#merccd', editform).attr("readOnly", true);
							$('#defncd', editform).attr("readOnly", true);
						} else {
							$('.alert-success', editform).hide();
							$('.alert-danger', editform).show();
						}
					}, function() {
						$('.msg', editform).text("请求出错!");
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}, "json");
				}
			});
		  linkOption.linkgrid.bindTableDelete(linkOption.sendData);
		  linkOption.linkgrid.bindTableEdit(linkOption.sendData,linkOption.tolinkEditForm);	
		  $("#btn_save_link").bind("click",function(){
  			$("#edit_link_form").submit();
  		});
	  };	
	return {
		init:function(linkOption){
			handleTable(linkOption);		
		}
	}
}();