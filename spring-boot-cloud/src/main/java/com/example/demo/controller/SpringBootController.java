package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author LiuTao @date 2018年4月17日 下午2:59:19
 * @ClassName: SpringBootController 
 * @Description: TODO(Describe)
 */
@Controller
@RestController
public class SpringBootController {
	@RequestMapping("/hello")
	public String TestController(){
		return "helloLiutao";
	}
}
