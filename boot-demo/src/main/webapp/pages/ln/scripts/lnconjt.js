var Lnconjt=function(){
	var crcycdDict=Sunline.getDict("E_CRCYCD");
	$("input[name='crcycd']",$("#cust-form")).select2({data:crcycdDict,allowClear:true});
	var handleTable = function() {	
		$("#clstat").select2({
	        	data : [{id:'1',text:'贷款损失准备'},{id:'2',text:'存放同业坏账准备'}]
	        });
	    $("#clstat").select2("val","1");
	    $("#crcycd").select2("val","01");
		//var url = Sunline.ajaxPath("ln/lnconjt");	
		//var sendData = ["tranam"];
	}
	
	//按条件查找
	$("#submit").click(function(){
		if(Sunline.isNull($('#tranam').val())){
			bootbox.alert("清算日期不能为空！"); 
			return;
		}
		var input_notice = {}; 
		
		input_notice.tranam = $("#tranam").val(); 
		input_notice.clstat = $("#clstat").select2("val");
		input_notice.crcycd = $("#crcycd").select2("val");	
		Sunline.ajaxRouter(
	         	"ln/lnconjt", 
	         	input_notice,
	         	"POST",
	             function(redata){
	         		if(redata.retCode=="0000"){
	         			bootbox.alert("记账成功");
	         		}else{
	         			bootbox.alert(redata.retMsg);
	         		}
	         	},
	         	"json",
	         	false); 		
		});
	return {
		init : function(){
			handleTable();
		}
	}
}();