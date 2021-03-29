package com.scfenzhi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class VerificationCodeController {

    @GetMapping("/getVerificationCode")
    public String getVerificationCode() {
        return UUID.randomUUID().toString().substring(0, 5);
    }
}
