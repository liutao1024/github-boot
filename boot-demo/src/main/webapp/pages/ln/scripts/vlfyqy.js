var Vlfyqy = function(){
	var grid = new Datatable();
	var isF = false;
	
	/*$("#prodcd").select2({
		width : "100%",
		data : prodcdDict,
		formatSelection : function(item) {
			return item.dictName;
		},
		formatResult : function(item) {
			return item.dictName;
		}
	});*/
	var _formartDict = function(dict){
		$.each(dict, function(i, n){
	        n.text=n['dictName']+"["+n['dictId']+"]";
	        n.id=n['dictId'];            
	        });
		
		roleDict = dict;
		return roleDict;
		}
	
	var xmhktyDict = [{dictId:'1',dictName:'借记卡'},
	                /*{dictId:'2',dictName:'代偿户'},*/
	                {dictId:'3',dictName:'氧气账户'}];
	
	var formartDict = function(dict,value){
		for(var i=0 ; i<dict.length ; i++){
			if(value == dict[i].dictId){
				return dict[i].dictName;
			}
			if(value == dict[i].dictName){
				return dict[i].dictId;
			}
		}
		return value;
	};
	$("input[name='xmhkty']").select2({data:_formartDict(xmhktyDict),allowClear:true});
     
	var handlerTable = function(){		
		var editForm = function(nRowA){		
		};
		var url = Sunline.ajaxPath("ln/vlfyqy");
		var yxSendData = ["lncfno"];
		//grid.setAjaxParam("selfag","N");
		//grid.setAjaxParam("prftdt","");
		grid.setAjaxParam("custna","");
		grid.setAjaxParam("idtfno","");
		grid.setAjaxParam("teleno","");	
		grid.init({
	        src: $("#yx_ajax"),
	       
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
		            	"data": "custna",//custna
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "idtfno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "teleno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "lncfno",
		            	"sortable": false,
		            	"searchable": false					
		            },{  
		            	"data": "tophno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "termno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "matudt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "totamo",
		            	"sortable": false,
		            	"searchable": false		            	
		            }
		            
		           ,{ 
		            	"data": "xmhkty",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		if(Sunline.isNull(data))
		            			{return _formartDict(xmhktyDict)[0].text;}
		           
		            		for (var i = 0; i < _formartDict(xmhktyDict).length; i++) {
								if (_formartDict(xmhktyDict)[i].id == data) {
									return _formartDict(xmhktyDict)[i].text;
								}
							}
							return data;
						
		            	}
		            },
		            {
						"data" : null,
						"sortable" : false,
						"searchable" : false,
						"render" : function(data, type, full) {
							return "<a class='edit' href='javascript:;' data-src='"
									+ data.lncfno																	
								    + "'>编辑 </a>";
						}
					}
		       
	            ]
	        }
	    });		
		
		
		grid.bindTableEdit(yxSendData,function(nRowA){
			
			$("input[name='lncfno']").attr("readOnly",true);//货币代号		
			$("input[name='lncfno']").val($(nRowA[3]).text());	
			$("input[name='xmhkty']").val($(nRowA[8]).text().substring($(nRowA[8]).text().indexOf("[")+1,$(nRowA[8]).text().indexOf("]"))).trigger("change");		
			
			
			$("#edityxModal").modal('show');
			$("#edityxModal").on("hide.bs.modal", function() {
				$(".alert-success",$('form', $("#edityxModal"))).hide();
	        	$('.alert-danger', $('form', $("#edityxModal"))).hide(); 
	        	$(".msg",$('form', $("#edityxModal"))).text("");
				grid.submitFilter();
			});
		})
		/*var sendData = [""];
		var editForm = function(){};
        grid.bindTableEdit(sendData,editForm);*/ 
	};
	$("button[name='cancle']",$("#cust-form")).click(function(){
		$("input", $("#cust-form")).val("").trigger('change');
	});
	$("#btn_save_evnt").click(function(){
		$('form', $("#edityxModal")).submit();
	});
	var parsValid = Sunline.getValidate($('form', $("#edityxModal")),
			function() {
				var data = {};
				$.each($("input", $("#edityxModal")), function(i, n) {
					if (n.name != undefined&&n.name!=""&&n.name!=null) {
						data[n.name] = n.value;
					}
				});
				
				Sunline.ajaxRouter("ln/vlchmd", 
					data
				, 'post', function(ret) {
                      if(ret.ret==="success"){              
                    	   $(".alert-success",$('form', $("#edityxModal"))).show();
                    	   $('.alert-danger', $('form', $("#edityxModal"))).hide(); 		   
                      }else{                        	 
	                   	   $(".alert-success",$('form', $("#edityxModal"))).hide();
	                   	   $('.alert-danger', $('form', $("#edityxModal"))).show();                        	  
                      }
                      $(".msg",$('form', $("#edityxModal"))).text(ret.msg);
				});

			}
//			{
//				 depttm:{required : true},
//				 defncd:{maxlength : 20}	
//			}
			);
	$('#submit').click(function(){
		if (!$('#yx_ajax').validate().form()) {
			return;
		}
		//grid.setAjaxParam("selfag","Y");
		console.info($('#custna').val());
		grid.setAjaxParam("custna",$('#custna').val());
		grid.setAjaxParam("idtfno",$('#idtfno').val());
		grid.setAjaxParam("teleno",$('#teleno').val());		
		grid.submitFilter();
	});
		
	
	return {
		init : function(){
			handlerTable();
		}
	}
}()