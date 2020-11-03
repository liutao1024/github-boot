<script src="${ctx}/assets/global/scripts/console.js" type="text/javascript"></script>
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="${ctx}/assets/global/plugins/respond.min.js" ></script>  
<script src="${ctx}/assets/global/plugins/excanvas.min.js" ></script>
<![endif]-->
<script src="${ctx}/assets/global/plugins/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
<!-- IMPORTANT! Load jquery-ui-1.10.3.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
<script src="${ctx}/assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="${ctx}/assets/global/plugins/jquery.json.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->

<script src="${ctx}/assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${ctx}/assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${ctx}/assets/admin/layout/scripts/demo.js" type="text/javascript"></script>

<script src="${ctx}/assets/global/scripts/sunline.js" type="text/javascript"></script>
<input type="hidden" id="basepath" value="${ctx}" />
<script>
	jQuery(document).ready(function() {     
		Metronic.init(); // init metronic core components
		Sunline.setBasePath($("#basepath").val());
	});
</script>