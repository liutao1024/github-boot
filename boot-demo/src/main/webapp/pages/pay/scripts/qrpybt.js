var Qrpybt = function(){
	
	var grid = new Datatable();
	var statusDict=[{"dictId":"1","dictName":"处理中"}
	,{"dictId":"2","dictName":"处理错误"},
	{"dictId":"3","dictName":"处理成功"}]
	

	var formartDict = function(dict){
	$.each(dict, function(i, n){
        n.text=n['dictName']+"["+n['dictId']+"]";
        n.id=n['dictId'];            
        });
	
	roleDict = dict;
	return roleDict;
	}

	/*$('#samefg').on("change",function(e){
		console.info(e);
		$('#headnm').attr("value","");
	});*/
	var _formartDict = function(dict,value){
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
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	
	
	function FormatDate () {
		var date = new Date();
		var month = date.getMonth()+1+"";
		var day = date.getDate()+"";
		var monthStr = month.length==1?("0"+month):month;
		var dayStr = day.length==1?("0"+day):day;
		return date.getFullYear()+""+monthStr+""+dayStr;
	}
	$('#dealdt').val(FormatDate());

	/*$('#samefg').select2({
		data:YesNoDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});*/
	/*$('#trantp').select2({
		data:StustpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$('#acctyp').select2({
		data:AcctypDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});*/
	var handlerTable = function(){
		var editForm = function(nRowA){
		};
		var url = Sunline.ajaxPath("pay/qrpybt");
		grid.setAjaxParam("opendt",$('#dealdt').val());
		grid.setAjaxParam("cmpyno","");
		grid.setAjaxParam("idtfno","");
		grid.init({
	        src: $("#cif_ajax"),
	        
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
		            	"mDataProp": "cmpyno", 
		            	"sClass" : "center",
		            	"bSortable": false,
		            	"searchable": false
		            },{     
		            	"data": "bathno",
		            	"sortable": false,
		            	"searchable": false,
		            
		            },{ 
		            	"data": "opendt",
		            	"sortable": false,
		            	"sClass" : "center",
		            	"searchable": false
		            },{ 
		            	"data": "opensq",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "bathst",
		            	"sortable": false,
		            	"searchable": false,
	                    "render" : function(data,type,full){
     	            		
     	            		return _formartDict(statusDict,data);
     	            		
     	            	}
		            },{ 
		            	"data": "remark",
		            	"sortable": false,
		            	"searchable": false
		            }
		            
	            ]
	        }
	    });				
		
	//查询
	$('#submit').click(function(){
		if(!$('#cust-form').validate().form()){
			return;
		}		
		grid.setAjaxParam("opendt",$('#dealdt').val());
		grid.setAjaxParam("cmpyno",$('#cmpyno').val());
		grid.setAjaxParam("idtfno",$('#idtfno').val());
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#dealdt').val("");
		$('#cmpyno').val("");
		$('#idtfno').val("");
	});
	
	
	};
	
	if (jQuery().datepicker) {
		$('.date-picker').datepicker({
			rtl : Metronic.isRTL(),
			orientation : "left",
			autoclose : true,
			language : 'zh-CN',
		});
	};
	return {
		init : function(){
			handlerTable();
		}
	}
}()