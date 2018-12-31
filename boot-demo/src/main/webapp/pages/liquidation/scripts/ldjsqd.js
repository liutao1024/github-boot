var ldjsqd = function() {
	var grid = new Datatable();
	var tableobj=document.getElementById("cppchk_ajax");
	var _tranDate = "0000";
	if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: Metronic.isRTL(),
            orientation: "left",
            autoclose: true,
            language: 'zh-CN',
        });
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
	
    var readFile=function(){
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
			input.file = 'st_wb_platfee_';
			input.trandt = trandt;
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
	        	"liquidation/wbcheck", 
	        	 input,
	        	"POST",
	            function(redata){
	        		//
	        		//读取数据区表
	        		$("#myModal").modal('hide');
	        		if(redata.retCode == '0000'){
	        			//bootbox.alert("读取文件成功");
//	        			grid.setAjaxParam("trandt",$('#check-date').val());
//       			        grid.submitFilter();
	        		} else {
	        			for(var j=0;j<11;j++){
							//tableobj.rows[1].cells[j].innerText="";
							//tableobj.rows[2].cells[j].innerText="";
							//tableobj.rows[3].cells[j].innerText="";
							
							$("#cppchk_ajax tr").eq(1).find("td").eq(j).html("");
							$("#cppchk_ajax tr").eq(2).find("td").eq(j).html("");
							$("#cppchk_ajax tr").eq(3).find("td").eq(j).html("");
						}
	        			bootbox.alert(redata.retMsg);
	        		}
	        	},
	        	function(redata){
	        		$("#myModal").modal('hide');
	        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
	        	},
	        	"json",
	        	false); 
			
			//查询数据
			Sunline.ajaxRouter("liquidation/wbcppchk",input, "POST",
					function(redata) {
				$("#myModal").modal('hide');
					for(var j=0;j<11;j++){
						//tableobj.rows[1].cells[j].innerText="";
						//tableobj.rows[2].cells[j].innerText="";
						//tableobj.rows[3].cells[j].innerText="";
						$("#cppchk_ajax tr").eq(1).find("td").eq(j).html("");
						$("#cppchk_ajax tr").eq(2).find("td").eq(j).html("");
						$("#cppchk_ajax tr").eq(3).find("td").eq(j).html("");
					}
					for(var i=0;i<redata.data.length;i++){
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(0).html(redata.data[i].ldxuho);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(1).html(redata.data[i].ldytmc);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(2).html(redata.data[i].qcyslx);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(3).html(redata.data[i].qcyjlx);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(4).html(redata.data[i].qclxsr);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(5).html(redata.data[i].qmyslx);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(6).html(redata.data[i].qmyjlx);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(7).html(redata.data[i].qmlxsr);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(8).html(redata.data[i].ldsslx);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(9).html(redata.data[i].ldptfl);
						$("#cppchk_ajax tr").eq(i+1).find("td").eq(10).html(redata.data[i].ldpitl);
						
						//tableobj.rows[i+1].cells[0].innerText=redata.data[i].ldxuho;
						//tableobj.rows[i+1].cells[1].innerText=redata.data[i].ldytmc;
						//tableobj.rows[i+1].cells[2].innerText=redata.data[i].qcyslx;
						//tableobj.rows[i+1].cells[3].innerText=redata.data[i].qcyjlx;
						//tableobj.rows[i+1].cells[4].innerText=redata.data[i].qclxsr;
						//tableobj.rows[i+1].cells[5].innerText=redata.data[i].qmyslx;
						//tableobj.rows[i+1].cells[6].innerText=redata.data[i].qmyjlx;
						//tableobj.rows[i+1].cells[7].innerText=redata.data[i].qmlxsr;
						//tableobj.rows[i+1].cells[8].innerText=redata.data[i].ldsslx;
						//tableobj.rows[i+1].cells[9].innerText=redata.data[i].ldptfl;
						//tableobj.rows[i+1].cells[10].innerText=redata.data[i].ldpitl;
					}
			
					}, function(redata) {
						
					}, "json", false);
			
		});
	};

	return {
		init : function(){
			readFile();
			
//			handleTable();
		}
	}
}();