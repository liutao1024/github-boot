var lntransfor = function() {

	var clssstDict = Sunline.getDict("E_CLSSST"); // 贷款形态
	var prlntgDict = Sunline.getDict("E_PRLNTG"); // 应计非应计状态
	var acctstDict = Sunline.getDict("E_ACCTST"); // 贷款账户状态
	var crcycdDict = Sunline.getDict("crcycd"); // 货币代号

	$("input[name='clssst']").select2({
		data : clssstDict,
		allowClear : true
	});
	$("input[name='prlntg']").select2({
		data : prlntgDict,
		allowClear : true
	});
	$("input[name='acctst']").select2({
		data : acctstDict,
		allowClear : true
	});
	$("input[name='crcycd']").select2({
		data : crcycdDict,
		allowClear : true
	});

	// 贷款形态-枚举类型调取
	$("input[name='clssst_trans']").select2({
		data : clssstDict,
		allowClear : true
	});

	var dictdata0 = [ {
		id : '2',
		text : '呆滞'
	}, {
		id : '3',
		text : '呆账'
	} ] // 原贷款形态为正常
	var dictdata1 = [ {
		id : '2',
		text : '呆滞'
	}, {
		id : '3',
		text : '呆账'
	} ] // 原贷款形态为逾期
	var dictdata2 = [ {
		id : '3',
		text : '呆账'
	} ] // 原贷款形态为呆滞
	var dictdata3 = [ {
		id : '2',
		text : '呆滞'
	} ] // 原贷款形态为呆账
	var dictdata4 = [ {
		id : '3',
		text : '呆账'
	} ] // 原贷款形态为核销

	/**/// *********************************************************************************
	var handlePage = function() {

		var taskValid = Sunline.getValidate($("#tran_form"), function() {
			Sunline.ajaxRouter("loan/qrtran", {
				'lncfno' : $("#lncfno_in").val(),
				'acctno' : $("#acctno_in").val()
			}, 'post', function(ret) { // 查询成功之后
				if(!Sunline.isNull(ret.lncfno)){
					$("#do_tran_btn").removeAttr("disabled");//如果查询结果不为空，显示更改按钮
				}
				var clssstDict;
				if (ret.clssst == 0) {// 原贷款形态转移=正常
					clssstDict = dictdata0;
				} else if (ret.clssst == 1) {// 原贷款形态转移=逾期
					clssstDict = dictdata1;
				} else if (ret.clssst == 2) {// 原贷款形态转移=呆滞
					clssstDict = dictdata2;
				} else if (ret.clssst == 3) {// 原贷款形态转移=呆账
					clssstDict = dictdata3;
				} else if (ret.clssst == 4) {// 原贷款形态转移=核销
					clssstDict = dictdata4;
				} else {
					bootbox.alert("查无此数据");
				}

				$("input[name='clssst_trans']").select2({
					data : clssstDict,
					allowClear : true
				});
				$("#acctno").val(ret.acctno);
				$("#lncfno").val(ret.lncfno);
				$("#custno").val(ret.custno);
				$("#acctna").val(ret.acctna);

				$("#prodcd").val(ret.prodcd);
				$("#prodna").val(ret.prodna);
				$("#initdt").val(ret.initdt);
				$("#initdt").val(ret.initdt);
				$("#matudt").val(ret.matudt);
				$("#termfm").val(ret.termfm);
				$("#clssst").val(ret.clssst).trigger("change");
				$("#prlntg").val(ret.prlntg).trigger("change");
				$("#acctst").val(ret.acctst).trigger("change");
				$("#crcycd").val(ret.crcycd).trigger("change");
				$("#lnnpbl").val(ret.lnnpbl);
				$("#lnopbl").val(ret.lnopbl);
				$("#lndpbl").val(ret.lndpbl);
				$("#lnbpbl").val(ret.lnbpbl);
				$("#hxxxpr").val(ret.hxxxpr);
			}, function(ret) {
				bootbox.alert("网络异常");
			}, 'json', false);

		}, {
			lncfno_in : {
				required : true,
				maxlength : 30
			},
			acctno_in : {
				required : true,
				maxlength : 40
			},
		});

		$("#serch_btn").bind("click", function() {
			$("#tran_form").submit();
		});

		$("#do_tran_btn").bind('click', function() {
			var taskid;
			Sunline.ajaxRouter("loan/lntrcl", {//Ajex传入参数
				'lncfno' : $("#lncfno").val(),
				'clssst' : $("#clssst_trans").val(),//更新后贷款形态
				'orclst' : $("#clssst").val()//原贷款形态
			}, 'post', function(ret) {
				lncfno = ret.lncfno;
				acctno = ret.acctno;
			}, function(ret) {
				console.info(ret);//??????
			}, 'json', false);
			if (!Sunline.isNull(lncfno)) {
				Sunline.ajaxRouter("loan/qrtran", {
					'lncfno' : lncfno,
					'acctno' : acctno,
				}, 'post', function(ret) { // 查询成功之后
					var clssstDict;
					if (ret.clssst == 0) {// 原贷款形态转移=正常
						clssstDict = dictdata0;
					} else if (ret.clssst == 1) {// 原贷款形态转移=逾期
						clssstDict = dictdata1;
					} else if (ret.clssst == 2) {// 原贷款形态转移=呆滞
						clssstDict = dictdata2;
					} else if (ret.clssst == 3) {// 原贷款形态转移=呆账
						clssstDict = dictdata3;
					} else if (ret.clssst == 4) {// 原贷款形态转移=核销
						clssstDict = dictdata4;
					} else {
						bootbox.alert("查无此数据");
					}

					$("input[name='clssst_trans']").select2({
						data : clssstDict,
						allowClear : true
					});
					$("#acctno").val(ret.acctno);
					$("#lncfno").val(ret.lncfno);
					$("#custno").val(ret.custno);
					$("#acctna").val(ret.acctna);

					$("#prodcd").val(ret.prodcd);
					$("#prodna").val(ret.prodna);
					$("#initdt").val(ret.initdt);
					$("#initdt").val(ret.initdt);
					$("#matudt").val(ret.matudt);
					$("#termfm").val(ret.termfm);
					$("#clssst").val(ret.clssst).trigger("change");
					$("#prlntg").val(ret.prlntg).trigger("change");
					$("#acctst").val(ret.acctst).trigger("change");
					$("#crcycd").val(ret.crcycd).trigger("change");
					$("#lnnpbl").val(ret.lnnpbl);
					$("#lnopbl").val(ret.lnopbl);
					$("#lndpbl").val(ret.lndpbl);
					$("#lnbpbl").val(ret.lnbpbl);
					$("#hxxxpr").val(ret.hxxxpr);
				}, function(ret) {
					bootbox.alert("网络异常");
				});
			}
			$("#do_tran_btn").attr("disabled", "disabled");//???????
		});
	}

	return {
		init : function() {
			handlePage();
		}
	}

}();