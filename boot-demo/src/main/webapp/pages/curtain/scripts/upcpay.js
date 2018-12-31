var Upcpay = function(){
	var chkStatusDict = Sunline.getDict("chkStatus");
	var paystausDict=Sunline.getDict("payStatus");
	var signstausDict=Sunline.getDict("signStatus");
	var checkstausDict=Sunline.getDict("checkStatus");
	var grid = new Datatable();
	var _isFirst = true;
	var _tranDate = "0000";
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
          }
	    return value;
	};
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var handleForm = function () {

		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
            
        };
        $("#checkS").select2({width:"100%",
        	data : checkstausDict,
        	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
        });
        $("#checkS").select2("val","N");
    };
	var readFile = function(){
		$('#file-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	checkdate: {
                    required: true
            	}
            },
            messages: {
            	checkdate: {
                    required: "对账日期必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#file-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            submitHandler: function (form) {
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
           
		});
		$('#submit').click(function(){
			if(!$('#file-form').validate().form()){
				return;
			}
			var trandt = $('#check-date').val();
			if(_tranDate == $('#check-date').val()){
				return;
			}
			var input = {};
			input.file = 'unon_nomacth_pay_';
			input.trandt = trandt;
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
	        	"setlle/check", 
	        	 input,
	        	"POST",
	            function(redata){
	        		//bootbox.alert("读取文件成功");
	        		//读取数据区表
	        		$("#myModal").modal('hide');
	        		if(redata.retCode == '0000'){
	        			$('.table-container .alert-danger').css("display","none");
	        			grid.setAjaxParam("trandt",$('#check-date').val());
	        			grid.setAjaxParam("checkStatus",$('#checkS').select2("val"));
	        			grid.submitFilter();
	        			$('#allsum').text(formartM(redata.amount+'')).css({'padding':'8px 0 0 10px','font-size':'18px','font-weight':'700'});
	        			$('#fee').text(formartM(redata.fee+"")).css({'padding':'8px 0 0 10px','font-size':'18px','font-weight':'700'});
	        			$('#c_status').text(redata.status == "N" ? "未清算" : "已清算").css({'padding':'8px 0 0 10px','font-size':'18px','font-weight':'700'});
	        			console.info($('#checkS').select2("val"));
	        			if(redata.status == 'N') {
	        				$('#cel_in').removeAttr('disabled');
	        			} else {
	        				$('#cel_in').attr('disabled',true);
	        			}
	        		} else {
	        			bootbox.alert(redata.retMsg);
	        		}
	        	},
	        	function(redata){
	        		$("#myModal").modal('hide');
	        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
	        	},
	        	"json",
	        	false); 
		});
		$('#cel_in').click(function(){
			bootbox.dialog({
                message: "<div class='comfirm'><p>清算资金：<span>"+$('#allsum').text()+"</span></p>"+
                				"<p>费用：<span>"+$('#fee').text()+"</span></p></div>",
                title: "请核对调账信息无误",
                buttons: {
                	取消: {
	                    label: "取消",
	                    className: "gray",
	                    callback: function() {
	                      return;
	                    }
	                  },
	                  确认: {
		                    label: "确认",
		                    className: "blue",
		                    callback: function() {
		                    	var input = {};
		            			var trandt = $('#check-date').val();
		            			input.trandt = trandt;
		            			Sunline.ajaxRouter(
		            		        	"setlle/uppay", 
		            		        	 input,
		            		        	"POST",
		            		            function(redata){
		            		        		if(redata.retCode == '0000'){
		            		        			$('#c_status').text("已清算");
		            		        			bootbox.alert("清算成功！"); 
		            		        			$('#cel_in').attr('disabled','disabled');
		            		        		} else {
		            		        			bootbox.alert(redata.retMsg);
		            		        		}
		            		        	},
		            		        	function(redata){
		            		        		$("#myModal").modal('hide');
		            		        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
		            		        	},
		            		        	"json",
		            		        	false); 
		                    }
		                  }
                }
            });
			
		});
	};
	var handlerTable = function(){
			var url = Sunline.ajaxPath("setlle/cppchk");
			var editForm = function(nRowA){
				$("#m_acctno").val($(nRowA[0]).text());
				$("#m_acctna").val($(nRowA[1]).text());
				$('.mod-form .alert').css('display','none');
				$('.mod-form .form-group').removeClass('has-error');
	           	$("#editModal").modal('show');
			};
			grid.setAjaxParam("trandt","");
			grid.setAjaxParam("checkStatus",$('#checkS').select2("val"));
			grid.init({
		        src: $("#cppchk_ajax"),
		        deleteData: sendData,
		        onSuccess: function (grid) {
		            // execute some code after table records loaded
		        	$('.table-container .alert-danger').css("display","none");
		        },
		        onError: function (grid) {
		            // execute some code on network or other general error
		        },
		        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
		            "ajax": {
		                "url": url, // ajax source
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
		            	},
		                {     
			            	"data": "checkDate",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "merchantDt",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "billno",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "coreDate",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "coreSeqno",
			            	"sortable": false,
			            	"searchable": false,
			            	"sliderable" : true
			            },{ 
			            	"data": "acctno",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "transAmt",
			            	"sortable": false,
			            	"searchable": false,
			            	"render" : function(data,type,full){
			            		return formartM(data+"");
			            	}
			            },{ 
			            	"data": "feeAmt",
			            	"sortable": false,
			            	"searchable": false,
			            	"render" : function(data,type,full){
			            		return formartM(data+"");
			            	}
			            },{ 
			            	"data": "chkStatus",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            	    for (var i = 0; i < chkStatusDict.length; i++) {
			                          if (chkStatusDict[i].id == data) {
			                            return chkStatusDict[i].dictName;
			                          }
			                        }
			            	    return data;
			            	}
			            },{ 
			            	"data": "signStatus",
			            	"width": "8%",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            	    for (var i = 0; i < signstausDict.length; i++) {
			                          if (signstausDict[i].id == data) {
			                            return signstausDict[i].dictName;
			                          }
			                        }
			            	    return data;
			            	}
			            },{ 
			            	"data": "checkStatus",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            		 for (var i = 0; i < checkstausDict.length; i++) {
			                          if (checkstausDict[i].id == data) {
			                            return checkstausDict[i].dictName;
			                          }
			                        }
			            		 return data;
			            	}
			            }
		            ]
		        }
		    });
			$(".table-group-actions").append("<button id='deal_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;差错处理</button></div>");
			var sendData = ["checkDate"];
	        grid.bindTableDelete(sendData);
	        grid.bindTableEdit(sendData,editForm);
	        _isFirst = false;
