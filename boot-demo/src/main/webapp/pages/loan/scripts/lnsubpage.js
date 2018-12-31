var lnsubpage = function () {

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
            url: "../loan/lnfprodedit",
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
			Sunline.ajaxRouter("loan/edprod", 
					data
			, 'post', function(ret) {
                  if(ret.retCode==="0000"){    
                	   $(".alert-success", $("#prod_form")).show();
                	   $('.alert-danger',  $("#prod_form")).hide(); 
                		$('.'+pagese[tabindex],editModal).removeClass("active");            					
    					tabindex++;
    					$('.'+pagese[tabindex],editModal).addClass("active");
    					loadSubPage($('.inbox-nav > li.'+pagese[tabindex]+' > a'),pagese[tabindex]);
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
		$("input[name='coorpr']", $("#prod_form")).val(data.coorpr).trigger("change");
		$("input[name='lncutp']", $("#prod_form")).val(data.lncutp).trigger("change");
		$("input[name='isotbs']", $("#prod_form")).val(data.isotbs).trigger("change");
		$("input[name='syndio']", $("#prod_form")).val(data.syndio).trigger("change");
		$("input[name='syndit']", $("#prod_form")).val(data.syndit).trigger("change");
		$("input[name='caldtp']", $("#prod_form")).val(data.caldtp).trigger("change");
		$("input[name='prodtx']", $("#prod_form")).val(data.prodtx);
		$("input[name='lnbztp']", $("#prod_form")).val(data.lnbztp).trigger("change");
		$("input[name='istxln']", $("#prod_form")).val(data.istxln).trigger("change");
		$("input[name='issynd']", $("#prod_form")).val(data.issynd).trigger("change");
		$("input[name='borstp']", $("#prod_form")).val(data.borstp).trigger("change");
		$("input[name='efctdt']", $("#prod_form")).val(data.efctdt);
		$("input[name='inefdt']", $("#prod_form")).val(data.inefdt);
		$("input[name='prodna']", $("#prod_form")).val(data.prodna);		
		$("input[name='iscycl']", $("#prod_form")).val(data.iscycl).trigger("change");
		$("input[name='syndtp']", $("#prod_form")).val(data.syndtp).trigger("change");
		$("input[name='syndot']", $("#prod_form")).val(data.syndot).trigger("change");
		$("input[name='ispion']", $("#prod_form")).val(data.ispion).trigger("change");
		$("input[name='prodst']", $("#prod_form")).val(data.prodst).trigger("change");
		$("input[name='iscred']", $("#prod_form")).val(data.iscred).trigger("change");
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
   var pagese=["lnfprodedit","lnfscap","lnflend","lnfschdrule","lnfschdcomp","lnfmatu",
               "lnfdtit","lnfinst","lnfchrg","lnfchrgenvt","lnfnote",
               "lnfagnt","lnfcrcy","lnfctrl","lnfgrup","lnfbors","lnfscope"];
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
        	$("#nextpage",$("#btn_cont")).click(function(e){ 
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
        	});
       	
        	//点击上一页方法
        	$("#lastpage",$("#btn_cont")).click(function(e){
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
        	});
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
            
            $('.inbox-nav > li.lnflend > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnflend');
            	findindex('lnflend');
            });    
            
            $('.inbox-nav > li.lnfschdrule > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfschdrule');
            	findindex('lnfschdrule');
            });   
            
            $('.inbox-nav > li.lnflend > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnflend');
            	findindex('lnflend');
            });   
            
            $('.inbox-nav > li.lnfschdcomp > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfschdcomp');
            	findindex('lnfschdcomp');
            });   
            
            $('.inbox-nav > li.lnfmatu > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfmatu');
            	findindex('lnfmatu');
            });   
            
            $('.inbox-nav > li.lnfdtit > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfdtit');
            	findindex('lnfdtit');
            });   
            
            $('.inbox-nav > li.lnfinst > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfinst');
            	findindex('lnfinst');
            });   
            $('.inbox-nav > li.lnfchrg > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfchrg');
            	findindex('lnfchrg');
            });   
            $('.inbox-nav > li.lnfchrgenvt > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfchrgenvt');
            	findindex('lnfchrgenvt');
            });   
            $('.inbox-nav > li.lnfnote > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfnote');
            	findindex('lnfnote');
            });   
            $('.inbox-nav > li.lnfagnt > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfagnt');
            	findindex('lnfagnt');
            });   
            
            $('.inbox-nav > li.lnfscap > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfscap');
            	findindex('lnfscap');
            });  
            $('.inbox-nav > li.lnfcrcy > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfcrcy');
            	findindex('lnfcrcy');
            });  
            $('.inbox-nav > li.lnfctrl > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfctrl');
            	findindex('lnfctrl');
            });  
            $('.inbox-nav > li.lnfgrup > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfgrup');
            	findindex('lnfgrup');
            });  
            $('.inbox-nav > li.lnfbors > a').click(function () {
            	 if(mode==="add") return;
            	loadSubPage($(this),'lnfbors');
            	findindex('lnfbors');
            });
            
            $('.inbox-nav > li.lnfscope > a').click(function () {
           	 if(mode==="add") return;
           	loadSubPage($(this),'lnfscope');
           	findindex('lnfscope');
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