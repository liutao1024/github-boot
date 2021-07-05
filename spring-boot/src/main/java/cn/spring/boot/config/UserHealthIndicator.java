package cn.spring.boot.config;

import org.springframework.boot.actuate.health.AbstractHealthIndicator;
import org.springframework.boot.actuate.health.Health.Builder;
import org.springframework.stereotype.Component;

@Component
public class UserHealthIndicator extends AbstractHealthIndicator {
    @Override
    protected void doHealthCheck(Builder builder) throws Exception {
        builder.up().withDetail("status", true);
        // builder.down().withDetail("status", false);
    }
}