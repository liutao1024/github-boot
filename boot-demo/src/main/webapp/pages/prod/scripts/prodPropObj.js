var ProdPropObj = function(){
	
	var propData;//属性data
	var propHTML;//选项卡内容HTML
	var propId;//选项卡 属性ID
	var propTitleHTML;//选项卡头HTML
	
	/*
	 * 获取选项卡卡头方法
	 */
	var _titleHtml = function (id){
		propTitleHTML= "<li class=''>"+
		"<a href='#tab_"+id+"' data-toggle='tab'>"+
		_replaceName(id)+"</a>"+
	    "</li>";
	}
	
	/*
	 * 获取选项卡内容方法选择器
	 */
	var _contentHtml=function(id,value){
		if(_isArry(value)){
			//如果值是多个则···· 
			propHTML=_mutivalueSelectFunc(id,value);
		}else{
			//单个值直接显示
			propHTML=_checkIdSelectFunc(id,value);
		}			
	}
	
	 /*
     * 判断对象字符串是否是数组方法
     */
    var _isArry  =  function (o) { 
      return Object.prototype.toString.call(o) === '[object Array]';   
    }
    
    /*
     * 多个值处理方法选择器
     */
	 var _mutivalueSelectFunc=function(a,b){
		 switch(a){
			case "everytime_amt": return _getEveryTimeAmt(a,b); break;
			case "period" :return _getPeriod(a,b); break;
			//待增加
			default : return _mutiInput(a,b);
			}
	 }	 
	 /*
	  * 期限 内容生成方法
	  */
	 var _getPeriod =function(a,b){
		 var s ="<div class='tab-pane' id='tab_"+a+"'>" +
         "<div class='row'>"; 
		     $.each(b,function(i,obj){
		    	 $.each(obj,function(key,value){
		    		 if(key=="period_value"){		    		 
		    		 s += "<label class='col-md-3 control-label'>"+_replaceName(key)+"</label>"+
				       "<div class='col-md-9'>"+
				       "<input type='text' value='"+value+"' id='" +key+"' "+
				         "class='form-control input-inline input-medium' maxlength='19' placeholder='请输入"+_replaceName(key)+"'>"+
				      "</div>";
		    		 }else{
	    			 s += "<label class='col-md-3 control-label'>"+_replaceName(key)+"</label>"+
				       "<div class='col-md-9'>"+
				       "<select  id='" +key+"' maxlength='6' class='form-control input-inline input-medium'>"+ 
				       //此处应从字典表中取单位				       
				       "<option selected='selected' value='D'>天</option>"+
				       "<option value='M'>月</option>"+
				       "<option value='Y'>年</option>"+
				       "</select>"+
				      "</div>";		    			 
		    		 }
		    	 });		    	 
		     });         
		s +="</div>" +
		  "</div>";
		return s 
	 }
	 
	 /*
	  *  期限 内容保存方法
	  */
	 _savePeriod=function(propObj){
		 var json=[];
		$.each(
			$("#tab_"+propObj.getpropId()+" .col-md-9").find("select option:selected,#period_value"),
		     function(i,o){
					if(o.tagName=="INPUT"){
						var obj ='{"'+o.id+'":"'+o.value+'"}';		
		            	json.push(eval("("+obj+")"));						
					}else if(o.tagName=="OPTION"){
						var obj ='{"'+o.parentNode.id+'":"'+o.value+'"}';		
		            	json.push(eval("("+obj+")"));
					}
			});
			propObj.setpropData(json);
	 }
	 
	 /*
	  * 多个Input处理框
	  */	 
	 var _mutiInput=function(a,b){
		 var s ="<div class='tab-pane' id='tab_"+a+"'>" +
         "<div class='row'>"; 
		     $.each(b,function(i,obj){
		    	 $.each(obj,function(key,value){
		    		 s += "<label class='col-md-3 control-label'>"+_replaceName(key)+"</label>"+
				       "<div class='col-md-9'>"+
				       "<input type='text' value='"+value+"' id='" +key+"' "+
				         "class='form-control input-inline input-medium' maxlength='19' placeholder='请输入"+_replaceName(key)+"'>"+
				      "</div>"
		    	 });		    	 
		     });         
		s +="</div>" +
		  "</div>";
		return s
		 
	 }
	 
	 /*
	  * 每次投资金额生成方法
	  */
	 var _getEveryTimeAmt=function(a,b){
	 var s ="<div class='tab-pane' id='tab_"+a+"'>" +
            "<div class='row'>"; 
		     $.each(b,function(i,obj){
		    	 $.each(obj,function(key,value){
		    		 s += "<label class='col-md-3 control-label'>"+_replaceName(key)+"</label>"+
				       "<div class='col-md-9'>"+
				       "<input type='text' value='"+value+"' id='" +key+"' "+
				         "class='form-control input-inline input-medium' maxlength='19' placeholder='请输入"+_replaceName(key)+"'>"+
				      "</div>"
		    	 });		    	 
		     });         
		s +="</div>" +
		  "</div>";
		return s;	 
	 }
	 /*
	  * 每次投资金额保存方法
	  */
	var _saveEveryTimeAmt = function(propObj){
		var json=[];
		$.each($("#tab_"+propObj.getpropId()+" input"),function(i,o){
		var obj ='{"'+o.id+'":"'+o.value+'"}';		
		json.push(eval("("+obj+")"));
		});
		propObj.setpropData(json);
	}
	
	/*
	 * 替换成中文方法
	 */
	 var _replaceName =function (a){
	    	switch(a){
	    	case "period" : a="期限"; break;
	    	case "rate" : a="利率"; break;
	    	case "guar_cd" : a="担保方式"; break;
	    	case "installment_cd" : a="还款方式"; break;
	    	case "start_date" : a="起始日期"; break;
	    	case "everytime_amt" : a="每次投资金额"; break;
	    	case "value" : a="值";break;
	    	case "min_amt" : a="最小金额";break;
	    	case "max_amt" : a="最大金额";break; 
	    	case "period_value" : a="期限值";break; 
	    	case "period_unit" : a="期限单位";break; 
	    	}
	    	return a;
	    }
	/*
	 * 判断编辑框类型，选择生成方法
	 * a：名称id  b：值
	 */
	var _checkIdSelectFunc = function(a,b){
		switch(a){
		case "start_date" : return _datepicker(a,b); break;
		case "guar_cd": return _select2(a,b); break;
		//待增加
		default : return _input(a,b);
		}		
	}
	/*
	 * 时间输入框生成方法
	 * a：名称id  b：值
	 */
	var _datepicker=function(a,b){
		var s="<div class='tab-pane' id='tab_"+a+"'>" +
			    "<div class='row' data-date-format='yyyy-mm-dd hh:ii'>"+
			       "<label class='col-md-3 control-label'>"+_replaceName(a)+"</label>"+
			       "<div class='col-md-9'>"+
			       "<input type='text' value='"+b+"' id='" +a+"' "+
			         "class='form-control input-inline input-medium' maxlength='19' placeholder='输入日期'>"+
		         "</div></div></div>";
		//绑定datetimepicker
	    $("#"+a).live("mousemove",function(){
	    	$('#'+a).datetimepicker('setStartDate', '2011-01-01',{format: 'yyyy-mm-dd hh:ii'}); 
	    });    
		return s;
	}
	/*
	 * 时间输入框保存方法
	 * 
	 */
	var _saveDatepicker = function(propObj){
		propObj.setpropData($("#tab_"+propObj.getpropId()+" input").val());
	}
   /*
    * 普通input框生成方法
    * a：名称id  b：值
    */
	var _input=function(a,b){
		var s="<div class='tab-pane ' id='tab_"+a+"'>" +
		           "<div class='row'>"+
				       "<label class='col-md-3 control-label'>"+_replaceName(a)+"</label>"+
				       "<div class='col-md-9'>"+
				       "<input type='text' value='"+b+"' id='" +a+"' "+
				         "class='form-control input-inline input-medium' maxlength='19' placeholder='请输入"+_replaceName(a)+"'>"+
				  "</div></div></div>";				         
     return s;
	}
	var _saveInput = function(propObj){
		propObj.setpropData($("#tab_"+propObj.getpropId()+" input").val());
	}
	/*
	 * select2单选框生成方法
	 */
	var _select2=function(a,b){
		
	}
	/*
	 * select2多选框生成方法
	 * 
	 */
	var _select2Box=function(a,b){
		
		
	}
	
	/**
	 * init 初始化
	 * getHtml 获得对象html字符串
	 * 
	 */
	return {
		init : function(id,data){
			propId=id;
			propData=data;
			_titleHtml(id);
			_contentHtml(id,data);	
		}
		,getpropId : function(){
			return propId;
		}
		,setpropId :function(id){
			propId=id;
		}
		,getpropData : function(){
			return propData;
		}
		,setpropData :function(data){
			propData=data;
		}
		,getpropTitleHTML : function(){
			return propTitleHTML;
		}
		,getpropHTML: function(){
			return propHTML;
		}
		,getpropJson:function(){
			return { prodId : prodData };
		}
		,bindPropSave : function(propObj){
			switch(propObj.getpropId()){
			case "start_date" : _saveDatepicker(propObj);break;
			case "guar_cd":  _saveInput(propObj)  ;break;
			case "everytime_amt": _saveEveryTimeAmt(propObj) ;break;
			case "period" : _savePeriod(propObj);break;
			//待增加
			default : return _saveInput(propObj);
			}		
		},bindPropAdd : function(propObj){
			
		},bindPropDel:function(propObj){
			
		}
		
	}	
	
};