var Fcrepyclear=function(){
	var grid = new Datatable();
	var clflagDict=Sunline.getDict("E_YES___");
	var rpflagDict=Sunline.getDict("E_YES___");
	
	var date = new Date();
	var month = date.getMonth()+1+"";
	var day = date.getDate()+"";
	var monthStr = month.length==1?("0"+month):month;
	var dayStr = day.length==1?("0"+day):day;
	$("input[id='clerdt']").val(date.getFullYear()+""+monthStr+""+dayStr);
	
	$("input[name='clflag']",$("#fcdate")).select2({data:clflagDict,allowClear:true});
	var prodtpDict=Sunline.getDict("F_PRODTP");
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
		if(Sunline.isNull($('#clerdt').val())||Sunline.isNull($('#clflag').select2("val"))){
			bootbox.alert("生成日期、已追回状态不能为空！");
			return;
		}
		grid.setAjaxParam("clerdt",$('#clerdt').val());
		grid.setAjaxParam("clflag",$('#clflag').select2("val"));
		grid.submitFilter();
	});
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("fc/findrepyclear");
		$("#clflag").select2('val','0');
		var editForm = function(nRowA){

			bootbox.confirm("确定要清算", function(result) {
				if(!result){
            		return;
            	}
			var data={"subjcd":$(nRowA[0]).text(),"clerdt":$(nRowA[2]).text(),"repyno":$(nRowA[9]).text()};
			Sunline.ajaxRouter("fc/repyclear", data, "POST", function(ret){
				if(ret.retCode==="0000"){
					bootbox.alert("清算成功");
					grid.setAjaxParam("clerdt",$('#clerdt').val());
					grid.setAjaxParam("clflag",$('#clflag').select2("val"));
					grid.submitFilter();
				}else{
					bootbox.alert(ret.retMsg);
				}
			}, function(ret){
				bootbox.alert("网络异常");
			}, "json",
					false);
			});
		};
		grid.setAjaxParam("clerdt",$('#clerdt').val());
		grid.setAjaxParam("clflag","0");
		grid.init({
	        src: $("#fcrepyclear_ajax"),
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
		            	"data": "subjcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "cleram",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "rlcldt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "backdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prodcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prodna",
		            	"sortable": false,
		            	"searchable": false,
		            },{ 
		            	"data": "prodtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < prodtpDict.length; i++) {
								if (prodtpDict[i].id == data) {
									return prodtpDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "fcsrcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "fcsrna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repyno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "rpflag",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < rpflagDict.length; i++) {
								if (rpflagDict[i].id == data) {
									return rpflagDict[i].text;
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
							if($('#clflag').select2("val")==="1"){
								return "已追回";
							}
							return "<a class='edit' href='javascript:;' data-src='"
									+ data.subjcd
									+ ","
									+ data.repyno
									+ ","
									+ "1"
									+ "'>清算 </a>";
						}
					}
	            ]
	        }
	    });
		var sendData = ["subjcd","repyno","clflag"];
        grid.bindTableEdit(sendData,editForm);
	}
	
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
	
}();