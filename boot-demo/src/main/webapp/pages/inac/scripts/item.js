var Item = function(){
	
	var isFlagDict = Sunline.getDict("isFlag");		//是否标志
	var itemtpDict=Sunline.getDict("E_ITEMTP");		//科目项目类型
	var ioFlagDict=Sunline.getDict("E_IOFLAG");		//表内外标志
	var blncdnDict=Sunline.getDict("E_BLNCDN");		//余额方向CDR
	var aslbtpDict=Sunline.getDict("E_ASLBTP");		//资产负债类型
	var itemrgDict=Sunline.getDict("E_ITEMRG");		//科目来源分类
	var ittypeDict=Sunline.getDict("E_ITTYPE");		//科目类别
	var proftpDict=Sunline.getDict("E_PROFTP");		//损益类别
	//TODO busino = 。。。
//	console.info(isFlagDict);
	var formartItem = function(dict,value){
		for(var i= 0 ; i<dict.length;i++){
			if(value == dict[i].text){
				return dict[i].dictId;
			}
			if(value == dict[i].dictId){
				return dict[i].text;
			}
			return value;
		}
	}
	var grid = new Datatable();
	var handlerDataTable = function(){
		var url = Sunline.ajaxPath("inac/item");
		 $("#m_dtittg").select2({data:isFlagDict,formartResult : function(item){return item.text;}});
		 $("#m_itemtp").select2({data:itemtpDict,formartResult : function(item){return item.text;}});
		 $("#m_ioflag").select2({data:ioFlagDict,formartResult : function(item){return item.text;}});
		 $("#m_blncdn").select2({data:blncdnDict,formartResult : function(item){return item.text;}});
		 $("#m_aslbtp").select2({data:aslbtpDict,formartResult : function(item){return item.text;}});
		 $("#m_itemrg").select2({data:itemrgDict,formartResult : function(item){return item.text;}});
		 $("#m_ittype").select2({data:ittypeDict,formartResult : function(item){return item.text;}});
		 $("#m_proftp").select2({data:proftpDict,formartResult : function(item){return item.text;}});
		var editForm = function(nRowA){
			console.info($(nRowA[10]).text());
			$("#m_itemcd").val($(nRowA[0]).text());
			$("#m_itemna").val($(nRowA[1]).text());
			$("#m_itemlv").val($(nRowA[2]).text());
			$("#m_dtittg").select2("val",formartItem(isFlagDict,$(nRowA[3]).text()));
			$("#m_itemtp").select2("val",formartItem(itemtpDict,$(nRowA[10]).text()));
			$("#m_ioflag").select2("val",formartItem(ioFlagDict,$(nRowA[5]).text()));
			$("#m_blncdn").select2("val",formartItem(blncdnDict,$(nRowA[4]).text()));
			$("#m_aslbtp").select2("val",formartItem(aslbtpDict,$(nRowA[6]).text()));
			$("#m_itemrg").select2("val",formartItem(itemrgDict,$(nRowA[9]).text()));
			$("#m_ittype").select2("val",formartItem(ittypeDict,$(nRowA[7]).text()));
			$("#m_proftp").select2("val",formartItem(proftpDict,$(nRowA[8]).text()));
			
			
			$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
           	$("#editModal").modal('show');
		}
		grid.init({
	        src: $("#item_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{ 
		            	"data": "itemcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "itemna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "itemlv",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "dtittg",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function ( data , type , full) {
		            		for (var i = 0; i < isFlagDict.length; i++) {
								if (isFlagDict[i].id == data) {
									return isFlagDict[i].text;
								}
							}
		            	}
		            },{ 
		            	"data": "blncdn",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		for (var i = 0; i < blncdnDict.length; i++) {
								if (blncdnDict[i].id == data) {
									return blncdnDict[i].text;
								}
							}
		            	}
		            },{ 
		            	"data": "ioflag",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		for (var i = 0; i < ioFlagDict.length; i++) {
								if (ioFlagDict[i].id == data) {
									return ioFlagDict[i].text;
								}
							}
		            	}
		            },{ 
		            	"data": "aslbtp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		for (var i = 0; i < aslbtpDict.length; i++) {
								if (aslbtpDict[i].id == data) {
									return aslbtpDict[i].text;
								}
							}
		            	}
		            },{ 
		            	"data": "ittype",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		for (var i = 0; i < ittypeDict.length; i++) {
								if (ittypeDict[i].id == data) {
									return ittypeDict[i].text;
								}
							}
		            	}

		            },{ 
		            	"data": "proftp",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		for (var i = 0; i < proftpDict.length; i++) {
								if (proftpDict[i].id == data) {
									return proftpDict[i].text;
								}
							}
		            	}

		            },{ 
		            	"data": "busino",
		            	"sortable": false,
		            	"searchable": false
		            },{ "data": null,
		            	"width": "10%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.role_id + "'>编辑 </a>";
		            	}
		            }
