package org.spring.cloud.service2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

//@EnableEurekaClient
@EnableDiscoveryClient
@SpringBootApplication
public class Service2Application {
	public static void main(String[] args) {
		SpringApplication.run(Service2Application.class, args);
	}
}
