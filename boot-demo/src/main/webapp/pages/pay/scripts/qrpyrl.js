var Qrpyrl= function(){
	
	var grid = new Datatable();
	var statusDict=[{"dictId":"0","dictName":"失败"}
	,{"dictId":"1","dictName":"成功"}
]
	

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
	//$('#dealdt').val(FormatDate());

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
		var url = Sunline.ajaxPath("pay/qrpyrl");
		grid.setAjaxParam("custac","");
		grid.setAjaxParam("bgdate","");
		grid.setAjaxParam("endate","");
		grid.init({
	        src: $("#yrl_ajax"),
	        
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
		            	"mDataProp": "custac", 
		            	"sClass" : "center",
		            	"bSortable": false,
		            	"searchable": false
		            },{     
		            	"data": "custna",
		            	"sortable": false,
		            	"searchable": false,
		            
		            },{ 
		            	"data": "tranam",
		            	"sortable": false,
		            	"sClass" : "center",
		            	"searchable": false
		            },{ 
		            	"data": "idtftp",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "idtfno",
		            	"sortable": false,
		            	"searchable": false
	                    
		            },{ 
		            	"data": "prstat",
		            	"sortable": false,
		            	"searchable": false,
		            	 "render" : function(data,type,full){
	     	            		
	     	            		return _formartDict(statusDict,data);
	     	            		
	     	            	}
		            }
		            ,{ 
		            	"data": "prdate",
		            	"sortable": false,
		            	"searchable": false
		            }
		            ,{ 
		            	"data": "trandt",
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
		grid.setAjaxParam("custac",$('#custac').val());
		grid.setAjaxParam("bgdate",$('#bgdate').val());
		grid.setAjaxParam("endate",$('#endate').val());
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#custac').val("");
		$('#bgdate').val("");
		$('#endate').val("");
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