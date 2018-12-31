var checkdm = function(){
	var insubstDict=Sunline.getDict("bill");
	var rellagDict = Sunline.getDict("cleart");
	var transtDict=[{"dictId":"1","dictName":"申购中[1]"}
	,{"dictId":"2","dictName":"正常[2]"}
	,{"dictId":"3","dictName":"赎回中[3]"}
	,{"dictId":"4","dictName":"冲正[4]"}]
	var grid = new Datatable();
	var trandt = $('#dealdt').val();
	var formartM = function(value){
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	//读取数据字典
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
	
	var handleFileUpload = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });  
        };
        //查询
      	$('#submit').click(function(){
      		if(Sunline.isNull($('#dealdt').val())){
				bootbox.alert("请选择查询日期！"); 
				return;
			}
      		grid.setAjaxParam("dealdt",$('#dealdt').val());
			grid.submitFilter();
      		
        }); 
      	
        var url = Sunline.ajaxPath("fund/getDMBillData");
        grid.setAjaxParam("dealdt",$('#dealdt').val());
      	grid.init({
	        src: $("#dmbill_ajax"),
	        
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        	baybal = grid.getDataTable().ajax.json().baybal;
	        	if(baybal === null || baybal===undefined || baybal ===""){
	        		$("#baybal").text("0");
	        	}else{
	        		$("#baybal").text(baybal);
	        	}
	        	baybym = grid.getDataTable().ajax.json().baybym;
	        	if(baybym == null || baybym===undefined || baybym ===""){
	        		$("#baybym").text("0");
	        	}else{
	        		$("#baybym").text(baybym);
	        	}
	        	huibal = grid.getDataTable().ajax.json().huibal;
	        	if(huibal === null || huibal===undefined || huibal ===""){
	        		$("#huibal").text("0");
	        	}else{
	        		$("#huibal").text(huibal);
	        	}
	        	soubal = grid.getDataTable().ajax.json().soubal;
	        	if(soubal == null || soubal===undefined || soubal ===""){
	        		$("#soubal").text("0");
	        	}else{
	        		$("#soubal").text(soubal);
	        	}
	        	/*feibal = grid.getDataTable().ajax.json().feibal;
	        	if(feibal === null || feibal===undefined || feibal ===""){
	        		$("#feibal").text("0");
	        	}else{
	        		$("#feibal").text(feibal);
	        	}*/
	        	huidam = grid.getDataTable().ajax.json().huidam;
	        	if(huidam == null || huidam===undefined || huidam ===""){
	        		$("#huidam").text("0");
	        	}else{
	        		$("#huidam").text(huidam);
	        	}
	        	huidal = grid.getDataTable().ajax.json().huidal;
	        	if(huidal == null || huidal===undefined || huidal ===""){
	        		$("#huidal").text("0");
	        	}else{
	        		$("#huidal").text(huidal);
	        	}
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
	         					"data": "custac",  //电子账号
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "trabal",   //交易金额
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            
	         	            },{ 
	         	            	"data": "tranam",    //交易份额
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            },{ 
	         	            	"data": "keepdt",    //交易日期
	         	            	"sortable": false,
	         	            	"width": "200",
	         	            	"searchable": false,
	         	            
	         	            },{ 
	         	            	"data": "paytam",  //手续费
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "trdate", //交易申请时间
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            },{ 
	         	            	"data": "transt",  //交易状态
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	              	"render" : function(data,type,full){
         	            		
         	            		return _formartDict(transtDict,data);
         	            		
         	            	}
	         	            } ,{ 
	         	            	"data": "rellag",  //清算任务标志
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
         	            		
         	            		return _formartDict(rellagDict,data);
         	            		
         	            	}
	         	            } 
	                     ]
	        }
	        
	    });
      //	var sendData = ["fundno","trandt"];
	    };
	
	return {
		init : function(){
			handleFileUpload();
		}
	}
	
}()