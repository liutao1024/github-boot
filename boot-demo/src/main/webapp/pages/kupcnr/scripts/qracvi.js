var qracvi = function() {
	var totbln;
	var totnum;
	var grid = new Datatable();
	var m_meijul;
	var m_access;
	var isF=true;
    var bschDict=Sunline.getDict("brchtu");
	var brchDict=Sunline.getDict("access");
	var bchnDict=Sunline.getDict("brchon");
		
	$("input[name='access']", $("#report_form")).select2({
		data : bchnDict
	});
	$("input[name='access']", $("#report_form")).select2('val','1');
	$('#meijul').attr("disabled","false");

	$("#access").click(function(){
		if("2"==$("#access").val()){
			$("#meijul").attr("placeholder","请输入商户号");
			$('#meijul').removeAttr("disabled");
		}else if("3"==$("#access").val()){
			$("#meijul").attr("placeholder","请输入身份证号");
			$('#meijul').removeAttr("disabled");
		}else{
			$("#meijul").attr("placeholder","请直接查询");
			$('#meijul').attr("disabled","false");
		}
	  });
	 
	// 确认按钮
	$("#submit").click(function() {
		  grid.setAjaxParam("custac",$("#custac").val());
			grid.submitFilter();	
			$("#c-acct-name").text(totbln);
        	$("#d-acct-name").text(totnum);
	});
    		
	var handlerTable = function(){		
		var editForm = function(nRowA){
			$('#custac').val();
			$('#totnum').attr("placeholder",$(nRowA[0]).text());
			$('#totbln').attr("placeholder",$(nRowA[1]).text());
			$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
			$("#addModal").modal('show');
		};
		var url = Sunline.ajaxPath("kupcon/qracvi");
		grid.setAjaxParam("custac",$("#custac").val());
		grid.init({
	        src: $("#maxblnbk_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	totbln = grid.getDataTable().context['0'].json["totbln"];
	        	totnum = grid.getDataTable().context['0'].json["totnum"];
	        	$("#c-acct-name").text(totbln);
	        	$("#d-acct-name").text(totnum);
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	        	console.info("It is error!");
	        },
	        dataTable: {  
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{
					"data" : "custac",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "acctna",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "idtfno",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "acctno",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "acttyp",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data,type,full){
	            		for(var i=0 ; i<brchDict.length ; i++){
	            			if(data == brchDict[i].dictId){
	            				return brchDict[i].dictName;
	            			}
	            		}
	            		return data;
	            	}
				},{
					"data" : "opendt",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "brchno",
					"sortable" : false,
					"searchable" : false,
					"render" : function(data,type,full){
	            		for(var i=0 ; i<bschDict.length ; i++){
	            			if(data == bschDict[i].dictId){
	            				return bschDict[i].dictName;
	            			}
	            		}
	            		return data;
	            	}
				},
				{
					"data" : "onlnbl",
					"sortable" : false,
					"searchable" : false
				},
				{
					"data" : "mechno",
					"sortable" : false,
					"searchable" : false,									
				},{
					"data" : "mechnm",
					"sortable" : false,
					"searchable" : false,									
				}
	           ]
	        }	        
	    });
		var sendData = ["totnum","totbln"];
		grid.bindTableDelete(sendData);
		grid.bindTableEdit(sendData, editForm);		
	}   
	
	return {
		init : function() {
			handlerTable();
		}
	}
}()