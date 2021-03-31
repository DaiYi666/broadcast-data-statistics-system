package com.scfenzhi.controller;

import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.User;
import com.scfenzhi.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:46
 */

@RestController
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/authentication")
    public CommonResult<Boolean> authentication(@RequestBody User user) {
        return userService.authentication(user);
    }

    @PostMapping("/addUser")
    public CommonResult<Integer> addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

}
