package org.spring.cloud.client;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;




import rx.Observable;

import com.google.common.collect.Lists;
import com.netflix.loadbalancer.ILoadBalancer;
import com.netflix.loadbalancer.LoadBalancerBuilder;
import com.netflix.loadbalancer.Server;
import com.netflix.loadbalancer.reactive.LoadBalancerCommand;
import com.netflix.loadbalancer.reactive.ServerOperation;

/**
 * @Author LiuTao @Date 2020年12月21日 下午4:07:05
 * @ClassName: RibbonTest 
 * @Description: TODO(Describe)
 */
public class RibbonTest {
	/**
	 * @Author LiuTao @Date 2020年12月21日 下午4:10:43 
	 * @Title: main 
	 * @Description: Ribbon消费者实现负债均衡
	 * @param args
	 */
	public static void main(String[] args) {
		// 服务列表
		List<Server> serverList = Lists.newArrayList(new Server("Service1", 8081), new Server("Service2", 8082));
		// 构建负载实例
		ILoadBalancer loadBalancer = LoadBalancerBuilder.newBuilder().buildFixedServerListLoadBalancer(serverList);
		// 调用 5 次来测试效果
		for (int i = 0; i < 5; i++) {
		    String result = LoadBalancerCommand.<String>builder().withLoadBalancer(loadBalancer).build()
		            .submit(new ServerOperation<String>() {
		                public Observable<String> call(Server server) {
		                    try {
		                        String addr = "http://" + server.getHost() + ":" + server.getPort() + "/sayhello";
		                        System.out.println(" 调用地址：" + addr);
		                        URL url = new URL(addr);
		                        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		                        conn.setRequestMethod("GET");
		                        conn.connect();
		                        InputStream in = conn.getInputStream();
		                        byte[] data = new byte[in.available()];
		                        in.read(data);
		                        return Observable.just(new String(data));
		                    } catch (Exception e) {
		                        return Observable.error(e);
		                    }
		                }
		            }).toBlocking().first();
		    System.out.println(" 调用结果：" + result);
		}
	}
}
