package org.spring.cloud.client1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.Contract;
import feign.Logger;
import feign.Request;
//import feign.auth.BasicAuthRequestInterceptor;

/**
 * @Author LiuTao @Date 2020年12月22日 下午6:15:33
 * @ClassName: FeignConfiguration 
 * @Description: Feign配置
 * http://c.biancheng.net/view/5362.html
 */
@Configuration
public class FeignConfiguration {
	/**
     * Feign日志配置
     * 日志级别
     *	通过源码可以看到日志等级有 4 种,分别是:
     *	<p>	NONE：不输出日志。</p>
     *		BASIC：只输出请求方法的 URL 和响应的状态码以及接口执行的时间。
     *		HEADERS：将 BASIC 信息和请求头信息输出。
     *		FULL：输出完整的请求信息
     * @return
     */
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
    /**
     * Feign契约配置
     * 通过配置契约,在Spring Cloud中使用原生的注解来定义客户端
     * @return
     */
    @Bean
    public Contract feignContract() {
        return new feign.Contract.Default();
    }
    /**
     * Basic 认证配置
     * 接口调用需要权限控制时,启用Basic认证,或者自定义一个认证方式
     * (自定义一个请求拦截器,在请求之前做认证操作,然后往请求头中设置认证之后的信息.通过实现 RequestInterceptor接口来自定义认证方式)
     * @return
     */
//    @Bean
//    public BasicAuthRequestInterceptor basicAuthRequestInterceptor() {
//        return new BasicAuthRequestInterceptor("user", "password");
//    }
    @Bean
    public FeignBasicAuthRequestInterceptor basicAuthRequestInterceptor() {
    	return new FeignBasicAuthRequestInterceptor();
    }
    /**
     * 超时时间配置
     * 通过 Options 可以配置连接超时时间和读取超时时间（代码如下所示），
     * Options	第一个参数是连接超时时间（ms），默认值是 10×1000；
     * 			第二个是取超时时间（ms），默认值是 60×1000
     */
    @Bean
    public Request.Options options() {
        return new Request.Options(5000, 10000);
    }
    /**
     * 客户端组件配置
     * 	Feign 中默认使用 JDK 原生的 URLConnection 发送 HTTP 请求，
     * 	我们可以集成别的组件来替换掉 URLConnection，比如 Apache HttpClient，OkHttp。
     */
}
