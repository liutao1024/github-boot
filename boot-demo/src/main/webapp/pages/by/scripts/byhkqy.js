var byhkqy = function() {

	$("#loanst").select2("val","0");
	function FormatDate () {
		var date =new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	var cheargrid = new Datatable();
	var summoy = 0.00;
	var isF = true;
	var isAs = true;
	var grid = new Datatable();
	var handleFileUpload = function() {
		$('#trdate').val(FormatDate());
		$("#loanst").select2({
        	data : [{id:'0',text:'未清算'},{id:'1',text:'已清算'}]
        });
		$("#loanst").select2("val","0");
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		
		
		$('#submit').click(function() {
			if(Sunline.isNull($('#trdate').val())){
				bootbox.alert("清算日期不能为空！");
				return;
			}
			grid.setAjaxParam("trdate",$('#trdate').val());
			grid.setAjaxParam("loanst",$('#loanst').select2("val"));//清算状态
			grid.setAjaxParam("qstype","02");//清算状态
			grid.submitFilter();
			
		});
		var url = Sunline.ajaxPath("by/findLoantask");
		grid.setAjaxParam("trdate",$('#trdate').val());
		grid.setAjaxParam("loanst",$('#loanst').select2("val"));//清算状态
		grid.setAjaxParam("qstype","02");//清算状态
		grid.init({
			src : $("#byhkqy_ajax"),
			onSuccess : function(grid) {
				if(grid.getDataTable().ajax.json().retCode!="0000"){
					$("#alert").text(grid.getDataTable().ajax.json().retMsg);
					$(".alert-danger").show();
				}else{
					$(".alert-danger").hide();
				}
	        	summoy = grid.getDataTable().ajax.json().summoy;
	        	$("#allsum").text(summoy);
	        	$("#counts").text(grid.getDataTable().ajax.json().counts);
	        	$("#suscnt").text(grid.getDataTable().ajax.json().suscnt);
	        	$("#difcnt").text(grid.getDataTable().ajax.json().difcnt);
	        	var loanst = $('#loanst').select2("val");
	        	if(loanst == "0" && summoy > 0){
	        		$("#dealdiv").css("display","block");
	        		$('#deal').attr("disabled",false);
	        	}else{

	        		$("#dealdiv").css("display","none");     		
	        		
	        	}
			},
			onError : function(grid) {
				console.info("It is error!11");
			},
			dataTable : {
				"ajax" : {
					"url" : url,
				},
				"columns" : [
				                {     
					            	"data": "custac",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "lncfno",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "termno",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "trandt",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "totamt",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "totfee",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "totint",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctotl",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctamt",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctfee",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctint",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "clerst",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data, type, full) {
					            		var loanst;
					            		if(data == "0"){
					            			loanst = "未清算";
			     	            		}else if(data == "1"){
			     	            			loanst = "已清算";
			     	            			
			     	            		}
					            		return loanst;
									}
					            },
					            { 
					            	"data": "byretp",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data, type, full) {
					            		var retype;
					            		if(data == "1"){
					            			retype = "单笔正常还款";
			     	            		}else if(data == "2"){
			     	            			retype = "单笔已代偿";
			     	            			
			     	            		}else if(data == "3"){
			     	            			retype = "单笔正常结清";
			     	            			
			     	            		}else if(data == "5"){
			     	            			retype = "代偿提前结清";
			     	            			
			     	            		}else if(data == "5"){
			     	            			retype = "到期未还";
			     	            			
			     	            		}else if(data == "6"){
			     	            			retype = "宽限期还款";
			     	            			
			     	            		}
					            		
					            		return retype;
									}
					            },
					            { 
					            	"data": "isdter",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data, type, full,meta) {
					            		
					            		
					            		var isdiff;
					            		if(data == "0"){
					            			isdiff = "无差异";
			     	            		}else if(data == "1"){
			     	            			
			     	            			isdiff = "有差异";
			     	            			$(grid.getDataTable().row(meta.row).node()).css("color","red");
			     	            		  	            		
			     	            		}
					            		return isdiff;

					            		
									}
					            
					            }
				            ]
			}

		});
		
		$('#query').click(function(){
			var url = Sunline.ajaxPath("by/findLoantask");
			if(isF){
			cheargrid.init({
		        src: $("#bywhqy_ajax"),
		        onSuccess: function (cheargrid) {
		        	
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
		            "columns" : [
		 		                {     
					            	"data": "custac",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "lncfno",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "termno",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "trandt",
					            	"sortable": false,
					            	"searchable": false
					            },{ 
					            	"data": "totamt",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "totfee",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "totint",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctotl",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctamt",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctfee",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "fctint",
					            	"sortable": false,
					            	"searchable": false
					            },
					            { 
					            	"data": "clerst",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data, type, full) {
					            		var loanst;
					            		if(data == "0"){
					            			loanst = "未清算";
			    	            		}else if(data == "1"){
			    	            			loanst = "已清算";
			    	            			console
			    	            		}
					            		return loanst;
									}
					            },{ 
					            	"data": "isdter",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data, type, full,meta) {
					            		
					            		
					            		var isdiff;
					            		if(data == "0"){
					            			isdiff = "无差异";
			    	            		}else if(data == "1"){
			    	            			
			    	            			isdiff = "有差异";
			    	            			$(grid.getDataTable().row(meta.row).node()).css("color","red");
			    	            		  	            		
			    	            		}
					            		return isdiff;

					            		
									}
					            
					            }
				            ]
		        }
		    });
			
			isF = false;
			}else{
				
				cheargrid.setAjaxParam("taskdt","20161231");//清算日期
				cheargrid.setAjaxParam("loanst","0");;//清算状态
				cheargrid.setAjaxParam("qstype","03");
				cheargrid.submitFilter();
		    }
			$("#tranModal").modal('show');
			
			
			
		});
		
		//清算
		$("#deal").click(function(){
				if(Sunline.isNull($('#allsum').text())){
					bootbox.alert("待清算金额不能为空！"); 
					return;
				} 
				if(Sunline.isNull($('#trdate').val())){
					bootbox.alert("待清算日期不能为空！"); 
					return;
				}
				bootbox.confirm("确定要清算？", function(result) {
	            	if(!result){
	            		return;
	            }
				//$('#deal').attr("disabled",true);
				var input = {}; //{"taskdt":$("#taskdt").val(),"clstat":$("#clstat").select2("val")};
				
	     		input.trdate = $("#trdate").val();
	     		input.loanst = $("#clstat").select2("val");
	     		input.qstype = "02"
	     		input.allsum = summoy;
				Sunline.ajaxRouter(
			         	"by/clearLoantask", 
			         	 input,
			         	"POST",
			             function(redata){
			         		if(redata.retCode=="0000"){
			         			$("#trdate").text(redata.trdate);
			         			
			         			bootbox.alert("清算成功"+","+"清算笔数:"+redata.count);
			         			
			         			
			         			$('#deal').attr("disabled",true);
			         			grid.submitFilter();
			         		}else{
			         			$('#deal').attr("disabled",true);
			         			bootbox.alert(redata.retMsg);
			         		}
			         	},
			         	function(redata){
			         		$('#deal').attr("disabled",false);
			         		bootbox.alert("网络异常");
			         	},
			         	"json",
			         	false); 	
						
				});
		});
		


	};

	return {
		init : function() {
			handleFileUpload();
		}
	}

}()