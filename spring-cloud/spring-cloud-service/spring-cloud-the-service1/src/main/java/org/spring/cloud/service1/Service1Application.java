package org.spring.cloud.service1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient//作为服务注册到eureka中,表示当前服务是一个 Eureka 的客户端
public class Service1Application {
	public static void main(String[] args) {
		SpringApplication.run(Service1Application.class, args);
	}
}
