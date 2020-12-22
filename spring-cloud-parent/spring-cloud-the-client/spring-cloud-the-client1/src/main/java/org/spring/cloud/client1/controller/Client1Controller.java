package org.spring.cloud.client1.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spring.cloud.client1.server.Client1FeignServer;
import org.spring.cloud.client1.server.Client1RibbonServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Client1Controller {
	private Logger logger = LoggerFactory.getLogger(Client1Controller.class);
//	private static final String applicationName = "service1";
	@Autowired
	private RestTemplate restTemplate;
	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:02 
	 * @Title: sayHi 
	 * @Description: TODO(Describe) 
	 * @param name
	 * @return
	 */
	@GetMapping(value = "/sayhi")
	public String sayHi(@RequestParam String name) {
		String result = restTemplate.getForObject("http://service1/sayhi?name="+name, String.class);
		logger.info(result);
		return result;
	}
	@GetMapping(value = "/sayhello")
	public String sayHello() {
		String getResult = restTemplate.getForObject("http://service1/sayhello", String.class);
		String postResult = restTemplate.postForObject("http://service1/sayhello", null, String.class);
		logger.info(getResult);
		logger.info(postResult);
		return getResult + "\t" + postResult;
	}
	/**
	 * 整合Ribbon
	 */
	@Autowired
	private Client1RibbonServer client1RibbonServer;
	@GetMapping(value = "/sayhi2")
	public String sayHi2(@RequestParam String name) {
		return client1RibbonServer.sayhi(name);
	}
	@GetMapping(value = "/sayhello2")
	public String sayHello2() {
		return client1RibbonServer.sayhello();
	}
	@GetMapping(value = "/hello")
	public String hello() {
		return client1RibbonServer.hello();
	}
	@GetMapping(value = "/nice")
	public String nice() {
		return client1RibbonServer.nice();
	}
	
	/**
	 * 整合Feign
	 */
	@Autowired
	private Client1FeignServer client1FeignServer;
	@GetMapping(value = "/sayhi3")
	public String sayHi3(@RequestParam String name) {
		String result = client1FeignServer.sayHiFromServiceOne(name);
		return result;
	}
}
