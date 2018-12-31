var Xljyqr=function(){
	var grid = new Datatable();
	var isF = true;
	var lb_grid;

	var partnerDict=Sunline.getDict("partner");
	$("#partner_id").select2({
		data : partnerDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
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
	//截取前八位作为日期
	var formartDate = function(value){
		var str = value
		var dateStr = str.substring(0,4) + "-" + str.substring(4,6) + "-" + str.substring(6,8);
		return  dateStr;
	};
	//截取后六位作为时间
	var formartTime = function(value){
		var str = value
		var dateStr = str.substring(8,10) + ":" + str.substring(10,12) + ":" + str.substring(12,14);
		return  dateStr;
	};
	//格式化加减
	var formartZJ = function(value){
		if (value=="-") {
			return "减少";
		}else if(value=="+"){
			return "增加";
		} else {
			return value;
		}
	};
	
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
	
	
	var handleTable = function( ) {
		var url = Sunline.ajaxPath("cust/qrjyxl");
		
		grid.setAjaxParam("identity_id",$('#identity_id').val());
		grid.setAjaxParam("start_time",$('#start_time').val());
		grid.setAjaxParam("end_time",$('#end_time').val());
		grid.setAjaxParam("partner_id",$('#partner_id').select2("val"));
		grid.setAjaxParam("identity_type","UID");
		grid.setAjaxParam("account_type","BANK");
		grid.setAjaxParam("target","1");
		grid.init({
	        src: $("#cif_ajax"),
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
	            "columns" : [
	                { 
		            	"data": "total_item",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "total_income",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "total_payout",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "total_bonus",
		            	"sortable": false,
		            	"searchable": false
		            },{
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							dataSet = [];
							for (var i = 0; i < data.detail_list.length; i++) {
								tabData=[data.detail_list[i].index0,formartDate(data.detail_list[i].index1),formartTime(data.detail_list[i].index1),formartZJ(data.detail_list[i].index2),data.detail_list[i].index3,data.detail_list[i].index4,data.detail_list[i].index5];
								dataSet.push(tabData);
							}
							return "<a class='jiaoyimx' href='javascript:;' data-src='"
									+ dataSet
									+ "'>明细列表 </a>";
						}
					}
	            ]
	        }
	    });
		var tabData = [];
		var dataSet = [];
		var sendData = ["total_item"];
        grid.addBindEvent(".jiaoyimx", "click", sendData,
				function(data) {
        	showJiaoyiMx(dataSet);
			$("#jiaoyiModal").modal("show");
		});
        
	}
	
	var showJiaoyiMx = function(data) {
		var tabData = data;
		if(isF){
			lb_grid = $('#lastBill').DataTable({
				data: tabData,
				paging: false,
				searching: false,
				ordering: false,
				info: false,
				columns: [
				          { title: "摘要" },
				          { title: "入账日期" },
				          { title: "入账时间" },
				          { title: "加减方向" },
				          { title: "发生额" },
				          { title: "交易后余额" },
				          { title: "业务类型" }
				          ]
			});
			isF = false;
		}else{
			lb_grid.clear().draw();
			for(var i=0;i<tabData.length;i++){
				lb_grid.row.add(tabData[i]).draw(false);
			}
		}
	}
	
	$("#submit").click(function(){
		grid.setAjaxParam("start_time",$('#start_time').val()+"000000");
		grid.setAjaxParam("end_time",$('#end_time').val()+"235959");
		grid.setAjaxParam("identity_id",$('#identity_id').val());
		grid.setAjaxParam("partner_id",$('#partner_id').select2("val"));
		grid.setAjaxParam("identity_type","UID");
		grid.setAjaxParam("account_type","BANK");
		grid.setAjaxParam("target","1");
		
		grid.submitFilter();
	});
	
	//取消
	$('#cancle').click(function(){
		$('#start_time').val("");
		$('#end_time').val("");
		$('#identity_id').val("");
		$('#partner_id').select2("val","");
	});
	
	return {
		init : function(){
			handleForm();
			handleTable();
		}
	}
	
}();