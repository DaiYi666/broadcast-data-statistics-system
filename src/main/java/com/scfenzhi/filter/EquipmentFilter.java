package com.scfenzhi.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class EquipmentFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        String userAgent = ((HttpServletRequest) servletRequest).getHeader("User-Agent");
        System.out.println("设备类型：" + userAgent);
        if (userAgent.contains("Windows")) {
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            servletRequest.getRequestDispatcher("/errorPage/deviceErrorPage.html").forward(servletRequest, servletResponse);
        }
    }
}
