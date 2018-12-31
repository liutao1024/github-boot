var Insubill = function(){
	var insubstDict=Sunline.getDict("insubst");
	var chkStatusDict = Sunline.getDict("E_INSUST");
	var grid = new Datatable();
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
	
	//文件上传处理
	var handleFileUpload = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
            
        };
        $("#checkS").select2({width:"100%",
        	data : insubstDict,
        	formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
        });
        $("#checkS").select2("val","N");
        
        var url = Sunline.ajaxPath("insu/getData");
        grid.setAjaxParam("dealdt","");
		grid.setAjaxParam("checkStatus","");
		grid.init({
	        src: $("#back_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
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
						"data": "checkStatus",
						"sortable": false,
						"searchable": false,
						"width": "2%",
						"render": function (data, type, full) {
							if(data != "0" && data != "1"){
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
	            ]
	        }
	    });
		$(".table-group-actions").append("<button id='deal' class='btn btn-sm purple table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;退保批量处理</button></div>");
		var sendData = ["polino"];
        //查询按钮
        $('#select').click(function(){
        	grid.setAjaxParam("dealdt",$('#check-date').val());
     		grid.setAjaxParam("checkStatus",$('#checkS').select2("val"));
     		grid.submitFilter();
        });
        //退保处理
        $('#deal').click(function(){
        	var rows = grid.getSelectedRows();
			if(rows.length == 0){
				bootbox.alert("请选择要处理的数据");
				return;
			}
			
			var data = [];
			for (i=0;i<rows.length;i++){
				var row = rows[i].children();
				var rowData = {};
				var polino = $(row[4]).text();
				rowData.polino = polino;
				data.push(rowData);
			}
			var input = {};
			input.data = data;
        	Sunline.ajaxRouter(
		        	"insu/deal", 
		        	 input,
		        	"POST",
		            function(redata){
		        		if(redata.retCode == '0000'){
		        			var html = "<div>失败信息：</div>";
		        			for(i=0;i<redata.errlog.length;i++){
		        				html = html + '<div style = "color:red;">'+redata.errlog[i]+'</div>'
		        			}
		        			$('#log').html(html);
		        			grid.setAjaxParam("dealdt",$('#check-date').val());
		             		grid.submitFilter();
		        		} else {
		        			bootbox.alert(redata.retMsg);
		        		}
		        	},
		        	function(redata){
		        		console.info(redata);
		        		bootbox.alert("交易异常哦，请检查网络设置货重新登录"); 
		        	},
		        	"json",
		        	false); 
		});
	};
	
	var submitF = function(){
		$("#sub").attr("disabled",true);
	};
	
	var submitO = function(){
		$("#sub").attr("disabled",false);
	};
	return {
		init : function(){
			handleFileUpload();
		},
		submit : function(){
			submitF();
		},
		change : function(){
			submitO();
		}
	}
}()