//		//点击全选，选择所有的行
//		var i = 0;
//		$('#selall').click(function(){
//			i+=1;
//			if(i%2==1){
//				$('tbody > tr > td input[type="checkbox"]').parent().addClass("checked");
//				$('#selall').text('取消');
//			}else{
//				$('tbody > tr > td input[type="checkbox"]').parent().removeClass("checked");
//				$('#selall').text('全选');
//			}
//		});
	        $('#deal_btn').click(function(){
				console.info("按钮点击事件");
				//获取选定的行数据
				var rows = grid.getSelectedRows();
				if(rows.length == 0){
					bootbox.alert("请选择要处理的数据");
					return;
				}
				var inacno = $('#inacno').val();
				if(Sunline.isNull(inacno)){
					bootbox.alert("请输入清算账户！");
					return;
				}
				var data = [];
				for (var i=0;i<rows.length;i++){
					var row = rows[i].children();
					var tranam = $(row[7]).text();
					var transq = $(row[5]).text();
					var acctno = $(row[6]).text();
					var toacct = inacno;//UnionPay清算账户
					var chkStatus = _formartDict(chkStatusDict,$(row[9]).text());
					var merchantDt = $(row[2]).text();
					var checkDate = $(row[1]).text();
					var billno = $(row[3]).text();
					var rowData = {};
					rowData.tranam = tranam;
					rowData.transq = transq;
					rowData.acctno = acctno;
					rowData.toacct = toacct;
					rowData.billno = billno;
					rowData.merchantDt = merchantDt;
					rowData.checkDate = checkDate;
					rowData.chkStatus = chkStatus;
					data.push(rowData);
					//debtDeal(rows[i].children());
				}
				var input = {};
				input.data = data;
				$("#myModal").modal('show');
				Sunline.ajaxRouter(
	            	"setlle/checkpaydeal", 
	            	 input,
	            	"POST",
	                function(redata){
	            		$("#myModal").modal('hide');
	            		if(redata.retCode!='0000'){
	    	     			bootbox.alert(redata.retMsg);
	    	     			return;
	    	     		}
	            		bootbox.alert("差错处理结束，处理["+redata.amount+"]笔中成功["+redata.succAmount+"]笔");
	            		grid.submitFilter();
	            		if(redata.amount == redata.succAmount){
	            			$('#cel_in').removeAttr('disabled');
	            		}
	            	},
	            	function(redata){
	            		$("#myModal").modal('hide');
	            		bootbox.alert("交易异常，请检查网络设置或重新登录", function() {
	            			
	                    }); 
	            	},
	            	"json",
	            	false); 
			});
		_tranDate = $('#check-date').val();
	};
