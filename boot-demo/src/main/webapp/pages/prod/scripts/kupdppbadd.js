var kupdppbadd=function(){
	var prodcd;//通用全局变量
	var tabindex=1;
	var editModal=$("#editModal");
	var ajaxdata = {//ajax请求参数
		dppbdata : {},
		custdata : [],
		brchdata : [],
		termdata : [],
		postdata : [],
		drawdata : [],
		matudata : [],
		dfintrdata : [],
		postplandata : [],
		drawplandata : [],
		intrdata : [],
		acctdata : [],
		actpdata : []
	};
	var ajaxflag = {//ajax请求参数标记，未添加的的数据不提交
			dppbdata : false,
			custdata : false,
			brchdata : false,
			termdata : false,
			postdata : false,
			drawdata : false,
			matudata : false,
			dfintrdata : false,
			postplandata : false,
			drawplandata : false,
			intrdata : false,
			acctdata : false,
			actpdata : false
		};		      
     /**
      * 表单验证封装
      * editform 需要验证的表单	// $("#kupdppb");
      * submitFn 表单提交方法
      * rule 字段验证规则
      */
	var Valid = function ( editform, submitFn, rule) {	
		var editerror = $('.alert-danger', editform);
		var editsuccess = $('.alert-success', editform);
		var validator = editform.validate({
				errorElement : 'span',
				errorClass : 'help-block help-block-error',
				focusInvalid : false,
				ignore : "",
				rules : rule,
				invalidHandler : function (event, validator) {
					editsuccess.hide();
					editerror.show();
					Metronic.scrollTo(editerror, -200);
				},
				errorPlacement : function (error, element) {
					element.parent().append(error);
				},
				highlight : function (element) {
					$(element).closest('.form-group').removeClass("has-success").addClass('has-error');
				},
				success : function (label, element) {
					var icon = $(element).parent('.input-icon').children('i');
					$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
					icon.removeClass("fa-warning").addClass("fa-check");
				},
				submitHandler : function (form) {
					editerror.hide();
					editsuccess.hide();
					submitFn();
				}
			});				
		return {
			resetForm : function () {
				validator.resetForm();
			},
			validator : validator,
			editform : editform
		}
	};
	var tabTitleFlag=true;//已验证主表标示
	var addTabTitle=function(){//添加tab标题头
		$(".nav-tabs",editModal).append(
				             "<li class='tab_2'>"+
								"<a href='#tab_2' data-toggle='tab'>机构控制 </a>"+
							 "</li>"+
							 "<li class='tab_3'>"+
								"<a href='#tab_3' data-toggle='tab'>账户类型控制</a>"+
							 "</li>"+
							 "<li class='tab_4'>"+
								"<a href='#tab_4' data-toggle='tab'>开户控制</a>"+
							 "</li>"+
							 "<li class='tab_5'>"+
								"<a href='#tab_5' data-toggle='tab'>存期控制  </a>"+
							 "</li>"+
							 "<li class='tab_6'>"+
								"<a href='#tab_6' data-toggle='tab'>到期控制 </a>"+
							 "</li>"+
							 "<li class='tab_7'>"+
								"<a href='#tab_7' data-toggle='tab'>存入控制  </a>"+
							 "</li>"+
							 "<li class='tab_8'>"+
								"<a href='#tab_8' data-toggle='tab'>存入计划</a>"+
							 "</li>"+
							 "<li class='tab_9'>"+
								"<a href='#tab_9' data-toggle='tab'>支取控制 </a>"+
							 "</li>"+
							 "<li class='tab_10'>"+
								"<a href='#tab_10' data-toggle='tab'>违约支取利息定义</a>"+
							 "</li>"+
							 "<li class='tab_11'>"+
								"<a href='#tab_11' data-toggle='tab'>支取计划 </a>"+
							 "</li>"+
							 "<li class='tab_12'>"+
								"<a href='#tab_12' data-toggle='tab'>利息利率</a>"+
							 "</li>"+
							 "<li class='tab_13'>"+
								"<a href='#tab_13' data-toggle='tab'>核算定义 </a>"+
							 "</li>"
								);
	};
	//验证规则定义
	var dppbrule={     
		    prodcd : {required : true , maxlength:10,
		    	remote: {//异步验证
			        url: Sunline.ajaxPath("prod/chprod"),     //后台处理程序
			        type: "post",               //数据发送方式
			        dataType: "json",           //接受数据格式   
			        data: {                     //要传递的数据
			            q_prodcd: $("#prodcd").val()
			        }
		        }
	        },   
		    prodtx : {required : true, maxlength:100},
		    pdmktx : {maxlength : 200},
		    efctdt : {required : true , maxlength:8},
		    inefdt : {required : true , maxlength:8},
		    pddpfg : {required : true , maxlength:1},
		    prodtp : {required : true , maxlength:1},
		    pdcrcy : {required : true , maxlength:3},
		    brchfg : {required : true , maxlength:2},
		    custfg : {required : true , maxlength:2},
		    debttp : {required : true , maxlength:2},
		    mginfg : {required : true , maxlength:2},
		    prodst : {required : true , maxlength:2}
		};
	 var custrule={
			 crcycd:{required : true},
	         srdpam:{ maxlength:21 , money_gteq0 : true}
	         };
	 var brchrule={
			 brchno:{required : true , maxlength:10},
			 crcycd:{required : true}
			 };
	 var termrule={
			 depttm:{required : true , maxlength:3},
			 crcycd:{required : true}
			 };
	 var maturule={
			 crcycd:{required : true},
			 trprod:{maxlength : 10},
			 matupd:{maxlength : 6}
			  };
	 var postrule={
			crcycd:{required : true},
			miniam:{maxlength : 21 , number : true , money_gteq0 : true},
			maxiam:{maxlength : 21 , number : true , money_gteq0 : true},
			minitm:{maxlength : 19 , number : true},
			maxitm:{maxlength : 19 , number : true}
	        };
	 var postplanrule={
			 crcycd:{required : true},
			 maxibl:{maxlength : 21 , number : true},
			 adjtpd:{maxlength : 8 },
			 svlepd:{maxlength : 8 },
			 maxisp:{maxlength : 19 , number : true},
			 svletm:{maxlength : 19 , number : true}
	         };
	 var drawrule={
			 crcycd:{required : true},
			 drmiam:{maxlength : 21 , number : true , money_gteq0 : true},
			 drmxam:{maxlength : 21 , number : true , money_gteq0 : true},
			 drmitm:{maxlength : 19 , number : true},
			 drmxtm:{maxlength : 19 , number : true}
	 };	
	 var dfintrrule={
			 crcycd:{required : true},
			 drintp:{required : true},
			 ingpcd:{required : true , maxlength : 8},
			 intrtp:{required : true},
			 adincd:{maxlength : 20},
			 insrwy:{maxlength : 1},
			 bsincd:{maxlength : 20},
			 bsinrl:{maxlength : 2},
			 bsinef:{maxlength : 01},
			 dtsrcd:{maxlength : 20},
			 dtlvrl:{maxlength : 2},
			 dtlvef:{maxlength : 1},
			 amlvcd:{maxlength : 20},
			 amlvrl:{maxlength : 2},
			 amlvef:{maxlength : 1},
			 drdein:{maxlength : 1}
			 
	 };	
	 var drawplanrule={
			 crcycd:{required : true}
	 };
	 var intrrule={
			 crcycd:{required : true},
			 intrtp:{required : true},
			 txbefr:{maxlength : 8},
			 intrcd:{maxlength : 20},
			 fvrblv:{maxlength : 8},
			 taxecd:{maxlength : 20}	         
	 };
	 var acctrule={
			 depttm:{required : true},
			 acctcd:{maxlength : 20}	         
	 };
	 var actprule={
		cacttp:{required : true , maxlength : 10},
		acolfg:{maxlength : 1},
		dcmtfg:{maxlength : 80},
		dcmttp:{maxlength : 3},
		sactcn:{maxlength : 80},
		dcmtcn:{maxlength : 80}
	 };	
	 
	/*
	 * 产品基础属性表表单验证  1
	 */			
	var dppbValid =new Valid($("#kupdppb"),function() { 	   	    
		var data={};
	   	 $.each($(".form-value",$("#kupdppb")),function(i,n){//循环取数据
	   		 data[n.name]=n.value;
	   	 });
	   	ajaxdata['dppbdata']=data;
	   	prodcd=ajaxdata.dppbdata.prodcd;
	   	$(".prodcd-value").val(prodcd);//prodcd值
	  
	   	if(tabTitleFlag){
		addTabTitle();//主表不通过验证其他不可用
		tabTitleFlag=false;
	   	}	   	   	
		ajaxflag.dppbdata=true;//标记data可用
		$("input",$("#kupdppb")).attr('readOnly',true);	   			   	 		 	
	   	$('.tab_'+tabindex,editModal).removeClass("active");
		$("a",$('.tab_'+tabindex,editModal)).attr("style","color:green");
		tabindex++;
		$('.tab_'+tabindex,editModal).addClass("active");
		
	},dppbrule);	
	//产品机构控制表表单验证	2
	var brchValid=new Valid($("#kupdppbbrch") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbbrch")),function(i,n){
	   		 if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	   		
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['brchdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.brchno==n.brchno&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.brchno+","+data.crcycd;
			ajaxdata['brchdata'].push(data);
			  $("tbody",$("#table_brch")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("brchDict",data.brchno)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.brchno+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
				ajaxflag.brchdata=true;			   	
	   };
	}, brchrule);
	 
		//产品账户类型控制表表单验证 3		
		var actpValid=new Valid($("#kupdppbactp") , function(){
			var data={};//表单数据
		   	 $.each($(".form-value",$("#kupdppbactp")),function(i,n){
		   		 if(n.name!=undefined){
		   			 data[n.name]=n.value;
		   		 }	
		   	 });
		    var bflag=true;//判断数据是否存在
		   	 $.each(ajaxdata['actpdata'],function(i,n){
		   		 if(data.prodcd==n.prodcd&&data.cacttp==n.cacttp){
		   			 bootbox.alert("数据已存在");
		   			 bflag=false;
		   			 return bflag;
		   		 }
		   	 })
		   if(bflag){
			    data["datasrc"]=data.prodcd+","+data.cacttp;//主键标记
				ajaxdata['actpdata'].push(data);//将数据存入数组
				  $("tbody",$("#table_actp")).append(//表格新增一条
						  '<tr>'+
						     '<td>'+data.prodcd+'</td>'+
						     '<td>'+data.cacttp+'</td>'+
						     '<td>'+kupdppbdict.getDictText("acolfgDict",data.dcmtfg)+'</td>'+
						     '<td>'+data.sactcn+'</td>'+
						     '<td>'+kupdppbdict.getDictText("acolfgDict",data.acolfg)+'</td>'+
						     '<td>'+kupdppbdict.getDictText("dcmttpDict",data.dcmttp)+'</td>'+
						     '<td>'+data.dcmtcn+'</td>'+
						     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.cacttp +  "'>删除 </a>"+'</td>'+
						  '<tr>'   	  
				  ); 			
				  ajaxflag.actpdata=true;	//数据可提交标记	   	
		   };	
		}, actprule);		
		 								
		//产品开户控制表表单验证	4		
		var custValid=new Valid($("#kupdppbcust") , function(){
             var data={};
		   	 $.each($(".form-value",$("#kupdppbcust")),function(i,n){
		   		 if(n.name!=undefined){
		   			 data[n.name]=n.value;
		   		 }	
		   	 });
		   	 
		   	 var bflag=true;
		   	 $.each(ajaxdata['custdata'],function(i,n){
		   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
		   			 bootbox.alert("数据已存在");
		   			 bflag=false;
		   			 return bflag;
		   		 }
		   	 })
		   if(bflag){
			    data["datasrc"]=data.prodcd+","+data.cacttp;
			    ajaxdata['custdata'].push(data);
				  $("tbody",$("#table_cust")).append(
						  '<tr>'+
						     '<td>'+data.prodcd+'</td>'+
						     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
						     '<td>'+kupdppbdict.getDictText("madtbyDict",data.madtby)+'</td>'+
						     '<td>'+kupdppbdict.getDictText("onlyfgDict",data.onlyfg)+'</td>'+
						     '<td>'+data.srdpam+'</td>'+
						     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.cacttp +  "'>删除 </a>"+'</td>'+
						  '<tr>'   	  
				  ); 			
				  ajaxflag.custdata=true;		   	
		   };		   						
		}, custrule);

		 var inArray = function(arr, item) { 
             for (var i = 0; i < arr.length; i++) { 
                 if (arr[i] == item) { 
                     return true; 
                 } 
             } 
             return false; 
           };
		
           var depttmArray=["901","902","903","904","905","906","907","908","909"];
           
		$("input[name='depttm']",$("#kupdppbterm")).on("select2-close",function(){
			if(inArray(depttmArray,$("input[name='depttm']",$("#kupdppbterm")).select2("val"))){
				$("input[name='deptdy']",$("#kupdppbterm")).val("").attr("readOnly",false);
			}else{
				$("input[name='deptdy']",$("#kupdppbterm")).val("").attr("readOnly",true);
			}
		});
	//产品存期控制表表单验证	5			
	var termValid=new Valid($("#kupdppbterm") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbterm")),function(i,n){
	   		 if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
		 var bflag=true;
	   	 $.each(ajaxdata['termdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.depttm==n.depttm){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.depttm+","+data.crcycd+","+data.deptdy;
		    ajaxdata['termdata'].push(data);
			  $("tbody",$("#table_term")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("depttmDict",data.depttm)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+data.deptdy+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.depttm +","+data.crcycd + ","+data.deptdy+  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.termdata=true;		   	
	   };	   	 		
	},termrule);

	//产品到期控制表表单验证	6	
	var matuValid=new Valid($("#kupdppbmatu") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbmatu")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['matudata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd;
		    ajaxdata['matudata'].push(data);
			  $("tbody",$("#table_matu")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("festdlDict",data.festdl)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("delyfgDict",data.delyfg)+'</td>'+
					     '<td>'+data.matupd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("trdpfgDict",data.trdpfg)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("trdpfgDict",data.trpdfg)+'</td>'+
					     '<td>'+data.trprod+'</td>'+
					     '<td>'+kupdppbdict.getDictText("trinwyDict",data.trinwy)+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.matudata=true;		   	
	   };	 
	}, maturule);
		
	//产品存入控制表表单验证	7	
	var postValid=new Valid($("#kupdppbpost") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbpost")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['postdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd;
		    ajaxdata['postdata'].push(data);
			  $("tbody",$("#table_post")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("posttpDict",data.posttp)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("postwyDict",data.postwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("amntwyDict",data.amntwy)+'</td>'+
					     '<td>'+data.miniam+'</td>'+
					     '<td>'+data.maxiam+'</td>'+
					     '<td>'+kupdppbdict.getDictText("timewyDict",data.timewy)+'</td>'+
					     '<td>'+data.minitm+'</td>'+
					     '<td>'+data.maxitm+'</td>'+
					     '<td>'+kupdppbdict.getDictText("acolfgDict",data.detlfg)+'</td>'+
					     '<td>'+data.svrule+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.postdata=true;	
	   };	 		
	}, postrule);
	
	//产品存入计划表单验证   8	
	var postplanValid=new Valid($("#kupdppbpostplan") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbpostplan")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['postplandata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd;
		    ajaxdata['postplandata'].push(data);
			  $("tbody",$("#table_postplan")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+	
					     '<td>'+kupdppbdict.getDictText("planfgDict",data.planfg)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("planwyDict",data.planwy)+'</td>'+
					     '<td>'+data.adjtpd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("endtwyDict",data.endtwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("gentwyDict",data.gentwy)+'</td>'+
					     '<td>'+data.svlepd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("svlewyDict",data.svlewy)+'</td>'+
					     '<td>'+data.maxisp+'</td>'+
					     '<td>'+kupdppbdict.getDictText("dfltsdDict",data.dfltsd)+'</td>'+
					     '<td>'+data.svletm+'</td>'+
					     '<td>'+kupdppbdict.getDictText("dfltwyDict",data.dfltwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pscrwyDict",data.pscrwy)+'</td>'+
					     '<td>'+data.maxibl+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.postplandata=true;		   	
	   };	 			
	}, postplanrule);
			
	//产品支取控制表表单验证	9	
	var drawValid=new Valid($("#kupdppbdraw") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbdraw")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['drawdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd;
		    ajaxdata['drawdata'].push(data);
			  $("tbody",$("#table_draw")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+	
					     '<td>'+kupdppbdict.getDictText("posttpDict",data.drawtp)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("ctrlwyDict",data.ctrlwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("selfwyDict",data.selfwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("ordrwyDict",data.ordrwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("amntwyDict",data.dramwy)+'</td>'+
					     '<td>'+data.drmiam+'</td>'+
					     '<td>'+data.drmxam+'</td>'+
					     '<td>'+kupdppbdict.getDictText("timewyDict",data.drtmwy)+'</td>'+
					     '<td>'+data.drmitm+'</td>'+
					     '<td>'+data.drmxtm+'</td>'+
					     '<td>'+kupdppbdict.getDictText("drruleDict",data.drrule)+'</td>'+					     
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.drawdata=true;		   	
	   };
	}, drawrule);
			
	//产品违约支取利息定义表单验证 9		
	var dfintrValid=new Valid($("#kupdppbdfintr") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbdfintr")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['dfintrdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd&&data.drintp==n.drintp&&data.ingpcd==n.ingpcd&&data.intrtp==n.intrtp){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd+","+data.drintp+","+data.ingpcd+","+ data.intrtp;
		    ajaxdata['dfintrdata'].push(data);
			  $("tbody",$("#table_dfintr")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("drintpDict",data.drintp)+'</td>'+
					     '<td>'+data.ingpcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("intrtpDict",data.intrtp)+'</td>'+
					     '<td>'+data.drintx+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inadtpDict",data.inadtp)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("sminadDict",data.sminad)+'</td>'+
					     '<td>'+data.adincd+'</td>'+
					     '<td>'+data.insrwy+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inclfgDict",data.inclfg)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("bsinamDict",data.bsinam)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("bsindtDict",data.bsindt)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inedscDict",data.inedsc)+'</td>'+
					     '<td>'+data.bsincd+'</td>'+
					     '<td>'+data.bsinrl+'</td>'+
					     '<td>'+data.bsinef+'</td>'+
					     '<td>'+kupdppbdict.getDictText("dtlvsrDict",data.dtlvsr)+'</td>'+
					     '<td>'+data.dtsrcd+'</td>'+
					     '<td>'+data.dtlvrl+'</td>'+
					     '<td>'+data.dtlvef+'</td>'+
					     '<td>'+kupdppbdict.getDictText("amlvsrDict",data.amlvsr)+'</td>'+
					     '<td>'+data.amlvcd+'</td>'+
					     '<td>'+data.amlvrl+'</td>'+
					     '<td>'+data.amlvef+'</td>'+
					     '<td>'+kupdppbdict.getDictText("drinscDict",data.drinsc)+'</td>'+
					     '<td>'+data.drdein+'</td>'+					     
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd + ","+data.drintp +","+data.ingpcd +","+data.intrtp + "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.dfintrdata=true;		   	
	   };	   	 		
	}, dfintrrule);	
	
	//产品支取计划表表单验证	11		
	var drawplanValid=new Valid($("#kupdppbdrawplan") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbdrawplan")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['drawplandata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd;
		    ajaxdata['drawplandata'].push(data);
			  $("tbody",$("#table_drawplan")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("acolfgDict",data.setpwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("termwyDict",data.termwy)+'</td>'+
					     '<td>'+data.dradpd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("endtwyDict",data.dredwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pscrwyDict",data.drcrwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("dfltsdDict",data.drdfsd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("dfltwyDict",data.drdfwy)+'</td>'+
					     '<td>'+data.minibl+'</td>'+
					     '<td>'+kupdppbdict.getDictText("beinfgDict",data.beinfg)+'</td>'+					     
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.drawplandata=true;	   	
	   };
	}, drawplanrule);
	
	//产品利息利率定义表单验证   12		
	var intrValid=new Valid($("#kupdppbintr") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbintr")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['intrdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.crcycd==n.crcycd&&data.intrtp==n.intrtp){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.crcycd+","+data.intrtp;
		    ajaxdata['intrdata'].push(data);
			  $("tbody",$("#table_intr")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("pdcrcyDict",data.crcycd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("intrtpDict",data.intrtp)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inbefgDict",data.inbefg)+'</td>'+	
					     '<td>'+kupdppbdict.getDictText("acolfgDict",data.txbefg)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("txbebsDict",data.txbebs)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("hutxfgDict",data.hutxfg)+'</td>'+
					     '<td>'+data.txbefr+'</td>'+
					     '<td>'+data.intrcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("intrwyDict",data.intrwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("incdtpDict",data.incdtp)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("lyinwyDict",data.lyinwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inammdDict",data.inammd)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("bldycaDict",data.bldyca)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inprwyDict",data.inprwy)+'</td>'+
					     '<td>'+data.inadlv+'</td>'+
					     '<td>'+kupdppbdict.getDictText("inprwyDict",data.reprwy)+'</td>'+
					     '<td>'+kupdppbdict.getDictText("fvrbfgDict",data.fvrbfg)+'</td>'+
					     '<td>'+data.fvrblv+'</td>'+
					     '<td>'+data.taxecd+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.crcycd+","+data.intrtp +  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.intrdata=true;	   	
	   };
	}, intrrule);
	
	//产品核算定义表表单验证	13	
	var acctValid=new Valid($("#kupdppbacct") , function(){
		var data={};
	   	 $.each($(".form-value",$("#kupdppbacct")),function(i,n){
	   		if(n.name!=undefined){
	   			 data[n.name]=n.value;
	   		 }	
	   	 });
	   	 var bflag=true;
	   	 $.each(ajaxdata['acctdata'],function(i,n){
	   		 if(data.prodcd==n.prodcd&&data.depttm==n.depttm){
	   			 bootbox.alert("数据已存在!");
	   			 bflag=false;
	   			 return bflag;
	   		 }
	   	 })
	   if(bflag){
		    data["datasrc"]=data.prodcd+","+data.depttm;
		    ajaxdata['acctdata'].push(data);
			  $("tbody",$("#table_acct")).append(
					  '<tr>'+
					     '<td>'+data.prodcd+'</td>'+
					     '<td>'+kupdppbdict.getDictText("depttmDict",data.depttm)+'</td>'+
					     '<td>'+data.acctcd+'</td>'+
					     '<td>'+"<a class='delete' href='javascript:;' data-src='" + data.prodcd+","+data.depttm+  "'>删除 </a>"+'</td>'+
					  '<tr>'   	  
			  ); 			
			  ajaxflag.acctdata=true;	   	
	   };
	
	}, acctrule);
	/*
	 * 绑定delete事件
	 */
	var bindDeleteRow=function(table,datastr){
		table.on('click', '.delete', function (e) {
	        e.preventDefault();
	        var delObj = $($(this).parents('tr')[0]);
	        var datasrc=$("a",$($(this).parents('tr')[0])).attr("data-src");
	        bootbox.confirm("确定要删除该记录么 ?",function(result){
	      	 if(!result){return;}
	      	 var cpdata=ajaxdata[datastr];       		
	        	$.each(ajaxdata[datastr],function(i,n){
	        		if(n["datasrc"]===datasrc){
	        			cpdata.splice(i,1);
	        			return false;
	        		}
	        	});         	 
	        	ajaxdata[datastr]=cpdata;
	        	delObj.remove();
	        });	            		          		            		           
	    });
	}	 	
	bindDeleteRow($("#table_brch"),"brchdata");
	bindDeleteRow($("#table_actp"),"actpdata");
	bindDeleteRow($("#table_cust"),"custdata");
	bindDeleteRow($("#table_term"),"termdata");	
	bindDeleteRow($("#table_matu"),"matudata");  
	bindDeleteRow($("#table_post"),"postdata"); 
	bindDeleteRow($("#table_postplan"),"postplandata");
	bindDeleteRow($("#table_dfintr"),"dfintrdata");
	bindDeleteRow($("#table_draw"),"drawdata");
	bindDeleteRow($("#table_drawplan"),"drawplandata"); 
	bindDeleteRow($("#table_intr"),"intrdata");
	bindDeleteRow($("#table_acct"),"acctdata");
		
	
	/*
	 * 绑定增加一行按钮
	 */
	 $(".add_row_btn").click(function(){
			$('form',$('.tab_'+tabindex,editModal)).submit();			
	  });
	/*
	 * 清空全部表单
	 */ 
	 var clearForm=function(){
		    dppbValid.resetForm();
			custValid.resetForm();	
			actpValid.resetForm();
			termValid.resetForm();
			matuValid.resetForm();
			postValid.resetForm();
			postplanValid.resetForm();
			drawValid.resetForm();
			dfintrValid.resetForm();
			drawplanValid.resetForm();
			intrValid.resetForm();
			acctValid.resetForm();	
			//重载 绑定事件 和一些格式 删除table内容
			$.each($("li",$(".nav-tabs",editModal)),function(i,n){
				if(i!=0){
					$(n).remove();
				}
			});
			$("tbody",editModal).empty();
			$("a",$(".nav-tabs",editModal)).removeAttr("style");
			tabTitleFlag=true;
			$('.tab_'+tabindex,editModal).removeClass("active");
			$('.tab_1',editModal).addClass("active");	
			prodcd="";
			tabindex=1;
			ajaxdata = {
					dppbdata : {},
					custdata : [],
					brchdata : [],
					termdata : [],
					postdata : [],
					drawdata : [],
					matudata : [],
					dfintrdata : [],
					postplandata : [],
					drawplandata : [],
					intrdata : [],
					acctdata : [],
					actpdata : []
				};
			ajaxflag = {
					dppbdata : false,
					custdata : false,
					brchdata : false,
					termdata : false,
					postdata : false,
					drawdata : false,
					matudata : false,
					dfintrdata : false,
					postplandata : false,
					drawplandata : false,
					intrdata : false,
					acctdata : false,
					actpdata : false
				}
	 }
		 				
	return{
		init:function(){
			$("#tab_next").click(function(){
				//下一步  点击执行方法
				if(tabindex==1){
					$('form',$('.tab_'+tabindex,editModal)).submit();	
				}else if(tabindex==13){
					 bootbox.confirm("确定将提交所有数据",function(result){
						 if(!result){return;}
						 var data={};
						 $.each(ajaxflag,function(i,n){						   
							 if(n){//table无数据将不提交
								 data[i]=ajaxdata[i]
							 }
						 })
						 Sunline.ajaxRouter("prod/addDppb",data,"post",function(ret){
							 console.info(ret);
							 if(ret.retCode=="0000"){
								 bootbox.alert("主表新增成功,其他信息"+ret.msg);
								 $("#editModal").modal("hide");
							 }else{
								 bootbox.alert(ret.retMsg);							
							 }
						 },
						 function(ret){
							 bootbox.alert("核心交易异常");
						 });												 
					 });
				}else{
					$('.tab_'+tabindex,editModal).removeClass("active");
					$("a",$('.tab_'+tabindex,editModal)).attr("style","color:green");
					tabindex++;
					$('.tab_'+tabindex,editModal).addClass("active");	
				}																
			});
			$("#tab_last").click(function(){//上一步  点击执行方法
				if(tabindex!=1){
				$('.tab_'+tabindex,editModal).removeClass("active");
				tabindex--;
				$('.tab_'+tabindex,editModal).addClass("active");
				}
			});
			$("li",$(".nav-tabs",editModal)).live("click",function(){ //标签 点击执行方法
				$(".tab-pane",editModal).removeClass("active");
				if(Sunline.isNull(prodcd)){
					$(this).removeClass("active");
					$("li:first",$(".nav-tabs",editModal)).addClass("active");
					$('.tab_1',editModal).addClass("active");
				}else{
					var a=$(this).attr("class").substring(4,6);
					tabindex=parseInt(a);
					$('.tab_'+tabindex,editModal).addClass("active");
				}	
				return false;
			});			
		},
		clearForm : function(){//重载form表单		
			clearForm();
		},
		getValid :function(editform, submitFn, rule){
			return Valid( editform, submitFn, rule);
		},		
	}
	
}();