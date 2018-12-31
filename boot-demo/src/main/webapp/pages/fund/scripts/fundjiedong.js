var Fundjiedong=function(){
	var grid = new Datatable();
	
	var transtDict=Sunline.getDict("E_FUNDST");
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	
	var handleForm =function(){
		if (jQuery().datepicker) {
	        $('.date-picker').datepicker({
	            rtl: Metronic.isRTL(),
	            orientation: "left",
	            autoclose: true,
	            language: 'zh-CN',
	        });
        };
	}
	$("#submit").click(function(){
		grid.setAjaxParam("trandx",$('#trandt').val());
		grid.setAjaxParam("custac",$('#custac').val());
		grid.submitFilter();
	});
	var handleTable = function() {
		var url = Sunline.ajaxPath("fund/qrfddj");
		var editForm = function(nRowA){
         var custac= $(nRowA[0]).text();
         var trandt= $(nRowA[1]).text();
         var transq= $(nRowA[2]).text();
         var billsq= $(nRowA[3]).text();
         var crcycd= $(nRowA[4]).text().substring($(nRowA[4]).text().indexOf("[")+1,$(nRowA[4]).text().indexOf("]"));
         var tranam= $(nRowA[5]).text();
         var transt= $(nRowA[6]).text().substring($(nRowA[6]).text().indexOf("[")+1,$(nRowA[6]).text().indexOf("]"));
			if(transt==='1'){
				alert("申购解冻");
				var data = {};
				data.yszjylsh = transq;
				data.beizhuuu = "解冻基金申购自动冲正";
				Sunline.ajaxRouter("curtain/strike", data, "POST", function(ret){
					if(ret.retCode==="0000"){
						bootbox.alert("解冻成功");
						grid.setAjaxParam("trandx",$('#trandt').val());
						grid.setAjaxParam("custac",$('#custac').val());
						grid.submitFilter();
					}else{
						bootbox.alert(ret.retMsg);
					}
				}, function(ret){
					bootbox.alert("网络异常");
				}, "json",false);
			}  else if (transt==='3'){
				alert("赎回解冻");
				console.info("transq",transq);
				var data={"custac":custac,"billsq":billsq,"trandt1":trandt,"transq1":transq,"fdflag":"0"};
				Sunline.ajaxRouter("fund/rdopfd", data, "POST", function(ret){
					if(ret.retCode==="0000"){
						bootbox.alert("解冻成功");
						grid.setAjaxParam("trandx",$('#trandt').val());
						grid.setAjaxParam("custac",$('#custac').val());
						grid.submitFilter();
					}else{
						bootbox.alert(ret.retMsg);
					}
				}, function(ret){
					bootbox.alert("网络异常");
				}, "json",
						false);
			}else{
				alert("交易类型不支持");
			}
		};
		grid.init({
	        src: $("#fundfind_ajax"),
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
	            "columns" : [
	                {     
		            	"data": "custac",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "trandt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "transq",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "billsq",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "crcycd",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < crcycdDict.length; i++) {
								if (crcycdDict[i].id == data) {
									return crcycdDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "tranam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "transt",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < transtDict.length; i++) {
								if (transtDict[i].id == data) {
									return transtDict[i].text;
								}
							}
							return data;
						}
		            },
					{
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							return "<a class='edit' href='javascript:;' data-src='"
							+ data.custac
							+ ","
							+ data.transq
							+ ","
							+ data.trandt
							+ ","
							+ data.billsq
							+ "'>解冻 </a>";
						}
					}
	            ]
	        }
	    });
		var sendData = ["custac","transq","trandt","billsq"];
        grid.bindTableEdit(sendData,editForm);
	}
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
}();