//	var debtDeal = function(row){
//		var tranam = $(row[8]).text();
//		var transq = $(row[5]).text();
//		var acctno = $(row[6]).text();
//		var acctna = $(row[7]).text();
//		var toacct = '900101300100000001';//ChinaPay清算账户
//		var chkStatus = $(row[11]).text();
//		var merchantDt = $(row[2]).text();
//		var cpSeqno = $(row[3]).text();
//		var checkDate = $(row[1]).text();
//		var data = {};
//		data.checkDate = checkDate;
//		data.merchantDt = merchantDt;
//		data.cpSeqno = cpSeqno;
//		data.checkStatus = 'Y';
//		if(chkStatus == '3'){
//			//银行少账，重新记账
//			console.info("调账");
//			var input = {};
//			input.acctno = acctno;
//			input.toacct = toacct;
//			input.tranam = tranam;
//			input.crcycd = '01';
//			input.quotfs = '1';
//			console.info(input);
//			Sunline.ajaxRouter(
//	            	"curtain/adjust", 
//	            	 input,
//	            	"POST",
//	                function(redata){
//	            		if(redata.retCode!='0000'){
//	    	     			bootbox.alert(redata.retMsg);
//	    	     			return;
//	    	     		}
//	            		//修改记录
//	            		modifyStatus(data);
//	            	},
//	            	function(redata){
//	            		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
//	            			
//	                    }); 
//	            	},
//	            	"json",
//	            	false); 
//		} else if (chkStatus == '2'){
//			//银行多，冲账
//			console.info("冲账");
//			var input = {};
//			input.yszjylsh = transq;
//			input.beizhuuu = "差错对账";
//			Sunline.ajaxRouter(
//	        	"curtain/strike", 
//	        	 input,
//	        	"POST",
//	            function(redata){
//	        		if(redata.retCode!='0000'){
//		     			bootbox.alert(redata.retMsg);
//		     			return;
//		     		}
//	        		modifyStatus(data);
//	        	},
//	        	function(redata){
//	        		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
//	                }); 
//	        	},
//	        	"json",
//	        	false); 
//		}
//		
//	};
//	var modifyStatus = function(data){
//		Sunline.ajaxRouter(
//    	"curtain/upstatus", 
//    	 data,
//    	"POST",
//        function(redata){
//    		if(redata.retCode!='0000'){
//     			bootbox.alert(redata.retMsg);
//     			return false;
//     		}
//    		//修改记录
//    		return true;
//    	},
//    	function(redata){
//    		return false;
//    	},
//    	"json",
//    	false); 
//	}
	return {
		init : function(){
			readFile();
			handleForm();
			handlerTable();
		}
	}
}()