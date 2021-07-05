package org.spring.cloud.client1.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spring.cloud.client1.service.Client1FeignService;
import org.spring.cloud.client1.service.Client1RibbonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Client1Controller {
	private Logger logger = LoggerFactory.getLogger(Client1Controller.class);
//	private static final String applicationName = "spring-cloud-the-service1";
	/**
	 * 整合Ribbon
	 */
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private Client1RibbonService client1RibbonService;

	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:02 
	 * @Title: sayHi 
	 * @Description: TODO(Describe) 
	 * @param name
	 * @return
	 */
	@GetMapping(value = "/sayHi")
	public String sayHi(@RequestParam String name) {
		String result = restTemplate.getForObject("http://spring-cloud-the-service1/sayHi?name="+name, String.class);
		logger.info(result);
		return result;
	}
	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:07 
	 * @Title: sayHi2 
	 * @Description: TODO(Describe) 
	 * @param name
	 * @return
	 */
	@GetMapping(value = "/sayHi2")
	public String sayHi2(@RequestParam String name) {
		return client1RibbonService.sayHi(name);
	}
	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:11 
	 * @Title: sayHello 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@GetMapping(value = "/sayHello")
	public String sayHello() {
		return client1RibbonService.sayHello();
	}
	@GetMapping(value = "/sayHello2")
	public String sayHello2() {
		String getResult = restTemplate.getForObject("http://192.168.0.101:8081/sayHello", String.class);
		String postResult = restTemplate.postForObject("http://192.168.0.101:8081/sayHello", null, String.class);
		logger.info(getResult);
		logger.info(postResult);
		return getResult;
	}
	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:28 
	 * @Title: hello 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@GetMapping(value = "/hello")
	public String hello() {
		return client1RibbonService.hello();
	}
	/**
	 * @Author LiuTao @Date 2020年11月5日 下午4:08:35 
	 * @Title: nice 
	 * @Description: TODO(Describe) 
	 * @return
	 */
	@GetMapping(value = "/nice")
	public String nice() {
		return client1RibbonService.hello();
	}
	
	
	
	@Autowired
	private Client1FeignService client1FeignService;
	@GetMapping(value = "/sayHi3")
	public String sayHi3(@RequestParam String name) {
		String result = this.client1FeignService.sayHiFromServiceOne(name);
		return result;
	}
}
