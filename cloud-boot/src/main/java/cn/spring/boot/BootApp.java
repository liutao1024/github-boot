package cn.spring.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cn.spring.boot.global.StartCommand;
/**
 * @Author LiuTao @Date 2020年11月3日 上午10:46:56
 * @ClassName: App 
 * @Description: 启动类使用了 @SpringBootApplication 注解
 * 这个注解表示该类是一个 Spring Boot 应用。直接运行 App 类即可启动，启动成功后在控制台输出信息，默认端口是 8080
 * 在application.properties中配置端口8012
 */
@SpringBootApplication
public class BootApp {
	public static void main(String[] args) {
		// 启动参数设置, 比如自动生成端口
        new StartCommand(args);
		SpringApplication.run(BootApp.class, args);
	}
}
