var Scsubj = function(){
	//
	var grid = new Datatable();

	var subjtpDict=Sunline.getDict("D_SUBJTP");
	var subjstDict=Sunline.getDict("D_SUBJST");
	var prodtpDict=Sunline.getDict("D_PRODTP");
	var schdtpDict=Sunline.getDict("D_SCHDTP");
	var procstDict=Sunline.getDict("D_PROCST");
	//
	var formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
            }
            if (dict[i].dictId == value) {
            	return dict[i].dictName;
            }
          }
	    return value;
	};
	//去除科学计数法以及 金额的显示格式  1,234,567.89
	var forMartDollar = function(value){
		var num = new Number(value);	 
		//更改这里n数也可确定要保留的小数位  
        num = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
        var l = num.split(".")[0].split("").reverse();  
        var r = num.split(".")[1];  
        var t = "";  
        for(i = 0; i < l.length; i++ ){  
           t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
        }  
        //保留2位小数  如果要改动 把substring 最后一位数改动就可  
        return t.split("").reverse().join("") + "." + r.substring(0,2);
	};
	$("#subjst").select2({//
		data : subjstDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	//查询主页面
	var handlerTable = function(){
		var editForm = function(nRowA){
		};
		var url = Sunline.ajaxPath("fm/scsubj");
		
		grid.setAjaxParam("plafno",$('#plafno').val());
		grid.setAjaxParam("subjcd",$('#subjcd').val());
		grid.setAjaxParam("subjnm",$('#subjnm').val());
		grid.setAjaxParam("subjst",$('#subjst').select2("val"));
		grid.init({
	        src: $("#subj_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {	      
	        	console.info("It is error!");
	        },
	        dataTable: { 
	        	
	            "ajax": {
	                "url": url, 
	              
	            },
	            "aoColumns" : [
	                           { 
					            	"data": "plafno",
					            	"sortable": false,
					            	"searchable": false
					            },{     
					            	"data": "subjcd",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "subjnm",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "subjtp",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartDict(subjtpDict,data);
					            	}
					            },{ //
					            	"data": "subjst",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartDict(subjstDict,data);
					            	}
					            },{ // 
					            	"data": "subjam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "prodtp",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartDict(prodtpDict,data);
					            	}
					            },{ //
					            	"data": "repydt",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "opendt",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "stardt",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "schdtp",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartDict(schdtpDict,data);
					            	}
					            },{ //
					            	"data": "lessno",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "onefam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "moream",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "lessam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "touzam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "auldam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "debtam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "credam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "ttalam",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "incmlv",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data){
					            		return forMartDollar(data);
					            	}
					            },{ //
					            	"data": "standy",
					            	"sortable": false,
					            	"searchable": false
					            },{ //
					            	"data": "procst",
					            	"sortable": false,
					            	"searchable": false,
					            	"render" : function(data,type,full){
					            		return formartDict(procstDict,data);
					            	}
					            }
					           ]
	        }
	       
	    });	
		var sendData = ["standy"];
		
		//主页面查询
		$('#mainSubmit').click(function(){
			grid.setAjaxParam("plafno",$('#plafno').val());
			grid.setAjaxParam("subjcd",$('#subjcd').val());
			grid.setAjaxParam("subjnm",$('#subjnm').val());
			grid.setAjaxParam("subjst",$('#subjst').select2("val"))
			grid.submitFilter();
		});
		//主页面取消
		$('#mainCancle').click(function(){
			$('#plafno').val("");
			$('#subjcd').val("");
			$('#subjnm').val("");
			$('#subjst').select2("val","");
			grid.setAjaxParam("plafno",$('#plafno').val());
			grid.setAjaxParam("subjcd",$('#subjcd').val());
			grid.setAjaxParam("subjnm",$('#subjnm').val());
			grid.setAjaxParam("subjst",$('#subjst').select2("val"))
			grid.submitFilter();
		});
		
	};
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()