var kupdppbactp = function() {
	$("input[name='acolfg'],input[name='dcmtfg']").select2({
		data : kupdppbdict.acolfgDict,
		allowClear : true
	});
	
	$("input[name='dcmttp']").select2({
		data : kupdppbdict.dcmttpDict,
		allowClear : true
	});
	
	$("input[name='cacttp']").select2({
		data : kupdppbdict.cacttpDict,
		allowClear : true
	});
	
	//
	$("#the_acolfg").select2({data:kupdppbdict.acolfgDict,allowClear : true});
	$("#the_dcmtfg").select2({data:kupdppbdict.acolfgDict,allowClear : true});
	$("#the_dcmttp").select2({data:kupdppbdict.dcmttpDict,allowClear : true});
	$("#the_cacttp").select2({data:kupdppbdict.cacttpDict,allowClear : true});
	
	var handleTable = function(prodcd) {				
		var actpgrid = new Datatable();
		var actpurl = Sunline.ajaxPath("prod/dapsel");
		var actpsendData = [ "prodcd","cacttp"];
		var bianJiData = ["prodcd",
		                  "cacttp",
		                  "acolfg",
		                  "dcmtfg",
		                  "dcmttp",
		                  "sactcn",
		                  "dcmtcn"];
		if(!Sunline.isNull(prodcd)){
			actpgrid.setAjaxParam("q_prodcd",prodcd);
		}
		actpgrid.init({
					src : $("#datatable_actp"),
					deleteData : actpsendData,
					onSuccess : function(actpgrid) {
					},
					onError : function(actpgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : actpurl, 
						},
						"columns" : [
								{
									"data" : "prodcd",
									"sortable" : false,
									"searchable" : false
								},{
									"data" : "cacttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.cacttpDict.length; i++) {
											if (kupdppbdict.cacttpDict[i].id == data) {
												return kupdppbdict.cacttpDict[i].text;
											}
										}
										return data;
									}
								},{
									"data" : "acolfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.acolfgDict.length; i++) {
											if (kupdppbdict.acolfgDict[i].id == data) {
												return kupdppbdict.acolfgDict[i].text;
											}
										}
										return data;
									}
								},{
									"data" : "dcmtfg",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.acolfgDict.length; i++) {
											if (kupdppbdict.acolfgDict[i].id == data) {
												return kupdppbdict.acolfgDict[i].text;
											}
										}
										return data;
									}
									
								},{
									"data" : "dcmttp",
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										for (var i = 0; i < kupdppbdict.dcmttpDict.length; i++) {
											if (kupdppbdict.dcmttpDict[i].id == data) {
												return kupdppbdict.dcmttpDict[i].text;
											}
										}
										return data;
									}									
								},{
									"data" : "sactcn",
									"sortable" : false,
									"searchable" : false									
								},{
									"data" : "dcmtcn",
									"sortable" : false,
									"searchable" : false									
								},								
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='bianJi' href='javascript:;' data-src='"
										+ data.prodcd + ","
										+ data.cacttp + ","
										+ data.acolfg + ","
										+ data.dcmtfg + ","
										+ data.dcmttp + ","
										+ data.sactcn + ","
										+ data.dcmtcn + "'>编辑 </a>";
									}
								}, 
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='delete' href='javascript:;' data-src='"
										+ data.prodcd +","+  data.cacttp + "'>删除 </a>";
									}
								} 
								]
					}
				});	
		actpgrid.bindTableDelete(actpsendData);
		actpgrid.addBindEvent(".bianJi", "click", bianJiData,
				function(data) {
			showInfo(data);
		});
		//弹出编辑窗口
		var showInfo = function(data) {//
			$('#the_prodcd').val(data.prodcd);          
			$('#the_cacttp').select2("val",data.cacttp);
			$('#the_acolfg').select2("val",data.acolfg);
			$('#the_dcmtfg').select2("val",data.dcmtfg);
			$('#the_dcmttp').select2("val",data.dcmttp);
			$('#the_sactcn').val(data.sactcn);
			$('#the_dcmtcn').val(data.dcmtcn);         
			$("#editactpModal0004").modal("show");
		};
		//
		$('#the_btn_save_actp').click(function(){
			var input = {};
			input.prodcd = $('#the_prodcd').val();
			input.cacttp = $('#the_cacttp').select2("val");
			input.acolfg = $('#the_acolfg').select2("val");
			input.dcmtfg = $('#the_dcmtfg').select2("val");
			input.dcmttp = $('#the_dcmttp').select2("val");
			input.sactcn = $('#the_sactcn').val();
			input.dcmtcn = $('#the_dcmtcn').val();
			Sunline.ajaxRouter(
		         	"prod/dapupd", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		bootbox.alert("修改成功",function(){
		                   	$("#editactpModal0004").modal('hide');
		                   	actpgrid.submitFilter();
		         		});
		         	},
		         	function(redata){ 
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		
		
		// 新增窗口
		$("#add_actp_btn").bind("click", function() {	
			$("input[name='prodcd']",$("#editactpModal")).val(prodcd);
			$("#editactpModal").modal('show');
			return false ;
		});	
		var actpValid=Sunline.getValidate($('form',$("#editactpModal")),
				function() {
			var data = {};
			$.each($("input", $("#editactpModal")), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					data[n.name] = n.value;
				}
			});
			var datas=[];
			datas.push(data);					
			var dpactps = {"dpactp":datas};
			Sunline.ajaxRouter("prod/dapins", 
					dpactps
			, 'post', function(ret) {
                  if(ret.ret==="success"){              
                	   $(".alert-success",$('form', $("#editactpModal"))).show();
                	   $('.alert-danger', $('form', $("#editactpModal"))).hide(); 		   
                  }else{                        	 
                   	   $(".alert-success",$('form', $("#editactpModal"))).hide();
                   	   $('.alert-danger', $('form', $("#editactpModal"))).show();                        	  
                  }
                  $(".msg",$('form', $("#editactpModal"))).text(ret.msg);
			});

		},{});
		
		$("#editactpModal").on("hide.bs.modal",function(){					
			actpgrid.submitFilter();
		});
	};

	return {
		init : function(prodcd) {
			handleTable(prodcd);
		}
	}
}();