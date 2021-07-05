package cn.spring.boot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.spring.boot.config.MyConfig;

/**
 * @Author LiuTao @Date 2020年11月3日 上午10:47:26
 * @ClassName: HelloControl 
 * @Description: @RestController 是 @Controller 和 @ResponseBody 的组合注解，可以直接返回 Json 格式数据
 */
@RestController
public class HelloController {
	/**
	 * @Author LiuTao @Date 2020年11月3日 上午10:49:50 
	 * @Title: hello 
	 * @Description: @GetMapping 其实就是 @RequestMapping（method=RequestMethod.GET），
	 * 通过访问 http://localhost:8080/hello 可以看到输出的结果“hello” 
	 * @return
	 */
	@GetMapping("/hello")
	public String printHelloWorld() {
		return "helloWorld!";
	}
	@Autowired
	private Environment env;
	/**
	 * @Author LiuTao @Date 2020年11月3日 上午10:57:39 
	 * @Title: getEnvironment 
	 * @Description: 通过 Environment 的 getProperty 方法来获取想要的配置信息 
	 * @return
	 */
	@GetMapping("/env")
	public String getEnvironment() {
		String port = env.getProperty("server.port");
		return port;
	}
	/**
	 * @Value注入配置
	 */
    @Value("${server.port}")
    private String port;
    @GetMapping("/value")
    public String getValue() {
        return port;
    }
    /**
     * 自定义配置类
     */
    @Autowired
    private MyConfig myConfig;
    @GetMapping("/myconfig")
    public String hello() {
        return myConfig.getName();
    }
}
