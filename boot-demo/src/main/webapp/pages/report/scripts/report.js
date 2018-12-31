var report = function() {

	$("input[name='report']", $("#report_form")).select2({
		data : [ {
			id : "qrylir",
			text : "利润表"
		}, {
			id : "qryzch",
			text : "资产负债"
		}, {
			id : "qrysymx",
			text : "损益明细"
		}, {
			id : "qryywzk",
			text : "业务状况"
		} ],
		allowClear : true
	});

	var content = $('.inbox-content');
	var listListing = '';

	var reportValid = Sunline.getValidate($("#report_form"), function() {
		content.html('');
		toggleButton($("#report_form"));
		var data = {};
		$.each($("input", $("#report_form")), function(i, n) {
			if (n.name != undefined && n.name != "" && n.name != null) {
				data[n.name] = n.value;
			}
		});
		Sunline.ajaxRouter("repo/"+$("input[name='report']", $("#report_form")).val(), data, "post", function(res) {
			content.html(res.html);
			Metronic.initUniform();
		}, function(xhr, ajaxOptions, thrownError) {

		}, "json");

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
				$("#report_form").submit();
			});
			
		}
	}

}();