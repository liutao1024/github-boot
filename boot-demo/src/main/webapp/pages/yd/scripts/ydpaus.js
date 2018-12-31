var ydpaus =function(){
	var grid = new Datatable();
	var m_acctno;
	var m_custno;
	
	var handlerInsuclear = function(){
		
		//var loanflagDict = [{id:'1',text:'是'},{id:'0',text:'否'}];
	/*	$('#stopflag').select2({
			data : [{id:'1',text:'是'},{id:'0',text:'否'}]
		});*/
		
		$('#loanflag').select2({
			data : [{id:'1',text:'是'},{id:'0',text:'否'}]
		});
		/*$("#ispoin").click(function(){
			var ispoin = $('#ispoin').val();
			var input = {};
			input.ispoin = ispoin;
			
		  });*/
		
		$('#doshoamt').click(function(){
			//var loanflag = $('#loanflag').val();
			var input = {};
			/*input.tranam = tranam;
			input.crcycd = "01";
			input.chrgcd = "SFDMPOC";*/
			Sunline.ajaxRouter(
		         	"yd/shoamt", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			// 查询成功设置界面展示
		         			$("input[name='shoamt']").val(redata.souamt);
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
		
		$('#docomamt').click(function(){
			var input = {};
			/*input.tranam = tranam;
			input.crcycd = "01";
			input.chrgcd = "SFDMPOC";*/
			Sunline.ajaxRouter(
		         	"yd/ydqrdc", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			// 查询成功设置界面展示
		         			$("input[name='comamt']").val(redata.dredbl);
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
		$('#dooveamt').click(function(){
			//var oveamt = $('#oveamt').val();
			var input = {};
			/*input.tranam = tranam;
			input.crcycd = "01";
			input.chrgcd = "SFDMPOC";*/
			Sunline.ajaxRouter(
		         	"yd/oveamt", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			// 查询成功设置界面展示
		         			$("input[name='oveamt']").val(redata.ovlamt);
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
		
		$('#dostopflag').click(function(){
			var stopflag = $('#stopflag').val();
			var input = {};
			/*input.custac = custac;
			input.crcycd = "01";
			input.prodcd = "";*/
			Sunline.ajaxRouter(
		         	"yd/ydpaus", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){	
		         			if(redata.stopflag=="0"){	
		         				$("input[name='stopflag']").val("放款状态正常！");
		         			}else{
		         				$("input[name='stopflag']").val("放款已经暂停！");
		         			}
		         			
//		         			m_acctno = redata.acctno;
//		         			m_custno = redata.custno;
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
			
		$('#trans').click(function(){
			var input = {};
			input.futday = $('#futday').val();
			/*input.custno = m_custno;
			input.acctno = m_acctno;
			input.crcycd = "01";
			input.acctam = $('#onlnbl').val();*/
			Sunline.ajaxRouter(
		         	"yd/trans", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			// 查询成功设置界面展示
		         			//console.log(redata.tranpt);
		         			/*$("#tranpt").val(redata.tranpt);
		         			$("#feepot").val(redata.tranam);*/
		         			bootbox.alert('天数'+redata.numday);
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
		
		$('#deal').click(function(){
			var input = {};
			//公共字段
			input.loanflag = $('#loanflag').val();
			/*input.chrgcy = "01";
			input.feeamt = $('#feeamt').val();
			input.custac = $('#custac').val();
			input.feepot = $("#feepot").val();
			input.tranpt = $('#tranpt').val();
			//input字段
			input.custac = $('#custac').val();
			input.prodcd = "070010001";
			input.tranam = $('#tranam').val();
			input.crcycd = "01";
			input.chckfg = "0";
			input.tranpw = null;*/
			Sunline.ajaxRouter(
		         	"yd/ydpaus", 
		         	 input,
		         	"POST",
		             function(redata){
		         		if(redata.retCode=="0000"){
		         			// 查询成功设置界面展示
		         			//console.log(redata.tranpt);
		         			bootbox.alert("设置成功！");
		         		}else{
		         			bootbox.alert(redata.retMsg);
		         		}
		         	},
		         	function(redata){
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	false); 
		});
	};
	
	/*var handlerclear  = function(){ 
		console.log("111111111111111111111111");
		var input = {};
		input.chngam = $('#feeamt').val();
		input.custno = m_custno;
		input.acctno = m_acctno;
		input.crcycd = "01";
		input.acctam = $('#onlnbl').val();
		Sunline.ajaxRouter(
	         	"insu/trans", 
	         	 input,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			// 查询成功设置界面展示
	         			console.log(redata.tranpt);
	         			$("#tranpt").val(redata.tranpt);
	         			$("#feepot").val(redata.tranam);
//	         			bootbox.alert("积分:"+redata.tranpt);
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	function(redata){
	         		bootbox.alert("网络异常");
	         	},
	         	"json",
	         	false); 
	};*/
	return {
		init : function(){
			handlerInsuclear();
		}
	}
}()