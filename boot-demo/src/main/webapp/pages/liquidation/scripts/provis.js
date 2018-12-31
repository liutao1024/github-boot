var provis = function(){
	var chkStatusDict = Sunline.getDict("chkStatus");
	var paystausDict=Sunline.getDict("payStatus");
	var signstausDict=Sunline.getDict("signStatus");
	var checkstausDict=Sunline.getDict("checkStatus");
	var tableobj=document.getElementById("tablesa");
	var tabletotle=document.getElementById("totle");
	var grid = new Datatable();
	var editForm = function(){};
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
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
    
    $('#check-date').val(FormatDate());
	
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
			$("#myModal").modal('show');
			var input = {};
			input.file = 'st_wb_acctfsex_';
			input.trandt = trandt;
			var tablesa = $('#tablesa');
			Sunline.ajaxRouter(
	        	"liquidation/provis", 
	        	 input,
	        	"POST",
	            function(redata){
	        		$("#myModal").modal('hide');
	        		//TODO 按文件明细顺序对应放入    后期待定
	        		
	        		$("#tablesa tr").eq(1).find("td").eq(1).html(redata.provisNo);
					$("#tablesa tr").eq(1).find("td").eq(3).html(redata.usernames);
					$("#tablesa tr").eq(3).find("td").eq(1).html(redata.workDt);
					$("#tablesa tr").eq(4).find("td").eq(1).html(redata.yesdat_atm);
					$("#tablesa tr").eq(4).find("td").eq(3).html(redata.todate_atm);
					$("#tablesa tr").eq(5).find("td").eq(1).html(redata.otherin_atm);
					$("#tablesa tr").eq(5).find("td").eq(3).html(redata.otheron_atm);
					
					$("#tablesa tr").eq(1).find("td").eq(1).html(redata.outPay);
					$("#tablesa tr").eq(1).find("td").eq(2).html(redata.outnoPay);
					$("#tablesa tr").eq(1).find("td").eq(3).html(redata.inPay);
					$("#tablesa tr").eq(1).find("td").eq(4).html(redata.innoPay);
	        		
	        		//tableobj.rows[1].cells[1].innerText=redata.provisNo;
        			//tableobj.rows[1].cells[3].innerText=redata.usernames;
        			//tableobj.rows[3].cells[1].innerText=redata.workDt;
       			 	//tableobj.rows[4].cells[1].innerText=redata.yesdat_atm;
       			 	//tableobj.rows[4].cells[3].innerText=redata.todate_atm;
        			//tableobj.rows[5].cells[1].innerText=redata.otherin_atm;
        			//tableobj.rows[5].cells[3].innerText=redata.otheron_atm;
	        		
        			//tabletotle.rows[1].cells[1].innerText=redata.outPay;
        			//tabletotle.rows[1].cells[2].innerText=redata.outnoPay;
        			//tabletotle.rows[1].cells[3].innerText=redata.inPay;
        			//tabletotle.rows[1].cells[4].innerText=redata.innoPay;
	        		if(redata.retCode == '0000'){
	        			
	        			grid.setAjaxParam("trandt",$('#check-date').val());
	        			grid.submitFilter();
	        			
	        		} else {
	        			grid.setAjaxParam("trandt",$('#check-date').val());
	        			grid.submitFilter();
	        			$("#tablesa tr").eq(1).find("td").eq(1).html("");
						$("#tablesa tr").eq(1).find("td").eq(3).html("");
						$("#tablesa tr").eq(3).find("td").eq(1).html("");
						$("#tablesa tr").eq(4).find("td").eq(1).html("");
						$("#tablesa tr").eq(4).find("td").eq(3).html("");
						$("#tablesa tr").eq(5).find("td").eq(1).html("");
						$("#tablesa tr").eq(5).find("td").eq(3).html("");
						
						$("#tablesa tr").eq(1).find("td").eq(1).html("");
						$("#tablesa tr").eq(1).find("td").eq(2).html("");
						$("#tablesa tr").eq(1).find("td").eq(3).html("");
						$("#tablesa tr").eq(1).find("td").eq(4).html("");
	        			
	        			//tableobj.rows[1].cells[1].innerText="";
	        			//tableobj.rows[1].cells[3].innerText="";
	        			//tableobj.rows[3].cells[1].innerText="";
	       			 	//tableobj.rows[4].cells[1].innerText="";
	       			 	//tableobj.rows[4].cells[3].innerText="";
	        			//tableobj.rows[5].cells[1].innerText="";
	        			//tableobj.rows[5].cells[3].innerText="";
	        			//tabletotle.rows[1].cells[1].innerText="";
	        			//tabletotle.rows[1].cells[2].innerText="";
	        			//tabletotle.rows[1].cells[3].innerText="";
	        			//tabletotle.rows[1].cells[4].innerText="";
	        			bootbox.alert(redata.retMsg);
	        		}
	        	},function(redata){
	        		$("#myModal").modal('hide');
	        		//bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
	        	},
	        	"json",
	        	false);
		});
		
	};
	var handlerTable = function(){
		var url = Sunline.ajaxPath("liquidation/provischeck");
		//grid.setAjaxParam("trandt",$('#check-date').val());
		//TODO 按文件明细顺序对应放入    后期待定
			grid.init({
		        src: $("#cppchk_ajax"),
		        deleteData: sendData,
		       
		        onError: function (grid) {
		        },
		        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
		            "ajax": {
		                "url": url, // ajax source
		            },
		            "columns" : [{
			            	"data": "payNo",
			            	"sortable": false,
			            	"searchable": false,
		            	},
		                {     
			            	"data": "outPay",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "outnoPay",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "inPay",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "innoPay",
			            	"sortable": false,
			            	"searchable": false
			            }
		            ]
		        }
		    });
			
		
		var sendData = ["checkDate"];
        
        grid.bindTableEdit(sendData,editForm);
        
 
	};

	return {
		init : function(){
			handlerTable();
			readFile();
			handleForm();
			
		}
	}
}()