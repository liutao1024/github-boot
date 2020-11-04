package org.spring.cloud.client1.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Client1Controller {
	private Logger logger = LoggerFactory.getLogger(Client1Controller.class);
//	private static final String applicationName = "cloud-service";
	@Autowired
	private RestTemplate restTemplate;
//	@Autowired
//  private IHelloService helloService;
	/**
	 * @Author LiuTao @Date 2020年11月3日 下午8:34:53 
	 * @Title: callHello 
	 * @Description: 访问不了
	 * @return
	 */
	@GetMapping("/article/callHello")
	public String callHello() {
		logger.info("====================");
		return restTemplate.getForObject("http://localhost:8081/user/hello", String.class);
	}
	@GetMapping("/article/callHello2")
	public String callHello2() {
		return restTemplate.getForObject("http://cloud-service/user/hello", String.class);
	}
	

	/**
	 * @Author LiuTao @Date 2020年11月4日 上午11:21:45 
	 * @Title: feignRequest 
	 * @Description:  Feign 的方式调用服务接口
	 * @return
	 */
//    @RequestMapping(value = "feignRequest")
//    public Object feignRequest(){
//    	logger.info("====================");
//        String s = helloService.nice();
//        return s;
//    }
//
//    @RequestMapping(value = "commonRequest")
//    public Object commonRequest(){
//        String url = "http://"+ applicationName +"/hello";
//        String s = restTemplate.getForObject(url,String.class);
//        return s;
//    }
}
