package org.spring.cloud.client2;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class BeanConfiguration {

	/**
     * 注入 RestTemplate 
     * 并用 @LoadBalanced 注解,用负载均衡策略请求服务提供者
     * 这是 Spring Ribbon 的提供的能力
     * 增加@LoadBalanced能够让RestTemplate具备负载均衡能力
     * @return
     */
	@Bean
	@LoadBalanced //这个注解会自动构造 LoadBalancerClient 接口的实现类并注册到 Spring 容器中
	public RestTemplate getRestTemplate() {//简单便捷的模板类来进行 API 的调用
		return new RestTemplate();
	}
}
