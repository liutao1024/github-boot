package com.example.demo.login.controller;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.demo.sunline.domain.SysUser;
import com.example.demo.sunline.domain.RoleAuth;
import com.example.demo.sunline.domain.SifSysAuth;
import com.example.demo.sunline.domain.SifSysRoleAuth;
import com.example.demo.sunline.domain.SifSysRoleUser;
import com.example.demo.sunline.repository.SifSysRoleUserRepository;
import com.example.demo.sunline.service.SifSysAuthService;
import com.example.demo.sunline.service.SifSysRoleAuthService;
import com.example.demo.sunline.service.SifSysRoleUserService;
/**
 * @author LiuTao @date 2018年5月1日 上午11:59:41
 * @ClassName: UserMainController 
 * @Description: TODO(Describe)
 */
@Controller("UserMainController")
@RequestMapping(value = "auth")
@ResponseBody
@SessionAttributes("SysUser")
public class UserMainController {
	private static Logger logger = LoggerFactory.getLogger(UserMainController.class);
	private static String AUTHTYPE = "2";//菜单权限类型
	private String[] strs = {};//user用有权限AuthCd数组
	private static Sort sort=null;
	@Autowired
	private SifSysAuthService sifSysAuthService;
	@Autowired
	private SifSysRoleUserService sifSysRoleUserService;
	@Autowired
	private SifSysRoleAuthService sifSysRoleAuthService;
	@Autowired
	SifSysRoleUserRepository roleUserRepository;
	/**
	 * @author LiuTao @date 2018年5月1日 下午1:35:12 
	 * @Title: getUserInfoController 
	 * @Description: TODO(前台获取session信息) 
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/userinfo", method=RequestMethod.GET)
	public Map<String, Object> getUserInfoController(@ModelAttribute("SysUser") SysUser user) {
		Map<String, Object> resmap = new HashMap<String, Object>();
		if (user.getUserid() == null || user.getUserid() == "") {
			resmap.put("ret", "error");
			resmap.put("msg", "您未登录,请登录");
			return resmap;
		}
		logger.info(user.toString());
		logger.info(user.getUserid());
		resmap.put("user", user);
		resmap.put("ret", "success");
		resmap.put("msg", "成功");
		return resmap;
	}
	
	/**
	 * @author LiuTao @date 2018年5月7日 下午6:00:36 
	 * @Title: menu 
	 * @Description: TODO(获取user菜单权限) 
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/menu")
	public Map<String, Object> menu(@ModelAttribute("User") SysUser user) {
		
		SifSysRoleUser roleUser = new SifSysRoleUser();
		roleUser.setRegisterCd(user.getCorpno());
		roleUser.setAuthType(AUTHTYPE);// 2为菜单权限
		roleUser.setUserCd(user.getUserid());
		logger.debug(roleUser.toString());
		List<SifSysRoleUser> ruList = sifSysRoleUserService.queryEntitiesByTemplate(roleUser);// 一个柜员可能对应多个角色
		List<SifSysRoleAuth> authlist = new ArrayList<SifSysRoleAuth>();
		RoleAuth roleauth = new RoleAuth();
		for (SifSysRoleUser sifSysRoleUser : ruList) {
			// 通过角色来查询角色权限
			roleauth.setAuthType(sifSysRoleUser.getAuthType());
			roleauth.setRegisterCd(sifSysRoleUser.getRegisterCd());
			roleauth.setRoleCd(sifSysRoleUser.getRoleCd());
			authlist.addAll(sifSysRoleAuthService.queryEntitiesByTemplate(roleauth));
		}
		//权限去重复
		HashSet<SifSysRoleAuth> hashSet = new HashSet<SifSysRoleAuth>(authlist);
		authlist.clear();
		authlist.addAll(hashSet);
		int k = 0;
		strs = new String[authlist.size()];
		for (SifSysRoleAuth sifSysRoleAuth : authlist) {
			strs[k] = sifSysRoleAuth.getAuthCd();
			k++;
		}

		// 查询所有菜单
		SifSysAuth tmp = new SifSysAuth();
		tmp.setAuthType(AUTHTYPE);// 2 为菜单权限
		tmp.setRank(1);//从第一级开始取
		tmp.setRegisterCd(user.getCorpno());//法人号
		List<SifSysAuth> menu = new ArrayList<SifSysAuth>();
		menu.addAll(sifSysAuthService.queryEntitiesByTemplateWithSort(tmp, sort));		
		Map<String, Object> mapOne = new HashMap<String, Object>();
		mapOne.put("menu", reGetMenu(tmp, tmp.getRank(),menu,true));
		logger.debug("---------菜单" + mapOne.toString());
		return mapOne;
	}
	
	
	/**
	 * @author LiuTao @date 2018年5月1日 上午11:52:54 
	 * @Title: loginOutController 
	 * @Description: TODO(Describe) 
	 * @param request
	 * @param model
	 * @param user
	 */
	@RequestMapping(value = "/logout")
	public void loginOutController(HttpServletRequest request,Model model, @ModelAttribute("User") SysUser user) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userid", user.getUserid());
//	    client.callClient("pbusgt", map);
		HttpSession session = request.getSession(false);  
		Enumeration<String> em = session.getAttributeNames();
		while (em.hasMoreElements()) {
			request.getSession().removeAttribute(
					em.nextElement().toString());
		}
		 session.removeAttribute("User");
		 session.invalidate();//session无效处理
		 model.asMap().clear();//清除model中的对象
	}
	/**
	 * @author LiuTao @date 2018年5月7日 下午7:56:41 
	 * @Title: toDoListController 
	 * @Description: TODO(查询待办事件) 
	 * @param reqmap 查询条件输入
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/to-do-list")
	public Map<String, Object> toDoListController(@RequestParam Map<String, Object> reqmap,
			@ModelAttribute("User") SysUser user) {
		Map<String, Object> map = new HashMap<String, Object>();
		List <String> rolecdList  = roleUserRepository.getRolesByUserid(user.getUserid());
		
		map.putAll(reqmap);
		if (reqmap.get("q_subjtp") != null && reqmap.get("q_subjtp") != "") {
			map.put("subjtp", reqmap.get("q_subjtp"));
		}
		if (reqmap.get("q_emrgfg") != null && reqmap.get("q_emrgfg") != "") {
			map.put("emrgfg", reqmap.get("q_emrgfg"));
		}
		List<Map<String,String>> roleList = new ArrayList<Map<String,String>>();
		for(String s : rolecdList){
			Map<String,String> roleMap = new HashMap<String,String>();
			roleMap.put("recvrl", s);
			roleList.add(roleMap);
		}
	    map.put("roleList", roleList);
		map.put("userid", user.getUserid()); // 设置操作柜员
		int length = Integer.parseInt(StringUtils.isNotEmpty((String) reqmap
				.get("length")) ? (String) reqmap.get("length") : "10", 10);
		int start = Integer.parseInt(StringUtils.isNotEmpty((String) reqmap
				.get("start")) ? (String) reqmap.get("start") : "1", 10);
		map.put("pageno", start / length + 1);// 当前页数
		map.put("pagesize", length); // 每页记录数
		Map<String, Object> resmap = new HashMap<String, Object>();
//		resmap = client.callClient("qrsubj", map);
		if (resmap.get("retCode").toString().equals("0000")) {
			resmap.put("ret", "success");
			resmap.put("msg", "待办事项发送成功");
		} else {
			resmap.put("msg", resmap.get("retMsg").toString());
		}
		resmap.put("data",resmap.get("infos") == null ? new ArrayList<Object>() : resmap
						.get("infos"));
		resmap.put("iTotalDisplayRecords", resmap.get("counts") == null ? "0"
				: resmap.get("counts"));
		resmap.put("iTotalRecords",
				resmap.get("counts") == null ? "0" : resmap.get("counts"));
		Map<String, Object> dmap = new HashMap<String, Object>();//
//		dmap = client.callClient("qdclam",map );
		resmap.put("wcouts",dmap.get("wcouts"));
		return resmap;
	}
	
	/**
	 * @author LiuTao @date 2018年5月7日 下午7:46:26 
	 * @Title: reGetMenu 
	 * @Description: TODO(根据sifsysAuth查询子项) 
	 * @param tmp 权限模板
	 * @param rank 层级
	 * @param fuMenu 父级菜单权限
	 * @param flag 是否控制权限 true控制权限 false不控制
	 * @return
	 */
	private List<SifSysAuth> reGetMenu(SifSysAuth tmp, int rank,List<SifSysAuth>  fuMenu,Boolean flag) {
		// 取1级菜单		
		List<SifSysAuth> delList = new ArrayList<SifSysAuth>();// list 遍历元素时不允许删除元素，创建一个List用于储存删除的元素，遍历后集中集中删除
		/**
		 * 循环遍历这一级菜单，分别获取下一级级菜单
		 */
			for (SifSysAuth sifSysAuth : fuMenu) {// 循环处理父菜单
				/**
				 * 判断user是否拥有权限
				 * 无父级菜单权限，子菜单权限无效
				 */
				if (strInArray(sifSysAuth.getAuthCd(), strs)&&flag) { 
					delList.add(sifSysAuth);// 放入删除List中
					continue;
				}
				tmp.setRank(rank + 1);// 取下一级菜单级菜单
				tmp.setParentAuthCd(sifSysAuth.getAuthCd());// 设置父级cd
				List<SifSysAuth> ziMenu = new ArrayList<SifSysAuth>();
				ziMenu.addAll(sifSysAuthService.queryEntitiesByTemplateWithSort(tmp,sort));
				if (ziMenu.size() > 0) {
					sifSysAuth.setChildren(reGetMenu(tmp, tmp.getRank(),ziMenu,flag));// 递归处理
					sifSysAuth.setHaschild("Y");
				}
			}
		fuMenu.removeAll(delList);
		return fuMenu;
	}
	/**
	 * @author LiuTao @date 2018年5月7日 下午7:45:42 
	 * @Title: strInArray 
	 * @Description: TODO(判断字符串数组是否包含字符串) 
	 * @param str
	 * @param strs
	 * @return
	 */
	private boolean strInArray(String str, String[] strs) {
		for (int i = 0; i < strs.length; i++) {
			if (str.equals(strs[i])) {
				return false;
			}
		}
		return true;
	}
}
