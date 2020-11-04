package cn.spring.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
/**
 * @Author LiuTao @Date 2020年11月3日 下午8:17:59
 * @ClassName: EurekaApplication 
 * @Description: TODO(Describe)
 * http://c.biancheng.net/view/5324.html
 * http://localhost:8761/
 */
@EnableEurekaServer
@SpringBootApplication
public class EurekaApplication {
	public static void main(String[] args) {
		SpringApplication.run(EurekaApplication.class, args);
	}
}
