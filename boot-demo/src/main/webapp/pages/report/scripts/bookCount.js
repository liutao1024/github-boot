var bookCount = function() {
	var lb_grid;
	var isF = true;
	var date = new Date();
	var month = date.getMonth()+1+"";
	var day = date.getDate()+"";
	var monthStr = month.length==1?("0"+month):month;
	var dayStr = day.length==1?("0"+day):day;
	$("input[name='q_trandt']").val(date.getFullYear()+""+monthStr+""+dayStr);
	var handleTable = function() {
		if (jQuery().datepicker) {
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                orientation: "left",
                autoclose: true,
                language: 'zh-CN'
            });
        }
		var qryCacheObj = [];
		var grid = new Datatable();
		var gridUrl = Sunline.ajaxPath("book/getBookCountInfo");
		grid.init({
					src : $("#datatable_src"),
					onSuccess : function(grid) {
						qryCacheObj = grid.getDataTable().context['0'].json.data;
						console.log(qryCacheObj);
						var total = 0;
						for(var i=0;i<qryCacheObj.length;i++){
							total+=qryCacheObj[i].q_total;
						}
						var html = "<div>总计业务笔数："+total+"</div>";
	        			$('#log').html(html);
					},
					onError : function(grid) {
					},
					dataTable : {
						paging: false,
						searching: false,
						ordering: false,
						info: false,
						"ajax" : {
							"url" : gridUrl,
						},
						"columns" : [
								{
									"data" : "q_sequno",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_userid",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_userna",
									"sortable" : false,
									"searchable" : false
								},
								{
									"data" : "q_total",
									"sortable" : false,
									"searchable" : false
								} ]
					}
				});
		
		$('#select').click(function(){
			grid.setAjaxParam('q_userid',$('#q_userid').val());
			grid.setAjaxParam('q_trandt',$('#q_trandt').val());
			grid.submitFilter();
		});
		
	};

	return {
		init : function() {
			handleTable();
		}
	}
}();