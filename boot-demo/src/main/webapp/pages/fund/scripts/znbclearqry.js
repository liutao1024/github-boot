var znbclearqry = function() {
	var dataInit = function(){
		var trandt = getTrandt();
		$("#stdate").val(trandt);
		$("#eddate").val(trandt);
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN',
            });
		}
		$("#submit").trigger('click');
	}
	$("#submit").bind("click",function(){
		if(!timeValid1()){
			return;
		}
		var data = {};
		data.stdate = $("#stdate").val();
		data.eddate = $("#eddate").val();
		console.info(data);
		Sunline.ajaxRouter("fund/fdqrss", data, 'post',
				function(ret) {
			$("#buynam").val("");
			$("#baknam").val("");
			$("#offset").val("");
			if(ret.retCode=="0000"){
				$("#buynam").val(ret.buynam);
				$("#baknam").val(ret.baknam);
				$("#offset").val(ret.offset);
			}else{
				bootbox.alert("查询失败："+ret.retMsg);
			}
		},
     	function(redata){
     		bootbox.alert("网络异常");
     	},
     	"json",
     	false)
	});
	var timeValid1 = function(){//日期校验
        var start = $("#stdate").val();
        var end = $("#eddate").val();
        var syear = parseInt(start.substring(0,4));
        var smon = parseInt(start.substring(4,6))-1;
        var sday = parseInt(start.substring(6,8));
        var edyear = parseInt(end.substring(0,4));
        var edmon = parseInt(end.substring(4,6))-1;
        var edday = parseInt(end.substring(6,8));
        var stDate = new Date(syear,smon,sday).getTime();
        var edDate = new Date(edyear,edmon,edday).getTime();
        var today = new Date().getTime();
        if(Sunline.isNull(start)||Sunline.isNull(end)){
        	bootbox.alert("开始日期和结束日期必输");
            return false;
        }
        if(parseInt(start)>parseInt(end)){//日期判断
            bootbox.alert("起始日期不能大于结束日期");
            return false;
        }
        return true;
    }
	var getTrandt = function(){
		//16:00之前返回前一天,之后返回今天
		var today = new Date();
		var now = today.getTime();
		var t1 = now%(1000*60*60*24);
		var t2 = 8*60*60*1000;//中国的时间戳计算是从1970-1-1 8:00:00开始算起的，下午4:00就只过了8个小时
		if(t1<t2){
			return GetYesterday();
		}else{
			return GetToday();
		}
		function GetYesterday()   
	    {   
			var today = new Date();
	        var yesterday_milliseconds=today.getTime()-1000*60*60*24;    
	        var yesterday=new Date();      
	        yesterday.setTime(yesterday_milliseconds);      
	        var strYear=yesterday.getFullYear(); 
	        var strDay=yesterday.getDate();   
	        var strMonth=yesterday.getMonth()+1; 
	        if(strMonth<10)   
	        {   
	            strMonth="0"+strMonth;   
	        }   
	        if(strDay<10){
	        	strDay="0"+strDay;
	        }
	        return strYear+""+strMonth+""+strDay;   
	    }
		function GetToday()   
	    {   
			var today = new Date();
	        var Year=today.getFullYear(); 
	        var Day=today.getDate();   
	        var Month=today.getMonth()+1; 
	        if(Month<10)   
	        {   
	        	Month="0"+Month;   
	        }
	        if(Day<10){
	        	Day="0"+Day;
	        }
	        return Year+""+Month+""+Day;   
	    }
	}
	return {
		init : function() {
			dataInit();
		}
	}

}();