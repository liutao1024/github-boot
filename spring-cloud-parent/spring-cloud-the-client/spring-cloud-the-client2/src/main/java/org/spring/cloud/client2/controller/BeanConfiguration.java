package org.spring.cloud.client2.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class BeanConfiguration {
//	@LoadBalanced
	@Bean
	public RestTemplate getRestTemplate() {//简单便捷的模板类来进行 API 的调用
		return new RestTemplate();
	}
}
