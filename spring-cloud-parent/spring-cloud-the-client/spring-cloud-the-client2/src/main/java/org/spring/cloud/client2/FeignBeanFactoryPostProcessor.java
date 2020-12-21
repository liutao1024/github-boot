package org.spring.cloud.client2;

//import java.util.Arrays;
//
//import org.springframework.beans.BeansException;
//import org.springframework.beans.factory.config.BeanDefinition;
//import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
//import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
//import org.springframework.stereotype.Component;

/**
 * @Author LiuTao @Date 2020年12月21日 下午6:22:14
 * @ClassName: FeignBeanFactoryPostProcessor 
 * @Description: http://c.biancheng.net/view/5357.html
 */
//@Component
public class FeignBeanFactoryPostProcessor/* implements BeanFactoryPostProcessor*/ {

//    @Override
//    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
//        if (containsBeanDefinition(beanFactory, "feignContext", "eurekaAutoServiceRegistration")) {
//            BeanDefinition bd = beanFactory.getBeanDefinition("feignContext");
//            bd.setDependsOn("eurekaAutoServiceRegistration");
//        }
//    }
//
//    private boolean containsBeanDefinition(ConfigurableListableBeanFactory beanFactory, String... beans) {
//        return Arrays.stream(beans).allMatch(b -> beanFactory.containsBeanDefinition(b));
//    }
}