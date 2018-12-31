var qrytrans = function() {
	
	var isF = true;
	var amntcdDict=Sunline.getDict("amntcd");
	var crcycdDict = Sunline.getDict("crcycd");
	
	var e_amntcd= function(value){
		for (var i = 0; i < amntcdDict.length; i++) {
            if (value == amntcdDict[i].id) {
              return amntcdDict[i].dictName;
            }
		}
	}
	
	var formartM = function(value){
		
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		} 
	};
	var handleTable = function(data) {
		var grid = new Datatable();
		var url = Sunline.ajaxPath("inac/qryTrans");
		var editUrl;
		var table = $("#trans_table");
		if (!Sunline.isNull(data.acctno)) {
			grid.setAjaxParam('q_acctno', data.acctno);
			$('#q_acctno').val(data.acctno);
		}
		/*
		 * 初始化table
		 */
		grid.init({
					src : table,
					deleteData : sendData,
					onSuccess : function(grid) {
					},
					onError : function(grid) {
					},
					dataTable : { // here you can define a typical
						"ajax" : {
							"url" : url, // ajax source
						},
						"bDestroy" : true,
						"bServerSide" : true,
						"columns" : [
										{
											"data" : "trandt",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "amntcd",
											"sortable" : false,
											"searchable" : false,
											"render" : function(data,type,full){
							            		 for (var i = 0; i < amntcdDict.length; i++) {
							                          if (amntcdDict[i].id == data) {
							                            return amntcdDict[i].dictName;
							                          }
							                        }
							            	    return data;
							            	}
										},{
											"data" : "itemcd",
											"sortable" : false,
											"searchable" : false
										},{
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
										},{
											"data" : "tranam",
											"sortable" : false,
											"searchable" : false,
											"render" : function(data,type,full){
							            		return formartM(data+"");
							            	}
										},{
											"data" : "blncdn",
											"sortable" : false,
											"searchable" : false,
							            	"render": function (data, type, full) {
							            		if(data=='C'){
							            			return '贷方';
							            		} else if(data=='D') {
							            			return '借方';
							            		} else if(data == 'R'){
							            			return '收方';
							            		} else if(data == 'Z') {
							            			return '轧差';
							            		} else {
							            			return data;
							            		}
							            	}
										},{
											"data" : "tranbl",
											"sortable" : false,
											"searchable" : false,
											"render" : function(data,type,full){
							            		return formartM(data+"");
							            	}
										},{
											"data" : "tranus",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "ckbsus",
											"sortable" : false,
											"searchable" : false  //transq
										},{
											"data" : "transq",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "ioflag",
											"sortable" : false,
											"searchable" : false,
											"render" : function(data,type,full){
												if(data=='I') return '表内';
												else if(data=='O') return '表外';
												else return data;
							            	}
										},{
											"data" : "toacct",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "tosbac",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "toacna",
											"sortable" : false,
											"searchable" : false
										},{
											"data" : "smrytx",
											"sortable" : false,
											"searchable" : false
										},{ 
							            	"data": null,
							            	"sortable": false,
							            	"searchable": false,
							            	"render": function (data, type, full) {
							            		return "<a class='qrAcif' href='javascript:;' data-src='" + data.transq + "'>会计分录 </a>";
							            	}
							            }]
					}
		});
		jQuery.validator.addMethod("istruedt", function(value, element, param) { 
			if(param==true){
				//console.info($('#startdt').val() + value);
				return parseInt($('#startdt').val()) > parseInt($('#enddt').val());
			}
			return true;
			
		}, $.validator.format("起始日期不能大于结束日期"));

		var sendData = [ "q_acctno","startdt","enddt"];
		
		grid.addBindEvent(".qrAcif", "click", ["transq"],
				function(data) {
			// 显示配置窗口
			showQrInfo(data);
			$("#qrAcifModal").modal("show");
		});
		
		//会计分录信息查询
		var showQrInfo = function(data) {
			var tabData = [];
			var dataSet = [];
			var input={};
			input.jiyisq = data.transq;
			console.log(input);
	    	Sunline.ajaxRouter(
		        	"inac/qracif",
		        	input,
		        	"POST",
		        	function(redata){
		        		//console.log(redata);
		        		if(redata.retCode == '0000'){
		        			var dataList=redata.acsqInfos;
		        			for(var i=0 ; i<dataList.length ; i++){
		        				tabData=[dataList[i].trandt,dataList[i].mntrsq,dataList[i].prcsna,dataList[i].cuacno,
		        				         dataList[i].crcycd,e_amntcd(dataList[i].amntcd),formartM(dataList[i].tranam)];
			        			dataSet.push(tabData);
		        			}
		        			//console.log(dataSet);
		        			if(isF){
		        				re_grid = $('#qrAcifInfo').DataTable({
		        					data: dataSet,
		        					paging: false,
		        					searching: false,
		        					ordering: false,
		        					info: false,
		        					columns: [
		        					          { title: "交易日期" },
		        					          { title: "主交易流水" },
		        					          { title: "交易名称" },				   
		        					          { title: "记账账号" },				   
		        					          { title: "币种" },				   
		        					          { title: "借贷标志" },				   
		        					          { title: "交易金额" },				   			   
		        					          ]
		        				});
		        				isF = false;
		        			}else{
		        				re_grid.clear().draw();
		        				for(var i=0;i<dataSet.length;i++){
		        					re_grid.row.add(dataSet[i]).draw(false);
		        				}
		        			}	        				        			
	        		} else {
	        			bootbox.alert(redata.retMsg);
	        		}
		        	},
		        	function(redata){
		        		//console.info(redata);
		        		bootbox.alert("交易异常，请检查网络设置或重新登录"); 
		        	},
		        	"json",
		        	false); 
		}
		
		//查询
		$('#tran_submit').click(function(){
			grid.setAjaxParam("acctno",$('#q_acctno').val());
			grid.setAjaxParam("tranus",$('#q_tranus').val());
			grid.setAjaxParam("toacct",$('#q_toacct').val());
			grid.setAjaxParam("startdt",$('#startdt').val());
			grid.setAjaxParam("enddt",$('#enddt').val());
			grid.submitFilter();
		});
		//清空
		$('#tran_cancle').click(function(){
			$('#q_tranus').val("");
			$('#q_toacct').val("");
			$('#startdt').val("");
			$('#enddt').val("");
		});
	}
	return {
		init : function(data) {
			handleTable(data);
		}
	}
}();