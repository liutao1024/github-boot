package org.spring.cloud.eureka1.security;

import org.springframework.cloud.netflix.eureka.server.event.EurekaInstanceCanceledEvent;
import org.springframework.cloud.netflix.eureka.server.event.EurekaInstanceRegisteredEvent;
import org.springframework.cloud.netflix.eureka.server.event.EurekaInstanceRenewedEvent;
import org.springframework.cloud.netflix.eureka.server.event.EurekaRegistryAvailableEvent;
import org.springframework.cloud.netflix.eureka.server.event.EurekaServerStartedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.netflix.appinfo.InstanceInfo;
/**
 * @Author LiuTao @Date 2020年12月21日 下午3:28:03
 * @ClassName: EurekaStateChangeListener 
 * @Description: Eureka 中提供了事件监听的方式来扩展
 */
@Component
public class EurekaStateChangeListener {
	
	/**
	 * @Author LiuTao @Date 2020年12月21日 下午3:18:14 
	 * @Title: listen 
	 * @Description: 注册中心启动通知 
	 * @param event
	 */
	@EventListener
	public void listen(EurekaRegistryAvailableEvent event) {
		System.err.println("注册中心启动 ");
	}
	
	/**
	 * @Author LiuTao @Date 2020年12月21日 下午3:18:41 
	 * @Title: listen 
	 * @Description: Eureka服务启动通知
	 * @param event
	 */
	@EventListener
	public void listen(EurekaServerStartedEvent event) {
		System.err.println("Eureka Server启动成功 ");
	}
    
    /**
     * @Author LiuTao @Date 2020年12月21日 下午3:17:31 
     * @Title: listen 
     * @Description: Client注册通知
     * @param event
     */
    @EventListener
    public void listen(EurekaInstanceRegisteredEvent event) {
        InstanceInfo instanceInfo = event.getInstanceInfo();
        System.err.println(instanceInfo.getInstanceId() + "\t" + instanceInfo.getAppName() + " 进行注册 ");
    }

    /**
     * @Author LiuTao @Date 2020年12月21日 下午3:18:02 
     * @Title: listen 
     * @Description: Client续约通知 
     * @param event
     */
    @EventListener
    public void listen(EurekaInstanceRenewedEvent event) {
        System.err.println(event.getServerId() + "\t" + event.getAppName() + " 服务进行续约 ");
    }

	/**
	 * @Author LiuTao @Date 2020年12月21日 下午3:17:47 
	 * @Title: listen 
	 * @Description: Client下线通知 
	 * @param event
	 */
    @EventListener
    public void listen(EurekaInstanceCanceledEvent event) {
        System.err.println(event.getServerId() + "\t" + event.getAppName() + " 服务下线 ");
    }
}
