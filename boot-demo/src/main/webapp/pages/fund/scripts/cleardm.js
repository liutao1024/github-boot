var clearfund =function(){
	var trantpDict=Sunline.getDict("cleart");
	var insubstDict=Sunline.getDict("clerst");
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
	var crcycdDict = Sunline.getDict("E_CRCYCD");
	$("input[name='crcycd']").select2({data:crcycdDict,allowClear:true});
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
		data:insubstDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	$('#checkS').select2("val","0");
	$('#trantp').select2("val","0");
	
	/*$('#trantp').on("change",function(e){
		console.info(e);
		
		$('#sucler').attr("disabled",true);
	});*/
	
	
	
	var handlerInsuclear = function(){
		
		var Dmclegrid = new Datatable();
		
		
		var parsurl = Sunline.ajaxPath("fund/getclearDm");
		Dmclegrid.setAjaxParam("rellag",$('#trantp').select2("val"));
		Dmclegrid.setAjaxParam("keflag",$('#checkS').select2("val"));
		Dmclegrid.init({
			src : $("#cleardm_ajax"),
			
			onSuccess : function(Dmclegrid) {
			},
			onError : function(Dmclegrid) {
			},
			dataTable : {
				"ajax" : {
					"url" : parsurl,
				},
				"columns" : [{							
						
				          	"data": "null",
			            	"sortable": false,
			            	"searchable": false,
			            	"width": "2%",
			            	"render": function (data, type, full) {
			            		return '<input type="checkbox" name="chk" class="checkboxes" value="1"/>';
			            	}
		            	},{
							"data" : "crcycd",
							"sortable" : false,
							"searchable" : false,
							"render" :  function(data, type, full) {
								for (var i = 0; i < crcycdDict.length; i++) {
									if (crcycdDict[i].id == data) {
										return crcycdDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "tranam",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data,type,full){
			            		return formartM(data+"");
			            	}
							
						},
						
						{
							"data" : "rellag",
							"sortable" : false,
							"searchable" : false,
							"render" :  function(data, type, full) {
								for (var i = 0; i < trantpDict.length; i++) {
									if (trantpDict[i].id == data) {
										return trantpDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "keflag",
							"sortable" : false,
							"searchable" : false,
							"render" :  function(data, type, full) {
								for (var i = 0; i < insubstDict.length; i++) {
									if (insubstDict[i].id == data) {
										return insubstDict[i].text;
									}
								}
								return data;
							}
						},
						{
							"data" : "keepdt",
							"sortable" : false,
							"searchable" : false,
						},
					 ]
			}
		});
		
		
	
		$('#select').click(function(){
		    if($('#checkS').val()==="1"){
			$('#sucler').attr("disabled",true);
			}
		    else{
		    $('#sucler').attr("disabled",false);}
			Dmclegrid.setAjaxParam("rellag",$('#trantp').select2("val"));
			Dmclegrid.setAjaxParam("keflag",$('#checkS').select2("val"));
			Dmclegrid.setAjaxParam("keepdt",$('#dealdt').val());
			Dmclegrid.submitFilter();

			
		/*	var input = {};
			input.keepdt = $('#dealdt').val();
			input.rellag = $('#trantp').val();
			input.keflag = $('#checkS').val();
			Sunline.ajaxRouter(
		        	"fund/getclearDm",
		        input,
		        	"POST",
		            function(redata){
		        		$('#select').attr("disabled",false);
		        		if(redata.retCode=="0000"){
		        			$('#tranam').val(redata.tranam);		        			
		        			if($('#checkS').val()=="0"){
		        				$('#sucler').attr("disabled",false);
		        			}else{
		        				$('#sucler').attr("disabled",true);
		        			}
		        			Dmclegrid.submitFilter();
	        			}else{
	        				bootbox.alert(redata.retMsg);
	        			}
		        	},
		        	function(redata){
		        		$('#select').attr("disabled",false);
		        		bootbox.alert("网络异常，请重试！"); 
		        	},
		        	"json",
		        	false); */
		});
		
		
		
		
		
		$('#sucler').click(function(){
			
			
			if(Sunline.isNull($('#checkS').val())){
				bootbox.alert("清算状态不能为空！"); 
				return;
			}

			var _status = _formartDict2(insubstDict,$('#checkS').val());
			if(_status!="0"){
				bootbox.alert("清算状态不正确！"); 
				return;
			}
			console.info("按钮点击事件");
			var rows = Dmclegrid.getSelectedRows();
			if(rows.length == 0){
				bootbox.alert("请选择要处理的数据");
				return;
			}		
		    var keepdt=$('#dealdt').val();
		    var data = [];
			for(var i=0;i<rows.length;i++)
			{
			var row = rows[i].children();
			var crcycd = $(row[1]).text().substring($(row[1]).text().indexOf("[")+1,$(row[1]).text().indexOf("]"));
			var rellag = $(row[3]).text().substring($(row[3]).text().indexOf("[")+1,$(row[3]).text().indexOf("]"));
			var keflag = $(row[4]).text().substring($(row[4]).text().indexOf("[")+1,$(row[4]).text().indexOf("]"));
			var tranam = $(row[2]).text();
			var keepdt = $(row[5]).text();
			 			
			var rowdata={};
			rowdata.crcycd=crcycd;
			rowdata.tranam=tranam;
			rowdata.rellag=rellag;
			rowdata.keepdt=keepdt;
			rowdata.keflag=keflag;
			
			data.push(rowdata);
			}
		    console.info(data);
		   var input={};
		   input.data=data;
		  //input.taskdt=taskdt;
		   $('#sucler').attr("disabled",true);
		bootbox.confirm("确定要清算？", function(result) {
            	if(!result){
            		return;
            	}
			//$('#sucler').attr("disabled",true);
//			var input = {};
//			input.tranam =  $('#tranam').val();
//			input.keepdt =  $('#dealdt').val();
//			input.rellag =  $('#trantp').val();
//			input.keflag =  $('#checkS').val();
//			input.crcycd =  "01";
			Sunline.ajaxRouter(
		         	"fund/clearDm", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			//$('#checkS').val("已清算");
		         			bootbox.alert("清算成功");
		         			$('#sucler').attr("disabled",false);
		         			Dmclegrid.submitFilter();		         			
		         			;
		         		}else{
		         			$('#sucler').attr("disabled",false);
		         			bootbox.alert(redata.retMsg.substring(18,redata.retMsg.length-1));
		         		}
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