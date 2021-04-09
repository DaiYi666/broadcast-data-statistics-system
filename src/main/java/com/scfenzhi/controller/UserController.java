package com.scfenzhi.controller;

import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.User;
import com.scfenzhi.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:46
 */
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;


    @PostMapping("/authentication")
    public CommonResult<String> authentication(@RequestBody User user, HttpSession session) {
        return userService.authentication(user, session);
    }

    @PostMapping("/addUser")
    public CommonResult<Integer> addUser(@RequestBody User user) {
        return userService.addUser(user);
    }


    @GetMapping("/logOut")
    public void logOut(HttpSession session) {
        session.removeAttribute("user");
    }

}
