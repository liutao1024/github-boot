var Smrepy = function(){
	/*var dk_dcqs = '900101300199000015'; //萨摩耶贷款代偿追回待清算
	var dk_hkqs = '900101300199000016'; //萨摩耶贷款还款代扣待清算
*/	
	var chkStatusDict = Sunline.getDict("chkStatus");
	var checkstausDict=Sunline.getDict("checkStatus");
	var crcycdDict=Sunline.getDict("crcycd");
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
			input.file = 'chpy_nomacth_cltn_';
			input.trandt = trandt;
			input.chanel = '02';
			/*input.dk_dcqs = dk_dcqs;
			input.dk_hkqs = dk_hkqs;*/
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
	        	"setlle/getSmyChinaPayDkRecord", 
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
	        			console.info($('#checkS').select2("val"));
	        		} else {
	        			bootbox.alert(redata.retMsg);
	        		}
	        	},
	        	function(redata){
	        		$("#myModal").modal('hide');
	        		bootbox.alert("交易异常，请检查网络设置货重新登录！"); 
	        	},
	        	"json",
	        	false); 
		});
	};
	var handlerTable = function(){
			var url = Sunline.ajaxPath("setlle/qrySmyChinaPayDkRecord");
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
			            	"data": "merchantCd",
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
			            	"data": "custna",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "custac",
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
			            	"data" : "crcycd",
							"sortable" : false,
							"searchable" : false,
							"render": function (data, type, full) {
			            		 for (var i = 0; i < crcycdDict.length; i++) {
			                          if (crcycdDict[i].id == data) {
			                            return crcycdDict[i].dictName;
			                          }
			                        }
			            		 return data;
							}
			            },{
			            	"data": "fronsq",
			            	"sortable": false,
			            	"searchable": false
			            },{
			            	"data": "frondt",
			            	"sortable": false,
			            	"searchable": false
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
//				var inacno = $('#inacno').val();
//				if(Sunline.isNull(inacno)){
//					bootbox.alert("请输入清算账户！");
//					return;
//				}
				var data = [];
				for (var i=0;i<rows.length;i++){
					var row = rows[i].children();
					var tranam = $(row[8]).text();
					var fronsq = $(row[10]).text();
					var frondt = $(row[11]).text();
					var custna = $(row[5]).text();
					var custca = $(row[6]).text();
					var chkStatus = _formartDict(chkStatusDict,$(row[12]).text());
					var checkDate = $(row[1]).text();
					var merchantCd = $(row[2]).text();
					var merchantDt = $(row[3]).text();
					var billno = $(row[4]).text();
					var rowData = {};
					rowData.tranam = tranam;
					rowData.fronsq = fronsq;
					rowData.frondt = frondt;
					rowData.billno = billno;
					rowData.custna = custna;
					rowData.custca = custca;
					rowData.merchantCd = merchantCd;
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
	            	"setlle/smyChinaPaydk", 
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
	return {
		init : function(){
			readFile();
			handleForm();
			handlerTable();
		}
	}
}()