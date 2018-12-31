<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/common/taglib.jsp"%>
<div class="tab-pane" >
	<form class="form-horizontal control-label" role="form" id="prod_form">
		<div class="form-body">
			<div class="alert alert-danger display-hide">
				<button class="close" data-close="alert"></button>
				输入有误，请检查下面表单！<span class="msg"></span>
			</div>
			<div class="alert alert-success display-hide">
				<button class="close" data-close="alert"></button>
				表单提交成功！<span class="msg"></span>
			</div>
			<div class="col-md-4" >
				<div class="form-group">
					<label class="col-md-3 control-label">产品代码</label>
					<div class="col-md-9">
						<input type="text" name="prodcd"
							class="form-control input-inline input-medium form-value"
							placeholder="产品代码">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">贷款对象细分</label>
					<div class="col-md-9">
						<input type="text" name="lncutp"
							class="form-control input-inline input-medium form-value"
							placeholder="贷款对象细分">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">表外产品</label>
					<div class="col-md-9">
						<input type="text" name="isotbs"
							class="form-control input-inline input-medium form-value"
							placeholder="表外产品">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">银团贷款方式</label>
					<div class="col-md-9">
						<input type="text" name="syndio"
							class="form-control input-inline input-medium form-value"
							placeholder="银团贷款方式">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">内部银团成员行类型</label>
					<div class="col-md-9">
						<input type="text" name="syndit"
							class="form-control input-inline input-medium form-value"
							placeholder="内部银团成员行类型">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label">产品关联的日历类型</label>
					<div class="col-md-9">
						<input type="text" name="caldtp"
							class="form-control input-inline input-medium form-value"
							placeholder="产品关联的日历类型">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">是否授信</label>
					<div class="col-md-9">
						<input type="text" name="iscred"
							class="form-control input-inline input-medium form-value"
							placeholder="是否授信">
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="col-md-3 control-label">产品描述</label>
					<div class="col-md-9">
						<input type="text" name="prodtx"
							class="form-control input-inline input-medium form-value"
							placeholder="产品描述">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">业务分类</label>
					<div class="col-md-9">
						<input type="text" name="lnbztp"
							class="form-control input-inline input-medium form-value"
							placeholder="业务分类">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">补贴贷款</label>
					<div class="col-md-9">
						<input type="text" name="istxln"
							class="form-control input-inline input-medium form-value"
							placeholder="补贴贷款">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">银团贷款</label>
					<div class="col-md-9">
						<input type="text" name="issynd"
							class="form-control input-inline input-medium form-value"
							placeholder="银团贷款">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">资产转让类型</label>
					<div class="col-md-9">
						<input type="text" name="borstp"
							class="form-control input-inline input-medium form-value"
							placeholder="资产转让类型">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">生效日期</label>
					<div class="col-md-9">
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" class="form-control" name="efctdt"
								maxlength="8" placeholder="输入生效日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">失效日期</label>
					<div class="col-md-9">
						<div class="input-group col-md-12 date input-medium date-picker"
							data-date-format="yyyymmdd" data-date-viewmode="years"
							data-date-minviewmode="months">
							<input type="text" class="form-control" name="inefdt"
								maxlength="8" placeholder="输入失效日期"> <span
								class="input-group-btn">
								<button class="btn default" type="button">
									<i class="fa fa-calendar"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label class="col-md-3 control-label">产品名称</label>
					<div class="col-md-9">
						<input type="text" name="prodna"
							class="form-control input-inline input-medium form-value"
							placeholder="产品名称">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">贷款对象</label>
					<div class="col-md-9">
						<input type="text" name="coorpr"
							class="form-control input-inline input-medium form-value"
							maxlength="20" placeholder="贷款对象">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">循环贷款</label>
					<div class="col-md-9">
						<input type="text" name="iscycl"
							class="form-control input-inline input-medium form-value"
							placeholder="循环贷款">
					</div>
				</div>

				<div class="form-group">
					<label class="col-md-3 control-label"> 银团类别</label>
					<div class="col-md-9">
						<input type="text" name="syndtp"
							class="form-control input-inline input-medium form-value"
							placeholder="银团类别">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">外部银团成员行类型</label>
					<div class="col-md-9">
						<input type="text" name="syndot"
							class="form-control input-inline input-medium form-value"
							placeholder="外部银团成员行类型">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">纳入忠诚度/积分计划</label>
					<div class="col-md-9">
						<input type="text" name="ispion"
							class="form-control input-inline input-medium form-value"
							placeholder="纳入忠诚度/积分计划">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-3 control-label">产品状态</label>
					<div class="col-md-9">
						<input type="text" name="prodst"
							class="form-control input-inline input-medium form-value"
							placeholder="产品状态">
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"
	src="${ctx}/assets/global/plugins/bootstrap-datepicker/js/locales/bootstrap-datepicker.zh-CN.js"></script>
