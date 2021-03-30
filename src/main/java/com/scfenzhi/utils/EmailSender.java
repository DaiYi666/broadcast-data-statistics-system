package com.scfenzhi.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.UUID;

@Component
public class EmailSender {

    @Resource
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    /**
     * 调用此方法，传入一个邮箱地址，会往这个邮箱发送一封验证码邮件
     *
     * @param emailAddress 邮箱地址
     * @return 验证码
     */
    public synchronized String sendEmailVerificationCode(String emailAddress) {
        String verificationCode = UUID.randomUUID().toString().substring(0, 5);
//        重新开启一个线程去发送邮件
        new Thread(() -> {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setFrom(sender);
            email.setTo(emailAddress);
            email.setSubject("邮件验证码");
            String content = String.format("尊敬的用户：\n\t您好！你的验证码是：%s，如非本人操作，请忽略。", verificationCode);
            email.setText(content);
            mailSender.send(email);
        }).start();

        return verificationCode;
    }
}
