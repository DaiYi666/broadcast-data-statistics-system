package com.scfenzhi.advice;

import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.utils.ResponseCode;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.*;

/**
 * @author DaiYi
 * @Date 2021/4/8 17:49
 */
@RestControllerAdvice
public class ExceptionAdvice {
    @ExceptionHandler(value = ConstraintViolationException.class)
    public CommonResult<ConstraintViolationException> constraintViolationExceptionHandler(ConstraintViolationException exception) {
        CommonResult<ConstraintViolationException> commonResult = new CommonResult<>();
        commonResult.setResponseCode(ResponseCode.PARAMETER_INVALID);
        commonResult.setMessage("parameter invalid");
        commonResult.setData(exception);
        return commonResult;
    }


    @ExceptionHandler(value = Exception.class)
    public CommonResult<Exception> exceptionHandler(Exception exception) {
        CommonResult<Exception> commonResult = new CommonResult<>();
        commonResult.setResponseCode(ResponseCode.FAILED);
        commonResult.setMessage("server exception");
        commonResult.setData(exception);
        return commonResult;
    }

}
