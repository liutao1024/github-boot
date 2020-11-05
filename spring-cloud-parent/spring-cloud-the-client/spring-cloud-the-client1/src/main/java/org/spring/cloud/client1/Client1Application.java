package org.spring.cloud.client1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
//import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
/**
 * @Author LiuTao @Date 2020年11月4日 上午11:18:10
 * @ClassName: ClientApplication 
 * @Description: 
 * 描述@EnableEurekaClient 声明此项目为一个 eureka 客户端,@EnableFeignClients 声明此项目可以使用 Feign.
 */
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
@EnableFeignClients
public class Client1Application {
	/**
     * 注入 RestTemplate 
     * 并用 @LoadBalanced 注解，用负载均衡策略请求服务提供者
     * 这是 Spring Ribbon 的提供的能力
     * @return
     */
	@Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    /**
     * @Author LiuTao @Date 2020年11月4日 上午9:42:24 
     * @Title: main 
     * @Description: TODO(Describe) 
     * @param args
     */
	public static void main(String[] args) {
		SpringApplication.run(Client1Application.class, args);
	}
}
