package com.scfenzhi.filter;

import com.scfenzhi.pojo.User;
import com.scfenzhi.pojo.UserType;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @author DaiYi
 * @Date 2021/3/31 16:06
 */
@Slf4j
public class IdentityFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user == null) {
            log.info("未登录");
            ((HttpServletResponse) servletResponse).sendRedirect("/index.html");
        } else if (UserType.ADMINISTRATOR.equals(user.getUserType())) {
            log.info("管理员用户登录");
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            log.info("其他用户登录");
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }
}
