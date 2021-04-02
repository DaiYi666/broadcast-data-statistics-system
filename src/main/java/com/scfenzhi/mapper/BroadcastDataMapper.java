package com.scfenzhi.mapper;

import com.scfenzhi.pojo.BroadcastData;
import com.scfenzhi.pojo.CommonResult;
import com.scfenzhi.pojo.Compere;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/4
 */
@Mapper
public interface BroadcastDataMapper {
    /**
     * @param date 日期
     * @return 返回这一天的数据是否已经添加，已添加返回true，未添加返回false
     */
    boolean isRepeatAdd(@Param("date") String date, @Param("compereId") String compereId);

    /**
     * @param compereId 主播id
     * @return 根据主播id查询主播姓名
     */
    String getCompereNameById(@Param("compereId") String compereId);

    /**
     * @return 获取所有主播的id
     */
    List<Compere> getCompereList();

    /**
     * @param broadcastData 直播数据对象
     * @return 受印影响的行数
     */
    Integer addRecord(@Param("broadcastData") BroadcastData broadcastData);

    /**
     * @return 本月所有的数据
     */
    List<BroadcastData> getAllDataOfThisMonth();

}
