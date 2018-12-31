var FundSetlle = function(){
	var insubstDict=Sunline.getDict("bill");
	var chkStatusDict = Sunline.getDict("state");
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
      	$('#submit').click(function(){
      		if(Sunline.isNull($('#dealdt').val())){
				bootbox.alert("请选择查询日期！"); 
				return;
			}
      		//alert($('#dealdt').val());
      		$("#myModal").modal('show');
      		var input = {};
    		var trandt = $('#dealdt').val();
    		input.file = 'partner_fund_buy_check_2690002058_';
    		input.dealdt = trandt;
    		Sunline.ajaxRouter(
            	"fund/billdetail", 
            	input,
            	"POST",
                function(redata){
            		$("#myModal").modal('hide');
            		//读取数据区表
            		if(redata.retCode == '0000'){
            			var info = redata.infos;
            			console.info(info);
            			var realam = 0;
            			for(var i = 0;i<info.length;i++){
            				if(info[i].trantp=='0'){
            					$('#apply').text(info[i].totlam.toFixed(2)+"元");
            					realam = realam+info[i].totlam;
            				} else if(info[i].trantp=='1'){
            					$('#redeem').text(info[i].totlam.toFixed(2)+"元");
            					realam = realam-info[i].totlam;
            				}
            			}
            			console.info(redata.profit == null);
            			var prftam = 0;
            			if(redata.profit != null){
            				prftam = redata.profit.prftam;
            			}
            			realam = realam - prftam;
            			$('#realam').text(realam.toFixed(2)+"元");
            			$('#prftam').text(prftam.toFixed(2)+"元");
            			grid.setAjaxParam("dealdt",$('#dealdt').val());
            			grid.submitFilter();
            		} else {
            			bootbox.alert(redata.retMsg);
            			//bootbox.alert("文件不存在");
            			$('#realam').text("");
            			$('#prftam').text("");
            			$('#apply').text("");
            			$('#redeem').text("");
            			grid.setAjaxParam("dealdt",$('#dealdt').val());
            			grid.submitFilter();
            		}
            	},
            	function(redata){
            		$("#myModal").modal('hide');
            		console.info(redata);
            		bootbox.alert("交易异常哦，请检查网络设置或重新登录"); 
            	},
            	"json",
            	false); 
        }); 
        var url = Sunline.ajaxPath("fund/getBillData");
        grid.setAjaxParam("dealdt","");
      	grid.init({
	        src: $("#bill_ajax"),
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
	         					"data": "fundno",
	         					"sortable": false,
	         					"searchable": false,
	         				},{     
	         	            	"data": "trantp",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		return _formartDict(insubstDict,data);
	         	            	}
	         	            },{ 
	         	            	"data": "custac",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            },{ 
	         	            	"data": "fundst",
	         	            	"sortable": false,
	         	            	"width": "200",
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		if(data=="0"||data=="1"){
	         	            			return _formartDict(chkStatusDict,data);
	         	            		}else{
	         	            			data="失败";
	         	            			return data;
	         	            		}
	         	            	}
	         	            },{ 
	         	            	"data": "tranam",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		return formartM(data+"");
	         	            	}
	         	            },{ 
	         	            	"data": "trantm",
	         	            	"sortable": false,
	         	            	"searchable": false,
	         	            	"render" : function(data,type,full){
	         	            		return data.substr(0,4)+'-'+data.substr(4,2)+'-'+data.substr(6,2)+' '+data.substr(8,2)+':'+data.substr(10,2)+':'+data.substr(12,2);
	         	            	}
	         	            },{ 
	         	            	"data": "trandt",
	         	            	"sortable": false,
	         	            	"searchable": false
	         	            	} 
	                     ]
	        }
	        
	    });
      	var sendData = ["fundno","trandt"];
	    };
	
	return {
		init : function(){
			handleFileUpload();
		}
	}
	
}()