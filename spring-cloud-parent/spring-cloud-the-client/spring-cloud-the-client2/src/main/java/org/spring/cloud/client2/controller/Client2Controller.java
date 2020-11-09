package org.spring.cloud.client2.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Client2Controller {
	private Logger logger = LoggerFactory.getLogger(Client2Controller.class);
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
	

	@GetMapping(value = "/sayhello2")
	public String sayHello2() {
		String getResult = restTemplate.getForObject("http://192.168.1.106:8081/sayhello", String.class);
		String postResult = restTemplate.postForObject("http://192.168.1.106:8081/sayhello", null, String.class);
//		String putResult = restTemplate.put(url, request, uriVariables);
//		String deleteResult = restTemplate.delete(url, uriVariables);
//		String exchangeResult = restTemplate.exchange(url, method, requestEntity, responseType, uriVariables);
//		String executeResult = restTemplate.execute(url, method, requestCallback, responseExtractor, uriVariables);
//		String headForHeadersResult = restTemplate.headForHeaders(url, uriVariables);
		logger.info(getResult);
		logger.info(postResult);
		return getResult;
	}
}
