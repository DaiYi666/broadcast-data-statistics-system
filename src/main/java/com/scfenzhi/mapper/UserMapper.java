package com.scfenzhi.mapper;

import com.scfenzhi.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author DaiYi
 * @Date 2021/3/30 17:00
 */
@Mapper
public interface UserMapper {
    /**
     * @param email 邮箱
     * @return 如果为true表示邮箱已存在，false表示不存在
     */
    boolean checkEmailExist(@Param("email") String email);

    /**
     * @param user user对象
     * @return 如果验证成功返回true，反之则返回false
     */
    boolean authentication(@Param("user") User user);

    /**
     * @param user user对象
     * @return 受影响的行数
     */
    Integer addUser(@Param("user") User user);
}
