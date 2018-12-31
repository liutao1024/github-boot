var zichReport = function() {

	var opreation = "find";
	var rpt_code = 'jz_rptKroAslb';
	var rpt_type;
	
	 var crcycdDict=Sunline.getDict("crcycd");
	 $("input[name='crcycd']", $("#zich_report")).select2({
   	  data:crcycdDict
     });
	 var brchDict=Sunline.getDict("","/brch","brchno","brchna");
	 $("input[name='brchno']", $("#zich_report")).select2({
		data : brchDict
	});
	 var reportDict=Sunline.getDict("rfresh");
	 $("input[name='rfresh']", $("#zich_report")).select2({
		data : reportDict
	});
	 $("input[name='crcycd']", $("#zich_report")).select2('val','01');
	 $("input[name='rfresh']", $("#zich_report")).select2('val','D');
	 $("input[name='brchno']", $("#zich_report")).select2('val','0004');
	var content = $('.inbox-content');
	var listListing = '';

	var reportValid = Sunline.getValidate($("#zich_report"), function() {
		if(opreation=="find"){
			content.html('');
			toggleButton($("#zich_report"));
			var data = {};
			$.each($("input", $("#zich_report")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					data[n.name] = n.value;
				}
			});
			data.rpt_code = rpt_code;
			Sunline.ajaxRouter("repo/qryrpt", data, "post", function(res) {
				content.html(res.html);
				Metronic.initUniform();
			}, function(xhr, ajaxOptions, thrownError) {
				bootbox.alert("获取资产报表失败");
			}, "json");
		}else if(opreation=="down"){
			var url = "/rest/repo/downloadReport";
			url = url + "?rpt_code=" + rpt_code + "&rpt_type=" + rpt_type;
			$.each($("input", $("#zich_report")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					url = url + "&" + n.name + "=" + n.value;
				}
			});
			window.open(Sunline.getBasePath()+url);
		}

	}, {
		brchno : {
			required : true
		},
		crcycd : {
			required : true
		},
		acctdt : {
			required : true
		}
	});
	var toggleButton = function(el) {
		if (typeof el == 'undefined') {
			return;
		}
		if (el.attr("disabled")) {
			el.attr("disabled", false);
		} else {
			el.attr("disabled", true);
		}
	}
	return {
		init : function() {
			$("#find_report").click(function() {
				opreation = "find";
				$("#zich_report").submit();
			});

			$("a","#down").on("click",function(){
				opreation = "down";
				rpt_type = this.name;
				$("#zich_report").submit();
			});
		}
	}

}();