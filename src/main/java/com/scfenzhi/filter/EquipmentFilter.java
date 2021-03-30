package com.scfenzhi.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class EquipmentFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        String userAgent = ((HttpServletRequest) servletRequest).getHeader("User-Agent");
        System.out.println("设备类型：" + userAgent);
        if (userAgent.contains("Windows")){
            filterChain.doFilter(servletRequest,servletResponse);
        }else {
            servletRequest.getRequestDispatcher("/").forward(servletRequest,servletResponse);
        }

//        if (User_Agent.contains("Android") || User_Agent.contains("Linux")) {
//            System.out.println("Android移动客户端");
//            if (User_Agent.contains("MicroMessenger")) {
//                System.out.println("微信");
//            }
//        } else if (User_Agent.contains("iPhone")) {
//            System.out.println("iPhone移动客户端");
//            if (User_Agent.contains("MicroMessenger")) {
//                System.out.println("微信");
//            }
//        } else if (User_Agent.contains("iPad")) {
//            System.out.println("iPad客户端");
//            if (User_Agent.contains("MicroMessenger")) {
//                System.out.println("微信");
//            }
//        } else if (User_Agent.contains("Windows")) {
//            System.out.println("Windows");
//        }

    }
}
