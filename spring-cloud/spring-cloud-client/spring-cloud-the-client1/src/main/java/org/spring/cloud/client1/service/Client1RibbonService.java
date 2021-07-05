package org.spring.cloud.client1.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Ribbon是Netflix发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将Netflix的中间层服务连接在一起。
 * Ribbon客户端组件提供一系列完善的配置项如连接超时，重试等。
 * 简单的说，就是在配置文件中列出Load Balancer后面所有的机器，Ribbon会自动的帮助你基于某种规则（如简单轮询，随机连接等）去连接这些机器。
 * 我们也很容易使用Ribbon实现自定义的负载均衡算法。简单地说，Ribbon是一个客户端负载均衡器。
 * 
 * Ribbon工作时分为两步：
 * 第一步先选择 Eureka Server,它优先选择在同一个Zone且负载较少的Server；
 * 第二步再根据用户指定的策略，在从Server取到的服务注册列表中选择一个地址。
 * 
 * 其中Ribbon提供了多种策略，例如轮询、随机、根据响应时间加权等。
 */

@Service
public class Client1RibbonService {
	@Autowired
	private RestTemplate restTemplate;
	private Logger logger = LoggerFactory.getLogger(Client1RibbonService.class);

	public String sayHi(String name) {
		String result = restTemplate.getForObject("http://spring-cloud-the-service1/sayHi?name=" + name, String.class);
		logger.info(result);
		return result;
	}
	public String sayHello() {
		String result = restTemplate.getForObject("http://spring-cloud-the-service1/sayHello", String.class);
		logger.info(result);
		return result;
	}
	public String hello(){
		String result = restTemplate.getForObject("http://spring-cloud-the-service1/hello", String.class);
		return result;
	}
	public String nice(){
		String result = restTemplate.getForObject("http://spring-cloud-the-service1/nice", String.class);
		return result;
	}
}
