var XmReback = function(){
	
	var cpstfgDict = [{id:'2',text:'全部'},{id:'1',text:'是'},{id:'0',text:'否'}];
	var grid = new Datatable();
	var date = new Date();
	var month = date.getMonth()+1+"";
	var day = date.getDate()+"";
	var monthStr = month.length==1?("0"+month):month;
	var dayStr = day.length==1?("0"+day):day;
	$("input[name='checkdate']").val(date.getFullYear()+""+monthStr+""+dayStr);
	var _formartDict = function(dict,value){
		for (var i = 0; i < dict.length; i++) {
            if (dict[i].dictName == value) {
              return dict[i].dictId;
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
	
	var handleForm = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
        };
        $("#checkS").select2({
        	data : [{id:'2',text:'全部'},{id:'1',text:'是'},{id:'0',text:'否'}]
        });
        $("#checkS").select2("val","2");
        
        var url = Sunline.ajaxPath("fc/xmrebackdetail");
        grid.setAjaxParam("repydt",$('#check-date').val());
    	grid.setAjaxParam("cpstfg",$('#checkS').select2("val"));
		grid.init({
	        src: $("#back_ajax"),
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	var clrflg = grid.getDataTable().context['0'].json["clrflg"];
	        	var clrflgStr = "未清算";
	        	if(clrflg == '0'){
	        		clrflgStr = "未清算";
	        		$('#deal').attr("disabled",false);
	        	}else if(clrflg == '1'){
	        		clrflgStr = "已清算";
	        		$('#deal').attr("disabled",true);
	        	}else{
	        		clrflgStr = "null";
	        		$('#deal').attr("disabled",true);
	        	}
	        	$("input[name='clrflg']").val(clrflgStr);
	        	$("input[name='totams']").val(grid.getDataTable().context['0'].json["totams"]);
	        	$("input[name='cptams']").val(grid.getDataTable().context['0'].json["cptams"]);
	        	$("input[name='rptams']").val(grid.getDataTable().context['0'].json["rptams"]);
	        	if(grid.getDataTable().context['0'].json["retMsg"]!=null && grid.getDataTable().context['0'].json["retMsg"]!=''){
	        		bootbox.alert(grid.getDataTable().context['0'].json["retMsg"]);
	        	}
	        },
	        onError: function (grid) {
	        },
	        dataTable: { // here you can define a typical datatable settings
							// from http://datatables.net/usage/options
	            "ajax": {
	                "url": url, // ajax source
	            },
				"columns" : [
 				             {
							"data" : "lncfno",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "acctna",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "idtfno",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "termno",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "subtno",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "repydt",
							"sortable" : false,
							"searchable" : false
						}, {
							"data" : "retucp",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "retuin",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "ysxxfe",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "totlam",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "rptlam",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "cpstam",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "rexxpe",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "refeam",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "rezhlx",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "rezhbj",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data, type, full) {
								return formartM(data+"");
							}
						}, {
							"data" : "cpstfg",
							"sortable" : false,
							"searchable" : false,
							"render" : function(data,type,full){
         	            		var _tp = "";
         	            		if(data == "0"){
         	            			_tp = "否";
         	            		}else if(data == "1"){
         	            			_tp = "是";
         	            		}else{
         	            			_tp = data;
         	            		}
         	            		return _tp;
         	            	}
						}, {
							"data" : "clerfg",
							"sortable" : false,
							"searchable" : false,
         	            	"render" : function(data,type,full){
         	            		var _tp = "";
         	            		if(data == "0"){
         	            			_tp = "否";
         	            		}else if(data == "1"){
         	            			_tp = "是";
         	            		}else{
         	            			_tp = data;
         	            		}
         	            		return _tp;
         	            	}
						}
	            ]
	        }
	    });
		
        // 查询按钮
        $('#select').click(function(){
        	grid.setAjaxParam("repydt",$('#check-date').val());
        	grid.setAjaxParam("cpstfg",$('#checkS').select2("val"));
     		grid.submitFilter();
        });
        
        // 清算
        $('#deal').click(function(){
			var input = {};
			input.repydt = $('#check-date').val();
        	Sunline.ajaxRouter(
		        	"fc/xmrebackdeal", 
		        	 input,
		        	"POST",
		            function(redata){
		        		if(redata.retCode == '0000'){
		        			bootbox.alert("清算成功！"); 
		        			grid.setAjaxParam("repydt",$('#check-date').val());
		                	grid.setAjaxParam("cpstfg",$('#checkS').select2("val"));
		             		grid.submitFilter();
		        		} else {
		        			bootbox.alert(redata.retMsg);
		        		}
		        	},
		        	function(redata){
		        		console.info(redata);
		        		bootbox.alert("交易异常，请检查网络设置货重新登录"); 
		        	},
		        	"json",
		        	false); 
		});
	};
	
	return {
		init : function(){
			handleForm();
		}
	}
}()