package com.scfenzhi.configuration;

import com.scfenzhi.filter.AdministratorFilter;
import com.scfenzhi.filter.EquipmentFilter;
import com.scfenzhi.filter.OtherUserFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {
    @Bean
    public FilterRegistrationBean<EquipmentFilter> requestResFilter() {
        FilterRegistrationBean<EquipmentFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new EquipmentFilter());
        filterRegistrationBean.addUrlPatterns("/");//配置过滤规则 　　　　 return filterRegistrationBean;
        return filterRegistrationBean;
    }


    @Bean
    public FilterRegistrationBean<OtherUserFilter> identityFilterOfOther() {
        FilterRegistrationBean<OtherUserFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new OtherUserFilter());
        filterRegistrationBean.addUrlPatterns("/workbench/*","/broadcastData/*");
        return filterRegistrationBean;
    }

    @Bean
    public FilterRegistrationBean<AdministratorFilter> identityFilterOfAdministrator() {
        FilterRegistrationBean<AdministratorFilter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new AdministratorFilter());
        filterRegistrationBean.addUrlPatterns("/admin/*");
        return filterRegistrationBean;
    }

}