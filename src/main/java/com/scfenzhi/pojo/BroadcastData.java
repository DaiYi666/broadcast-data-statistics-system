package com.scfenzhi.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author DaiYi
 * @Date 2021/4/2 9:20
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BroadcastData<I, D> {
    /**
     * 主播姓名
     */
    private String compereName;
    /**
     * 支付订单
     */
    private I paidOrders;
    /**
     * 支付金额
     */
    private D paidAmount;
    /**
     * 订单UV
     */
    private D ordersUv;
    /**
     * 订单PV
     */
    private D ordersPv;
    /**
     * 新增关注
     */
    private I increasedAttention;
    /**
     * 直播间分享
     */
    private I shareStudio;
}
