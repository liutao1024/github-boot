var fcsubpage = function () {

    var content = $('.inbox-content');
    var listListing = '';
    var proddata;//产品参数
    var mode="add";//edit 编辑   add 新增
    var editModal=$("#editmodal");
    var validflag=false;
    
    var loadSubPage = function (el,name) { 
    	console.info("加载子页面",name);   	
        content.html('');
        toggleButton(el);       
        $.ajax({
            type: "GET",
            url: "../loan/"+name,
            dataType: "html",
            success: function(res) 
            {    
            	toggleButton(el);
                $('.inbox-nav > li.active').removeClass('active');
                $('.inbox-nav > li.' + name).addClass('active');
                content.html(res);
                content.ready(function(){               	
                	  Metronic.initUniform();
                	  try{      
                		  lnsubobj.init(name,proddata.prodcd);
                	  }catch(e){
                		  bootbox.alert("子页面加载失败！");
                	  }
                });;             
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }
    var loadPage=function(el){
   	    content.html('');
        toggleButton(el);
        $.ajax({
            type: "GET",
            url: "../fc/fcprodedit",
            dataType: "html",
            success: function(res) 
            {    
            	toggleButton(el);
                $('.inbox-nav > li.active').removeClass('active');
                $('.inbox-nav > li.lnfprodedit').addClass('active');
                content.html(res);
                if(mode=="add"){
                	$("input[name='prodcd']", $("#prod_form")).attr("readOnly",false);
                }else{
                	$("input[name='prodcd']", $("#prod_form")).attr("readOnly",true);
                }
                Metronic.initUniform();
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        }); 
        if(mode==="edit"){       	
        	loaddata(proddata);
        }
        Metronic.initUniform();
        if(this.validator!=null){
        	return ;
        }
        return Sunline.getValidate( $("#prod_form"),
    			function() {
			var data = {};
			$.each($("input", $("#prod_form")), function(i, n) {
				if (n.name != undefined&&n.name!=""&&n.name!=null) {
					data[n.name] = n.value;
				}
			});
			proddata=data;
			Sunline.ajaxRouter("fc/fcuipr", 
					data
			, 'post', function(ret) {
                  if(ret.retCode==="0000"){    
                	   $(".alert-success", $("#prod_form")).show();
                	   $('.alert-danger',  $("#prod_form")).hide(); 
                		//$('.'+pagese[tabindex],editModal).removeClass("active");            					
    					tabindex++;
    					//$('.'+pagese[tabindex],editModal).addClass("active");
    					//loadSubPage($('.inbox-nav > li.'+pagese[tabindex]+' > a'),pagese[tabindex]);
                  }else{                        	 
                   	   $(".alert-success", $("#prod_form")).hide();
                   	   $('.alert-danger',  $("#prod_form")).show();                        	  
                  }
                  $(".msg", $("#prod_form")).text(ret.msg);
			});

		}, {					 
			 prodcd:{
				 maxlength : 20,
				 required : true
				 }
		}); 
   }
    
       
    var loaddata = function(data) {	
    	$("input[name='prodcd']", $("#prod_form")).val(data.prodcd);
    	$("input[name='prodna']", $("#prod_form")).val(data.prodna);
    	$("input[name='fcsrcd']", $("#prod_form")).val(data.fcsrcd);
    	$("input[name='fcsrna']", $("#prod_form")).val(data.fcsrna);
    	$("input[name='onlyfg']", $("#prod_form")).val(data.onlyfg).trigger("change");
    	$("input[name='efctdt']", $("#prod_form")).val(data.efctdt);
    	$("input[name='inefdt']", $("#prod_form")).val(data.inefdt);
    	$("input[name='prodtp']", $("#prod_form")).val(data.prodtp).trigger("change");
    	$("input[name='prodst']", $("#prod_form")).val(data.prodst).trigger("change");
    	$("input[name='rvbsno']", $("#prod_form")).val(data.rvbsno);
    	$("input[name='pybsno']", $("#prod_form")).val(data.pybsno);
	}
    

    var toggleButton = function(el) {
        if (typeof el == 'undefined') {
            return;
        }
        if (el.attr("disabled")) {
            el.attr("disabled", false);
        } else {
            el.attr("disabled", true);
        }
    }
   var tabindex=0;
   var clear =function(){	   
	   content.html('');	   
	   $('.active',$(".inbox-nav")).removeClass("active");
	   $("#clear_content").addClass("active");	
	   tabindex=0;
   }
   //页面tab标签数组
   var pagese=["lnfprodedit"];
     var findindex=function(name){
    	 $.each(pagese,function(i,n){
    		if(name===n){
    			tabindex=i;
    		}   		 
    	 });  
//    	 if(tabindex==0){
//    		 $("#nextpage",$("#btn_cont")).attr("disabled",false);
//    	 }else  if(tabindex==pagese.length-1){
//   		     $("#lastpage",$("#btn_cont")).attr("disabled",false);
//    	 }else{
//    		 $("#lastpage",$("#btn_cont")).attr("disabled",false);
//    		 $("#nextpage",$("#btn_cont")).attr("disabled",false);
//    	 }
     }
   
    return {
   
        init: function () {
        	/*
        	 * 下一页方法
        	 */     	
        	/*$("#nextpage",$("#btn_cont")).click(function(e){ 
        		e.preventDefault();
        		 if(tabindex===pagese.length-1){
        			 return false;
        		 }
        		 $(this).attr("disabled",true);
				if(tabindex==0){// 判断是否第一页		
					$("#prod_form").submit();	
				}else{ //若非第一页
					$('.'+pagese[tabindex],editModal).removeClass("active");
					tabindex++;
					$('.'+pagese[tabindex],editModal).addClass("active");	
					loadSubPage($('.inbox-nav > li.'+pagese[tabindex]+' > a'),pagese[tabindex]);
				}	
				$(this).attr("disabled",false);
				return false;
        	});*/
       	
        	//点击上一页方法
        	/*$("#lastpage",$("#btn_cont")).click(function(e){
        		 e.preventDefault();
        		 if(tabindex===0){
        			 return false;
        		 }
        		 $(this).attr("disabled","disabled");
        		//直接做跳转处理
        		$('.'+pagese[tabindex],editModal).removeClass("active");
				$("a",$('.'+pagese[tabindex],editModal)).removeAttr("style");
				tabindex--;
				$('.'+pagese[tabindex],editModal).addClass("active");
				if(tabindex===0){
					loadPage($('.inbox-nav > li.lnfprodedit > a'));
				}else{
					loadSubPage($('.inbox-nav > li.'+pagese[tabindex]+' > a'),pagese[tabindex]);
				} 
				$(this).attr("disabled",false);
				return false;
        	});*/
          if(mode==="add"){        		
        		loadPage($('.inbox-nav > li.lnfprodedit > a'));
          }
        	
          $('.inbox').on('click', '.inbox-discard-btn', function(e) {
             e.preventDefault();
          });                
                  
            $('.inbox-nav > li.lnfprodedit > a').click(function () {
            	loadPage($(this));//加载主页面
            	findindex('lnfprodedit');
            }); 
            
        },
        clear:function(){
        	clear();        	
        },
        loadPage:function(a,b,d){
        	loadPage(a,b,d);
        },
        setdata:function(data){
        	proddata=data;
        },
        setmode:function(a){
        	mode=a;
        }
    };

}();