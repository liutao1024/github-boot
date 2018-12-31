var addnew = function() {

	var  q_subjid;
	var roleDict = [];
	Sunline.ajaxRouter("bbs/getRole", null, 'get',
			function(ret) {
			$.each(ret, function(i, n){
	             n.text=n['dictName']+"["+n['dictId']+"]";
	             n.id=n['dictId'];            
	             });
			roleDict = ret;
			},null,null,false);
	
	//console.log(roleDict);
	
	$("input[name='recvrl']").select2({        // 接受角色
		data : roleDict,
		allowClear : true
	});      
	var handleTable = function(q_subjid) {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("bbs/qrcont");
	
	
	     grid.setAjaxParam("getid",q_subjid);
		grid.init({
					src : $("#datatable_add"),
					//deleteData : sendData,
					onSuccess : function(grid) {
						// execute some code after table records loaded
					},
					onError : function(grid) {
						// execute some code on network or other general error
					},
					dataTable : { // here you can define a typical datatable
									// settings from
									// http://datatables.net/usage/options
						"ajax" : {
							"url" : url, // ajax source
						},
						"columns" : [
								{
									"data" : "subjid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "contnt",
									"sortable" : false,
									"searchable" : false
								},
							
								
								{
									"data" : "subdl1",
									"sortable" : false,
									"searchable" : false,
								}
								 ]
					}
				});
		

	
	$('#submit').click(function(){
		Sunline.ajaxRouter("bbs/sdsubj", {"recvrl": $('#recvrl').val(),"subjid":q_subjid} , 'post',
				function(ret) {
			
			      //alert(date);
			      if (ret.ret === "success") {
						bootbox.alert("待办事项已发送");
						//
					} else {
						bootbox.alert(ret.msg);
					}
		
		
		grid.setAjaxParam("recvrl",$('#recvrl').val());
	
		grid.submitFilter();
	});
	});
	
	$(".col-md-12").click(function(){
	   	$(".select-close").select2("close");
	});
	
	$("#add_detail").bind(
			"click",
			function() {
				// 解除input readOnly属性
				// 清空 input值
				$("input", $("#addtypeModal")).val("").trigger("change");
				//alert(q_subjid);
				$("input[name='subjid']",$("#addtypeModal")).val(q_subjid);
				//$("input[name='subjid']",$("#addtypeModal")).attr("readOnly",false);
				$("input[name='contnt']",$("#addtypeModal")).attr("readOnly",false);
				$("input[name='subjdl']",$("#addtypeModal")).attr("readOnly",false);
				//$("input[name='crcycd']",$("#addtypeModal")).attr("readOnly",false);
				$("#addtypeModal").modal('show');
				$("#addtypeModal").on(
						"hide.bs.modal",
						function() {
							$(".alert-success",
									$('form', $("#addtypeModal"))).hide();
							$('.alert-danger',
									$('form', $("#addtypeModal"))).hide();
							$(".msg", $('form', $("#addtypeModal"))).text(
									"");
							grid.submitFilter();
						});
				return false;
			});

	$("#btn_save_add").click(function() { // 保存按钮
		$('form', $("#addtypeModal")).submit();
	});

	// 赋值DIV
	var typeValid = Sunline.getValidate($('form', $("#addtypeModal")),
			function() {
				var data = {};
				$.each($("input", $("#addtypeModal")), function(i, n) {
					if (n.name != undefined && n.name != ""
							&& n.name != null) {
						data[n.name] = n.value;
					}
				});
				Sunline.ajaxRouter("bbs/adsdet", data, 'post',
						function(ret) {
							if (ret.ret === "success") {
								$(".alert-success",
										$('form', $("#addtypeModal")))
										.show();
								$('.alert-danger',
										$('form', $("#addtypeModal")))
										.hide();
							} else {
								$(".alert-success",
										$('form', $("#addtypeModal")))
										.hide();
								$('.alert-danger',
										$('form', $("#addtypeModal")))
										.show();
							}
							$(".msg", $('form', $("#addtypeModal"))).text(
									ret.msg);
						});

			}
			);

};

	return {
		init : function(q_subjid) {
			handleTable(q_subjid);
		}
	}
}();