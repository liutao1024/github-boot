var TmplClass=function(){
	
	var className;//选项卡名
	var classId;//选项卡id
	var classHTML;
	
	/**
	 * 生成左侧选项卡
	 */
	var handleValue=function(name,id){		
		className=name;
		classId=id;
		classHTML="<li class=''>"+
					"<a href='javascript:goTmpl("+id+");' style='padding: 5px 0px 5px 10px;'>"+ 
					name+"</a>"+
				  "</li>"; 
	     }
	

	return {
		init:function(name,id){			
			handleValue(name,id);			
		},
		getClassName:function(){
			return className;
		},
		getClassId:function(){
			return classId;
		},
		getClassHTML:function(){
			return classHTML;			
		}
	
	}	
};