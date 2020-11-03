package cn.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ClientController {
	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/article/callHello")
	public String callHello() {
		return restTemplate.getForObject("http://localhost:8081/user/hello", String.class);
	}
	@GetMapping("/article/callHello2")
	public String callHello2() {
		return restTemplate.getForObject("http://cloud-service/user/hello", String.class);
	}
}
