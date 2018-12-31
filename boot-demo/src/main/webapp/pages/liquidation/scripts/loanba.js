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
			input.file = 'st_wb_loanbalance_';
			input.trandt = trandt;
			Sunline.ajaxRouter("liquidation/loanba", input, "POST",
					function(redata) {
				               $("#myModal").modal('hide');
						// 读取数据区表
						if (redata.retCode == '0000') {
				                
						} else {
							bootbox.alert(redata.retMsg);
							for(var i=2;i<6;i++){
								for(var j=1;j<6;j++){
									//tableobj.rows[i].cells[j].innerText="";
									$("#cppchk_ajax tr").eq(i).find("td").eq(j).html("");
								}
							}
						}
					}, function(redata) {
					      bootbox.alert("读取文件失败");
					}, "json", false);
			//查询信息
			Sunline.ajaxRouter("liquidation/loancheck",input,"post",function(redata){

				//TODO 按文件明细顺序对应放入    后期待定
				if(redata.retCode=='0000'){
				$("#cppchk_ajax tr").eq(2).find("td").eq(1).html(redata.data[0].loandebit);
				$("#cppchk_ajax tr").eq(2).find("td").eq(2).html(redata.data[0].loancredit);
				$("#cppchk_ajax tr").eq(2).find("td").eq(3).html(redata.data[0].squaredebit);
				$("#cppchk_ajax tr").eq(2).find("td").eq(4).html(redata.data[0].squarecredit);
				$("#cppchk_ajax tr").eq(2).find("td").eq(5).html(redata.data[0].remainsum);
				
				$("#cppchk_ajax tr").eq(3).find("td").eq(1).html(redata.data[1].loandebit);
				$("#cppchk_ajax tr").eq(3).find("td").eq(2).html(redata.data[1].loancredit);
				$("#cppchk_ajax tr").eq(3).find("td").eq(3).html(redata.data[1].squaredebit);
				$("#cppchk_ajax tr").eq(3).find("td").eq(4).html(redata.data[1].squarecredit);
				$("#cppchk_ajax tr").eq(3).find("td").eq(5).html(redata.data[1].remainsum);
				
				$("#cppchk_ajax tr").eq(4).find("td").eq(1).html(redata.data[2].loandebit);
				$("#cppchk_ajax tr").eq(4).find("td").eq(2).html(redata.data[2].loancredit);
				$("#cppchk_ajax tr").eq(4).find("td").eq(3).html(redata.data[2].squaredebit);
				$("#cppchk_ajax tr").eq(4).find("td").eq(4).html(redata.data[2].squarecredit);
				$("#cppchk_ajax tr").eq(4).find("td").eq(5).html(redata.data[2].remainsum);
				
				$("#cppchk_ajax tr").eq(5).find("td").eq(1).html(redata.data2[0].loandebit);
				$("#cppchk_ajax tr").eq(5).find("td").eq(2).html(redata.data2[0].loancredit);
				$("#cppchk_ajax tr").eq(5).find("td").eq(3).html(redata.data2[0].squaredebit);
				$("#cppchk_ajax tr").eq(5).find("td").eq(4).html(redata.data2[0].squarecredit);
				$("#cppchk_ajax tr").eq(5).find("td").eq(5).html(redata.data2[0].remainsum);
				
				//tableobj.rows[2].cells[1].innerText=redata.data[0].loandebit;
				//tableobj.rows[2].cells[2].innerText=redata.data[0].loancredit;
				//tableobj.rows[2].cells[3].innerText=redata.data[0].squaredebit;
				//tableobj.rows[2].cells[4].innerText=redata.data[0].squarecredit;
				//tableobj.rows[2].cells[5].innerText=redata.data[0].remainsum;
				
				//tableobj.rows[5].cells[1].innerText=redata.data2[0].loandebit;
				//tableobj.rows[5].cells[2].innerText=redata.data2[0].loancredit;
				//tableobj.rows[5].cells[3].innerText=redata.data2[0].squaredebit;
				//tableobj.rows[5].cells[4].innerText=redata.data2[0].squarecredit;
				//tableobj.rows[5].cells[5].innerText=redata.data2[0].remainsum;
				}
				else{
					alert("文件格式有误");
					
					}
			},function(){},"json",false);
			$("#myModal").modal('hide');
		});
	
	};
	//给表格赋值
	var handleForm = function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
	};
	}
	return {
		init : function() {
			readFile();
			handleForm();
		}
	}
}()