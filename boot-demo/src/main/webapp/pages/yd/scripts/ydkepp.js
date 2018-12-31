var DamaiSettle = function() {
//	 $("#baflag").select2({
//     	data : [{id:'1',text:'是'},{id:'0',text:'否'}]
//     });
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	var checkstausDict=Sunline.getDict("checkStatus");
	var baflagDict = Sunline.getDict("E_YES___");
	var prodstDict = Sunline.getDict("type", "/seprod","prodcd","prodna");
	$("input[name='prodcd']", $("#fund-form")).select2({
		data : prodstDict,
		allowClear : true
	});
	var cheargrid = new Datatable();
	var summoy = 0.00;
	var isF = true;
	var isAs = true;
	var r_transq;
	var r_acctno;	
	var r_sub_transq=[];
	var lb_grid ;
	var chkStatusDict = Sunline.getDict("state");
	var grid = new Datatable();
	var loanam;
	var refdam;
	var formartM = function(value) {
		if (value.indexOf('.') == -1) {
			return value + ".00";
		} else if (value.split('.')[1].length == 1) {
			return value + '0';
		} else {
			return value;
		}
	};
	// 读取数据字典
	var _formartDict = function(dict, value) {
		for (var i = 0; i < dict.length; i++) {
			if (dict[i].dictName == value) {
				return dict[i].dictId;
			}
			if (dict[i].dictId == value) {
				return dict[i].dictName;
			}
		}
		return value;
	};

	var handleFileUpload = function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		}
		;
		/*$('#submit').click(function() {
			if (Sunline.isNull($('#keepdt').val())) {
				bootbox.alert("请选择查询日期！");
				return;
			}
			if (Sunline.isNull($('#prodcd').val())) {
				bootbox.alert("请选择清算产品！");
				return;
			}
			// alert($('#trandt').val());
			$("#myModal").modal('show');
			var input = {};
			var keepdt = $('#keepdt').val();
			var prodcd = $('#prodcd').val();
			input.loanfile = '_loanck';
			input.refdfile = '_refdck';
			input.keepdt = keepdt;
			input.prodcd = prodcd;
			Sunline.ajaxRouter("yd/ydoutl", input, "POST", function(redata) {
				$("#myModal").modal('hide');
				// 读取数据区表
				if (redata.retCode == '0000') {
					var tranam = redata.tranam;
					var keppam = redata.keppam;
					$('#tranam').text(tranam.toFixed(2) + "元");
					$('#keppam').text(keppam.toFixed(2) + "元");
					//alert(keppam);
					grid.setAjaxParam("trandt", $('#trandt').val());
					grid.submitFilter();
				} else {
					bootbox.alert(redata.retMsg);
					$('#keepdt').text("");
					$('#prodcd').text("");
					grid.setAjaxParam("trandt", $('#trandt').val());
					grid.submitFilter();
				}
			}, function(redata) {
				$("#myModal").modal('hide');
				console.info(redata);
				bootbox.alert("交易异常哦，请检查网络设置或重新登录");
			}, "json", false);
		});
*/
		/*$('#incler').click(
				function() {
					if (Sunline.isNull($('#keepdt').val())) {
						bootbox.alert("日期不能为空！");
						return;
					}
					if (Sunline.isNull($('#prodcd').val())) {
						bootbox.alert("请选择需要清算的产品！");
						return;
					}
					bootbox.confirm("确定要清算？", function(result) {
						if (!result) {
							return;
						}
						var input = {};
						input.tranam = loanam;
						input.keepdt = $('#keepdt').val();
						input.prodcd = $('#prodcd').val();
						Sunline.ajaxRouter("yd/ydkeep", input, "POST",
								function(redata) {
									if (redata.retCode == "0000") {
										bootbox.alert("清算成功");
										grid.setAjaxParam("trandt", $('#trandt').val());
										grid.submitFilter();
									} else {
										bootbox.alert(redata.retMsg);
									}
								}, function(redata) {
									bootbox.alert("网络异常");
								}, "json", false);
					});
				});*/
		$('#ruisma').click(
				function() {
					bootbox.confirm("确定要冲正放款账号为【"+r_acctno+"】的业务数据？", function(result) {
						if (!result) {
							return;
						}
						var input = {};
						input.r_transq = r_transq;
						input.remark = $('#remark').val();
						input.r_sub_transq = r_sub_transq;
						//input.r_sub_clsqno = r_sub_clsqno;					
						Sunline.ajaxRouter("yd/keppru", input, "POST",
								function(redata) {
									if (redata.retCode == "0000") {
										bootbox.alert("处理成功");
										$('#remark').val('');
										grid.setAjaxParam("trandt", $('#trandt').val());
										grid.submitFilter();
									} else {
										//$('#remark').val('');
										bootbox.alert("冲正失败");
									}
								}, function(redata) {
									$('#remark').val('');
									bootbox.alert("网络异常");
								}, "json", false);
					});
				});
		
		$('#submit1').click(function() {
			if (Sunline.isNull($('#keepdt').val())) {
				bootbox.alert("请选择查询日期！");
				return;
				
			}
			grid.setAjaxParam("cldate", $('#keepdt').val());
			grid.submitFilter();
			
		});
		var url = Sunline.ajaxPath("yd/qrkepp");
		grid.setAjaxParam("cldate", "");
		var qryCacheObj = [];
		//var sendData = ["acctno","cldate","transq"];
		var sendData = ["acctno","cldate","clsqno"];
		grid.init({
			src : $("#kepp_ajax"),
			onSuccess : function(grid) {
				$('.table-container .alert-danger').css("display", "none");
				qryCacheObj = grid.getDataTable().context['0'].json.data;
				console.log(qryCacheObj);
			},
			onError : function(grid) {

			},
			dataTable : {
				"ajax" : {
					"url" : url,
				},
				"columns" : [ {
					"data" : "prodna",
					"sortable" : false,
					"searchable" : false
				},{
					"data" : "prodcd",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data, type, full) {
						for (var i = 0; i < prodstDict.length; i++) {
							if (prodstDict[i].id == data) {
								return prodstDict[i].id;
							}
						}
						return data;
					}
				}, {
					"data" : "cldate",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "clsqno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "tranam",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "acctno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "acctna",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "brzwno",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "brchna",
					"sortable" : false,
					"searchable" : false
				}, {
					"data" : "baflag",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data,type,full){
	            		for(var i=0 ; i<baflagDict.length ; i++){
	            			if(data == baflagDict[i].dictId){
	            				return baflagDict[i].dictName;
	            			}
	            		}
	            		return data;
	            	}
				
				} ]
			}

		});
		$(".table-group-actions").append("<button id='tran_btn' class='btn btn-sm blue table-group-action-submit'><i class='fa icon-cloud-download'></i>&nbsp;根据放款账号清算</button></div>");
		$('#tran_btn').click(function(){
			$('#taskdt').val(FormatDate());
		
			$("#clstat").select2({
		        	data : [{id:'1',text:'未清算'},{id:'2',text:'已清算'}]
		        });
		    $("#clstat").select2("val","1");
			
			var url = Sunline.ajaxPath("yd/ydtkqy");
			if(isF){
			cheargrid.setAjaxParam("taskdt",$('#taskdt').val());//清算日期
			cheargrid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
			
			cheargrid.init({
		        src: $("#ydclear_ajax"),
		        deleteData: sendData,
		        onSuccess: function (cheargrid) {
		        	summoy = cheargrid.getDataTable().ajax.json().summoy;
		        	$("#allsum").text(summoy);
		        	var clstat = $('#clstat').select2("val");
		        	if(clstat == "1" && summoy > 0){
		        		$("#dealdiv").css("display","block");
		        	}else{
		        		$("#dealdiv").css("display","none");
		        	}
		        },
		        onError: function (cheargrid) {
		        	//$("#dealdiv").css("display","block");
		        	//$("#allsum").text(summoy);
		            // execute some code on network or other general error
		        	console.info("It is error!");
		        },
		        dataTable: {  
		            "ajax": {
		                "url": url, 
		            },
		            "columns" : [{
		            	"data": "checkStatus",
		            	"sortable": false,
		            	"searchable": false,
		            	"width": "2%",
		            	"render": function (data, type, full) {
		            		if(data == 'Y'){
		            			return '';
		            		}
		            		return '<input type="checkbox" class="checkboxes" value="1"/>';
		            	}
	            	},{     
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },
		                {     
			            	"data": "acctna",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "tranam",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "brzwno",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "brchna",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "clstat",
			            	"sortable": false,
			            	"searchable": false,
			            	"render" : function(data, type, full) {
			            		var status;
			            		if(data == "1"){
			            			status = "未清算";
	     	            		}else if(data == "2"){
	     	            			status = "已清算";
	     	            		}
			            		return status;
							}
			            },{ 
			            	"data": "cldate",
			            	"sortable": false,
			            	"searchable": false	            	
			            },{ 
			            	"data": "clsqno",
			            	"sortable": false,
			            	"searchable": false	            	
			            },{
							"data" : null,
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								if(data.baflag==0){
								return "<a class='accountInfo' id='cang' href='javascript:;' data-src='"
										+ data.acctno+"," +data.cldate+", "+data.clsqno+"'>冲正 </a>";
								}
								else(data.baflag==1)
									{
									return "<p >已冲正</p>";
									}
								}
			            }	]
		        }
		    });
			
			isF = false;
			}else{
				
				cheargrid.setAjaxParam("taskdt",$('#taskdt').val());//清算日期
				cheargrid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
				cheargrid.submitFilter();
		    }
			$("#tranModal").modal('show');
			
			cheargrid.addBindEvent(".accountInfo", "click", sendData,
					function(data) {
				/*var falg = data.baflag;
				if(falg == "1"){
					bootbox.alert("已经冲正，请勿重复提交！");
					return;
				}*/
//				["acctno","cldate","clsqno"]
				var tabData;
				var input = {};
				var dataSet = [];
				input.acctno = data.acctno;
				input.cldate = data.cldate;
				r_transq = data.clsqno;
				r_acctno = data.acctno;
				Sunline.ajaxRouter("yd/sekpif", input, "POST",function(redata) {
					if (redata.retCode == "0000") {
						for(var i=0;i<redata.data.length;i++){
							r_sub_transq[i]=redata.data[i].dealsq;
							//r_sub_clsqno[i]=redata.data[i].clsqno;
							var baflag;
							var clstat;
							if(redata.data[i].baflag == "0"){
								baflag = "否";
							}
								else{
								baflag = "是";
							}
							if(redata.data[i].clstat == "1"){
								clstat = "未清算";
							}
								else{
								clstat = "已清算";
							}								
							
	     	            		
							dataSet.push([redata.data[i].acctno+"",
							              redata.data[i].acctna+"",
							              redata.data[i].cldate+"",
							              redata.data[i].lncfno+"",
							              redata.data[i].brzwno+"",
							              redata.data[i].brchna+"",
							              redata.data[i].tranam+"",
							              redata.data[i].prodcd+"",
							              redata.data[i].dealsq+"",
							              clstat+"",
							              baflag+""]);
							
						}
					} else {
						bootbox.alert(redata.retMsg);
						r_transq = "";
						r_sub_transq={};
						
					}
				}, function(redata) {
					bootbox.alert("网络异常");
					r_transq = "";
					r_sub_transq={};
					
				}, "json", false);
				console.log(dataSet);
				$('#accountInfoModal').trigger('change');
				if(isAs){
					lb_grid = $('#accountInfo').DataTable({
						data:dataSet,
						paging: false,
						searching: false,
						ordering: false,
						info: false,
						columns : [{
							title : "放款卡号"
						}, {
							title : "账户名称"
						}, {
							title : "清算日期"
						}, {
							title : "借据号"
						}, {
							title : "行号"
						}, {
							title : "行名"
						}, {
							title : "交易金额"
						}, {
							title : "产品名称"
						}, {
							title : "交易流水"
						}, {
							title : "清算装态"
						}, {
							title : "是否冲正"
						}]
					});
					isAs = false;
				}else{
					lb_grid.clear().draw();
					for(var i=0;i<dataSet.length;i++){
						lb_grid.row.add(dataSet[i]).draw(false);
					}
				}
				$("#accountInfoModal").modal("show");
			});
			
		});
		
		
		
		$("#submit").click(function(){
			if(Sunline.isNull($('#taskdt').val())){
				bootbox.alert("清算日期不能为空！");
				return;
			}
			cheargrid.setAjaxParam("taskdt",$('#taskdt').val());
			cheargrid.setAjaxParam("clstat",$('#clstat').select2("val"));//清算状态
			cheargrid.submitFilter();
		});
		$('#cancle').click(function(){
			$('#taskdt').val("");
		});
		
		$('#deal').click(function()
				{
			console.info("按钮点击事件");
			var rows = cheargrid.getSelectedRows();
			if(rows.length == 0){
				bootbox.alert("请选择要处理的数据");
				return;
			}
			
			taskdt=$('#taskdt').val();
			var data = [];
			for(var i=0;i<rows.length;i++)
				{
				var row = rows[i].children();
				var acctno = $(row[1]).text();
				var taskam = $(row[3]).text();
				
				var rowdata={};
				rowdata.acctno=acctno;
				rowdata.taskam=taskam;
				
				data.push(rowdata);
				}
			console.info(data);
			var input={};
			input.data=data;
			input.taskdt=taskdt;
			
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
            	"yd/checkYddeal", 
            	 input,
            	"POST",
                function(redata){
            		$("#myModal").modal('hide');
            		if(redata.retCode='0000'){
    	     			bootbox.alert("清算成功");
    	     			cheargrid.submitFilter();
    	     		}
            		else{
    	     			bootbox.alert(redata.retMsg);
    	     			return;
    	     		}
            		
            		
            	},
            	function(redata){
            		$("#myModal").modal('hide');
            		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
            			
                    }); 
            	},
            	"json",
            	false); 
		});
				
       

	};

	return {
		init : function() {
			handleFileUpload();
		}
	}

}()