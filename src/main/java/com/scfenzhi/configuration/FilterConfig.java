package com.scfenzhi.configuration;

import com.scfenzhi.filter.EquipmentFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean<EquipmentFilter> reqResFilter() {
        FilterRegistrationBean<EquipmentFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new EquipmentFilter());
        filterRegistrationBean.addUrlPatterns("/*");//配置过滤规则 　　　　 return filterRegistrationBean;
        return filterRegistrationBean;
    }
}