var fcproceeds=function(){
	var grid = new Datatable();
	var isflagDict=Sunline.getDict("E_YES___");
	var isnormDict=Sunline.getDict("E_YES___");
	
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
	
	$("input[name='isnorm']").select2({data:isnormDict,allowClear:true});
	
	    //获取当前日期
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
		if(Sunline.isNull($('#clerdt').val())){
			bootbox.alert("对账日期不能为空！");
			return;
		}
		grid.setAjaxParam("ndrcdt",$('#clerdt').val());
//		grid.setAjaxParam("clertp","2");
		grid.submitFilter();
	});
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("fc/findproceed");
		var editForm = function(nRowA){

			bootbox.confirm("确定要生成收款任务", function(result) {
				if(!result){
            		return;
            	}
			var data={"subjcd":$(nRowA[0]).text(),"schdno":$(nRowA[1]).text(),"ndrcdt":$(nRowA[2]).text(),"ndrcam":$(nRowA[3]).text(),"isnorm":$(nRowA[5]).text()};
			Sunline.ajaxRouter("fc/createproceed", data, "POST", function(ret){
				if(ret.retCode==="0000"){
					bootbox.alert("生成收款任务成功");
					grid.setAjaxParam("ndrcdt",$('#clerdt').val());
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
		grid.setAjaxParam("ndrcdt",$('#clerdt').val());
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
		            	"data": "schdno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ndrcdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ndrcam",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{
						"data" : "isnorm",
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							for (var i = 0; i < isnormDict.length; i++) {
								if (isnormDict[i].id == data) {
									return isnormDict[i].text;
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
							if(data.isflag=="1"){
								return "已有清算任务";
							}else {
							return "<a class='edit' href='javascript:;' data-src='"
									+ data.subjcd
									+ ","
									+ data.schdno
									+ ","
									+ data.ndrcdt
									+ ","
									+ data.ndrcam
									+ ","
									+ data.isnorm
									+ "'>生成代偿清算任务 </a>";
							}
						}
					}
	            ]
	        }
	    });
		var sendData = ["subjcd","schdno","ndrcdt","ndrcam","isnorm"];
        grid.bindTableEdit(sendData,editForm);
	}
	
	
	return {
		init : function(){
//			var myDate = new Date();
//			$('#clerdt').val(myDate.toLocaleDateString());
			handleForm();
			handleTable();
		}
	}
	
	
}();