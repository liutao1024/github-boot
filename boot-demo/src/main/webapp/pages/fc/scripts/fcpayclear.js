var Fcpayclear=function(){
	var grid = new Datatable();
	var clerstDict=Sunline.getDict("E_CLERST");
	$("input[name='clerst']",$("#fcdate")).select2({data:clerstDict,allowClear:true});
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
		if(Sunline.isNull($('#clerdt').val())||Sunline.isNull($('#clerst').select2("val"))){
			bootbox.alert("清算日期、处理状态不能为空！");
			return;
		}
		grid.setAjaxParam("clerdt",$('#clerdt').val());
		grid.setAjaxParam("clerst",$('#clerst').select2("val"));
		grid.setAjaxParam("clertp","1");
		grid.submitFilter();
	});
	var handleTable = function() {
		var url = Sunline.ajaxPath("fc/findclear");
		$("#clerst").select2('val','0');
		var editForm = function(nRowA){
			bootbox.confirm("确定要提交清算信息", function(result) {
				if(!result){
            		return;
            	}
				
			var data={"subjcd":$(nRowA[0]).text(),"cleram":$(nRowA[1]).text(),"clerdt":$(nRowA[2]).text()};//20160729 xjx 添加查询的清算金额cleram
			Sunline.ajaxRouter("fc/payclear", data, "POST", function(ret){
				if(ret.retCode==="0000"){
					bootbox.alert("提交清算信息成功");
					grid.setAjaxParam("clerdt",$('#clerdt').val());
					grid.setAjaxParam("clerst",$('#clerst').select2("val"));
					grid.setAjaxParam("tranam",$('#cleram').val());
					grid.setAjaxParam("clertp","1");
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
		grid.setAjaxParam("clerdt","29990101");
		grid.setAjaxParam("clerst","1");
		grid.setAjaxParam("clertp","1")
		grid.init({
	        src: $("#fcclear_ajax"),
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
		            	"data": "clerdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "rlcldt",
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
		            },
					{
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							if($('#clerst').select2("val")==="1"){
								return "已提交";
							}
							
							return "<a class='edit' href='javascript:;' data-src='"
									+ data.subjcd
									+ ","
									+ data.clerdt
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
		var sendData = ["subjcd","clerdt","repyno","clerst"];
        grid.bindTableEdit(sendData,editForm);
	}
	
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
	
}();