var fcbill = function(){
	var idtftpDict=Sunline.getDict("E_IDTFTP");
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	var stateDict = [{id:'0',text:'待处理'},
	      		      {id:'1',text:'处理成功'},
	    		      {id:'2',text:'处理失败'}];
	var grid = new Datatable();
	$('#totalam').attr("disabled",true);
	$('#unhandleam').attr("disabled",true);
	$('#failam').attr("disabled",true);
	$('#successam').attr("disabled",true);
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
	
	// 文件上传处理
	var handleFileUpload = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
            // $('body').removeClass("modal-open"); // fix bug when inline
			// picker is used in modal
            
        };
        $("#checkS").select2({
        	data : [{id:'0',text:'待处理'},
      		      {id:'1',text:'处理成功'},
    		      {id:'2',text:'处理失败'}]
        	
		
        });
        $("#checkS").select2("val","0");
        
        var url = Sunline.ajaxPath("fc/fcrepaydetail");
        grid.setAjaxParam("trandt",$('#check-date').val());
		grid.setAjaxParam("state","0");
		grid.init({
	        src: $("#back_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {	            // execute some code after table records loaded
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
						"data": "state",
						"sortable": false,
						"searchable": false,
						"width": "2%",
						"render": function (data, type, full) {
							if(data == "0"){
								return '<input type="checkbox" class="checkboxes" value="1"/>';
							}else if(data == "2"){
								return '<input type="checkbox" class="checkboxes" value="1"/>';
							}
							return '';
						}
					},{     
		            	"data": "trans_seq_no",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "loan_no",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "cust_name",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "cert_type",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < idtftpDict.length; i++) {
								if (idtftpDict[i].id == data) {
									return idtftpDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "cert_code",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "cure_type",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < crcycdDict.length; i++) {
								if (crcycdDict[i].id == data) {
									return crcycdDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "cont_amt",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "cont_int",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "cont_fee",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "trandt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "state",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < stateDict.length; i++) {
								if (stateDict[i].id == data) {
									return stateDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "remark",
		            	"sortable": false,
		            	"searchable": false
		            }
	            ]
	        }
	    });
		//第一次加载
		var input = {};
 		input.trandt = $('#check-date').val();
 		input.state = $('#checkS').select2("val");
 		Sunline.ajaxRouter(
 				"fc/getptotData", 
	        	 input,
		        "POST",
	        	function(redata){
	        			$("input[name='totalam']").val(redata.totalam==null?"0":redata.totalam);
						$("input[name='unhandleam']").val(redata.unhandleam==null?"0":redata.unhandleam);
						$("input[name='successam']").val(redata.successam==null?"0":redata.successam);
						$("input[name='failam']").val(redata.failam==null?"0":redata.failam);
	        		
	        	});
		$(".table-group-actions").append("<button id='deal' class='btn btn-sm purple table-group-action-submit'><i class='fa fa-rotate-right'></i>&nbsp;还款批量处理</button></div>");
		var sendData = ["trans_seq_no"];
        // 查询按钮
		
        $('#select').click(function(){
        	grid.setAjaxParam("trandt",$('#check-date').val());
        	grid.setAjaxParam("state",$('#checkS').select2("val"));
     		grid.submitFilter();
     		var input = {};
     		input.trandt = $('#check-date').val();
     		input.state = $('#checkS').select2("val");
     		Sunline.ajaxRouter(
     				"fc/getptotData", 
		        	 input,
			        "POST",
		        	function(redata){
		        			$("input[name='totalam']").val(redata.totalam==null?"0":redata.totalam);
							$("input[name='unhandleam']").val(redata.unhandleam==null?"0":redata.unhandleam);
							$("input[name='successam']").val(redata.successam==null?"0":redata.successam);
							$("input[name='failam']").val(redata.failam==null?"0":redata.failam);
		        		
		        	});
        });
        // 还款处理
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
				var trans_seq_no = $(row[1]).text();
				rowData.trans_seq_no = trans_seq_no;
				data.push(rowData);
			}
			var input = {};
			input.data = data;
        	Sunline.ajaxRouter(
		        	"fc/dealrepay", 
		        	 input,
		        	"POST",
		            function(redata){
		        		if(redata.retCode == '0000'){
		        			var html = "<div>处理信息：</div>";
		        			for(i=0;i<redata.errlog.length;i++){
		        				html = html + '<div style = "color:red;">'+redata.errlog[i]+'</div>'
		        			}
		        			$('#log').html(html);
		        			grid.setAjaxParam("trandt",$('#check-date').val());
		        			grid.setAjaxParam("state",$('#checkS').select2("val"));
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