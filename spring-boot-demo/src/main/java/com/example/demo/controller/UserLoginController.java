package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class UserLoginController {
	@RequestMapping(value="login")
	public String loginPage(){//首页登录界面
		return "login";
	}
	/**
	 * @author LiuTao @date 2018年4月18日 下午2:38:53 
	 * @Title: userLoginPage 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@RequestMapping(value="userLogin")
	public String userLoginPage(){//用户在首页点击登录按钮
		return "login";
	}
	
}
