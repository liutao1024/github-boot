var Qryac=function(){
	var grid = new Datatable();
	var lb_grid;
	var isF = true;
	var subcontent = $('.inbox-content');
	var _itemcd = '';
	var _busino = '';
	
	var statusDict=[{"id":"0","text":"关闭"},{"id":"1","text":"正常"}];
	var itemDict=Sunline.getDict(null, "/item", "itemcd", "itemna");
	var busiDict=Sunline.getDict(null, "/busi", "busino", "busina");
	$("#a_itemcd").select2({data:itemDict});
	$("#a_busino").select2({data:busiDict});
	$("#acctst").select2({data:statusDict});
	
	var formartM = function(value){
		
		if(value.indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var handleTable=function(){
		$('#acctst').select2("val","1");
		var url = Sunline.ajaxPath("inac/qryac");
		grid.setAjaxParam("acctno","");
		grid.setAjaxParam("acctna","");
		grid.setAjaxParam("itemcd","");
		grid.setAjaxParam("acctst","1");
		
		var editForm = function(nRowA){
			console.info($(nRowA[0]).text());
			$("#m_acctno").val($(nRowA[0]).text());
			$("#m_acctna").val($(nRowA[1]).text());
			$('.mod-form .alert').css('display','none');
			$('.mod-form .form-group').removeClass('has-error');
           	$("#editModal").modal('show');
		};
		grid.init({
	        src: $("#inac_ajax"),
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
		            	"data": "acctno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctna",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "itemcd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "ioflag",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		if(data == 'I'){
		            			return '表内';
		            		} else if(data == 'O'){
		            			return '表外';
		            		}
		            	}
		            },{ 
		            	"data": "blncdn",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		if(data=='C'){
		            			return '贷方';
		            		} else if(data=='D') {
		            			return '借方';
		            		} else if(data == 'R'){
		            			return '收方';
		            		} else if(data == 'Z') {
		            			return '轧差';
		            		} else {
		            			return data;
		            		}
		            	}
		            },{ 
		            	"data": "drctbl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "crctbl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data+"");
		            	}
		            },{ 
		            	"data": "opendt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "acctst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<statusDict.length ; i++){
		            			if(data == statusDict[i].id){
		            				return statusDict[i].text;
		            			}
		            		}
		            		return data;
		            	}
		            },{ "data": null,
		            	"width": "10%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data.acctno + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.acctno + "'>注销 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		var lastdn = data.lastdn;
		            		if(lastdn=='C'){
		            			lastdn ='贷方';
		            		} else if(lastdn=='D') {
		            			lastdn ='借方';
		            		} else if(lastdn == 'R'){
		            			lastdn ='收方';
		            		} else if(lastdn == 'Z') {
		            			lastdn ='轧差';
		            		}
		            		var drltbl = formartM(data.drltbl+"");
		            		var crltbl = formartM(data.crltbl+"");
		            		return "<a class='qryLastBill' href='javascript:;' data-src='" + data.acctno
		            		+ ","+ data.lastdt+ ","+ lastdn+ ","+ drltbl+ ","+ crltbl
		            		+ "'>上日余额</a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='qryTrans' href='javascript:;' data-src='" + data.acctno + "'>交易明细 </a>";
		            	}
		            }
	            ]
	        }
	    });
		$(".table-group-actions").append("<button id='add_btn' class='btn btn-sm green table-group-action-submit'><i class='fa fa-plus'></i>&nbsp;内部户开户</button></div>");
		var sendData = ["acctno","acctna","lastdt","lastdn","drltbl","crltbl"];
        grid.bindTableDelete(sendData);
        grid.bindTableEdit(sendData,editForm);
        var lbData = ["acctno","lastdt","lastdn","drltbl","crltbl"];
        grid.addBindEvent(".qryLastBill", "click", lbData,
				function(data) {
			// 显示配置窗口
        	showLastBill(data);
			$("#lastBillModal").modal("show");
		});
        grid.addBindEvent(".qryTrans", "click", ["acctno"],
				function(data) {
			// 显示配置窗口
        	loadQryTransPage(data);
			$("#edit_setting").modal("show");
		});
	    $('#add_btn').click(function(){
	    	$("#a_itemcd").select2("val","");
            $("#a_itemna").val("");
            $("#a_busino").select2("val","");
            $("#a_crcycd").select2("val","01");
	    	$('.add-form .alert').css('display','none');
			$('.add-form .form-group').removeClass('has-error');
			$('.add-form .form-group .help-block').remove();
	    	$("#addModal").modal('show');
	    });
	    $("#a_select").change(function(){
	    	if($("#a_select").val()=="d1"){
	    		$("#d1").show();
	    		$("#d2").hide();
	    		$('#a_itemcd').select2("val","");
	    		$('#a_itemna').val("");
	    	}else if($("#a_select").val()=="d2"){
	    		$("#d2").show();
	    		$("#d1").hide();
	    		$("#a_busino").select2("val","");
	    		$("#a_itemna").val("");
	    	}else{
	    		
	    	}
	    });
	    
	    $('#a_crcycd').select2({
	    	placeholder: "请选择币种",
	    	width:"230px"
	    });
	  //查询
		$('#submit').click(function(){
			grid.setAjaxParam("acctno",$('#acctno').val());
			grid.setAjaxParam("acctna",$('#acctna').val());
			grid.setAjaxParam("itemcd",$('#itemcd').val());
			grid.setAjaxParam("acctst",$('#acctst').select2("val"));
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#acctno').val("");
			$('#acctna').val("");
			$('#itemcd').val("");
			$('#acctst').select2("val","");
		});
	};
	//维护窗口
	var modModal = function(){
		//表单验证
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	m_acctna: {
                    required: true
            	}
            },
            messages: {
                m_acctna: {
                    required: "内部户名称必填"
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
 			input.acctno = $('#m_acctno').val();
 			input.acctna = $('#m_acctna').val();
 			console.info(input);
 			Sunline.ajaxRouter(
         	"inac/update", 
         	 input,
         	"POST",
             function(redata){
         		//success func
         		//console.info("success:",redata);
         		//console.info(redata);
         		if(redata.retCode!='0000'){
         			bootbox.alert(redata.retMsg);
         			return;
         		}
         		var info = '内部户：['+redata.acctno+'],已更名为：['+redata.acctna+']';
         		bootbox.alert(info, function() {
         			$("#m_acctno").val("");
                     $("#m_acctna").val("");
         			$("#editModal").modal('hide');
         			grid.submitFilter();
                 }); 
         	},
         	function(redata){
         		bootbox.alert("交易异常哦，请检查网络设置或重新登录", function() {
         			$("#m_acctno").val("");
                    $("#m_acctna").val("");
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
                a_itemna: {
                    required: true
                }
            },
            messages: {
                a_itemna: {
                    required: "内部户账户名称必填"
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
		
		//科目号失去焦点时查询科目名称
		$('#a_itemcd').on("change", function() {

			if(_itemcd == $("#a_itemcd").select2("val")){
				return;
			}
			var input={};
            input.itemcd =$("#a_itemcd").select2("val")
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/getItemName", 
                	input,
                	"POST",
                    function(redata){
                		if(redata.status=='F' && Sunline.isNull(redata.retMsg)){
                			bootbox.alert("科目号["+input.itemcd+"]不存在");
                			return;
                		}
                         $("#a_itemna").val(redata.itemna);
                	},
                	function(redata){
                		bootbox.alert("网络异常");
                	},
                	"json",
                	false); 
		});
		
		//业务码失去焦点时查询名称
		$('#a_busino').on("change", function() {
			
			if(_busino == $("#a_busino").select2("val")){
				return;
			}
			var input={};
            input.busino =$("#a_busino").select2("val");
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/genbsi", 
                	input,
                	"POST",
                    function(redata){
                		
                		if(redata.status=='F' && Sunline.isNull(redata.retMsg)){
                			bootbox.alert("业务编码["+input.busino+"]不存在");
                			return;
                		}
                		console.info(redata.cplBusiInfo);
                        $("#a_itemna").val(redata.busina);
                	},
                	function(redata){
                		bootbox.alert("网络异常");
                	},
                	"json",
                	false); 
		});
		
		//保存时提交数据
		$('#add_save').click(function(){
			if(!$('#add-form').validate().form()){
				return;
			}
			
			var acctna = $("#a_itemna").val();
			var input={};
			
			if($("#a_select").val()=="d1"){
				 input.itemcd =$("#a_itemcd").select2("val");
			}else if($("#a_select").val()=="d2"){
				 input.busino =$("#a_busino").select2("val");
			}
			
            input.acctna = acctna;
            input.crcycd = $("#a_crcycd").select2("val");
            console.info(input);
            Sunline.ajaxRouter(
                	"inac/add", 
                	 input,
                	"POST",
                    function(redata){
                		console.info(redata);
                		if(redata.retCode!='0000'){
    	         			bootbox.alert(redata.retMsg);
    	         			return;
    	         		}
                		var info = '内部户：['+acctna+'],帐号：['+redata.acctno+']开户完成！';
                		bootbox.alert(info, function() {
                			$("#addModal").modal('hide');
                			grid.submitFilter();
                        }); 
                	},
                	function(redata){
                		bootbox.alert("交易异常哦，请检查网络设置货重新登录", function() {
                			$("#addModal").modal('hide');
                        }); 
                	},
                	"json",
                	false); 
		});
	};
	
	var showLastBill = function(data) {
		var tabData = [data.acctno+"",data.lastdt,data.lastdn+"",data.drltbl+"",data.crltbl+""];
		var dataSet = [tabData];
		console.info(data);
		if(isF){
			lb_grid = $('#lastBill').DataTable({
				data: dataSet,
				paging: false,
				searching: false,
				ordering: false,
				info: false,
				columns: [
				          { title: "内部户帐号" },
				          { title: "上日余额日期" },
				          { title: "上日余额方向CDR" },
				          { title: "上日借方余额" },
				          { title: "上日贷方余额" }
				          ]
			});
			isF = false;
		}else{
			lb_grid.row(0).remove().draw( false );
			lb_grid.row.add(tabData).draw( false );
		}
	}
	
	var loadQryTransPage = function(data) {
		subcontent.html('');
		$.ajax({
			type : "GET",
			url : "../inac/qrytrans",
			dataType : "html",
			success : function(res) {
				subcontent.html(res);
				subcontent.ready(function() {
					qrytrans.init(data)
					Metronic.initUniform();
				});
				;
			},
			error : function(xhr, ajaxOptions, thrownError) {
			},
			async : false
		});
	}

	return {

        //main function to initiate the module
        init: function () {
            handleTable();
            handlerAddmodal();
            modModal();
            
        }
    };	
}();