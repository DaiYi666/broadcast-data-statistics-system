package com.scfenzhi.service.impl;

import com.scfenzhi.mapper.UserMapper;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.User;
import com.scfenzhi.service.UserService;
import com.scfenzhi.utils.ResponseCode;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:59
 */
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public CommonResult<Boolean> authentication(User user, HttpSession session) {
        CommonResult<Boolean> responseResult = new CommonResult<>();
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        boolean isPassed = userMapper.authentication(user);
        if (isPassed) {
            responseResult.setResponseCode(ResponseCode.AUTHENTICATION_SUCCESSFUL);
            responseResult.setData(true);
            session.setAttribute("user", user);
        } else {
            responseResult.setResponseCode(ResponseCode.AUTHENTICATION_FAILED);
        }
        return responseResult;
    }

    @Override
    public CommonResult<Integer> addUser(User user) {
        boolean isExists = userMapper.checkEmailExist(user.getEmail());
        CommonResult<Integer> responseResult = new CommonResult<>();
        if (isExists) {
            responseResult.setResponseCode(ResponseCode.EMAIL_ALREADY_EXISTS);
        } else {
            user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
            Integer count = userMapper.addUser(user);
            responseResult.setResponseCode(ResponseCode.REGISTERED_SUCCESSFUL);
            responseResult.setData(count);
        }
        return responseResult;
    }
}
