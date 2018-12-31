var qrpycm = function() {
	var dict={
			idtftpDict:Sunline.getDict("E_IDTFTP"),//证件类型
			appvstDict:Sunline.getDict("E_APPVST")//审核状态
	}
	$("input[name='idtftp']").select2({
		data : dict.idtftpDict,
		allowClear : true
	});
	$("input[name='appvst']").select2({
		data : dict.appvstDict,
		allowClear : true
	}).select2('val','0');
	var mtengrid = new Datatable(); 

	var handlerOperator = function(){
		//清空
		$("#cancle").click(function(){
			$("input", $("#cust-form")).val("").trigger('change');
		});

		//查询
		$('#submit').click(function(){
			$.each($("input", $("#cust-form")), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					console.info(n.name+","+n.value);
					mtengrid.setAjaxParam(n.name,n.value);
				}
			});
			mtengrid.submitFilter();
		});


		$("#btn_save_edit").click(function(){
			$('form', $("#editModal")).submit();
		});
		
		//新增按钮
		$("#add_mten_btn").click(function() {
			var editform = $("#edit_form");
			var editerror = $('.alert-danger', editform);
			var editsuccess = $('.alert-success', editform);
			editerror.hide();
			editsuccess.hide();
			$('.msg', editform).text("");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$('input', editform).val("").trigger("change");
			//默认值
			$("input[name='idtftp']",editform).select2('val','22');
			$("#editModal").modal('show');
			$("#editModal").on("hide.bs.modal", function() {
				editerror.hide();
				editsuccess.hide();
				$('.msg', editform).text("");
				$('.form-group').removeClass('has-error')
				.removeClass("has-success");
				mtengrid.submitFilter();
			});
			return false;
		});
	}
	var handleTable = function() {
		var mtenurl = Sunline.ajaxPath("pay/sumpQrpycm");
		var mtensendData = ["cmpyno","agretp"];
		$.each($("input", $("#cust-form")), function(i, n) {
			if (n.name != undefined&&n.name!=""&&n.name!=null) {
				console.info(n.name+","+n.value);
				mtengrid.setAjaxParam(n.name,n.value);
			}
		});
		mtengrid.init({
			src : $("#datatable_mten"),
			deleteData : mtensendData,
			onSuccess : function(mtengrid) {
				$('.table-container .alert-danger').css("display","none");
			},
			onError : function(mtengrid) {
			},
			dataTable : {
				"ajax" : {
					"url" : mtenurl,
				},
				"columns" : [
				             {
				            	 "data" : "custno",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "custna",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "idtftp",
				            	 "sortable" : false,
				            	 "searchable" : false,
				            	 "render" : function(data, type, full) {
				            		 for (var i = 0; i < dict.idtftpDict.length; i++) {
				            			 if (dict.idtftpDict[i].id == data) {
				            				 return dict.idtftpDict[i].text;
				            			 }
				            		 }
				            		 return data;
				            	 }
				             },
				             {
				            	 "data" : "idtfno",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "opcftf",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "opcfno",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "opcfna",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "opcfbn",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "opcfba",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "upidno",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "rpidno",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "rptlno",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "rpmail",
				            	 "sortable" : false,
				            	 "searchable" : false
				             },
				             {
				            	 "data" : "addrrs",
				            	 "sortable" : false,
				            	 "searchable" : false,
				             },
				             {
				            	 "data" : "appvst",
				            	 "sortable" : false,
				            	 "searchable" : false,
				            	 "render" : function(data, type, full) {
				            		 for (var i = 0; i < dict.appvstDict.length; i++) {
				            			 if (dict.appvstDict[i].id == data) {
				            				 return dict.appvstDict[i].text;
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
				            		 return "<a class='edit' href='javascript:;' data-src='"
				            		 + data.cmpyno
				            		 +","
				            		 +data.agretp
				            		 + "'>编辑 </a>";
				            	 }
				             }]
			}
		});

		mtengrid.bindTableEdit(mtensendData,function(nRowA){
			var editform = $("#edit_form");
			$('input', editform).removeAttr("readOnly");
			$('input', editform).removeAttr("disabled");
			$("input[name='custno']", editform).val($(nRowA[0]).text());
			$("input[name='custna']", editform).val($(nRowA[1]).text());
			$("input[name='idtftp']", editform).val($(nRowA[2]).text().substring($(nRowA[2]).text().indexOf("[")+1,$(nRowA[2]).text().indexOf("]"))).attr("readOnly",true).trigger("change"); 
			$("input[name='idtfno']", editform).val($(nRowA[3]).text()).attr("readOnly",true); 
			$("input[name='opcftf']", editform).val($(nRowA[4]).text()); 
			$("input[name='opcfno']", editform).val($(nRowA[5]).text());
			$("input[name='opcfna']", editform).val($(nRowA[6]).text()); 
			$("input[name='opcfbn']", editform).val($(nRowA[7]).text()); 
			$("input[name='opcfba']", editform).val($(nRowA[8]).text()); 
			$("input[name='upidno']", editform).val($(nRowA[9]).text());
			$("input[name='rpidno']", editform).val($(nRowA[10]).text()); 
			$("input[name='rptlno']", editform).val($(nRowA[11]).text()); 
			$("input[name='rpmail']", editform).val($(nRowA[12]).text()); 
			$("input[name='addrrs']", editform).val($(nRowA[13]).text());
			$("input[name='appvst']", editform).val($(nRowA[14]).text().substring($(nRowA[14]).text().indexOf("[")+1,$(nRowA[14]).text().indexOf("]"))).trigger("change");
			$("#editModal").modal('show');
			$("#editModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editModal"))).hide();
				$('.alert-danger', $('form', $("#editModal"))).hide(); 
				$(".msg",$('form', $("#editModal"))).text("");
				mtengrid.submitFilter();
			});
		})

		var addValid = Sunline.getValidate($('form', $("#editModal")),
				function() {
			var data = {};
			$.each($("input", $("#editModal")), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					data[n.name] = n.value;
				}
			});
			console.log(data);
			Sunline.ajaxRouter("pay/saveCmInfo", 
					data
					, 'POST', function(ret) {
				if(ret.retCode=="0000"){              
					$(".alert-success",$('form', $("#editModal"))).show();
					$('.alert-danger', $('form', $("#editModal"))).hide(); 		   
				}else{                        	 
					$(".alert-success",$('form', $("#editModal"))).hide();
					$('.alert-danger', $('form', $("#editModal"))).show();                        	  
				}
				$(".msg",$('form', $("#editModal"))).text(ret.retMsg);
			});

		},
		{
			custno:{required : true},
			custna:{required : true},
			idtftp:{required : true},
			idtfno:{required : true},
			opcftf:{required : true},
			opcfno:{required : true},
			opcfna:{required : true},
			opcfbn:{required : true},
			opcfba:{required : true},
			upidno:{required : true},
			rpidno:{required : true},
			rptlno:{required : true},
			rpmail:{required : true},
			addrrs:{required : true}
		}
		);



	};
	return {
		init : function() {
			handleTable();
			handlerOperator();
		}
	}
}();