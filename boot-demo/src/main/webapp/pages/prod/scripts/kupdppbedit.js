var kupdppbedit = function () {

    var content = $('.inbox-content');
    var listListing = '';
    var proddata;
    var loadSubPage = function (el,name) {     
        content.html('');
        toggleButton(el);       
        $.ajax({
            type: "GET",
            url: "../prod/kupdppb"+name,
            dataType: "html",
            success: function(res) 
            {    
            	toggleButton(el);
                $('.inbox-nav > li.active').removeClass('active');
                $('.inbox-nav > li.' + name).addClass('active');
                content.html(res);
                Metronic.initUniform();
                kupdppbsub[name].init(proddata.prodcd);
            },
            error: function(xhr, ajaxOptions, thrownError)
            {
                toggleButton(el);
            },
            async: false
        });
    }
    
    var loadPage=function(el,name){
    	 content.html('');
         toggleButton(el);
         $.ajax({
             type: "GET",
             url: "../prod/kupdetail",
             dataType: "html",
             success: function(res) 
             {    
             	toggleButton(el);
                 $('.inbox-nav > li.active').removeClass('active');
                 $('.inbox-nav > li.' + name).addClass('active');
                 content.html(res);
                // Metronic.initUniform();
             },
             error: function(xhr, ajaxOptions, thrownError)
             {
                 toggleButton(el);
             },
             async: false
         });   
         loaddata(proddata);
         $("#save_prod").click(function(){
         	var data={};
         	$.each($("input", $("#edit_kupdppb")), function(i, n) {
     			if (n.name != undefined&&n.name!=""&&n.name!=null) {
     				data[n.name] = n.value;
     			}
     		});
         	Sunline.ajaxRouter("prod/upDppb", 
         			data
     		, 'post', function(ret) {
                   if(ret.ret==="success"){              
                 	   $(".alert-success", $("#edit_kupdppb")).show();
                 	   $('.alert-danger',  $("#edit_kupdppb")).hide(); 		   
                   }else{                        	 
                    	   $(".alert-success", $("#edit_kupdppb")).hide();
                    	   $('.alert-danger',  $("#edit_kupdppb")).show();                        	  
                   }
                   $(".msg", $("#edit_kupdppb")).text(ret.msg);
     		});  
         });
         Metronic.initUniform();
    }
    
   
    
    var loaddata = function(data) {	
		var editPage = $("#edit_load");
		$("input[name='prodcd']", editPage).val(data.prodcd);
		$("input[name='prodtx']", editPage).val(data.prodtx);
		$("input[name='pdmktx']", editPage).val(data.pdmktx);
		$("input[name='efctdt']", editPage).val(data.efctdt);
		$("input[name='inefdt']", editPage).val(data.inefdt);
		$("input[name='pddpfg']", editPage).val(data.pddpfg).trigger("change");
		$("input[name='prodtp']", editPage).val(data.prodtp).trigger("change");
		$("input[name='pdcrcy']", editPage).val(data.pdcrcy).trigger("change");
		$("input[name='brchfg']", editPage).val(data.brchfg).trigger("change");
		$("input[name='custfg']", editPage).val(data.custfg).trigger("change");
		$("input[name='debttp']", editPage).val(data.debttp).trigger("change");
		$("input[name='mginfg']", editPage).val(data.mginfg).trigger("change");
		$("input[name='prodst']", editPage).val(data.prodst).trigger("change");
		$("input[name='presal']", editPage).val(data.presal);
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
    
   var clear =function(){	   
	   content.html('');	   
	   $('input',$("#tab_edit_1")).val("").trigger("change");
	   $('.active',$(".inbox-nav")).removeClass("active");
	   $("#clear_content").addClass("active");	   
   }

    return {
   
        init: function () {
            $('.inbox').on('click', '.inbox-discard-btn', function(e) {
                e.preventDefault();
            });       
            
           // loadPage($('.inbox-nav > li.detail > a'),'detail');
            
            $('.inbox-nav > li.detail > a').click(function () {
            	loadPage($(this),'detail');
            }); 
                        
            $('.inbox-nav > li.brch > a').click(function () {
            	loadSubPage($(this),'brch');
            });    
            
            $('.inbox-nav > li.actp > a').click(function () {
            	loadSubPage($(this),'actp');
            }); 
            
            $('.inbox-nav > li.cust > a').click(function () {
            	loadSubPage($(this),'cust');
            });
            
            $('.inbox-nav > li.term > a').click(function () {
            	loadSubPage($(this),'term');
            });
            
            $('.inbox-nav > li.matu > a').click(function () {
            	loadSubPage($(this),'matu');
            });
            
            $('.inbox-nav > li.post > a').click(function () {
            	loadSubPage($(this),'post');
            });
            
            $('.inbox-nav > li.postplan > a').click(function () {
            	loadSubPage($(this),'postplan');
            });
            
            $('.inbox-nav > li.draw > a').click(function () {
            	loadSubPage($(this),'draw');
            });
            
            $('.inbox-nav > li.dfintr > a').click(function () {
            	loadSubPage($(this),'dfintr');
            });
            
            $('.inbox-nav > li.drawplan > a').click(function () {
            	loadSubPage($(this),'drawplan');
            });
            
            $('.inbox-nav > li.intr > a').click(function () {
            	loadSubPage($(this),'intr');
            });
            
            $('.inbox-nav > li.acct > a').click(function () {
            	loadSubPage($(this),'acct');
            });
                        
            $("#clear_content").click(function(){
            	  content.html('');
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
        }

    };

}();