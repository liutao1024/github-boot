var whitelist = function() {

	var crcycdDict = Sunline.getDict("crcycd");
	var servtpDict = Sunline.getDict("E_SERVTP");
	var handleTable = function() {
		var editUrl;
		var grid = new Datatable();
		var sendData = ["fracct","toacct","crcycd","servtp"];
		var url = Sunline.ajaxPath("whitelist/findWhiteList");
		$("#crcycd").select2({
			data : crcycdDict,
			allowClear : true,
			placeholder : "请选择"
		});
		$("#servtp").select2({
			data : servtpDict,
			allowClear : true,
			placeholder : "请选择"
		});
		$("#a_crcycd").select2({
			data : crcycdDict,
			allowClear : true,
			placeholder : "请选择"
		});
		$("#a_servtp").select2({
			data : servtpDict,
			allowClear : true,
			placeholder : "请选择"
		});
		grid.init({
			src : $("#datatable_ajax"),
			deleteData : sendData,
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
							"data" : "fracct",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "toacct",
							"sortable" : false,
							"searchable" : false
						},
						{
							"data" : "crcycd",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								for (var i = 0; i < crcycdDict.length; i++) {
									if (crcycdDict[i].id == data) {
										return crcycdDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "servtp",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								for (var i = 0; i < servtpDict.length; i++) {
									if (servtpDict[i].id == data) {
										return servtpDict[i].text;
									}
								}
								return data;
							}
						},

						{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return "<a class='delete' href='javascript:;' "
										+ "data-src='" + data.fracct +","+ data.toacct +","+ data.crcycd +","+ data.servtp + "'>删除 </a>";
							}
						} ]
			}
		});
		
		grid.bindTableDelete(sendData);
		/*
		 * 主表表单验证方法
		 */
		var editform = $("#edit_form");
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		var validator = editform.validate({
			errorElement : 'span',
			errorClass : 'help-block help-block-error',
			focusInvalid : false,
			ignore : "",
			
			rules : { // 验证规则
				a_fracct : {
					required : false,
				},
				a_toacct : {
					required : false,
				},
				a_crcycd : {
					required : true,
				},
				a_servtp : {
					required : true,
				},
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
				var data = {};
				var inputCount = 0;
				var fracctNo = 1;
				var toacctNo = 2;
				$.each($(".form-value", editform), function(i, n) {
					if(n.name=='a_fracct' && n.value==''){
						inputCount ++;
					}
					if(n.name=='a_toacct' && n.value==''){
						inputCount ++;
					}
					if(n.name=='a_fracct' && n.value!=''){
						fracctNo=n.value;
					}
					if(n.name=='a_toacct' && n.value!=''){
						toacctNo=n.value;
					}
					console.log(n.name+','+n.value+','+inputCount);
					data[n.name] = n.value;
				});
				if(inputCount==2){
					$('.msg', editform).text("转入账号和转出账号至少输入一个");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
					return;
				}
				if(fracctNo==toacctNo){
					$('.msg', editform).text("不允许重复输入相同账号");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
					return;
				}
				// console.info("data",data);
				Sunline.ajaxRouter(editUrl, data, "post", function(redata) {
					$('.msg', editform).text(redata.msg);
					if (redata.ret == "success") {
						$('.alert-success', editform).show();
						$('.alert-danger', editform).hide();
						$('#a_fracct', editform).attr("readOnly", true);
						$('#a_toacct', editform).attr("readOnly", true);
						$('#a_crcycd', editform).attr("readOnly", true);
						$('#a_servtp', editform).attr("readOnly", true);
					} else {
						$('.alert-success', editform).hide();
						$('.alert-danger', editform).show();
					}
				}, function() {
					$('.msg', editform).text("请求出错!");
					$('.alert-success', editform).hide();
					$('.alert-danger', editform).show();
				},  "json");
			}
		});
		$('#clearwl').bind(
				"click",function(){
			$('#fracct').val("");
			$('#toacct').val("");
			$('#crcycd').select2("val","");
			$('#servtp').select2("val","");
		});
		// 新增窗口
		$("#add_btn").bind(
				"click",
				function() {
					editerror.hide();
					editsuccess.hide();
					$('.msg', editform).text("");
					$('input', editform).attr("readOnly", false);
					$('input', editform).val("").trigger("change");
					editUrl = "whitelist/addInfo";
					$("#editModal").modal('show');
					$("#editModal").on(
							"hide.bs.modal",
							function() {
								editerror.hide();
								editsuccess.hide();
								validator.resetForm();
								$('.msg', editform).text("");
								$('.form-group').removeClass('has-error')
										.removeClass("has-success");
								grid.submitFilter();
							});
					return false;
				});
	};
	return {
		init : function() {
			handleTable();
		}
	}
}();