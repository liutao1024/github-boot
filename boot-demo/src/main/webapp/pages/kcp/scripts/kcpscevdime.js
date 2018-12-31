var kcpscevdime = function() {

	var handleTable = function() {
		var dimegrid = new Datatable();
		var dimeurl = Sunline.ajaxPath("kcp/qrscdi");
		var dimesendData = [ "dimecg","dimevl"];

		dimegrid.init({
					src : $("#datatable_dime"),
					deleteData : dimesendData,
					onSuccess : function(dimegrid) {
					},
					onError : function(dimegrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : dimeurl,
						},
						"columns" : [
								{
									"data" : "dimecg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "dimevl",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "expmsg",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='"
												+ data.dimecg
												+","
												+ data.dimevl
											    + "'>编辑 </a>";
									}
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
												+ data.dimecg
												+","
												+ data.dimevl
											    + "'>删除 </a>";
									}
								} ]
					}
				});
		dimegrid.bindTableDelete(dimesendData);
		
		dimegrid.bindTableEdit(dimesendData,function(nRowA){
//			$("input[name='prodcd']").attr("readOnly",true);
			//修改时锁定维度类别  维度值
			$("input[name='dimecg']").attr("readOnly",true); 
			$("input[name='dimevl']").attr("readOnly",true);
			
			$("input[name='dimecg']").val($(nRowA[0]).text()); 
			$("input[name='dimevl']").val($(nRowA[1]).text()); 
			$("input[name='expmsg']").val($(nRowA[2]).text()); 
			$("input[name='remark']").val($(nRowA[3]).text()); 
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editdimeModal").modal('show');
			$("#editdimeModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdimeModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdimeModal"))).hide(); 
	        	$(".msg",$('form', $("#editdimeModal"))).text("");
				dimegrid.submitFilter();
			});
			return false;
		})
		
		// 新增窗口
		$("#add_dime_btn").bind("click", function() {
			//新建时解锁   维度类别、维度值
			$("input[name='dimecg']").attr("readOnly",false); 
			$("input[name='dimevl']").attr("readOnly",false);
			//清空原数据
			$("input[name='dimecg']").val(""); 
			$("input[name='dimevl']").val(""); 
			$("input[name='expmsg']").val(""); 
			$("input[name='remark']").val("");
//			$("input[name='crcycd']").attr("readOnly",false);
//			$("input[name='prodcd']", $("#editdimeModal")).val(prodcd);
			$("input", $("#editruleModal")).val("").trigger("change");
			$("#editdimeModal").modal('show');
			$("#editdimeModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#editdimeModal"))).hide();
	        	$('.alert-danger', $('form', $("#editdimeModal"))).hide(); 
	        	$(".msg",$('form', $("#editdimeModal"))).text("");
				dimegrid.submitFilter();
			});
			return false;
		});
		
		$("#btn_save_dime").click(function(){
			$('form', $("#editdimeModal")).submit();
		});
		
		var dimeValid = Sunline.getValidate($('form', $("#editdimeModal")),
				function() {
					var data = {};
					$.each($("input", $("#editdimeModal")), function(i, n) {
						if (n.name != undefined&&n.name!=""&&n.name!=null) {
							data[n.name] = n.value;
						}
					});
					
					Sunline.ajaxRouter("kcp/edscdi", 
						data
					, 'post', function(ret) {
                          if(ret.ret==="success"){              
                        	   $(".alert-success",$('form', $("#editdimeModal"))).show();
                        	   $('.alert-danger', $('form', $("#editdimeModal"))).hide(); 		   
                          }else{                        	 
		                   	   $(".alert-success",$('form', $("#editdimeModal"))).hide();
		                   	   $('.alert-danger', $('form', $("#editdimeModal"))).show();                        	  
                          }
                          $(".msg",$('form', $("#editdimeModal"))).text(ret.msg);
					});

				}
//				{
//					 depttm:{required : true},
//					 dimecd:{maxlength : 20}	
//				}
				);

		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();