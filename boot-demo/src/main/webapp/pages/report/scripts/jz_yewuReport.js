var yewuReport = function() {

	var opreation = "find";
	var rpt_code = 'jz_rptKroSlit';
	var rpt_type;
	
	 var crcycdDict=Sunline.getDict("crcycd");
	 $("input[name='crcycd']", $("#yewu_report")).select2({
   	  data:crcycdDict
     });
	 var brchDict=Sunline.getDict("","/brch","brchno","brchna");
	 $("input[name='brchno']", $("#yewu_report")).select2({
		data : brchDict
	});
	 var reportDict=Sunline.getDict("rfresh");
	 $("#rfresh").select2({
		data : reportDict
	});
	 $("input[name='crcycd']", $("#yewu_report")).select2('val','01');
	 $("#rfresh").select2('val','D');
	 $("input[name='brchno']", $("#yewu_report")).select2('val','0004');
	var content = $('.inbox-content');
	var listListing = '';

	var reportValid = Sunline.getValidate($("#yewu_report"), function() {
		if(opreation=="find"){
			content.html('');
			toggleButton($("#yewu_report"));
			var data = {};
			$.each($("input", $("#yewu_report")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					data[n.name] = n.value;
				}
			});
			data.rpt_code = rpt_code;
			data['formtg']="N";
			Sunline.ajaxRouter("repo/qryrpt", data, "post", function(res) {
				content.html(res.html);
				Metronic.initUniform();
			}, function(xhr, ajaxOptions, thrownError) {
				bootbox.alert("获取业务状况报表失败");
			}, "json");
		}else if(opreation=="down"){
			var url = "/rest/repo/downloadReport";
			url = url + "?rpt_code=" + rpt_code + "&rpt_type=" + rpt_type + "&formtg=N";
			$.each($("input", $("#yewu_report")), function(i, n) {
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
				$("#yewu_report").submit();
			});

			$("a","#down").on("click",function(){
				opreation = "down";
				rpt_type = this.name;
				$("#yewu_report").submit();
			});
		}
	}

}();