package com.scfenzhi.service;

import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.User;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:55
 */
public interface UserService {

    CommonResult<Boolean> authentication(User user);

    CommonResult<Integer> addUser(User user);

}
