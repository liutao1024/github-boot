package com.example.demo.controller;

import java.util.logging.Logger;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JavaController {
	public static final Logger logger = Logger.getGlobal();
	/**
	 * @author LiuTao @date 2018年4月9日 下午4:18:57 
	 * @Title: HelloController 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public String HelloController(){
		return "Hello I'am HelloController";
	}
	/**
	 * @author LiuTao @date 2018年4月9日 下午4:19:00 
	 * @Title: HiController 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@RequestMapping(value="/hi",method=RequestMethod.GET)
	public String HiController(){
		return "Hi I'am HiController!";
	}
}
