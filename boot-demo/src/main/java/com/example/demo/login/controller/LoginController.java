package com.example.demo.login.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.demo.entity.User;
import com.example.demo.entity.repository.UserRepository;
import com.example.demo.sunline.domain.SifLockUser;
import com.example.demo.sunline.domain.SysUser;
import com.example.demo.sunline.repository.SifLockUserRepository;
import com.example.demo.sunline.utils.Digests;

@Controller
@RequestMapping(value="auth")
@ResponseBody /**ResponseBody 支持json配置主要是ajax通讯时需要加这个,不然ajax不通*/
@SessionAttributes("SysUser")
public class LoginController {
	private static Logger logger = LoggerFactory.getLogger(LoginController.class);
	@Autowired
	private SifLockUserRepository sifLockUserRepository;
	@Autowired
	private UserRepository userRepository;
	
	/**
	 * @author LiuTao @date 2018年4月29日 下午3:08:56 
	 * @Title: login 
	 * @Description: TODO(登录页面点击登录按钮校验用户信息) 
	 * @param user
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/logincheck")
	public Map<String, Object> loginCheckController(@RequestBody SysUser sysUser, Model model) {
		Map<String, Object> map = new HashMap<String, Object>();
		Map<String, Object> resmap = new HashMap<String, Object>();
		map.put("userid", sysUser.getUserid());
		map.put("passwd", Digests.GetMD5Code(sysUser.getPasswd()));
		map.put("pswdfg", sysUser.getPswdfg());
		SifLockUser lockUser = sifLockUserRepository.getSifLockUser(sysUser.getUserid());
		List<User> userList = userRepository.findAll();
		for(User user : userList){
			String id = user.getId();
			System.out.println(id);
		}
		if(lockUser != null && "1".equals(lockUser.getStatus())){
			resmap.put("ret", "failure");
			resmap.put("msg", "柜员"+sysUser.getUserid()+"为"+lockUser.getGropna()+",不允许登录!");
			return resmap;
		}
		/******
		 * 此处需要用自己写一个调用数据库的查询校验方法
		 */
//		Map<String, Object> rstMap = DaoUtil.selectOneByPrimaryKey("sys_user", map);
//		SysUser checkSysUser = new SysUser();
//		checkSysUser.setBrchno(rstMap.get(checkSysUser.getBrchno().toString()));
//		rstMap
		// 通讯
//		resmap = client.callClient("userin", map);//
//		if (resmap.get("retCode").toString().equals("0000") ) {
//			logger.debug("------------------用户登陆-----------------"+resmap.toString());
//			user.setUserna(resmap.get("userna").toString());
//			user.setSystdt(resmap.get("systdt").toString());
//			user.setBrchno(resmap.get("brchno").toString());
//			resmap.put("ret", "success");
//			resmap.put("msg", "登陆成功");
//			model.addAttribute("User", user);//写入session
//		} else {			
//			resmap.put("msg", resmap.get("retMsg").toString());
//		}
		resmap.put("ret", "success");
		resmap.put("msg", "登陆成功");
		model.addAttribute("SysUser", sysUser);//写入session
		
		return resmap;
	}
	
	/**
	 * @author LiuTao @date 2018年5月1日 上午10:34:47 
	 * @Title: reset 
	 * @Description: TODO(重置按钮响应) 
	 * @return
	 */
	@RequestMapping(value="/reset")
	public Map<String, Object> resetController(@RequestBody SysUser sysUser){
		logger.debug("------------------用户重置状态接口开始-----------------");
		Map<String, Object> resmap = new HashMap<String, Object>();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userid", sysUser.getUserid());
		map.put("passwd", Digests.GetMD5Code(sysUser.getPasswd()));
		map.put("usercd", sysUser.getUserid());
//		resmap = client.callClient("pbuslg", map);
		if (resmap.get("retCode").toString().equals("0000")) {
			resmap.put("ret", "success");
			resmap.put("msg", "状态重置成功");
		} else {
			resmap.put("msg", resmap.get("retMsg").toString());	
		}
		logger.debug("------------------用户重置状态接口结束-----------------");
		return resmap;
	}
	
}
