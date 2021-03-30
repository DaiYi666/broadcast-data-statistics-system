package com.scfenzhi.controller;

import com.scfenzhi.pojo.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:46
 */

@RestController
public class UserController {

    @PostMapping("/authentication")
    public void authentication(@RequestBody User user) {

    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {

    }

}
