var kupdppbdict=function(){
	
	var dict={	
			/**
			 * 字典定义
			 */			
			pddpfgDict : Sunline.getDict("E_FCFLAG"),
			prodtpDict : Sunline.getDict("E_PRODCT"),
			pdcrcyDict : Sunline.getDict("crcycd"),
			brchfgDict : Sunline.getDict("E_BRCHFG"),
			custfgDict : Sunline.getDict("E_CUSTFG"),
			debttpDict : Sunline.getDict("E_DEBTTP"),
			mginfgDict : Sunline.getDict("E_MGINFG"),
			prodstDict : Sunline.getDict("E_PRODST"),
			brchDict   : Sunline.getDict("","/brch","brchno","brchna"),
		    acolfgDict : Sunline.getDict("E_YES___"),
			dcmttpDict : Sunline.getDict("E_DCMTTP"),
			madtbyDict : Sunline.getDict("E_MADTBY"),
			onlyfgDict : Sunline.getDict("E_ONLYFG"),
			depttmDict : Sunline.getDict("E_TERMCD"),
			festdlDict : Sunline.getDict("E_HDDLTP"),
			delyfgDict : Sunline.getDict("E_DELYFG"),
			trdpfgDict : Sunline.getDict("E_TRDPFG"),
			trinwyDict : Sunline.getDict("E_TRINWY"),
			posttpDict : Sunline.getDict("E_SAVECT"),
			drawtpDict : Sunline.getDict("E_DRAWCT"),
			postwyDict : Sunline.getDict("E_POSTWY"),
			amntwyDict : Sunline.getDict("E_AMNTWY"),
			timewyDict : Sunline.getDict("E_TIMEWY"),
			planfgDict : Sunline.getDict("E_PLANFG"),
			planwyDict : Sunline.getDict("E_SVPLAJ"),
			endtwyDict : Sunline.getDict("E_ENDTWY"),
			gentwyDict : Sunline.getDict("E_SVPLGN"),
			svlewyDict : Sunline.getDict("E_SVBKAD"),
			dfltsdDict : Sunline.getDict("E_SVBKLI"),
			dfltwyDict : Sunline.getDict("E_SVBKDL"),
			pscrwyDict : Sunline.getDict("E_SVPLFG"),
			ctrlwyDict : Sunline.getDict("E_CTRLWY"),
			selfwyDict : Sunline.getDict("E_SELFWY"),
			ordrwyDict : Sunline.getDict("E_BSPKTP"),
			drruleDict : Sunline.getDict("E_DRRULE"),
			drintpDict : Sunline.getDict("E_DRINTP"),
			intrtpDict : Sunline.getDict("E_INTRTP"),
			inadtpDict : Sunline.getDict("E_INADTP"),
			sminadDict : Sunline.getDict("E_SMINAD"),
			inclfgDict : Sunline.getDict("E_INCLFG"),
			bsinamDict : Sunline.getDict("E_BSINAM"),
			bsindtDict : Sunline.getDict("E_BSINDT"),
			inedscDict : Sunline.getDict("E_INEDSC"),
			dtlvsrDict : Sunline.getDict("E_DTLVSR"),
			amlvsrDict : Sunline.getDict("E_AMLVSR"),
			drinscDict : Sunline.getDict("E_DRINSC"),
			termwyDict : Sunline.getDict("E_DWPLAJ"),
			beinfgDict : Sunline.getDict("E_BEINFG"),
			inbefgDict : Sunline.getDict("E_INBEFG"),
			txbebsDict : Sunline.getDict("E_INBEBS"),
			hutxfgDict : Sunline.getDict("E_CAINRD"),
			intrwyDict : Sunline.getDict("E_IRDPWY"),
			incdtpDict : Sunline.getDict("incdtp"),
			lyinwyDict : Sunline.getDict("E_LYINWY"),
			inammdDict : Sunline.getDict("E_IBAMMD"),
			bldycaDict : Sunline.getDict("E_AVBLDT"),
			inprwyDict : Sunline.getDict("E_IRRTTP"),
			fvrbfgDict : Sunline.getDict("E_FVRBFG"),
			cacttpDict : Sunline.getDict("cacttp"),
			reprwyDict : Sunline.getDict("E_REPRWY"),
			/**
			 *获取字典型 
			 *dname (字典名称  madtbyDict)
			 *id (字典 id )
			 *return 字典显示值
			 */
			getDictText: function(dname,id){
				var rvl=id;
				$.each(dict[dname],function(i,n){
					if(n.id==id){
						rvl=n.text;
						return false;
					}
				});
				return rvl;
			},
			initdict : function(){
				return initdict();
			}
		}
	//集中绑定select2
    var initdict=function(){
		$("input[name='cacttp']").select2({data:dict.cacttpDict,allowClear:true});
		$("input[name='pddpfg']").select2({data:dict.pddpfgDict,allowClear:true});
		$("input[name='prodtp']").select2({data:dict.prodtpDict,allowClear:true});
		$("input[name='pdcrcy']").select2({data:dict.pdcrcyDict,allowClear:true});
		$("input[name='brchfg']").select2({data:dict.brchfgDict,allowClear:true});
		$("input[name='custfg']").select2({data:dict.custfgDict,allowClear:true});
		$("input[name='debttp']").select2({data:dict.debttpDict,allowClear:true});
		$("input[name='mginfg']").select2({data:dict.mginfgDict,allowClear:true});
		$("input[name='prodst']").select2({data:dict.prodstDict,allowClear:true});
		$("input[name='depttm']").select2({data:dict.depttmDict,allowClear:true});	
		$("input[name='onlyfg']").select2({data:dict.onlyfgDict,allowClear:true});
		$("input[name='madtby']").select2({data:dict.madtbyDict,allowClear:true});	
	    $("input[name='brchno']").select2({data:dict.brchDict,allowClear:true});
	    $("input[name='acolfg']").select2({data:dict.acolfgDict,allowClear:true});	
	    $("input[name='dcmtfg']").select2({data:dict.acolfgDict,allowClear:true});
	    $("input[name='dcmttp']").select2({data:dict.dcmttpDict,allowClear:true});
	    $("input[name='crcycd']").select2({data:dict.pdcrcyDict,allowClear:true});  
	    $("input[name='festdl']").select2({data:dict.festdlDict,allowClear:true});
	    $("input[name='delyfg']").select2({data:dict.delyfgDict,allowClear:true});
	    $("input[name='trdpfg']").select2({data:dict.trdpfgDict,allowClear:true});
	    $("input[name='trpdfg']").select2({data:dict.trdpfgDict,allowClear:true});
	    $("input[name='trinwy']").select2({data:dict.trinwyDict,allowClear:true});
	    $("input[name='posttp']").select2({data:dict.posttpDict,allowClear:true});
	    $("input[name='postwy']").select2({data:dict.postwyDict,allowClear:true});
	    $("input[name='amntwy']").select2({data:dict.amntwyDict,allowClear:true});
	    $("input[name='timewy']").select2({data:dict.timewyDict,allowClear:true});
	    $("input[name='detlfg']").select2({data:dict.acolfgDict,allowClear:true});
	    $("input[name='planfg']").select2({data:dict.planfgDict,allowClear:true});
	    $("input[name='planwy']").select2({data:dict.planwyDict,allowClear:true});
	    $("input[name='endtwy']").select2({data:dict.endtwyDict,allowClear:true});
	    $("input[name='gentwy']").select2({data:dict.gentwyDict,allowClear:true});
	    $("input[name='svlewy']").select2({data:dict.svlewyDict,allowClear:true});
	    $("input[name='dfltsd']").select2({data:dict.dfltsdDict,allowClear:true});
	    $("input[name='dfltwy']").select2({data:dict.dfltwyDict,allowClear:true});
	    $("input[name='pscrwy']").select2({data:dict.pscrwyDict,allowClear:true});
	    $("input[name='drawtp']").select2({data:dict.drawtpDict,allowClear:true});
	    $("input[name='ctrlwy']").select2({data:dict.ctrlwyDict,allowClear:true}); 
	    $("input[name='selfwy']").select2({data:dict.selfwyDict,allowClear:true});
	    $("input[name='ordrwy']").select2({data:dict.ordrwyDict,allowClear:true});
	    $("input[name='dramwy']").select2({data:dict.amntwyDict,allowClear:true}); 
	    $("input[name='drtmwy']").select2({data:dict.timewyDict,allowClear:true});
	    $("input[name='drrule']").select2({data:dict.drruleDict,allowClear:true});
	    $("input[name='drintp']").select2({data:dict.drintpDict,allowClear:true});
	    $("input[name='intrtp']").select2({data:dict.intrtpDict,allowClear:true});
	    $("input[name='inadtp']").select2({data:dict.inadtpDict,allowClear:true});
	    $("input[name='sminad']").select2({data:dict.sminadDict,allowClear:true});
	    $("input[name='inclfg']").select2({data:dict.inclfgDict,allowClear:true});
	    $("input[name='bsinam']").select2({data:dict.bsinamDict,allowClear:true});
	    $("input[name='bsindt']").select2({data:dict.bsindtDict,allowClear:true});
	    $("input[name='inedsc']").select2({data:dict.inedscDict,allowClear:true});
	    $("input[name='dtlvsr']").select2({data:dict.dtlvsrDict,allowClear:true});
	    $("input[name='amlvsr']").select2({data:dict.amlvsrDict,allowClear:true});
	    $("input[name='drinsc']").select2({data:dict.drinscDict,allowClear:true});
	    $("input[name='termwy']").select2({data:dict.termwyDict,allowClear:true});
	    $("input[name='dredwy']").select2({data:dict.endtwyDict,allowClear:true});
	    $("input[name='drcrwy']").select2({data:dict.pscrwyDict,allowClear:true});
	    $("input[name='drdfsd']").select2({data:dict.dfltsdDict,allowClear:true});
	    $("input[name='drdfwy']").select2({data:dict.dfltwyDict,allowClear:true});
	    $("input[name='beinfg']").select2({data:dict.beinfgDict,allowClear:true});
	    $("input[name='inbefg']").select2({data:dict.inbefgDict,allowClear:true});
	    $("input[name='txbefg']").select2({data:dict.acolfgDict,allowClear:true});
	    $("input[name='txbebs']").select2({data:dict.txbebsDict,allowClear:true});
	    $("input[name='hutxfg']").select2({data:dict.hutxfgDict,allowClear:true});
	    $("input[name='intrwy']").select2({data:dict.intrwyDict,allowClear:true});
	    $("input[name='incdtp']").select2({data:dict.incdtpDict,allowClear:true});
	    $("input[name='lyinwy']").select2({data:dict.lyinwyDict,allowClear:true});
	    $("input[name='inammd']").select2({data:dict.inammdDict,allowClear:true});
	    $("input[name='bldyca']").select2({data:dict.bldycaDict,allowClear:true});
	    $("input[name='inprwy']").select2({data:dict.inprwyDict,allowClear:true});
	    $("input[name='reprwy']").select2({data:dict.reprwyDict,allowClear:true});
	    $("input[name='fvrbfg']").select2({data:dict.fvrbfgDict,allowClear:true});
	    $("input[name='setpwy']").select2({data:dict.acolfgDict,allowClear:true});
		
	}
	initdict();
	
	return dict;
	
}();