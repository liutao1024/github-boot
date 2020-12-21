package org.spring.cloud.client2;

import java.util.List;

import com.netflix.loadbalancer.ILoadBalancer;
import com.netflix.loadbalancer.IRule;
import com.netflix.loadbalancer.Server;

public class MyRule implements IRule {
    private ILoadBalancer ilb;
    @Override
    public Server choose(Object key) {
        List<Server> servers = ilb.getAllServers();
        for (Server server : servers) {
            System.out.println(server.getHostPort());
        }
        return servers.get(0);
    }
    @Override
    public void setLoadBalancer(ILoadBalancer ilb) {
        this.ilb = ilb;
    }
    @Override
    public ILoadBalancer getLoadBalancer() {
        return ilb;
    }
}