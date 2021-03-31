package com.scfenzhi.configuration;

import com.scfenzhi.filter.EquipmentFilter;
import com.scfenzhi.filter.IdentityFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean<EquipmentFilter> requestResFilter() {
        FilterRegistrationBean<EquipmentFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new EquipmentFilter());
        filterRegistrationBean.addUrlPatterns("/");//配置过滤规则 　　　　 return filterRegistrationBean;
        filterRegistrationBean.setOrder(1);
        return filterRegistrationBean;
    }

    @Bean
    public FilterRegistrationBean<IdentityFilter> reqResFilter() {
        FilterRegistrationBean<IdentityFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new IdentityFilter());
        filterRegistrationBean.addUrlPatterns("/admin/*");
        filterRegistrationBean.addUrlPatterns("/workbench/*");//配置过滤规则
        filterRegistrationBean.setOrder(2);
        return filterRegistrationBean;
    }
}