var qrysetlmt = function(){
	var flag = true;
	var input = {};			
	input.bustyp = "";
	Sunline.ajaxRouter("kupcon/qrbstp", input, "POST", function(redata) {
//		console.info(redata);
		if (redata.retCode == '0000') {	
			var date1 = redata.pinfos;
			var date2 = [];
			for(var i=0 ; i<date1.length ; i++){	
				var images = {};
				images.id = i+1;
				images.text = date1[i].bustyp;
				console.log(images);
				date2[i]= images;			
			}
			$("#bustyp").select2({
				data : date2,
				allowClear : true
			});
//			$("#bustyp1").select2({
//				data : date2,
//				allowClear : true
//			});
			return;
		}
	}, function(redata) {
		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
		});
	}, "json", false);
	
	var crcycdDict = Sunline.getDict("crcycd"); // 币种
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});
	$("input[name='crcycd1']").select2({
		data : crcycdDict,
		allowClear : true
	});

	var queryInfo = function(){
		
		if(flag){//初始化
			if (!$('#cust-form').validate().form()) {
				return;
			}
			handleTable();
			flag = false;
		}else{
			if (!$('#cust-form').validate().form()) {
				return;
			}
			typegrid.setAjaxParam("acctno",$("#acctno").val());
			typegrid.setAjaxParam("custac",$("#custac").val());
			typegrid.setAjaxParam("bustyp",$("#bustyp").select2("data").text);
			typegrid.setAjaxParam("trnchl",$("#trnchl").val());
			typegrid.setAjaxParam("crcycd",$("#crcycd").select2("val"));
			typegrid.submitFilter();
		}
	}
	var validate = $('#cust-form').validate({
		errorElement: 'span', //default input error message container
		errorClass: 'help-block', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
	    rules: {
	    	acctno: {
	        required: true
	      },
	      	custac: {
	        required: true
	      },
	      	bustyp: {
	        required: true
	      },trnchl: {
	    	required: true  
	      },crcycd: {
	    	required: true  
	      }
	    },
	    messages: {
    		acctno: {
    			required: "输入负债账号"
    		},
      		custac: {
      			required: "输入客户账号"
      		},
      		bustyp: {
      			required: "请输入业务类型"
	       },
	       trnchl: {
      			required: "请输入渠道"
	       },
	       crcycd: {
      			required: "请输入币种"
	       }
	    },
        invalidHandler: function (event, validator) { //display error alert on form submit   
            $('.alert-danger', $('#cust-form')).show();
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
	var typegrid = new Datatable();
	var handleTable = function(){
		typegrid.setAjaxParam("acctno",$("#acctno").val());
		typegrid.setAjaxParam("custac",$("#custac").val());
		typegrid.setAjaxParam("bustyp",$("#bustyp").select2("data").text);
		typegrid.setAjaxParam("trnchl",$("#trnchl").val());
		typegrid.setAjaxParam("crcycd",$("#crcycd").select2("val"));
		var url = Sunline.ajaxPath("kupcon/qrylmt");
		var typesendData = ["acctno","custac","bustyp"];
		typegrid.init({
					src : $("#ajax_table"),
					onSuccess : function(typegrid) {
					},
					onError : function(typegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : url,
						},
						"columns" : [
								{
									"data" : null,//负债账号
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										return $("#acctno").val();
									}
								},
								 {
									"data" : null,//客户账号
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										return $("#custac").val();
									}
								},
								{
									"data" : null,//渠道
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										return $("#trnchl").val();
									}
								},{
									"data" : null,//币种
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										return $("#crcycd").select2("val");
									}
								},
								{
									"data" : null,//业务类型
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full){
										return $("#bustyp").select2("data").text;
									}
								},
								{
									"data" : "stasig",//统一配置的单笔限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "statot",//统一配置的日累计限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "stayer",//统一配置的年累计限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "siglim",//账户单笔限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "totlim",//账户日累计限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "yerlim",//账户年累计限额
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src=''>编辑</a>";
									}
								}
								]
					}
		});
		typegrid.bindTableEdit(typesendData,
				function(nRowA) {
					// 主键不可修改
//			    console.log($(nRowA[2]).text());
				$("#acctno1").val($(nRowA[0]).text()); 
				$("#custac1").val($(nRowA[1]).text());
				$("#trnchl1").val($(nRowA[2]).text());
				$("#crcycd1").val($(nRowA[3]).text()).trigger("change");
				$("#bustyp1").val($(nRowA[4]).text());
				$("#stasig").val($(nRowA[5]).text()); 
				$("#statot").val($(nRowA[6]).text());
				$("#stayer").val($(nRowA[7]).text());
				$("#siglim").val($(nRowA[8]).text()); 
				$("#totlim").val($(nRowA[9]).text());
				$("#yerlim").val($(nRowA[10]).text());
				$("#edittypeModal").modal('show');
				});
		$("#btn_save_type").click(function() { // 保存按钮
			$('form', $("#edittypeModal")).submit();
		});
		// 赋值DIV
		var typeValid = Sunline.getValidate($('form', $("#edittypeModal")),
				function() {				
					var data = {};
					data.acctno =$("#acctno1").val();
					data.bustyp =$("#bustyp1").val();
					
					data.crcycd =$("#crcycd1").select2("val");
					console.info(data.crcycd);
					data.trnchl =$("#trnchl1").val();
					
					data.custac =$("#custac1").val();
					data.statot =$("#statot").val();
					data.stayer =$("#stayer").val();
					data.siglim =$("#siglim").val();
					data.totlim =$("#totlim").val();
					data.yerlim =$("#yerlim").val();
					Sunline.ajaxRouter("kupcon/setlmt", data, 'post',
							function(ret) {
								if (ret.ret === "success") {
									$(".alert-success",
											$('form', $("#edittypeModal")))
											.show();
									$('.alert-danger',
											$('form', $("#edittypeModal")))
											.hide();
								} else {
									$(".alert-success",
											$('form', $("#edittypeModal")))
											.hide();
									$('.alert-danger',
											$('form', $("#edittypeModal")))
											.show();
								}
								$(".msg", $('form', $("#edittypeModal"))).text(
										ret.msg);
								typegrid.submitFilter();
							});
	
				}
			);
	};
	var click = function(){		
		//清空
		$("#cancle").click(function(){
			$("#acctno").val("");
			$("#custac").val("");
			$("#bustyp").val("");
			$("#trnchl").val("");
			$("#crcycd").val("");
		});
	}
	return {
		init : function(){
			click();
		},
		queryUserInfo : function(){
			queryInfo();
		}
	};
}()