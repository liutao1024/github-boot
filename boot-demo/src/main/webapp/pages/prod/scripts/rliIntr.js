var rliIntr=function(){
	  var crcycdDict=Sunline.getDict("crcycd");
      var rfirtmDict=Sunline.getDict("rfirtm");
      var intrsrDict=Sunline.getDict("intrsr");
      var flirwyDict=Sunline.getDict("flirwy");
      $("#rli_flirwy").select2({
    	  data:flirwyDict
      });
      $("#rli_intrsr").select2({
   	   data:intrsrDict
      })
      $("#rli_crcycd").select2({
    	  data:crcycdDict
      });
       $("#rli_rfirtm").select2({
    	  data:rfirtmDict
      });
      
	  var handleTable=function(rliOption){			
		  var rliurl = Sunline.ajaxPath("intr/findRli");		 		      
		  rliOption.rligrid.init({
		        src: $("#rli_ajax"),
		        deleteData: rliOption.sendData,
		        onSuccess: function (rligrid) {
		            // execute some code after table records loaded
		        },
		        onError: function (rligrid) {
		            // execute some code on network or other general error  
		        },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": rliurl, // ajax source
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
				            	"data": "dayllm",
				            	"sortable": false,
				            	"searchable": false
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
				            		return "<a class='edit' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.dayllm+","+ data.efctdt+"'>编辑 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.dayllm+","+ data.efctdt+ "'>删除 </a>";
				            	}
				            }
			            ]
			        }
			    });
		  rliOption.rligrid.bindTableDelete(rliOption.sendData);
		  rliOption.rligrid.bindTableEdit(rliOption.sendData,rliOption.torliEditForm);		
		  $("#rli_intrsr").on("select2-close",function(){
			  if($("#rli_crcycd").val()==""||$("#rli_crcycd").val()==null||$("#rli_crcycd").val()==undefined){
				  bootbox.alert("请先选择货币代号");				 				 
			  }else{
				  if($("#rli_intrsr").val()=='1'){					
					   $("#rli_intrcd").attr("readOnly",true);
                       $("#rli_rfirtm").attr("readOnly",true);
                       $("#rli_rfircd").attr("readOnly",true);
                       $("#rli_intrvl").attr("readOnly",false);                                                             
                       $('#rli_rfircd').select2('data', null);
                       $("#rli_rfirtm").select2('data', null);
				  }else if($("#rli_intrsr").val()=='0'){
					  $("#rli_intrcd").attr("readOnly",true);
					  $("#rli_rfirtm").attr("readOnly",true);
					  $("#rli_rfircd").attr("readOnly",false);
                      $("#rli_intrvl").attr("readOnly",true);
                      $("#rli_rfirtm").val($("#rli_dayllm").val()).trigger("change");
                      var rfircdDict=Sunline.getDict({crcycd:$("#rli_crcycd").val()},"/rfir","rfircd","rfirdd");
                      var rfircddata = [];
          	          $.each(rfircdDict,function (i,n) {
          	        	  $.each(rfirtmDict,function(j,m){
          	        		  if(m.id==n.rfirtm){
          	        		  rfircddata.push({id:n.id, text: n.text+m.dictName+"("+n.rfirtm+")"}); 
          	        		  }          	        		
          	        	  });
          	        });
                      $("#rli_rfircd").select2({
                    	  data:rfircddata                    	  
                      });
				  }			  
			  }			 
		  });
		  $("#rli_rfircd").on("select2-close",function(e){
			  var dtm=$("#rli_rfircd").select2("data").text;
			  $("#rli_rfirtm").val(dtm.substring(dtm.indexOf("(")+1,dtm.indexOf(")"))).trigger("change");
			  });
		  $("#rli_flirwy").on("select2-close",function(e){
			    if($("#rli_flirwy").val()==0){//不浮动
			    	$("#rli_flirrt").val("");//bilv
			    	$("#rli_flirrt").attr("readOnly",true);
			    	$("#rli_flirvl").val("");
			      	$("#rli_flirvl").attr("readOnly",true);
			    	
			    }else if($("#rli_flirwy").val()==1){//按点
			    	$("#rli_flirrt").val("");//bilv
			    	$("#rli_flirrt").attr("readOnly",true);
			      	$("#rli_flirvl").attr("readOnly",false);
			    	
			    }else if($("#rli_flirwy").val()==2){//按比率
			    	$("#rli_flirvl").val("");
			      	$("#rli_flirvl").attr("readOnly",true);
			      	$("#rli_flirrt").attr("readOnly",false);
			    }
			  });
	  };	
	return {
		init:function(rliOption){
			handleTable(rliOption);		
		},
		destory:function(){
			delTable();
		}
	}
}();