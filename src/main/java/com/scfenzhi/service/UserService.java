package com.scfenzhi.service;

import com.scfenzhi.pojo.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:55
 */
public interface UserService {

    Integer authentication(User user);

    Integer addUser(User user);

}
