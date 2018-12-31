var treeDefn=function(){
//	  var crcycdDict=Sunline.getDict("crcycd");
//      $("#tree_crcycd").select2({
//    	  data:crcycdDict
//      });
	
	var merctpDict = Sunline.getDict("cmtype");		//合作类型
      
	  var handleTable=function(treeOption){	
		  console.info(treeOption);
		  var treeurl = Sunline.ajaxPath("kcm/selKcmDefn");		
		  $("#merctp").select2({
				data : merctpDict
			});
		  var mercDict=Sunline.getDict("","/merc","merccd","mercna");
			$("#tree_merccd").select2({
		 			data:mercDict
		 		});
			$("#tree_pmercd").select2({
				data:mercDict
			});
		  treeOption.treegrid.init({
		        src: $("#tree_ajax"),
		        deleteData: treeOption.sendData,
		        onSuccess: function (treegrid) {
		            // execute some code after table records loaded
		        },
		        onError: function (treegrid) {
		            // execute some code on network or other general error  
		        },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": treeurl, // ajax source
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
				            	"data": "pmercd",
				            	"sortable": false,
				            	"searchable": false
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
			var editform = $("#edit_tree_form");
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
					
					/*
					 * 提交数据,必须是json对象 返回也必须是json对象
					 */
					var data = {};
					$.each($("input", editform), function(i, n) {
						data[n.name] = n.value;
					});

					Sunline.ajaxRouter("kcm/addKcmRelaTree", data, "post", function(redata) {
						$('.msg', editform).text(redata.msg);
						if (redata.ret == "success") {
							$('.alert-success', editform).show();
							$('.alert-danger', editform).hide();
							$('#merccd', editform).attr("readOnly", true);
							$('#pmercd', editform).attr("readOnly", true);
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
		  treeOption.treegrid.bindTableDelete(treeOption.sendData);
		  treeOption.treegrid.bindTableEdit(treeOption.sendData,treeOption.totreeEditForm);	
		  $("#btn_save_tree").bind("click",function(){
  			$("#edit_tree_form").submit();
  		});
	  };	
	return {
		init:function(treeOption){
			handleTable(treeOption);		
		}
	}
}();