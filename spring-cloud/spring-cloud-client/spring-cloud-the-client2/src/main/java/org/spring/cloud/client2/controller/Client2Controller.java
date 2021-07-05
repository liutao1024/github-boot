package org.spring.cloud.client2.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spring.cloud.client2.HouseInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class Client2Controller {
	private Logger logger = LoggerFactory.getLogger(Client2Controller.class);
	@Autowired
	private RestTemplate restTemplate;
//	@Autowired
//  private IHelloService helloService;
//	private static final String applicationName = "cloud-service";
	/**
	 * @Author LiuTao @Date 2020年11月3日 下午8:34:53 
	 * @Title: callHello 
	 * @Description: BeanConfiguration.java中不配置注解@LoadBalanced时callHello可调用,配置以后callHello2可调用
	 * @return
	 */
	@GetMapping("/article/call")
	public String call() {
		return "This is Client2Controller.java";
	}
	@GetMapping("/article/callHello")
	public String callHello() {
		logger.info("====================");
		return restTemplate.getForObject("http://service1:8081/hello", String.class);
	}
	@GetMapping("/article/callHello2")
	public String callHello2() {
		return restTemplate.getForObject("http://SERVICE1/hello", String.class);
	}
	
	/**
	 * @Author LiuTao @Date 2020年12月17日 下午6:26:57 
	 * @Title: sayHello2 
	 * @Description: 未验证如何使用 
	 * @return
	 */
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
	
	//
	
	@GetMapping("/call/data")
	public HouseInfo getData(@RequestParam("name") String name) {
	    return restTemplate.getForObject( "http://client2:8182/house/data?name="+ name, HouseInfo.class);
	}
	@GetMapping("/call/data/{name}")
	public String getData2(@PathVariable("name") String name) {
	    return restTemplate.getForObject( "http://client2:8182/house/data/{name}", String.class, name);
	}
	@GetMapping("/call/dataEntity")
	public HouseInfo getDataEntity(@RequestParam("name") String name) {
	    ResponseEntity<HouseInfo> responseEntity = restTemplate
	            .getForEntity("http://client2:8182/house/data?name=" + name, HouseInfo.class);
	    if (responseEntity.getStatusCodeValue() == 200) {
	        return responseEntity.getBody();
	    }
	    return null;
	}
	@GetMapping("/call/save")
	public Long add() {
	    HouseInfo houseInfo = new HouseInfo();
	    houseInfo.setLocaltion("上海");
	    houseInfo.setAddress("浦东");
	    houseInfo.setName("惠德新屯");
	    Long id = restTemplate.postForObject("http://localhost:8182/house/save", houseInfo, Long.class);
	    return id;
	}
}
