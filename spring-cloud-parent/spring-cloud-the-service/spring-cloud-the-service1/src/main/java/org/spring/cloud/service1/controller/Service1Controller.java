package org.spring.cloud.service1.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Service1Controller {
	private Logger logger = LoggerFactory.getLogger(Service1Controller.class);
   
	@Value("${server.port}")//从配置文件中获取配置参数--tips
    String port;
	@RequestMapping(value = "/sayhi")
    public String sayHi(@RequestParam(value = "name", defaultValue = "Spring") String name){
    	return "Hi "+ name +", I am from Service1 " + port;
    }
	
	@RequestMapping(value = "/sayhello")
    public String sayHello() {
        return "Service1 Controller Hello";
    }
	
	@Autowired
    private DiscoveryClient discoveryClient;
	
	@RequestMapping(value = "/hello")
    public String hello(){
        List<String> services = discoveryClient.getServices();
        for(String s : services){
        	logger.info(s);
        }
        return "hello spring cloud!";
    }

    @RequestMapping(value = "/nice")
    public String nice(){
        List<String> services = discoveryClient.getServices();
        for(String s : services){
        	logger.info("gogogo " + s);
        }
        return "nice to meet you!";
    }
}