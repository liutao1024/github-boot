var Upcpay = function() {
	//获取tableID
	var tableobj=document.getElementById("cppchk_ajax");
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
    
    $('#check-date').val(FormatDate());
	
	
	//读文件
	var readFile = function() {
		
		$("#submit").bind("click",function(){
			$("#myModal").modal('show');
			
			var trandt = $('#check-date').val();
			var input = {};
			input.file = 'st_wb_acctbal_';
			input.trandt = trandt;
			//读文件
			Sunline.ajaxRouter("liquidation/wbacct", input, "POST",
					function(redata) {	
				                     $("#myModal").modal('hide');
				             	if (redata.retCode == '0000') {
				    				
								} else {
									for(var j=0;j<9;j++){
										//tableobj.rows[1].cells[j].innerText="";
										$("#cppchk_ajax tr").eq(1).find("td").eq(j).html("");
									}
									bootbox.alert(redata.retMsg);
								}
					}, function(redata) {

					}, "json", false);
			//查询数据
			Sunline.ajaxRouter("liquidation/wbacctserh", input, "POST",
					function(redata) {
				$("#myModal").modal('hide');
				
				$("#cppchk_ajax tr").eq(1).find("td").eq(0).html(redata.data[0].busidate);
				$("#cppchk_ajax tr").eq(1).find("td").eq(1).html(redata.data[0].acctbalan);
				$("#cppchk_ajax tr").eq(1).find("td").eq(2).html(redata.data[0].wzacctba);
				$("#cppchk_ajax tr").eq(1).find("td").eq(3).html(redata.data[0].partrepay);
				$("#cppchk_ajax tr").eq(1).find("td").eq(4).html(redata.data[0].daydiff);
				$("#cppchk_ajax tr").eq(1).find("td").eq(5).html(redata.data[0].dayglp);
				$("#cppchk_ajax tr").eq(1).find("td").eq(6).html(redata.data[0].acctc01);
				$("#cppchk_ajax tr").eq(1).find("td").eq(7).html(redata.data[0].acctc02);
				$("#cppchk_ajax tr").eq(1).find("td").eq(8).html(redata.data[0].acctdiff);
				
				//tableobj.rows[1].cells[0].innerText=redata.data[0].busidate;
				//tableobj.rows[1].cells[1].innerText=redata.data[0].acctbalan;
				//tableobj.rows[1].cells[2].innerText=redata.data[0].wzacctba;
				//tableobj.rows[1].cells[3].innerText=redata.data[0].partrepay;
				//tableobj.rows[1].cells[4].innerText=redata.data[0].daydiff;
				//tableobj.rows[1].cells[5].innerText=redata.data[0].dayglp;
				//tableobj.rows[1].cells[6].innerText=redata.data[0].acctc01;
				//tableobj.rows[1].cells[7].innerText=redata.data[0].acctc02;
				//tableobj.rows[1].cells[8].innerText=redata.data[0].acctdiff;
      
					}, function(redata) {
						
					}, "json", false);
		});
	};
	//虚拟表格
	var handleForm = function() {};
	
	 //日期控件
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
};
	return {
		init : function() {
			readFile();
			handleForm();
		}
	}
}()