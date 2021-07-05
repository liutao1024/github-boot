package org.spring.cloud.client1.config;

import feign.RequestInterceptor;
import feign.RequestTemplate;

public class FeignBasicAuthRequestInterceptor implements RequestInterceptor {
    public FeignBasicAuthRequestInterceptor() {
    }
    @Override
    public void apply(RequestTemplate template) {
        // 业务逻辑
    }
}
