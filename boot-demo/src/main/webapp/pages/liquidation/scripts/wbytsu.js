var Upcpay = function() {
	var grid=new Datatable();
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

	var readFile=function(){
		$("#submit").bind("click",function(){
		$("#myModal").modal('show');
		var trandt = $('#check-date').val();
		var input = {};
		input.file = 'st_wb_ytsubj_';
		input.trandt = trandt;
		Sunline.ajaxRouter("liquidation/wbytsu", input, "POST",
				function(redata) {
			             $("#myModal").modal('hide');
			            // console.info(redata);
			             if(redata.retCode=='0000'){
			            	 //读文件正常刷新表格
			            	 grid.setAjaxParam("trandt",$('#check-date').val());
		                     grid.submitFilter();
		                     
		                     $("#cppchk_ajax tr").eq(1).find("td").eq(1).html(redata.data2[0].yesdebitremain);
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(2).html(redata.data2[0].yescreditremain);
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(3).html(redata.data2[0].toddebithapp);
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(4).html(redata.data2[0].todcredithapp);
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(5).html(redata.data2[0].toddebitremain);
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(6).html(redata.data2[0].todcreditremain);
		                     
		                     //tableobj.rows[1].cells[1].innerText=redata.data2[0].yesdebitremain;
		                     //tableobj.rows[1].cells[2].innerText=redata.data2[0].yescreditremain;
		                     //tableobj.rows[1].cells[3].innerText=redata.data2[0].toddebithapp;
		                     //tableobj.rows[1].cells[4].innerText=redata.data2[0].todcredithapp;
		                     //tableobj.rows[1].cells[5].innerText=redata.data2[0].toddebitremain;
		                     //tableobj.rows[1].cells[6].innerText=redata.data2[0].todcreditremain;
			             }
			             else{
			            	 grid.setAjaxParam("trandt",$('#check-date').val());
		                     grid.submitFilter();
		                     
		                     $("#cppchk_ajax tr").eq(1).find("td").eq(1).html("");
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(2).html("");
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(3).html("");
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(4).html("");
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(5).html("");
		     				 $("#cppchk_ajax tr").eq(1).find("td").eq(6).html("");
		                     
		                     //tableobj.rows[1].cells[1].innerText="";
		                     //tableobj.rows[1].cells[2].innerText="";
		                     //tableobj.rows[1].cells[3].innerText="";
		                     //tableobj.rows[1].cells[4].innerText="";
		                     //tableobj.rows[1].cells[5].innerText="";
		                     //tableobj.rows[1].cells[6].innerText="";
			             }
			             
			            
				}, function(redata) {
					
				}, "json", false);
	});
	};
	

	//虚拟表格
	var handleForm = function() {
        
		var url = Sunline.ajaxPath("liquidation/wbytsuserh");
		//grid.setAjaxParam("trandt",$('#check-date').val());
		grid.init({
			src : $("#ytsuchk_ajax"),
			deleteData : sendData,
			onSuccess : function(grid) {
				// execute some code after table records loaded
				//$('.table-container .alert-danger').css("display", "none");
			},
			onError : function(grid) {
				// execute some code on network or other general error
			},
			dataTable : { // here you can define a typical datatable settings
							// from http://datatables.net/usage/options
				"ajax" : {
					"url" : url, // ajax source
				},
				"columns" : [ {
					"data" : "busidate",
					"sortable" : false,
					"searchable" : false,
				}, {
					"data" : "subjectnumber",
					"sortable" : true,
					"aaSorting": ["asc"],
					"searchable" : false,
				}, {
					"data" : "subjectname",
					"sortable" : false,
					"searchable" : false,
					
				}, {
					"data" : "synname",
					"sortable" : false,
					"searchable" : false,
					
				}, {
					"data" : "yesdebitremain",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "yescreditremain",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "toddebithapp",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "todcredithapp",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "toddebitremain",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "todcreditremain",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "wzsubjectnumber",
					"sortable" : false,
					"searchable" : false,
					
				},{
					"data" : "tableinout",
					"sortable" : false,
					"searchable" : false,
					
				},]
			}
		});
		var editForm = function() {
		};
		var sendData = [ "checkDate" ];
		grid.bindTableEdit(sendData, editForm);
	};
	
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
			handleForm();
			readFile();
		}
	}
}()