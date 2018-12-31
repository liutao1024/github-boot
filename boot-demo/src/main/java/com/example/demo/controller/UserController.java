package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="boot-demo")
public class UserController {
	public static Logger logger = LoggerFactory.getLogger(UserController.class);
	
	/**
	 * @author LiuTao @date 2018年4月13日 下午1:56:20 
	 * @Title: cartogram 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@RequestMapping(value="/cartogram")
	public String cartogram(){
//		BigDecimal bigDecimal = BigDecimal.ONE;
//		logger.info(bigDecimal.toString());
		return "cartgoram";
	}
	/**
	 * @author LiuTao @date 2018年4月13日 下午1:56:51 
	 * @Title: infoController 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@RequestMapping(value="/info")
	public String infoController(){
//		BigDecimal bigDecimal = BigDecimal.ONE;
//		logger.info(bigDecimal.toString());
		return "info";
	}
	
}
