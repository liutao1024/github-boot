var lnsubobj=function(){	
	
	var redpage={};
//			lnflend : lnflend ,			
//			lnfschdrule : lnfschdrule ,
//			lnfschdcomp : lnfschdcomp,
//			lnfmatu :  lnfmatu,
//			lnfdtit : lnfdtit,
//			lnfinst :lnfinst,
//			lnfchrg : lnfchrg,
//			lnfchrgenvt :lnfchrgenvt,
//			lnfnote :  lnfnote,
//			lnfagnt : lnfagnt,
//			lnfscap :  lnfscap,
//			lnfcrcy :  lnfcrcy,
//			lnfctrl :  lnfctrl,
//			lnfgrup :  lnfgrup,
//			lnfbors :  lnfbors	
	
	
	return {		
		init :function(name,prodcd){
			if(redpage[name]!=null){
				redpage[name].init(prodcd);				
			}			
		},
		setparam :function(name,pageobj){
        	console.info(name,pageobj);
			redpage[name]=pageobj;	
		}	    
	}				
}();