<script> 
	jQuery(document).ready(function() {
		// 时间插件
	var lnfprodedit=function(){
			var hander=function(){
				if (jQuery().datepicker) {
					$('.date-picker').datepicker({
						rtl : Metronic.isRTL(),
						orientation : "left",
						autoclose : true,
						language : 'zh-CN',
					});
				};
				  
				var coorprDict = Sunline.getDict("E_COORPR");
				$("input[name='coorpr']").select2({
					data : coorprDict,
					allowClear : true
				});

				var lncutpDict = Sunline.getDict("E_LNCUTP");
				$("input[name='lncutp']").select2({
					data : lncutpDict,
					allowClear : true
				});

				var lnbztpDict = Sunline.getDict("E_LNBZTP");
				$("input[name='lnbztp']").select2({
					data : lnbztpDict,
					allowClear : true
				});

				var isotbsDict = Sunline.getDict("E_ISOTBS");
				$("input[name='isotbs']").select2({
					data : isotbsDict,
					allowClear : true
				});

				var iscyclDict = Sunline.getDict("E_ISCYCL");
				$("input[name='iscycl']").select2({
					data : iscyclDict,
					allowClear : true
				});

				var istxlnDict = Sunline.getDict("E_ISTXLN");
				$("input[name='istxln']").select2({
					data : istxlnDict,
					allowClear : true
				});

				var issyndDict = Sunline.getDict("E_ISSYND");
				$("input[name='issynd']").select2({
					data : issyndDict,
					allowClear : true
				});

				var syndioDict = Sunline.getDict("E_SYNDIO");
				$("input[name='syndio']").select2({
					data : syndioDict,
					allowClear : true
				});

				var syndtpDict = Sunline.getDict("E_SYNDTP");
				$("input[name='syndtp']").select2({
					data : syndtpDict,
					allowClear : true
				});

				var synditDict = Sunline.getDict("E_SYNDIT");
				$("input[name='syndit']").select2({
					data : synditDict,
					allowClear : true
				});

				var syndotDict = Sunline.getDict("E_SYNDOT");
				$("input[name='syndot']").select2({
					data : syndotDict,
					allowClear : true
				});

				var borstpDict = Sunline.getDict("E_BORSTP");
				$("input[name='borstp']").select2({
					data : borstpDict,
					allowClear : true
				});

				var ispionDict = Sunline.getDict("E_ISPION");
				$("input[name='ispion']").select2({
					data : ispionDict,
					allowClear : true
				});

				var caldtpDict = Sunline.getDict("E_CALDTP");
				$("input[name='caldtp']").select2({
					data : caldtpDict,
					allowClear : true
				});

				var prodstDict = Sunline.getDict("E_PRODST");
				$("input[name='prodst']").select2({
					data : prodstDict,
					allowClear : true
				});
				var iscredDict = Sunline.getDict("E_ISCRED");
				$("input[name='iscred']").select2({
					data : iscredDict,
					allowClear : true
				});
				Metronic.initSlimScroll();
			}
			
			
			return  {
				init :function(){
					hander();
				}
			}
		}();	
		lnfprodedit.init();
	});
</script>
