package org.spring.cloud.client1.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 使用@FeignClient("spring-cloud-the-service1")注解绑定spring-cloud-the-service1服务,
 * 还可以使用url参数指定一个URL.
 *
 * Feign是一个声明式的web service客户端,它使得编写web service客户端更为容易.
 * 创建接口,为接口添加注解,即可使用Feign.
 * Feign可以使用Feign注解或者JAX-RS注解,还支持热插拔的编码器和解码器.
 * Spring Cloud为Feign添加了Spring MVC的注解支持,并整合了Ribbon和Eureka来为使用Feign时提供负载均衡.
 * 使用@EnableFeignClients开启Feign
 * 
 * 简而言之：
 * a. Feign 采用的是基于接口的注解
 * b. Feign 整合了ribbon,具有负载均衡的能力
 * c. 整合了Hystrix,具有熔断的能力
 */
@FeignClient(name = "spring-cloud-the-service1")
public interface Client1FeignService {
	// 定义代码调用对方服务的"/sayHi"接口
	@RequestMapping(value = "/sayHi", method = RequestMethod.GET)
	String sayHiFromServiceOne(@RequestParam(value = "name") String name);

}
