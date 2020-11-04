package org.spring.cloud.service1.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Service1Controller {
	private Logger logger = LoggerFactory.getLogger(Service1Controller.class);
	
	@GetMapping("/user/hello")
    public String sayHello() {
        return "Service1Controller Hello";
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
        	logger.info("gogogo" + s);
        }
        return "nice to meet you!";
    }
}