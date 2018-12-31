var Bxprop = function() {
	var handlerTable = function() {

		//var prodcd = '020010018';
//		var yesnfgDict = Sunline.getDict("E_YES___");
//		$("#prodcd").val("020010018");
		var prodcdDict=[{"id":"020010020","text":"现金贷(大众版)"}
        ,{"id":"020010018","text":"现金贷(员工版)"}]
        $("#prodcd").select2({data:prodcdDict,allowClear:false});
        $('#prodcd').select2("val","020010020");
		$('#submit').click(function() {
			var input = {};
			if(Sunline.isNull($("#instdt").val())){
				bootbox.alert("查询日期不能为空！！！");
				return;
			}
			input.instdt = $("#instdt").val();
			//input.prodcd = $("#prodcd").val();
			input.prodcd = $('#prodcd').select2("val");
			//var prodcds = $("#prodcd").val();
			var prodcds =  $('#prodcd').select2("val");
			Sunline.ajaxRouter("bx/bxprop", input, "POST", function(redata) {
				if (redata.retCode == '0000') {

					$("#lntota").val(redata.lntota);
					$("#crolns").val(redata.crolns);
					$("#yscpay").val(redata.yscpay);
					$("#chinap").val(redata.chinap);
					$("#yingse").val(redata.yingse);
					if(prodcds == '020010018'){
						$("#prodna").val("有氧现金贷(员工版)");//目前写死
					}else if(prodcds == '020010020'){
						$("#prodna").val("有氧现金贷(大众版)");//目前写死
					}else{
						$("#prodna").val(prodcds);//目前写死
					}
					
				} else {
					bootbox.alert(redata.retMsg);
					return;
				}
			}, function(redata) {
				$("#myModal").modal('hide');
				bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {

				});
			}, "json", false);
		});
	}
	return {
		init : function() {
			handlerTable();
		}
	}
}()