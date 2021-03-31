package com.scfenzhi.service;

import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.User;

import javax.servlet.http.HttpSession;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:55
 */
public interface UserService {

    CommonResult<Boolean> authentication(User user, HttpSession session);

    CommonResult<Integer> addUser(User user);

}
