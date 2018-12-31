var Tmpl = function () {
/**
 * 属性配置?  
 */
    var class_cd="tmpl";//选定等分类
	var tmplClasses=[];//分类对象数组
	var sendData = ["abstract_cd"]; //sendData; 
	/**
	 * //初始化tmpl表
	 */
	var handleTable = function () {
		var url = Sunline.ajaxPath("/services/rest/prod/"+class_cd);
		var grid = new Datatable();
        grid.init({
            src: "#datatable_ajax",
            deleteData: sendData,
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
                "ajax": {
                    "url": url, // ajax source
                },
                "bRetrieve": false,
                "destroy": true, 
                "columns" : [{  
                		"data": "abstract_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
		            	"data": "abstract_name",
		            	"sortable": false,
		            	"searchable": false
		            },{
		            	"data": null,
		            	"width": "18%",
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) { 
		            		return "<a class='edit edit_prop' href='javascript:;' data-src='" + data.abstract_cd + "'>编辑 </a>";
	             	}
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.abstract_cd + "'>删除 </a>";
		            	} 
		            } 
	            ],
	            "dom" : "<'row'<'col-md-10 col-sm-12'pli><'col-md-2 col-sm-12'<'table-group-actions pull-right'>>r><'table-scrollable't><'row'<'col-md-10 col-sm-12'pli><'col-md-2 col-sm-12'>>", // datatable layout
	            "language":{	 	
	            	 "lengthMenu": "<span class='seperator'>|</span>显示 _MENU_ 条",
                     "info": "<span class='seperator'>|</span>共 _TOTAL_ 条",
	            	 "paginate": {
                         "previous": "上",
                         "next": "下",
                         "last": "尾页",
                         "first": "首页",
                         "page": "第",
                         "pageOf": "页  总页数"
                     },
	            },
            }
        });        
       return grid;
    };
    
  /**
   *   //初始化分类菜单
   */
    var handleTab=function(){
    	var classurl ="/services/rest/prod/tmpl_class";
    	//获取分类
    	Sunline.ajaxRouter(
    	   classurl,
			"",
			"get",
			function(jsondata){  
				//console.info(jsondata.data);				
				var s="";
				tmplClasses=[];//重置分类数组 
				$.each(jsondata.data, function(i, n){
					var tmplclass=new TmplClass();
					tmplclass.init(n.class_name,n.class_cd);
					s += tmplclass.getClassHTML();
					tmplClasses.push({name:n.class_name,cd:n.class_cd});	 					
				});
				//console.info(tmplClasses); 
				$('#add_class_cd').empty();
				var v="";
		       	$.each(tmplClasses,function(i,n){       		
		       			v += "<option value='"+n.cd+"'>"+n.name+"</option>";      			
		       	})
		       	$('#add_class_cd').append(v);
				$(".nav-stacked").append(s);  
        	},
        	function(b){
        		console.info("error ajax 通讯异常");
        		$(".note .note-danger .note-bordered").append("<h2>ajax 通讯异常</h2>"); 
        	},
        	"json",
        	true); 	
    };
    
    /**
     * //初始化配置属性列表
     */
    var propdatatable= function(sendData,propurl){	
	    var propgrid = new Datatable();
        propgrid.init({
            src: "#prop_ajax",
            deleteData: sendData,
            onSuccess: function (grid) {
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 
                "ajax": {
                    "url": propurl // ajax source
                },
                "bRetrieve": false,
                "destroy": true, 
                "bLengthChange": false,
                "bPaginate": false,
                "columns" : [{ 
                		"data": "abstract_cd",
                		"sortable": false,
                		"searchable": false
                	},{ 
                		"data": "property_cd",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "property_type",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": "sortno",
		            	"sortable": false,
		            	"searchable": false
		            },{ 
		            	"data": null,
		            	"sortable": false,
		            	"searchable": false,
		            	"render": function (data, type, full) {
		            		return "<a class='delete' href='javascript:;' data-src='" + data.abstract_cd + "'>删除 </a>";
		            	}
		            }  
	            ], "dom" : "<'row'<'col-md-10 col-sm-12'><'col-md-2 col-sm-12'>r><'table-scrollable't><'row'<'col-md-10 col-sm-12'><'col-md-2 col-sm-12'>>",  
	            "language": { 
                    "metronicAjaxRequestGeneralError": "没有数据，立即新增？",  
                    }       
            }
        });
        return propgrid;
        };
        
        
    /**
     *  //绑定编辑删除时间 tmpl表
     */
   var bindEvent=function(grid){
	   grid.bindTableDelete(sendData);
       grid.bindTableEdit(sendData,function(nRowA){	      	
          //$('#edit_abstract_cd').val($(nRowA[0]).text());      	        	
       	var s="";
       	$.each(tmplClasses,function(i,n){       		
       			s += "<option value='"+n.cd+"'>"+n.name+"</option>";      			
       	});
       	$('#edit_class_cd').append(s); 
     	tmplClasses=[]; 
        $('#edit_abstract_name').val($(nRowA[1]).text());
       	$(".col-md-5 > div:nth-child(1) > div:nth-child(2)").attr("style","display: block;"); 
    	$("#edit_class_cd > option:selected").removeAttr("selected");   
        $.each($("#edit_class_cd > option"),function(i,n){ 
     		if(class_cd.toString()===n.value){  
                this.selected="selected";
       		}       		
       	});        
       	});
       
       
       /*
        * 配置模板属性
        */
       grid.addBindEvent(".edit_prop","click",sendData,function(data){
       	var propurl = Sunline.ajaxPath("/services/rest/prod/tmpl"+data.abstract_cd);       	
       	var propgrid=propdatatable(sendData,propurl);
    	
        $("#add_new_prop").click(function(){
        	$("#add_p_abstract_cd").val(data.abstract_cd); 
          	$("#addpropModal").modal("show");  
        });   
        propgrid.bindTableDelete(sendData);          
       });
       //关闭按钮
       $("#edit_form > div:nth-child(2) > button:nth-child(1)").click(function(){
       	$(".col-md-5 > div:nth-child(1) > div:nth-child(2)").attr("style","display: none;");          	
       });
       //保存按钮
       $("#btn_save_edit").click(function(){ 
       	alert("保存成功");
       });
       /*
        * 新增tmpl按钮
        */       
       $("#add_tmpl").live("click",function(){
    	   console.info(1111);
       	$("#myModal").modal("show");  	 
       });
   }
   
   
    return {
        init: function () {
            var grid= handleTable();                 	
            bindEvent(grid);
            handleTab(); 
        },
        resetTable:function(id,name){
           //console.info(id);
        	class_cd=id; 
            handleTable();           
            $(".table-group-actions").append( //新增按钮，摧毁datatable会使新增按钮丢失，在此追加
            		"<span></span>"+
					"<button id='add_tmpl' class='btn btn-sm green table-group-action-submit'>新增</button>" );
        }

    };

}();