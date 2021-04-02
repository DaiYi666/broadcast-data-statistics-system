package com.scfenzhi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author DaiYi
 * @Date 2021/4/2 9:20
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BroadcastData {
    /**
     * 主播id
     */
    private String compereId;
    /**
     * 主播姓名
     */
    private String compereName;
    /**
     * 日期
     */
    private String date;
    /**
     * 班次
     */
    private String shift;
    /**
     * 支付订单
     */
    private Integer paidOrders;
    /**
     * 支付金额
     */
    private Double paidAmount;
    /**
     * 订单UV
     */
    private Double ordersUv;
    /**
     * 订单PV
     */
    private Double ordersPv;
    /**
     * 新增关注
     */
    private Integer increasedAttention;
    /**
     * 直播间分享
     */
    private Integer shareStudio;
    /**
     * 创建的时间
     */
    private Date createTime;
    /**
     * 跟新的时间
     */
    private Date updateTime;
}
