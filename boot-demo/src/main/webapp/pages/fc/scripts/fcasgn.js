var Fcasgn=function(){
	var grid = new Datatable();
	var asgnstDict=Sunline.getDict("E_ASGNST");
	$("input[name='asgnst']",$("#fcdate")).select2({data:asgnstDict,allowClear:true});
	var prodtpDict=Sunline.getDict("F_PRODTP");
	var repystDict=Sunline.getDict("E_REPYST");
	if (jQuery().datepicker) {
        $('.date-picker').datepicker({
            rtl: Metronic.isRTL(),
            orientation: "left",
            autoclose: true,
            language: 'zh-CN',
        });
    };
	$("#submit").click(function(){
		grid.setAjaxParam("clerdt",$('#clerdt').val());
		grid.setAjaxParam("asgnst",$('#asgnst').select2("val"));
		grid.submitFilter();
	});
	var handleTable = function() {
		var url = Sunline.ajaxPath("fc/findasgn");
		var editForm = function(nRowA){
			bootbox.confirm("确定要分配", function(result) {
				if(!result){
            		return;
            	}
			var data={"subjcd":$(nRowA[1]).text(),"clerdt":$(nRowA[0]).text(),"repyno":$(nRowA[2]).text()};
			Sunline.ajaxRouter("fc/fcasgn", data, "POST", function(ret){
				if(ret.retCode==="0000"){
					grid.setAjaxParam("clerdt",$('#clerdt').val());
					grid.setAjaxParam("asgnst",$('#asgnst').select2("val"));
					grid.submitFilter();
				}else{
					bootbox.alert(ret.retMsg);
				}
			}, function(ret){
				bootbox.alert("网络异常");
			}, "json",
					false);
			});
		};
		 $("#asgnst").select2("val","1");
		grid.setAjaxParam("clerdt",$('#clerdt').val());
		grid.setAjaxParam("asgnst",$("#asgnst").select2("val"));
		grid.init({
	        src: $("#fcasgn_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [
	                {     
		            	"data": "clerdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "subjcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repyno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "repyst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < repystDict.length; i++) {
								if (repystDict[i].id == data) {
									return repystDict[i].text;
								}
							}
							return data;
						}
		            },{ 
		            	"data": "asgnam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "rlasdt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "rlasam",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prodcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "prodna",
		            	"sortable": false,
		            	"searchable": false
		            },
		            { 
		            	"data": "prodtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data, type, full) {
							for (var i = 0; i < prodtpDict.length; i++) {
								if (prodtpDict[i].id == data) {
									return prodtpDict[i].text;
								}
							}
							return data;
						}
		            },
		            { 
		            	"data": "fcsrcd",
		            	"sortable": false,
		            	"searchable": false
		            },
		            { 
		            	"data": "fcsrna",
		            	"sortable": false,
		            	"searchable": false
		            },{
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							if($('#asgnst').select2("val")=="2"){
								return "已分配";
							}
							return "<a class='edit' href='javascript:;' data-src='"
									+ data.clerdt
									+ ","
									+ data.subjcd
									+ ","
									+ data.repyno
									+ "'>回款分配 </a>";
						}
					}
	            ]
	        }
	    });
		var sendData = ["subjcd","clerdt","repyno"];
        grid.bindTableEdit(sendData,editForm);
	}
	
	return {
		init : function(){
			handleTable();
		}
	}
}();                                                                                 