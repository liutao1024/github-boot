var fundReport = function() {

	var opreation = "find";
	var rpt_code;
	var rpt_type;
	var content = $('.inbox-content');
	var listListing = '';
	$("input[name='fundtype']", $("#fund_report")).select2({
		data:[{id:'buy',text:'申购'},
		      {id:'back',text:'赎回'},
		      {id:'share',text:'分红'}]
	     });
	
	$("input[name='PRODCD']", $("#fund_report")).select2({
		data:[{id:'040010001',text:'民生加银基金'},
		      {id:'040010003',text:'月月盈基金'},
		      {id:'040010004',text:'双月盈基金'},
		      {id:'040010002',text:'智能宝'}
		      ]
	     });
	
	
	var reportValid = Sunline.getValidate($("#fund_report"), function() {
		if(opreation=="find"){
			content.html('');
			toggleButton($("#fund_report"));
			var data = {};
			$.each($("input", $("#fund_report")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					data[n.name] = n.value;
				}
			});
			data.rpt_code = rpt_code;
			Sunline.ajaxRouter("repo/qryrpt", data, "post", function(res) {
				content.html(res.html);
				Metronic.initUniform();
			}, function(xhr, ajaxOptions, thrownError) {
				bootbox.alert("获取基金明细报表失败");
			}, "json");
		}else if(opreation=="down"){
			var url = "/rest/repo/downloadReport";
			url = url + "?rpt_code=" + rpt_code + "&rpt_type=" + rpt_type;
			$.each($("input", $("#fund_report")), function(i, n) {
				if (n.name != undefined && n.name != "" && n.name != null) {
					url = url + "&" + n.name + "=" + n.value;
				}
			});
			window.open(Sunline.getBasePath()+url);
		}
	}, {
		acctdt : {
			required : true
		},
		fundtype: {
        	required: true
        },
        PRODCD: {
        	required: true
        },
        TRANDT: {
        	required: true
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
	};
	return {
		init : function() {
			$("#find_report").click(function() {
				if($("#fundtype").select2("val")=="share"){
					if($("#PRODCD").select2("val")!="040010004"){
						bootbox.alert("只有双月盈基金有分红 ，请重新选择！");
						return;
					}
				}
				
				opreation = "find";
				if($("#fundtype").select2("val")=="buy"){
					rpt_code = "rptFundBuy";
				}else if($("#fundtype").select2("val")=="back"){
					rpt_code = "rptFundBack";
				}else{
					rpt_code = "rptFundShare";
				}
				$("#fund_report").submit();
			});
			
			$("a","#down").on("click",function(){
				opreation = "down";
				if($("#fundtype").select2("val")=="buy"){
					rpt_code = "rptFundBuy";
				}else if($("#fundtype").select2("val")=="back"){
					rpt_code = "rptFundBack";
				}else{
					rpt_code = "rptFundShare";
				}
				rpt_type = this.name;
				$("#fund_report").submit();
			});
		}
	}

}();