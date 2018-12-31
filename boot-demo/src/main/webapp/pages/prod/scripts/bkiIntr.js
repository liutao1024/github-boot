var bkiIntr=function(){
	  var crcycdDict=Sunline.getDict("crcycd");
      var rfirtmDict=Sunline.getDict("rfirtm");
      var intrsrDict=Sunline.getDict("intrsr");
      var flirwyDict=Sunline.getDict("flirwy");
      $("#bki_flirwy").select2({
    	  data:flirwyDict
      });
      $("#bki_intrsr").select2({
   	   data:intrsrDict
      })
      $("#bki_crcycd").select2({
    	  data:crcycdDict
      });
       $("#bki_depttm").select2({
    	  data:rfirtmDict
      });
       $("#bki_rfirtm").select2({
    	  data:rfirtmDict
      });
      
	  var handleTable=function(bkiOption){			
		  var bkiurl = Sunline.ajaxPath("intr/findBki");		 		      
		  bkiOption.bkigrid.init({
		        src: $("#bki_ajax"),
		        deleteData: bkiOption.sendData,
		        onSuccess: function (bkigrid) {
		            // execute some code after table records loaded
		        },
		        onError: function (bkigrid) {
		            // execute some code on network or other general error  
		        },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": bkiurl, // ajax source
			            },
			            "bDestroy" :true,
			            "bServerSide":true,
			            "columns" : [{ 
			            		"data": "crcycd",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < crcycdDict.length; i++) {
				                          if (crcycdDict[i].id == data) {
				                            return crcycdDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "depttm",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < rfirtmDict.length; i++) {
				                          if (rfirtmDict[i].id == data) {
				                            return rfirtmDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "efctdt",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "inefdt",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "intrsr",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < intrsrDict.length; i++) {
				                          if (intrsrDict[i].id == data) {
				                            return intrsrDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "intrvl",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "rfircd",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "rfirtm",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < rfirtmDict.length; i++) {
				                          if (rfirtmDict[i].id == data) {
				                            return rfirtmDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "flirwy",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            	    for (var i = 0; i < flirwyDict.length; i++) {
				                          if (flirwyDict[i].id == data) {
				                            return flirwyDict[i].text;
				                          }
				                        }
				            	    return data;
				            	}
				            	
				            },{ 
				            	"data": "flirvl",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "flirrt",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "remark",
				            	"sortable": false,
				            	"searchable": false
				            },{ "data": null,
				            	"width": "18%",
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='edit' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.depttm+","+ data.efctdt+"'>编辑 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.depttm+","+ data.efctdt+ "'>删除 </a>";
				            	}
				            }
			            ]
			        }
			    });
		  bkiOption.bkigrid.bindTableDelete(bkiOption.sendData);
		  bkiOption.bkigrid.bindTableEdit(bkiOption.sendData,bkiOption.tobkiEditForm);		
		  $("#bki_intrsr").on("select2-close",function(){
			  if($("#bki_depttm").val()==""||$("#bki_depttm").val()==null||$("#bki_depttm").val()==undefined
					  ||$("#bki_crcycd").val()==""||$("#bki_crcycd").val()==null||$("#bki_crcycd").val()==undefined){
				  bootbox.alert("请先选择存期和货币代号");				 				 
			  }else{
				  if($("#bki_intrsr").val()=='1'){					
					   $("#bki_intrcd").attr("readOnly",true);
                       $("#bki_rfirtm").attr("readOnly",true);
                       $("#bki_rfircd").attr("readOnly",true);
                       $("#bki_intrvl").attr("readOnly",false);                                                             
                       $('#bki_rfircd').select2('data', null);
                       $("#bki_rfirtm").select2('data', null);
				  }else if($("#bki_intrsr").val()=='0'){
					  $("#bki_intrcd").attr("readOnly",true);
					  $("#bki_rfirtm").attr("readOnly",true);
					  $("#bki_rfircd").attr("readOnly",false);
                      $("#bki_intrvl").attr("readOnly",true);
                      $("#bki_rfirtm").val($("#bki_depttm").val()).trigger("change");
                      var rfircdDict=Sunline.getDict({rfirtm:$("#bki_depttm").val(),crcycd:$("#bki_crcycd").val()},"/rfir","rfircd","rfirtm");
                      $("#bki_rfircd").select2({
                    	  data:rfircdDict
                      });
				  }			  
			  }			 
		  });
	  };	
	return {
		init:function(bkiOption){
			handleTable(bkiOption);		
		}
	}
}();