var Guacln = function(){
	var chkStatusDict = Sunline.getDict("chkStatus");
	var paystausDict=Sunline.getDict("payStatus");
	var signstausDict=Sunline.getDict("signStatus");
	var checkstausDict=Sunline.getDict("checkStatus");
	var transtDict=[{"id":"1","dictName":"银行多"}
	,{"id":"2","dictName":"银行少"}
	,{"id":"3","dictName":"平账"}]
	var grid = new Datatable();
	var _tranDate = "0000";
	var _status = "0000";
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].id;
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
	var handlebusino = function () {
		var input = {};
		input.busino = "GU3001";	
		Sunline.ajaxRouter(
	        	"curtain/qrbuno",input,
	        	"POST",
	            function(redata){	        		
	        		if(redata.retCode=="0000"){
	        			$('#inacno').val(redata.acctno);		        			
	        			
	        			
      			}else{
        				bootbox.alert(redata.retMsg);
        			}
	        	},
	        	function(redata){
	        		$('#select').attr("disabled",false);
	        		bootbox.alert("网络异常，请重试！"); 
	        	},
	        	"json",
	        	false); 
	}
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
			var checkS = $('#checkS').select2("val");
			if(_tranDate == trandt && _status == checkS){
				return;
			}
			var input = {};
			var trandt = $('#check-date').val();
			input.file = 'gupy_nomatch_cut_';
			input.trandt = trandt;
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
	        	"curtain/gultn", 
	        	 input,
	        	"POST",
	            function(redata){
	        		$("#myModal").modal('hide');
	        		//bootbox.alert("读取文件成功");
	        		//读取数据区表
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
	        		console.info(redata);
	        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
	        	},
	        	"json",
	        	false); 
		});
		
		$('#cel_in').click(function(){
			bootbox.dialog({
				message: "<div class='comfirm'><p>清算资金：<span>"+$('#allsum').text()+"</span></p>"+
   				"<p>费用：<span>"+$('#fee').text()+"</span></p></div>",
                title: "请核对清算信息无误",
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
		            		        	"curtain/gudealCltn", 
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
		            		        		console.info(redata);
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
		$('.table-container .alert-danger').css("display","none");
			var url = Sunline.ajaxPath("curtain/guchk");
			var editForm = function(nRowA){
				console.info($(nRowA[0]).text());
				$("#m_acctno").val($(nRowA[0]).text());
				$("#m_acctna").val($(nRowA[1]).text());
				$('.mod-form .alert').css('display','none');
				$('.mod-form .form-group').removeClass('has-error');
	           	$("#editModal").modal('show');
			};
			grid.setAjaxParam("trandt","");
			console.info("处理状态"+$('#checkS').select2("val"));
			grid.setAjaxParam("checkStatus","");
			grid.init({
		        src: $("#gulchk_ajax"),
		        deleteData: sendData,
		        onSuccess: function (grid) {
		            // execute some code after table records loaded
		        	$('.table-container .alert-danger').css("display","none");
		        },
		        onError: function (grid) {
		            // execute some code on network or other general error
		        	console.info("It is error!");
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
			            		if(data == "Y"){
			            			return "";
			            		}
			            		return '<input type="checkbox" class="checkboxes" value="1"/>';
			            	}
		            	},
		                {     
			            	"data": "checkDate",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "merchantCd",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "merchantDt",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "gupysq",
			            	"sortable": false,
			            	"searchable": false
			            },
			            { 
			            	"data": "gupyno",
			            	"sortable": false,
			            	"searchable": false
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
			var sendData = ["checkDate","checkStatus"];
	        grid.bindTableDelete(sendData);
	        grid.bindTableEdit(sendData,editForm);
	        
	        
		$('#deal_btn').click(function(){
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
			for (i=0;i<rows.length;i++){
				var row = rows[i].children();
				var tranam = $(row[7]).text();
				var toacct = $(row[6]).text();
				var acctno = inacno;//系统内往来清算户
				var chkStatus = _formartDict(chkStatusDict,$(row[8]).text());
				var merchantDt = $(row[3]).text();
				var gupysq = $(row[4]).text();
				var gupyno = $(row[5]).text();
				var checkDate = $(row[1]).text();
				var rowData = {};
				rowData.tranam = tranam;
				rowData.acctno = acctno;
				rowData.toacct = toacct;
				rowData.merchantDt = merchantDt;
				rowData.gupysq = gupysq;
				rowData.gupyno = gupyno;
				rowData.checkDate = checkDate;
				rowData.chkStatus = chkStatus;
				data.push(rowData);
				//debtDeal(rows[i].children());
			}
			var input = {};
			input.data = data;
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
            	"curtain/Gucheckcltndeal", 
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
            		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
            			
                    }); 
            	},
            	"json",
            	false); 
			});
		_tranDate = $('#check-date').val();
	};
	return {
		init : function(){
			handlebusino();
			readFile();
			handleForm();
			handlerTable();
		}
	}
}()