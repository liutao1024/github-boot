var suyiReport = function() {

	var opreation = "find";
	var rpt_code = 'jz_rptKroPfbr';
	var rpt_type;
	
	 var crcycdDict=Sunline.getDict("crcycd");
	 $("input[name='crcycd']", $("#report_form")).select2({
   	  data:crcycdDict
     });
	 var reportDict=Sunline.getDict("rfresh");
	 $("input[name='rfresh']", $("#report_form")).select2({
		data : reportDict
	});
	 var brchDict=Sunline.getDict("","/brch","brchno","brchna");
	 $("input[name='brchno']", $("#report_form")).select2({
		data : brchDict
	});
	 $("input[name='crcycd']", $("#report_form")).select2('val','01');
	 $("input[name='rfresh']", $("#report_form")).select2('val','D');
	 $("input[name='brchno']", $("#report_form")).select2('val','0004');
	var content = $('.inbox-content');
	var listListing = '';

	var reportValid = Sunline.getValidate($("#report_form"), function() {
		if(opreation=="find"){
			content.html('');
			toggleButton($("#report_form"));
			var data = {};
			$.each($("input", $("#report_form")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					data[n.name] = n.value;
				}
			});
			data.rpt_code = rpt_code;
			Sunline.ajaxRouter("repo/qryrpt", data, "post", function(res) {
				content.html(res.html);
				Metronic.initUniform();
			}, function(xhr, ajaxOptions, thrownError) {
				bootbox.alert("获取损益明细表失败");
			}, "json");
		}else if(opreation=="down"){
			var url = "/rest/repo/downloadReport";
			url = url + "?rpt_code=" + rpt_code + "&rpt_type=" + rpt_type;
			$.each($("input", $("#report_form")), function(i, n) {
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
		},
		report : {
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
				$("#report_form").submit();
			});

			$("a","#down").on("click",function(){
				opreation = "down";
				rpt_type = this.name;
				$("#report_form").submit();
			});
		}
	}

}();