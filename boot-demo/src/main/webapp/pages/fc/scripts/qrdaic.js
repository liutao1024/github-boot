var qrdaic=function(){
	var grid = new Datatable();
	
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
	
	var clerstDict=Sunline.getDict("E_CLERST");//清算状态
	var repystDict=Sunline.getDict("E_REPYST");//还款状态
	var rpflagDict=Sunline.getDict("E_YES___");//是否已推送还款信息
	var clflagDict=Sunline.getDict("E_YES___");//是否已追回清算
	
	$("input[name='clerst']",$("#qradicdate")).select2({data:clerstDict,allowClear:true});
	$("input[name='repyst']").select2({data:repystDict,allowClear:true});
	$("input[name='rpflag']").select2({data:rpflagDict,allowClear:true});
	$("input[name='clflag']").select2({data:clflagDict,allowClear:true});
	
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
		grid.setAjaxParam("clertp","2");
		grid.submitFilter();
		
	});
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("fc/findqrdaic");
		$("#clerst").select2('val','0');
		
		var editForm = function(nRowA){
			bootbox.confirm("确定要清算", function(result) {
				if(!result){
            		return;
            	}
			var data={"subjcd":$(nRowA[0]).text(),"clerdt":$(nRowA[2]).text(),"repyno":$(nRowA[9]).text()};
			Sunline.ajaxRouter("fc/findfcdaic", data, "POST", function(ret){
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
		grid.setAjaxParam("clerst","0");
		grid.setAjaxParam("clertp","2");
		grid.init({
	        src: $("#qradic_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	        	console.info("It is error!");
	        },
	        dataTable: {  
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
		            },{
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
		            		if($('#clerst').select2("val")==="1"){
								return " ";
							}
		            		return "<a class='turnToNormal' href='javascript:;' data-src='"
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
									+ "2"
									+ "'>转正常</a>";
		            	}
		            }
	            ]
	        }
	    });
		var sendData = ["subjcd","clerdt","repyno","clerst"];
        grid.bindTableEdit(sendData,editForm);
        
        var turnToNormalData = ["subjcd","clerdt","repyno","clerst","clertp","dctftp"];
        grid.addBindEvent(".turnToNormal", "click", turnToNormalData,
				function(data) {
			bootbox.confirm("确定要转到正常清算任务", function(result) {
				if(!result){
            		return;
            	}
				var sendTodata={"subjcd":data.subjcd+""
								,"clerdt":data.clerdt+""
								,"repyno":data.repyno+""
								,"clertp":data.clertp+""
								,"dctftp":data.dctftp+""};
				Sunline.ajaxRouter("fc/findfctrsf", sendTodata, "POST", function(ret){
					if(ret.retCode==="0000"){
						bootbox.alert("转到正常清算任务成功");
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