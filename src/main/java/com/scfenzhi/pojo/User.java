package com.scfenzhi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author DaiYi
 * @Date 2021/3/30 16:48
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    private Integer id;
    private String email;
    private String password;
    private String userType;
    private Date registrationTime;
}
