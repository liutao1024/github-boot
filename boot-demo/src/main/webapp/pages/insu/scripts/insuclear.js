var Insuclear =function(){
	var insubstDict=Sunline.getDict("insubst");
	var chkStatusDict = Sunline.getDict("E_INSUST");
	var grid = new Datatable();
	var trantpDict=Sunline.getDict("clertp");
	var clerstDict=Sunline.getDict("clerst");
	var msg;
	var _formartDict=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].id == value) {
                return dict[i].dictName;
              }
            }
	    return value;
	};
	
	var _formartDict2=function (dict, value) {
	    for (var i = 0; i < dict.length; i++) {
              if (dict[i].dictName == value) {
                return dict[i].id;
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
	
	var handlerInsuclear = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		$('#trantp').select2({
			data:trantpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$('#checkS').select2({
			data:clerstDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		
		
		    var url = Sunline.ajaxPath("insu/getTranams");
	        grid.setAjaxParam("dealdt","");
			grid.setAjaxParam("checks","");
			grid.setAjaxParam("trantp","");
			grid.init({
		        src: $("#clear_ajax"),
		       // deleteData: sendData,
		        onSuccess: function (grid) {
		        	/*if(!Sunline.isNull(grid.getDataTable().ajax.json().retMsg)){
		        	msg = grid.getDataTable().ajax.json().retMsg;
		        	alert(msg);
		        	return;*/
		        	/*}*/
		            // execute some code after table records loaded
		        	$('.table-container .alert-danger').css("display","none");
		        },
		        onError: function (grid) {
		            // execute some code on network or other general error
		        	//console.info("It is error!");
		        },
		        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
		            "ajax": {
		                "url": url, // ajax source
		            },
		            "columns" : [
						{
							"data": "checks",
							"sortable": false,
							"searchable": false,
							"width": "2%",
							"render": function (data, type, full) {
								if(data == "1" ){
									return "";
								}
								return '<input type="checkbox" class="checkboxes" value="1"/>';
							}
						},{     
			            	"data": "dealdt",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "procna",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "transq",
			            	"sortable": false,
			            	"width": "200",
			            	"searchable": false
			            },{ 
			            	"data": "polino",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "custna",
			            	"sortable": false,
			            	"searchable": false
			            },{ 
			            	"data": "tranam",
			            	"sortable": false,
			            	"searchable": false,
			            	"render" : function(data,type,full){
			            		return formartM(data+"");
			            	}
			            },{ 
			            	"data": "chkStatus",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            	    for (var i = 0; i < chkStatusDict.length; i++) {
			                          if (chkStatusDict[i].id == data) {
			                            return chkStatusDict[i].dictName;
			                          }
			                        }
			            	    return data;
			            	}
			            },{ 
			            	"data": "passtm",
			            	"sortable": false,
			            	"searchable": false
			            },{
			            	"data": "checkStatus",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            	    for (var i = 0; i < insubstDict.length; i++) {
			                          if (insubstDict[i].id == data) {
			                            return insubstDict[i].dictName;
			                          }
			                        }
			            	    return data;
			            	}
			            },{
			            	"data": "msg",
			            	"sortable": false,
			            	"searchable": false
			            }
			            ,{
			            	"data": "checks",
			            	"sortable": false,
			            	"searchable": false,
			            	"render": function (data, type, full) {
			            	    for (var i = 0; i < clerstDict.length; i++) {
			                          if (clerstDict[i].id == data) {
			                            return clerstDict[i].dictName;
			                          }
			                        }
			            	    return data;
			            	}
			            }
		            ]
		        }
		    });	
		
		
		
		
		$('#trantp').select2("val","1");
		$('#checkS').select2("val","0");
		/*$('#trantp').on("change",function(e){
			console.info(e);
			$('#sucler').attr("disabled",true);
		});*/
		$('#select').click(function(){
			$('#select').attr("disabled",true);
			if(Sunline.isNull($('#dealdt').val())){
				$('#select').attr("disabled",false);
				bootbox.alert("请选择日期！"); 
				return;
			}
			if($('#trantp').select2("val")=="0")
				{
				bootbox.alert("无申购待清算数据！"); 
				$('#select').attr("disabled",false);
				grid.setAjaxParam("dealdt",$('#dealdt').val());
	     		grid.setAjaxParam("checks",$('#checkS').select2("val"));
	     		grid.setAjaxParam("trantp",$('#trantp').select2("val"));
	     		grid.submitFilter();
				return;
				}
			grid.setAjaxParam("dealdt",$('#dealdt').val());
     		grid.setAjaxParam("checks",$('#checkS').select2("val"));
     		grid.setAjaxParam("trantp",$('#trantp').select2("val"));
     		grid.submitFilter();
     		$('#select').attr("disabled",false);
	/*		$('#tranam').val("");
			$('#checkS').val("");
			var input = {};
			input.trandt = $('#dealdt').val();
			input.trantp = $('#trantp').val();

			Sunline.ajaxRouter(
		        	"insu/getTranam",
		        input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		        		if(redata.insuSetlle.status=="0"){
	        				$('#sucler').attr("disabled",false);
	        			}else{
	        				$('#sucler').attr("disabled",true);
	        			}
	        			$('#tranam').val(redata.insuSetlle.totlam);
	        			$('#checkS').val(_formartDict(insubstDict,redata.insuSetlle.status));
		        	},
		        	function(redata){
		        	
		        		$('#select').attr("disabled",false);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false);*/ 
		});
		$('#sucler').click(function(){
			var rows = grid.getSelectedRows();
			if(rows.length == 0){
				bootbox.alert("请选择要处理的数据");
				return;
			}		
		    var keepdt=$('#dealdt').val();
		    var data = [];
			for(var i=0;i<rows.length;i++)
			{
			var row = rows[i].children();
			
			var tranam = $(row[6]).text();
			var polino = $(row[4]).text();
  			var trantp = $('#trantp').select2("val");
			 			
			var rowdata={};			
			rowdata.tranam=tranam;	
			rowdata.polino=polino;
			rowdata.trantp=trantp;	
			data.push(rowdata);
			}
		    console.info(data);
		    var input={};
		    input.data=data;
		    input.crcycd = "01";
			
			bootbox.confirm("确定清算？",function(result){
				if(!result){
					return
				}			
				Sunline.ajaxRouter(
			         	"insu/clearTrans", 
			         	 input,
			         	"POST",
			             function(redata){
			         		//success func
			         		if(redata.retCode !="0000"){
			         			$('#sucler').attr("disabled",false);
			         		}
			         		//$('#checkS').val("已清算");
			         		bootbox.alert(redata.retMsg);
			         		grid.submitFilter();
			         	},
			         	function(redata){
			         		$('#sucler').attr("disabled",false);
			         		bootbox.alert("网络异常");
			         	},
			         	"json",
			         	false); 
			});
						
		});
		
	};
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()