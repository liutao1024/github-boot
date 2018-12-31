var fenIntr=function(){
	  var crcycdDict=Sunline.getDict("crcycd");
      var rfirtmDict=Sunline.getDict("rfirtm");
      var intrsrDict=Sunline.getDict("intrsr");
      var flirwyDict=Sunline.getDict("flirwy");
      $("#fen_flirwy").select2({
    	  data:flirwyDict
      });
      $("#fen_intrsr").select2({
   	   data:intrsrDict
      })
      $("#fen_crcycd").select2({
    	  data:crcycdDict
      });
       $("#fen_rfirtm").select2({
    	  data:rfirtmDict
      });
      
	  var handleTable=function(fenOption){			
		  var fenurl = Sunline.ajaxPath("intr/findFen");		 		      
		  fenOption.fengrid.init({
		        src: $("#fen_ajax"),
		        deleteData: fenOption.sendData,
		        onSuccess: function (fengrid) {
		            // execute some code after table records loaded
		        },
		        onError: function (fengrid) {
		            // execute some code on network or other general error  
		        },
		            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": fenurl, // ajax source
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
				            	"data": "lvamlm",
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
				            		return "<a class='edit' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.lvamlm+","+ data.efctdt+"'>编辑 </a>";
				            	}
				            },{ 
				            	"data": null,
				            	"sortable": false,
				            	"searchable": false,
				            	"render": function (data, type, full) {
				            		return "<a class='delete' href='javascript:;' data-src='" +  data.intrcd +","+ data.crcycd + ","+ data.lvamlm+","+ data.efctdt+ "'>删除 </a>";
				            	}
				            }
			            ]
			        }
			    });
		  fenOption.fengrid.bindTableDelete(fenOption.sendData);
		  fenOption.fengrid.bindTableEdit(fenOption.sendData,fenOption.tofenEditForm);		
		  $("#fen_intrsr").on("select2-close",function(){
			  if($("#fen_crcycd").val()==""||$("#fen_crcycd").val()==null||$("#fen_crcycd").val()==undefined){
				  bootbox.alert("请先选择货币代号");				 				 
			  }else{
				  if($("#fen_intrsr").val()=='1'){					
					   $("#fen_intrcd").attr("readOnly",true);
                       $("#fen_rfirtm").attr("readOnly",true);
                       $("#fen_rfircd").attr("readOnly",true);
                       $("#fen_intrvl").attr("readOnly",false);                                                             
                       $('#fen_rfircd').select2('data', null);
                       $("#fen_rfirtm").select2('data', null);
				  }else if($("#fen_intrsr").val()=='0'){
					  $("#fen_intrcd").attr("readOnly",true);
					  $("#fen_rfirtm").attr("readOnly",true);
					  $("#fen_rfircd").attr("readOnly",false);
                      $("#fen_intrvl").attr("readOnly",true);
                      $("#fen_rfirtm").val($("#fen_lvamlm").val()).trigger("change");
                      var rfircdDict=Sunline.getDict({crcycd:$("#fen_crcycd").val()},"/rfir","rfircd","rfirdd");
                      var rfircddata = [];
          	          $.each(rfircdDict,function (i,n) {
          	        	  $.each(rfirtmDict,function(j,m){
          	        		  if(m.id==n.rfirtm){
          	        		  rfircddata.push({id:n.id, text: n.text+m.dictName+"("+n.rfirtm+")"}); 
          	        		  }          	        		
          	        	  });
          	        });
                      $("#fen_rfircd").select2({
                    	  data:rfircddata                    	  
                      });
				  }			  
			  }			 
		  });
		  $("#fen_rfircd").on("select2-close",function(e){
			  var dtm=$("#fen_rfircd").select2("data").text;
			  $("#fen_rfirtm").val(dtm.substring(dtm.indexOf("(")+1,dtm.indexOf(")"))).trigger("change");
			  });
		  $("#fen_flirwy").on("select2-close",function(e){
			    if($("#fen_flirwy").val()==0){//不浮动
			    	$("#fen_flirrt").val("");//bilv
			    	$("#fen_flirrt").attr("readOnly",true);
			    	$("#fen_flirvl").val("");
			      	$("#fen_flirvl").attr("readOnly",true);
			    	
			    }else if($("#fen_flirwy").val()==1){//按点
			    	$("#fen_flirrt").val("");//bilv
			    	$("#fen_flirrt").attr("readOnly",true);
			      	$("#fen_flirvl").attr("readOnly",false);
			    	
			    }else if($("#fen_flirwy").val()==2){//按比率
			    	$("#fen_flirvl").val("");
			      	$("#fen_flirvl").attr("readOnly",true);
			      	$("#fen_flirrt").attr("readOnly",false);
			    }
			  });
	  };	
	return {
		init:function(fenOption){
			handleTable(fenOption);		
		},
		destory:function(){
			delTable();
		}
	}
}();