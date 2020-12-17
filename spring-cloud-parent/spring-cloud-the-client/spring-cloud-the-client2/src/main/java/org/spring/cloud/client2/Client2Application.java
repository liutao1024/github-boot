package org.spring.cloud.client2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
//import org.springframework.cloud.openfeign.EnableFeignClients;
/**
 * @Author LiuTao @Date 2020年11月4日 上午11:18:10
 * @ClassName: ClientApplication 
 * @Description: 
 * 描述@EnableEurekaClient 声明此项目为一个 eureka 客户端,@EnableFeignClients 声明此项目可以使用 Feign.
 */
@EnableDiscoveryClient
@SpringBootApplication
public class Client2Application {
    /**
     * @Author LiuTao @Date 2020年11月4日 上午9:42:24 
     * @Title: main 
     * @Description: TODO(Describe) 
     * @param args
     */
	public static void main(String[] args) {
		SpringApplication.run(Client2Application.class, args);
	}
}
