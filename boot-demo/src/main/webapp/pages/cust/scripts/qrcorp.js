var Qrcorp = function(){
	var idtftpDict=Sunline.getDict("E_CORP_IDTF");	

	var grid = new Datatable();
	$("#idtftp_t").select2({
		data : idtftpDict,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	var content = $('#edit_load');//配置商户关联信息子页面
	var handlerTable = function(){
		
		var url = Sunline.ajaxPath("cust/qrcorp");
		grid.setAjaxParam("idtftp_t","");
		grid.setAjaxParam("idtfno_t","");
		grid.setAjaxParam("custna_t","");
		grid.setAjaxParam("epcotl_t","");
		grid.init({
	        src: $("#cif_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {	      
	        	console.info("It is error!");
	        },
	        dataTable: { 
	            "ajax": {
	                "url": url, 
	            },
	            "columns" : [{     
		            	"data": "custno",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "custna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "epcotl",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "idtftp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<idtftpDict.length ; i++){
		            			if(data == idtftpDict[i].dictId){
		            				return idtftpDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "idtfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "emails",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": null,          	
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {	
		            		return "<a class='rela_setting' href='javascript:;' data-src='" + data.custno + "'>关联设置</a>";	            
		            	}
		            }
	            ]
	        }
	    });	
		
		var sendData = ["custno"];
    
        grid.addBindEvent(".rela_setting", "click", ["custno"],
				function(data) {
        	content.html('');
    	    name="cabind";
    	    
            $.ajax({
                type: "GET",
                url: "../cust/"+name,
                dataType: "html",
                success: function(res) 
                {    
                    content.html(res);
                    content.ready(function(){               	
                    	  Metronic.initUniform();
                    	  try{      
                    		  Cabind.init(data.custno);
                    	  }catch(e){
                    		  bootbox.alert("子页面加载失败！");
                    	  }
                    });             
                },
                error: function(xhr, ajaxOptions, thrownError)
                {
                },
                async: false
            });
            $("#oprela").modal('show');
		});
	};
	
	//查询
	$('#submit').click(function(){
		grid.setAjaxParam("epcotl_t",$('#epcotl_t').val());
		grid.setAjaxParam("custna_t",$('#custna_t').val());
		grid.setAjaxParam("idtfno_t",$('#idtfno_t').val());
		grid.setAjaxParam("idtftp_t",$('#idtftp_t').select2("val"));
		grid.submitFilter();
	});
	//取消
	$('#cancle').click(function(){
		$('#epcotl_t').val("");
		$('#custna_t').val("");
		$('#idtfno_t').val("");
		$('#idtftp_t').select2("val","");
	});
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()