//		            { 
//		            	"data": null,
//		            	"sortable": false,
//		            	"searchable": false,
//		            	"render": function (data, type, full) {
//		            		return "<a class='delete' href='javascript:;' data-src='" + data.role_id + "'>删除 </a>";
//		            	}
//		            }
	            ]
	        }
	    });
		$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;新增科目</button></div>");
		var sendData = ["itemcd"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        
        $('#add_btn').click(function(){
	    	$("#a_itemcd").val("");
            $("#a_itemna").val("");
            $("#a_dtittg").select2({data:isFlagDict});
            $("#a_itemtp").select2({data:itemtpDict});
            $("#a_ioflag").select2({data:ioFlagDict});
            $("#a_blncdn").select2({data:blncdnDict});
            $("#a_aslbtp").select2({data:aslbtpDict});
            $("#a_itemrg").select2({data:itemrgDict});
            $("#a_ittype").select2({data:ittypeDict});
            $("#a_proftp").select2({data:proftpDict});
	    	$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
	    	$("#addModal").modal('show');
	    });
	}
	//维护窗口
	var modModal = function(){
		//表单验证
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	m_itemna: {
                    required: true
            	}
            },
            messages: {
                m_itemna: {
                    required: "科目名称必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#mod-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            submitHandler: function (form) {
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
           
		});
		
		
		 $('#m_save').click(function(){
			 if(!$('#mod-form').validate().form()){
					return;
			}
		
 			var input = {};
 			input.itemcd = $('#m_itemcd').val();
 			input.itemna = $('#m_itemna').val();
// 			input.itemtp = $("#m_itemtp").select2("val");
 			console.info(input);
 			Sunline.ajaxRouter(
         	"inac/updateItem", 
         	 input,
         	"POST",
             function(redata){
         		if(redata.retCode!='0000'){
         			bootbox.alert(redata.retMsg);
         			return;
         		}
         		var info = '修改成功';
         		bootbox.alert(info, function() {
         			$("#m_itemcd").val("");
                    $("#m_itemna").val("");
         			$("#editModal").modal('hide');
         			grid.submitFilter();
                 }); 
         	},
         	function(redata){
         		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
         			$("#m_itemcd").val("");
                    $("#m_itemna").val("");
         			$("#editModal").modal('hide');
                 }); 
         	},
         	"json",
         	false); 
 		});
		
	}
	
	//新增内部户窗口
	var handlerAddmodal = function(){
		
		var add_form = $('#add-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	a_itemcd: {
                    required: true
                },
                a_itemna: {
                    required: true
                }
            },
            messages: {
            	a_itemcd: {
                    required: "科目号必填"
                },
                a_itemna: {
                    required: "科目名称必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#add-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
		});
		
		//保存时提交数据
		$('#add_save').click(function(){
			if(!$('#add-form').validate().form()){
				return;
			}
			var itemna = $("#a_itemna").val();
			var input={};
            input.itemcd =$("#a_itemcd").val();
            input.itemna = itemna;
            input.itemlv = $('#a_itemlv').val();
            input.dtittg = $('#a_dtittg').val();
            input.itemtp = $('#a_itemtp').val();
            input.ioflag = $('#a_ioflag').val();
            input.blncdn = $('#a_blncdn').val();
            input.aslbtp = $('#a_aslbtp').val();
            input.itemrg = $('#a_itemrg').val();
            input.ittype = $('#a_ittype').val();
            input.proftp = $('#a_proftp').val();
            input.busino = $('#a_busino').val();
            input.upitem = $('#a_upitem').val();
            
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/addItem", 
                	 input,
                	"POST",
                    function(redata){
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '科目：['+itemna+'],科目号：['+redata.itemcd+']新增完成！';
                		bootbox.alert(info, function() {
                			$("#a_itemcd").val("");
                            $("#a_itemna").val("");
                            $("#a_itemtp").select2("val");
                			$("#addModal").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
                			$("#a_itemcd").val("");
                            $("#a_itemna").val("");
                            $("#a_itemtp").select2("val");
                			$("#addModal").modal('hide');
                        }); 
                	},
                	"json",
                	false); 
		});
	};
	
	return {
		init : function(){
			handlerDataTable();
			handlerAddmodal();
            modModal();
		}
	}
}()