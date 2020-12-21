package org.spring.cloud.service2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient//作为服务注册到eureka中,表示当前服务是一个 Eureka 的客户端
//@EnableDiscoveryClient
@SpringBootApplication
public class Service2Application {
	public static void main(String[] args) {
		SpringApplication.run(Service2Application.class, args);
	}
}
