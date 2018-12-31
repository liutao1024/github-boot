var Cif = function(){
	var acctstDict=Sunline.getDict("acctst");
	var eccttpDict=Sunline.getDict("eccttp");
	var amntcdDict=Sunline.getDict("amntcd");
	var flowtpDict=Sunline.getDict("flowtp");
	var transtDict=Sunline.getDict("transt");
	var prodtpDict=Sunline.getDict("E_PRODTP");		//产品类型
	var yesDict=Sunline.getDict("E_YES___");		//
//	var servnoDict=Sunline.getDict("sernoxl");
	
	var grid = new Datatable();
	var tran_grid = new Datatable();
	var re_grid;
	var isF = true;
	var o_ecctno;
	var o_addr;
	var o_email;
	var o_acctst;
	var isNotF = true;
	
//	$("#servno").select2({
//		data : servnoDict,allowClear:true,
//		formatSelection: function(item){
//			return item.dictName + "[" +item.dictId + "]";
//		},
//	    formatResult: function(item){
//			return item.dictName + "[" +item.dictId + "]";
//		}
//	});
	debugger;
	var servnoDict=Sunline.getDict(null, "/qeplafinfo", "servno", "servna");
	
	$("#servno").select2({data:servnoDict});
	
	$("#ifbica").select2({
		data : yesDict,allowClear:true,
		formatSelection: function(item){
			return item.dictName;
		},
	    formatResult: function(item){
			return item.dictName;
		}
	});
	
	var e_prodtp= function(value){
		for (var i = 0; i < prodtpDict.length; i++) {
            if (value == prodtpDict[i].id) {
              return prodtpDict[i].dictName;
            }
		}
	}
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
	var formartM = function(value){
		value = value.toString();
		if(value.toString().indexOf('.') == -1){
			return value+".00";
		}else if(value.split('.')[1].length == 1) {
			return value+'0';
		} else {
			return value;
		}
	};
	var formartTime = function(time){
		if(time.length == 8){
			return time.substr(0,1)+":"+time.substr(1,2)+":"+time.substr(3,2);
		}
		return time.substr(0,2)+":"+time.substr(2,2)+":"+time.substr(4,2);
	};
	
	var content = $('#edit_load');//配置商户关联信息子页面
	var handlerTable = function(){
		
		var editForm = function(nRowA){
			o_ecctno = $(nRowA[1]).text();
			//o_addr = $(nRowA[6]).text();
			//o_email = $(nRowA[5]).text();
			o_acctst = formartDict(acctstDict,$(nRowA[7]).text());
			$('#m_ecctno').val($(nRowA[1]).text());
			$('#m_ecctna').val($(nRowA[3]).text());
			//$('#m_addr').val($(nRowA[6]).text());
			//$('#m_email').val($(nRowA[5]).text());
			$('#m_acctst').select2("val",formartDict(acctstDict,$(nRowA[7]).text()));
           	$("#editModal").modal('show');
		};
		var url = Sunline.ajaxPath("cust/custinfo");
		grid.setAjaxParam("custac","");
		grid.setAjaxParam("idcard","");
		grid.setAjaxParam("custna","");
		grid.setAjaxParam("phone","");
		grid.setAjaxParam("custtp","1");//标识查询为资管客户信息
		grid.setAjaxParam("servno",$('#servno').select2("val"));
		grid.setAjaxParam("ifbica",$('#ifbica').select2("val"));
		grid.init({
	        src: $("#cif_ajax"),
	        deleteData: sendData,
	        onSuccess: function (grid) {
	            // execute some code after table records loaded
	        	$('.table-container .alert-danger').css("display","none");
	        },
	        onError: function (grid) {
	            // execute some code on network or other general error
	        	//$('.table-container .alert-danger').css("display","none");
	        	console.info("It is error!");
	        },
	        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
	            "ajax": {
	                "url": url, // ajax source
	            },
	            "columns" : [{
			            	"data": "null",
			            	"sortable": false,
			            	"searchable": false,
			            	"width": "2%",
			            	"render": function (data, type, full) {
			            		return '<input type="checkbox" class="checkboxes" value="1"/>';
			            	}
		            	},{     
		            	"data": "ecctno",
		            	"sortable": false,
		            	"searchable": false
		            },{     
		            	"data": "servna",
		            	"sortable": false,
		            	"searchable": false,
//		            	"render" : function(data,type,full){
//		            		for(var i=0 ; i<servnoDict.length ; i++){
//		            			if(data == servnoDict[i].dictId){
//		            				return servnoDict[i].dictName;
//		            			}
//		            		}
//		            		return data;
//		            	}
		            },{     
		            	"data": "custna",
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
		            	"data": "acctst",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<acctstDict.length ; i++){
		            			if(data == acctstDict[i].dictId){
		            				return acctstDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "tranbl",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		return formartM(data);
		            	}
		            },{ 
		            	"data": "ifbica",
		            	"sortable": false,
		            	"searchable": false,
		            	"render" : function(data,type,full){
		            		for(var i=0 ; i<yesDict.length ; i++){
		            			if(data == yesDict[i].dictId){
		            				return yesDict[i].dictName;
		            			}
		            		}
		            		return data;
		            	}
		            },{ 
		            	"data": "opendt",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='outCa' href='javascript:;' data-src='" + data.ecctno+ "'>绑定卡号</a>";
		            	}
		            },{ "data": "null",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='edit' href='javascript:;' data-src='" + data + "'>编辑 </a>";
		            	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='releInfo' href='javascript:;' data-src='" + data.ecctno+ "'>关联产品</a>";
		            	}
		            }
	            ]
	        }
	    });			
		$(".table-group-actions").append("<button id='tran_btn' class='btn btn-sm blue table-group-action-submit'><i class='fa icon-cloud-download'></i>&nbsp;查询交易信息</button></div>");
		$(".table-group-actions").append("<button id='f_btn' class='btn btn-sm lightblue table-group-action-submit'><i class='fa icon-lock'></i>&nbsp;账户冻结明细</button></div>");
		var sendData = ["ecctno"];
        grid.bindTableEdit(sendData,editForm);
        //关联产品
        grid.addBindEvent(".releInfo", "click", sendData,
				function(data) {
			// 显示配置窗口
        	showReleInfo(data);
			$("#releInfoModal").modal("show");
		});
        //绑卡信息
        grid.addBindEvent(".outCa", "click", ["ecctno"],
				function(data) {
        	console.log(data);
        	content.html('');
    	    name="cifOutCa";
    	    
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
                    		  Cabind.init(data.ecctno);
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
            $("#outCaModal").modal('show');
		});   
	};
	
	//关联产品
	var showReleInfo = function(data) {
		var tabData = [];
		var dataSet = [];
		var input={};
		input.ecctno = data.ecctno;
		console.log(input);
    	Sunline.ajaxRouter(
	        	"cust/releinfo",
	        	input,
	        	"POST",
	        	function(redata){
	        		console.log(redata);
	        		if(redata.retCode == '0000'){
	        			var dataList=redata.accsinfo;
	        			for(var i=0 ; i<dataList.length ; i++){
	        				tabData=[dataList[i].prodcd,dataList[i].prodna,formartM(dataList[i].onlnbl),e_prodtp(dataList[i].prodtp)];
		        			dataSet.push(tabData);
	        			}
	        			console.log(dataSet);
	        			if(isF){
	        				re_grid = $('#releInfo').DataTable({
	        					data: dataSet,
	        					paging: false,
	        					searching: false,
	        					ordering: false,
	        					info: false,
	        					columns: [
	        					          { title: "产品编号" },
	        					          { title: "产品名称" },
	        					          { title: "余额" },
	        					          { title: "产品类别" },				   
	        					          ]
	        				});
	        				isF = false;
	        			}else{
	        				re_grid.clear().draw();
	        				for(var i=0;i<dataSet.length;i++){
	        					re_grid.row.add(dataSet[i]).draw(false);
	        				}
	        			}	        				        			
        		} else {
        			bootbox.alert(redata.retMsg);
        		}
	        	},
	        	function(redata){
	        		console.info(redata);
	        		bootbox.alert("交易异常，请检查网络设置或重新登录"); 
	        	},
	        	"json",
	        	false); 
	}
	var handlerForm = function(){
		
		jQuery.validator.addMethod("id_no", function(value, element, param) {
			if((!Sunline.isNull(value)) && param == true){
				return IdCardValidate(value);
			}
			return true;
		}, $.validator.format("证件号码输入有误"));
		$('#cust-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	custac: {
                    required: false
            	},
            	telecd : {
            		required: false,
            		rangelength : [11,11]
            	}
            },
            messages: {
            	checkdate: {
                    required: "对账日期必填"
                },
            	telecd : {
            		rangelength : "手机号码位数不正确"
            	}
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#cust-form')).show();
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
		$('#mod-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	//m_addr: {
                  //  required: true
            	//},
            	//m_email : {
            	//	required: true
            	//},
            	m_acctst: {
                    required: true
                    //isidtp : true
            	}
            },
            messages: {
            	checkdate: {
                    required: "对账日期必填"
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
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            }
		});
		jQuery.validator.addMethod("istruedt", function(value, element, param) { 
			if(param==true){
				console.info($('#trandt_from').val() + value);
				return parseInt($('#trandt_from').val()) > parseInt($('#trandt_to').val());
			}
			return true;
			
		}, $.validator.format("起始日期不能大于结束日期"));
		$('#cust-tran-form').validate({
			errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules:{
            	tran_custac: {
                    required: true
            	},
            	from : {
            		required: false
            		//istruedt : true
            	},
            	to: {
                    required: false
                    //istruedt : true
            	}
            },
            messages: {
            	tran_custac: {
                    required: "电子账户必填"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('#cust-tran-form')).show();
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
	};
	var handlerOperator = function(){
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN'
            });
            //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        }
		//初始化select2
		$("#m_acctst").select2({
			data : acctstDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			}
		});
		$("#eccttp").select2({
			data : eccttpDict,
			formatSelection: function(item){
				return item.dictName;
			},
		    formatResult: function(item){
				return item.dictName;
			},
			width:"80% !important"
		});
		//查询
		$('#submit').click(function(){
			if(!$('#cust-form').validate().form()){
				return;
			}
			grid.setAjaxParam("ecctno",$('#custac').val());
			grid.setAjaxParam("custna",$('#custna').val());
			grid.setAjaxParam("idtfno",$('#idcard').val());
			grid.setAjaxParam("cardno",$('#cardno').val());	//20160928 新增查询条件：绑定卡号
			grid.setAjaxParam("servno",$('#servno').select2("val"));
			grid.setAjaxParam("ifbica",$('#ifbica').select2("val"));
			var idtftp = '';
			if($('#idcard').val() != ""){
				idtftp = "10";
			}
			grid.setAjaxParam("idtftp",idtftp);
			grid.setAjaxParam("teleno",$('#phone').val());
			grid.setAjaxParam("custtp","1");//标识查询为资管客户信息
			grid.submitFilter();
		});
		//取消
		$('#cancle').click(function(){
			$('#custac').val("");
			$('#custna').val("");
			$('#idcard').val("");
			$('#phone').val("");
			$('#servno').select2("val","");
			$('#ifbica').select2("val","");
			$('#cardno').val("");	//20160928 新增查询条件：绑定卡号
		});
		$('#tran_cancle').click(function(){
			$('#trandt_from').val("");
			$('#trandt_to').val("");
		});
		//修改保存
		$('#m_save').click(function(){
			if(!$('#mod-form').validate().form()){
				return;
			}
			var ecctno = $('#m_ecctno').val();
			//var address = $('#m_addr').val();
			//var email = $('#m_email').val();
			var acctst = $('#m_acctst').select2("val");
			//if(address == o_addr && email == o_email && acctst == o_acctst) {
			//	return ;
			//}
			if(acctst == o_acctst) {
				return ;
			}
			var input = {};
			input.custac = ecctno;
			//input.addres = address;
			//input.emails = email;
			input.acctst = acctst;
			$("#myModal").modal('show');
			Sunline.ajaxRouter(
		         	"cust/update", 
		         	 input,
		         	"POST",
		             function(redata){
		         		//success func
		         		//console.info("success:",redata);
		         		if(redata.retCode!='0000'){
		         			bootbox.alert(redata.retMsg);
		         			return;
		         		}
		         		$("#myModal").modal('hide');
		         		bootbox.alert("电子账户["+ecctno+"]信息维护成功！",function(){
		         			$('#m_ecctno').val("");
		        			$('#m_ecctna').val("");
		        			//$('#m_addr').val("");
		        			//$('#m_email').val("");
		        			$('#m_acctst').select2("val","");
		                   	$("#editModal").modal('hide');
		                   	grid.submitFilter();
		         		});
		         	},
		         	function(redata){
		         		//console.info("error:",redata);
		         		$("#myModal").modal('hide');
		         		bootbox.alert("网络异常");
		         	},
		         	"json",
		         	true);
		});
		
		//交易明细
		$('#tran_btn').click(function(){
			
			var rows = grid.getSelectedRows();
			if(rows.length != 1){
				bootbox.alert("请选择一条信息");
				return;
			}
			var ecctno = $(rows[0].children()[1]).text();
			$('#tran_custac').val(ecctno);
			var url1 = Sunline.ajaxPath("cust/cutrif");
			console.info(isNotF);
			if(isNotF){
				tran_grid.setAjaxParam("ecctno",ecctno);
				tran_grid.setAjaxParam("from","");
				tran_grid.setAjaxParam("to","");
				tran_grid.setAjaxParam("eccttp","");
				tran_grid.setAjaxParam("crcycd","01");
				tran_grid.init({
			        src: $("#cif_tran_ajax"),
			        deleteData: sendData,
			        onSuccess: function (grid) {
			            // execute some code after table records loaded
			        	$('.cif_tran_ajax_wrapper .alert-danger').css("display","none");
			        },
			        onError: function (grid) {
			            // execute some code on network or other general error
			        	//$('.cif_tran_ajax_wrapper .alert-danger').css("display","none");
			        	//console.info("It is error!");
			        },
			        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
			            "ajax": {
			                "url": url1, // ajax source
			            },
			            "columns" : [{
				            	"data": "trandt",
				            	"sortable": false,
				            	"searchable": false
			            	},{     
				            	"data": "trantm",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		return formartTime(data);
				            	}
				            },{ 
				            	"data": "remark",
				            	"sortable": false,
				            	"searchable": false
				            },{     
				            	"data": "tranam",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		return formartM(data);
				            	}
				            },{ 
				            	"data": "chnlno",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "avalbl",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		return formartM(data);
				            	}
				            },{ 
				            	"data": "smryds",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "jnlseq",
				            	"sortable": false,
				            	"searchable": false
				            },{ 
				            	"data": "flowtp",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		 for (var i = 0; i < flowtpDict.length; i++) {
				                          if (flowtpDict[i].id == data) {
				                            return flowtpDict[i].dictName;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "amntcd",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		 for (var i = 0; i < amntcdDict.length; i++) {
				                          if (amntcdDict[i].id == data) {
				                            return amntcdDict[i].dictName;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "transt",
				            	"sortable": false,
				            	"searchable": false,
				            	"render" : function(data,type,full){
				            		 for (var i = 0; i < transtDict.length; i++) {
				                          if (transtDict[i].id == data) {
				                            return transtDict[i].dictName;
				                          }
				                        }
				            	    return data;
				            	}
				            },{ 
				            	"data": "prcsid",
				            	"sortable": false,
				            	"searchable": false
				            }
			            ]
			        }
			    });
				var sendData = ["transq"];
				isNotF = false;
			} else {
				console.info(tran_grid.gettableContainer());
				console.info(tran_grid.getDataTable());
				console.info(tran_grid.getTable());
				tran_grid.setAjaxParam("ecctno",ecctno);
				tran_grid.setAjaxParam("from",$('#trandt_from').val());
				tran_grid.setAjaxParam("to",$('#trandt_to').val());
				tran_grid.setAjaxParam("eccttp","");
				tran_grid.setAjaxParam("crcycd","01");
				tran_grid.submitFilter();
			}
			$("#tranModal").modal('show');
		});
		
		//交易查询
		$('#tran_qry').click(function(){
			if(!$('#cust-tran-form').validate().form()){
				return;
			}
			tran_grid.setAjaxParam("ecctno",$('#tran_custac').val());
			tran_grid.setAjaxParam("from",$('#trandt_from').val());
			tran_grid.setAjaxParam("to",$('#trandt_to').val());
			tran_grid.setAjaxParam("eccttp","");
			tran_grid.setAjaxParam("crcycd","01");
			tran_grid.submitFilter();
		});
	};
	
	return {
		init : function(){
			handlerTable();
			handlerForm();
			handlerOperator();
		}
	}
}()