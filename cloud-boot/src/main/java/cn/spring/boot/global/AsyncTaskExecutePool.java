package cn.spring.boot.global;

import java.lang.reflect.Method;
import java.util.concurrent.Executor;
import java.util.concurrent.ThreadPoolExecutor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

public class AsyncTaskExecutePool implements AsyncConfigurer {
	private Logger logger = LoggerFactory.getLogger(AsyncTaskExecutePool.class);
	@Autowired
	private TaskThreadPoolConfig config;

	@Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(config.getCorePoolSize());
        executor.setMaxPoolSize(config.getMaxPoolSize());
        executor.setQueueCapacity(config.getQueueCapacity());
        executor.setKeepAliveSeconds(config.getKeepAliveSeconds());
        executor.setThreadNamePrefix(config.getThreadNamePrefix());
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.initialize();
        return executor;
    }

	@Override
	public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
		// 异步任务中异常处理
		return new AsyncUncaughtExceptionHandler() {
			@Override
			public void handleUncaughtException(Throwable arg0, Method arg1, Object... arg2) {
				logger.error("==========================" + arg0.getMessage() + "=======================", arg0);
				logger.error("exception method:" + arg1.getName());
			}
		};
	}
}
