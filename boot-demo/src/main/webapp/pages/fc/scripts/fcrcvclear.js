var Fcrcvclear=function(){
	var grid = new Datatable();
	var clerstDict=Sunline.getDict("E_CLERST");//清算状态
	var prodtpDict=Sunline.getDict("F_PRODTP");//产品类型
	
	var date = new Date();
	var month = date.getMonth()+1+"";
	var day = date.getDate()+"";
	var monthStr = month.length==1?("0"+month):month;
	var dayStr = day.length==1?("0"+day):day;
	$("input[id='clerdt']").val(date.getFullYear()+""+monthStr+""+dayStr);
	
	//格式化显示金额保留的位数
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	$("input[name='clerst']",$("#fcdate")).select2({data:clerstDict,allowClear:true});
	
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
		grid.setAjaxParam("clertp","2");
		grid.submitFilter();
	});
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("fc/findclear");
		$("#clerst").select2('val','0');
		
		var editForm = function(nRowA){
			bootbox.confirm("确定要清算", function(result) {
				if(!result){
            		return;
            	}
			var data={"subjcd":$(nRowA[0]).text(),"clerdt":$(nRowA[2]).text(),"repyno":$(nRowA[9]).text()};
			Sunline.ajaxRouter("fc/rcvclear", data, "POST", function(ret){
				if(ret.retCode==="0000"){
					bootbox.alert("清算成功");
					grid.setAjaxParam("clerdt",$('#clerdt').val());
					grid.setAjaxParam("clerst",$('#clerst').select2("val"));
					grid.setAjaxParam("clertp","2");
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
		grid.setAjaxParam("clerst","1");
		grid.setAjaxParam("clertp","2");
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
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
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
		            },{ 
		            	"data": "repyno",
		            	"sortable": false,
		            	"searchable": false
		            },
		            {
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							if($('#clerst').select2("val")==="1"){
								return "已清算";
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
					},
					{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='turnToCompensate ' href='javascript:;' data-src='"
		            				+ data.subjcd
									+ ","
									+ data.clerdt
									+ ","
									+ data.repyno
									+ ","
									+ "1"
									+ ","
									+ "2"
									+ ","
									+ "1"
									+ "'>转代偿</a>";
		            	}
		            }
	            ]
	        }
	    });
		var sendData = ["subjcd","clerdt","repyno","clerst"];
        grid.bindTableEdit(sendData,editForm);
        
        var turnToCompensateData = ["subjcd","clerdt","repyno","clerst","clertp","dcftp"];
        grid.addBindEvent(".turnToCompensate ", "click", turnToCompensateData,
				function(data) {
			bootbox.confirm("确定要转到代偿清算任务", function(result) {
				if(!result){
            		return;
            	}
				var sendTodata={"subjcd":data.subjcd+""
								,"clerdt":data.clerdt+""
								,"repyno":data.repyno+""
								,"clertp":data.clertp+""
								,"dctftp":data.dcftp+""};
				Sunline.ajaxRouter("fc/findfctrsf", sendTodata, "POST", function(ret){
					if(ret.retCode==="0000"){
						bootbox.alert("转到代偿清算任务成功");
						grid.setAjaxParam("clerdt",$('#clerdt').val());
						grid.setAjaxParam("clerst",$('#clerst').select2("val"));
						grid.setAjaxParam("clertp","2");
						grid.submitFilter();
					}else{
						bootbox.alert(ret.retMsg);
					}
				}, function(ret){
					bootbox.alert("网络异常");
				}, "json",
						false);
			});
		});
	}
	
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
	
}();