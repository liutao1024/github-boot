var bookInfo = function() {
	var lb_grid;
	var isF = true;
	
	//格式化显示金额保留的位数
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	var handleTable = function() {
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN'
            });
        }
		var qryCacheObj = [];
		
		var grid = new Datatable();
		var gridUrl = Sunline.ajaxPath("book/getBookInfo");
		var sendData = ["q_transq"];
		grid.init({
					src : $("#datatable_src"),
					onSuccess : function(grid) {
						qryCacheObj = grid.getDataTable().context['0'].json.data;
						console.log(qryCacheObj);
					},
					onError : function(grid) {
					},
					dataTable : {
						"ajax" : {
							"url" : gridUrl,
						},
						"columns" : [
								{
									"data": null,
									"sortable": false,
									"searchable": false,
									"width": "2%",
									"render": function (data, type, full) {
										return '<input type="checkbox" class="checkboxes" value="1"/>';
									}
								},
								{
									"data" : "q_trandt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_transq",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_sequno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										if(data.q_userna!=''){
											return data.q_userna + '['+ data.q_userid + ']';
										}else{
											return '';
										}
									}
								},
//								{
//									"data" : "q_trantm",
//									"sortable" : false,
//									"searchable" : false
//								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										if(data.q_authna!=''){
											return data.q_authna + '['+ data.q_authus + ']';
										}else{
											return '';
										}
									}
								},
								{
									"data" : "q_prcscd",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_trnnam",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										var accounts = data.q_account;
										var tranam = 0;
										if(accounts.length > 0){
											//交易金额取借方金额的汇总（一般只存在一条）
											for(var i=0;i<accounts.length;i++){
												if(accounts[i].q_amntcd=="D"){
													tranam+=accounts[i].q_tranam;
												}
											}
											//同向调账特殊处理
											if(data.q_prcscd == 'adjust'){
												tranam = Math.abs(accounts[0].q_tranam);
											}
											return formartM(tranam + "");
										}else{
											return "";
										}
									}
								},
								{
									"data" : "q_remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='accountInfo' href='javascript:;' data-src='"
												+ data.q_transq
											    + "'>分录信息 </a>";
									}
								} ]
					}
				});
		grid.addBindEvent(".accountInfo", "click", sendData,
				function(data) {
			var tabData;
			for(var j=0;j<qryCacheObj.length;j++){
				if(qryCacheObj[j].q_transq == data.q_transq) tabData = qryCacheObj[j].q_account ;
			}
			var dataSet = [];
			for(var i=0;i<tabData.length;i++){
				var amntcd;
				if ("C"==tabData[i].q_amntcd) {
					amntcd = "贷方";
				} else if ("D"==tabData[i].q_amntcd) {
					amntcd = "借方";
				} else if ("P"==tabData[i].q_amntcd) {
					amntcd = "付出";
				} else if ("R"==tabData[i].q_amntcd) {
					amntcd = "收入";
				} else if ("M"==tabData[i].q_amntcd) {
					amntcd = "备忘";
				}
				dataSet.push([amntcd+"",tabData[i].q_cuacno+"",tabData[i].q_acctna+"",tabData[i].q_itemcd+"",formartM(tabData[i].q_tranam+"")]);
			}
			console.log(dataSet);
			$('#accountInfoModal').trigger('change');
			if(isF){
				lb_grid = $('#accountInfo').DataTable({
					data:dataSet,
					paging: false,
					searching: false,
					ordering: false,
					info: false,
					columns : [ {
						title : "借贷标志"
					}, {
						title : "账号"
					}, {
						title : "账户名称"
					}, {
						title : "科目号"
					}, {
						title : "交易金额"
					} ]
				});
				isF = false;
			}else{
				lb_grid.clear().draw();
				for(var i=0;i<dataSet.length;i++){
					lb_grid.row.add(dataSet[i]).draw(false);
				}
			}
			$("#accountInfoModal").modal("show");
		});
		grid.setAjaxParam('q_userid',$('#q_userid').val());
		grid.setAjaxParam('q_cuacno',$('#q_cuacno').val());
		grid.setAjaxParam('q_stadat',$('#q_stadat').val());
		grid.setAjaxParam('q_enddat',$('#q_enddat').val());
		$(".table-group-actions").append("<button id='download' class='btn btn-sm purple table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;批量下载传票</button></div>");
		
		$('#select').click(function(){
			grid.setAjaxParam('q_userid',$('#q_userid').val());
			grid.setAjaxParam('q_cuacno',$('#q_cuacno').val());
			grid.setAjaxParam('q_stadat',$('#q_stadat').val());
			grid.setAjaxParam('q_enddat',$('#q_enddat').val());
			grid.submitFilter();
		});
		
		 $('#download').click(function(){
	        	var rows = grid.getSelectedRows();
				if(rows.length == 0){
					bootbox.alert("请选择要处理的数据");
					return;
				}
				
				var data = [];
				for (i=0;i<rows.length;i++){
					var row = rows[i].children();
					var transq = $(row[2]).text();
					for(var j=0;j<qryCacheObj.length;j++){
						if(qryCacheObj[j].q_transq == transq) data.push(qryCacheObj[j]);
					}
				}
				var input = {};
				input.data = data;
	        	Sunline.ajaxRouter(
			        	"book/genBookXls", 
			        	 input,
			        	"POST",
			            function(redata){
			        		if(redata.retCode == '0000'){
			        			console.log(Sunline.getBasePath()+redata.fileName);
			        			window.open(Sunline.getBasePath()+redata.fileName);
			        		} else {
			        			bootbox.alert(redata.retMsg);
			        		}
			        	},
			        	function(redata){
			        		console.info(redata);
			        		bootbox.alert("交易异常，请检查网络设置或重新登录"); 
			        	},
			        	"json",
			        	false); 
			});
		 
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();