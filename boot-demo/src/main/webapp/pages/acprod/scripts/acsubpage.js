var acsubpage = function () {
	
    var content = $('.inbox-content');
    var listListing = '';
    var proddata;//产品参数
    var editModal=$("#addModal");

    var loadSubPage = function (el,name) { 
    	console.info("加载子页面",name);   	
        content.html('');
        toggleButton(el);
        $.ajax({
            type: "GET",
            url: "../acprod/"+name,
            dataType: "html",
            success: function(res) 
            {    
            	toggleButton(el);
                $('.inbox-nav > li.active').removeClass('active');
                $('.inbox-nav > li.' + name).addClass('active');

                content.html(res);
                content.ready(function(){               	
                	 Metronic.initUniform();
                });;             
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
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
 
   //页面tab标签数组
   var pagese=["acprod","accont","acsbac","acbusi"];
   var findindex=function(name){
    	 $.each(pagese,function(i,n){
    		if(name===n){
    			tabindex=i;
    		}   		 
    	 });  
     }
   
    return {
    	   init: function () {
    		   loadSubPage($(this),'acprod');
    		   $("#btn_save_upst").attr("disabled", true);
				$("#btn_save_next").attr("disabled", false);
    		   $('.inbox-nav > li.acprod > a').click(function () {
    			   	 loadSubPage($(this),'acprod');
    			   	 findindex('acprod');
    		   }); 
    	   },
           loadPage:function(a,b,d){
           loadPage(a,b,d);
           }
       };

   }();