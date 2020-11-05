package org.spring.cloud.eureka1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @Author LiuTao @Date 2020年11月3日 下午8:17:59
 * @ClassName: Eureka1Application
 * @Description: TODO(Describe) http://c.biancheng.net/view/5324.html
 *               http://localhost:8761/
 */
@SpringBootApplication
@EnableEurekaServer
public class Eureka1Application {
	public static void main(String[] args) {
		SpringApplication.run(Eureka1Application.class, args);
	}
}
