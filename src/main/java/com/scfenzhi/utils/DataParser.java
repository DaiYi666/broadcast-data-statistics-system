package com.scfenzhi.utils;

import com.scfenzhi.pojo.BroadcastData;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/5
 */
public class DataParser<T> {
    public HashMap<String, ArrayList<T>> parse(List<BroadcastData> broadcastDataList) {
        HashSet<String> compereNameSet = new HashSet<>();//用于存储主播姓名

        HashMap<String, ArrayList<T>> entry = new HashMap<>();
        for (BroadcastData broadcastData : broadcastDataList) {
            compereNameSet.add(broadcastData.getCompereName());
        }

        for (String compereName : compereNameSet) {
            ArrayList<T> dataList = new ArrayList<>();
            for (BroadcastData broadcastData : broadcastDataList) {
                if (compereName.equals(broadcastData.getCompereName())) {
//                    dataList.add(broadcastData.get)
                }
            }
            entry.put(compereName, dataList);
        }

        return entry;
    }

    public static void main(String[] args) {

    }
}
