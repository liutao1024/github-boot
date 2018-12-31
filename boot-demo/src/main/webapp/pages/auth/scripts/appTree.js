var appTree = function(){
	
	var handleTree = function(){
		var branchTree = new Tree();
		var options = {	src: "#app_tree",
						qrysrc: "#qryApp",
						autoAppCd:autoAppCd,
						selectedEvent:onSelectedNode
					};
		//获取菜单数据
		var sendData = {
				"userId": Auth.getCookieUserId()
			};
		Sunline.ajaxRouter(
				"auth/allMenu",
				jQuery.toJSON(sendData),
				"GET",
				function(data){
				
					//拼接json数据
					var str='[';
					jQuery.each(data.menu, function(index, val){
						str+='{"a_attr":{"id":"'+val.authCd+'","rank":"'+val.rank+'","sortno":"'+val.sortno+'"';
						if(!Sunline.isNull(val.haschild) && val.haschild === "Y"){
							str+=',"children":'+handleSubData(val.children);							
						}
						str+='},"text":"'+val.menuName+'","icon":"'+val.iconfg+'","rank":"'+val.rank+'","sort":"'+val.sort+'"';
						if(!Sunline.isNull(val.haschild) && val.haschild === "Y"){
							str+=',"children":'+handleSubData(val.children);							
						}
						str+='}';
						if(index!=data.menu.length-1){
							str+=','
						}
						
					});
					str+=']';
					
					var obj = eval('(' + str + ')');
					setTree(obj);
				}
			);
		/**
		 *生成tree方法
		 */
		
		var setTree=function(data){
			$(options.src).jstree({
				"core" : {
	                "themes" : {
	                    "responsive": false
	                }, 
	                // so that create works
	                "check_callback" : true,
	                'data' :data
	            },
	            "types" : {
	                "default" : {
	                    "icon" : "fa fa-folder icon-state-warning icon-lg"
	                },
	                "file" : {
	                    "icon" : "fa fa-file icon-state-warning icon-lg"
	                }
	            },
	            "plugins" : [ "types", "search", "wholerow", "contextmenu" ],
	            "contextmenu" : {
	            	"items":{
	            		"新增":{
	            			"label":"新增",
	            			"action": function (data) {
	            				$("#add_app_cd").attr("readOnly",true);
	    						var inst = $.jstree.reference(data.reference),
	    							obj = inst.get_node(data.reference);
	    						var maxId=0;
	    						var maxSort=0;
	    						if(obj.a_attr.children!=undefined&&obj.a_attr.children.length>0){
		    						$.each(obj.a_attr.children,function(i,n){
		    							if(maxId<n.a_attr.id){
		    								maxId=n.a_attr.id;
		    							}
		    							if(maxSort<n.a_attr.sortno){
		    								maxSort=n.a_attr.sortno;
		    							}
		    						});
		    						
		    						$("#add_app_cd").val(parseFloat(maxId)+1);
		    						$("#add_parent").val(obj.a_attr.id);
		    						$("#add_menu_level").val(parseFloat(obj.a_attr.rank)+1);
	    						}else{
	    							$("#add_menu_sortno").val(1);
		    						$("#add_app_cd").val(obj.a_attr.id+"1");
		    						$("#add_parent").val(obj.a_attr.id);
		    						$("#add_menu_level").val(parseFloat(obj.a_attr.rank)+1);	    							
	    						}	    						
	    						$("#myModal").modal('show');    						
	    					}
	            		},	            		
	            		"删除":{
	            			"label":"删除",
	            			"action": function (data) {
	          
	    						var inst = $.jstree.reference(data.reference),
	    							obj = inst.get_node(data.reference);
	    						var auth={};
	    						auth["authCd"]=obj.a_attr.id;
	    						auth["authType"]="2";
	    						if(inst.is_selected(obj)) {
	    							inst.delete_node(inst.get_selected());
	    							Sunline.ajaxRouter("auth/delAuth",auth,"post",function(redata){ 	    			 				
	    			 					if(redata.ret=="success"){						
	    			 						bootbox.alert(redata.msg);
	    			 					}else{			
	    			 						bootbox.alert(redata.msg);
	    			 					}
	    			 					},function(){
	    			 						bootbox.alert("请求失败");
	    			 					},"json");
	    							
	    						}
	    						else {
	    							inst.delete_node(obj);
	    						}
	    					}
	            		}
	            	}
	            }
			}).bind("select_node.jstree", function(e,data){options.selectedEvent(e,data)});		
			var to = false;
			$(options.qrysrc).keyup(function () {
				if(to) { clearTimeout(to); }
				to = setTimeout(function () {
					var v = $(options.qrysrc).val();
					$(options.src).jstree(true).search(v);
				}, 250);
			});
		}
		//jstree
		
	};
	/*
	 * 获取appid方法
	 */
	var autoAppCd = function(obj){
		$('#add_app_cd').val($('#menu_id').val());
		$('#add_parent').val($('#menu_name').val());
		$('#add_menu_level').val(parseInt($('#menu_level').val())+1);
	};
	      /*新增
	       * 表单验证
	       */
             var addform=$("#myForm");
             var editerror = $('.alert-danger', addform);
             var editsuccess = $('.alert-success', addform);
             var validator=addform.validate({
                 errorElement: 'span', 
                 errorClass: 'help-block help-block-error', 
                 focusInvalid: false, 
                 ignore: "",
                 rules: { //验证规则      
                	 auth_cd : 
 	                {
 	                	required : true,
 	                	maxlength:19
 	                },   
 	               menu_name: {
 	                	required : false,
 	                	maxlength:50               	
 	                },
 	               rank : 
 	                {
 	                	required : false,
 	                	maxlength:10  	
 	                },
 	               parent_auth_cd:
 	                {
 	                 	maxlength:19            	
 	                },
 	               auth_url:
	                {
	                 	maxlength:100            	
	                },
	                iconfg:
 	                {
 	                 	maxlength:20         	
 	                },
 	               sort:
	                {
	                 	maxlength:10            	
	                }
 	            },

                 invalidHandler: function (event, validator) {              
                     editsuccess.hide();
                     editerror.show();
                     Metronic.scrollTo(editerror, -200);
                 },

                 errorPlacement: function (error, element) { 
                	 element.parent().append(error);
                 },

                 highlight: function (element) { 
                     $(element)
                         .closest('.form-group').removeClass("has-success").addClass('has-error'); 
                 },

                 unhighlight: function (element) { 
                     
                 },

                 success: function (label, element) {
                     var icon = $(element).parent('.input-icon').children('i');
                     $(element).closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                     icon.removeClass("fa-warning").addClass("fa-check");
                 }
             });
             /*
         	 * 新增提交按钮
         	 */
             $("#btn_save_edit").click(function(){
             	var data={};
             	$.each($("input",addform),function(i,n){
             		data[n.name]=n.value;
             	});
             	data["authType"]="2"//菜单权限
            	Sunline.ajaxRouter("auth/addAuth",data,"post",function(redata){ 
 					$('.msg', $("#myModal")).text(redata.msg);
 					if(redata.ret=="success"){						
 						$('.alert-success', addform).show();
						$('.alert-danger', addform).hide(); 
 					}else{			
 						$('.alert-success', addform).hide();
						$('.alert-danger', addform).show(); 
 					}
 					},function(){
 						$('.alert-success', addform).hide();
						$('.alert-danger', addform).show(); 
 					},"json");
             	
             });
             /*
          	 *修改提交按钮
          	 */
             var updform=$("#upd_form");
              $("#upd_btn").click(function(){
              	var data={};
              	$.each($("input",updform),function(i,n){
              		data[n.name]=n.value;
              	});
              	data["authType"]="2"//菜单权限
             	Sunline.ajaxRouter("auth/updAuth",data,"post",function(redata){ 
  					$('.msg', updform).text(redata.msg);
  					if(redata.ret=="success"){						
  						$('.alert-success', updform).show();
 						$('.alert-danger', updform).hide(); 
  					}else{			
  						$('.alert-success', updform).hide();
 						$('.alert-danger', updform).show(); 
  					}
  					},function(){
  						$('.alert-success', updform).hide();
 						$('.alert-danger', updform).show(); 
  					},"json");
              	
              });  
          
	/* 
	 * 递归处理子菜单数据方法
	 *       
	 */
	var handleSubData = function(subdata){
		var substr = '[';
		jQuery.each(subdata, function(index, val){		
			if(!Sunline.isNull(val.haschild) && val.haschild === "Y"){
				substr+='{"a_attr":{"id":"'+val.authCd+'","rank":"'+val.rank+'","sortno":"'+val.sortno+'","children":'+
				handleSubData(val.children)+'},"text":"'+val.menuName+'","icon":"'+val.iconfg+'","children":'+
				handleSubData(val.children)+'}';
			}else{
				substr+='{"a_attr":{"id":"'+val.authCd+'","rank":"'+val.rank+'","sortno":"'+val.sortno+'"},"text":"'+val.menuName+'","icon":"'+val.iconfg+'"}';
			}if(index!=subdata.length-1){
				substr+=','				
			}
		});
		substr+=']';
		return substr;
	};
	/*
	 * 递归查找menudata方法
	 */	
	var  findmenudata=function(subdata,menuName,menu_s){
		jQuery.each(subdata,function(index,val){		
				if(val.menuName==menuName){
					 menu_s.push(val);
				}else if(!Sunline.isNull(val.haschild) && val.haschild === "Y"){
					findmenudata(val.children,menuName,menu_s);
				}				
		});	
	}
		
	/*
	 * 单击显示菜单数据
	 * 
	 */
	//选择节点事件
	var onSelectedNode = function(e,data){ 
		var url = 'auth/allMenu';
		var menu_s=[];
		Sunline.ajaxRouter(url,data.selected[0],"GET",function(menudata){	
			findmenudata(menudata.menu,data.node.text,menu_s);
			$('#menu_id').val(menu_s[0].authCd);
			$('#menu_name').val(data.node.text);
			$('#menu_level').val(menu_s[0].rank);
			$('#menu_url').val(menu_s[0].authUrl);
			$('#menu_parent').val(menu_s[0].parentAuthCd);		
			$('#menu_iconfg').val(menu_s[0].iconfg);
		},null,"json",true);
	};
	
	var handleForm = function(){
		Sunline.initForm();
		$("#zipcode").inputmask({
            "mask": "9",
            "repeat": 6,
            "greedy": false
        });
	};
	var addFuMenu=function(){
		$("#add_fu").click(function(){	
			$("#add_app_cd").removeAttr("readOnly");
			$("#add_menu_level").val(1);			
			$("#myModal").modal('show');			
		});	
	}
	
	return {
		init: function(){
			handleTree();
			handleForm();
			addFuMenu();
		}
	};
}();