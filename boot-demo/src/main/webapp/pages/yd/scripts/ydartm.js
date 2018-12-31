var DamaiSettle = function() {

	var loanam;
	var refdam;
	var souamt;
	var formartM = function(value) {
		if (value.indexOf('.') == -1) {
			return value + ".00";
		} else if (value.split('.')[1].length == 1) {
			return value + '0';
		} else {
			return value;
		}
	};

	var handleFileUpload = function() {
		if (jQuery().datepicker) {
			$('.date-picker').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		$('#submit').click(function() {
			if (Sunline.isNull($('#trandt_from').val())) {
				bootbox.alert("请输入起始日期！");
				return;
			}
			if (Sunline.isNull($('#trandt_to').val())) {
				bootbox.alert("请输入结束日期！");
				return;
			}
			
			
			var input = {};
			var stdate = $('#trandt_from').val();
			var endxdt = $('#trandt_to').val();
			
			input.stdate = stdate;
			input.endxdt = endxdt;
			Sunline.ajaxRouter("yd/ydshou", input, "POST", function(redata) {
				
				// 读取数据区表
				if (redata.retCode == '0000') {
					var souamt = redata.souamt;
					//var keppam = redata.keppam;
					$('#tranam').text(souamt.toFixed(2) + "元");
					
				
				} else {
					bootbox.alert(redata.retMsg);
					$('#keepdt').text("");
					//$('#prodcd').text("");
					
				}
			}, function(redata) {				
				console.info(redata);
				bootbox.alert("交易异常哦，请检查网络设置或重新登录");
			}, "json", false);
		});
		$('#incler').click(function() {
	
			
			
			var input = {};
			//var trandt = $('#trandt_from').val();
			//var endxdt = $('#trandt_to').val();
			
			//input.trandt = trandt;
			//input.endxdt = endxdt;
			Sunline.ajaxRouter("yd/ydover", input, "POST", function(redata) {
				
				// 读取数据区表
				if (redata.retCode == '0000') {
					var keppam = redata.tranam;
					var trandt = redata.trandt;
					//var keppam = redata.keppam;
					$('#keppam').text(keppam + "元");
					$('#keppdt').text(trandt);
					
				
				} else {
					bootbox.alert(redata.retMsg);
					$('#keepdt').text("");
					//$('#prodcd').text("");
					
				}
			}, function(redata) {				
				console.info(redata);
				bootbox.alert("交易异常哦，请检查网络设置或重新登录");
			}, "json", false);
		});
	};



	return {
		init : function() {
			handleFileUpload();
		}
	}

}();