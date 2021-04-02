package com.scfenzhi.utils;

import com.scfenzhi.pojo.BroadcastData;

import java.text.SimpleDateFormat;
import java.util.List;

/**
 * @author DaiYi
 * @create 2021/4/5
 */
public class DateFormatUtils {
    public static void formatTo(String pattern, BroadcastData broadcastData) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        broadcastData.setDate(simpleDateFormat.format(broadcastData.getDate()));
    }

    public static void formatTo(String pattern, List<BroadcastData> broadcastData) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        for (BroadcastData data : broadcastData) {
            data.setDate(simpleDateFormat.format(data.getDate()));
        }
    }
}
