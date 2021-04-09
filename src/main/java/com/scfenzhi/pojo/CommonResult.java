package com.scfenzhi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author DaiYi
 * @Date 2021/3/31 10:54
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Component
public class CommonResult<T> {
    private int responseCode;
    private String message;
    private T data;
}
