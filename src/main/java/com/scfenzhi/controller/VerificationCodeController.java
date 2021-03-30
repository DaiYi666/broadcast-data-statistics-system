package com.scfenzhi.controller;

import com.scfenzhi.utils.EmailSender;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@Slf4j
public class VerificationCodeController {

    @Resource
    private EmailSender emailSender;

    @PostMapping("/sendVerificationCode")
    public void sendVerificationCode(String emailAddress, HttpSession session) {
        String verificationCode = emailSender.sendEmailVerificationCode(emailAddress);
        session.setAttribute("verificationCode", verificationCode);
    }

    @GetMapping("/getVerificationCode")
    public String getVerificationCode(HttpSession session) {
        Object verificationCode = session.getAttribute("verificationCode");
        return verificationCode == null ? "" : verificationCode.toString();
    }


    public void test(HttpServletRequest request){

    }
}
