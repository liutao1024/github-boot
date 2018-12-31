package com.example.demo.login.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="home-main")//一个@RequestMapping添加多个value值value={"auth","boot-path"}
public class HomeController {
	//打印日志工具
	public static Logger logger = LoggerFactory.getLogger(HomeController.class);
	/**
	 * 不写在LoginController中是因为LoginController中用@ResponseBody注解导致页面显示的不是想要的登录页面,
	 * 而是字符串login
	 * @author LiuTao @date 2018年5月1日 上午10:44:13 
	 * @Title: loginController 
	 * @Description: TODO(登录页面Controller) 
	 * @return
	 */
	@RequestMapping(value="/login")
	public String loginController(){
		return "login";
	}
	
	/**
	 * @author LiuTao @date 2018年5月1日 上午11:17:04 
	 * @Title: index 
	 * @Description: TODO(登录成功后首页显示) 
	 * @return
	 */
	@RequestMapping("/index")
	public String indexController(){
		return "index";
	}
}
