package com.scfenzhi.utils;

import com.scfenzhi.pojo.BroadcastData;

import java.util.*;

/**
 * @author DaiYi
 * @create 2021/4/5
 */
public class DataParser {
    //                  数据系列                   主播姓名 数据集合
    public static HashMap<String, ArrayList<HashMap<String, Object>>> parse(List<BroadcastData> broadcastDataList) {
        HashMap<String, ArrayList<HashMap<String, Object>>> resultMap = new HashMap<>();
        resultMap.put("paidOrders", new ArrayList<>());
        resultMap.put("paidAmount", new ArrayList<>());
        resultMap.put("ordersUv", new ArrayList<>());
        resultMap.put("ordersPv", new ArrayList<>());
        resultMap.put("increasedAttention", new ArrayList<>());
        resultMap.put("shareStudio", new ArrayList<>());

//        将主播名称放入set集合中进行去重
        HashSet<String> compereNameSet = new HashSet<>();
        for (BroadcastData broadcastData : broadcastDataList) {
            compereNameSet.add(broadcastData.getCompereName());
        }

        for (Map.Entry<String, ArrayList<HashMap<String, Object>>> entry : resultMap.entrySet()) {
            for (String compereName : compereNameSet) {//这一层循环决定了有多少个主播
                HashMap<String, Object> map = new HashMap<>();//每个list集合里面的键是主播姓名，值是一个map，存储数据，
                ArrayList<Number> data = new ArrayList<>();//每个系列的值是一个list集合
                for (BroadcastData broadcastData : broadcastDataList) {//遍历取到的全部数据
                    if (compereName.equals(broadcastData.getCompereName())) {//判断是否和主播姓名相同
                        String key = entry.getKey();
                        if ("paidOrders".equals(key)) {
                            data.add(broadcastData.getPaidOrders());
                        } else if ("paidAmount".equals(key)) {
                            data.add(broadcastData.getPaidAmount());
                        } else if ("ordersUv".equals(key)) {
                            data.add(broadcastData.getOrdersUv());
                        } else if ("ordersPv".equals(key)) {
                            data.add(broadcastData.getOrdersPv());
                        } else if ("increasedAttention".equals(key)) {
                            data.add(broadcastData.getIncreasedAttention());
                        } else if ("shareStudio".equals(key)) {
                            data.add(broadcastData.getShareStudio());
                        }
                    }

                }
                map.put("name", compereName);
                map.put("data", data);
                entry.getValue().add(map);
            }
        }
        //这一层的循环次数决定了外层有多少个系列

        return resultMap;
    }
}
