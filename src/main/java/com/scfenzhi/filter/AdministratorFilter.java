package com.scfenzhi.filter;

import com.scfenzhi.pojo.User;
import com.scfenzhi.utils.UserType;
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
public class AdministratorFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user == null) {
            log.warn("not logged in");
            ((HttpServletResponse) servletResponse).sendRedirect("/index.html");
        } else if (UserType.ADMINISTRATOR.equals(user.getUserType())) {
            log.info(user.toString());
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            log.info("not ths administrator" + user);
        }
    }
}
