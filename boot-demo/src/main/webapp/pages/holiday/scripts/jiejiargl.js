var jiejiargl = function() {
	
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
	
	var editForm = function(nRowA){

		var input  = {};
		input.indate = $(nRowA[1]).text();
		Sunline.ajaxRouter("holiday/dehody", input, "POST", function(data) {
			if(data.retCode=="0000"){
		       	$("#tranModal").modal('hide');
		       	submitInfo();
			}else{
				bootbox.alert("删除失败，"+data.retMsg);
			}
		}, function(data) {
		});
		return false;
	
	};
	
	var prodgrid = new Datatable();
	var handleTable = function(){
		var i = 0;
		prodgrid.setAjaxParam("indate","");
		prodgrid.setAjaxParam("inyear",$('#inyear').val());
		prodgrid.setAjaxParam("inmoth",$('#inmoth').val());
		prodgrid.setAjaxParam("remark",$('#remark').val());
		var produrl = Sunline.ajaxPath("holiday/qrhody");
		prodgrid.init({
					src : $("#datatable_prod"),
					onSuccess : function(prodgrid) {
					},
					onError : function(prodgrid) {
					},
					dataTable : {
						"ajax" : {
							"url" : produrl,
						},
						"columns" : [
								 {
									"data" : "remark",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "indate",
									"sortable" : false,
									"searchable" : false
									
								},
								{
									"data" : "effcdt",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : null,
									"sortable" : false,
									"searchable" : false,
									"render" : function(data, type, full) {
										return "<a class='edit' href='javascript:;' data-src='" + data + " data-value="+i+"'>删除 </a>";
									}
								}							
								]
					}
				});
		var sendData = ["inyear","indate"];
		prodgrid.bindTableEdit(sendData,editForm);
	       }
	//查询
	var submitInfo = function(){
		if(!$('#cust-form').validate().form()){
			return;
		}
		prodgrid.setAjaxParam("inyear",$('#inyear').val());
		prodgrid.setAjaxParam("indate",$('#indate').val());
		prodgrid.setAjaxParam("inmoth",$('#inmoth').val());
		prodgrid.setAjaxParam("remark",$('#remark').val());
		prodgrid.submitFilter();
	}
	//时间插件
	var hander = function() {
		if (jQuery().datepicker) {
			$('#mubiao').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		if (jQuery().datepicker) {
			$('#mubiao1').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
		if (jQuery().datepicker) {
			$('#mubiao2').datepicker({
				rtl : Metronic.isRTL(),
				orientation : "left",
				autoclose : true,
				language : 'zh-CN',
			});
		};
	}
	var setyear = function(){
		var list = new Array();
		var myDate = new Date();
		var year = myDate.getFullYear() - 10;
		for(var i = 0; i < 20; i++){
			var map = {};
			map.id = year+i;
			map.text = year+i+"年";
			list[i] = map;
		}
		$("#inyear").select2({
			data : list,
			formatSelection: function(item){
				 return item.text;
			 },
			 formatResult: function(item){
				 return item.text;
			 }
		});
		$("#inyear").select2("val",myDate.getFullYear());
		
		

		var list_m = new Array();
		var month = 1;

		var map_i = {};
		map_i.id = "__";
		map_i.text = "全部";
		list_m[0] = map_i;
		
		for(var i = 1; i < 10; i++){
			var map = {};
			m = i + month - 1;
			map.id = "0"+m;
			map.text = m+"月";
			list_m[i] = map;
		}
		for(var i = 10; i < 13; i++){
			var map = {};
			m = i + month - 1;
			map.id = m;
			map.text = m+"月";
			list_m[i] = map;
		}
		$("#inmoth").select2({
			data : list_m,
			formatSelection: function(item){
				 return item.text;
			 },
			 formatResult: function(item){
				 return item.text;
			 }
		});
		$("#inmoth").select2("val","__");
	}
	var click = function(){
		//新增
		$("#add_prod_btn").bind("click", function() {
	       	$("#tranModal").modal('show');
		});

		//保存
		$("#m_save_debt").bind("click", function() {
			var input  = {};
			input.remark = $("#beizhuxx").val();
			input.indate = $("#indate1").val();
			input.effcdt = $("#effcdt").val();
			Sunline.ajaxRouter("holiday/aphody", input, "POST", function(data) {
				if(data.retCode=="0000"){
					bootbox.confirm("新增成功！是否继续新增", function(result) {
			        	if(!result){
					       	$("#tranModal").modal('hide');
			        		return;
			        	}
					});
//			       	$("#tranModal").modal('hide');
			       	submitInfo();
				}else{
					bootbox.confirm("新增失败，"+data.retMsg+"！是否继续新增", function(result) {
			        	if(!result){
					       	$("#tranModal").modal('hide');
			        		return;
			        	}
				  });
				}
			}, function(data) {
			});
			return false;
		});
		
		//一键新增当前年份周末
		$("#add_week_btn").bind("click", function() {
			var input  = {};
			input.inyear = $("#inyear").val();
			Sunline.ajaxRouter("holiday/adwekd", input, "POST", function(data) {
				if(data.retCode=="0000"){
			       	$("#tranModal").modal('hide');
			       	submitInfo();
				}else{
					bootbox.alert("新增失败，"+data.retMsg);
				}
			}, function(data) {
			});
			return false;
		});
		
		//清空
		$('#cancle').bind("click", function() {
			$("#inyear").select2("val","");
			$('#indate').val("");
		});
	}
	return {
		init : function() {
			hander();
			setyear();
			handleTable();
			click();
		},
		queryCust : function() {
			submitInfo();
		}
	}
}();